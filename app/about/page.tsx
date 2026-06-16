import type { Metadata } from "next";
import PetalDivider from "@/components/PetalDivider";
import SectionHeading from "@/components/SectionHeading";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { PETAL_BG, PETAL_BORDER, petalAt } from "@/components/petals";
import { ph } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Rhythms of Kuchipudi",
  description:
    "Our story, the art of Kuchipudi, the Guru-Shishya Parampara, milestones, and affiliations.",
};

const MILESTONES = [
  { year: "2009", text: "Rhythms of Kuchipudi opens its first studio with twelve students." },
  { year: "2013", text: "First batch completes their Rangam graduation recital." },
  { year: "2016", text: "School performs at the national classical dance festival." },
  { year: "2019", text: "Crosses 250 students trained across all levels." },
  { year: "2022", text: "Launches an advanced margam choreography program." },
  { year: "2025", text: "Celebrates 500+ students and 25+ stage performances." },
];

const AFFILIATIONS = [
  "Sangeet Natak Akademi",
  "Andhra Natyam Council",
  "Kuchipudi Kalakshetra",
  "Indian Classical Arts Trust",
];

export default function AboutPage() {
  return (
    <>
      {/* Story */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
            <h1 className="mt-3 font-heading text-4xl font-semibold text-purple sm:text-5xl">
              A tradition passed hand to hand
            </h1>
            <p className="mt-6 font-body text-deep-navy/80">
              At Rhythms of Kuchipudi, we don&apos;t just teach dance — we pass
              down a living tradition. Rooted in the ancient village of Kuchipudi
              in Andhra Pradesh, our school carries forward a 300-year-old art
              form with devotion, discipline, and joy.
            </p>
            <p className="mt-4 font-body text-deep-navy/80">
              What began with a handful of students has grown into a community of
              hundreds — but our heart remains the same: to honor the art, the
              gurus who shaped it, and every young dancer who steps into the
              studio for the first time.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-gradient-to-br from-teal via-magenta to-pink p-1.5 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ph(800, 700, "Our Studio")}
                alt="Dancers in the studio"
                className="w-full rounded-[1.7rem] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <PetalDivider />

      {/* Kuchipudi explainer */}
      <section className="mx-auto max-w-4xl px-5 text-center">
        <SectionHeading eyebrow="The Art Form" title="What is Kuchipudi?" />
        <Reveal>
          <p className="mt-8 font-body text-lg leading-relaxed text-deep-navy/80">
            Kuchipudi is one of India&apos;s eight classical dance forms, born in
            the Krishna district of Andhra Pradesh. Unlike other classical
            styles, it uniquely blends <em>nritta</em> (pure dance),{" "}
            <em>nritya</em> (expressive dance) and <em>natya</em> (dramatic
            performance) — often telling stories from the Bhagavatam and other
            Puranic texts. Its hallmark: lightning-fast footwork, fluid upper
            body movements, expressive eyes, and the iconic tarangam — where the
            dancer performs balancing on the rim of a brass plate.
          </p>
        </Reveal>
      </section>

      <PetalDivider />

      {/* Guru-Shishya Parampara */}
      <section className="bg-deep-navy">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <SectionHeading
            eyebrow="Guru-Shishya Parampara"
            title="The teacher–student lineage"
            light
          />
          <Reveal>
            <p className="mt-8 font-body text-lg leading-relaxed text-ivory/80">
              At the heart of our school is the Guru-Shishya Parampara — the
              sacred bond between teacher and student through which knowledge is
              passed not through textbooks, but through years of devoted
              practice, observation, and trust. Each dancer becomes a link in an
              unbroken chain stretching back three centuries, carrying the art
              forward to the next generation.
            </p>
          </Reveal>
        </div>
      </section>

      <PetalDivider />

      {/* Milestones timeline */}
      <section className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="Our Journey" title="Milestones" />
        <ol className="mt-12 space-y-8 border-l-2 border-purple/15 pl-8">
          {MILESTONES.map((m, i) => (
            <Reveal as="li" key={m.year} delay={i * 60} className="relative">
              <span
                className={`absolute -left-[2.6rem] top-1 h-4 w-4 rounded-full ring-4 ring-ivory ${PETAL_BG[petalAt(i)]}`}
              />
              <p className="font-heading text-2xl font-semibold text-purple">
                {m.year}
              </p>
              <p className="mt-1 font-body text-deep-navy/75">{m.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <PetalDivider />

      {/* Affiliations */}
      <section className="mx-auto max-w-5xl px-5 pb-24 text-center">
        <SectionHeading eyebrow="Recognized By" title="Affiliations" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AFFILIATIONS.map((a, i) => (
            <Reveal key={a} delay={i * 70}>
              <div className={`rounded-xl border-t-4 bg-white p-6 font-ui font-semibold text-deep-navy shadow-sm ${PETAL_BORDER[petalAt(i)]}`}>
                {a}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
