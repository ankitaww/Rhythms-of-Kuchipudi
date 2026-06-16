import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PetalDivider from "@/components/PetalDivider";
import Reveal from "@/components/Reveal";
import TeacherCard, { type Teacher } from "@/components/TeacherCard";

export const metadata: Metadata = {
  title: "Teachers — Rhythms of Kuchipudi",
  description: "Meet the gurus who carry the tradition forward.",
};

const TEACHERS: Teacher[] = [
  { name: "Lakshmi Devi", role: "Senior Guru", bio: "Three decades of teaching, specializing in abhinaya and the traditional margam repertoire." },
  { name: "Ravi Shankar", role: "Nattuvangam", bio: "Master of taalam and jathi, guiding students through the rhythmic foundations of the form." },
  { name: "Anjali Menon", role: "Abhinaya Guru", bio: "Brings stories to life, teaching the expressive language of glance and gesture." },
  { name: "Suresh Kumar", role: "Advanced Repertoire", bio: "Choreographs and trains senior students for full solo margam performances." },
  { name: "Priya Nair", role: "Beginner Faculty", bio: "Introduces young dancers to adavus and the joy of their very first taalam." },
  { name: "Deepa Rao", role: "Tarangam Specialist", bio: "Trains the iconic brass-plate balancing technique that defines Kuchipudi." },
  { name: "Vikram Iyer", role: "Music & Vocals", bio: "Accompanies classes on vocals and cymbals, anchoring the live rhythm of the studio." },
  { name: "Meera Joshi", role: "Performance Coach", bio: "Prepares dancers for the stage — poise, presence, and the Rangam recital." },
];

// Each circular portrait ring uses a different petal gradient.
const RINGS = [
  "from-blue to-teal",
  "from-teal to-green",
  "from-magenta to-pink",
  "from-pink to-orange",
  "from-orange to-yellow",
  "from-yellow to-green",
  "from-blue to-magenta",
  "from-pink to-purple",
];

export default function TeachersPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <SectionHeading eyebrow="Our Gurus" title="The teachers behind the tradition" />
      <PetalDivider />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEACHERS.map((t, i) => (
          <Reveal key={t.name} delay={(i % 4) * 80}>
            <TeacherCard teacher={t} ringClass={RINGS[i % RINGS.length]} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
