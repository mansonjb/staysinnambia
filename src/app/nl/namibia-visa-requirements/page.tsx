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
      nl: "/nl/namibia-visa-requirements",
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
    a: "Dat hangt af van uw nationaliteit. Buurlanden uit de SADC-regio en een aantal andere landen blijven visumvrij voor korte verblijven. De meeste andere nationaliteiten (waaronder de meerderheid van de EU-landen, het VK en de VS) komen in aanmerking voor een Visa on Arrival, maar sinds april 2025 moet dat visum vooraf online worden aangevraagd in plaats van ter plekke op de luchthaven te worden uitgegeven.",
  },
  {
    q: "Wat veranderde er op 1 april 2025?",
    a: "Namibië schakelde zijn Visa on Arrival-regeling om naar een verplichte online aanvraag voorafgaand aan aankomst. Reizigers die in aanmerking komen voor VOA kunnen niet langer simpelweg in de rij staan bij immigratie en contant betalen: de aanvraag, betaling en goedkeuring vinden nu plaats vóór vertrek, vergelijkbaar met een eTA.",
  },
  {
    q: "Hoeveel kost het Namibië Visa on Arrival?",
    a: "De vergoeding voor het Visa on Arrival bedraagt US$90, online te betalen op het moment van aanvraag. Het visum is 3 maanden geldig vanaf de uitgiftedatum en staat een eenmalig verblijf van maximaal 30 dagen toe.",
  },
  {
    q: "Welke documenten heb ik nodig om aan te vragen?",
    a: "Een paspoort dat nog minstens 6 maanden geldig is na uw reisdata met minstens 3 lege pagina's, een uitnodigingsbrief of accommodatiebevestiging, en bewijs van voldoende financiële middelen en reis-/medische verzekering voor uw verblijf. Vereisten kunnen veranderen, dus bevestig de actuele lijst via Namibië's officiële immigratiekanalen voordat u een aanvraag indient.",
  },
  {
    q: "Hoe ver van tevoren moet ik aanvragen?",
    a: "Vraag aan zodra uw reisdata vaststaan. Als nieuw online systeem waren de verwerkingstijden in de vroege uitrol wisselend: houd liever enkele weken speling aan dan pas de week voor vertrek aan te vragen.",
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
          uitgegeven: u moet het online aanvragen en betalen voordat u vliegt. Veel oudere gidsen
          beschrijven nog het oude systeem. Hier leest u wat nu geldt, en hoe de vergoeding van $90
          past in de rest van uw{" "}
          <Link href="/nl/namibia-trip-cost" className="font-medium text-rust hover:text-rust-dark">
            reisbudget
          </Link>
          .
        </p>
        <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Deze pagina vat publiek gerapporteerde beleidswijzigingen samen en is geen
          immigratieadvies. Bevestig de actuele vereisten voor uw nationaliteit bij Namibië&apos;s
          officiële immigratieautoriteit voordat u boekt.
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
              "Paspoort dat nog minimaal 6 maanden geldig is na uw reisdata, met minstens 3 lege pagina's",
              "Uitnodigingsbrief of bevestigde accommodatieboeking",
              "Bewijs van voldoende financiële middelen voor uw verblijf",
              "Bewijs van reis- of medische verzekering",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
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
