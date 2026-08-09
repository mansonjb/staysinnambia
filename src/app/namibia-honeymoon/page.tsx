import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AvailabilityBadge, CardCTA } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getLodge } from "@/lib/data";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Honeymoon";
const DESCRIPTION = "The most romantic lodges and camps for a Namibia honeymoon: private, quiet, and built for two.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/namibia-honeymoon", languages: { en: "/namibia-honeymoon", de: "/de/namibia-honeymoon", nl: "/nl/namibia-honeymoon", fr: "/fr/namibia-honeymoon" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const HONEYMOON_SLUGS = ["little-kulala", "sossusvlei-desert-lodge", "doro-nawas-camp", "the-olive-exclusive"];

const ROMANTIC_ADD_ONS = [
  "A private dune dinner: most Sossusvlei-area lodges will lay a private table for one night of a stay, on the deck or out on the sand. Request it when you book the room, not on arrival, since it needs setup time and a specific staff booking.",
  "Le Mirage Resort & Spa's open-air tower rooms: the castle-style property has rooms built for sleeping under the open sky, and the Namib-Naukluft area's clear, unpolluted skies make almost any night a good one for it, so ask for the clearest-forecast night of your stay.",
  "A hot-air balloon sunrise over the dunes: Namib Sky Balloon Safaris flies out of Sesriem most mornings, weather permitting, ending in a champagne breakfast in the desert. It's a roughly 3.5-hour outing door to door, worth booking well ahead since spots are limited.",
  "Couples spa and wellness: Le Mirage runs a full-service spa on-site (the Mystique Spa), but menus at Namibia's desert lodges are still smaller than a resort spa. Confirm what's actually on offer rather than assuming a full treatment list.",
];

export default function HoneymoonPage() {
  const lodges = HONEYMOON_SLUGS.map((slug) => getLodge(slug)).filter(Boolean);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Guides", url: `${SITE_URL}/guides` },
          { name: "Namibia Honeymoon", url: `${SITE_URL}/namibia-honeymoon` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia honeymoon
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia&apos;s space and silence make it a genuinely romantic destination: the
          Namib-Naukluft&apos;s clear desert skies and low light pollution mean stargazing is a
          near-nightly event rather than a lucky break, and the nearest other guests are often a
          real distance away. These four are where we&apos;d point a honeymoon first: Le Mirage
          Resort &amp; Spa and Sossusvlei Lodge for the dunes, Camp Kipwe for a boulder-set base
          near Twyfelfontein if you want Damaraland&apos;s landscape without giving up romance,
          and The Olive Exclusive, a seven-suite Windhoek boutique hotel with a private plunge
          pool per suite, as a bookend night before or after the safari circuit rather than a stop
          on it. For the full shortlist, see our{" "}
          <Link
            href="/best-romantic-stays"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            best romantic stays guide
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {lodges.map((lodge, i) => (
            <Reveal key={lodge!.slug} delay={i * 60}>
              <Link
                href={`/lodges/${lodge!.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={lodge!.image}
                    alt={lodge!.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-rust px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ivory shadow-sm">
                    {lodge!.region}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-2xl italic text-charcoal">{lodge!.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {lodge!.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <AvailabilityBadge />
                    <CardCTA label="View Lodge" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Add-ons worth booking ahead</h2>
        </Reveal>
        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <ul className="space-y-3">
            {ROMANTIC_ADD_ONS.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {n}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-charcoal/10 pt-5 text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">On pacing:</span> a honeymoon works
            better shorter than a first-time circuit. Two lodges at three to four nights each,
            rather than the five-stop, ten-day loop first-timers often build, is enough time to
            actually slow down, and it leaves room to add a private dinner or a balloon flight
            without the trip feeling like a checklist.
          </p>
        </Reveal>
      </section>
    </>
  );
}
