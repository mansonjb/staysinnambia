import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { selfDriveRoutesDe } from "@/lib/data.de";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Reiserouten";
const DESCRIPTION =
  "Selbstfahrer-Reiserouten durch Namibia von einer bis drei Wochen: wie viele Tage Sie brauchen und welche Regionen Sie kombinieren sollten.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/de/itineraries", languages: { en: "/itineraries", de: "/de/itineraries", nl: "/nl/itineraries" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function ItinerariesPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Reiserouten", url: `${SITE_URL}/de/itineraries` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Reiserouten
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Ihre Namibia-Reiseroute planen
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia ist ein Selbstfahrer-Land: die Distanzen sind lang und die Straßen meist
          Schotter, deshalb sollte die verfügbare Zeit Ihre Route bestimmen, nicht umgekehrt.
          Beginnen Sie mit Ihrer verfügbaren Zeit.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {selfDriveRoutesDe.map((route, i) => (
            <Reveal key={route.days} delay={i * 60}>
              <Link
                href={`/de/itineraries/${route.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-6xl font-bold text-sand-dark">{route.days}</span>
                <p className="mt-1 text-[12px] uppercase tracking-[0.2em] text-charcoal/40">
                  Tage: {route.title}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">
                  {route.description}
                </p>
                <div className="mt-6 border-t border-charcoal/10 pt-4">
                  <p className="text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
                    Vorgeschlagene Route
                  </p>
                  <p className="mt-2 text-[14px] text-charcoal/70">{route.stops}</p>
                </div>
                <span className="mt-4 text-[13px] font-medium text-rust opacity-0 transition-opacity group-hover:opacity-100">
                  Tag für Tag ansehen &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-lg font-bold text-charcoal">Faustregel fürs Reisetempo</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Namibias Schotterstraßen sind langsamer, als sie auf der Karte wirken: rechnen Sie mit
            durchschnittlich 60–80 km/h, nicht mit Autobahntempo. Als Richtwert: nie mehr als
            4–5 Stunden am Stück fahren, und jeder Region mindestens zwei Nächte geben, damit
            nicht ein ganzer Tag für An- und Abreise verloren geht.
          </p>
        </Reveal>
      </section>
    </>
  );
}
