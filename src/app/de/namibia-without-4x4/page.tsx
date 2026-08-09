import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia ohne 4x4";
const DESCRIPTION =
  "Für die meisten Etappen einer Namibia-Selbstfahrer-Reise brauchen Sie keinen 4x4: hier erfahren Sie, was mit einer normalen Limousine problemlos machbar ist und wo ein 4x4 wirklich zählt.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-without-4x4",
    languages: { en: "/namibia-without-4x4", de: "/de/namibia-without-4x4", nl: "/nl/namibia-without-4x4", fr: "/fr/namibia-without-4x4" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const CAN_2WD = [
  "Windhoek nach Sossusvlei (Sesriem) über die B1 und den Remhoogte-Pass (C24, dann D1275/C19): asphaltiert bis Rehoboth, danach gut ausgebauter Schotter auf dem restlichen Weg. Die meisten Autovermietungen empfehlen 2WD-Fahrern genau diese Route.",
  "Windhoek nach Swakopmund über die B1/B2: durchgehend asphaltiert, keine Schotterstrecke.",
  "Uis nach Twyfelfontein in Damaraland (C35 bis D2612): eine gut befahrene, generell gut instand gehaltene Schotterstraße, die normale Limousinen bei trockenen Bedingungen problemlos bewältigen, auch wenn das letzte Stück der D2612 sandiger ist als der Rest.",
  "Windhoek zu Etoshas Südtor (Anderson) bei Okaukuejo: größtenteils asphaltiert, und die Straßen innerhalb von Etosha selbst sind ausgebaut und in der Trockenzeit auch für einen normalen 2WD geeignet.",
  "Die südliche Anfahrt zu den Aussichtspunkten am Fish River Canyon bei Hobas: Asphalt und gepflegter Schotter, für die Aussichtspunkte selbst ist kein 4x4 nötig.",
];

const NEED_4X4 = [
  "Die letzten rund 5 km weichen Sand vom 2x4-Parkplatz bei Sossusvlei bis zu den Dünen und zum Deadvlei selbst, mittlerweile für alle Fahrzeuge unabhängig vom Antrieb nur noch per Shuttle erreichbar (siehe unten).",
  "Der Spreetshoogte-Pass, der steilste Pass Namibias (Steigungen von bis zu etwa 1:4,5), auf der alternativen Panoramaroute nach Sossusvlei: nur mit 4x4 befahrbar, Wohnwagen und Anhänger sind komplett verboten. Nehmen Sie mit einem 2WD stattdessen den sanfteren Remhoogte-Pass.",
  "Der größte Teil der Skeleton Coast nördlich von Torra Bay sowie markante Lodges im Norden wie die Shipwreck Lodge, die normalerweise mit dem Kleinflugzeug statt über eine Straße erreicht werden.",
  "Abgelegene Pisten im Kaokoveld nördlich von Damaraland, einschließlich der Routen Richtung Serra Cafema und Hartmann Valley.",
  "Die D-Straßen in Damaraland und Kaokoland generell: ausgebaut, aber rauer und abgelegener als die C-Straßen, und in der Regenzeit (etwa November bis April) wirklich wetteranfällig, dann können selbst sonst zuverlässige Schotterstrecken schnell schlechter werden.",
];

export default function Without4x4PageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Ratgeber", url: `${SITE_URL}/de/guides` },
          { name: "Namibia ohne 4x4", url: `${SITE_URL}/de/namibia-without-4x4` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia ohne 4x4
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Ein weit verbreitetes Missverständnis: Die meisten Etappen einer klassischen
          Namibia-Rundreise lassen sich problemlos mit einer normalen Limousine oder einem
          Crossover fahren. Namibias „C“-Straßen, das Haupt-Schotternetz des Landes,
          ausführlicher erklärt in unserem{" "}
          <Link
            href="/de/namibia-self-drive-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            Selbstfahrer-Guide
          </Link>
          , sind breit, ausgebaut und gut genug gepflegt, dass die meisten Autovermietungen sie
          bei angemessenem Tempo für 2WD freigeben. Die raueren „D“-Straßen sind eine andere
          Geschichte, und ein 4x4 ist wirklich nur für eine kleinere, bestimmte Zahl an
          Abschnitten notwendig, nicht für die ganze Reise.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-black/5 bg-olive/5 p-6">
            <h2 className="text-lg font-bold text-olive">Problemlos mit einem normalen Auto</h2>
            <ul className="mt-4 space-y-2.5">
              {CAN_2WD.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-2xl border border-black/5 bg-rust/5 p-6">
            <h2 className="text-lg font-bold text-rust">Wo ein 4x4 wirklich zählt</h2>
            <ul className="mt-4 space-y-2.5">
              {NEED_4X4.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">Ein Mittelweg:</span> Bei Sossusvlei
            übernimmt ein offizieller Shuttle-/Ausflugsservice die letzte Sandstrecke zu den
            Dünen und zum Deadvlei, sodass Sie mit einem 2WD auf dem öffentlichen Parkplatz
            parken und die Dünen trotzdem erreichen, ohne für die ganze Reise einen 4x4 zu
            mieten. Seit 2026 ist das auch für 4x4-Fahrer nicht mehr optional: Private Fahrzeuge
            sind auf den letzten rund 5 km nicht mehr zugelassen, und laut offizieller
            Parkangabe kostet das etwa N$260 pro Erwachsenem und N$130 pro Kind unter 12 Jahren.
            Abholpunkt und Preise haben sich in den letzten Jahren allerdings schon mehrfach
            geändert, bestätigen Sie die aktuelle Regelung daher in Sesriem oder bei Ihrer
            Lodge, bevor Sie losfahren.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <Link
            href="/de/itineraries"
            className="inline-block rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Selbstfahrer-Reiserouten ansehen
          </Link>
        </Reveal>
      </section>
    </>
  );
}
