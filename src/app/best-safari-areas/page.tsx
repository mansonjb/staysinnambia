import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { getRegion } from "@/lib/data";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Best Safari Areas in Namibia";
const DESCRIPTION = "Etosha, Damaraland and Caprivi compared: which Namibian safari region actually fits your trip.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/best-safari-areas", languages: { en: "/best-safari-areas", de: "/de/best-safari-areas", nl: "/nl/best-safari-areas", fr: "/fr/best-safari-areas" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const COMPARISON = [
  {
    slug: "etosha",
    style: "Classic waterhole safari",
    wildlife:
      "The most reliable of the three. An estimated 2,000+ elephant, several hundred lion across roughly two dozen prides, and one of Africa's most important black rhino populations concentrate around floodlit waterholes, especially as the dry season deepens.",
    pace: "Structured game drives from a fixed base, or floodlit waterhole viewing without leaving camp",
    bestMonths: "July–October, when seasonal pools have dried up and animals gather at the permanent waterholes; expect crowds at the busiest ones in peak season",
  },
  {
    slug: "damaraland",
    style: "Tracking, on foot or by vehicle",
    wildlife:
      "A different proposition entirely: desert-adapted elephant that range up to 700km and go days without drinking, and, with a specialist guide out of the Palmwag Concession, one of the largest free-roaming black rhino populations left on earth, tracked on foot. Nothing here is guaranteed the way Etosha's waterholes are; a find means more precisely because it wasn't scripted.",
    pace: "Slower, guided, conservancy-based, often on foot",
    bestMonths: "May–October (dry season); wildlife disperses more widely after rain, so tracking success drops outside this window",
  },
  {
    slug: "caprivi",
    style: "River and floodplain wildlife",
    wildlife:
      "Hippo and crocodile in the Kwando-Linyanti river system, large elephant and buffalo herds moving through Bwabwata National Park, and close to 450 recorded bird species: a genuinely different ecosystem from the desert circuit further south, not a lesser version of it.",
    pace: "Boat-based excursions alongside game drives",
    bestMonths: "April–September, when the dry season concentrates wildlife along the rivers and floodplains and driving conditions are at their best",
  },
];

export default function SafariAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Guides", url: `${SITE_URL}/guides` },
          { name: "Best Safari Areas in Namibia", url: `${SITE_URL}/best-safari-areas` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Best safari areas in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          "Safari" means something different in each of these three regions: Etosha is about
          density and reliability, Damaraland is about the specific thrill of tracking
          desert-adapted species that aren't fenced in anywhere, and the Caprivi Strip is barely
          the same country, a river and floodplain ecosystem that shares almost nothing with the
          desert circuit further south. See our{" "}
          <Link
            href="/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            wildlife guide
          </Link>{" "}
          for what to expect from each. None is strictly better: they suit different priorities.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {COMPARISON.map((c, i) => {
            const region = getRegion(c.slug);
            if (!region) return null;
            return (
              <Reveal key={c.slug} delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                  <h2 className="font-serif text-2xl italic text-charcoal">{region.name}</h2>
                  <dl className="mt-4 space-y-4 border-t border-charcoal/10 pt-4">
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Safari style
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.style}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Wildlife
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.wildlife}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Pace
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.pace}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Best months
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.bestMonths}</dd>
                    </div>
                  </dl>
                  <Link
                    href={`/where-to-stay/${region.slug}`}
                    className="group mt-6 flex items-center justify-between border-t border-charcoal/10 pt-4 text-[13px] font-medium text-charcoal/60 hover:text-rust"
                  >
                    Where to stay in {region.name}
                    <CardArrow />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">Our recommendation:</span> if you can
            only pick one, Etosha is the safer bet for a first safari, especially August–October,
            when waterhole activity peaks. Damaraland earns its place on a longer trip as the
            region that rewards patience with something Etosha can't offer: free-roaming
            desert-adapted wildlife with no fence in sight. The Caprivi Strip is worth adding only
            if you're continuing on into Botswana's Okavango Delta or Chobe, or specifically
            chasing birding and river wildlife: as a standalone stop on a short Namibia-only trip,
            the roughly 12-hour drive (most people fly to Katima Mulilo instead) is hard to
            justify.
          </p>
        </Reveal>
      </section>
    </>
  );
}
