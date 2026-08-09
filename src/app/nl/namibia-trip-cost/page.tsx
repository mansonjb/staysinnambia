import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibië reiskosten gids";
const DESCRIPTION =
  "Realistische kostenrichtlijnen per persoon per dag voor een Namibië-reis in de categorieën budget, middenklasse en luxe, plus wat zelf rijden u bespaart ten opzichte van een begeleide safari.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-trip-cost",
    languages: { en: "/namibia-trip-cost", de: "/de/namibia-trip-cost", nl: "/nl/namibia-trip-cost", fr: "/fr/namibia-trip-cost" },
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
  { title: "Namibië zelfrijgids", href: "/nl/namibia-self-drive-guide" },
  { title: "Beste tijd om Namibië te bezoeken", href: "/nl/best-time-to-visit-namibia" },
  { title: "Namibië visumvereisten", href: "/nl/namibia-visa-requirements" },
  { title: "Is Namibië veilig? Veiligheid & gezondheid", href: "/nl/namibia-safety-and-health" },
  { title: "Hoeveel kost een Namibië-reis?", href: "/nl/namibia-trip-cost" },
  { title: "Namibië wildlife gids", href: "/nl/namibia-wildlife-guide" },
];

const TIERS = [
  {
    name: "Budget",
    range: "≈ € 225–250 / dag",
    desc: (
      <>
        <Link
          href="/nl/namibia-self-drive-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          Zelf rijden
        </Link>{" "}
        in een compacte 2x4 (ongeveer N$900-1.400/dag voor een Corolla Cross, Polo Sedan of
        Hyundai Creta-klasse auto), een mix van NWR- en particuliere campings (≈N$150-500 per
        persoon) met om de paar dagen een nacht in een guesthouse in de stad ($58-112 voor twee in
        Swakopmund of Windhoek), en de meeste avonden zelf koken met boodschappen van de
        supermarkt.
      </>
    ),
  },
  {
    name: "Middenklasse",
    range: "≈ € 325 / dag",
    desc: "Zelf rijden in een goed uitgeruste 2x4 of instap-4x4, of een kleinschalige groepsreis, met verblijf in 3-sterrenlodges en guesthouses (doorgaans $120-250/nacht voor twee), meestal met ontbijt en vaak diner inbegrepen.",
  },
  {
    name: "Luxe",
    range: "€ 700+ / dag",
    desc: "Fly-in of begeleide safari met een privégids, designlodges zoals die in de Namib en Kunene, volpension van $350-700+ per persoon per nacht met gamedrives, panoramavluchten of begeleide wandelingen inbegrepen.",
  },
];

const COST_LEVERS = [
  {
    title: "Autohuur",
    text: "Een eenvoudige 2x4 kost ongeveer N$900-1.400/dag. Een volledig uitgeruste 4x4 safariauto met daktent en kampeeruitrusting van een verhuurder zoals Bushlore ligt eerder rond N$2.500-4.000/dag, afhankelijk van het seizoen, vóór korting op het eigen risico. Zie onze zelfrijgids voor wat dat eigen risico precies dekt.",
  },
  {
    title: "Brandstof",
    text: "Pompprijzen bewegen mee met wijzigingen in overheidsheffingen; begin augustus 2026 lagen ze rond N$24,48/liter voor benzine 95 en N$26,26/liter voor diesel aan de kust, met doorgaans iets hogere prijzen landinwaarts door transportkosten. Een tweeweekse zelfrijroute verbruikt al snel N$4.000-6.000 aan brandstof voor één voertuig.",
  },
  {
    title: "Toegangskosten parken",
    text: "Internationale bezoekers betalen N$280 per persoon per dag bij Etosha en Namib-Naukluft (gelijk verdeeld over een toegangsprijs en een natuurbehoudsheffing), plus een aparte voertuigkosten van N$50/dag voor een normale auto. Kinderen tot en met 8 jaar zijn gratis; oudere kinderen en SADC-burgers betalen verlaagde tarieven. Er wordt per blok van 24 uur gefactureerd, dus plan uw poortbezoeken zo dat u niet betaalt voor een dag die u nauwelijks gebruikt.",
  },
  {
    title: "De visumkosten van $90",
    text: "De meeste nationaliteiten betalen dit nu online vooraf in plaats van bij aankomst. Het is een vast bedrag ongeacht de reisduur of het niveau, dus het weegt proportioneel zwaarder mee bij een korte reis.",
  },
];

