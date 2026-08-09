import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibië visumvereisten";
const DESCRIPTION =
  "Wat er in april 2025 veranderde: Namibië's nieuwe online Visa-on-Arrival-systeem, wie er nog een nodig heeft, de vergoeding van $90, en welke documenten u moet meenemen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-visa-requirements",
    languages: {
      en: "/namibia-visa-requirements",
      de: "/de/namibia-visa-requirements",
      nl: "/nl/namibia-visa-requirements", fr: "/fr/namibia-visa-requirements",
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
  { title: "Namibië zelfrijgids", href: "/nl/namibia-self-drive-guide" },
  { title: "Beste reistijd voor Namibië", href: "/nl/best-time-to-visit-namibia" },
  { title: "Namibië visumvereisten", href: "/nl/namibia-visa-requirements" },
  { title: "Is Namibië veilig? Veiligheid & gezondheid", href: "/nl/namibia-safety-and-health" },
  { title: "Wat kost een Namibië-reis?", href: "/nl/namibia-trip-cost" },
  { title: "Namibië wildlife gids", href: "/nl/namibia-wildlife-guide" },
];

const FAQS = [
  {
    q: "Heb ik een visum nodig voor Namibië?",
    a: "Dat hangt af van uw nationaliteit. Namibië houdt ongeveer 55 landen volledig vrijgesteld van visumplicht voor korte toeristische verblijven, waaronder de directe SADC-buurlanden Zuid-Afrika, Botswana, Zambia en Zimbabwe, plus nog eens 18 landen onder wederzijdse visumvrijstellingsovereenkomsten. De meeste andere nationaliteiten, waaronder de meerderheid van de EU-landen, het VK en de VS, komen in aanmerking voor een Visa on Arrival (VoA), maar sinds 1 april 2025 moet dat visum online worden aangevraagd en goedgekeurd vóór vertrek, en niet meer ter plekke op de luchthaven worden uitgegeven.",
  },
  {
    q: "Wat veranderde er op 1 april 2025, en is er sindsdien nog iets veranderd?",
    a: "Namibië's Ministry of Home Affairs, Immigration, Safety and Security (MHAISS) schakelde de Visa on Arrival-regeling om naar een verplichte online aanvraag vóór aankomst, ingediend via het eServices-portaal. Reizigers die in aanmerking komen voor VoA kunnen niet langer simpelweg in de rij staan bij immigratie en contant betalen: de aanvraag, betaling en goedkeuring vinden nu plaats vóór vertrek, vergelijkbaar met een eTA. Het systeem is sinds de lancering blijven veranderen: MHAISS voegde in oktober 2025 nog eens 36 landen toe aan de lijst voor de online VoA, en het toelatingskader is in 2026 met kleine tussentijdse updates blijven evolueren. Omdat de lijst kan verschuiven, controleert u het beste altijd uw specifieke nationaliteit op het officiële portaal dicht bij uw reisdatum in plaats van te vertrouwen op de lijst van vorig jaar.",
  },
  {
    q: "Hoeveel kost het Namibië Visa on Arrival?",
    a: "De gepubliceerde vergoeding is NAD 1.600 (ongeveer US$90 tegen de huidige wisselkoers) voor de meeste niet-Afrikaanse nationaliteiten, en een verlaagd tarief van NAD 1.200 (ongeveer US$65-70) voor onderdanen van andere lidstaten van de Afrikaanse Unie. Het wordt online betaald, in Namibische dollars, op het moment van aanvraag. Het visum is 3 maanden geldig vanaf de uitgiftedatum en staat een verblijf van maximaal 30 dagen per binnenkomst toe.",
  },
  {
    q: "Welke documenten heb ik nodig om aan te vragen?",
    a: "Een paspoort dat nog minstens 6 maanden geldig is na uw reisdata met lege pagina's voor het visum; een korte motivatiebrief met het doel van uw bezoek; een bevestigde accommodatieboeking of uitnodigingsbrief; een bankafschrift of ander bewijs van voldoende financiële middelen voor uw verblijf; en bewijs van reis- of medische verzekering die uw reis dekt. Sommige aanvragers wordt ook gevraagd om bevestiging van een aansluitende of terugvlucht. Vereisten kunnen veranderen, dus bevestig de actuele lijst via Namibië's officiële eServices-immigratieportaal voordat u een aanvraag indient.",
  },
  {
    q: "Hoe lang duurt de goedkeuring werkelijk?",
    a: "MHAISS's eigen richtlijnen geven ongeveer 7-10 werkdagen aan voor online aanvragen, al melden onafhankelijke immigratieadviseurs alles van goedkeuring op dezelfde dag tot langere wachttijden tijdens portaalonderhoud of periodes met hoge aanvraagdruk. Beschouw 7-10 werkdagen als de planningsbasis, vraag minstens 2-3 weken voor vertrek aan, en bouw extra speling in als u in het hoogseizoen reist (juli-september), wanneer het aantal aanvragen het hoogst is.",
  },
];

