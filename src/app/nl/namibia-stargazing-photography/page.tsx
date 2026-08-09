import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Sterrenkijkgids voor Namibië";
const DESCRIPTION =
  "Waar de nachtelijke hemel boven Namibië het donkerst is, en wat deze plekken werkelijk anders maakt: het Gold-tier Dark Sky Reserve van NamibRand, het licht voor duinfotografie, en waar u eronder kunt slapen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-stargazing-photography",
    languages: {
      en: "/namibia-stargazing-photography",
      de: "/de/namibia-stargazing-photography",
      nl: "/nl/namibia-stargazing-photography", fr: "/fr/namibia-stargazing-photography",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "Beste lodges in Namibië", href: "/nl/best-lodges-in-namibia" },
  { title: "Verblijven in Etosha", href: "/nl/where-to-stay/etosha" },
  { title: "Verblijven in Sossusvlei", href: "/nl/where-to-stay/sossusvlei" },
  { title: "Zelf rijden door Namibië", href: "/nl/namibia-self-drive-guide" },
  { title: "Beste reistijd voor Namibië", href: "/nl/best-time-to-visit-namibia" },
  { title: "Visumvereisten voor Namibië", href: "/nl/namibia-visa-requirements" },
  { title: "Is Namibië veilig? Veiligheid & gezondheid", href: "/nl/namibia-safety-and-health" },
  { title: "Wat kost een reis naar Namibië?", href: "/nl/namibia-trip-cost" },
  { title: "Gids voor wilde dieren in Namibië", href: "/nl/namibia-wildlife-guide" },
];

const SPOTS = [
  {
    place: "NamibRand Nature Reserve",
    href: "/nl/where-to-stay/sossusvlei",
    text: (
      <>
        De belangrijkste dark-sky-bestemming van Namibië. NamibRand werd in 2012 erkend als Gold-tier
        International Dark Sky Reserve, de strengste van de drie classificaties en destijds pas het
        tweede Gold-tier reservaat ter wereld. Metingen met een Sky Quality Meter op het reservaat
        liggen doorgaans boven 21,0 magnitude per vierkante boogseconde, dicht bij het theoretische
        duisternisplafond van ongeveer 22, en komen overeen met Bortle-klasse 1-2, de donkerste
        classificatie die astronomen gebruiken. Op een heldere, maanloze nacht ziet u de stofbanen
        van de Melkweg met het blote oog, samen met de Magelhaense Wolken en soms zodiakaal licht,
        een zwakke lichtkegel van zonlicht dat wordt weerkaatst door interplanetair stof en die
        vrijwel nergens anders zichtbaar is waar kunstlicht in de buurt is. Verschillende lodges aan
        de rand van het reservaat, waaronder Wolwedans en NamibRand Family Hideout, organiseren
        begeleide astronomiesessies met echte telescopen in plaats van slechts een deken op het
        zand. Plan uw bezoek in het droge seizoen (mei–september), wanneer de lucht het droogst is
        en de bewolking het laagst. Bekijk onze{" "}
        <Link href="/nl/best-time-to-visit-namibia" className="font-semibold text-rust hover:text-rust-dark">
          gids voor de beste reistijd
        </Link>
        .
      </>
    ),
  },
  {
    place: "Duinen van Sossusvlei",
    href: "/nl/where-to-stay/sossusvlei",
    text: "Dezelfde heldere woestijnlucht die de nachtelijke hemel uitzonderlijk maakt, zorgt hier ook voor zonsopgangfotografie die tot de beste van Afrika behoort: in het venster van 20 tot 45 minuten na het openen van de poort is de duinkleur het dramatischt, voordat de hittenevel intreedt. Voor astrofotografie vormen de duinen zelf een indrukwekkende voorgrond voor de Melkweg; loop een stukje weg van het kamplicht en laat uw ogen minstens 15-20 minuten wennen voordat u begint te fotograferen.",
  },
  {
    place: "Spitzkoppe",
    href: "/nl/where-to-stay/spitzkoppe",
    text: "Een cluster granieten inselbergs die tot 1.728 m oprijzen, met zo'n 670 m reliëf boven de omringende grindvlakte, ongeveer 180 km van Swakopmund en 280 km van Windhoek. De silhouet tegen de Melkweg behoort tot de meest gefotografeerde voorgronden van Namibië, en in tegenstelling tot NamibRand is het een makkelijke self-drive stop in plaats van een reservaatboeking. De door de gemeenschap beheerde camping telt zo'n 30 eenvoudige, ruim uit elkaar liggende plekken middenin de rotsblokken, dus u kunt fotograferen vanaf uw eigen tentplek zonder enige lichtvervuiling; boek een paar maanden vooruit tijdens het hoogseizoen van juli tot september.",
  },
];

