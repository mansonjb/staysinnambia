import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Namibia Stargazing Guide",
  description:
    "Where Namibia's night skies are darkest, and what actually makes them different: NamibRand's Gold-tier Dark Sky Reserve, dune photography light, and where to sleep under it.",
  alternates: { canonical: "/namibia-stargazing-photography", languages: { en: "/namibia-stargazing-photography", de: "/de/namibia-stargazing-photography", nl: "/nl/namibia-stargazing-photography", fr: "/fr/namibia-stargazing-photography" } },
  openGraph: {
    title: "Namibia Stargazing Guide",
    description:
      "Where Namibia's night skies are darkest, and what actually makes them different: NamibRand's Gold-tier Dark Sky Reserve, dune photography light, and where to sleep under it.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const SPOTS = [
  {
    place: "NamibRand Nature Reserve",
    href: "/where-to-stay/sossusvlei",
    text: (
      <>
        Namibia&apos;s headline dark-sky destination. NamibRand was inscribed as a Gold-tier
        International Dark Sky Reserve in 2012, the strictest of the three tiers and, at the time,
        only the second Gold-tier reserve on the planet. Sky Quality Meter readings taken on the
        reserve regularly exceed 21.0 magnitudes per square arcsecond, close to the theoretical
        darkness ceiling of about 22, and correspond to Bortle Class 1–2 skies, the darkest
        classification used by astronomers. On a clear, moonless night you can pick out the
        Milky Way&apos;s dust lanes with the naked eye, along with the Magellanic Clouds and,
        occasionally, zodiacal light, a faint cone of sunlight reflected off interplanetary dust
        that&apos;s invisible from almost anywhere with artificial light nearby. Several lodges
        bordering the reserve, including Wolwedans and NamibRand Family Hideout, run guided
        astronomy sessions with proper telescopes rather than just a blanket on the sand. Time it
        for the dry season (May–September), when skies are driest and cloud cover is lowest. See
        our{" "}
        <Link href="/best-time-to-visit-namibia" className="font-semibold text-rust hover:text-rust-dark">
          guide to the best time to visit
        </Link>
        .
      </>
    ),
  },
  {
    place: "Sossusvlei dunes",
    href: "/where-to-stay/sossusvlei",
    text: "The same clear desert air that makes the night sky exceptional also makes sunrise photography here some of the best in Africa: the 20-45 minute window after gate-opening is when the dune colour is most dramatic, before the heat haze sets in. For astrophotography, the dunes themselves make for a striking Milky Way foreground; walk a short distance from camp lighting and let your eyes adjust for at least 15–20 minutes before shooting.",
  },
  {
    place: "Spitzkoppe",
    href: "/where-to-stay/spitzkoppe",
    text: "A cluster of granite inselbergs rising up to 1,728m, with roughly 670m of prominence above the surrounding gravel plain, about 180km from Swakopmund and 280km from Windhoek. Its silhouette against the Milky Way is one of the most photographed foregrounds in Namibia, and unlike NamibRand it's an easy self-drive stop rather than a reserve booking. The community-run campsite has around 30 basic, widely spaced pitches directly among the boulders, so you can shoot from your own tent site with zero light pollution; book a few months ahead in the July–September peak.",
  },
];

const GEAR_TIPS = [
  "Shoot around the new moon: a moonless sky is many times darker than even a first-quarter moon, and it's the single biggest factor in how much of the Milky Way you'll actually see. Check the lunar calendar before locking in dates if stargazing is a trip priority.",
  "A tripod is non-negotiable; a wide-angle lens (14–24mm on full-frame) lets you frame more sky and foreground in one exposure.",
  "As a starting point, use the widest aperture your lens allows (f/2.8 or faster if you have it), ISO 1600–6400, and a shutter speed under roughly 500 ÷ focal length in mm to keep stars as points rather than trails (for example, ~20 seconds at 24mm).",
  "Bring a headtorch with a red-light mode to preserve night vision, and a remote shutter release or your camera's self-timer to avoid shake from pressing the button.",
  "Arrive at your spot while there's still some light left to compose the shot and check for lens fog, which forms fast once desert temperatures drop after sunset.",
];

const FAQS = [
  {
    q: "What makes NamibRand's night sky different from other dark places?",
    a: "NamibRand has held Gold tier International Dark Sky Reserve status since 2012, the highest of the three tiers awarded by DarkSky International, and it was only the second Gold-tier reserve designated anywhere on earth. Sky Quality Meter readings on the reserve regularly exceed 21 magnitudes per square arcsecond against a theoretical maximum around 22, placing it at Bortle Class 1–2, the darkest classification used by astronomers. That reflects both the near-total absence of artificial light and active, ongoing measures by the reserve and its bordering lodges, including shielded, downward-facing lighting, to keep it that way.",
  },
  {
    q: "Do I need special equipment for Namibia astrophotography?",
    a: "A tripod and a camera capable of manual long exposures gets you most of the way; a wide-angle lens (14–24mm equivalent) helps for Milky Way shots, along with a fast aperture (f/2.8 or wider) and a headtorch with a red-light setting to preserve your night vision. Several lodges near NamibRand and Sossusvlei, including Wolwedans and NamibRand Family Hideout, run guided astronomy sessions with proper telescopes if you want more than a wide shot of the sky.",
  },
  {
    q: "When is the best time of year for stargazing in Namibia?",
    a: "The dry season (May–September) gives the clearest, driest air and the least cloud cover, which is also why it overlaps with peak wildlife-viewing season. Within that window, plan around the lunar calendar: a night close to new moon gives the darkest possible sky, while a few nights either side of full moon will wash out all but the brightest stars, so it's worth checking moon phase before locking in travel dates if stargazing is a priority.",
  },
  {
    q: "Is Sossusvlei or Spitzkoppe better for photography?",
    a: "Different subjects, not a better-or-worse choice. Sossusvlei is about dune colour and scale at sunrise; Spitzkoppe, a cluster of granite inselbergs roughly 180km from Swakopmund rising to 1,728m, is about dramatic rock silhouettes against the Milky Way after dark, with a community-run campsite that puts you right among the boulders. Several itineraries include both as a one-night detour between the two.",
  },
];

export default function StargazingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Stargazing & Photography", url: `${SITE_URL}/namibia-stargazing-photography` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia stargazing & astrophotography
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia&apos;s dry air and near-total absence of light pollution make it one of the
          genuine dark-sky destinations on earth, not just marketing copy. Here&apos;s where it&apos;s
          actually best, and why.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Our recommendation:</span> if stargazing
          is a genuine trip priority rather than a nice-to-have, build your dates around the moon
          phase first and the season second. A dry-season night (May–September) within a few days
          of new moon at NamibRand beats a full-moon night in any month.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {SPOTS.map((s, i) => (
            <Reveal
              key={s.place}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{s.place}</h2>
                <Link
                  href={s.href}
                  className="text-[12px] font-semibold uppercase tracking-[0.1em] text-rust hover:text-rust-dark"
                >
                  Where to stay →
                </Link>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Timing and gear, in practice</h2>
          <ul className="mt-5 space-y-3">
            {GEAR_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-[14px] leading-relaxed text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {tip}
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
        </Reveal>
      </section>
    </>
  );
}
