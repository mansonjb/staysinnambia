import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Beste reistijd voor Namibië";
const DESCRIPTION =
  "Wanneer u Namibië moet bezoeken: de eerlijke afwegingen tussen het droge seizoen, het groene seizoen en de tussenliggende schoudermaanden.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/best-time-to-visit-namibia",
    languages: {
      en: "/best-time-to-visit-namibia",
      de: "/de/best-time-to-visit-namibia",
      nl: "/nl/best-time-to-visit-namibia",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const SEASONS = [
  {
    name: "Droog seizoen",
    months: "Mei – oktober",
    summary:
      "Het klassieke safariseizoen, en de helderste, droogste lucht van het jaar in Namibië. De vegetatie dunt uit en dieren concentreren zich rond waterpoelen, waardoor dieren spotten het meest betrouwbaar is, vooral in Etosha.",
    tradeoffs: [
      "Beste periode van het jaar om dieren te spotten, vooral juli–oktober",
      "Koele, droge dagen en koude woestijnnachten (pak laagjes in)",
      "Hoogseizoenprijzen en de meeste andere reizigers onderweg",
    ],
  },
  {
    name: "Groen seizoen",
    months: "November – april",
    summary:
      "Na de regens wordt Namibië weelderig en groen, met dramatische luchten en sterke vogelspotting, maar wildlife verspreidt zich weg van de waterpoelen, waardoor waarnemingen minder geconcentreerd zijn.",
    tradeoffs: [
      "Beste periode van het jaar voor vogelspotting, met aanwezige trekvogels",
      "Landschappen en fotografielicht zijn op hun meest dramatisch",
      "Wildlife is meer verspreid en sommige wegen kunnen last hebben van regen",
    ],
  },
  {
    name: "Schoudermaanden",
    months: "April–mei & oktober–november",
    summary:
      "Een redelijk middenweg: minder drukte dan in het hoogseizoen van het droge seizoen, met landschappen die nog niet volledig zijn uitgedroogd (april–mei) of net beginnen te vergroenen (oktober–november).",
    tradeoffs: [
      "Minder drukte dan juli–september",
      "Het weer is over het algemeen aangenaam en voorspelbaar",
      "Oktober kan echte hitte brengen in de woestijnregio's voordat de regens losbarsten",
    ],
  },
];

export default function BestTimePageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Gidsen", url: `${SITE_URL}/nl/guides` },
          { name: "Beste reistijd voor Namibië", url: `${SITE_URL}/nl/best-time-to-visit-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Beste reistijd voor Namibië
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Er is niet één beste maand: het hangt ervan af of uw prioriteit{" "}
          <Link
            href="/nl/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            wildlife
          </Link>
          ,{" "}
          <Link
            href="/nl/namibia-stargazing-photography"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            fotografie
          </Link>{" "}
          of het vermijden van drukte is. Hier is de eerlijke afweging voor elk deel van het jaar.
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
