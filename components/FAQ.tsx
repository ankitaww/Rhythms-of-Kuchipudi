"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What age can my child start?",
    a: "Our Beginner classes are open to all ages — children as young as five and adults alike. No prior experience is needed.",
  },
  {
    q: "Do I need any prior dance experience?",
    a: "Not at all. The Beginner level starts with foundational adavus and basic mudras, building from the very first step.",
  },
  {
    q: "How long does it take to reach Rangam?",
    a: "It varies by dedication and practice, but most dancers progress through the levels over several years before their Rangam recital.",
  },
  {
    q: "What should I wear to class?",
    a: "Comfortable clothing you can move freely in for early classes. As you advance, we guide you on traditional practice attire.",
  },
  {
    q: "Are there performance opportunities?",
    a: "Yes — students perform at annual showcases, festivals, and ultimately their solo Rangam graduation recital.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-purple/10 rounded-2xl bg-white shadow-sm">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-ui font-semibold text-deep-navy">
                {item.q}
              </span>
              <span
                className={`shrink-0 text-2xl text-pink transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid px-6 transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden font-body text-deep-navy/75">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
