import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Namibia Trip Cost Guide",
  description:
    "Realistic per-person, per-day cost ranges for a Namibia trip across budget, mid-range and luxury tiers, plus what self-drive saves you over a guided safari.",
  alternates: { canonical: "/namibia-trip-cost", languages: { en: "/namibia-trip-cost", de: "/de/namibia-trip-cost", nl: "/nl/namibia-trip-cost" } },
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
        with a compact 2x4, guesthouses and campsites, self-catering some meals.
      </>
    ),
  },
  {
    name: "Mid-range",
    range: "≈ €325 / day",
    desc: "Self-drive or small-group tour, 3-star lodges and guesthouses, most meals included.",
  },
  {
    name: "Luxury",
    range: "€700+ / day",
    desc: "Fly-in or guided safari, design-led lodges, full-board with activities included.",
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
    a: "Accommodation tier, by far: the gap between a guesthouse and a fly-in luxury lodge is often 5-10x per night. Vehicle type (2x4 vs 4x4 rental) and guided vs self-drive are the next biggest levers.",
  },
  {
    q: "How much are Namibia's national park entry fees?",
    a: "They rose sharply on 1 April 2026, the first increase since 2021. International visitors now pay N$280/person/day (up from N$150) at major parks like Etosha and Namib-Naukluft, plus a N$620 two-person vehicle fee, with cheaper rates for SADC citizens and Namibians. Budget for this explicitly on a self-drive trip through multiple parks: it adds up faster than the older, lower figures still quoted on some older guides.",
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
