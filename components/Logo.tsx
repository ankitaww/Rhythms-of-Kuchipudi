// Official Rhythms of Kuchipudi mark (dancer + rainbow skirt) paired with the wordmark.

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark.svg"
        alt=""
        aria-hidden="true"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0"
      />
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
