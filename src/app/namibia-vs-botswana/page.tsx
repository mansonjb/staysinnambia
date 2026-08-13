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
  alternates: { canonical: "/namibia-vs-botswana", languages: { en: "/namibia-vs-botswana", de: "/de/namibia-vs-botswana", nl: "/nl/namibia-vs-botswana", fr: "/fr/namibia-vs-botswana", it: "/it/namibia-vs-botswana" } },
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
      "Genuinely accessible: a good road network, clear signage, and a well-established rental market make Namibia one of the easiest African countries to self-drive. National parks like Etosha and Namib-Naukluft issue permits and gate access on the spot, no advance camp booking required just to enter.",
    botswana:
      "Much more limited: self-drive entry to Moremi Game Reserve requires a confirmed campsite booking before DWNP (the parks department) will let you through the gate, and only a handful of public campsites exist inside it (Xakanxa, Third Bridge, Moremi, Okuti), often booked out months ahead in peak season. Add deep Kalahari sand tracks that need real 4x4 experience and low-range gearing, and much of the Okavango Delta itself is reachable only by light aircraft, which is why most Botswana visitors fly in with an operator rather than self-drive.",
  },
  {
    axis: "Wildlife density",
    namibia:
      "Excellent but more spread out: Etosha's floodlit waterholes concentrate game exceptionally well, especially in the dry season (roughly Jun–Oct), but sightings in Damaraland or Kaokoland are wilder and less guaranteed.",
    botswana:
      "Denser, more classic safari game viewing: the Okavango Delta and Chobe, home to one of Africa's largest elephant populations, are known for consistently close, frequent sightings, including reliable buffalo herds and predator activity.",
  },
  {
    axis: "Landscape",
    namibia:
      "The main draw for many first-timers: towering red dunes at Sossusvlei (some of the tallest on Earth, over 300 metres), desert-adapted wildlife, a rugged Atlantic coastline, found nowhere else on the continent in this form.",
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
      "Runs consistently higher: established lodges commonly run $600–1,500+ per person per night, and exclusive Okavango Delta fly-in camps often $1,500–4,000+ in high season, with some over $7,000. Botswana's high-value, low-volume tourism model deliberately caps camp numbers, so there's little of the guesthouse-and-rental-car budget tier Namibia has.",
  },
  {
    axis: "Park entry fees",
    namibia:
      "Namibia Wildlife Resorts charges international visitors N$280/day (about $17.50) at premium parks like Etosha, Namib-Naukluft, and the Skeleton Coast, plus a separate per-vehicle fee, current since April 2026.",
    botswana:
      "DWNP charges international visitors BWP 270/day (about $20) at Chobe and Moremi, and BWP 500/day at Central Kalahari, Makgadikgadi, and Nxai Pan, plus separate vehicle fees, also updated April 2026. Day-to-day park fees are actually similar between the two countries; the real cost gap comes from camps and flights, not park gates.",
  },
  {
    axis: "Visa & entry",
    namibia:
      "Requires a visa for most nationalities, though many can get one on arrival or apply online in advance; as of 2026 the standard tourist visa fee is around $30, valid for stays up to 90 days.",
    botswana:
      "More open on paper: most visitors from North America, Europe, the Commonwealth, and the SADC region (Namibia included) enter visa-free for tourism, typically for stays up to 90 days within a 12-month period.",
  },
];

const FAQS = [
  {
    q: "Should I visit Namibia or Botswana for my first African safari?",
    a: "If you want to self-drive, control your own pace, and prioritise landscape and desert-adapted wildlife, Namibia is the easier and generally more affordable first trip: its road network, signage, and rental market are built for it, and park permits are handled at the gate. If classic, dense wildlife viewing is the priority and your budget allows for $600+ per person per night at fly-in camps, Botswana delivers that more reliably, especially in the Okavango Delta and Chobe.",
  },
  {
    q: "Can I visit both Namibia and Botswana in one trip?",
    a: "Yes, this is a well-established combination, and our Caprivi Strip region borders Botswana's Chobe National Park directly, making it a natural link between the two rather than a separate flight-only detour. See our trip extensions guide for how this typically works.",
  },
  {
    q: "Is Botswana more expensive than Namibia?",
    a: "Substantially, yes. Botswana's high-value, low-volume tourism policy deliberately limits camp numbers to keep areas uncrowded: established lodges commonly run $600–1,500+ per person per night, and the most exclusive Okavango Delta fly-in camps often $1,500–4,000+. Namibia's genuine budget tier runs roughly €225–250/day self-drive. Park entry fees themselves are actually similar between the two countries in 2026 (both around $17–20/day); the gap is in camps, guiding, and internal flights, not gate prices.",
  },
  {
    q: "Which country is better for self-drive?",
    a: "Namibia, clearly. Botswana's best wildlife areas are largely inaccessible without a serious 4x4 and off-road experience: self-drive entry to Moremi Game Reserve, for example, requires a confirmed DWNP campsite booking before you're allowed through the gate, and those book out months ahead. It's not set up for the kind of independent road-tripping Namibia is known for.",
  },
  {
    q: "Do I need a visa for Namibia or Botswana?",
    a: "Botswana is visa-free for most Western and SADC nationalities for tourist stays of up to 90 days. Namibia generally requires a visa, though most visitors can get one on arrival or apply online in advance; the standard tourist visa fee as of 2026 is around $30, also valid for up to 90 days.",
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
