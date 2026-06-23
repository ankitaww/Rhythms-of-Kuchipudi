import type { Metadata } from "next";
import PetalDivider from "@/components/PetalDivider";
import SectionHeading from "@/components/SectionHeading";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { PETAL_BG, petalAt } from "@/components/petals";
import { ph } from "@/lib/content";

export const metadata: Metadata = {
  title: "Founder — Rhythms of Kuchipudi",
  description:
    "Meet the founder of Rhythms of Kuchipudi — biography, training lineage, and awards.",
};

const LINEAGE = [
  "Disciple of Padmabhushan Dr. Vempati Chinna Satyam",
  "Studied the Kuchipudi natya tradition for over fifteen years",
  "Specialized in tarangam and traditional margam repertoire",
  "Mentored by leading exponents of the Andhra classical schools",
];

const AWARDS = [
  { year: "2011", title: "Natya Kala Ratna" },
  { year: "2015", title: "State Award for Classical Dance" },
  { year: "2018", title: "Guru Samman for Excellence in Teaching" },
  { year: "2023", title: "Lifetime Contribution to Kuchipudi" },
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
              Disciple of Padmabhushan Dr. Vempati Chinna Satyam
            </p>
            <blockquote className="mt-6 font-heading text-xl italic text-ivory/85">
              “Kuchipudi is not a dance you learn — it is a language you begin to
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
              The founder of Rhythms of Kuchipudi discovered the art as a child,
              drawn to the rhythm of the taalam and the stories told through
              mudras. What began as fascination grew into a lifelong devotion —
              years of rigorous training under revered gurus in the classical
              Andhra tradition.
            </p>
            <p>
              After performing on stages across the country, the dream shifted
              from the spotlight to the studio: to give the next generation the
              same gift that had shaped a life. Rhythms of Kuchipudi was founded
              on that belief — that this art is too precious to be kept, and must
              be passed on.
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

      {/* Awards */}
      <section className="mx-auto max-w-5xl px-5">
        <SectionHeading eyebrow="Honors" title="Awards & recognition" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AWARDS.map((a, i) => (
            <Reveal as="article" key={a.title} delay={i * 80}>
              <div className="h-full rounded-2xl bg-white p-6 text-center shadow-sm">
                <p className={`font-heading text-3xl font-bold ${["text-blue","text-teal","text-magenta","text-pink"][i % 4]}`}>
                  {a.year}
                </p>
                <p className="mt-2 font-ui text-sm font-semibold text-deep-navy/80">
                  {a.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <PetalDivider />

      {/* YouTube embed */}
      <section className="mx-auto max-w-4xl px-5 pb-24">
        <SectionHeading eyebrow="In Performance" title="Watch a performance" />
        <Reveal>
          <div className="mt-10 aspect-video overflow-hidden rounded-2xl border-t-4 border-pink shadow-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
              title="Kuchipudi performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
