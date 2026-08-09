import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Namibia SIM Cards & eSIM Guide",
  description:
    "Which network to use, where you'll actually have signal, and where you genuinely won't: a practical connectivity guide for self-driving Namibia.",
  alternates: { canonical: "/namibia-connectivity", languages: { en: "/namibia-connectivity", de: "/de/namibia-connectivity", nl: "/nl/namibia-connectivity", fr: "/fr/namibia-connectivity" } },
  openGraph: {
    title: "Namibia SIM Cards & eSIM Guide",
    description:
      "Which network to use, where you'll actually have signal, and where you genuinely won't: a practical connectivity guide for self-driving Namibia.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const COVERAGE = [
  {
    area: "Windhoek, Swakopmund, Walvis Bay",
    signal: "Good MTC 4G, reliable enough for calls, maps and streaming.",
  },
  {
    area: "Etosha (camps and main roads)",
    signal: "Patchy but present: most camps (Okaukuejo, Halali, Namutoni) have Wi-Fi at reception even where mobile signal is weak or absent on the surrounding gravel loops.",
  },
  {
    area: "Sossusvlei, Damaraland, Spitzkoppe",
    signal: "Weak to none for long stretches, especially off the C-roads. Download offline maps before you leave the coast, not once you're on the D-road into Damaraland.",
  },
  {
    area: "Skeleton Coast, remote Kaokoland (incl. Opuwo detour)",
    signal: "Expect no MTC or TN Mobile signal at all for entire days: this is normal, not a network fault, and applies to eSIMs routed onto the same towers too.",
  },
];

const FAQS = [
  {
    q: "Which network is best for tourists in Namibia?",
    a: "MTC is Namibia's dominant network and generally has the widest coverage along the main tourist routes and towns; Telecom Namibia (via TN Mobile) is the alternative. Neither has meaningful coverage in the most remote desert and coastal stretches, including the Skeleton Coast, the deep Namib, and most of Kaokoland: that's a terrain and infrastructure limitation, not a network choice you can fix by switching providers.",
  },
  {
    q: "How much does an MTC tourist SIM cost?",
    a: "MTC sells two tourist-specific packages, both available at their airport kiosk: a Leisure package at N$349 for 14 days with 10.1GB of data plus some international call and SMS credit, and a Premium package at N$659 for 30 days with 20.1GB of data and more call credit. A plain prepaid SIM with a separate data bundle is usually cheaper if you're comfortable topping up yourself, but the tourist packages save you the hassle on day one.",
  },
  {
    q: "Can I buy a SIM card at the airport?",
    a: "Yes, MTC has a kiosk in the arrivals area at Hosea Kutako International Airport, and it's the simplest way to get connected before you start driving. Bring your passport; local SIM registration typically requires ID, and the tourist packages are set up on the spot.",
  },
  {
    q: "Does eSIM work well in Namibia, and is it cheaper than a local SIM?",
    a: "It works, but it's rarely cheaper. International eSIM providers route onto the same MTC or Telecom Namibia towers as a physical SIM, so coverage is identical, and plans typically start around $9.50 for a week of data. The catch is price per gigabyte: eSIM data commonly costs two to three times what an MTC prepaid bundle charges for the same volume. The trade you're paying for is convenience, landing already connected instead of queuing at the airport kiosk, not a better network.",
  },
  {
    q: "Will I have signal for the whole self-drive route?",
    a: "No, and you shouldn't plan around having it. Sossusvlei, Damaraland, Spitzkoppe, the Skeleton Coast and remote Kaokoland all have long stretches, sometimes entire days of driving, with no signal at all on either network. Download offline Google Maps for your route, save your lodge bookings as PDFs, and treat connectivity as a town-and-camp thing, not a between-stops thing.",
  },
];

export default function ConnectivityPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Connectivity", url: `${SITE_URL}/namibia-connectivity` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia SIM cards, eSIM & connectivity
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          The honest version: you&apos;ll have decent signal in towns and patchy-to-none everywhere
          else. Plan for that instead of fighting it.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {COVERAGE.map((c, i) => (
            <Reveal
              key={c.area}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h2 className="text-[14px] font-bold text-charcoal">{c.area}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{c.signal}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Before you leave the coast</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Buy an MTC SIM at the Hosea Kutako airport kiosk (N$349 for 14 days / 10.1GB, or N$659 for 30 days / 20.1GB), or confirm your eSIM provider covers Namibia specifically before relying on it for data over a physical SIM",
              (
                <>
                  Download offline maps for your full self-drive route in advance. Our{" "}
                  <Link href="/namibia-self-drive-guide" className="font-semibold text-rust hover:text-rust-dark">
                    self-drive guide
                  </Link>{" "}
                  covers the rest of the pre-trip logistics
                </>
              ),
              "Save lodge confirmations and directions as PDFs or screenshots, not just email links",
              "Tell someone your rough daily route if you're driving remote stretches alone",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
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
          <Link
            href="/namibia-packing-list"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibia Packing List
          </Link>
        </Reveal>
      </section>
    </>
  );
}
