import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Reisekosten-Guide";
const DESCRIPTION =
  "Realistische Tagesbudgets pro Person für eine Namibia-Reise in den Kategorien Budget, Mittelklasse und Luxus, plus wie viel Sie mit Selbstfahren gegenüber einer geführten Safari sparen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-trip-cost",
    languages: { en: "/namibia-trip-cost", de: "/de/namibia-trip-cost", nl: "/nl/namibia-trip-cost", fr: "/fr/namibia-trip-cost" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_DE = [
  { title: "Beste Lodges in Namibia", href: "/de/best-lodges-in-namibia" },
  { title: "Unterkünfte in Etosha", href: "/de/where-to-stay/etosha" },
  { title: "Unterkünfte in Sossusvlei", href: "/de/where-to-stay/sossusvlei" },
  { title: "Namibia Selbstfahrer-Guide", href: "/de/namibia-self-drive-guide" },
  { title: "Beste Reisezeit für Namibia", href: "/de/best-time-to-visit-namibia" },
  { title: "Namibia Visabestimmungen", href: "/de/namibia-visa-requirements" },
  { title: "Ist Namibia sicher? Sicherheit & Gesundheit", href: "/de/namibia-safety-and-health" },
  { title: "Wie viel kostet eine Namibia-Reise?", href: "/de/namibia-trip-cost" },
  { title: "Namibia Tierwelt-Guide", href: "/de/namibia-wildlife-guide" },
];

const TIERS = [
  {
    name: "Budget",
    range: "≈ €225–250 / Tag",
    desc: (
      <>
        <Link
          href="/de/namibia-self-drive-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          Selbstfahren
        </Link>{" "}
        in einem kompakten 2x4 (etwa N$900 bis 1.400 pro Tag für einen Corolla Cross, Polo Sedan
        oder ein Fahrzeug der Hyundai-Creta-Klasse), ein Mix aus NWR- und privaten Campingplätzen
        (etwa N$150 bis 500 pro Person) mit alle paar Tage einer Gästehausnacht in der Stadt (58
        bis 112 $ für zwei Personen in Swakopmund oder Windhoek), und Selbstverpflegung an den
        meisten Abenden nach einem Supermarkteinkauf.
      </>
    ),
  },
  {
    name: "Mittelklasse",
    range: "≈ €325 / Tag",
    desc: "Selbstfahren mit einem gut ausgestatteten 2x4 oder Einstiegs-4x4, oder eine Kleingruppenreise, Übernachtung in 3-Sterne-Lodges und Gästehäusern (üblicherweise 120 bis 250 $ pro Nacht für zwei Personen), meist mit Frühstück und oft auch Abendessen inklusive.",
  },
  {
    name: "Luxus",
    range: "€700+ / Tag",
    desc: "Fly-in- oder geführte Safari mit privatem Guide, design-orientierte Lodges wie jene in der Namib und im Kunene, Vollpension für 350 bis 700+ $ pro Person und Nacht, inklusive Pirschfahrten, Rundflügen oder geführten Wanderungen.",
  },
];

const COST_LEVERS = [
  {
    title: "Mietwagen",
    text: "Ein einfacher 2x4 kostet etwa N$900 bis 1.400 pro Tag. Ein voll ausgestattetes 4x4-Safarifahrzeug mit Dachzelt und Campingausrüstung von einem Anbieter wie Bushlore liegt eher bei N$2.500 bis 4.000 pro Tag, je nach Saison, vor Reduzierung der Versicherungsselbstbeteiligung. Was diese Selbstbeteiligung tatsächlich abdeckt, erfahren Sie in unserem Selbstfahrer-Guide.",
  },
  {
    title: "Treibstoff",
    text: "Die Preise an der Zapfsäule bewegen sich mit Änderungen der staatlichen Abgaben; Anfang August 2026 lagen sie bei rund N$24,48 pro Liter für Benzin 95 und N$26,26 pro Liter für Diesel an der Küste, im Landesinneren wegen der Transportkosten meist etwas höher. Eine zweiwöchige Selbstfahrer-Rundreise verbraucht für ein Fahrzeug leicht N$4.000 bis 6.000 an Treibstoff.",
  },
  {
    title: "Parkgebühren",
    text: "Internationale Besucher zahlen in Etosha und im Namib-Naukluft-Park N$280 pro Person und Tag (je zur Hälfte aufgeteilt in eine Eintritts- und eine Naturschutzgebühr), plus eine separate Fahrzeuggebühr von N$50 pro Tag für ein normales Auto. Kinder bis 8 Jahre sind frei; ältere Kinder und Staatsangehörige der SADC-Länder zahlen ermäßigte Sätze. Abgerechnet wird pro 24-Stunden-Block, planen Sie Ihre Torzeiten also so, dass Sie nicht für einen kaum genutzten Tag zahlen.",
  },
  {
    title: "Die 90-$-Visagebühr",
    text: "Die meisten Nationalitäten zahlen diese inzwischen online im Voraus statt bei Ankunft. Es handelt sich um einen Fixbetrag unabhängig von Reisedauer oder Kategorie, der sich bei einer kurzen Reise anteilig stärker bemerkbar macht.",
  },
];

const FAQS = [
  {
    q: "Wie viel kostet eine Namibia-Safari pro Tag?",
    a: "Etwa 225–250 €/Person/Tag für eine Budget-Selbstfahrer-Reise, rund 325 €/Tag für die Mittelklasse und 700+ €/Tag für eine vollständig geführte Luxus- oder Fly-in-Safari mit All-inclusive-Lodges. Das sind Schätzwerte pro Person für Unterkunft, die meisten Mahlzeiten und einen Mietwagen oder geführten Transport; Flüge nach Namibia sind nicht enthalten.",
  },
  {
    q: "Ist Selbstfahren günstiger als eine geführte Safari in Namibia?",
    a: "Deutlich: Beim Selbstfahren entfallen die Kosten für einen privaten Guide und ein Fahrzeug, der mit Abstand größte Posten einer geführten Reise. Der Kompromiss ist Ihre eigene Zeit für Logistik und Fahren. In unserem Selbstfahrer-Guide erfahren Sie, was das konkret bedeutet.",
  },
  {
    q: "Welche Währung wird in Namibia verwendet?",
    a: "Der Namibia-Dollar (N$), im Verhältnis 1:1 an den südafrikanischen Rand gekoppelt. Rand wird ebenfalls vielerorts akzeptiert. Karten funktionieren in Städten und den meisten Lodges; für Tankstellen, Parkgebühren und ländliche Gegenden, wo Kartenterminals unzuverlässig sind, sollten Sie Bargeld dabeihaben.",
  },
  {
    q: "Was ist der größte Kostenfaktor bei einer Namibia-Reise?",
    a: "Mit Abstand die Unterkunftskategorie: Der Unterschied zwischen einem Gästehaus und einer Fly-in-Luxus-Lodge liegt pro Nacht oft beim 5- bis 10-Fachen. Fahrzeugtyp (2x4 vs. 4x4-Mietwagen) und geführt vs. selbstfahren sind die nächstgrößten Faktoren, da ein voll ausgestattetes 4x4-Safarifahrzeug 2- bis 3-mal so viel kosten kann wie ein einfacher 2x4.",
  },
  {
    q: "Wie hoch sind die Eintrittsgebühren für Namibias Nationalparks?",
    a: "Sie stiegen am 1. April 2026 deutlich an, die erste Erhöhung seit 2021, ein Sprung von 86 Prozent gegenüber dem vorherigen Satz. Internationale Besucher zahlen jetzt N$280 pro Person und Tag (je zur Hälfte aufgeteilt in eine Eintrittsgebühr von N$140 und eine Naturschutzgebühr von N$140) in großen Parks wie Etosha und Namib-Naukluft, gegenüber vorher N$150, plus eine separate Fahrzeuggebühr von N$50 pro Tag für ein normales Auto (2 bis 10 Sitze). SADC-Bürger zahlen N$180 pro Person und Tag, Namibier N$60, und Kinder bis 8 Jahre haben freien Eintritt. Die Gebühren werden pro 24-Stunden-Block abgerechnet und sind nicht erstattungsfähig, planen Sie das bei einer Selbstfahrer-Reise durch mehrere Parks also explizit ein.",
  },
  {
    q: "Wie viel kostet Treibstoff für eine Namibia-Selbstfahrer-Reise?",
    a: "Anfang August 2026 lagen die Preise an der Zapfsäule bei rund N$24,48 pro Liter für Benzin 95 und N$26,26 pro Liter für Diesel an der Küste (Walvis Bay), im Landesinneren mit einem kleinen Transportaufschlag. Die Treibstoffpreise ändern sich mehrmals im Jahr mit den staatlichen Abgaben, betrachten Sie diese Zahlen also als Momentaufnahme und nicht als feste Größe. Eine typische zwei- bis dreiwöchige Selbstfahrer-Rundreise durch Etosha, Damaraland, Sossusvlei und die Küste verbraucht für ein Fahrzeug etwa N$4.000 bis 6.000 an Treibstoff.",
  },
  {
    q: "Wie viel kostet ein Mietwagen in Namibia?",
    a: "Ein einfacher 2x4 mit angemessener Bodenfreiheit (Toyota Corolla Cross, VW Polo Sedan, Fahrzeuge der Hyundai-Creta-Klasse) kostet bei lokalen Anbietern etwa N$900 bis 1.400 pro Tag. Ein voll ausgestatteter 4x4 mit Dachzelt und Campingausrüstung von einem Spezialisten wie Bushlore oder Asco Car Hire liegt eher bei N$2.500 bis 4.000 pro Tag je nach Saison, und das noch vor einer Zusatzversicherung zur Reduzierung der Selbstbeteiligung, die üblicherweise 8 bis 25 € pro Tag extra kostet, je nachdem, wie stark Sie die übliche Selbstbeteiligung von N$20.000 bis 40.000 senken möchten.",
  },
];

export default function TripCostPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Reisekosten", url: `${SITE_URL}/de/namibia-trip-cost` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Wie viel kostet eine Namibia-Reise?
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia kann ein wirklich erschwingliches Selbstfahrer-Land sein oder eine Luxus-Safari
          im fünfstelligen Bereich, je nachdem, welche Unterkunftskategorie Sie wählen. Unten
          finden Sie grobe Tagesbudgets pro Person, ohne Flüge und ohne die 90-$-{" "}
          <Link
            href="/de/namibia-visa-requirements"
            className="font-medium text-rust hover:text-rust-dark"
          >
            Gebühr für das Visum bei Ankunft
          </Link>
          , die die meisten Nationalitäten inzwischen online im Voraus bezahlen.
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
          Nur Schätzwerte, pro Person und Tag. Die tatsächlichen Kosten variieren je nach Saison,
          Gruppengröße und Route. Internationale Flüge nicht enthalten.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Was den Betrag wirklich bestimmt</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Hinter den drei Kategorien oben stecken vier Posten, die den Großteil der Arbeit
            leisten. Wenn Sie diese richtig einschätzen, wird aus der Tagesschätzung keine
            Raterei mehr.
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
            Häufig gestellte Fragen
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
          {POPULAR_GUIDES_DE.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
            >
              {g.title}
            </Link>
          ))}
          <Link
            href="/de/best-luxury-lodges"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Beste Luxus-Lodges
          </Link>
        </Reveal>
      </section>
    </>
  );
}
