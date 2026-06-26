import type { Metadata } from "next";
import { getSupabaseAdmin } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Enquiries | Admin",
  robots: { index: false, follow: false },
};

// Always render fresh; never cache enquiry data.
export const dynamic = "force-dynamic";

type Enquiry = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  level: string | null;
  message: string | null;
};

export default async function EnquiriesAdminPage() {
  const { data, error } = await getSupabaseAdmin()
    .from("enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="font-heading text-2xl font-semibold text-purple">Enquiries</h1>
        <p className="mt-4 font-body text-red-600">
          Failed to load enquiries: {error.message}
        </p>
      </main>
    );
  }

  const enquiries = (data ?? []) as Enquiry[];

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex items-baseline justify-between">
        <h1 className="font-heading text-2xl font-semibold text-purple">Enquiries</h1>
        <span className="font-body text-sm text-deep-navy/60">
          {enquiries.length} total
        </span>
      </div>

      {enquiries.length === 0 ? (
        <p className="mt-8 font-body text-deep-navy/60">No enquiries yet.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-purple/15">
          <table className="w-full border-collapse text-left font-body text-sm">
            <thead className="bg-ivory text-deep-navy/70">
              <tr>
                <th className="px-4 py-3 font-ui font-semibold">Date</th>
                <th className="px-4 py-3 font-ui font-semibold">Name</th>
                <th className="px-4 py-3 font-ui font-semibold">Contact</th>
                <th className="px-4 py-3 font-ui font-semibold">Level</th>
                <th className="px-4 py-3 font-ui font-semibold">Message</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((e) => (
                <tr key={e.id} className="border-t border-purple/10 align-top">
                  <td className="whitespace-nowrap px-4 py-3 text-deep-navy/70">
                    {new Date(e.created_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-3 font-semibold text-deep-navy">{e.name}</td>
                  <td className="px-4 py-3 text-deep-navy/80">
                    <a className="text-blue underline" href={`mailto:${e.email}`}>
                      {e.email}
                    </a>
                    <br />
                    <a className="text-teal underline" href={`tel:${e.phone}`}>
                      {e.phone}
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-deep-navy/80">
                    {e.level ?? "-"}
                  </td>
                  <td className="max-w-md px-4 py-3 text-deep-navy/80">
                    {e.message ?? "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