const GEAR_TIPS = [
  "Fotografeer rond nieuwe maan: een maanloze hemel is vele malen donkerder dan zelfs bij eerste kwartier, en dat is de belangrijkste factor voor hoeveel van de Melkweg u werkelijk zult zien. Check de maankalender voordat u data vastlegt als sterrenkijken een prioriteit van de reis is.",
  "Een statief is onmisbaar; een groothoeklens (14-24 mm op full-frame) laat u meer hemel en voorgrond in één opname vangen.",
  "Gebruik als vertrekpunt het breedste diafragma van uw lens (f/2,8 of sneller indien beschikbaar), ISO 1600-6400, en een sluitertijd korter dan ongeveer 500 gedeeld door de brandpuntsafstand in mm om sterren als punten in plaats van strepen vast te leggen (bijvoorbeeld ~20 seconden bij 24 mm).",
  "Neem een hoofdlamp met rood-lichtmodus mee om uw nachtzicht te behouden, en een afstandsbediening of de zelfontspanner van uw camera om trillingen door het indrukken van de knop te voorkomen.",
  "Kom bij uw locatie aan terwijl er nog wat licht is om de opname te componeren en op lensbeslag te controleren, wat snel optreedt zodra de woestijntemperatuur na zonsondergang daalt.",
];

const FAQS = [
  {
    q: "Wat maakt de nachtelijke hemel van NamibRand anders dan andere donkere plekken?",
    a: "NamibRand heeft sinds 2012 de Gold-status van International Dark Sky Reserve, de hoogste van de drie classificaties die worden toegekend door DarkSky International, en het was destijds pas het tweede Gold-tier reservaat ter wereld. Metingen met een Sky Quality Meter op het reservaat liggen doorgaans boven 21 magnitude per vierkante boogseconde tegenover een theoretisch maximum van ongeveer 22, wat overeenkomt met Bortle-klasse 1-2, de donkerste classificatie die astronomen gebruiken. Dat weerspiegelt zowel de vrijwel volledige afwezigheid van kunstlicht als actieve, voortdurende maatregelen van het reservaat en de aangrenzende lodges, waaronder afgeschermde, naar beneden gerichte verlichting, om dat zo te houden.",
  },
  {
    q: "Heb ik speciale apparatuur nodig voor astrofotografie in Namibië?",
    a: "Een statief en een camera die handmatige lange sluitertijden aankan, brengen u al een heel eind; een groothoeklens (14-24 mm equivalent) helpt voor opnames van de Melkweg, samen met een snel diafragma (f/2,8 of ruimer) en een hoofdlamp met rood-lichtstand om uw nachtzicht te behouden. Verschillende lodges bij NamibRand en Sossusvlei, waaronder Wolwedans en NamibRand Family Hideout, organiseren begeleide astronomiesessies met echte telescopen als u meer wilt dan een brede opname van de hemel.",
  },
  {
    q: "Wat is de beste tijd van het jaar om te sterrenkijken in Namibië?",
    a: "Het droge seizoen (mei–september) geeft de helderste, droogste lucht en de minste bewolking, wat ook meteen verklaart waarom het samenvalt met het piekseizoen voor wildlife-spotten. Plan binnen dat venster rond de maankalender: een nacht dicht bij nieuwe maan geeft de donkerst mogelijke hemel, terwijl een paar nachten rond volle maan alle behalve de helderste sterren wegspoelt, dus het loont om de maanfase te checken voordat u reisdata vastlegt als sterrenkijken een prioriteit is.",
  },
  {
    q: "Is Sossusvlei of Spitzkoppe beter voor fotografie?",
    a: "Verschillende onderwerpen, geen kwestie van beter of slechter. Sossusvlei draait om duinkleur en schaal bij zonsopgang; Spitzkoppe, een cluster granieten inselbergs op zo'n 180 km van Swakopmund die oprijzen tot 1.728 m, draait om dramatische rotssilhouetten tegen de Melkweg na donker, met een door de gemeenschap beheerde camping die u middenin de rotsblokken plaatst. Verschillende reisroutes combineren beide als een overnachting onderweg tussen de twee.",
  },
];

export default function StargazingPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Sterrenkijken & fotografie", url: `${SITE_URL}/nl/namibia-stargazing-photography` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Sterrenkijken en astrofotografie in Namibië
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          De droge lucht van Namibië en de vrijwel volledige afwezigheid van lichtvervuiling maken
          het land een van de weinige echte dark-sky-bestemmingen ter wereld, geen marketingpraat.
          Hier leest u waar het werkelijk het best is, en waarom.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Onze aanbeveling:</span> als sterrenkijken
          een echte prioriteit van uw reis is en niet slechts een leuke bijkomstigheid, plan uw data
          dan eerst rond de maanfase en pas daarna rond het seizoen. Een nacht in het droge seizoen
          (mei–september) rond nieuwe maan bij NamibRand verslaat een volle-maannacht in elke andere
          maand.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {SPOTS.map((s, i) => (
            <Reveal
              key={s.place}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{s.place}</h2>
                <Link
                  href={s.href}
                  className="text-[12px] font-semibold uppercase tracking-[0.1em] text-rust hover:text-rust-dark"
                >
                  Verblijven →
                </Link>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Timing en apparatuur, in de praktijk</h2>
          <ul className="mt-5 space-y-3">
            {GEAR_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-[14px] leading-relaxed text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {tip}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Veelgestelde vragen
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4">
          {FAQS.map((faq, i) => (
            <Reveal
              key={faq.q}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-charcoal">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{faq.a}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-10 sm:px-10">
        <Reveal className="flex flex-wrap gap-3">
          {POPULAR_GUIDES_NL.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
            >
              {g.title}
            </Link>
          ))}
        </Reveal>
      </section>
    </>
  );
}
