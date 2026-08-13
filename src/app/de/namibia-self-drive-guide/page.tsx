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
    languages: { en: "/namibia-self-drive-guide", de: "/de/namibia-self-drive-guide", nl: "/nl/namibia-self-drive-guide", fr: "/fr/namibia-self-drive-guide", it: "/it/namibia-self-drive-guide" },
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
  {
    code: "A-/B-Straßen",
    desc: "Asphaltierte Hauptstraßen zwischen größeren Städten (Windhoek–Okahandja, Windhoek–Swakopmund über die B2). Normales Fahren, aber achten Sie in der Dämmerung, im Morgengrauen und nachts trotzdem auf Kudus und Vieh.",
  },
  {
    code: "C-Straßen",
    desc: "Planierte Schotterstraßen, in der Regel gut instand gehalten und das Rückgrat der meisten Selbstfahrer-Routen (die C28 Windhoek–Solitaire, die C39/C40 durch Damaraland). Begrenzen Sie Ihr Tempo auf 80 km/h und drosseln Sie weiter, wo der Untergrund lose wirkt oder eine Kurve kommt; lassen Sie etwa 10-20% Luft gegenüber dem Asphaltdruck ab, für eine ruhigere Fahrt und besseren Grip auf Waschbrettpisten.",
  },
  {
    code: "D-Straßen",
    desc: "Kleinere Schotterpisten, schmaler und holpriger (Kamanjab–Palmwag, Sesfontein–Purros). Waschbrettpisten sind hier ausgeprägter, und lose Sandstellen tauchen ohne Vorwarnung auf. Halten Sie auf Waschbrettabschnitten ein gleichmäßiges Tempo statt mitten drin zu bremsen, und bremsen Sie vor einer Kurve, nicht in ihr.",
  },
  {
    code: "F-Straßen",
    desc: "4x4-Pisten, oft grob, sandig oder saisonal unpassierbar (die Van-Zyl's-Pass-Gegend, das tiefe Kaokoland). Nichts für einen normalen Mietwagen-Sedan oder einen 2x4, am besten nur mit einem zweiten Fahrzeug oder einem ortskundigen Guide befahren.",
  },
];

const TYRE_PRESSURE = [
  { surface: "Asphalt / A-B-Straßen", psi: "Herstellerangabe (üblicherweise ca. 32-36 psi)", note: "Vor der Rückkehr auf Asphalt wieder auf diesen Wert aufpumpen; Reifen mit zu niedrigem Druck überhitzen bei Geschwindigkeit schnell." },
  { surface: "Planierte Schotterstraßen (C-Straßen)", psi: "Ca. 10-20% unter Asphaltdruck", note: "Verbessert Fahrverhalten und Aufstandsfläche auf Waschbrettpisten, ohne die Seitenwand übermäßig zu belasten." },
  { surface: "Grobe Schotterpisten / D-Straßen", psi: "Weiter absenken, Richtung 25-28 psi", note: "Das Fahrgefühl wird weicher; das ist der Kompromiss für weniger Rütteln auf Waschbrettpisten." },
  { surface: "Tiefer Sand (Kaokoland, Dünenpisten)", psi: "Bis zu 1,8 bar (ca. 26 psi), manche gehen noch weiter runter", note: "Lassen Sie Luft ab, bevor Sie feststecken, nicht danach. Führen Sie einen Kompressor mit, um danach wieder aufzupumpen." },
];

const RENTAL_COMPANIES = [
  {
    name: "Für einen unkomplizierten 2x4",
    text: "Ein gut ausgestatteter 2x4 mit echter Bodenfreiheit (Toyota Corolla Cross, VW Polo Sedan, Hyundai Creta-Klasse) von einem Windhoek-basierten Anbieter kostet etwa N$900-1.400/Tag und deckt Etosha, Sossusvlei, Swakopmund und das wichtigste C-Straßennetz problemlos ab. Unseren Guide zum Reisen ohne 4x4 finden Sie für die genauen Routen, die dabei drin sind.",
  },
  {
    name: "Für ein voll ausgestattetes 4x4-Safarifahrzeug",
    text: "Bushlore und Asco Car Hire sind die zwei Spezialisten, die die meisten Selbstfahrer am Ende miteinander vergleichen, beide mit Dachzelten, Campingausrüstung, GPS und Bergungsausrüstung als Standard. Rechnen Sie mit etwa N$2.500-4.000/Tag je nach Saison für einen ausgestatteten 4x4 der Hilux-Klasse. Britz ist ebenfalls in Namibia von Windhoek aus aktiv, mit einer größeren Flotte, falls Sie eine breitere Fahrzeugauswahl wollen.",
  },
  {
    name: "Zu Selbstbeteiligung und Kaution: lesen Sie, bevor Sie unterschreiben",
    text: "Die Standard-Kaskobeteiligung bei einem 4x4 liegt üblicherweise bei etwa N$30.000-40.000, wobei Reifen, Windschutzscheibe, Unterboden und Alleinunfälle mit Überschlag häufig als separate, höhere Ausschlüsse gelten. Anbieter verkaufen reduzierte Selbstbeteiligungs-Stufen als Tagespauschale (üblicherweise €8-25/Tag), die die Selbstbeteiligung auf etwa N$5.000-20.000 senken; eine kleine Übergabekaution (bei manchen Anbietern rund N$5.000) ist ebenfalls üblich, für Bußgelder oder ausgeschlossene Schäden. Fragen Sie gezielt nach den Ausschlüssen für Schotterstraßen und Alleinunfälle, bevor Sie sich für eine Stufe entscheiden.",
  },
];

