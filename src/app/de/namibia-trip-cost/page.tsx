import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
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
    languages: { en: "/namibia-trip-cost", de: "/de/namibia-trip-cost", nl: "/nl/namibia-trip-cost" },
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
        mit einem kompakten 2x4, Gästehäusern und Campingplätzen, teilweise Selbstverpflegung.
      </>
    ),
  },
  {
    name: "Mittelklasse",
    range: "≈ €325 / Tag",
    desc: "Selbstfahren oder Kleingruppenreise, 3-Sterne-Lodges und Gästehäuser, die meisten Mahlzeiten inklusive.",
  },
  {
    name: "Luxus",
    range: "€700+ / Tag",
    desc: "Fly-in- oder geführte Safari, Design-Lodges, Vollpension mit inkludierten Aktivitäten.",
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
    a: "Mit Abstand die Unterkunftskategorie: Der Unterschied zwischen einem Gästehaus und einer Fly-in-Luxus-Lodge liegt pro Nacht oft beim 5- bis 10-Fachen. Fahrzeugtyp (2x4 vs. 4x4-Mietwagen) und geführt vs. selbstfahren sind die nächstgrößten Faktoren.",
  },
  {
    q: "Wie hoch sind die Eintrittsgebühren für Namibias Nationalparks?",
    a: "Sie stiegen am 1. April 2026 deutlich an, die erste Erhöhung seit 2021. Internationale Besucher zahlen jetzt N$280/Person/Tag (zuvor N$150) in großen Parks wie Etosha und Namib-Naukluft, plus eine Fahrzeuggebühr von N$620 für zwei Personen, mit günstigeren Tarifen für SADC-Bürger und Namibier. Planen Sie das bei einer Selbstfahrer-Reise durch mehrere Parks explizit ein: Es summiert sich schneller, als die älteren, niedrigeren Zahlen vermuten lassen, die in manchen älteren Guides noch genannt werden.",
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
