import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
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
    languages: { en: "/namibia-trip-cost", de: "/de/namibia-trip-cost", nl: "/nl/namibia-trip-cost" },
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
        met een compacte 2x4, guesthouses en campings, deels zelf koken.
      </>
    ),
  },
  {
    name: "Middenklasse",
    range: "≈ € 325 / dag",
    desc: "Zelf rijden of kleinschalige groepsreis, 3-sterrenlodges en guesthouses, de meeste maaltijden inbegrepen.",
  },
  {
    name: "Luxe",
    range: "€ 700+ / dag",
    desc: "Fly-in of begeleide safari, designlodges, volpension met activiteiten inbegrepen.",
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
    a: "Veruit het accommodatieniveau: het verschil tussen een guesthouse en een fly-in luxelodge is vaak 5 tot 10 keer zoveel per nacht. Voertuigtype (2x4 vs. 4x4 huurauto) en begeleid versus zelf rijden zijn de volgende grootste factoren.",
  },
  {
    q: "Hoeveel bedragen de toegangskosten voor Namibië's nationale parken?",
    a: "Deze stegen sterk op 1 april 2026, de eerste verhoging sinds 2021. Internationale bezoekers betalen nu N$280 per persoon per dag (tegenover voorheen N$150) bij grote parken zoals Etosha en Namib-Naukluft, plus een voertuigkosten van N$620 voor twee personen, met goedkopere tarieven voor SADC-burgers en Namibiërs. Houd hier expliciet rekening mee bij een zelfrijreis langs meerdere parken: het loopt sneller op dan de oudere, lagere bedragen die op sommige verouderde gidsen nog worden genoemd.",
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
