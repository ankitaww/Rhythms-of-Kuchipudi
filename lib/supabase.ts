// Server-only Supabase client.
//
// Uses the SERVICE ROLE key, which bypasses Row Level Security — so this module
// must NEVER be imported into a Client Component. It is only used inside Route
// Handlers (e.g. app/api/enquiry/route.ts). The key is read from the
// SUPABASE_SERVICE_ROLE_KEY env var and is never sent to the browser.

import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRoleKey) {
  throw new Error(
    "Missing Supabase env vars. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local",
  );
}

export const supabaseAdmin = createClient(url, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});
