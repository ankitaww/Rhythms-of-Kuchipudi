import type { Metadata } from "next";
import PetalDivider from "@/components/PetalDivider";
import SectionHeading from "@/components/SectionHeading";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { PETAL_BG, petalAt } from "@/components/petals";
import { ph } from "@/lib/content";

export const metadata: Metadata = {
  title: "Founder | Rhythms of Kuchipudi",
  description:
    "Meet Guru Durgesh Nandini Vemavarapu, disciple of Padma Sri Dr. Vempati Chinna Satyam and founder of Rhythms of Kuchipudi.",
};

const LINEAGE = [
  "Began her Kuchipudi journey at the age of seven",
  "Trained for nearly twenty years under Padma Sri Dr. Vempati Chinna Satyam",
  "Performs and teaches Kuchipudi across India",
  "Actively training students across the world for over 20 years",
];

const HONORS = [
  { title: "Natya Visharad", note: "Certification in Kuchipudi" },
  { title: "Natya Vidhya Dhari", note: "Honorary title" },
];

export default function FounderPage() {
  return (
    <>
      {/* Split hero */}
      <section className="bg-deep-navy">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center">
          <Reveal className="mx-auto">
            <div className="rounded-full bg-gradient-to-br from-blue via-magenta to-orange p-1.5 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ph(600, 600, "Founder")}
                alt="Founder of Rhythms of Kuchipudi"
                className="h-64 w-64 rounded-full object-cover sm:h-80 sm:w-80"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Our Founder</Eyebrow>
            <h1 className="mt-3 font-heading text-4xl font-semibold text-ivory sm:text-5xl">
              Guru Durgesh Nandini Vemavarapu
            </h1>
            <p className="mt-3 font-body text-ivory/75">
              Natya Visharad · Disciple of Padma Sri Dr. Vempati Chinna Satyam
            </p>
            <blockquote className="mt-6 font-heading text-xl italic text-ivory/85">
              “Kuchipudi is not a dance you learn; it is a language you begin to
              speak, one mudra at a time.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      <PetalDivider />

      {/* Biography */}
      <section className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="Biography" title="The story behind the school" />
        <Reveal>
          <div className="mt-8 space-y-4 font-body text-deep-navy/80">
            <p>
              Durgesh Nandini began her <em>kalaaraadhana</em>, her worship of
              the art form, with Kuchipudi at the tender age of seven, at the
              feet of the renowned master Kalidas Samman, Kala Prapoorna, Padma
              Sri, Dr. Vempati Chinna Satyam. Celebrated across India for his
              lifelong dedication to the form, Master Chinna Satyam trained
              hundreds of students in one of the most traditional dance forms of
              the country.
            </p>
            <p>
              She spent the most dedicated years of her life, close to two
              decades, under her guru&apos;s masterly guidance, and went on to
              receive the certificate of <em>Natya Visharad</em>.
            </p>
            <p>
              Extending her performances and teaching across India, Durgesh
              Nandini is today considered one of the top few Kuchipudi
              professionals in the country. Her students have given many
              programs and been appreciated for their stagecraft, their{" "}
              <em>abhinaya</em>, and their mastery of <em>nritya</em>. She holds
              the title <em>Natya Vidhya Dhari</em>.
            </p>
            <p>
              Established twenty years ago in her humble home, Rhythms of
              Kuchipudi has been a registered institution for the past ten years.
              Staying true to her teaching methods, every student she takes under
              her wing learns to play the <em>nattuvangam</em> with complete
              professional proficiency, and every student learns to become a
              teacher.
            </p>
          </div>
        </Reveal>
      </section>

      <PetalDivider />

      {/* Training lineage */}
      <section className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="Roots" title="Training lineage" />
        <ul className="mt-10 space-y-5">
          {LINEAGE.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 70} className="flex gap-4">
              <span
                className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${PETAL_BG[petalAt(i)]}`}
              />
              <p className="font-body text-deep-navy/80">{item}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <PetalDivider />

      {/* Honors */}
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <SectionHeading eyebrow="Honors" title="Titles & recognition" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {HONORS.map((h, i) => (
            <Reveal as="article" key={h.title} delay={i * 80}>
              <div className="h-full rounded-2xl bg-white p-6 text-center shadow-sm">
                <p className={`font-heading text-2xl font-bold ${["text-blue","text-magenta"][i % 2]}`}>
                  {h.title}
                </p>
                <p className="mt-2 font-ui text-sm font-semibold text-deep-navy/80">
                  {h.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
