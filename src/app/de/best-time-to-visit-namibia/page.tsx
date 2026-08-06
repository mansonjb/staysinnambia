import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Beste Reisezeit für Namibia";
const DESCRIPTION =
  "Wann Sie Namibia besuchen sollten: die ehrlichen Kompromisse zwischen Trockenzeit, grüner Saison und den Übergangsmonaten dazwischen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/best-time-to-visit-namibia",
    languages: { en: "/best-time-to-visit-namibia", de: "/de/best-time-to-visit-namibia", nl: "/nl/best-time-to-visit-namibia" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const SEASONS = [
  {
    name: "Trockenzeit",
    months: "Mai – Oktober",
    summary:
      "Das klassische Safari-Fenster, und Namibias klarste, trockenste Luft des Jahres. Die Vegetation lichtet sich, und Tiere konzentrieren sich um Wasserlöcher, was die Tierbeobachtung besonders zuverlässig macht, vor allem in Etosha.",
    tradeoffs: [
      "Beste Tierbeobachtung des Jahres, besonders Juli bis Oktober",
      "Kühle, trockene Tage und kalte Wüstennächte (Schichten einpacken)",
      "Hochsaison-Preise und die meisten anderen Reisenden unterwegs",
    ],
  },
  {
    name: "Grüne Saison",
    months: "November – April",
    summary:
      "Nach den Regenfällen wird Namibia üppig und grün, mit dramatischen Himmeln und starker Vogelbeobachtung, aber die Tierwelt verteilt sich weg von den Wasserlöchern, wodurch Sichtungen weniger konzentriert sind.",
    tradeoffs: [
      "Beste Vogelbeobachtung des Jahres, mit anwesenden Zugvögeln",
      "Landschaften und Fotografielicht sind am dramatischsten",
      "Die Tierwelt ist stärker verteilt, und einzelne Straßen können durch Regen beeinträchtigt sein",
    ],
  },
  {
    name: "Übergangsmonate",
    months: "April–Mai & Oktober–November",
    summary:
      "Ein vernünftiger Mittelweg: weniger Andrang als in der Hochsaison der Trockenzeit, mit Landschaften, die noch nicht vollständig ausgetrocknet sind (April–Mai) oder gerade erst grün werden (Oktober–November).",
    tradeoffs: [
      "Weniger Andrang als Juli bis September",
      "Das Wetter ist generell angenehm und vorhersehbar",
      "Der Oktober kann in den Wüstenregionen echte Hitze bringen, bevor die Regenzeit einsetzt",
    ],
  },
];

export default function BestTimePageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Ratgeber", url: `${SITE_URL}/de/guides` },
          { name: "Beste Reisezeit für Namibia", url: `${SITE_URL}/de/best-time-to-visit-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Beste Reisezeit für Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Es gibt nicht den einen besten Monat: es hängt davon ab, ob für Sie{" "}
          <Link
            href="/de/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            Tierwelt
          </Link>
          ,{" "}
          <Link
            href="/de/namibia-stargazing-photography"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            Fotografie
          </Link>{" "}
          oder das Vermeiden von Menschenmengen im Vordergrund steht. Hier ist der ehrliche
          Kompromiss für jeden Teil des Jahres.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SEASONS.map((season, i) => (
            <Reveal key={season.name} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold text-charcoal">{season.name}</h2>
                <p className="mt-1 text-[12px] uppercase tracking-[0.1em] text-rust">
                  {season.months}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-charcoal/70">
                  {season.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-charcoal/10 pt-4">
                  {season.tradeoffs.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-2 text-[13px] text-charcoal/60"
                    >
                      <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
