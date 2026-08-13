export type Locale = "en" | "de" | "nl" | "fr" | "it";

export function localeFromPathname(pathname: string): Locale {
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/nl" || pathname.startsWith("/nl/")) return "nl";
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "fr";
  if (pathname === "/it" || pathname.startsWith("/it/")) return "it";
  return "en";
}

/** Prefixes an EN-style path (e.g. "/where-to-stay/etosha") with /de, /nl, /fr, or /it when locale isn't "en". */
export function withLocale(path: string, locale: Locale): string {
  if (locale === "en") return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export const LOCALES: Locale[] = ["en", "de", "nl", "fr", "it"];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  nl: "NL",
  fr: "FR",
  it: "IT",
};

/** Strips a /de, /nl, /fr, or /it prefix from a pathname, returning the EN-style path every locale mirrors. */
export function basePathFromPathname(pathname: string): string {
  if (pathname === "/de" || pathname === "/nl" || pathname === "/fr" || pathname === "/it") return "/";
  if (pathname.startsWith("/de/")) return pathname.slice(3);
  if (pathname.startsWith("/nl/")) return pathname.slice(3);
  if (pathname.startsWith("/fr/")) return pathname.slice(3);
  if (pathname.startsWith("/it/")) return pathname.slice(3);
  return pathname;
}
