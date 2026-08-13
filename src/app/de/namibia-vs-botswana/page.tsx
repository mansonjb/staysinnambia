import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia vs Botswana";
const DESCRIPTION =
  "Namibia und Botswana werden aus gutem Grund in denselben Reiseführern zusammen genannt: hier ist der ehrliche Unterschied für eine erste Safarireise in Afrika.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-vs-botswana",
    languages: { en: "/namibia-vs-botswana", de: "/de/namibia-vs-botswana", nl: "/nl/namibia-vs-botswana", fr: "/fr/namibia-vs-botswana", it: "/it/namibia-vs-botswana" },
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

const COMPARISON = [
  {
    axis: "Selbstfahren",
    namibia:
      "Wirklich gut zugänglich: Ein gutes Straßennetz, klare Beschilderung und ein etablierter Mietwagenmarkt machen Namibia zu einem der am leichtesten selbst zu befahrenden Länder Afrikas. Nationalparks wie Etosha und Namib-Naukluft stellen Permits direkt am Tor aus, eine vorherige Camp-Buchung ist für den reinen Zutritt nicht nötig.",
    botswana:
      "Deutlich eingeschränkter: Für die Selbstfahrer-Einfahrt ins Moremi Game Reserve verlangt die Naturschutzbehörde DWNP eine bestätigte Campingplatz-Buchung, bevor man durchs Tor gelassen wird, und im Reservat gibt es nur eine Handvoll öffentlicher Campingplätze (Xakanaxa, Third Bridge, Moremi, Okuti), die in der Hauptsaison oft Monate im Voraus ausgebucht sind. Dazu kommen tiefe Kalahari-Sandpisten, die echte 4x4-Erfahrung und Geländeuntersetzung erfordern, und ein großer Teil des Okavango-Deltas selbst ist nur per Kleinflugzeug erreichbar, weshalb die meisten Botswana-Besucher mit einem Veranstalter einfliegen, statt selbst zu fahren.",
  },
  {
    axis: "Wilddichte",
    namibia:
      "Ausgezeichnet, aber weiter verteilt: Etoshas beleuchtete Wasserlöcher konzentrieren Wild besonders gut, vor allem in der Trockenzeit (etwa Juni bis Oktober), aber Sichtungen in Damaraland oder Kaokoland sind wilder und weniger garantiert.",
    botswana:
      "Dichter, klassischeres Safari-Erlebnis bei der Tierbeobachtung: Das Okavango-Delta und Chobe, Heimat einer der größten Elefantenpopulationen Afrikas, sind bekannt für durchgehend nahe, häufige Sichtungen, einschließlich verlässlicher Büffel- und Raubtieraktivität.",
  },
  {
    axis: "Landschaft",
    namibia:
      "Für viele Erstbesucher die Hauptattraktion: hoch aufragende rote Dünen bei Sossusvlei (einige der höchsten der Welt, über 300 Meter), wüstenangepasste Tierwelt, eine schroffe Atlantikküste, so nirgendwo sonst auf dem Kontinent zu finden.",
    botswana:
      "Wasserbasiert und grün: Die Kanäle und Flussauen des Okavango-Deltas sind die genaue Gegenlandschaft zu Namibias Wüsten, mit Vogelbeobachtung und Wassertieren (Nilpferd, Elefant, Krokodil) als Kernerlebnis.",
  },
  {
    axis: "Typisches Preisniveau",
    namibia: (
      <>
        Lässt sich in echten Budget- bis Mittelklasse-Preisniveaus umsetzen (etwa 225–250 €/Tag
        Selbstfahrer, 325 €/Tag Mittelklasse) über Gästehäuser und einen Mietwagen, daneben
        existiert eine echte Luxusklasse über 700 €/Tag. Siehe unsere{" "}
        <Link href="/de/namibia-trip-cost" className="font-semibold text-rust hover:text-rust-dark">
          vollständige Kostenaufstellung
        </Link>
        .
      </>
    ),
    botswana:
      "Liegt durchweg höher: Etablierte Lodges kosten meist 600 bis 1.500+ US-Dollar pro Person und Nacht, exklusive Fly-in-Camps im Okavango-Delta in der Hochsaison oft 1.500 bis 4.000+ US-Dollar, manche über 7.000 US-Dollar. Botswanas High-Value-Low-Volume-Tourismusmodell begrenzt bewusst die Anzahl der Camps, weshalb es kaum die Gästehaus-und-Mietwagen-Budgetklasse gibt, die Namibia bietet.",
  },
  {
    axis: "Parkgebühren",
    namibia:
      "Namibia Wildlife Resorts berechnet internationalen Besuchern N$280 pro Tag (etwa 17,50 US-Dollar) in Premium-Parks wie Etosha, Namib-Naukluft und der Skeleton Coast, zuzüglich einer separaten Fahrzeuggebühr, gültig seit April 2026.",
    botswana:
      "DWNP berechnet internationalen Besuchern BWP 270 pro Tag (etwa 20 US-Dollar) in Chobe und Moremi sowie BWP 500 pro Tag im Central Kalahari, Makgadikgadi und Nxai Pan, zuzüglich separater Fahrzeuggebühren, ebenfalls seit April 2026 aktualisiert. Die täglichen Parkgebühren sind in beiden Ländern tatsächlich ähnlich hoch, der eigentliche Kostenunterschied entsteht bei Camps und Flügen, nicht an den Parktoren.",
  },
  {
    axis: "Visum & Einreise",
    namibia:
      "Für die meisten Nationalitäten ist ein Visum erforderlich, wobei viele es bei Einreise erhalten oder vorab online beantragen können; die Standardgebühr für das Touristenvisum liegt 2026 bei etwa 30 US-Dollar und gilt für Aufenthalte von bis zu 90 Tagen.",
    botswana:
      "Auf dem Papier offener: Die meisten Besucher aus Nordamerika, Europa, dem Commonwealth und der SADC-Region (einschließlich Namibia) reisen visumsfrei zu touristischen Zwecken ein, typischerweise für Aufenthalte von bis zu 90 Tagen innerhalb von 12 Monaten.",
  },
];

