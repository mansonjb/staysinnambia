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
  alternates: { canonical: "/namibia-self-drive-guide", languages: { en: "/namibia-self-drive-guide", de: "/de/namibia-self-drive-guide", nl: "/nl/namibia-self-drive-guide", fr: "/fr/namibia-self-drive-guide" } },
  openGraph: {
    title: "Namibia Self-Drive Guide",
    description:
      "What self-driving Namibia actually involves: road types, fuel-stop planning, rental insurance gotchas, and why night driving is the one rule everyone repeats.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const ROAD_TYPES = [
  {
    code: "A / B roads",
    desc: "Tarred main routes between major towns (Windhoek–Okahandja, Windhoek–Swakopmund via the B2). Normal driving, but still watch for kudu and livestock at dawn, dusk and night.",
  },
  {
    code: "C roads",
    desc: "Graded gravel, generally well maintained and the backbone of most self-drive itineraries (the C28 Windhoek–Solitaire, the C39/C40 through Damaraland). Cap your speed at 80km/h and drop it further wherever the surface looks loose or you're heading into a corner; deflate tyres by roughly 10-20% from tar pressure for a smoother ride and better grip on corrugation.",
  },
  {
    code: "D roads",
    desc: "Minor gravel, narrower and rougher (Kamanjab–Palmwag, Sesfontein–Purros). Corrugation is worse here and loose sand patches appear without warning. Keep your speed steady through corrugated sections rather than braking mid-corrugation, and do your braking before a corner, not in it.",
  },
  {
    code: "F roads",
    desc: "4x4 tracks, often rough, sandy or seasonally impassable (the Van Zyl's Pass area, deep Kaokoland). Not for a standard rental sedan or a 2x4, and best driven only with a second vehicle or a guide who knows the route.",
  },
];

const TYRE_PRESSURE = [
  { surface: "Tar / A-B roads", psi: "Manufacturer spec (typically ~32-36 psi)", note: "Reinflate to this before joining tar; low-pressure tyres overheat fast at speed." },
  { surface: "Graded gravel (C-roads)", psi: "Drop ~10-20% from tar pressure", note: "Improves ride and contact patch on corrugation without excessive sidewall flex." },
  { surface: "Rough gravel / D-roads", psi: "Drop further, toward 25-28 psi", note: "Watch for a spongier feel; this is the trade-off for less bouncing on washboard." },
  { surface: "Deep sand (Kaokoland, dune tracks)", psi: "As low as 1.8 bar (~26 psi), some go lower", note: "Deflate before you're stuck, not after. Carry a compressor to reinflate afterward." },
];

const RULES = [
  "Never drive after dark outside towns: livestock, kudu and other game frequently bolt across the road when lit up by headlights, and most rental agencies explicitly exclude night driving from their insurance cover. This is the single most repeated rule for a reason.",
  "Fuel stations thin out fast in the north-west and south. Solitaire is the only fuel between Sesriem and the coast, a stretch of roughly 340km. Kamanjab and Khorixas bookend the fuel-free run through Damaraland toward Palmwag and Sesfontein. Fill up whenever you're below half a tank on any of these legs, not when the gauge gets low, and carry extra drinking water in case of a breakdown.",
  "Gravel-road tyre and windscreen damage is the most common rental claim in Namibia. Read the excess figure on your contract, not just the daily rate: standard excess runs N$20,000-40,000 depending on the operator, and reduced-excess add-ons typically cost an extra €8-25/day.",
  "The legal blood alcohol limit is 0.05%, enforced with roadside checks on some routes.",
  "Slow down on gravel corners and in loose sand: most self-drive accidents in Namibia are single-vehicle rollovers from over-braking or over-correcting at speed, not collisions with other traffic. Brake in a straight line before the corner, then ease off through it.",
];

