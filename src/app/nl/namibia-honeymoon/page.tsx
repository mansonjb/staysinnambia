import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AvailabilityBadge, CardCTA } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getLodgeNl } from "@/lib/data.nl";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Huwelijksreis in Namibië";
const DESCRIPTION =
  "De meest romantische lodges en kampementen voor een huwelijksreis in Namibië: privé, rustig en gebouwd voor twee.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-honeymoon",
    languages: { en: "/namibia-honeymoon", de: "/de/namibia-honeymoon", nl: "/nl/namibia-honeymoon", fr: "/fr/namibia-honeymoon", it: "/it/namibia-honeymoon" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const HONEYMOON_SLUGS = ["little-kulala", "sossusvlei-desert-lodge", "doro-nawas-camp", "the-olive-exclusive"];

const ROMANTIC_ADD_ONS = [
  "Een privédiner bij de duinen: de meeste lodges rond Sossusvlei dekken op verzoek voor één avond een privétafel, op het terras of op het zand. Vraag dit aan bij het boeken van de kamer, niet pas bij aankomst, want het vergt voorbereidingstijd en een specifieke personeelsplanning.",
  "De open torenkamers van Le Mirage Resort & Spa: het kasteelachtige verblijf heeft kamers die zijn gebouwd om onder de open hemel te slapen, en de heldere, onvervuilde luchten van het Namib-Naukluft-gebied maken bijna elke avond er geschikt voor, dus vraag naar de avond met de helderste voorspelling tijdens uw verblijf.",
  "Een luchtballonvaart bij zonsopgang boven de duinen: Namib Sky Balloon Safaris vliegt de meeste ochtenden vanuit Sesriem, weersafhankelijk, en eindigt met een champagneontbijt in de woestijn. Het is een uitstapje van ongeveer 3,5 uur van deur tot deur, de moeite waard om ruim van tevoren te boeken, want de plekken zijn beperkt.",
  "Spa en wellness voor stellen: Le Mirage heeft een volledig uitgeruste spa op het terrein (de Mystique Spa), maar de behandelmenu's bij Namibische woestijnlodges zijn nog altijd kleiner dan bij een resortspa. Controleer wat er daadwerkelijk wordt aangeboden in plaats van een volledige behandelingslijst aan te nemen.",
];

export default function HoneymoonPageNl() {
  const lodges = HONEYMOON_SLUGS.map((slug) => getLodgeNl(slug)).filter(Boolean);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Gidsen", url: `${SITE_URL}/nl/guides` },
          { name: "Huwelijksreis in Namibië", url: `${SITE_URL}/nl/namibia-honeymoon` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gidsen
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Huwelijksreis in Namibië
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          De ruimte en de stilte van Namibië maken het land tot een oprecht romantische
          bestemming: de heldere woestijnluchten en lage lichtvervuiling van het
          Namib-Naukluft-gebied maken sterrenkijken bijna een nachtelijk ritueel in plaats van
          een gelukstreffer, en de dichtstbijzijnde andere gasten bevinden zich vaak op flinke
          afstand. Deze vier zijn waar we een huwelijksreis het eerst naartoe zouden sturen: Le
          Mirage Resort &amp; Spa en Sossusvlei Lodge voor de duinen, Camp Kipwe als uitvalsbasis
          tussen de rotsblokken nabij Twyfelfontein als u het landschap van Damaraland wilt zonder
          romantiek in te leveren, en The Olive Exclusive, een boetiekhotel in Windhoek met
          slechts zeven suites en een privé-plonsbad per suite, als een afsluitende of openende
          nacht rond de safarironde in plaats van een stop erop. Voor de volledige shortlist, zie
          onze{" "}
          <Link
            href="/nl/best-romantic-stays"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            gids met de beste romantische verblijven
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {lodges.map((lodge, i) => (
            <Reveal key={lodge!.slug} delay={i * 60}>
              <Link
                href={`/nl/lodges/${lodge!.slug}`}
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
                    <AvailabilityBadge label="Beschikbaarheid controleren" />
                    <CardCTA label="Bekijk lodge" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Extra&apos;s die het waard zijn om vooraf te boeken</h2>
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
            <span className="font-semibold text-charcoal">Over het tempo:</span> een huwelijksreis
            werkt beter als hij korter is dan een reis voor eerste bezoekers. Twee lodges van elk
            drie tot vier nachten, in plaats van de vijf-stops-in-tien-dagen-route die beginnende
            reizigers vaak samenstellen, geeft genoeg tijd om écht te vertragen, en laat ruimte
            over om een privédiner of een ballonvlucht toe te voegen zonder dat de reis aanvoelt
            als een afvinklijstje.
          </p>
        </Reveal>
      </section>
    </>
  );
}
