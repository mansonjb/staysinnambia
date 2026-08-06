import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Ihre Namibia-Reise verlängern";
const DESCRIPTION =
  "Namibia lässt sich natürlich mit einer Handvoll benachbarter Höhepunkte kombinieren: so verlängern Reisende ihre Reise tatsächlich, und was jede Ergänzung an zusätzlicher Zeit kostet.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-trip-extensions",
    languages: { en: "/namibia-trip-extensions", de: "/de/namibia-trip-extensions", nl: "/nl/namibia-trip-extensions" },
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
  { title: "Was kostet eine Namibia-Reise?", href: "/de/namibia-trip-cost" },
  { title: "Namibia Tierwelt-Guide", href: "/de/namibia-wildlife-guide" },
];

const EXTENSIONS = [
  {
    place: "Victoriafälle (Sambia/Simbabwe)",
    text: "Die häufigste Namibia-Ergänzung. Meist wird geflogen, nicht gefahren: die meisten Reisenden fliegen ab Windhoek oder ab Katima Mulilo im Caprivi-Streifen, statt die Strecke selbst zu fahren. Mindestens 2 Nächte lohnen sich, um sowohl die sambische als auch die simbabwische Seite der Fälle zu sehen.",
    time: "mind. +3–4 Tage",
  },
  {
    place: "Chobe-Nationalpark & Okavango-Delta (Botswana)",
    text: (
      <>
        Eine natürliche Verbindung von unserer Caprivi-Streifen-Region aus, die direkt an Chobe
        grenzt. Sehen Sie unseren{" "}
        <Link href="/de/namibia-vs-botswana" className="font-semibold text-rust hover:text-rust-dark">
          Namibia-vs-Botswana-Vergleich
        </Link>{" "}
        für das, was sich nach dem Grenzübertritt ändert: vor allem erwarten Sie Fly-in-Camps und
        eine höhere Preisklasse als bei Namibias Selbstfahrer-Route.
      </>
    ),
    time: "+4–7 Tage",
  },
  {
    place: "Kapstadt & die Garden Route (Südafrika)",
    text: "Meist wird sie angehängt statt mitten in die Reise eingebaut: viele Reisende fliegen vor oder nach ihrer Namibia-Rundreise nach Kapstadt, und behandeln sie eher als eigenständigen Städteaufenthalt statt als Erweiterung der Selbstfahrer-Route selbst.",
    time: "+3–5 Tage",
  },
];

const FAQS = [
  {
    q: "Kann ich von Namibia zu den Victoriafällen fahren?",
    a: "Technisch ja, über den Caprivi-Streifen nach Sambia oder Botswana, aber es ist eine lange, mehrtägige Fahrt, die die meisten Reisenden zugunsten eines Inlandsflugs ab Windhoek oder Katima Mulilo überspringen. Fliegen ist für diese spezielle Erweiterung die praktische Standardlösung.",
  },
  {
    q: "Brauche ich für diese Erweiterungen ein separates Visum?",
    a: "Ja, in jedem Fall: Sambia, Simbabwe, Botswana und Südafrika haben jeweils eigene Einreisebestimmungen, getrennt von denen Namibias (das selbst am 1. April 2025 zu einer verpflichtenden Online-Beantragung des Visa on Arrival gewechselt ist). Prüfen Sie die Anforderungen für Ihre jeweilige Nationalität und jedes Land rechtzeitig vor der Flugbuchung, zusätzlich zu unserem eigenen Ratgeber zu den Namibia-Visabestimmungen.",
  },
  {
    q: "Wie viele zusätzliche Tage sollte ich für eine Victoriafälle-Erweiterung einplanen?",
    a: "Mindestens 3–4 Tage insgesamt, einschließlich der Reise: das deckt einen Flug pro Strecke plus 2 Nächte ab, um die Fälle richtig von der sambischen und der simbabwischen Seite aus zu sehen, was tatsächlich unterschiedliche Erlebnisse sind.",
  },
  {
    q: "Ist es besser, nach Botswana zu erweitern oder direkt zu den Victoriafällen zu fliegen?",
    a: "Das hängt davon ab, wovon Sie mehr möchten. Botswana erweitert das Safari-Erlebnis mit dichterer Tierbeobachtung; die Victoriafälle sind ein eigenständiges Wahrzeichen mit wenig Überschneidung zu dem, was Sie in Namibia bereits gesehen haben. Viele längere Reisen von 3 Wochen oder mehr machen beides.",
  },
];

export default function TripExtensionsPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Reiseverlängerung", url: `${SITE_URL}/de/namibia-trip-extensions` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Ihre Namibia-Reise verlängern
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia grenzt an einige der größten Höhepunkte des südlichen Afrikas. Hier ist, wie
          Reisende sie tatsächlich hinzufügen, und was jede davon wirklich an Zeit kostet.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {EXTENSIONS.map((e, i) => (
            <Reveal
              key={e.place}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{e.place}</h2>
                <span className="rounded-full bg-sand/30 px-3 py-1 text-[12px] font-semibold text-charcoal/70">
                  {e.time}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{e.text}</p>
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
            href="/de/namibia-vs-botswana"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibia vs. Botswana
          </Link>
        </Reveal>
      </section>
    </>
  );
}
