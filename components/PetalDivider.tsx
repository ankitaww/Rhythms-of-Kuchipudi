import { PETAL_NAMES, PETAL_HEX } from "./petals";

// Seven sweeping arcs fanning from a center point — the dancer's skirt rendered as a divider.
// Drops between every major section sitewide.

const SPAN = 132; // total fan spread in degrees
const STEP = SPAN / (PETAL_NAMES.length - 1);
const START = -SPAN / 2;

// One upright petal, tip at top, rooted at the origin (0,0).
const PETAL_PATH =
  "M0 0 C -16 -34 -11 -78 0 -104 C 11 -78 16 -34 0 0 Z";

export default function PetalDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex justify-center py-10 ${className}`}
      aria-hidden="true"
    >
      <svg
        width="240"
        height="120"
        viewBox="0 0 240 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <g transform="translate(120 116)">
          {PETAL_NAMES.map((name, i) => (
            <path
              key={name}
              d={PETAL_PATH}
              fill={PETAL_HEX[name]}
              transform={`rotate(${START + i * STEP})`}
              opacity={0.92}
            />
          ))}
          <circle cx="0" cy="0" r="6" fill="#5B2D8E" />
        </g>
      </svg>
    </div>
  );
}
