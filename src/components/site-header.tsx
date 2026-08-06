"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/logo-mark";
import { basePathFromPathname, localeFromPathname, LOCALE_LABELS, LOCALES, withLocale } from "@/lib/i18n";

const NAV_LINKS_EN = [
  { label: "Where to Stay", href: "/where-to-stay/namibia" },
  { label: "Lodges", href: "/best-lodges-in-namibia" },
  { label: "Itineraries", href: "/itineraries" },
  { label: "Guides", href: "/guides" },
];

const NAV_LINKS_DE = [
  { label: "Unterkünfte", href: "/where-to-stay/namibia" },
  { label: "Lodges", href: "/best-lodges-in-namibia" },
  { label: "Reiserouten", href: "/itineraries" },
  { label: "Ratgeber", href: "/guides" },
];

const NAV_LINKS_NL = [
  { label: "Verblijven", href: "/where-to-stay/namibia" },
  { label: "Lodges", href: "/best-lodges-in-namibia" },
  { label: "Reisroutes", href: "/itineraries" },
  { label: "Gidsen", href: "/guides" },
];

const NAV_LINKS: Record<string, typeof NAV_LINKS_EN> = {
  en: NAV_LINKS_EN,
  de: NAV_LINKS_DE,
  nl: NAV_LINKS_NL,
};

const CTA_LABEL: Record<string, string> = {
  en: "Where to Stay",
  de: "Unterkünfte finden",
  nl: "Vind een verblijf",
};

function LanguageSwitcher({
  pathname,
  className = "",
  onNavigate,
}: {
  pathname: string;
  className?: string;
  onNavigate?: () => void;
}) {
  const locale = localeFromPathname(pathname);
  const basePath = basePathFromPathname(pathname);

  return (
    <div className={`flex items-center gap-1 text-[12px] font-semibold tracking-[0.06em] ${className}`}>
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1 text-charcoal/20">/</span>}
          <Link
            href={withLocale(basePath, l)}
            onClick={onNavigate}
            className={l === locale ? "text-rust" : "text-charcoal/50 transition-colors hover:text-charcoal"}
          >
            {LOCALE_LABELS[l]}
          </Link>
        </span>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const locale = localeFromPathname(pathname);
  const navLinks = NAV_LINKS[locale].map((l) => ({
    label: l.label,
    href: withLocale(l.href, locale),
  }));
  const homeHref = withLocale("/", locale);
  const ctaLabel = CTA_LABEL[locale];
  const ctaHref = withLocale("/where-to-stay/namibia", locale);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="relative z-50 border-b border-charcoal/10 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 sm:px-10">
          <Link
            href={homeHref}
            className="flex items-center gap-2.5 font-serif text-2xl italic tracking-tight text-charcoal"
            onClick={() => setMenuOpen(false)}
          >
            <LogoMark className="h-8 w-8" />
            Namibia Stays
          </Link>

          <nav className="hidden items-center gap-8 text-[13px] uppercase tracking-[0.14em] text-charcoal/70 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-rust"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <LanguageSwitcher pathname={pathname} />
            <Link
              href={ctaHref}
              className="rounded-full bg-rust px-6 py-2.5 text-[13px] font-medium uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
            >
              {ctaLabel}
            </Link>
          </div>

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
        className={`fixed inset-x-0 bottom-0 top-[65px] z-40 flex flex-col bg-white px-6 pt-10 transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
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
          href={ctaHref}
          onClick={() => setMenuOpen(false)}
          className="mt-10 inline-block self-start rounded-full bg-rust px-6 py-3 text-[13px] uppercase tracking-[0.1em] text-ivory"
        >
          {ctaLabel}
        </Link>
        <LanguageSwitcher pathname={pathname} className="mt-8 text-[14px]" onNavigate={() => setMenuOpen(false)} />
      </div>
    </>
  );
}
