"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/teachers", label: "Teachers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/classes", label: "Classes" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Show the admin link only after logging into /admin (set by proxy.ts).
  useEffect(() => {
    setIsAdmin(document.cookie.includes("rok_admin=1"));
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sync toggle UI with the class the boot script already applied to <html>.
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {}
      return next;
    });
  };

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/95 shadow-sm backdrop-blur"
          : "bg-ivory/80 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" aria-label="Rhythms of Kuchipudi, home">
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-ui text-sm font-semibold transition-colors hover:text-pink ${
                  isActive(link.href) ? "text-pink" : "text-deep-navy/80"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {isAdmin && (
            <li>
              <Link
                href="/admin/enquiries"
                className={`font-ui text-sm font-semibold transition-colors hover:text-pink ${
                  isActive("/admin") ? "text-pink" : "text-deep-navy/80"
                }`}
              >
                Enquiries
              </Link>
            </li>
          )}
        </ul>

        {/* Theme toggle (all sizes) */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          className="ml-2 flex h-10 w-10 items-center justify-center rounded-full text-deep-navy/80 transition-colors hover:text-pink"
        >
          {dark ? (
            // Sun
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            // Moon
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative h-10 w-10 md:hidden"
        >
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 bg-purple transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 bg-purple transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 bg-purple transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-purple/10 bg-ivory transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-3 font-ui font-semibold transition-colors hover:text-pink ${
                  isActive(link.href) ? "text-pink" : "text-deep-navy/80"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {isAdmin && (
            <li>
              <Link
                href="/admin/enquiries"
                className={`block py-3 font-ui font-semibold transition-colors hover:text-pink ${
                  isActive("/admin") ? "text-pink" : "text-deep-navy/80"
                }`}
              >
                Enquiries
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
