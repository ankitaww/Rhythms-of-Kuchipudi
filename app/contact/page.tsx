import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PetalDivider from "@/components/PetalDivider";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact — Rhythms of Kuchipudi",
  description: "Visit us, send an enquiry, or reach out on WhatsApp to begin your journey.",
};

const WHATSAPP_URL = "https://wa.me/919948393920";

const INFO = [
  { label: "Studio", value: "1-57/495/B, Sriram Nagar Colony, Kondapur, Hyderabad 500084", color: "text-blue" },
  { label: "Phone", value: "+91 99483 93920", color: "text-teal" },
  { label: "Email", value: "rhythmsofkuchipudi@gmail.com", color: "text-purple" },
  { label: "Instagram", value: "@rhythmsofkuchipudi", color: "text-magenta" },
  { label: "YouTube", value: "Rhythms of Kuchipudi", color: "text-pink" },
  { label: "New Branches", value: "Coming soon", color: "text-orange" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <SectionHeading eyebrow="Begin Your Journey" title="Get in touch" />
      <PetalDivider />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Info */}
        <Reveal>
          <div className="space-y-7">
            {INFO.map((item) => (
              <div key={item.label}>
                <p className={`font-eyebrow text-xs uppercase tracking-[0.25em] ${item.color}`}>
                  {item.label}
                </p>
                <p className="mt-1 font-body text-lg text-deep-navy/85">
                  {item.value}
                </p>
              </div>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-green px-6 py-3 font-ui font-bold text-white transition-transform hover:scale-105"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.18zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={120}>
          <EnquiryForm />
        </Reveal>
      </div>

      <PetalDivider />

      {/* Map */}
      <Reveal>
        <div className="overflow-hidden rounded-2xl border-t-4 border-orange shadow-sm">
          <iframe
            title="Studio location"
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Sriram+Nagar+Colony,+Kondapur,+Hyderabad+500084&output=embed"
          />
        </div>
      </Reveal>
    </section>
  );
}
