import type { Metadata } from "next";
import PetalDivider from "@/components/PetalDivider";
import SectionHeading from "@/components/SectionHeading";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { PETAL_BG, petalAt } from "@/components/petals";
import { ph } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Rhythms of Kuchipudi",
  description:
    "Our story, the art of Kuchipudi, the Guru-Shishya Parampara, and milestones.",
};

const MILESTONES = [
  { year: "2006", text: "Guru Durgesh Nandini Vemavarapu founds a dance school in her humble home." },
  { year: "2013", text: "She establishes her first school outside her home." },
  { year: "2016", text: "Rhythms of Kuchipudi is born and recognised as a registered institution." },
  { year: "2020", text: "Rhythms of Kuchipudi expands online, teaching and training students outside India." },
  { year: "2025", text: "Rhythms of Kuchipudi begins its first franchise." },
  { year: "Today", text: "Over 20 years on, students train across India and around the world." },
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
              From a humble home to a living tradition
            </h1>
            <p className="mt-6 font-body text-deep-navy/80">
              Rhythms of Kuchipudi began twenty years ago in the humble home of
              Guru Durgesh Nandini Vemavarapu — a disciple of Padma Sri Dr.
              Vempati Chinna Satyam and a Natya Visharad who has devoted her life
              to this art. What started as a few students gathered around their
              guru has, over the past decade, grown into a registered
              institution.
            </p>
            <p className="mt-4 font-body text-deep-navy/80">
              Rooted in the 300-year-old Kuchipudi tradition of Andhra Pradesh,
              the school is built on one belief: that this art is too precious to
              be kept, and must be passed on. Staying true to her teaching
              methods, every student learns to play the nattuvangam with
              professional proficiency — and every student learns to become a
              teacher, carrying the tradition forward in turn.
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

      {/* YouTube embed */}
      <section className="mx-auto max-w-4xl px-5 pb-24">
        <SectionHeading eyebrow="In Performance" title="Watch our latest performance" />
        <Reveal>
          <div className="mt-10 aspect-video overflow-hidden rounded-2xl border-t-4 border-pink shadow-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/6KyQfIPleAs"
              title="Kuchipudi performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
