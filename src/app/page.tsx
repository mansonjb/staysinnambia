import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AvailabilityBadge, CardArrow, CardCTA, SaveButton } from "@/components/card-arrow";
import { IconBadge } from "@/components/icon-badge";
import { faqJsonLd, JsonLd, websiteJsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { Stay22Map } from "@/components/stay22-map";
import {
  experiences,
  featuredLodges,
  popularGuides,
  regions,
  selfDriveRoutes,
} from "@/lib/data";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";

const TITLE = "Namibia Stays: Extraordinary places to stay across Namibia";
const DESCRIPTION =
  "Independent guides to Namibia's lodges, camps and hotels: where to stay in Etosha, Sossusvlei, Damaraland, the Skeleton Coast and beyond.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/", languages: { en: "/", de: "/de", nl: "/nl" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const HOME_FAQS = [
  {
    q: "How many days do you need in Namibia?",
    a: "Ten to fourteen days covers the classic loop (Etosha, Sossusvlei, Swakopmund and a Damaraland or Fish River Canyon detour) without rushing. A week is workable if you pick two or three regions rather than the full circuit; three weeks lets you add the Skeleton Coast or Caprivi. See our itineraries by length for a day-by-day breakdown.",
  },
  {
    q: "What's the best time to visit Namibia?",
    a: "May to October, the dry season, gives the most reliable wildlife viewing as animals concentrate around waterholes. November to April is greener with dramatic skies and better birding, but wildlife spreads out and some roads can be affected by rain. See our full best-time-to-visit guide for the month-by-month trade-offs.",
  },
  {
    q: "Do I need a visa for Namibia?",
    a: "It depends on nationality: some countries are visa-exempt, and most others are eligible for a Visa on Arrival, which since April 2025 must be applied for online before you fly rather than issued at the border. See our visa requirements guide for the current process and fees.",
  },
  {
    q: "Is Namibia safe to visit?",
    a: "Yes, by regional standards it's one of the safer countries in Southern Africa: the real risks are road safety on self-drive routes and ordinary city-level petty crime, not violent crime targeting travellers. See our safety and health guide, including where malaria is and isn't a concern.",
  },
  {
    q: "Do I need a 4x4 to self-drive Namibia?",
    a: "Not for the classic route: Etosha, Sossusvlei, Swakopmund and the main gravel network are manageable in a well-equipped 2x4. A 4x4 earns its keep in Damaraland, Kaokoland, and anywhere off the graded C-roads. See our self-drive guide for road types and rental advice.",
  },
];

const CHIP_TONES = [
  "bg-rust/10 text-rust",
  "bg-olive/10 text-olive",
  "bg-sand-dark/20 text-sand-dark",
];

const BADGE_TONES = ["bg-rust text-ivory", "bg-olive text-ivory", "bg-sand-dark text-charcoal"];

const STATS = [
  { value: "9", label: "Regions covered" },
  { value: "40+", label: "Lodges & camps" },
  { value: "100%", label: "Independent" },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1505598872760-6090aa9ed603?q=80&w=2400&auto=format&fit=crop";

export default function Home() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd(HOME_FAQS)} />
      {/* Hero */}
      <section className="bg-white pb-8 pt-14 sm:pt-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-rust">
                <LogoMark className="h-4 w-4" />
                Namibia Stays
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-olive/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-olive">
                Lonely Planet Best in Travel 2026
              </span>
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
              Find your perfect stay in{" "}
              <span className="bg-gradient-to-r from-rust via-sand-dark to-olive bg-clip-text text-transparent">
                Namibia
              </span>
              .
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal/70">
              Independent recommendations for lodges, safari camps and unforgettable places to
              stay, across nine of the country&apos;s most extraordinary regions, named one of
              Lonely Planet&apos;s top places to visit in 2026, for its desert-adapted elephants
              and conservation-led tourism.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/where-to-stay/namibia"
                className="rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory shadow-lg transition-colors hover:bg-rust-dark"
              >
                Explore Namibia
              </Link>
              <Link
                href="/where-to-stay/namibia"
                className="rounded-full border border-charcoal/20 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors hover:border-charcoal/40"
              >
                Where to Stay
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {["No fake reviews", "Direct to the lodge or partner site", "Updated for 2026"].map(
                (label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-olive"
                  >
                    <MetaIcon name="check" className="h-4 w-4" />
                    {label}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 flex max-w-md gap-8 border-t border-charcoal/10 pt-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-charcoal sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-charcoal/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl lg:aspect-[5/4]">
            <Image
              src={HERO_IMAGE}
              alt="Aerial view of the red dune belt in the Namib Desert"
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Planner bar */}
      <section className="relative z-10 mx-auto mt-8 max-w-4xl px-6 sm:mt-10 sm:px-10">
        <div className="flex flex-col gap-3 rounded-2xl border-2 border-rust/10 bg-white p-4 shadow-2xl sm:flex-row sm:items-center sm:p-5">
          <label className="flex-1 px-3 py-2 text-left">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-rust">
              Region
            </span>
            <select className="mt-0.5 w-full bg-transparent text-[17px] font-semibold text-charcoal outline-none">
              <option>Anywhere in Namibia</option>
              {regions.map((r) => (
                <option key={r.slug}>{r.name}</option>
              ))}
            </select>
          </label>
          <span className="hidden h-12 w-px bg-charcoal/10 sm:block" />
          <label className="flex-1 px-3 py-2 text-left">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-rust">
              Stay type
            </span>
            <select className="mt-0.5 w-full bg-transparent text-[17px] font-semibold text-charcoal outline-none">
              <option>Any stay type</option>
              {experiences.map((e) => (
                <option key={e.title}>{e.title}</option>
              ))}
            </select>
          </label>
          <Link
            href="/where-to-stay/namibia"
            className="rounded-xl bg-rust px-8 py-4 text-center text-[14px] font-bold uppercase tracking-[0.1em] text-ivory shadow-lg transition-colors hover:bg-rust-dark"
          >
            Search
          </Link>
        </div>
      </section>

      {/* Manifesto strip */}
      <section className="bg-white pb-16 pt-16 sm:pb-20 sm:pt-20">
        <Reveal className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <p className="font-serif text-xl italic leading-relaxed text-charcoal sm:text-2xl">
            This isn&apos;t a booking engine. It&apos;s the resource we wished existed before
            our own first trip to Namibia: where to stay, when to go, and how many nights
            each region actually deserves.
          </p>
        </Reveal>
      </section>

      {/* Editorial intro */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 sm:px-10 sm:pb-20">
        <Reveal className="mx-auto grid max-w-4xl grid-cols-1 gap-6 text-[15px] leading-relaxed text-charcoal/70 sm:grid-cols-2">
          <p>
            Namibia doesn&apos;t reward a single home base: it rewards moving. Most trips work
            as a loop out of Windhoek through two, three or four regions, and{" "}
            <Link href="/best-time-to-visit-namibia" className="font-medium text-rust hover:text-rust-dark">
              when you go
            </Link>{" "}
            changes which regions are worth the drive. We built this site region by region so you
            can see exactly{" "}
            <Link href="/where-to-stay/namibia" className="font-medium text-rust hover:text-rust-dark">
              where to stay
            </Link>{" "}
            and how many nights each one actually earns, rather than a single list of hotels with
            no sense of the country&apos;s geography.
          </p>
          <p>
            Most of Namibia is genuinely drivable (see our{" "}
            <Link href="/namibia-self-drive-guide" className="font-medium text-rust hover:text-rust-dark">
              self-drive guide
            </Link>{" "}
            for road types and rental advice) and every recommendation here is chosen on
            setting and service alone, never on commission rate. Start with an{" "}
            <Link href="/itineraries" className="font-medium text-rust hover:text-rust-dark">
              itinerary by length
            </Link>{" "}
            if you know your dates, or browse by{" "}
            <Link href="/where-to-stay/namibia" className="font-medium text-rust hover:text-rust-dark">
              region
            </Link>{" "}
            if you&apos;re still working out the route.
          </p>
        </Reveal>
      </section>

      {/* Choose a Region */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionEyebrow label="Choose a Region" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Nine regions, one extraordinary country
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, i) => (
            <Reveal key={region.slug} delay={(i % 3) * 60}>
              <Link
                href={`/where-to-stay/${region.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={region.image}
                    alt={region.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] shadow-sm ${BADGE_TONES[i % BADGE_TONES.length]}`}
                  >
                    {String(i + 1).padStart(2, "0")} &middot; {region.name}
                  </span>
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-ivory/90 px-2.5 py-1 text-[11px] font-semibold text-charcoal/70 shadow-sm">
                    <MetaIcon name="clock" className="h-3.5 w-3.5" />
                    {region.recommendedStay}
                  </span>
                  <SaveButton className="absolute bottom-3 right-3" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-2xl italic text-charcoal">{region.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {region.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {region.bestFor.split(", ").map((tag, ti) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${CHIP_TONES[ti % CHIP_TONES.length]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-end border-t border-charcoal/10 pt-4">
                    <CardCTA label="View Stays" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Namibia at a glance */}
      <section className="bg-sand/20 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <Reveal>
            <SectionEyebrow label="Namibia at a Glance" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Every region, one map
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/60">
              Every pin is a real, bookable stay, powered by our booking partner Stay22. Zoom out
              from Windhoek to see the whole country, or jump straight to a region below.
            </p>
          </Reveal>

          <Reveal className="mt-8">
            <Stay22Map lat={-22.5609} lng={17.0658} label="Namibia" zoom={9} />
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-2">
            {regions.map((r) => (
              <Link
                key={r.slug}
                href={`/where-to-stay/${r.slug}`}
                className="rounded-full bg-white px-4 py-2 text-[13px] font-medium text-charcoal/70 shadow-sm transition-colors hover:text-rust"
              >
                {r.name}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Featured Lodges */}
      <section className="bg-sand/20 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <Reveal>
            <SectionEyebrow label="Featured Lodges" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Curated, not sponsored
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/60">
              No prices. No fake reviews. Every stay below has been chosen on merit alone.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuredLodges.map((lodge, i) => (
              <Reveal key={lodge.name} delay={(i % 2) * 80}>
                <Link
                  href={`/lodges/${lodge.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={lodge.image}
                      alt={lodge.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-rust px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ivory shadow-sm">
                      {lodge.region}
                    </span>
                    <span
                      className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold shadow-sm ${BADGE_TONES[(i + 1) % BADGE_TONES.length]}`}
                    >
                      {lodge.highlights[0]}
                    </span>
                    <SaveButton className="absolute bottom-3 right-3" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-2xl italic text-charcoal">
                      {lodge.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                      {lodge.description}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5 text-[13px] text-charcoal/60">
                      <MetaIcon name="pin" className="h-4 w-4 text-rust" />
                      {lodge.region}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {lodge.bestFor.split(", ").map((tag, ti) => (
                        <span
                          key={tag}
                          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${CHIP_TONES[ti % CHIP_TONES.length]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-4 space-y-1.5 border-t border-charcoal/10 pt-4">
                      {lodge.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-[13px] text-charcoal/70"
                        >
                          <MetaIcon name="check" className="h-3.5 w-3.5 shrink-0 text-olive" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center justify-between">
                      <AvailabilityBadge />
                      <CardCTA label="View Lodge" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Self-drive Routes */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionEyebrow label="Self-drive Routes" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Build your itinerary
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {selfDriveRoutes.map((route, i) => (
            <Reveal key={route.days} delay={i * 60}>
              <Link
                href={`/itineraries/${route.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-5xl font-bold text-sand-dark">{route.days}</span>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-charcoal/40">
                  days: {route.title}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/60">
                  {route.description}
                </p>
                <p className="mt-4 text-[13px] text-charcoal/50">{route.stops}</p>
                <div className="mt-5 flex justify-end border-t border-charcoal/10 pt-4">
                  <CardArrow />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stay by Experience */}
      <section className="bg-sand/20 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <Reveal>
            <SectionEyebrow label="Stay by Experience" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              However you like to travel
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((exp, i) => (
              <Reveal key={exp.title} delay={(i % 4) * 60}>
                <Link
                  href={exp.href}
                  className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <IconBadge icon={exp.icon} tone={i % 2 === 0 ? "rust" : "olive"} />
                  <h3 className="mt-4 text-xl font-bold text-charcoal">{exp.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {exp.description}
                  </p>
                  <div className="mt-5 flex justify-end border-t border-charcoal/10 pt-4">
                    <CardArrow />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionEyebrow label="Popular Guides" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Start here
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {popularGuides.map((guide, i) => (
            <Reveal key={guide.href} delay={i * 40}>
              <Link
                href={guide.href}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="font-serif text-xl italic text-charcoal">{guide.title}</span>
                <CardArrow />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Homepage FAQ */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionEyebrow label="Planning Namibia" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Quick questions, straight answers
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4">
          {HOME_FAQS.map((faq, i) => (
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

      {/* Closing CTA */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 sm:px-10 sm:pb-28">
        <Reveal className="rounded-3xl bg-rust px-6 py-16 text-center sm:px-16 sm:py-20">
          <p className="text-[13px] uppercase tracking-[0.3em] text-ivory/70">
            Not sure where to begin?
          </p>
          <h2 className="mx-auto mt-5 max-w-xl text-3xl font-bold tracking-tight text-ivory sm:text-4xl">
            Tell us how you want to travel.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-ivory/80">
            Days available, pace, and whether wildlife or landscape matters more, our trip
            planner turns that into a shortlist of regions and stays.
          </p>
          <Link
            href="/where-to-stay/namibia"
            className="mt-8 inline-block rounded-full bg-ivory px-8 py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-white"
          >
            Plan Your Trip
          </Link>
        </Reveal>
      </section>
    </>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
      <LogoMark className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
}