const RENTAL_COMPANIES = [
  {
    name: "For a straightforward 2x4",
    text: "A well-equipped 2x4 with real ground clearance (Toyota Corolla Cross, VW Polo Sedan, Hyundai Creta-class) from a Windhoek-based operator runs roughly N$900-1,400/day and comfortably covers Etosha, Sossusvlei, Swakopmund and the main C-road network. See our guide on travelling without a 4x4 for exactly which routes stay in bounds.",
  },
  {
    name: "For a fully kitted 4x4 safari vehicle",
    text: "Bushlore and Asco Car Hire are the two specialists most self-drive travellers end up comparing, both fitting rooftop tents, camping gear, GPS and recovery kit as standard. Expect roughly N$2,500-4,000/day depending on season for a kitted Hilux-class 4x4. Britz also operates in Namibia out of Windhoek with a larger fleet if you want a wider vehicle range.",
  },
  {
    name: "On excess and deposits, read before you sign",
    text: "Standard collision excess on a 4x4 typically sits around N$30,000-40,000, with tyres, windscreens, undercarriage and single-vehicle rollovers frequently carved out as separate, higher exclusions. Operators sell reduced-excess tiers as a daily add-on (commonly €8-25/day) that bring the excess down toward N$5,000-20,000; a small handover deposit (around N$5,000 with some operators) is also typical for fines or excluded losses. Ask specifically what the gravel-road and single-vehicle exclusions are before you decide which tier to buy.",
  },
];

const FAQS = [
  {
    q: "Do I need a 4x4 to self-drive Namibia?",
    a: "Not for most classic routes. Etosha, Sossusvlei, Swakopmund and the C-road network are manageable in a well-equipped 2x4 with high clearance, at roughly N$900-1,400/day. A 4x4 becomes worth it for Damaraland's D-roads, Kaokoland, and anywhere you'll be on D or F roads, and typically costs N$2,500-4,000/day fully kitted with camping gear from a specialist like Bushlore or Asco Car Hire. See our dedicated guide on travelling without a 4x4 for the specific routes that work.",
  },
  {
    q: "Self-drive or guided safari: which is better for a first trip?",
    a: "Self-drive gives you total control of pace and cost, and Namibia's road network makes it more approachable than most safari countries. A guided trip trades that freedom for local knowledge, no logistics to manage, and better wildlife spotting on game drives. Many first-timers do a hybrid: self-drive between regions, guided game drives inside the parks.",
  },
  {
    q: "How far apart are fuel stations in Namibia?",
    a: "On main routes, every 100-200km. On remote stretches, gaps run much longer: Solitaire is the only fuel between Sesriem and the coast (about 340km), and the Kamanjab-Khorixas-Palmwag run through Damaraland has long unfuelled sections too. On the road to Fish River Canyon in the south, gaps can exceed 250km with no services. Plan fuel stops before you leave each town, not when the gauge gets low, and treat anything under half a tank as time to fill up.",
  },
  {
    q: "What tyre pressure should I run on gravel and sand in Namibia?",
    a: "Drop roughly 10-20% from your tar pressure on graded C-roads for a smoother ride and better grip on corrugation. On rougher D-roads, drop further. In deep sand, especially in Kaokoland or dune tracks, pressures as low as 1.8 bar (about 26 psi) are common practice, deflated before you get stuck rather than after. Always reinflate to the manufacturer's tar pressure before rejoining a tarred road, since driving fast on tar with low pressure builds heat and raises blowout risk.",
  },
  {
    q: "What does rental car insurance actually cover on gravel roads?",
    a: "Standard collision cover often excludes or heavily excesses windscreen chips, tyre damage and single-vehicle rollovers from gravel, which are the most common claims in Namibia. Standard excess commonly runs N$20,000-40,000; reduced-excess tiers cost an extra €8-25/day and bring that down toward N$5,000-20,000, with a full zero-excess option sometimes available at the top tier. Ask specifically about gravel-road and single-vehicle exclusions, not just the headline excess figure.",
  },
  {
    q: "Which rental company should I actually use for a Namibia self-drive?",
    a: "For a 2x4 on the main circuit, any reputable Windhoek-based operator with a car in the Corolla Cross/Polo Sedan/Hyundai Creta class works fine. For a 4x4 with camping gear, Bushlore and Asco Car Hire are the two names most independent self-drivers compare, both with Namibia-specific fleets, rooftop tents and recovery kit; Britz is a larger-fleet alternative also based in Windhoek. Compare the excess tiers, not just the daily rate, since that's where the real cost difference on a gravel-heavy itinerary shows up.",
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
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Tyre pressure by surface</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Most gravel-road rental claims trace back to running tar pressure on corrugation.
            Adjust as you change surface, and always reinflate before returning to tar.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TYRE_PRESSURE.map((t, i) => (
            <Reveal
              key={t.surface}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {t.surface}
              </h3>
              <p className="mt-2 font-serif text-lg italic text-charcoal">{t.psi}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{t.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Which rental company to actually use</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {RENTAL_COMPANIES.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 60}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[14px] font-bold text-charcoal">{r.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{r.text}</p>
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
