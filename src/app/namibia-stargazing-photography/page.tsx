import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Namibia Stargazing Guide",
  description:
    "Where Namibia's night skies are darkest, and what actually makes them different: NamibRand's Gold-tier Dark Sky Reserve, dune photography light, and where to sleep under it.",
  alternates: { canonical: "/namibia-stargazing-photography", languages: { en: "/namibia-stargazing-photography", de: "/de/namibia-stargazing-photography", nl: "/nl/namibia-stargazing-photography" } },
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
        Namibia&apos;s headline dark-sky destination, a Gold-tier International Dark Sky Reserve,
        one of only a handful in the world at that rating. Genuinely no light pollution for a
        hundred kilometres in most directions. Lodges bordering the reserve run guided astronomy
        sessions with real telescopes, not just a blanket on the sand. Time it for the dry season
        (May–October) for the clearest skies. See our{" "}
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
    text: "The same clear desert air that makes the night sky exceptional also makes sunrise photography here some of the best in Africa: the 20-45 minute window after gate-opening is when the dune colour is most dramatic, before the heat haze sets in.",
  },
  {
    place: "Spitzkoppe",
    href: "/where-to-stay/spitzkoppe",
    text: "Granite domes rising straight out of flat plains make for a distinctive foreground against the Milky Way, and it's one of the few dark-sky spots on the route with dramatic rock silhouettes rather than flat horizon.",
  },
];

const FAQS = [
  {
    q: "What makes NamibRand's night sky different from other dark places?",
    a: "NamibRand holds Gold tier International Dark Sky Reserve status, the highest rating given, awarded to only a small number of places on earth. It reflects both the near-total absence of light pollution and active, ongoing measures by reserve and lodge operators to keep it that way.",
  },
  {
    q: "Do I need special equipment for Namibia astrophotography?",
    a: "A tripod and a camera capable of manual long exposures gets you most of the way; a wide-angle lens helps for Milky Way shots. Several lodges near NamibRand and Sossusvlei run guided astronomy sessions with proper telescopes if you want more than a wide shot of the sky.",
  },
  {
    q: "When is the best time of year for stargazing in Namibia?",
    a: "The dry season (May–October) gives the clearest, driest air and the least cloud cover. The same conditions that make it the best wildlife-viewing season also make it the best stargazing season. A moonless night close to a new moon gives the darkest possible sky, worth timing your trip around if this is a priority.",
  },
  {
    q: "Is Sossusvlei or Spitzkoppe better for photography?",
    a: "Different subjects, not a better-or-worse choice. Sossusvlei is about dune colour and scale at sunrise; Spitzkoppe is about dramatic granite silhouettes at sunset and after dark. Several itineraries include both as a one-night detour between the two.",
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
