import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PetalDivider from "@/components/PetalDivider";
import Reveal from "@/components/Reveal";
import TeacherCard, { type Teacher } from "@/components/TeacherCard";

export const metadata: Metadata = {
  title: "Teachers — Rhythms of Kuchipudi",
  description: "Meet the gurus who carry the tradition forward.",
};

const FOUNDER: Teacher = {
  name: "Guru Durgesh Nandini Vemavarapu",
  role: "Founder & Artistic Director",
};

const TRADITION: Teacher[] = [
  { name: "Padmabhushan Dr. Vempati Chinna Satyam garu" },
  { name: "Vempati Ravi Shankar" },
  { name: "Bala Kondala Rao" },
  { name: "Seetha Nagajyothi" },
  { name: "Satya Priya Ramana" },
];

const ROK_TEACHERS: Teacher[] = [
  { name: "Abhijna Mandapati" },
  { name: "Ankita Vemavarapu" },
  { name: "Garnepudi Surya Sindhuja" },
  { name: "Gayathri Pamarthi" },
  { name: "Phani Shyamala Adury" },
  { name: "Satya Sundari Nidasanametla" },
  { name: "Suraj Vardhan Naidu" },
  { name: "Swathi Achanta" },
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
      <SectionHeading eyebrow="Our Founder" title="The one behind Rhythms of Kuchipudi" />
      <PetalDivider />
      <div className="mx-auto max-w-xs">
        <Reveal>
          <TeacherCard teacher={FOUNDER} ringClass={RINGS[0]} />
        </Reveal>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Our Lineage" title="The teachers behind the tradition" />
        <PetalDivider />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRADITION.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 80}>
              <TeacherCard teacher={t} ringClass={RINGS[i % RINGS.length]} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Our Faculty" title="Teachers of ROK" />
        <PetalDivider />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ROK_TEACHERS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 80}>
              <TeacherCard teacher={t} ringClass={RINGS[i % RINGS.length]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
