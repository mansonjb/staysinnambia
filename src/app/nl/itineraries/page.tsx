import type { Metadata } from "next";
import Image from "next/image";
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
                    dagen: {route.title}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-[15px] leading-relaxed text-charcoal/70">
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
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-black/5 border-l-4 border-l-rust bg-sand/20 p-8">
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
