import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { selfDriveRoutes } from "@/lib/data";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Itineraries";
const DESCRIPTION =
  "Self-drive Namibia itineraries from one to three weeks: how many days you need and which regions to combine.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/itineraries", languages: { en: "/itineraries", de: "/de/itineraries", nl: "/nl/itineraries" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function ItinerariesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Itineraries", url: `${SITE_URL}/itineraries` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Itineraries
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Build your Namibia itinerary
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia is a self-drive country: distances are long and roads are mostly gravel, so
          the number of days you have should decide your route, not the other way round. Start
          with how much time you&apos;ve got.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {selfDriveRoutes.map((route, i) => (
            <Reveal key={route.days} delay={i * 60}>
              <Link
                href={`/itineraries/${route.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/7] w-full overflow-hidden">
                  <Image
                    src={route.image}
                    alt={route.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-6 text-5xl font-bold text-ivory">
                    {route.days}
                  </span>
                  <span className="absolute bottom-5 left-[4.5rem] text-[12px] uppercase tracking-[0.2em] text-ivory/80">
                    days: {route.title}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-[15px] leading-relaxed text-charcoal/70">
                    {route.description}
                  </p>
                  <div className="mt-6 border-t border-charcoal/10 pt-4">
                    <p className="text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
                      Suggested route
                    </p>
                    <p className="mt-2 text-[14px] text-charcoal/70">{route.stops}</p>
                  </div>
                  <span className="mt-4 text-[13px] font-medium text-rust opacity-0 transition-opacity group-hover:opacity-100">
                    See day-by-day &rarr;
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-black/5 border-l-4 border-l-rust bg-sand/20 p-8">
          <h2 className="text-lg font-bold text-charcoal">A rule of thumb for pacing</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Namibia&apos;s gravel roads are slower than they look on a map: budget 60–80km/h
            average, not highway speeds. As a guide: never drive more than 4–5 hours in a single
            day, and give every region at least two nights so one full day isn&apos;t lost to
            arriving and leaving.
          </p>
        </Reveal>
      </section>
    </>
  );
}
