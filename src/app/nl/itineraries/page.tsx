import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { selfDriveRoutesNl } from "@/lib/data.nl";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibië reisroutes";
const DESCRIPTION =
  "Zelfrijroutes door Namibië van één tot drie weken: hoeveel dagen u nodig heeft en welke regio's u kunt combineren.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/itineraries",
    languages: { en: "/itineraries", de: "/de/itineraries", nl: "/nl/itineraries" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function ItinerariesPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Reisroutes", url: `${SITE_URL}/nl/itineraries` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Reisroutes
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Stel uw Namibië-reisroute samen
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibië is een zelfrijland: de afstanden zijn lang en de wegen grotendeels grind, dus
          het aantal beschikbare dagen moet uw route bepalen, niet andersom. Begin met hoeveel
          tijd u heeft.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {selfDriveRoutesNl.map((route, i) => (
            <Reveal key={route.days} delay={i * 60}>
              <Link
                href={`/nl/itineraries/${route.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-6xl font-bold text-sand-dark">{route.days}</span>
                <p className="mt-1 text-[12px] uppercase tracking-[0.2em] text-charcoal/40">
                  dagen: {route.title}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">
                  {route.description}
                </p>
                <div className="mt-6 border-t border-charcoal/10 pt-4">
                  <p className="text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
                    Voorgestelde route
                  </p>
                  <p className="mt-2 text-[14px] text-charcoal/70">{route.stops}</p>
                </div>
                <span className="mt-4 text-[13px] font-medium text-rust opacity-0 transition-opacity group-hover:opacity-100">
                  Bekijk dag voor dag &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-lg font-bold text-charcoal">Een vuistregel voor het tempo</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Namibië's grindwegen zijn langzamer dan ze op de kaart lijken: reken op gemiddeld
            60–80 km/u, geen snelwegtempo. Als richtlijn: rijd nooit meer dan 4–5 uur op één dag,
            en geef elke regio minstens twee nachten zodat er geen hele dag verloren gaat aan
            aankomen en vertrekken.
          </p>
        </Reveal>
      </section>
    </>
  );
}