const FAQS = [
  {
    q: "Sollte ich für meine erste Afrika-Safari Namibia oder Botswana besuchen?",
    a: "Wenn Sie selbst fahren, Ihr eigenes Tempo bestimmen und Landschaft sowie wüstenangepasste Tierwelt priorisieren möchten, ist Namibia die einfachere und in der Regel günstigere erste Reise: Straßennetz, Beschilderung und Mietwagenmarkt sind darauf ausgelegt, und Parkpermits werden direkt am Tor ausgestellt. Wenn klassische, dichte Tierbeobachtung Priorität hat und das Budget 600+ US-Dollar pro Person und Nacht in Fly-in-Camps zulässt, liefert Botswana das zuverlässiger, vor allem im Okavango-Delta und in Chobe.",
  },
  {
    q: "Kann ich Namibia und Botswana in einer Reise kombinieren?",
    a: "Ja, das ist eine gut etablierte Kombination, und unsere Region Caprivi-Streifen grenzt direkt an Botswanas Chobe-Nationalpark, was sie zu einer natürlichen Verbindung zwischen beiden macht statt zu einem separaten, nur per Flug erreichbaren Umweg. Wie das typischerweise funktioniert, steht in unserem Guide zu Reiseerweiterungen.",
  },
  {
    q: "Ist Botswana teurer als Namibia?",
    a: "Deutlich, ja. Botswanas High-Value-Low-Volume-Tourismuspolitik begrenzt bewusst die Anzahl der Camps, um die Gebiete unüberlaufen zu halten: Etablierte Lodges kosten meist 600 bis 1.500+ US-Dollar pro Person und Nacht, die exklusivsten Fly-in-Camps im Okavango-Delta oft 1.500 bis 4.000+ US-Dollar. Namibias echte Budgetklasse liegt bei etwa 225 bis 250 €/Tag im Selbstfahrer-Modus. Die Parkgebühren selbst sind in beiden Ländern 2026 tatsächlich ähnlich hoch (beide etwa 17 bis 20 US-Dollar pro Tag); der Unterschied liegt bei Camps, Guiding und internen Flügen, nicht an den Parktoren.",
  },
  {
    q: "Welches Land ist besser für Selbstfahrer geeignet?",
    a: "Eindeutig Namibia. Botswanas beste Wildgebiete sind ohne ernsthaften 4x4 und Geländeerfahrung weitgehend unzugänglich: Die Selbstfahrer-Einfahrt ins Moremi Game Reserve etwa verlangt eine bestätigte DWNP-Campingplatz-Buchung, bevor man durchs Tor gelassen wird, und diese Plätze sind Monate im Voraus ausgebucht. Es ist nicht auf die Art des unabhängigen Roadtrips ausgelegt, für die Namibia bekannt ist.",
  },
  {
    q: "Brauche ich für Namibia oder Botswana ein Visum?",
    a: "Botswana ist für die meisten westlichen und SADC-Nationalitäten für touristische Aufenthalte von bis zu 90 Tagen visumsfrei. Namibia verlangt in der Regel ein Visum, wobei die meisten Besucher es bei Einreise erhalten oder vorab online beantragen können; die Standardgebühr für das Touristenvisum liegt 2026 bei etwa 30 US-Dollar, ebenfalls gültig für bis zu 90 Tage.",
  },
];

export default function VsBotswanaPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Namibia vs Botswana", url: `${SITE_URL}/de/namibia-vs-botswana` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia vs Botswana
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Reiseführer stellen diese beiden ständig nebeneinander, aus gutem Grund: Es sind
          Nachbarländer mit fast entgegengesetzten Safari-Erlebnissen. Hier ist der ehrliche
          Unterschied, keine Werbung für eines von beiden.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4">
          {COMPARISON.map((row, i) => (
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
                    Namibia
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.namibia}</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-charcoal/50">
                    Botswana
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.botswana}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Nicht entscheiden, kombinieren</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            Namibias Caprivi-Streifen grenzt direkt an Botswanas Chobe-Nationalpark, weshalb viele
            längere Reiserouten dies als eine einzige Region behandeln statt als zwei getrennte
            Reisen. Bei drei Wochen oder mehr ist es einfacher, als es klingt, eine
            Botswana-Etappe an eine Namibia-Selbstfahrer-Reise anzuhängen.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[13px] text-charcoal/60">
            <MetaIcon name="check" className="h-4 w-4 text-olive" />
            Wie das typischerweise funktioniert, steht in unserem{" "}
            <Link
              href="/de/namibia-trip-extensions"
              className="ml-1 font-semibold text-rust hover:text-rust-dark"
            >
              Guide zu Reiseerweiterungen
            </Link>
            .
          </div>
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
        </Reveal>
      </section>
    </>
  );
}
