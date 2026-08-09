import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibië zonder 4x4";
const DESCRIPTION =
  "Voor het grootste deel van een zelfrijreis door Namibië heeft u geen 4x4 nodig: hier leest u wat prima gaat met een gewone sedan en waar een 4x4 echt van belang is.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-without-4x4",
    languages: { en: "/namibia-without-4x4", de: "/de/namibia-without-4x4", nl: "/nl/namibia-without-4x4", fr: "/fr/namibia-without-4x4" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const CAN_2WD = [
  "Windhoek naar Sossusvlei (Sesriem) via de B1 en de Remhoogte Pass (C24, dan D1275/C19): asfalt tot Rehoboth, daarna goed onderhouden grind voor de rest van de route. Dit is de route waar de meeste verhuurbedrijven 2WD-rijders naartoe sturen.",
  "Windhoek naar Swakopmund via de B1/B2: volledig geasfalteerd, geen grindrijden nodig.",
  "Uis naar Twyfelfontein in Damaraland (C35 naar D2612): een druk bezochte grindweg in over het algemeen goede staat die gewone sedans in droge omstandigheden prima aankunnen, al is het laatste stuk van de D2612 zandiger dan de rest.",
  "Windhoek naar Etosha's zuidelijke poort (Anderson) bij Okaukuejo: grotendeels geasfalteerd, en de wegen binnen Etosha zelf zijn geëgaliseerd en geschikt voor een standaard 2WD in het droge seizoen.",
  "De zuidelijke rit naar de uitzichtpunten van de Fish River Canyon bij Hobas: asfalt en onderhouden grind, geen 4x4 nodig voor de uitzichtpunten zelf.",
];

const NEED_4X4 = [
  "De laatste circa 5 km zacht zand vanaf de 2x4-parkeerplaats bij Sossusvlei tot aan de duinen en Deadvlei zelf, tegenwoordig alleen nog per shuttle voor alle voertuigen, ongeacht aandrijving (zie hieronder).",
  "De Spreetshoogte Pass, de steilste pas van Namibië (hellingen tot ongeveer 1:4,5), op de alternatieve panoramaroute naar Sossusvlei: uitsluitend 4x4, en caravans en aanhangers zijn helemaal verboden. Neem in plaats daarvan de mildere Remhoogte Pass als u een 2WD heeft.",
  "Het grootste deel van de Skeleton Coast ten noorden van Torra Bay, plus opvallende noordelijke lodges zoals Shipwreck Lodge, die normaal gesproken alleen per lichtvliegtuig bereikbaar zijn en helemaal niet over de weg.",
  "Afgelegen Kaokoveld-pistes ten noorden van Damaraland, waaronder de routes naar Serra Cafema en de Hartmann Valley.",
  "De D-wegen van Damaraland en Kaokoland in het algemeen: geëgaliseerd maar ruwer en afgelegener dan de C-wegen, en werkelijk beïnvloed door regen in het natte seizoen (ruwweg november tot april), wanneer zelfs normaal prima begaanbare grindroutes snel kunnen verslechteren.",
];

export default function Without4x4PageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Gidsen", url: `${SITE_URL}/nl/guides` },
          { name: "Namibië zonder 4x4", url: `${SITE_URL}/nl/namibia-without-4x4` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gidsen
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibië zonder 4x4
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Een veelvoorkomend misverstand: het grootste deel van een klassieke Namibië-rondreis is
          te rijden met een gewone sedan of crossover. Namibiës &quot;C&quot;-wegen, het
          belangrijkste grindwegennet van het land (uitgebreider besproken in onze{" "}
          <Link
            href="/nl/namibia-self-drive-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            zelfrijgids
          </Link>
          ), zijn breed, geëgaliseerd en goed genoeg onderhouden dat de meeste verhuurbedrijven ze
          geschikt achten voor 2WD op een verstandige snelheid. De ruwere &quot;D&quot;-wegen zijn
          een ander verhaal, en een 4x4 is echt alleen nodig voor een kleiner, specifiek aantal
          trajecten, niet de hele reis.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-black/5 bg-olive/5 p-6">
            <h2 className="text-lg font-bold text-olive">Prima met een gewone auto</h2>
            <ul className="mt-4 space-y-2.5">
              {CAN_2WD.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-2xl border border-black/5 bg-rust/5 p-6">
            <h2 className="text-lg font-bold text-rust">Waar een 4x4 echt van belang is</h2>
            <ul className="mt-4 space-y-2.5">
              {NEED_4X4.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">Een middenweg:</span> bij Sossusvlei
            dekt een officiële shuttle-/excursieservice het laatste zandtraject naar de duinen en
            Deadvlei, zodat u met een 2WD op de openbare parkeerplaats kunt parkeren en de duinen
            toch bereikt, zonder voor de hele reis een 4x4 te huren. Vanaf 2026 is dit niet langer
            optioneel, zelfs niet voor 4x4-rijders: particuliere voertuigen zijn geweerd van de
            laatste circa 5 km, en de eigen richtlijnen van het park noemen ongeveer N$260 per
            volwassene en N$130 per kind onder de 12 jaar, al zijn zowel het ophaalpunt als de
            prijzen de afgelopen jaren meer dan eens gewijzigd, dus bevestig de actuele regeling
            bij Sesriem of bij uw lodge voordat u vertrekt.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <Link
            href="/nl/itineraries"
            className="inline-block rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Bekijk zelfrij-reisroutes
          </Link>
        </Reveal>
      </section>
    </>
  );
}