const RULES = [
  "Fahren Sie außerhalb von Ortschaften nie nach Einbruch der Dunkelheit: Vieh, Kudus und andere Wildtiere laufen im Scheinwerferlicht häufig plötzlich über die Straße, und die meisten Mietwagenfirmen schließen Nachtfahrten ausdrücklich von der Versicherung aus. Das ist die eine Regel, die aus gutem Grund immer wieder wiederholt wird.",
  "Im Nordwesten und Süden dünnen sich Tankstellen schnell aus. Solitaire ist die einzige Tankmöglichkeit zwischen Sesriem und der Küste, eine Strecke von rund 340 km. Kamanjab und Khorixas bilden die Eckpunkte der tankstellenfreien Strecke durch Damaraland Richtung Palmwag und Sesfontein. Tanken Sie auf diesen Etappen immer, sobald der Tank unter halbvoll ist, nicht erst, wenn die Anzeige niedrig steht, und führen Sie für den Fall einer Panne zusätzliches Trinkwasser mit.",
  "Reifen- und Windschutzscheibenschäden auf Schotterstraßen sind der häufigste Versicherungsfall bei Mietwagen in Namibia. Lesen Sie die Selbstbeteiligung im Vertrag, nicht nur den Tagespreis: Die Standard-Selbstbeteiligung liegt je nach Anbieter bei N$20.000-40.000, und Zusatzpakete mit reduzierter Selbstbeteiligung kosten üblicherweise zusätzlich €8-25/Tag.",
  "Die gesetzliche Promillegrenze liegt bei 0,05 %, auf manchen Strecken werden Kontrollen am Straßenrand durchgeführt.",
  "Fahren Sie in Kurven auf Schotter und in losem Sand langsamer: Die meisten Selbstfahrer-Unfälle in Namibia sind Alleinunfälle mit Überschlag durch zu starkes Bremsen oder Gegenlenken bei hoher Geschwindigkeit, keine Kollisionen mit anderen Fahrzeugen. Bremsen Sie geradeaus vor der Kurve, und lassen Sie dann während der Kurve locker.",
];

