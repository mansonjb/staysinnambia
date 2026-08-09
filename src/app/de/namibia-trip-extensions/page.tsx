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
    languages: { en: "/namibia-trip-extensions", de: "/de/namibia-trip-extensions", nl: "/nl/namibia-trip-extensions", fr: "/fr/namibia-trip-extensions" },
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
    text: "Die häufigste Namibia-Ergänzung, meist wird geflogen statt gefahren. Ein Direktflug von Windhoek zum Flughafen Victoria Falls (VFA) dauert etwas über eine Stunde in der Luft, wobei die realistische Tür-zu-Tür-Zeit mit einer Verbindung eher bei einem halben Tag liegt. Selbstfahren ist möglich, aber lang: Es sind rund 1.228 km und volle 12 Stunden Fahrzeit von Windhoek nach Katima Mulilo am östlichen Ende der Sambesi-Region (die meisten Selbstfahrer teilen das auf 2 Tage mit Übernachtung in Rundu), danach folgen ein weiterer Grenzübertritt und die Fahrt zu den Fällen selbst. Vor Ort sollten Sie mindestens 2 Nächte einplanen, um sowohl die sambische als auch die simbabwische Seite richtig zu sehen, zwei wirklich unterschiedliche Ausblicke auf dieselben Fälle.",
    time: "mind. +3–4 Tage",
  },
  {
    place: "Chobe-Nationalpark & Okavango-Delta (Botswana)",
    text: (
      <>
        Eine natürliche Verbindung von unserer Sambesi-Region (früher Caprivi-Streifen) aus, die
        direkt über den Grenzposten Ngoma Bridge (täglich 07:00 bis 18:00 geöffnet) an Chobe
        grenzt, etwa 55 km von Kasane und rund 70 km von Katima Mulilo auf namibischer Seite
        entfernt. Für das Okavango-Delta und Maun überqueren die meisten Selbstfahrer stattdessen
        weiter westlich den Grenzposten Mohembo (geöffnet 06:00 bis 18:00) südlich von Divundu und
        fahren dann weitere rund 580 km durch den Okavango Panhandle nach Maun, teils auf Schotter,
        der in der Trockenzeit mit einer Limousine gut zu bewältigen ist, nach starkem Regen aber
        weich werden kann. Sehen Sie unseren{" "}
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
    text: "Meist wird sie angehängt statt mitten in die Reise eingebaut: viele Reisende fliegen vor oder nach ihrer Namibia-Rundreise nach Kapstadt und behandeln sie eher als eigenständigen Städteaufenthalt statt als Erweiterung der Selbstfahrer-Route selbst. Logistisch ist es eine einfache Ergänzung: Ein Direktflug von Windhoek nach Kapstadt dauert etwas über 2 Stunden, mit mehreren Flügen täglich auf dieser Strecke.",
    time: "+3–5 Tage",
  },
];

const FAQS = [
  {
    q: "Kann ich von Namibia zu den Victoriafällen fahren?",
    a: "Technisch ja, über die Sambesi-Region (den früheren Caprivi-Streifen) nach Sambia oder Botswana, aber es ist eine wirklich lange, mehrtägige Fahrt, die die meisten Reisenden zugunsten eines Inlandsflugs ab Windhoek oder Katima Mulilo überspringen. Als Anhaltspunkt: Allein Windhoek nach Katima Mulilo sind rund 1.228 km und 12 Stunden Fahrzeit, meist aufgeteilt auf 2 Tage mit Übernachtung in Rundu, und das noch vor dem Grenzübertritt. Fliegen ist für diese spezielle Erweiterung die praktische Standardlösung, außer Sie fahren ohnehin schon durch die Sambesi-Region als Teil Ihrer Namibia-Route.",
  },
  {
    q: "Brauche ich für diese Erweiterungen ein separates Visum?",
    a: "Ja, in jedem Fall: Sambia, Simbabwe, Botswana und Südafrika haben jeweils eigene Einreisebestimmungen, getrennt von denen Namibias (das selbst am 1. April 2025 zu einer verpflichtenden Online-Beantragung des Visa on Arrival gewechselt ist und seither seine Liste berechtigter Nationalitäten weiter aktualisiert hat). Wenn Ihre Erweiterung sowohl Sambia als auch Simbabwe umfasst, ist das gemeinsame KAZA-UniVisa (etwa 50 US-Dollar, 30 Tage gültig für beide Länder innerhalb eines 12-Monats-Zeitraums) meist die einfachste Option und deckt auch Tagesausflüge nach Botswana über den Grenzposten Kazungula ab, wobei eine Übernachtung in Botswana eine eigene, separate Einreisegenehmigung dieses Landes erfordert. Prüfen Sie die Anforderungen für Ihre jeweilige Nationalität und jedes Land rechtzeitig vor der Flugbuchung, zusätzlich zu unserem eigenen Ratgeber zu den Namibia-Visabestimmungen.",
  },
  {
    q: "Wie viele zusätzliche Tage sollte ich für eine Victoriafälle-Erweiterung einplanen?",
    a: "Mindestens 3 bis 4 Tage insgesamt, einschließlich der Reise: Das deckt einen Flug pro Strecke ab (etwas über eine Stunde in der Luft von Windhoek zum Flughafen Victoria Falls, Tür-zu-Tür mit Verbindung entsprechend länger) plus 2 Nächte, um die Fälle richtig von der sambischen und der simbabwischen Seite aus zu sehen, zwei wirklich unterschiedliche Erlebnisse, die den zusätzlichen Grenzübertritt wert sind.",
  },
  {
    q: "Ist es besser, nach Botswana zu erweitern oder direkt zu den Victoriafällen zu fliegen?",
    a: "Das hängt davon ab, wovon Sie mehr möchten. Botswana erweitert das Safari-Erlebnis mit dichterer Tierbeobachtung, besonders rund um den Chobe-Nationalpark, erreichbar von Namibias Sambesi-Region über den Grenzposten Ngoma Bridge; die Victoriafälle sind ein eigenständiges Wahrzeichen mit wenig Überschneidung zu dem, was Sie in Namibia bereits gesehen haben. Viele längere Reisen von 3 Wochen oder mehr machen beides, mit der Überquerung nach Chobe auf dem Landweg und einem Weiterflug zu den Fällen.",
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
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Unsere Empfehlung:</span> Wenn Ihre Route
          bereits in der Sambesi-Region endet, kostet eine kurze Fly-in-Erweiterung zu den
          Victoriafällen oder ein Tagesausflug nach Chobe über die Ngoma-Grenze verhältnismäßig
          wenig zusätzliche Reisezeit für eine wirklich andere Landschaft. Verläuft Ihre
          Namibia-Rundreise dagegen komplett im Süden und in der Mitte des Landes (Sossusvlei,
          Etosha, die Küste), ist Kapstadt an einem der beiden Enden der Reise die logistisch
          reibungslosere Option, da Sie dafür nicht quer durchs Land zu einer Grenze
          zurückfahren müssen.
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
