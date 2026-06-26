import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PetalDivider from "@/components/PetalDivider";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery | Rhythms of Kuchipudi",
  description: "Moments in motion: performances, classes, festivals, and Rangam recitals.",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <SectionHeading eyebrow="Moments in Motion" title="Gallery" />
      <PetalDivider />
      <Gallery />
    </section>
  );
}
