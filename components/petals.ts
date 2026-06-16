// Signature petal color sequence — cards, dots, stats, dividers cycle through these.
// Order mirrors the dancer's rainbow skirt fan: blue → teal → magenta → pink → orange → yellow → green.

export const PETAL_NAMES = [
  "blue",
  "teal",
  "magenta",
  "pink",
  "orange",
  "yellow",
  "green",
] as const;

export type PetalName = (typeof PETAL_NAMES)[number];

export const PETAL_HEX: Record<PetalName, string> = {
  blue: "#4DA6E8",
  teal: "#2ABAAA",
  magenta: "#A020A0",
  pink: "#E8196A",
  orange: "#F07820",
  yellow: "#F5C518",
  green: "#3BBF4A",
};

/** Petal name at a cyclic index. */
export const petalAt = (i: number): PetalName =>
  PETAL_NAMES[((i % PETAL_NAMES.length) + PETAL_NAMES.length) % PETAL_NAMES.length];

/** Hex value at a cyclic index. */
export const petalHexAt = (i: number): string => PETAL_HEX[petalAt(i)];

// Tailwind utility lookups — static strings so the v4 scanner keeps them.
export const PETAL_BG: Record<PetalName, string> = {
  blue: "bg-blue",
  teal: "bg-teal",
  magenta: "bg-magenta",
  pink: "bg-pink",
  orange: "bg-orange",
  yellow: "bg-yellow",
  green: "bg-green",
};

export const PETAL_TEXT: Record<PetalName, string> = {
  blue: "text-blue",
  teal: "text-teal",
  magenta: "text-magenta",
  pink: "text-pink",
  orange: "text-orange",
  yellow: "text-yellow",
  green: "text-green",
};

export const PETAL_BORDER: Record<PetalName, string> = {
  blue: "border-blue",
  teal: "border-teal",
  magenta: "border-magenta",
  pink: "border-pink",
  orange: "border-orange",
  yellow: "border-yellow",
  green: "border-green",
};
