import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Packliste";
const DESCRIPTION =
  "Was Namibias Hitze, Staub und die enormen Temperaturunterschiede zwischen Tag und Nacht wirklich erfordern: eine praktische Packliste für eine Selbstfahrer-Reise.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-packing-list",
    languages: { en: "/namibia-packing-list", de: "/de/namibia-packing-list", nl: "/nl/namibia-packing-list" },
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

const malariaItem = (
  <>
    Malaria-Prophylaxe, wenn Ihre Route den Norden (Etosha, Caprivi) in der Regenzeit einschließt:
    siehe unseren{" "}
    <Link href="/de/namibia-safety-and-health" className="font-semibold text-rust hover:text-rust-dark">
      Sicherheits- und Gesundheitsguide
    </Link>
  </>
);

const CATEGORIES = [
  {
    title: "Kleidung",
    items: [
      "Schichten: Wüstentage können über 35°C erreichen, während die Temperatur nachts unter 10°C fällt, im Winter (Jun–Aug) mancherorts nahe dem Gefrierpunkt",
      "Neutral gefärbte Kleidung für Pirschfahrten (kein grelles Weiß oder Schwarz, das zeigt Staub und speichert Hitze)",
      "Ein richtiger Hut und eine Sonnenbrille: Die Sonne ist unerbittlich, auch in der grünen Jahreszeit",
      "Eine warme Jacke oder ein Fleece für frühmorgendliche Pirschfahrten und Wüstennächte, auch im Sommer",
    ],
  },
  {
    title: "Gesundheit & Praktisches",
    items: [
      "Sonnencreme mit hohem LSF und Lippenbalsam: Die trockene Luft und die Höhenlage erhöhen beide die UV-Belastung",
      "Ein einfaches Erste-Hilfe-Set und persönliche Medikamente, da manche Lodges weit von der nächsten Apotheke entfernt sind",
      malariaItem,
      "Wiederverwendbare Wasserflaschen: 2–5 Liter pro Person auf abgelegenen Selbstfahrer-Etappen mitführen",
    ],
  },
  {
    title: "Selbstfahrer-Spezifisches",
    items: [
      "Eine physische, gedruckte oder offline heruntergeladene Karte: siehe unseren Verbindungsguide dazu, warum Sie sich nicht auf Empfang verlassen können",
      "Ein einfaches Werkzeugset und ein Reifenreparaturset, falls im Mietwagen nicht schon enthalten",
      "Bargeld (namibische Dollar oder südafrikanische Rand) für Tankstellen und Parkeintritte in Gebieten, in denen Karten nicht funktionieren",
      "Staubdichte Taschen für Kameraausrüstung und Elektronik an Tagen auf Schotterstraßen",
    ],
  },
  {
    title: "Fotografie",
    items: [
      "Ein Stativ, falls Sie Sternenbeobachtung oder Astrofotografie planen: siehe unseren eigenen Guide dazu",
      "Ersatzakkus und Speicherkarten: Lademöglichkeiten sind in abgelegenen Camps begrenzt",
      "Ein Objektivtuch und ein Blasebalg: Auf Schotterstraßen setzt sich Staub überall fest",
    ],
  },
];

const FAQS = [
  {
    q: "Wie viel Wasser sollte ich bei einer Selbstfahrer-Reise durch Namibia mitführen?",
    a: "Planen Sie mindestens 2 bis 5 Liter pro Person für jede abgelegene Etappe ein, mehr in den heißesten Monaten. Das ist keine reine Komfortmaßnahme: Tankstellen und Services liegen wirklich weit auseinander, und Wasser mitzuführen ist Standardrat für den Pannenfall, keine Übertreibung.",
  },
  {
    q: "Brauche ich warme Kleidung für ein Wüstenland?",
    a: "Ja, und das überrascht viele Erstbesucher. Namibias Wüstenregionen können tagsüber über 35°C erreichen und nachts auf unter 10°C fallen, und im Winter (Juni–August) nähern sich die Nächte an Orten wie Sossusvlei dem Gefrierpunkt. Schichten sind unverzichtbar, keine Option.",
  },
  {
    q: "Welche Farben sollte ich bei Pirschfahrten tragen?",
    a: "Neutrale, gedeckte Farbtöne (Khaki, Oliv, Sandfarben) statt grellem Weiß, Schwarz oder sehr dunklen Farben, die schnell Staub zeigen und Tieren aus der Nähe eher auffallen können.",
  },
  {
    q: "Ist Malaria-Medikation für meine Packliste notwendig?",
    a: "Das hängt von Ihrer konkreten Route und Reisezeit ab: Das Malariarisiko in Namibia konzentriert sich auf den Norden (Etosha, Caprivi) und ist in der Regenzeit (etwa November bis April) am höchsten. Die regionale Aufschlüsselung finden Sie in unserem Sicherheits- und Gesundheitsguide, und lassen Sie sich in jedem Fall von einem Reisemediziner bestätigen, statt es anzunehmen.",
  },
];

export default function PackingListPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Packliste", url: `${SITE_URL}/de/namibia-packing-list` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia Packliste
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibias Wüstenhitze schwankt tagsüber zwischen 35°C+ und unter 10°C nachts (im Winter
          mancherorts nahe dem Gefrierpunkt), und der Staub der Schotterstraßen setzt sich überall
          fest. Genau das bestimmt diese Liste, nicht eine generische Safari-Checkliste.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-lg font-bold text-charcoal">{cat.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                    <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                    {item}
                  </li>
                ))}
              </ul>
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
            href="/de/namibia-connectivity"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Verbindungsguide
          </Link>
        </Reveal>
      </section>
    </>
  );
}
