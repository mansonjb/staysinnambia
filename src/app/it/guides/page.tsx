import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { regionsIt } from "@/lib/data.it";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Guide di viaggio Namibia";
const DESCRIPTION = "Tutte le guide di Namibia Stays: lodge, itinerari, stagioni e regioni.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/it/guides", languages: { en: "/guides", de: "/de/guides", nl: "/nl/guides", fr: "/fr/guides", it: "/it/guides" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const REGION_GUIDES = regionsIt.map((r) => ({
  title: `Dove alloggiare a ${r.name}`,
  href: `/it/where-to-stay/${r.slug}`,
}));

const POPULAR_GUIDES = [
  { title: "Migliori lodge della Namibia", href: "/it/best-lodges-in-namibia" },
  { title: "Dove alloggiare a Etosha", href: "/it/where-to-stay/etosha" },
  { title: "Dove alloggiare a Sossusvlei", href: "/it/where-to-stay/sossusvlei" },
  { title: "Guida al self-drive in Namibia", href: "/it/namibia-self-drive-guide" },
  { title: "Periodo migliore per visitare la Namibia", href: "/it/best-time-to-visit-namibia" },
  { title: "Requisiti per il visto in Namibia", href: "/it/namibia-visa-requirements" },
  { title: "La Namibia è sicura? Sicurezza e salute", href: "/it/namibia-safety-and-health" },
  { title: "Quanto costa un viaggio in Namibia?", href: "/it/namibia-trip-cost" },
  { title: "Guida alla fauna della Namibia", href: "/it/namibia-wildlife-guide" },
];

const PRACTICAL_GUIDES = [
  { title: "Self-drive vs. safari guidato", href: "/it/self-drive-vs-guided-namibia" },
  { title: "Namibia vs. Botswana", href: "/it/namibia-vs-botswana" },
  { title: "SIM, eSIM e connettività", href: "/it/namibia-connectivity" },
  { title: "Lista bagagli per la Namibia", href: "/it/namibia-packing-list" },
  { title: "Prolungare il viaggio", href: "/it/namibia-trip-extensions" },
  { title: "Visitare le comunità himba", href: "/it/himba-culture-namibia" },
  { title: "Osservazione delle stelle e astrofotografia", href: "/it/namibia-stargazing-photography" },
];

const TRAVEL_STYLE_GUIDES = [
  { title: "La Namibia senza 4x4", href: "/it/namibia-without-4x4" },
  { title: "Migliori zone safari della Namibia", href: "/it/best-safari-areas" },
  { title: "La Namibia con i bambini", href: "/it/namibia-with-kids" },
  { title: "Luna di miele in Namibia", href: "/it/namibia-honeymoon" },
  { title: "Namibia di lusso", href: "/it/luxury-namibia" },
];

const LODGE_STYLE_GUIDES = [
  { title: "Migliori lodge di lusso", href: "/it/best-luxury-lodges" },
  { title: "Migliori lodge safari", href: "/it/best-safari-lodges" },
  { title: "Migliori lodge nel deserto", href: "/it/best-desert-lodges" },
  { title: "Migliori lodge per famiglie", href: "/it/best-family-lodges" },
  { title: "Soggiorni più romantici", href: "/it/best-romantic-stays" },
  { title: "I lodge più remoti della Namibia", href: "/it/most-remote-lodges" },
  { title: "Glamping in Namibia", href: "/it/namibia-glamping" },
  { title: "Soggiorni in fattoria in Namibia", href: "/it/namibia-farm-stays" },
];

export default function GuidesPageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Guides", url: `${SITE_URL}/it/guides` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Tutte le guide di Namibia Stays
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Guide di pianificazione, panoramiche delle regioni e strumenti per gli itinerari, tutto
          in un unico posto.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Inizia da qui</h2>
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
              href="/it/itineraries"
              className="group flex items-center justify-between gap-6 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="font-serif text-xl italic text-charcoal">Itinerari in Namibia</span>
              <CardArrow />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold text-charcoal">Pianifica il viaggio</h2>
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
          <h2 className="text-2xl font-bold text-charcoal">Stili di viaggio</h2>
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
          <h2 className="text-2xl font-bold text-charcoal">Stili di lodge</h2>
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
          <h2 className="text-2xl font-bold text-charcoal">Dove alloggiare, per regione</h2>
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
