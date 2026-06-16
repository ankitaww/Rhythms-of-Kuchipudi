"use client";

import { useEffect, useState } from "react";
import { ph } from "@/lib/content";
import { petalHexAt } from "@/components/petals";

const CATEGORIES = ["All", "Performances", "Classes", "Festivals", "Rangam"] as const;
type Category = (typeof CATEGORIES)[number];

type Shot = { id: number; category: Exclude<Category, "All">; ratio: string };

// 12 slots with varied aspect ratios for a masonry feel.
const SHOTS: Shot[] = [
  { id: 1, category: "Performances", ratio: "aspect-[3/4]" },
  { id: 2, category: "Classes", ratio: "aspect-square" },
  { id: 3, category: "Festivals", ratio: "aspect-[4/3]" },
  { id: 4, category: "Rangam", ratio: "aspect-[3/4]" },
  { id: 5, category: "Performances", ratio: "aspect-square" },
  { id: 6, category: "Classes", ratio: "aspect-[4/3]" },
  { id: 7, category: "Festivals", ratio: "aspect-[3/4]" },
  { id: 8, category: "Rangam", ratio: "aspect-square" },
  { id: 9, category: "Performances", ratio: "aspect-[4/3]" },
  { id: 10, category: "Classes", ratio: "aspect-[3/4]" },
  { id: 11, category: "Festivals", ratio: "aspect-square" },
  { id: 12, category: "Rangam", ratio: "aspect-[4/3]" },
];

export default function Gallery() {
  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible =
    filter === "All" ? SHOTS : SHOTS.filter((s) => s.category === filter);

  // Close the lightbox on Escape.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const active = SHOTS.find((s) => s.id === lightbox);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`rounded-full px-5 py-2 font-ui text-sm font-semibold transition-colors ${
              filter === c
                ? "bg-pink text-white"
                : "bg-white text-deep-navy/70 hover:text-pink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
        {visible.map((shot, i) => (
          <button
            key={shot.id}
            type="button"
            onClick={() => setLightbox(shot.id)}
            className="block w-full overflow-hidden rounded-xl shadow-sm transition-transform hover:scale-[1.02]"
            style={{ borderBottom: `4px solid ${petalHexAt(i)}` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ph(600, 700, `${shot.category} ${shot.id}`)}
              alt={`${shot.category} ${shot.id}`}
              className={`w-full object-cover ${shot.ratio}`}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-deep-navy/90 p-5"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-ivory hover:bg-white/20"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ph(900, 1100, `${active.category} ${active.id}`)}
            alt={`${active.category} ${active.id}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
