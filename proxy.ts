import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Gate /admin/* behind HTTP Basic Auth. The browser shows a native login prompt;
// any username is accepted, the password must match ADMIN_PASSWORD.
export function proxy(request: NextRequest) {
  const expected = process.env.ADMIN_PASSWORD;
  const header = request.headers.get("authorization");

  if (expected && header?.startsWith("Basic ")) {
    const decoded = atob(header.slice(6)); // "user:pass"
    const password = decoded.slice(decoded.indexOf(":") + 1);
    if (password === expected) {
      // Mark the request so the root layout bypasses the under-construction
      // holding page for the admin area.
      const headers = new Headers(request.headers);
      headers.set("x-admin-area", "1");
      const response = NextResponse.next({ request: { headers } });
      // Non-secret UI hint so the nav can show an "Enquiries" link site-wide
      // once you've logged in. Access is still enforced by Basic Auth above.
      response.cookies.set("rok_admin", "1", {
        path: "/",
        sameSite: "lax",
        maxAge: 60 * 60 * 8, // 8 hours
      });
      return response;
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin", charset="UTF-8"' },
  });
}

export const config = {
  matcher: "/admin/:path*",
};
