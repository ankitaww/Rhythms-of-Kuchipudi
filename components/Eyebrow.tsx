// Cinzel, uppercase, wide-tracked, pink — sits above every section heading.

export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-eyebrow text-pink uppercase tracking-[0.25em] text-xs sm:text-sm font-medium ${className}`}
    >
      {children}
    </p>
  );
}
