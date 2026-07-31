import type { Metadata } from "next";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Best Time to Visit Namibia",
  description:
    "When to visit Namibia: the honest trade-offs between the dry season, the green season, and the shoulder months in between.",
};

const SEASONS = [
  {
    name: "Dry season",
    months: "May – October",
    summary:
      "The classic safari window. Vegetation thins out and animals concentrate around waterholes, making game viewing at its most reliable — especially in Etosha.",
    tradeoffs: [
      "Best wildlife viewing of the year, particularly July–October",
      "Cool, dry days and cold desert nights (pack layers)",
      "Peak season pricing and the most other travellers on the road",
    ],
  },
  {
    name: "Green season",
    months: "November – April",
    summary:
      "Namibia turns lush and green after the rains, with dramatic skies and strong birding — but wildlife spreads out away from waterholes, making sightings less concentrated.",
    tradeoffs: [
      "Best birding of the year, with migratory species present",
      "Landscapes and photography light are at their most dramatic",
      "Wildlife is more dispersed and some roads can be affected by rain",
    ],
  },
  {
    name: "Shoulder months",
    months: "April–May & October–November",
    summary:
      "A reasonable middle ground: fewer crowds than peak dry season, with landscapes not yet fully dried out (April–May) or just starting to green up (October–November).",
    tradeoffs: [
      "Lighter crowds than July–September",
      "Weather is generally comfortable and predictable",
      "October can bring real heat in the desert regions before the rains break",
    ],
  },
];

export default function BestTimePage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Best time to visit Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          There&apos;s no single best month — it depends on whether you&apos;re prioritising
          wildlife, photography, or avoiding crowds. Here&apos;s the honest trade-off for each
          part of the year.
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
