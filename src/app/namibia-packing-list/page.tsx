import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Namibia Packing List",
  description:
    "What Namibia's heat, dust and huge day-night temperature swings actually demand: a practical packing list for a self-drive trip.",
  alternates: { canonical: "/namibia-packing-list", languages: { en: "/namibia-packing-list", de: "/de/namibia-packing-list", nl: "/nl/namibia-packing-list", fr: "/fr/namibia-packing-list", it: "/it/namibia-packing-list" } },
  openGraph: {
    title: "Namibia Packing List",
    description:
      "What Namibia's heat, dust and huge day-night temperature swings actually demand: a practical packing list for a self-drive trip.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const malariaItem = (
  <>
    Malaria prophylaxis (doxycycline or atovaquone-proguanil/Malarone are the two most commonly
    prescribed options) if your route includes the malaria-risk regions: Kavango, Kunene,
    Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa and Zambezi, and highest risk in
    the rainy season. See our{" "}
    <Link href="/namibia-safety-and-health" className="font-semibold text-rust hover:text-rust-dark">
      safety and health guide
    </Link>{" "}
    for the region-by-region breakdown, and confirm the specific drug with a travel doctor
  </>
);

const CATEGORIES = [
  {
    title: "Clothing",
    items: [
      "Layers: desert days can hit 35°C+ while nights drop below 10°C, sometimes near freezing in winter (Jun–Aug)",
      "Neutral-coloured clothing for game drives (avoid bright white or black, which shows dust and heat)",
      "A proper wide-brimmed hat and polarised sunglasses: the sun is relentless, even in the green season",
      "A warm jacket or fleece for early-morning game drives and desert nights, even in summer",
      "A buff or neck gaiter: the single most useful piece of clothing on gravel-road days, doubling as dust mask, sun protection and warmth at dawn",
      "Quick-dry trousers and closed-toe shoes over sandals for anything off tarmac: gravel, thorns and loose sand punish open footwear",
    ],
  },
  {
    title: "Health & practical",
    items: [
      "High-SPF sunscreen and lip balm: the dry air and altitude both increase UV exposure",
      "A basic first-aid kit and any personal medication, given how far some lodges are from a pharmacy",
      malariaItem,
      "Reusable water bottles: carry 2–5 litres per person on remote self-drive stretches",
    ],
  },
  {
    title: "Self-drive specific",
    items: [
      "A physical, printed or downloaded offline map: see our connectivity guide for why you can't rely on signal",
      "A basic tool kit and tyre repair kit if your rental doesn't already include one, since gravel-road tyre and windscreen damage is the most common rental claim",
      "Cash (Namibian dollars or South African rand) for fuel stations and the N$280/person/day park entry fees at Etosha and Namib-Naukluft, where card machines are unreliable",
      "Dust-proof bags or dry bags for camera gear and electronics on gravel-road days: Namibia's fine dust gets into zips, ports and lens mounts",
    ],
  },
  {
    title: "Electronics & power",
    items: [
      "A headlamp with spare batteries: many remote lodges and desert camps run on generator or solar power for set hours rather than a 24-hour grid, and cut electricity overnight",
      "A universal travel adapter for Namibia's Type D and M sockets (220V), plus a power bank: charging windows at remote camps are limited and shared",
      "An offline-capable phone with maps downloaded in advance, and a paper backup: mobile signal disappears for long stretches outside towns",
    ],
  },
  {
    title: "Photography",
    items: [
      "A tripod if you plan any stargazing or astrophotography: see our dedicated guide",
      "Spare batteries and memory cards: charging opportunities are limited at remote camps",
      "A lens cloth and blower: dust gets into everything on gravel roads",
    ],
  },
];

const FAQS = [
  {
    q: "How much water should I carry on a Namibia self-drive?",
    a: "Aim for at least 2-5 litres per person for any remote stretch, more in the hottest months. This isn't just a comfort measure: fuel stations and services are genuinely far apart, sometimes over 250km on stretches like the Skeleton Coast, Kaokoland or the road to Fish River Canyon, and carrying water is standard advice for a breakdown scenario, not an exaggeration.",
  },
  {
    q: "Do I need warm clothes for a desert country?",
    a: "Yes, and it surprises a lot of first-timers. Namibia's desert regions can swing from 35°C+ in the day to under 10°C at night, and winter (June–August) nights can approach freezing in places like Sossusvlei. Layers are non-negotiable, not optional, and a buff or neck gaiter covers both the dust and the dawn chill in one item.",
  },
  {
    q: "What colours should I wear on game drives?",
    a: "Neutral, muted tones (khaki, olive, sand) rather than bright white, black, or very dark colours, which show dust quickly and can be more conspicuous to wildlife at close range.",
  },
  {
    q: "Is malaria medication necessary for my packing list?",
    a: "It depends on your specific route and dates: current CDC guidance flags malaria risk across Namibia's Kavango, Kunene, Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa and Zambezi regions, highest in the rainy season (roughly November to April). Doxycycline and atovaquone-proguanil (Malarone) are the two most commonly recommended prophylaxis options. See our safety and health guide for the region-by-region breakdown, and confirm the specific drug and dosing with a travel doctor rather than assuming either way.",
  },
  {
    q: "What plug adapter do I need for Namibia?",
    a: "Namibia uses Type D and Type M sockets at 220V/50Hz, the same large round three-pin plugs as South Africa. A universal travel adapter covers both. Most phone, camera and laptop chargers are dual-voltage (look for \"100-240V\" printed on the adapter), so you'll only need the plug shape, not a voltage converter.",
  },
];

export default function PackingListPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Packing List", url: `${SITE_URL}/namibia-packing-list` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia packing list
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia&apos;s desert heat swings from 35°C+ by day to under 10°C at night (sometimes
          near freezing in winter) and gravel-road dust gets into everything. That&apos;s what
          actually drives this list, not a generic safari checklist.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-lg font-bold text-charcoal">{cat.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                    <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                    {item}
                  </li>
                ))}
              </ul>
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
            href="/namibia-connectivity"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Connectivity Guide
          </Link>
        </Reveal>
      </section>
    </>
  );
}
