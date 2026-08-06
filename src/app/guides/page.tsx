import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { popularGuides, regions } from "@/lib/data";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Travel Guides";
const DESCRIPTION = "Every planning guide on Namibia Stays: lodges, itineraries, timing and regions.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/guides", languages: { en: "/guides", de: "/de/guides", nl: "/nl/guides" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const REGION_GUIDES = regions.map((r) => ({
  title: `Where to Stay in ${r.name}`,
  href: `/where-to-stay/${r.slug}`,
}));

const PRACTICAL_GUIDES = [
  { title: "Self-Drive vs Guided Safari", href: "/self-drive-vs-guided-namibia" },
  { title: "Namibia vs Botswana", href: "/namibia-vs-botswana" },
  { title: "SIM Cards, eSIM & Connectivity", href: "/namibia-connectivity" },
  { title: "Namibia Packing List", href: "/namibia-packing-list" },
  { title: "Extending Your Trip", href: "/namibia-trip-extensions" },
  { title: "Visiting Himba Communities", href: "/himba-culture-namibia" },
  { title: "Stargazing & Astrophotography", href: "/namibia-stargazing-photography" },
];

const TRAVEL_STYLE_GUIDES = [
  { title: "Namibia Without a 4x4", href: "/namibia-without-4x4" },
  { title: "Best Safari Areas in Namibia", href: "/best-safari-areas" },
  { title: "Namibia with Kids", href: "/namibia-with-kids" },
  { title: "Namibia Honeymoon", href: "/namibia-honeymoon" },
  { title: "Luxury Namibia", href: "/luxury-namibia" },
];

const LODGE_STYLE_GUIDES = [
  { title: "Best Luxury Lodges", href: "/best-luxury-lodges" },
  { title: "Best Safari Lodges", href: "/best-safari-lodges" },
  { title: "Best Desert Lodges", href: "/best-desert-lodges" },
  { title: "Best Family Lodges", href: "/best-family-lodges" },
  { title: "Best Romantic Stays", href: "/best-romantic-stays" },
  { title: "Namibia's Most Remote Lodges", href: "/most-remote-lodges" },
  { title: "Namibia Glamping", href: "/namibia-glamping" },
  { title: "Namibia Farm Stays", href: "/namibia-farm-stays" },
];

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Guides", url: `${SITE_URL}/guides` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guides
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Every Namibia Stays guide
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Planning guides, region breakdowns and itinerary tools, all in one place.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Start here</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {popularGuides.map((g, i) => (
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
              href="/itineraries"
              className="group flex items-center justify-between gap-6 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="font-serif text-xl italic text-charcoal">Namibia Itineraries</span>
              <CardArrow />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold text-charcoal">Trip planning</h2>
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
          <h2 className="text-2xl font-bold text-charcoal">Travel styles</h2>
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
          <h2 className="text-2xl font-bold text-charcoal">Lodge styles</h2>
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
          <h2 className="text-2xl font-bold text-charcoal">Where to stay, by region</h2>
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
