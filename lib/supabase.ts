// Server-only Supabase client.
//
// Uses the SERVICE ROLE key, which bypasses Row Level Security, so this module
// must NEVER be imported into a Client Component. It is only used inside Route
// Handlers (e.g. app/api/enquiry/route.ts) and server components.
//
// The client is created lazily on first use rather than at import time, so a
// missing env var surfaces as a request-time error instead of breaking the
// production build (Next evaluates route modules during `next build`).

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Missing Supabase env vars. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local (or the Vercel project settings).",
    );
  }

  client = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  return client;
}
