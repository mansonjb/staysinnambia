import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Namibia vs Botswana",
  description:
    "Namibia and Botswana get paired in the same guidebooks for a reason: here's the honest difference for a first African safari trip.",
  alternates: { canonical: "/namibia-vs-botswana", languages: { en: "/namibia-vs-botswana", de: "/de/namibia-vs-botswana", nl: "/nl/namibia-vs-botswana" } },
  openGraph: {
    title: "Namibia vs Botswana",
    description:
      "Namibia and Botswana get paired in the same guidebooks for a reason: here's the honest difference for a first African safari trip.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const COMPARISON = [
  {
    axis: "Self-drive",
    namibia:
      "Genuinely accessible: a good road network, clear signage, and a well-established rental market make Namibia one of the easiest African countries to self-drive.",
    botswana:
      "Much more limited: most of the best wildlife areas (Okavango Delta, Chobe, Moremi) are deep-sand 4x4 terrain reached by charter flight or serious off-road driving, and many camps are fly-in only.",
  },
  {
    axis: "Wildlife density",
    namibia:
      "Excellent but more spread out: Etosha's waterholes concentrate game well, but sightings elsewhere (Damaraland, Kaokoland) are wilder and less guaranteed.",
    botswana:
      "Denser, more classic safari game viewing: the Delta and Chobe are known for consistently close, frequent sightings, including reliable buffalo and predator activity.",
  },
  {
    axis: "Landscape",
    namibia:
      "The main draw for many first-timers: towering red dunes, desert-adapted wildlife, a rugged Atlantic coastline, found nowhere else on the continent in this form.",
    botswana:
      "Water-based and green: the Okavango Delta's channels and floodplains are the opposite landscape from Namibia's deserts, with birding and water-wildlife (hippo, elephant, crocodile) as the signature experience.",
  },
  {
    axis: "Typical cost tier",
    namibia: (
      <>
        Can be done at real budget-to-mid-range levels (roughly €225–250/day self-drive, €325/day
        mid-range) via guesthouses and a rental car, alongside a genuine luxury tier above €700/day.
        See our{" "}
        <Link href="/namibia-trip-cost" className="font-semibold text-rust hover:text-rust-dark">
          full cost breakdown
        </Link>
        .
      </>
    ),
    botswana:
      "Runs consistently higher: Botswana's high-value, low-volume tourism model means fewer camps overall and fewer budget options, with fly-in camps as the norm rather than the exception.",
  },
];

const FAQS = [
  {
    q: "Should I visit Namibia or Botswana for my first African safari?",
    a: "If you want to self-drive, control your own pace, and prioritise landscape and desert-adapted wildlife, Namibia is the easier and generally more affordable first trip. If classic, dense wildlife viewing is the priority and budget allows for fly-in camps, Botswana delivers that more reliably.",
  },
  {
    q: "Can I visit both Namibia and Botswana in one trip?",
    a: "Yes, this is a well-established combination, and our Caprivi Strip region borders Botswana's Chobe National Park directly, making it a natural link between the two rather than a separate flight-only detour. See our trip extensions guide for how this typically works.",
  },
  {
    q: "Is Botswana more expensive than Namibia?",
    a: "Generally yes. Botswana's tourism model deliberately limits camp numbers to keep areas uncrowded, which keeps prices high across the board. There's much less of a true budget tier than Namibia has via self-drive and guesthouses.",
  },
  {
    q: "Which country is better for self-drive?",
    a: "Namibia, clearly. Botswana's best wildlife areas are largely inaccessible without a serious 4x4 and off-road experience, or a fly-in camp. It's not set up for the kind of independent road-tripping Namibia is known for.",
  },
];

export default function VsBotswanaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Namibia vs Botswana", url: `${SITE_URL}/namibia-vs-botswana` },
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
          Guidebooks pair these two constantly, and for good reason: they&apos;re neighbours with
          almost opposite safari experiences. Here&apos;s the honest difference, not a sales pitch
          for either.
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
          <h2 className="text-xl font-bold text-charcoal">Don&apos;t choose, combine them</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            Namibia&apos;s Caprivi Strip borders Botswana&apos;s Chobe National Park directly, which
            is why so many longer itineraries treat this as one region rather than two separate
            trips. If you have three weeks or more, adding a Botswana leg onto a Namibia self-drive
            is more straightforward than it sounds.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[13px] text-charcoal/60">
            <MetaIcon name="check" className="h-4 w-4 text-olive" />
            See our <Link href="/namibia-trip-extensions" className="ml-1 font-semibold text-rust hover:text-rust-dark">trip extensions guide</Link> for how this typically works.
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Frequently asked questions
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
          {popularGuides.map((g) => (
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
