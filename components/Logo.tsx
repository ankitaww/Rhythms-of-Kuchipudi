import { PETAL_NAMES, PETAL_HEX } from "./petals";

// Compact petal-fan mark — a miniature of the dancer's rainbow skirt — plus wordmark.

export default function Logo({ className = "" }: { className?: string }) {
  const SPAN = 120;
  const step = SPAN / (PETAL_NAMES.length - 1);
  const start = -SPAN / 2;
  const path = "M0 0 C -7 -15 -5 -34 0 -45 C 5 -34 7 -15 0 0 Z";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <g transform="translate(26 46)">
          {PETAL_NAMES.map((name, i) => (
            <path
              key={name}
              d={path}
              fill={PETAL_HEX[name]}
              transform={`rotate(${start + i * step})`}
            />
          ))}
          <circle cx="0" cy="0" r="4.5" fill="#5B2D8E" />
        </g>
      </svg>
      <span className="font-heading leading-none">
        <span className="block text-lg font-semibold text-purple">
          Rhythms
        </span>
        <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-magenta font-eyebrow">
          of Kuchipudi
        </span>
      </span>
    </span>
  );
}
