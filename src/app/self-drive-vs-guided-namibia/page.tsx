import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Self-Drive vs Guided Safari",
  description:
    "Cost, freedom, risk and comfort: the honest trade-offs between self-driving Namibia and booking a guided safari, not a sales pitch for either.",
  alternates: { canonical: "/self-drive-vs-guided-namibia", languages: { en: "/self-drive-vs-guided-namibia", de: "/de/self-drive-vs-guided-namibia", nl: "/nl/self-drive-vs-guided-namibia" } },
  openGraph: {
    title: "Self-Drive vs Guided Safari",
    description:
      "Cost, freedom, risk and comfort: the honest trade-offs between self-driving Namibia and booking a guided safari, not a sales pitch for either.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const FACTORS = [
  {
    axis: "Cost",
    selfDrive:
      "Significantly cheaper: you're not paying for a private guide and vehicle, the single biggest line item in a guided trip. See our full cost breakdown for real per-day figures.",
    guided: "Higher across the board, but often includes meals, park fees and activities that would otherwise be separate costs on a self-drive trip.",
  },
  {
    axis: "Freedom & pace",
    selfDrive:
      "Total control: stay an extra hour at a waterhole, change your route on a whim, skip a stop that doesn't interest you. The trade-off is you're the one managing logistics.",
    guided: "Fixed itinerary, decided in advance: less flexible, but zero logistics to manage day to day.",
  },
  {
    axis: "Wildlife spotting",
    selfDrive:
      "Genuinely good in Etosha, where waterholes concentrate game predictably. Weaker in areas requiring tracking skill, like desert-adapted elephant or rhino in Damaraland.",
    guided: "A trained guide's eye for tracks, sounds and animal behaviour meaningfully increases sightings, especially outside Etosha's easier waterhole-based viewing.",
  },
  {
    axis: "Risk & comfort",
    selfDrive:
      "Real risks worth taking seriously: gravel-road driving, night-time wildlife on roads, long stretches with no fuel or phone signal. See our self-drive guide for the specifics.",
    guided: "Lower personal risk (someone else is driving, navigating and handling breakdowns) at the cost of being on someone else's schedule.",
  },
  {
    axis: "Best first-timer fit",
    selfDrive:
      "Confident drivers comfortable with gravel roads and self-navigation, who want to set their own pace and are working with a tighter budget.",
    guided: "Travellers prioritising wildlife sightings and zero logistics over cost and flexibility, or anyone not confident driving unfamiliar gravel roads.",
  },
];

const FAQS = [
  {
    q: "Is self-drive or guided better for a first-time Namibia trip?",
    a: "Neither is objectively better: it depends on what you're optimising for. Self-drive suits confident drivers who want control of pace and cost; guided suits travellers who want the best possible wildlife sightings and no logistics to manage. Many first-timers do a hybrid: self-drive between regions, guided game drives inside the parks.",
  },
  {
    q: "Can I do a hybrid of self-drive and guided?",
    a: "Yes, and it's a common, sensible middle ground: self-drive the transfers between regions, then book guided game drives once you're at a lodge, particularly in areas like Damaraland where tracking skill genuinely improves sightings.",
  },
  {
    q: "How much more does a guided safari cost than self-drive?",
    a: "The gap is substantial: a private guide and vehicle is typically the single biggest line item in a Namibia trip budget. See our full trip cost breakdown for the actual tier-by-tier numbers.",
  },
  {
    q: "Do I need off-road driving experience to self-drive Namibia?",
    a: "Not for the classic route: Etosha, Sossusvlei and Swakopmund are manageable for anyone comfortable on gravel roads, with no serious off-road skill required. It becomes more relevant in Damaraland and Kaokoland, where a 4x4 and some gravel-driving confidence matter more.",
  },
];

export default function SelfDriveVsGuidedPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Self-Drive vs Guided", url: `${SITE_URL}/self-drive-vs-guided-namibia` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Self-drive vs guided safari in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          This is a genuinely different decision from{" "}
          <Link
            href="/namibia-without-4x4"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            &quot;do I need a 4x4&quot;
          </Link>
          . It&apos;s about who&apos;s driving, who&apos;s deciding the route, and what
          you&apos;re trading for what.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4">
          {FACTORS.map((row, i) => (
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
                    Self-drive
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.selfDrive}</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-charcoal/50">
                    Guided
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.guided}</p>
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
            href="/namibia-self-drive-guide"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Self-Drive Logistics Guide
          </Link>
        </Reveal>
      </section>
    </>
  );
}