const FAQS = [
  {
    q: "Brauche ich einen 4x4, um Namibia selbst zu befahren?",
    a: "Für die meisten klassischen Routen nicht. Etosha, Sossusvlei, Swakopmund und das C-Straßennetz sind mit einem gut ausgestatteten 2x4 mit hoher Bodenfreiheit gut zu bewältigen, für etwa N$900-1.400/Tag. Ein 4x4 lohnt sich für die D-Straßen in Damaraland, das Kaokoland und überall dort, wo Sie auf D- oder F-Straßen unterwegs sind, und kostet voll ausgestattet mit Campingausrüstung bei einem Spezialisten wie Bushlore oder Asco Car Hire üblicherweise N$2.500-4.000/Tag. Unseren eigenen Guide zum Reisen ohne 4x4 finden Sie für die konkreten Routen, die dafür funktionieren.",
  },
  {
    q: "Selbstfahren oder geführte Safari: Was eignet sich besser für die erste Reise?",
    a: "Selbstfahren gibt Ihnen die volle Kontrolle über Tempo und Kosten, und Namibias Straßennetz macht es zugänglicher als die meisten anderen Safari-Länder. Eine geführte Reise tauscht diese Freiheit gegen lokales Wissen, keine eigene Logistik und bessere Tierbeobachtungen auf Pirschfahrten ein. Viele Erstreisende entscheiden sich für eine Mischung: selbst fahren zwischen den Regionen, geführte Pirschfahrten innerhalb der Parks.",
  },
  {
    q: "Wie weit liegen Tankstellen in Namibia auseinander?",
    a: "Auf den Hauptstrecken alle 100–200 km. Auf abgelegenen Abschnitten sind die Lücken deutlich größer: Solitaire ist die einzige Tankmöglichkeit zwischen Sesriem und der Küste (rund 340 km), und auch die Strecke Kamanjab–Khorixas–Palmwag durch Damaraland hat lange tankstellenfreie Abschnitte. Auf dem Weg zum Fish River Canyon im Süden können die Abstände 250 km ohne jede Versorgung überschreiten. Planen Sie Tankstopps schon beim Verlassen jeder Stadt, nicht erst, wenn die Anzeige niedrig steht, und betrachten Sie alles unter halbvoll als Anlass zum Tanken.",
  },
  {
    q: "Welchen Reifendruck sollte ich auf Schotter und Sand in Namibia fahren?",
    a: "Lassen Sie auf planierten C-Straßen etwa 10-20% Luft gegenüber Ihrem Asphaltdruck ab, für eine ruhigere Fahrt und besseren Grip auf Waschbrettpisten. Auf raueren D-Straßen noch weiter absenken. Im tiefen Sand, besonders im Kaokoland oder auf Dünenpisten, ist ein Druck von bis zu 1,8 bar (etwa 26 psi) gängige Praxis, abgelassen bevor Sie feststecken, nicht danach. Pumpen Sie vor der Rückkehr auf eine Asphaltstraße immer wieder auf den Herstellerdruck auf, denn schnelles Fahren auf Asphalt mit zu niedrigem Druck erzeugt Hitze und erhöht das Risiko eines Reifenplatzers.",
  },
  {
    q: "Was deckt die Mietwagenversicherung auf Schotterstraßen tatsächlich ab?",
    a: "Die Standard-Kaskoversicherung schließt Steinschlagschäden an der Windschutzscheibe, Reifenschäden durch Schotter und Alleinunfälle mit Überschlag oft aus oder belegt sie mit einer hohen Selbstbeteiligung, dabei sind das die häufigsten Schadensfälle in Namibia. Die Standard-Selbstbeteiligung liegt üblicherweise bei N$20.000-40.000; reduzierte Selbstbeteiligungs-Stufen kosten zusätzlich €8-25/Tag und senken sie auf etwa N$5.000-20.000, in der höchsten Stufe manchmal sogar auf null. Fragen Sie gezielt nach den Ausschlüssen für Schotterstraßen und Alleinunfälle, nicht nur nach der genannten Selbstbeteiligung.",
  },
  {
    q: "Welche Mietwagenfirma sollte ich für eine Namibia-Selbstfahrt tatsächlich nutzen?",
    a: "Für einen 2x4 auf der Hauptroute funktioniert jeder seriöse Windhoek-basierte Anbieter mit einem Fahrzeug der Corolla-Cross-/Polo-Sedan-/Hyundai-Creta-Klasse gut. Für einen 4x4 mit Campingausrüstung sind Bushlore und Asco Car Hire die zwei Namen, die die meisten unabhängigen Selbstfahrer vergleichen, beide mit namibia-spezifischen Flotten, Dachzelten und Bergungsausrüstung; Britz ist mit einer größeren Flotte eine Alternative, ebenfalls mit Sitz in Windhoek. Vergleichen Sie die Selbstbeteiligungs-Stufen, nicht nur den Tagespreis, denn dort zeigt sich der eigentliche Kostenunterschied bei einer schotterlastigen Reiseroute.",
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
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Reifendruck je nach Untergrund</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Die meisten Schotterstraßen-Schadensfälle bei Mietwagen gehen darauf zurück, dass mit
            Asphalt-Reifendruck über Waschbrettpisten gefahren wird. Passen Sie den Druck beim
            Wechsel des Untergrunds an, und pumpen Sie die Reifen vor der Rückkehr auf Asphalt
            immer wieder auf.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TYRE_PRESSURE.map((t, i) => (
            <Reveal
              key={t.surface}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {t.surface}
              </h3>
              <p className="mt-2 font-serif text-lg italic text-charcoal">{t.psi}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{t.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Welche Mietwagenfirma sich wirklich lohnt</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {RENTAL_COMPANIES.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 60}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[14px] font-bold text-charcoal">{r.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{r.text}</p>
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
