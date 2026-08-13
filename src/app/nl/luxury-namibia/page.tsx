import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Luxe in Namibië";
const DESCRIPTION =
  "Hoe een luxe reis door Namibië er in de praktijk uitziet: fly-in rondreizen, privégidsen en de topklasse lodges die de extra kosten waard zijn.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/luxury-namibia",
    languages: { en: "/luxury-namibia", de: "/de/luxury-namibia", nl: "/nl/luxury-namibia", fr: "/fr/luxury-namibia", it: "/it/luxury-namibia" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POINTS = [
  {
    title: "Fly-in in plaats van zelf rijden",
    text: (
      <>
        De topklasse lodges zijn vaak alleen per klein vliegtuig te bereiken, niet over de weg.
        Fly-in kampen in het Palmwag Concession-gebied en de Hoanib-vallei zijn specifiek gebouwd
        rond het opsporen van woestijnleeuwen, olifanten en neushoorns, en zijn normaal gesproken
        alleen bereikbaar per chartervlucht. Lodges op de NamibRand Nature Reserve bij Sossusvlei
        zijn doorgaans zo&apos;n 45 minuten per vliegtuig, tegenover de ongeveer 5 uur rijden die
        onze{" "}
        <Link
          href="/nl/namibia-self-drive-guide"
          className="text-rust underline underline-offset-2 hover:text-rust-dark"
        >
          zelfrijgids
        </Link>{" "}
        noteert voor dezelfde route over grind. Aan het uiterste einde ligt Serra Cafema volledig
        geïsoleerd aan de Kunene-rivier in de Hartmann-vallei, alleen bereikbaar per klein
        vliegtuig naar de eigen landingsbaan: oprecht de meest afgelegen lodge van het land.
      </>
    ),
  },
  {
    title: "Privéreservaten, niet alleen privékamers",
    text: "Luxe in Namibië gaat meestal over toegang, niet over de kwaliteit van het beddengoed. Ongava Reserve, grenzend aan Etosha's Anderson Gate, staat nachtelijke ritten en offroad tracking toe die het nationale park zelf niet toestaat. In Damaraland herbergt de Palmwag Concession een van de grootste nog vrij rondtrekkende populaties zwarte neushoorns ter wereld, en is het een van de weinige plekken in Afrika waar u ze te voet kunt opsporen met een gespecialiseerde gids in plaats van vanuit een voertuig.",
  },
  {
    title: "Minder, maar betere nachten",
    text: "Een luxe reisroute is vaak korter dan een budget-zelfrijreis: drie of vier kampementen verspreid over 8 tot 10 dagen, elk goed voor twee volle nachten in plaats van een korte tussenstop. Shipwreck Lodge aan de Skeleton Coast ontving een Michelin Key in de allereerste Global Michelin Keys Selection van de gids (2025), een nuttige graadmeter voor wat 'de vlucht waard' op dit niveau betekent.",
  },
  {
    title: "Wat de extra kosten daadwerkelijk opleveren",
    text: "In het topsegment krijgt elke unit doorgaans een eigen gids en vaak een eigen chef-kok, in plaats van een gedeeld gamedrive-voertuig en een vast menu. Het hele Namib-Naukluft-gebied rond Sossusvlei is een International Dark Sky Reserve (Gold Tier sinds 2012), waardoor sterrenkijken bij veel van de lodges een geplande activiteit is, van een dakraam op de kamer tot een open-air slaapplatform, niet alleen een heldere avond die u toevallig opvalt. Een privé-luchtballonvaart bij zonsopgang boven de duinen (Namib Sky Balloon Safaris, ongeveer N$9.900/US$550 per persoon, met een champagneontbijt als afsluiter) is het soort eenmalige uitspatting dat makkelijk is toe te voegen aan een luxe reisroute en lastig te rechtvaardigen bij een budgetreis.",
  },
];

export default function LuxuryPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Gidsen", url: `${SITE_URL}/nl/guides` },
          { name: "Luxe in Namibië", url: `${SITE_URL}/nl/luxury-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gidsen
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Luxe in Namibië
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Een luxe reis door Namibië lijkt minder op een vijfsterrenhotel en meer op volledige,
          privétoegang tot het landschap. Dit verandert er werkelijk als u meer uitgeeft: door
          welke poorten u kunt rijden, in wiens voertuig u zit, en hoeveel andere mensen ergens in
          de buurt zijn.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <MetaIcon name="compass" className="h-6 w-6 text-rust" />
                <h2 className="mt-4 text-lg font-bold text-charcoal">{p.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            href="/nl/best-luxury-lodges"
            className="group inline-flex items-center gap-3 rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Bekijk de beste luxe lodges
            <CardArrow className="bg-ivory/20 text-ivory group-hover:bg-ivory group-hover:text-rust" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
