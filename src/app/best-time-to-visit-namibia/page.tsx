import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Best Time to Visit Namibia";
const DESCRIPTION =
  "When to visit Namibia: the honest trade-offs between the dry season, the green season, and the shoulder months in between.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/best-time-to-visit-namibia", languages: { en: "/best-time-to-visit-namibia", de: "/de/best-time-to-visit-namibia", nl: "/nl/best-time-to-visit-namibia", fr: "/fr/best-time-to-visit-namibia", it: "/it/best-time-to-visit-namibia" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const SEASONS = [
  {
    name: "Dry season",
    months: "May – October",
    summary:
      "The classic safari window. Rain essentially stops from May, vegetation thins fast, and animals lose their scattered water sources, so they funnel into a handful of permanent waterholes. In Etosha that means predictable sightings at pans like Okaukuejo, Halali, Klein Namutoni and Rietfontein, sometimes within sight of camp. July is Namibia's driest month on record; June and July are also the coldest, with desert-interior nights regularly falling to 5°C or below (frost is possible on the gravel plains around Sossusvlei and in the Khomas Hochland), while days stay a crisp, comfortable 22–25°C.",
    tradeoffs: [
      "Peak game viewing runs August–October, as thirst forces animals to concentrate at fewer and fewer waterholes",
      "Cold, sometimes near-freezing desert nights May–August: pack a proper down layer, not just a fleece",
      "Peak-season lodge rates and the fullest camps of the year, especially July–September; book Etosha's national park camps 6–9 months out",
    ],
  },
  {
    name: "Green season",
    months: "November – April",
    summary:
      "The rains arrive in scattered November thunderstorms and build to a peak in January–March, when Windhoek averages around 150mm of rain in its wettest month alone against roughly 0.5mm in dry-season June. Dust settles, the desert turns green almost overnight, and this is when Palearctic migrant birds (waders, kites, European bee-eaters) are present alongside residents, making it the strongest birding window of the year. The trade-off: with water everywhere, wildlife has no reason to gather at waterholes, so sightings in Etosha are more scattered and require more driving.",
    tradeoffs: [
      "Best birding of the year, December–March, with migratory species present alongside residents",
      "Dramatic cloud-and-light photography and calving season for antelope (impala, springbok) in December–January",
      "Wildlife disperses away from waterholes, and unsealed roads in the Zambezi Region and parts of Kaokoland can be temporarily cut by rain",
    ],
  },
  {
    name: "Shoulder months",
    months: "April–May & September–October",
    summary:
      "The best value-for-conditions trade in Namibia. April–May: the rains have just stopped, landscapes are still green from the wet season but the crowds and heat haven't arrived, and roads have mostly dried out. September–October: still fully dry season game viewing, arguably the best of the year as October pushes remaining water sources to their limit, but before the January price reset and with noticeably lighter camps than August. The catch is October heat: desert regions like Sossusvlei and the Kaokoveld regularly hit 35–38°C by mid-afternoon, which is why some guides half-jokingly call it the toughest month to be outdoors.",
    tradeoffs: [
      "April–May: green scenery, drying roads, and rates well below peak dry season",
      "September–October: dry-season game viewing quality without August's crowd levels",
      "October brings real heat before the rains break; plan game drives for early morning and late afternoon",
    ],
  },
];

const MONTHS = [
  { m: "Jan", temp: "32–34° / 17–19°", rain: "Wet season builds", note: "Hot, humid, frequent afternoon storms; landscapes lush" },
  { m: "Feb", temp: "31–33° / 17–19°", rain: "Wettest month", note: "Windhoek averages ~154mm; peak green season and birding" },
  { m: "Mar", temp: "30–32° / 16–18°", rain: "Rain tapering", note: "Still humid, landscapes at their greenest" },
  { m: "Apr", temp: "28–30° / 13–15°", rain: "Rain mostly stops", note: "Underrated shoulder month: green, drying roads, few crowds" },
  { m: "May", temp: "25–27° / 8–10°", rain: "Near zero", note: "Dry season begins; vegetation starts thinning" },
  { m: "Jun", temp: "22–24° / 5–7°", rain: "Driest stretch", note: "Coldest nights of the year; clearest skies for stargazing" },
  { m: "Jul", temp: "22–24° / 5–7°", rain: "Driest month", note: "Peak air clarity; game concentration builds at waterholes" },
  { m: "Aug", temp: "25–27° / 8–10°", rain: "Effectively none", note: "Peak tourist season; book Etosha camps well ahead" },
  { m: "Sep", temp: "29–32° / 11–14°", rain: "Effectively none", note: "Excellent, less crowded game viewing before the October heat" },
  { m: "Oct", temp: "33–36° / 16–18°", rain: "Last dry month", note: "Best waterhole action of the year, but genuinely hot by afternoon" },
  { m: "Nov", temp: "33–35° / 18–19°", rain: "First storms", note: "Rains begin; wildlife starts dispersing, migrant birds arrive" },
  { m: "Dec", temp: "31–33° / 17–19°", rain: "Green season starts", note: "Hot and humid; busy with regional holiday travel to the coast" },
];

export default function BestTimePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Guides", url: `${SITE_URL}/guides` },
          { name: "Best Time to Visit Namibia", url: `${SITE_URL}/best-time-to-visit-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Best time to visit Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          There&apos;s no single best month: it depends on whether you&apos;re prioritising{" "}
          <Link
            href="/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            wildlife
          </Link>
          ,{" "}
          <Link
            href="/namibia-stargazing-photography"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            photography
          </Link>
          , or avoiding crowds. Here&apos;s the honest trade-off for each part of the year.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Our recommendation:</span> if this is a
          first trip built around game viewing, aim for September or early October. You get
          dry-season conditions at their most concentrated, before the true heat and the August
          crowds both peak. If wide-open green landscapes and birding matter more than guaranteed
          sightings, February and March deliver both, at the cost of more driving between animals.
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

      <section className="mx-auto max-w-[1400px] px-6 pb-16 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
            Month by month
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Daytime highs / overnight lows shown are central and southern Namibia averages
            (Windhoek area). The Namib&apos;s desert interior and Etosha&apos;s pans run several
            degrees hotter by afternoon in the shoulder months, and colder overnight in June and
            July.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {MONTHS.map((mo, i) => (
            <Reveal
              key={mo.m}
              delay={i * 30}
              className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-charcoal">
                  {mo.m}
                </h3>
                <span className="text-[11px] font-medium text-rust">{mo.temp}C</span>
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                {mo.rain}
              </p>
              <p className="mt-2 text-[12.5px] leading-snug text-charcoal/60">{mo.note}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
