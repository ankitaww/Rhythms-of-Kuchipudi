import Link from "next/link";
import PetalDivider from "@/components/PetalDivider";
import SectionHeading from "@/components/SectionHeading";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { PETAL_BORDER, PETAL_TEXT, petalAt } from "@/components/petals";
import {
  PILLARS,
  CLASSES,
  STATS,
  TESTIMONIALS,
  ph,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ivory via-ivory to-purple/5">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:py-28">
          <Reveal>
            <Eyebrow>Rhythms of Kuchipudi</Eyebrow>
            <h1 className="mt-4 font-heading text-5xl font-semibold leading-[1.05] text-purple sm:text-6xl">
              Where Every Step Tells a Story
            </h1>
            <p className="mt-6 max-w-md font-heading text-xl italic text-magenta">
              “Dancing is like dreaming with your feet”
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/classes"
                className="rounded-full bg-pink px-8 py-3 font-ui font-bold text-white transition-transform hover:scale-105"
              >
                Explore Classes
              </Link>
              <Link
                href="/about"
                className="rounded-full border-2 border-purple px-8 py-3 font-ui font-bold text-purple transition-colors hover:bg-purple hover:text-white"
              >
                Our Story
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="rounded-[2rem] bg-gradient-to-br from-blue via-magenta to-orange p-1.5 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/kuchipudi-dancer.jpg"
                alt="Kuchipudi dancers in full costume"
                className="h-full w-full rounded-[1.7rem] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <PetalDivider />

      {/* Three Pillars */}
      <section className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="The Three Pillars"
          title="The soul of Kuchipudi"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal as="article" key={pillar.name} delay={i * 100}>
              <div
                className={`h-full rounded-2xl border-t-4 bg-white p-8 shadow-sm transition-shadow hover:shadow-md ${PETAL_BORDER[petalAt(i)]}`}
              >
                <h3
                  className={`font-heading text-2xl font-semibold ${PETAL_TEXT[petalAt(i)]}`}
                >
                  {pillar.name}
                </h3>
                <p className="mt-3 font-body text-deep-navy/75">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <PetalDivider />

      {/* About teaser */}
      <section className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <Eyebrow>A Living Tradition</Eyebrow>
          <p className="mt-6 font-heading text-2xl leading-relaxed text-deep-navy sm:text-3xl">
            At Rhythms of Kuchipudi, we don&apos;t just teach dance — we pass
            down a living tradition. Rooted in the ancient village of Kuchipudi
            in Andhra Pradesh, our school carries forward a 300-year-old art
            form with devotion, discipline, and joy.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block font-ui font-bold text-pink underline-offset-4 hover:underline"
          >
            Read our full story →
          </Link>
        </Reveal>
      </section>

      <PetalDivider />

      {/* Class cards */}
      <section className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Find Your Level" title="Classes for every dancer" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CLASSES.map((c, i) => (
            <Reveal as="article" key={c.level} delay={i * 80}>
              <div
                className={`h-full rounded-2xl border-t-4 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${PETAL_BORDER[petalAt(i)]}`}
              >
                <h3 className={`font-heading text-xl font-semibold ${PETAL_TEXT[petalAt(i)]}`}>
                  {c.level}
                </h3>
                <p className="mt-3 font-body text-sm text-deep-navy/75">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/classes"
            className="rounded-full bg-purple px-8 py-3 font-ui font-bold text-white transition-transform hover:scale-105"
          >
            View Schedule &amp; Enroll
          </Link>
        </div>
      </section>

      <PetalDivider />

      {/* Founder band (dark) */}
      <section className="bg-deep-navy">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[auto_1fr] md:items-center">
          <Reveal className="mx-auto">
            <div className="rounded-full bg-gradient-to-br from-blue via-magenta to-orange p-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ph(400, 400, "Founder")}
                alt="Founder of Rhythms of Kuchipudi"
                className="h-48 w-48 rounded-full object-cover sm:h-56 sm:w-56"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>From the Founder</Eyebrow>
            <blockquote className="mt-4 font-heading text-2xl italic leading-relaxed text-ivory sm:text-3xl">
              “Kuchipudi is not a dance you learn — it is a language you begin to
              speak, one mudra at a time.”
            </blockquote>
            <Link
              href="/founder"
              className="mt-6 inline-block font-ui font-bold text-pink underline-offset-4 hover:underline"
            >
              Meet the founder →
            </Link>
          </Reveal>
        </div>
      </section>

      <PetalDivider />

      {/* Gallery preview */}
      <section className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Moments in Motion" title="From our gallery" />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className={`overflow-hidden rounded-xl border-b-4 ${PETAL_BORDER[petalAt(i)]}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ph(600, 500, `Performance ${i + 1}`)}
                  alt={`Performance ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="font-ui font-bold text-pink underline-offset-4 hover:underline"
          >
            See the full gallery →
          </Link>
        </div>
      </section>

      <PetalDivider />

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="In Their Words" title="Stories from our family" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="article" key={t.author} delay={i * 100}>
              <figure className={`h-full rounded-2xl border-t-4 bg-white p-7 shadow-sm ${PETAL_BORDER[petalAt(i + 3)]}`}>
                <blockquote className="font-body italic text-deep-navy/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 font-ui">
                  <span className="block font-bold text-purple">{t.author}</span>
                  <span className="text-sm text-magenta">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <PetalDivider />

      {/* Stats (dark) */}
      <section className="bg-deep-navy">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <p className={`font-heading text-5xl font-bold ${PETAL_TEXT[petalAt(i)]}`}>
                  {s.value}
                </p>
                <p className="mt-2 font-ui text-sm uppercase tracking-wider text-ivory/70">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PetalDivider />

      {/* Enquiry form */}
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <SectionHeading
          eyebrow="Begin Your Journey"
          title="Send us an enquiry"
        />
        <div className="mt-10">
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