const FAQS = [
  {
    q: "Hoeveel kost een Namibië-safari per dag?",
    a: "Ongeveer € 225-250 per persoon per dag voor een budget zelfrijreis, rond € 325 per dag voor middenklasse, en € 700+ per dag voor een volledig begeleide luxe- of fly-insafari met all-inclusive lodges. Dit zijn schattingen per persoon voor accommodatie, de meeste maaltijden en een huurauto of begeleid vervoer; vluchten naar Namibië zijn apart.",
  },
  {
    q: "Is zelf rijden goedkoper dan een begeleide safari in Namibië?",
    a: "Aanzienlijk: bij zelf rijden vervallen de kosten van een privégids en voertuig, verreweg de grootste uitgave bij een begeleide reis. De keerzijde is uw eigen tijd die opgaat aan logistiek en rijden. Bekijk onze zelfrijgids voor wat dat in de praktijk inhoudt.",
  },
  {
    q: "Welke valuta gebruikt Namibië?",
    a: "De Namibische dollar (N$), 1:1 gekoppeld aan de Zuid-Afrikaanse rand. Rand wordt ook algemeen geaccepteerd. Kaarten werken in steden en de meeste lodges; neem contant geld mee voor tankstations, parkentreekosten en landelijke gebieden waar pinapparaten onbetrouwbaar zijn.",
  },
  {
    q: "Wat is de grootste kostenfactor bij een Namibië-reis?",
    a: "Veruit het accommodatieniveau: het verschil tussen een guesthouse en een fly-in luxelodge is vaak 5 tot 10 keer zoveel per nacht. Voertuigtype (2x4 vs. 4x4 huurauto) en begeleid versus zelf rijden zijn de volgende grootste factoren, want een volledig uitgeruste 4x4 safariauto kan 2 tot 3 keer zoveel kosten als een eenvoudige 2x4.",
  },
  {
    q: "Hoeveel bedragen de toegangskosten voor Namibië's nationale parken?",
    a: "Deze stegen fors op 1 april 2026, de eerste verhoging sinds 2021, een sprong van 86% ten opzichte van het vorige tarief. Internationale bezoekers betalen nu N$280 per persoon per dag (gelijk verdeeld over een toegangsprijs van N$140 en een natuurbehoudsheffing van N$140) bij grote parken zoals Etosha en Namib-Naukluft, tegenover voorheen N$150, plus een aparte voertuigkosten van N$50/dag voor een normale auto (2-10 zitplaatsen). SADC-burgers betalen N$180 per persoon per dag, Namibiërs N$60, en kinderen tot en met 8 jaar zijn gratis. Kosten worden per blok van 24 uur gefactureerd en zijn niet-restitueerbaar, dus houd hier expliciet rekening mee bij een zelfrijreis langs meerdere parken.",
  },
  {
    q: "Hoeveel kost brandstof voor een zelfrijreis door Namibië?",
    a: "Begin augustus 2026 lagen de pompprijzen rond N$24,48/liter voor benzine 95 en N$26,26/liter voor diesel aan de kust (Walvis Bay), met een kleine transportopslag landinwaarts. Brandstofprijzen bewegen enkele keren per jaar mee met wijzigingen in overheidsheffingen, dus beschouw dit als een momentopname en geen vast bedrag. Een typische route van twee tot drie weken langs Etosha, Damaraland, Sossusvlei en de kust verbruikt ongeveer N$4.000-6.000 aan brandstof voor één voertuig.",
  },
  {
    q: "Hoeveel kost een huurauto in Namibië?",
    a: "Een eenvoudige 2x4 met redelijke bodemvrijheid (Toyota Corolla Cross, VW Polo Sedan, Hyundai Creta-klasse) kost bij lokale verhuurders ongeveer N$900-1.400/dag. Een volledig uitgeruste 4x4 met daktent en kampeeruitrusting van een specialist zoals Bushlore of Asco Car Hire ligt eerder rond N$2.500-4.000/dag in laag- tot hoogseizoen, en dat is nog vóór een verzekering met verlaagd eigen risico, die doorgaans €8-25/dag extra kost, afhankelijk van hoeveel u het standaard eigen risico van N$20.000-40.000 wilt verlagen.",
  },
];

export default function TripCostPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Reiskosten", url: `${SITE_URL}/nl/namibia-trip-cost` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Hoeveel kost een reis naar Namibië?
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibië kan een echt betaalbaar zelfrijland zijn of een luxesafari met vijf cijfers op
          de rekening. Het accommodatieniveau dat u kiest, bepaalt welke van de twee het wordt.
          Hieronder grove richtlijnen per persoon per dag, exclusief vluchten en de $90{" "}
          <Link
            href="/nl/namibia-visa-requirements"
            className="font-medium text-rust hover:text-rust-dark"
          >
            visum-bij-aankomst-vergoeding
          </Link>{" "}
          die de meeste nationaliteiten nu online vooraf betalen.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 80}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-xl font-bold text-charcoal">{t.name}</h2>
              <p className="mt-1 font-serif text-2xl italic text-rust">{t.range}</p>
              <p className="mt-4 text-[14px] leading-relaxed text-charcoal/70">{t.desc}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Alleen schattingen, per persoon per dag. Werkelijke kosten variëren met seizoen,
          groepsgrootte en route. Exclusief internationale vluchten.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Wat het bedrag écht bepaalt</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Achter de drie niveaus hierboven doen vier posten het meeste werk. Krijg deze goed in
            beeld bij het budgetteren en de schatting per dag stopt met gokken te zijn.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {COST_LEVERS.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <MetaIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-olive" />
                <div>
                  <h3 className="text-[14px] font-bold text-charcoal">{c.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{c.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
          <Link
            href="/nl/best-luxury-lodges"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Beste luxe lodges
          </Link>
        </Reveal>
      </section>
    </>
  );
}
