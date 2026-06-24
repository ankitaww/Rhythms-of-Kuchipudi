import { supabaseAdmin } from "@/lib/supabase";

const LEVELS = ["Beginner", "Intermediate", "Advanced", "Rangapravesham"];
const MAX = { name: 120, email: 254, phone: 40, message: 2000 } as const;

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const name = str(data.name);
  const email = str(data.email);
  const phone = str(data.phone);
  const level = str(data.level);
  const message = str(data.message);

  // Validation.
  if (!name || name.length > MAX.name) {
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > MAX.email) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (!phone || phone.length > MAX.phone) {
    return Response.json({ error: "Please enter your phone number." }, { status: 400 });
  }
  if (level && !LEVELS.includes(level)) {
    return Response.json({ error: "Invalid level selected." }, { status: 400 });
  }
  if (message.length > MAX.message) {
    return Response.json({ error: "Message is too long." }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from("enquiries").insert({
    name,
    email,
    phone,
    level: level || null,
    message: message || null,
  });

  if (error) {
    console.error("Failed to save enquiry:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true }, { status: 201 });
}
