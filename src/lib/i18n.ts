export type Locale = "en" | "de" | "nl";

export function localeFromPathname(pathname: string): Locale {
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/nl" || pathname.startsWith("/nl/")) return "nl";
  return "en";
}

/** Prefixes an EN-style path (e.g. "/where-to-stay/etosha") with /de or /nl when locale isn't "en". */
export function withLocale(path: string, locale: Locale): string {
  if (locale === "en") return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
