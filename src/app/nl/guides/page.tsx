import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { regionsNl } from "@/lib/data.nl";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibië gidsen";
const DESCRIPTION = "Elke gids op Namibia Stays: lodges, reisroutes, reistijd en regio's.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/nl/guides", languages: { en: "/guides", de: "/de/guides", nl: "/nl/guides" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const REGION_GUIDES = regionsNl.map((r) => ({
  title: `Verblijven in ${r.name}`,
  href: `/nl/where-to-stay/${r.slug}`,
}));

const POPULAR_GUIDES = [
  { title: "Beste lodges in Namibië", href: "/nl/best-lodges-in-namibia" },
  { title: "Verblijven in Etosha", href: "/nl/where-to-stay/etosha" },
  { title: "Verblijven in Sossusvlei", href: "/nl/where-to-stay/sossusvlei" },
  { title: "Namibië zelfrijgids", href: "/nl/namibia-self-drive-guide" },
  { title: "Beste reistijd voor Namibië", href: "/nl/best-time-to-visit-namibia" },
  { title: "Namibië visumvereisten", href: "/nl/namibia-visa-requirements" },
  { title: "Is Namibië veilig? Veiligheid & gezondheid", href: "/nl/namibia-safety-and-health" },
  { title: "Wat kost een Namibië-reis?", href: "/nl/namibia-trip-cost" },
  { title: "Namibië wildlife gids", href: "/nl/namibia-wildlife-guide" },
];

const PRACTICAL_GUIDES = [
  { title: "Zelf rijden vs. begeleide safari", href: "/nl/self-drive-vs-guided-namibia" },
  { title: "Namibië vs. Botswana", href: "/nl/namibia-vs-botswana" },
  { title: "Simkaarten, eSIM & connectiviteit", href: "/nl/namibia-connectivity" },
  { title: "Namibië paklijst", href: "/nl/namibia-packing-list" },
  { title: "Uw reis verlengen", href: "/nl/namibia-trip-extensions" },
  { title: "Himba-gemeenschappen bezoeken", href: "/nl/himba-culture-namibia" },
  { title: "Sterrenkijken & astrofotografie", href: "/nl/namibia-stargazing-photography" },
];

const TRAVEL_STYLE_GUIDES = [
  { title: "Namibië zonder 4x4", href: "/nl/namibia-without-4x4" },
  { title: "Beste safari-gebieden in Namibië", href: "/nl/best-safari-areas" },
  { title: "Namibië met kinderen", href: "/nl/namibia-with-kids" },
  { title: "Namibië huwelijksreis", href: "/nl/namibia-honeymoon" },
  { title: "Luxe Namibië", href: "/nl/luxury-namibia" },
];

const LODGE_STYLE_GUIDES = [
  { title: "Beste luxe lodges", href: "/nl/best-luxury-lodges" },
  { title: "Beste safarilodges", href: "/nl/best-safari-lodges" },
  { title: "Beste woestijnlodges", href: "/nl/best-desert-lodges" },
  { title: "Beste familielodges", href: "/nl/best-family-lodges" },
  { title: "Meest romantische verblijven", href: "/nl/best-romantic-stays" },
  { title: "Namibië's meest afgelegen lodges", href: "/nl/most-remote-lodges" },
  { title: "Namibië glamping", href: "/nl/namibia-glamping" },
  { title: "Namibië boerderijverblijven", href: "/nl/namibia-farm-stays" },
];

export default function GuidesPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Gidsen", url: `${SITE_URL}/nl/guides` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gidsen
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Elke Namibia Stays gids
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Planningshulpmiddelen, regio-overzichten en reisroutetools, allemaal op één plek.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Begin hier</h2>
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
              href="/nl/itineraries"
              className="group flex items-center justify-between gap-6 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="font-serif text-xl italic text-charcoal">Namibië reisroutes</span>
              <CardArrow />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold text-charcoal">Reisplanning</h2>
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
          <h2 className="text-2xl font-bold text-charcoal">Reisstijlen</h2>
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
          <h2 className="text-2xl font-bold text-charcoal">Lodgestijlen</h2>
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
          <h2 className="text-2xl font-bold text-charcoal">Verblijven per regio</h2>
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
