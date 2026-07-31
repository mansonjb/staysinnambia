"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/logo-mark";

const NAV_LINKS = [
  { label: "Regions", href: "/regions" },
  { label: "Where to Stay", href: "/where-to-stay/namibia" },
  { label: "Lodges", href: "/best-lodges-in-namibia" },
  { label: "Itineraries", href: "/itineraries" },
  { label: "Guides", href: "/guides" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="relative z-50 border-b border-charcoal/10 bg-ivory">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 sm:px-10">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-serif text-2xl italic tracking-tight text-charcoal"
            onClick={() => setMenuOpen(false)}
          >
            <LogoMark className="h-8 w-8" />
            Namibia Stays
          </Link>

          <nav className="hidden items-center gap-8 text-[13px] uppercase tracking-[0.14em] text-charcoal/70 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-rust"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/where-to-stay/namibia"
            className="hidden rounded-full bg-rust px-6 py-2.5 text-[13px] font-medium uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark sm:inline-block"
          >
            Where to Stay
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative z-10 flex h-8 w-8 flex-col items-center justify-center gap-[5px] text-charcoal md:hidden"
          >
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-x-0 bottom-0 top-[65px] z-40 flex flex-col bg-ivory px-6 pt-10 transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-charcoal/10 py-4 font-serif text-3xl italic text-charcoal"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/where-to-stay/namibia"
          onClick={() => setMenuOpen(false)}
          className="mt-10 inline-block self-start rounded-full bg-rust px-6 py-3 text-[13px] uppercase tracking-[0.1em] text-ivory"
        >
          Where to Stay
        </Link>
      </div>
    </>
  );
}
