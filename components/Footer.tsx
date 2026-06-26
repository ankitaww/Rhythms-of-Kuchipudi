import Link from "next/link";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/teachers", label: "Teachers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/classes", label: "Classes" },
  { href: "/contact", label: "Contact" },
];

// Each social icon lights up in a different petal color on hover.
const SOCIALS: { label: string; href: string; hover: string; path: string }[] =
  [
    {
      label: "Instagram",
      href: "https://instagram.com/rhythmsofkuchipudi",
      hover: "hover:text-pink",
      path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.86.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2zm0 3.05A6.75 6.75 0 1018.75 12 6.75 6.75 0 0012 5.25zm0 11.13A4.38 4.38 0 1116.38 12 4.38 4.38 0 0112 16.38zm6.95-11.4a1.58 1.58 0 11-1.57-1.58 1.58 1.58 0 011.57 1.58z",
    },
    {
      label: "Facebook",
      href: "#",
      hover: "hover:text-blue",
      path: "M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@rhythmsofkuchipudi",
      hover: "hover:text-orange",
      path: "M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3.02 3.02 0 002.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 002.12-2.14A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4l6.27 3.6z",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919948393920",
      hover: "hover:text-green",
      path: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.18zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z",
    },
  ];

export default function Footer() {
  return (
    <footer className="mt-auto bg-deep-navy text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-ivory">
              Rhythms of Kuchipudi
            </h3>
            <p className="mt-3 max-w-xs font-body text-sm text-ivory/70">
              A living tradition rooted in the ancient village of Kuchipudi,
              Andhra Pradesh, taught with devotion, discipline, and joy.
            </p>
          </div>

          <div>
            <h4 className="font-eyebrow text-xs uppercase tracking-[0.25em] text-pink">
              Explore
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-sm text-ivory/80 transition-colors hover:text-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-eyebrow text-xs uppercase tracking-[0.25em] text-pink">
              Follow
            </h4>
            <div className="mt-4 flex gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`text-ivory/70 transition-colors ${s.hover}`}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/15 pt-6 text-center">
          <p className="font-heading text-lg italic text-ivory/85">
            Carrying a 300-year tradition, one step at a time.
          </p>
          <p className="mt-2 font-body text-xs text-ivory/50">
            © {new Date().getFullYear()} Rhythms of Kuchipudi. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
