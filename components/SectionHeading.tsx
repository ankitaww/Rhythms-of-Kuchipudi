import Eyebrow from "./Eyebrow";

// Eyebrow + heading pairing used at the top of every section.

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-2xl ${className}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={`mt-3 font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight ${
          light ? "text-ivory" : "text-purple"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
