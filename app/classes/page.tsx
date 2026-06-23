import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PetalDivider from "@/components/PetalDivider";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { PETAL_BORDER, PETAL_TEXT, petalAt } from "@/components/petals";
import { CLASSES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Classes — Rhythms of Kuchipudi",
  description: "Four levels from Beginner to Rangapravesham, weekly schedule, FAQs, and enrollment.",
};

const SCHEDULE = [
  { session: "Evening", days: "Mon – Thu", time: "5:30 – 7:00 PM" },
  { session: "Morning", days: "Tue & Wed", time: "8:30 – 10:00 AM" },
  { session: "Weekend", days: "Sat & Sun", time: "9:00 – 11:00 AM" },
  { session: "Online", days: "", time: "Contact for details" },
];

export default function ClassesPage() {
  return (
    <>
      {/* Level cards */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading eyebrow="Find Your Level" title="Classes for every dancer" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CLASSES.map((c, i) => (
            <Reveal as="article" key={c.level} delay={i * 80}>
              <div className={`h-full rounded-2xl border-t-4 bg-white p-6 shadow-sm ${PETAL_BORDER[petalAt(i)]}`}>
                <h3 className={`font-heading text-xl font-semibold ${PETAL_TEXT[petalAt(i)]}`}>
                  {c.level}
                </h3>
                <p className="mt-3 font-body text-sm text-deep-navy/75">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <PetalDivider />

      {/* Schedule table */}
      <section className="mx-auto max-w-4xl px-5">
        <SectionHeading eyebrow="Weekly Rhythm" title="Class schedule" />
        <Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border-t-4 border-teal bg-white shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-purple/5 font-ui text-sm uppercase tracking-wide text-purple">
                  <th className="px-6 py-4">Session</th>
                  <th className="px-6 py-4">Days</th>
                  <th className="px-6 py-4">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple/10 font-body text-deep-navy/80">
                {SCHEDULE.map((row) => (
                  <tr key={row.session}>
                    <td className="px-6 py-4 font-semibold">{row.session}</td>
                    <td className="px-6 py-4">{row.days}</td>
                    <td className="px-6 py-4">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-4 text-center font-body text-sm text-deep-navy/60">
            Classes run Saturday – Thursday. Friday is our weekly off.
          </p>
        </Reveal>
      </section>

      <PetalDivider />

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5">
        <SectionHeading eyebrow="Good to Know" title="Frequently asked questions" />
        <div className="mt-10">
          <FAQ />
        </div>
      </section>

      <PetalDivider />

      {/* Enroll CTA */}
      <section className="mx-auto max-w-4xl px-5 pb-24">
        <Reveal>
          <div className="rounded-3xl bg-deep-navy px-8 py-14 text-center">
            <h2 className="font-heading text-3xl font-semibold text-ivory sm:text-4xl">
              Ready to take your first step?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-ivory/75">
              Join a community that carries a 300-year tradition forward — with
              devotion, discipline, and joy.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-pink px-9 py-3 font-ui font-bold text-white transition-transform hover:scale-105"
            >
              Enroll Now
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
