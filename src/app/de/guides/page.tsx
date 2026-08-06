import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { regionsDe } from "@/lib/data.de";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Ratgeber";
const DESCRIPTION = "Jeder Ratgeber auf Namibia Stays: Lodges, Reiserouten, Reisezeit und Regionen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/de/guides", languages: { en: "/guides", de: "/de/guides", nl: "/nl/guides" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const REGION_GUIDES = regionsDe.map((r) => ({
  title: `Unterkünfte in ${r.name}`,
  href: `/de/where-to-stay/${r.slug}`,
}));

const POPULAR_GUIDES = [
  { title: "Beste Lodges in Namibia", href: "/de/best-lodges-in-namibia" },
  { title: "Unterkünfte in Etosha", href: "/de/where-to-stay/etosha" },
  { title: "Unterkünfte in Sossusvlei", href: "/de/where-to-stay/sossusvlei" },
  { title: "Namibia Selbstfahrer-Guide", href: "/de/namibia-self-drive-guide" },
  { title: "Beste Reisezeit für Namibia", href: "/de/best-time-to-visit-namibia" },
  { title: "Namibia Visabestimmungen", href: "/de/namibia-visa-requirements" },
  { title: "Ist Namibia sicher? Sicherheit & Gesundheit", href: "/de/namibia-safety-and-health" },
  { title: "Was kostet eine Namibia-Reise?", href: "/de/namibia-trip-cost" },
  { title: "Namibia Tierwelt-Guide", href: "/de/namibia-wildlife-guide" },
];

const PRACTICAL_GUIDES = [
  { title: "Selbstfahrer vs. geführte Safari", href: "/de/self-drive-vs-guided-namibia" },
  { title: "Namibia vs. Botswana", href: "/de/namibia-vs-botswana" },
  { title: "SIM-Karten, eSIM & Konnektivität", href: "/de/namibia-connectivity" },
  { title: "Namibia Packliste", href: "/de/namibia-packing-list" },
  { title: "Ihre Reise verlängern", href: "/de/namibia-trip-extensions" },
  { title: "Himba-Gemeinschaften besuchen", href: "/de/himba-culture-namibia" },
  { title: "Sternenbeobachtung & Astrofotografie", href: "/de/namibia-stargazing-photography" },
];

const TRAVEL_STYLE_GUIDES = [
  { title: "Namibia ohne 4x4", href: "/de/namibia-without-4x4" },
  { title: "Beste Safari-Gebiete in Namibia", href: "/de/best-safari-areas" },
  { title: "Namibia mit Kindern", href: "/de/namibia-with-kids" },
  { title: "Namibia Flitterwochen", href: "/de/namibia-honeymoon" },
  { title: "Luxus-Namibia", href: "/de/luxury-namibia" },
];

const LODGE_STYLE_GUIDES = [
  { title: "Beste Luxus-Lodges", href: "/de/best-luxury-lodges" },
  { title: "Beste Safari-Lodges", href: "/de/best-safari-lodges" },
  { title: "Beste Wüsten-Lodges", href: "/de/best-desert-lodges" },
  { title: "Beste Familien-Lodges", href: "/de/best-family-lodges" },
  { title: "Romantischste Unterkünfte", href: "/de/best-romantic-stays" },
  { title: "Namibias abgelegenste Lodges", href: "/de/most-remote-lodges" },
  { title: "Namibia Glamping", href: "/de/namibia-glamping" },
  { title: "Namibia Farmaufenthalte", href: "/de/namibia-farm-stays" },
];

export default function GuidesPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Ratgeber", url: `${SITE_URL}/de/guides` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Jeder Namibia Stays Ratgeber
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Planungshilfen, Regionsübersichten und Reiseroutentools, alles an einem Ort.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Hier beginnen</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {POPULAR_GUIDES.map((g, i) => (
            <Reveal key={g.href} delay={i * 40}>
              <Link
                href={g.href}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="font-serif text-xl italic text-charcoal">{g.title}</span>
                <CardArrow />
              </Link>
            </Reveal>
          ))}
          <Reveal delay={200}>
            <Link
              href="/de/itineraries"
              className="group flex items-center justify-between gap-6 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="font-serif text-xl italic text-charcoal">Namibia Reiserouten</span>
              <CardArrow />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold text-charcoal">Reiseplanung</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICAL_GUIDES.map((g, i) => (
            <Reveal key={g.href} delay={(i % 3) * 40}>
              <Link
                href={g.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-[14px] font-medium text-charcoal">{g.title}</span>
                <CardArrow />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold text-charcoal">Reisestile</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRAVEL_STYLE_GUIDES.map((g, i) => (
            <Reveal key={g.href} delay={(i % 3) * 40}>
              <Link
                href={g.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-[14px] font-medium text-charcoal">{g.title}</span>
                <CardArrow />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold text-charcoal">Lodge-Stile</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LODGE_STYLE_GUIDES.map((g, i) => (
            <Reveal key={g.href} delay={(i % 3) * 40}>
              <Link
                href={g.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-[14px] font-medium text-charcoal">{g.title}</span>
                <CardArrow />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold text-charcoal">Unterkünfte nach Region</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REGION_GUIDES.map((g, i) => (
            <Reveal key={g.href} delay={(i % 3) * 40}>
              <Link
                href={g.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-[14px] font-medium text-charcoal">{g.title}</span>
                <CardArrow />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