export default function VisaPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Visumvereisten", url: `${SITE_URL}/nl/namibia-visa-requirements` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids · Bijgewerkt voor 2026
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibië visumvereisten
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Sinds 1 april 2025 wordt Namibië&apos;s Visa on Arrival niet meer aan de grens
          uitgegeven: het moet online worden aangevraagd, betaald en goedgekeurd via het
          eServices-portaal van het Ministry of Home Affairs voordat u vliegt. De lijst met landen
          die in aanmerking komen is sindsdien blijven groeien, met recentelijk 36 extra landen
          toegevoegd in oktober 2025. Veel oudere gidsen beschrijven nog het systeem van vóór 2025,
          waarbij u ter plekke op de luchthaven betaalde. Hier leest u wat nu geldt, en hoe de
          vergoeding van ongeveer $90 past in de rest van uw{" "}
          <Link href="/nl/namibia-trip-cost" className="font-medium text-rust hover:text-rust-dark">
            reisbudget
          </Link>
          .
        </p>
        <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Deze pagina vat publiek gerapporteerde beleidswijzigingen en commentaar van
          immigratieadviseurs samen en is geen immigratieadvies. Regels, kosten en de lijst met
          landen die in aanmerking komen zijn sinds april 2025 al meerdere keren gewijzigd en
          kunnen opnieuw veranderen. Bevestig de actuele vereisten voor uw specifieke nationaliteit
          altijd rechtstreeks bij Namibië&apos;s officiële immigratieautoriteit (MHAISS, via het
          eServices-portaal) voordat u vluchten boekt of een visumvergoeding betaalt.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: "Visa on Arrival-vergoeding", value: "US$90" },
            { label: "Geldigheid vanaf uitgifte", value: "3 maanden" },
            { label: "Maximaal verblijf", value: "30 dagen" },
          ].map((stat) => (
            <Reveal
              key={stat.label}
              className="rounded-2xl border border-black/5 bg-white p-7 text-center shadow-sm"
            >
              <p className="font-serif text-4xl italic text-rust">{stat.value}</p>
              <p className="mt-2 text-[13px] uppercase tracking-[0.1em] text-charcoal/50">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Wat u nodig heeft voor de aanvraag</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Paspoort dat nog minimaal 6 maanden geldig is na uw reisdata, met lege pagina's voor het visum",
              "Een korte motivatiebrief met het doel van uw bezoek",
              "Bevestigde accommodatieboeking (of een formele uitnodigingsbrief als u bij contacten verblijft)",
              "Bankafschrift of ander bewijs van voldoende financiële middelen voor uw verblijf",
              "Bewijs van reis- of medische verzekering die de reis dekt",
              "Bevestiging van een aansluitende of terugvlucht, indien tijdens de aanvraag gevraagd",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] leading-relaxed text-charcoal/50">
            Aanvragen worden ingediend via Namibië&apos;s officiële overheidsportaal op{" "}
            <span className="font-medium text-charcoal/70">eservices.mhaiss.gov.na</span>, beheerd
            door het Ministry of Home Affairs, Immigration, Safety and Security. Vermijd
            derdenpartijsites die een opslag rekenen voor dezelfde aanvraag.
          </p>
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
