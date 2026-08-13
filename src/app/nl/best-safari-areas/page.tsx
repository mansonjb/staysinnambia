import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { getRegionNl } from "@/lib/data.nl";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Beste safari-gebieden in Namibië";
const DESCRIPTION =
  "Etosha, Damaraland en Caprivi vergeleken: welke Namibische safariregio écht bij uw reis past.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/best-safari-areas",
    languages: { en: "/best-safari-areas", de: "/de/best-safari-areas", nl: "/nl/best-safari-areas", fr: "/fr/best-safari-areas", it: "/it/best-safari-areas" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const COMPARISON = [
  {
    slug: "etosha",
    style: "Klassieke safari bij waterpoelen",
    wildlife:
      "De betrouwbaarste van de drie. Naar schatting 2.000+ olifanten, enkele honderden leeuwen verdeeld over zo'n twee dozijn troepen, en een van Afrika's belangrijkste populaties zwarte neushoorns concentreren zich rond verlichte waterpoelen, vooral naarmate het droge seizoen vordert.",
    pace: "Gestructureerde gamedrives vanuit een vaste basis, of uitzicht op een verlichte waterpoel zonder het kamp te verlaten",
    bestMonths:
      "Juli tot oktober, wanneer de seizoensgebonden plassen zijn opgedroogd en dieren zich verzamelen bij de permanente waterpoelen; verwacht drukte bij de populairste in het hoogseizoen",
  },
  {
    slug: "damaraland",
    style: "Tracking, te voet of per voertuig",
    wildlife:
      "Een compleet andere ervaring: aan de woestijn aangepaste olifanten die tot 700 km ver trekken en dagenlang zonder water kunnen, en, met een gespecialiseerde gids vanuit de Palmwag Concession, een van de grootste nog vrij rondtrekkende populaties zwarte neushoorns ter wereld, te voet opgespoord. Hier is niets gegarandeerd zoals bij de waterpoelen van Etosha; een waarneming voelt juist daarom waardevoller, omdat hij niet in scène is gezet.",
    pace: "Langzamer, begeleid, gebaseerd op conservancies, vaak te voet",
    bestMonths:
      "Mei tot oktober (droog seizoen); na regen verspreiden de dieren zich veel verder, waardoor de slagingskans van tracking buiten deze periode daalt",
  },
  {
    slug: "caprivi",
    style: "Wildlife bij rivier en overstromingsvlakte",
    wildlife:
      "Nijlpaarden en krokodillen in het Kwando-Linyanti-riviersysteem, grote kuddes olifanten en buffels die door Bwabwata National Park trekken, en bijna 450 geregistreerde vogelsoorten: een oprecht ander ecosysteem dan de woestijnroute verder naar het zuiden, geen mindere versie ervan.",
    pace: "Boottochten naast gamedrives",
    bestMonths:
      "April tot september, wanneer het droge seizoen de dieren concentreert langs de rivieren en overstromingsvlaktes en de rijomstandigheden op hun best zijn",
  },
];

export default function SafariAreasPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Gidsen", url: `${SITE_URL}/nl/guides` },
          { name: "Beste safari-gebieden in Namibië", url: `${SITE_URL}/nl/best-safari-areas` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Beste safari-gebieden in Namibië
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          &quot;Safari&quot; betekent in elk van deze drie regio&apos;s iets anders: Etosha draait
          om dichtheid en betrouwbaarheid, Damaraland om de specifieke sensatie van het opsporen
          van aan de woestijn aangepaste diersoorten die nergens omheind zijn, en de Caprivi Strip
          voelt bijna als een ander land, een rivier- en overstromingsvlakte-ecosysteem dat
          vrijwel niets deelt met de woestijnroute verder naar het zuiden. Bekijk onze{" "}
          <Link
            href="/nl/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            wildlife gids
          </Link>{" "}
          voor wat u van elk kunt verwachten. Geen enkele is strikt beter: ze passen bij
          verschillende prioriteiten.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {COMPARISON.map((c, i) => {
            const region = getRegionNl(c.slug);
            if (!region) return null;
            return (
              <Reveal key={c.slug} delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                  <h2 className="font-serif text-2xl italic text-charcoal">{region.name}</h2>
                  <dl className="mt-4 space-y-4 border-t border-charcoal/10 pt-4">
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Safaristijl
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.style}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Wildlife
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.wildlife}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Tempo
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.pace}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Beste maanden
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.bestMonths}</dd>
                    </div>
                  </dl>
                  <Link
                    href={`/nl/where-to-stay/${region.slug}`}
                    className="group mt-6 flex items-center justify-between border-t border-charcoal/10 pt-4 text-[13px] font-medium text-charcoal/60 hover:text-rust"
                  >
                    Verblijven in {region.name}
                    <CardArrow />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">Onze aanbeveling:</span> als u er maar
            één kunt kiezen, is Etosha de veiligere keuze voor een eerste safari, vooral tussen
            augustus en oktober, wanneer de activiteit bij de waterpoelen piekt. Damaraland
            verdient zijn plek op een langere reis als de regio die geduld beloont met iets wat
            Etosha niet kan bieden: vrij rondtrekkende, aan de woestijn aangepaste dieren zonder
            een hek in zicht. De Caprivi Strip is alleen de moeite van het toevoegen waard als u
            doorreist naar de Okavango Delta of Chobe in Botswana, of specifiek op zoek bent naar
            vogels en wildlife bij het water: als op zichzelf staande stop op een korte,
            Namibië-only reis is de rit van zo&apos;n 12 uur (de meeste mensen vliegen liever naar
            Katima Mulilo) lastig te rechtvaardigen.
          </p>
        </Reveal>
      </section>
    </>
  );
}
