// Shared site copy & data. Single source of truth for content reused across pages.

export const PILLARS = [
  {
    name: "Nritta",
    text: "Pure rhythmic movement, where the body speaks in the language of taalam and jathi.",
  },
  {
    name: "Abhinaya",
    text: "The art of expression, where every glance and gesture narrates a story older than words.",
  },
  {
    name: "Natya",
    text: "The union of dance, music and drama in its most sacred form.",
  },
];

export const CLASSES = [
  {
    level: "Beginner",
    text: "Open to all ages, no prior experience needed. Learn foundational adavus, basic mudras and the joy of taalam.",
  },
  {
    level: "Intermediate",
    text: "Deepen your abhinaya, master complex jathis and begin learning traditional compositions.",
  },
  {
    level: "Advanced",
    text: "Rigorous training in full margam pieces, solo choreography and stage performance.",
  },
  {
    level: "Rangam",
    text: "The graduation recital — a full solo performance marking the completion of the classical margam.",
  },
];

export const STATS = [
  { value: "500+", label: "Students Trained" },
  { value: "15+", label: "Years of Excellence" },
  { value: "25+", label: "Stage Performances" },
  { value: "8", label: "Expert Gurus" },
];

export const TESTIMONIALS = [
  {
    quote:
      "My daughter has blossomed — not just as a dancer but as a young woman who carries herself with grace.",
    author: "Priya Raghavan",
    role: "Parent",
  },
  {
    quote:
      "The training here is rigorous, loving and deeply traditional. I feel connected to something ancient.",
    author: "Meghna Sharma",
    role: "Student, Batch 2022",
  },
  {
    quote:
      "Watching my child perform her first rangam was the proudest moment of my life.",
    author: "Anand Krishnamurthy",
    role: "Parent",
  },
];

/** placehold.co image — solid purple on ivory text. */
export const ph = (w: number, h: number, text: string) =>
  `https://placehold.co/${w}x${h}/5B2D8E/FDF8F2?text=${encodeURIComponent(text)}`;
