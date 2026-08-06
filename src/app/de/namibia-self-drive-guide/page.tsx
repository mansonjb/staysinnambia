import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Selbstfahrer-Guide";
const DESCRIPTION =
  "Was Selbstfahren in Namibia wirklich bedeutet: Straßentypen, Planung von Tankstopps, Tücken bei der Mietwagenversicherung und warum Nachtfahrten die eine Regel sind, die alle wiederholen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-self-drive-guide",
    languages: { en: "/namibia-self-drive-guide", de: "/de/namibia-self-drive-guide", nl: "/nl/namibia-self-drive-guide" },
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

const ROAD_TYPES = [
  { code: "A-/B-Straßen", desc: "Asphaltierte Hauptstraßen zwischen größeren Städten, normales Fahren." },
  {
    code: "C-Straßen",
    desc: "Planierte Schotterstraßen, in der Regel gut instand gehalten. Das Rückgrat der meisten Selbstfahrer-Routen.",
  },
  {
    code: "D-Straßen",
    desc: "Kleinere Schotterpisten, schmaler und holpriger. Bei Waschbrettpisten und losem Sand langsamer fahren.",
  },
  {
    code: "F-Straßen",
    desc: "4x4-Pisten, oft grob oder saisonal unpassierbar. Nichts für einen normalen Mietwagen-Sedan.",
  },
];

const RULES = [
  "Fahren Sie außerhalb von Ortschaften nie nach Einbruch der Dunkelheit: Vieh, Wildtiere und unbeleuchtete Fußgänger auf der Straße sind die Hauptursache für schwere Unfälle.",
  "Im Nordwesten und Süden liegen Tankstellen weit auseinander. Tanken Sie immer, sobald der Tank unter halbvoll ist, und führen Sie für den Fall einer Panne zusätzliches Wasser mit.",
  "Reifen- und Windschutzscheibenschäden auf Schotterstraßen sind der häufigste Versicherungsfall bei Mietwagen: Prüfen Sie genau, was Ihre Selbstbeteiligung abdeckt, bevor Sie unterschreiben.",
  "Die gesetzliche Promillegrenze liegt bei 0,05 %, auf manchen Strecken werden Kontrollen am Straßenrand durchgeführt.",
  "Fahren Sie in Kurven auf Schotter und in losem Sand langsamer: Die meisten Selbstfahrer-Unfälle sind Überschläge einzelner Fahrzeuge durch zu starkes Bremsen oder Gegenlenken bei hoher Geschwindigkeit.",
];

const FAQS = [
  {
    q: "Brauche ich einen 4x4, um Namibia selbst zu befahren?",
    a: "Für die meisten klassischen Routen nicht. Etosha, Sossusvlei, Swakopmund und das C-Straßennetz sind mit einem gut ausgestatteten 2x4 mit hoher Bodenfreiheit gut zu bewältigen. Ein 4x4 lohnt sich für Damaraland, das Kaokoland und überall dort, wo Sie auf D- oder F-Straßen unterwegs sind. Unseren eigenen Guide zum Reisen ohne 4x4 finden Sie für die konkreten Routen, die dafür funktionieren.",
  },
  {
    q: "Selbstfahren oder geführte Safari: Was eignet sich besser für die erste Reise?",
    a: "Selbstfahren gibt Ihnen die volle Kontrolle über Tempo und Kosten, und Namibias Straßennetz macht es zugänglicher als die meisten anderen Safari-Länder. Eine geführte Reise tauscht diese Freiheit gegen lokales Wissen, keine eigene Logistik und bessere Tierbeobachtungen auf Pirschfahrten ein. Viele Erstreisende entscheiden sich für eine Mischung: selbst fahren zwischen den Regionen, geführte Pirschfahrten innerhalb der Parks.",
  },
  {
    q: "Wie weit liegen Tankstellen in Namibia auseinander?",
    a: "Auf den Hauptstrecken alle 100–200 km. Auf abgelegenen Abschnitten (Skeleton Coast, Teile des Kaokolands, die Straße zum Fish River Canyon) können die Abstände 250 km ohne jede Versorgung überschreiten. Planen Sie Tankstopps schon beim Verlassen jeder Stadt, nicht erst, wenn die Anzeige niedrig steht.",
  },
  {
    q: "Was deckt die Mietwagenversicherung auf Schotterstraßen tatsächlich ab?",
    a: "Die Standard-Kaskoversicherung schließt Steinschlagschäden an der Windschutzscheibe und Reifenschäden durch Schotter oft aus oder belegt sie mit einer hohen Selbstbeteiligung, dabei sind das die zwei häufigsten Schadensfälle in Namibia. Fragen Sie gezielt nach der Selbstbeteiligung für Schotterstraßen und erwägen Sie eine Zero-Excess-Zusatzversicherung, falls angeboten.",
  },
];

export default function SelfDriveGuidePageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Selbstfahrer-Guide", url: `${SITE_URL}/de/namibia-self-drive-guide` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia Selbstfahrer-Guide
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Die meisten unabhängigen Reisenden erkunden Namibia selbst am Steuer. Das Straßennetz
          ist wirklich gut, aber die Distanzen, die Straßenoberflächen und das Kleingedruckte der
          Mietwagenversicherung überraschen viele. Hier ist, worauf Sie sich tatsächlich einstellen
          sollten, inklusive wie viel Sie damit gegenüber einer{" "}
          <Link href="/de/namibia-trip-cost" className="font-medium text-rust hover:text-rust-dark">
            geführten Reise
          </Link>{" "}
          sparen.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Straßentypen entschlüsselt</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ROAD_TYPES.map((r, i) => (
            <Reveal
              key={r.code}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {r.code}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">
            Regeln, die erfahrene Selbstfahrer immer wieder betonen
          </h2>
          <ul className="mt-5 space-y-3">
            {RULES.map((item) => (
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
            href="/de/namibia-without-4x4"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibia ohne 4x4
          </Link>
        </Reveal>
      </section>
    </>
  );
}
