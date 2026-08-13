import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Namibia Trip Cost Guide",
  description:
    "Realistic per-person, per-day cost ranges for a Namibia trip across budget, mid-range and luxury tiers, plus what self-drive saves you over a guided safari.",
  alternates: { canonical: "/namibia-trip-cost", languages: { en: "/namibia-trip-cost", de: "/de/namibia-trip-cost", nl: "/nl/namibia-trip-cost", fr: "/fr/namibia-trip-cost", it: "/it/namibia-trip-cost" } },
  openGraph: {
    title: "Namibia Trip Cost Guide",
    description:
      "Realistic per-person, per-day cost ranges for a Namibia trip across budget, mid-range and luxury tiers, plus what self-drive saves you over a guided safari.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const TIERS = [
  {
    name: "Budget",
    range: "≈ €225–250 / day",
    desc: (
      <>
        <Link
          href="/namibia-self-drive-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          Self-drive
        </Link>{" "}
        in a compact 2x4 (roughly N$900–1,400/day for a Corolla Cross, Polo Sedan or Hyundai
        Creta-class car), mixing NWR and private campsites (≈N$150–500 per person) with a
        guesthouse night in town every few days ($58–112 for two in Swakopmund or Windhoek), and
        self-catering most dinners from a supermarket run.
      </>
    ),
  },
  {
    name: "Mid-range",
    range: "≈ €325 / day",
    desc: "Self-drive in a well-equipped 2x4 or entry 4x4, or a small-group tour, staying in 3-star lodges and guesthouses (commonly $120–250/night for two), with breakfast and often dinner included.",
  },
  {
    name: "Luxury",
    range: "€700+ / day",
    desc: "Fly-in or guided safari with a private guide, design-led lodges such as those in the Namib and Kunene, full-board at $350–700+ per person per night with game drives, scenic flights or guided walks bundled in.",
  },
];

const COST_LEVERS = [
  {
    title: "Vehicle rental",
    text: "A basic 2x4 runs roughly N$900–1,400/day. A fully kitted 4x4 safari vehicle with rooftop tent and camping gear from an operator like Bushlore is closer to N$2,500–4,000/day depending on season, before insurance excess reductions. See our self-drive guide for what that excess actually covers.",
  },
  {
    title: "Fuel",
    text: "Pump prices move with government levy changes; as of early August 2026 they sat around N$24.48/litre for petrol 95 and N$26.26/litre for diesel at the coast, with inland towns typically a little higher due to transport costs. A two-week self-drive loop easily burns N$4,000–6,000 in fuel for one vehicle.",
  },
  {
    title: "Park entry fees",
    text: "International visitors pay N$280 per person per day at Etosha and Namib-Naukluft (split evenly between an entrance and a conservation levy), plus a separate N$50/day vehicle fee for a normal car. Children 8 and under are free; older children and SADC nationals pay reduced rates. It's billed per 24-hour block, so time your gate entries to avoid paying for a day you barely use.",
  },
  {
    title: "The $90 visa fee",
    text: "Most nationalities now pay this online in advance rather than on arrival. It's a fixed cost regardless of trip length or tier, so it matters proportionally more on a short trip.",
  },
];

const FAQS = [
  {
    q: "How much does a Namibia safari cost per day?",
    a: "Roughly €225-250/person/day for a budget self-drive trip, around €325/day for mid-range, and €700+/day for a fully guided luxury or fly-in safari with all-inclusive lodges. These are per-person estimates covering accommodation, most meals, and a rental vehicle or guided transport; flights to Namibia are separate.",
  },
  {
    q: "Is self-drive cheaper than a guided safari in Namibia?",
    a: "Significantly: self-drive removes the cost of a private guide and vehicle, which is the single biggest expense in a guided trip. The trade-off is your own time spent on logistics and driving. See our self-drive guide for what that actually involves.",
  },
  {
    q: "What currency does Namibia use?",
    a: "The Namibian Dollar (N$), pegged 1:1 to the South African Rand. Rand is also widely accepted. Cards work in towns and most lodges; carry cash for fuel stations, park entry fees, and rural areas where card machines are unreliable.",
  },
  {
    q: "What's the single biggest cost lever in a Namibia trip?",
    a: "Accommodation tier, by far: the gap between a guesthouse and a fly-in luxury lodge is often 5-10x per night. Vehicle type (2x4 vs 4x4 rental) and guided vs self-drive are the next biggest levers, since a fully kitted 4x4 safari vehicle can cost 2-3x a basic 2x4.",
  },
  {
    q: "How much are Namibia's national park entry fees?",
    a: "They rose sharply on 1 April 2026, the first increase since 2021, an 86% jump from the previous rate. International visitors now pay N$280/person/day (split evenly into a N$140 entrance fee and a N$140 conservation levy) at major parks like Etosha and Namib-Naukluft, up from N$150, plus a separate N$50/day vehicle fee for a normal car (2-10 seats). SADC nationals pay N$180/person/day, Namibians N$60, and children 8 and under enter free. Fees are billed per 24-hour block and are non-refundable, so budget for this explicitly on a self-drive trip through multiple parks.",
  },
  {
    q: "How much does fuel cost for a Namibia self-drive trip?",
    a: "As of early August 2026, pump prices were around N$24.48/litre for petrol 95 and N$26.26/litre for diesel at the coast (Walvis Bay), with a small transport premium inland. Fuel prices move with government levy changes a few times a year, so treat these as a snapshot rather than a fixed number. A typical two-to-three-week self-drive loop covering Etosha, Damaraland, Sossusvlei and the coast burns roughly N$4,000-6,000 in fuel for one vehicle.",
  },
  {
    q: "How much does a rental car cost in Namibia?",
    a: "A basic 2x4 with reasonable clearance (Toyota Corolla Cross, VW Polo Sedan, Hyundai Creta-class) runs roughly N$900-1,400/day from local operators. A fully equipped 4x4 with rooftop tent and camping gear from a specialist like Bushlore or Asco Car Hire is closer to N$2,500-4,000/day in low-to-high season, and that's before choosing a reduced-excess insurance add-on, which typically costs an extra €8-25/day depending on how far you want to bring the standard N$20,000-40,000 excess down.",
  },
];

export default function TripCostPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Trip Cost", url: `${SITE_URL}/namibia-trip-cost` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          How much does a Namibia trip cost?
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia can be a genuinely affordable self-drive country or a five-figure luxury safari.
          The accommodation tier you choose is what decides which. Rough per-person, per-day
          ranges below, excluding flights and the $90{" "}
          <Link
            href="/namibia-visa-requirements"
            className="font-medium text-rust hover:text-rust-dark"
          >
            visa on arrival fee
          </Link>{" "}
          most nationalities now pay online in advance.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 80}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-xl font-bold text-charcoal">{t.name}</h2>
              <p className="mt-1 font-serif text-2xl italic text-rust">{t.range}</p>
              <p className="mt-4 text-[14px] leading-relaxed text-charcoal/70">{t.desc}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Estimates only, per person per day. Actual cost varies with season, group size, and
          route. Excludes international flights.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">What actually drives the number</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Behind the three tiers above, four line items do most of the work. Get these right
            when you budget and the per-day estimate stops being a guess.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {COST_LEVERS.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <MetaIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-olive" />
                <div>
                  <h3 className="text-[14px] font-bold text-charcoal">{c.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{c.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
          <Link
            href="/best-luxury-lodges"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Best Luxury Lodges
          </Link>
        </Reveal>
      </section>
    </>
  );
}
