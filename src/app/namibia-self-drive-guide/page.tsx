import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Namibia Self-Drive Guide",
  description:
    "What self-driving Namibia actually involves: road types, fuel-stop planning, rental insurance gotchas, and why night driving is the one rule everyone repeats.",
  alternates: { canonical: "/namibia-self-drive-guide", languages: { en: "/namibia-self-drive-guide", de: "/de/namibia-self-drive-guide", nl: "/nl/namibia-self-drive-guide" } },
  openGraph: {
    title: "Namibia Self-Drive Guide",
    description:
      "What self-driving Namibia actually involves: road types, fuel-stop planning, rental insurance gotchas, and why night driving is the one rule everyone repeats.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const ROAD_TYPES = [
  { code: "A / B roads", desc: "Tarred main routes between major towns, normal driving." },
  {
    code: "C roads",
    desc: "Graded gravel, generally well maintained. The backbone of most self-drive itineraries.",
  },
  {
    code: "D roads",
    desc: "Minor gravel, narrower and rougher. Slow down for corrugation and loose sand patches.",
  },
  {
    code: "F roads",
    desc: "4x4 tracks, often rough or seasonally impassable. Not for a standard rental sedan.",
  },
];

const RULES = [
  "Never drive after dark outside towns: livestock, wildlife and unlit pedestrians on the road are the leading cause of serious accidents.",
  "Fuel stations are far apart in the north-west and south. Fill up whenever you're below half a tank, and carry extra water in case of a breakdown.",
  "Gravel-road tyre and windscreen damage is the most common rental claim: check exactly what your insurance excess covers before you sign.",
  "The legal blood alcohol limit is 0.05%, enforced with roadside checks on some routes.",
  "Slow down on gravel corners and in loose sand: most self-drive accidents are single-vehicle rollovers from over-braking or over-correcting at speed.",
];

const FAQS = [
  {
    q: "Do I need a 4x4 to self-drive Namibia?",
    a: "Not for most classic routes. Etosha, Sossusvlei, Swakopmund and the C-road network are manageable in a well-equipped 2x4 with high clearance. A 4x4 becomes worth it for Damaraland, the Kaokoland, and anywhere you'll be on D or F roads. See our dedicated guide on travelling without a 4x4 for the specific routes that work.",
  },
  {
    q: "Self-drive or guided safari: which is better for a first trip?",
    a: "Self-drive gives you total control of pace and cost, and Namibia's road network makes it more approachable than most safari countries. A guided trip trades that freedom for local knowledge, no logistics to manage, and better wildlife spotting on game drives. Many first-timers do a hybrid: self-drive between regions, guided game drives inside the parks.",
  },
  {
    q: "How far apart are fuel stations in Namibia?",
    a: "On main routes, every 100-200km. On remote stretches (the Skeleton Coast, parts of Kaokoland, the road to Fish River Canyon), gaps can exceed 250km with no services. Plan fuel stops before you leave each town, not when the gauge gets low.",
  },
  {
    q: "What does rental car insurance actually cover on gravel roads?",
    a: "Standard collision cover often excludes or heavily excesses windscreen chips and tyre damage from gravel, which are the two most common claims in Namibia. Ask specifically about gravel-road excess and consider a zero-excess add-on if it's offered.",
  },
];

export default function SelfDriveGuidePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Self-Drive Guide", url: `${SITE_URL}/namibia-self-drive-guide` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia self-drive guide
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Self-driving is how most independent travellers see Namibia. The road network is
          genuinely good, but the distances, road surfaces and rental insurance fine print catch
          people out. Here&apos;s what to actually plan for, including how much it saves over a{" "}
          <Link href="/namibia-trip-cost" className="font-medium text-rust hover:text-rust-dark">
            guided trip
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Road types, decoded</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ROAD_TYPES.map((r, i) => (
            <Reveal
              key={r.code}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {r.code}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Rules experienced self-drivers repeat</h2>
          <ul className="mt-5 space-y-3">
            {RULES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal/70">
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
            href="/namibia-without-4x4"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibia Without a 4x4
          </Link>
        </Reveal>
      </section>
    </>
  );
}
