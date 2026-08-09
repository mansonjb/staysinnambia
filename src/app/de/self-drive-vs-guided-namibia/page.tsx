import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Selbstfahrer vs. geführte Safari";
const DESCRIPTION =
  "Kosten, Freiheit, Risiko und Komfort: die ehrlichen Kompromisse zwischen Selbstfahren in Namibia und einer geführten Safari, keine Werbung für eines von beiden.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/self-drive-vs-guided-namibia",
    languages: { en: "/self-drive-vs-guided-namibia", de: "/de/self-drive-vs-guided-namibia", nl: "/nl/self-drive-vs-guided-namibia", fr: "/fr/self-drive-vs-guided-namibia" },
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
  { title: "Namibia Self-Drive-Guide", href: "/de/namibia-self-drive-guide" },
  { title: "Beste Reisezeit für Namibia", href: "/de/best-time-to-visit-namibia" },
  { title: "Einreisebestimmungen für Namibia", href: "/de/namibia-visa-requirements" },
  { title: "Ist Namibia sicher? Sicherheit & Gesundheit", href: "/de/namibia-safety-and-health" },
  { title: "Was kostet eine Namibia-Reise?", href: "/de/namibia-trip-cost" },
  { title: "Namibia Tierwelt-Guide", href: "/de/namibia-wildlife-guide" },
];

const FACTORS = [
  {
    axis: "Kosten",
    selfDrive:
      "Etwa €225–250 pro Person/Tag im Budget-Segment, rund €325/Tag im mittleren Segment: Allein die Miete eines 4x4 kostet etwa N$1.500–2.200 pro Tag (rund €75–110) vor Kraftstoff und Selbstbeteiligung, dazu kommen die Parkgebühren von N$280 pro Person/Tag plus N$620 pro Fahrzeug, die Sie direkt am Tor bezahlen. Die genauen Zahlen je Preisklasse finden Sie in unserer vollständigen Kostenaufstellung.",
    guided:
      "Ein privater Guide mit Fahrzeug kostet für eine vollständig individuelle Reiseroute meist €700–1.100+ pro Person/Tag, wobei Gruppenreisen mit festen Abfahrtsterminen darunter liegen können. Meist sind Mahlzeiten, Parkgebühren und Aktivitäten schon enthalten, die bei einer Selbstfahrer-Reise separate Kosten wären, der Unterschied auf dem Papier ist also etwas größer als in der Praxis.",
  },
  {
    axis: "Freiheit & Tempo",
    selfDrive:
      "Volle Kontrolle: eine Stunde länger an einem Wasserloch bleiben, die Route spontan ändern, einen Stopp überspringen, der Sie nicht interessiert. Der Preis dafür: Sie managen die Logistik selbst.",
    guided:
      "Feste, im Voraus geplante Reiseroute: weniger flexibel, aber im Alltag keine Logistik zu managen.",
  },
  {
    axis: "Tierbeobachtung",
    selfDrive:
      "In Etosha wirklich gut, wo beleuchtete Wasserlöcher bei Okaukuejo und Halali Wild verlässlich konzentrieren, besonders Nashörner und Elefanten nach Einbruch der Dunkelheit in der Trockenzeit. Schwächer in Gebieten, die Spurenlese-Erfahrung erfordern, etwa bei wüstenangepassten Elefanten in der Torra Conservancy in Damaraland oder Spitzmaulnashörnern in der Palmwag Concession, wo unabhängig von der Reiseart ein spezialisierter, lizenzierter Guide nötig ist.",
    guided:
      "Der geschulte Blick eines Guides für Spuren, Geräusche und Tierverhalten erhöht die Sichtungen spürbar, besonders außerhalb von Etoshas einfacherer wasserlochbasierter Beobachtung, und nur so lässt sich Nashorn-Tracking in Palmwag machen oder Wildhunde in Bwabwata zuverlässig finden.",
  },
  {
    axis: "Risiko & Komfort",
    selfDrive:
      "Reale Risiken, die man ernst nehmen sollte: Fahren auf Schotterstraßen, Wildwechsel nachts auf der Straße, lange Strecken (manchmal über 250 km) ohne Tankstelle oder Handyempfang. Details dazu in unserem Self-Drive-Guide.",
    guided:
      "Geringeres persönliches Risiko (jemand anderes fährt, navigiert und kümmert sich um Pannen), dafür sind Sie an den Zeitplan eines anderen gebunden.",
  },
  {
    axis: "Am besten geeignet für Erstbesucher",
    selfDrive:
      "Sichere Fahrer, die mit Schotterstraßen und eigener Navigation zurechtkommen, ihr eigenes Tempo bestimmen wollen und mit einem knapperen Budget planen. Namibias asphaltiertes und ausgebautes C-Straßen-Netz macht das deutlich zugänglicher als in den meisten anderen Safari-Ländern.",
    guided:
      "Reisende, denen Tierbeobachtungen und null Logistik wichtiger sind als Kosten und Flexibilität, oder alle, die sich auf unbekannten Schotterstraßen nicht sicher fühlen.",
  },
];

