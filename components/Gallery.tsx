import Link from "next/link";
import { PETAL_NAMES, PETAL_BG } from "@/components/petals";

// "Coming soon" banner shown until real gallery photos are added.
// The previous filterable masonry grid + lightbox is in git history (com9).

export default function Gallery({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white text-center shadow-sm ${
        compact ? "mt-12 px-6 py-12" : "mt-10 px-6 py-16 sm:px-12 sm:py-20"
      }`}
    >
      {/* Petal stripe across the top */}
      <div className="absolute inset-x-0 top-0 flex h-1.5" aria-hidden="true">
        {PETAL_NAMES.map((p) => (
          <span key={p} className={`flex-1 ${PETAL_BG[p]}`} />
        ))}
      </div>

      <p className="font-eyebrow text-xs uppercase tracking-[0.3em] text-pink">
        Coming Soon
      </p>
      <h3 className="mt-4 font-heading text-3xl font-semibold text-purple sm:text-4xl">
        Our gallery is being curated
      </h3>
      <p className="mx-auto mt-4 max-w-xl font-body text-deep-navy/75">
        We&apos;re gathering photographs from our performances, classes,
        festivals and Rangam recitals. Check back soon to see our dancers in
        motion.
      </p>

      {compact ? (
        <Link
          href="/gallery"
          className="mt-8 inline-block font-ui font-bold text-pink underline-offset-4 hover:underline"
        >
          Visit the gallery page →
        </Link>
      ) : (
        <a
          href="https://instagram.com/rhythmsofkuchipudi"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-pink px-6 py-3 font-ui font-bold text-white transition-transform hover:scale-105"
        >
          Follow us on Instagram meanwhile
        </a>
      )}
    </div>
  );
}
