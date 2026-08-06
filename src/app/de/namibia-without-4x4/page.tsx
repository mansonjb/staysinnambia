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
    languages: { en: "/namibia-without-4x4", de: "/de/namibia-without-4x4", nl: "/nl/namibia-without-4x4" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const CAN_2WD = [
  "Windhoek nach Sossusvlei (Sesriem): Asphalt und gut ausgebauter Schotter",
  "Windhoek nach Swakopmund über die B1/B2: durchgehend asphaltiert",
  "Swakopmund zu den wichtigsten Lodges in Damaraland: ausgebauter Schotter, in der Trockenzeit problemlos",
  "Windhoek zu Etoshas Süd- und Osttoren: größtenteils asphaltiert",
];

const NEED_4X4 = [
  "Die letzten rund 5 km weichen Sand vom 2x4-Parkplatz bei Sossusvlei bis zu den Dünen selbst",
  "Der größte Teil der Skeleton Coast nördlich von Torra Bay",
  "Abgelegene Pisten im Kaokoveld nördlich von Damaraland",
  "Einige unwegsamere Conservancy-Straßen zu Gemeinschafts-Campsites abseits der Hauptschotterstrecken",
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
          Crossover fahren. Die wichtigsten Schotterstraßen des Landes (die „C“- und „D“-Straßen,
          ausführlicher erklärt in unserem{" "}
          <Link
            href="/de/namibia-self-drive-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            Selbstfahrer-Guide
          </Link>
          ) sind gut ausgebaut und gepflegt. Ein 4x4 ist wirklich nur für eine kleinere Zahl
          bestimmter Abschnitte notwendig.
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
            übernimmt der parkeigene Shuttleservice die letzte Sandstrecke, sodass Sie mit einem
            2WD auf dem öffentlichen Parkplatz parken und trotzdem die Dünen erreichen können,
            ohne für die ganze Reise einen 4x4 zu mieten.
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