const FAQS = [
  {
    q: "Ist Selbstfahren oder eine geführte Reise besser für die erste Namibia-Reise?",
    a: "Keins von beidem ist objektiv besser: Es kommt darauf an, worauf Sie Wert legen. Selbstfahren passt zu sicheren Fahrern, die Tempo und Kosten selbst kontrollieren wollen, bei etwa €225–325 pro Person/Tag; eine geführte Reise passt zu Reisenden, denen bestmögliche Tierbeobachtungen und null Logistik wichtiger sind, meist €700–1.100+ pro Person/Tag. Unsere Empfehlung für die meisten Erstbesucher: die klassische Runde Etosha–Sossusvlei–Swakopmund selbst fahren, wo das Straßennetz und die Wasserloch-Beobachtung das leicht machen, und nur dort einen geführten Teil ergänzen, wo Spurenlese-Erfahrung wirklich den Unterschied macht, also in Damaraland und Palmwag.",
  },
  {
    q: "Kann ich Selbstfahren und geführte Touren kombinieren?",
    a: "Ja, das ist ein gängiger und sinnvoller Mittelweg: die Transfers zwischen den Regionen selbst fahren, dann vor Ort in der Lodge geführte Pirschfahrten buchen, besonders in Gebieten wie Damaraland und der Palmwag Concession, wo das Tracking von wüstenangepassten Elefanten und Spitzmaulnashörnern wirklich einen spezialisierten Guide erfordert, egal wie sicher Sie selbst fahren.",
  },
  {
    q: "Wie viel teurer ist eine geführte Safari als Selbstfahren?",
    a: "Der Unterschied ist erheblich, wenn auch nicht so groß wie die reinen Zahlen vermuten lassen, sobald man bedenkt, was alles enthalten ist: Ein privater Guide mit Fahrzeug allein kostet meist €700–1.100+ pro Person/Tag, gegenüber etwa €225–325 pro Person/Tag beim Selbstfahren, aber geführte Reisen schließen meist Mahlzeiten, Parkgebühren und Aktivitäten ein, die bei einer Selbstfahrer-Route separate Kosten sind. Die genauen Zahlen je Preisklasse finden Sie in unserer vollständigen Kostenaufstellung.",
  },
  {
    q: "Brauche ich Geländefahrerfahrung, um Namibia selbst zu befahren?",
    a: "Für die klassische Route nicht: Etosha, Sossusvlei und Swakopmund sind für alle machbar, die sich auf Schotterstraßen sicher fühlen, ernsthafte Geländefahrkenntnisse sind nicht nötig. Relevanter wird es in Damaraland und Kaokoland, wo ein 4x4 und etwas Sicherheit auf Schotter mehr zählen, und wo allein die Miete eines 4x4 etwa N$1.500–2.200 pro Tag vor Kraftstoff kostet.",
  },
];

export default function SelfDriveVsGuidedPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Selbstfahrer vs. geführt", url: `${SITE_URL}/de/self-drive-vs-guided-namibia` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Selbstfahrer vs. geführte Safari in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Das ist eine grundsätzlich andere Entscheidung als die Frage{" "}
          <Link
            href="/de/namibia-without-4x4"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            „Brauche ich einen 4x4?“
          </Link>
          . Es geht darum, wer fährt, wer die Route bestimmt, und was Sie wofür eintauschen.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4">
          {FACTORS.map((row, i) => (
            <Reveal
              key={row.axis}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {row.axis}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-olive">
                    Selbstfahrer
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.selfDrive}</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-charcoal/50">
                    Geführt
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.guided}</p>
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
            href="/de/namibia-self-drive-guide"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Self-Drive-Logistik-Guide
          </Link>
        </Reveal>
      </section>
    </>
  );
}
