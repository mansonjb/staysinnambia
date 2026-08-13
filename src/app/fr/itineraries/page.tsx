import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { selfDriveRoutesFr } from "@/lib/data.fr";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Itinéraires en Namibie";
const DESCRIPTION =
  "Itinéraires en autonomie en Namibie, d'une à trois semaines : combien de jours prévoir et quelles régions combiner.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/itineraries",
    languages: { en: "/itineraries", de: "/de/itineraries", nl: "/nl/itineraries", fr: "/fr/itineraries", it: "/it/itineraries" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function ItinerariesPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Itinéraires", url: `${SITE_URL}/fr/itineraries` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Itinéraires
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Construisez votre itinéraire en Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La Namibie est un pays de road trip en autonomie : les distances sont longues et les
          routes majoritairement en gravier, c'est donc le nombre de jours disponibles qui doit
          déterminer votre itinéraire, et non l'inverse. Commencez par le temps dont vous
          disposez.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {selfDriveRoutesFr.map((route, i) => (
            <Reveal key={route.days} delay={i * 60}>
              <Link
                href={`/fr/itineraries/${route.slug}`}
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
                    jours : {route.title}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-[15px] leading-relaxed text-charcoal/70">
                    {route.description}
                  </p>
                  <div className="mt-6 border-t border-charcoal/10 pt-4">
                    <p className="text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
                      Itinéraire suggéré
                    </p>
                    <p className="mt-2 text-[14px] text-charcoal/70">{route.stops}</p>
                  </div>
                  <span className="mt-4 text-[13px] font-medium text-rust opacity-0 transition-opacity group-hover:opacity-100">
                    Voir jour par jour &rarr;
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-black/5 border-l-4 border-l-rust bg-sand/20 p-8">
          <h2 className="text-lg font-bold text-charcoal">Une règle simple pour le rythme</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Les pistes en gravier de Namibie sont plus lentes qu'elles n'y paraissent sur la
            carte : comptez une moyenne de 60 à 80 km/h, pas un rythme d'autoroute. Règle
            générale : ne roulez jamais plus de 4 à 5 heures par jour, et laissez au moins deux
            nuits à chaque région pour ne pas perdre une journée entière en arrivée et en
            départ.
          </p>
        </Reveal>
      </section>
    </>
  );
}
