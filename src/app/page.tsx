import Image from "next/image";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { IconBadge } from "@/components/icon-badge";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import {
  experiences,
  featuredLodges,
  popularGuides,
  regions,
  selfDriveRoutes,
} from "@/lib/data";

const STATS = [
  { value: "9", label: "Regions covered" },
  { value: "40+", label: "Lodges & camps" },
  { value: "100%", label: "Independent" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ivory pb-6 pt-14 sm:pt-20">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
            <LogoMark className="h-4 w-4" />
            Namibia Stays
          </span>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
            Find your perfect stay in{" "}
            <span className="bg-gradient-to-r from-rust to-rust-dark bg-clip-text text-transparent">
              Namibia
            </span>
            .
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal/70">
            Independent recommendations for lodges, safari camps and unforgettable places to
            stay, across nine of the country&apos;s most extraordinary regions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/where-to-stay/namibia"
              className="rounded-full bg-rust px-7 py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
            >
              Explore Namibia
            </Link>
            <Link
              href="/where-to-stay/namibia"
              className="rounded-full border border-charcoal/20 px-7 py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-charcoal transition-colors hover:border-charcoal/40"
            >
              Where to Stay
            </Link>
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
      </section>

      {/* Planner bar */}
      <section className="relative z-10 mx-auto mt-6 max-w-4xl px-6 sm:mt-10 sm:px-10">
        <div className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-white p-3 shadow-xl sm:flex-row sm:items-center">
          <label className="flex-1 px-3 py-2 text-left">
            <span className="block text-[11px] uppercase tracking-[0.14em] text-charcoal/40">
              Region
            </span>
            <select className="mt-0.5 w-full bg-transparent text-[15px] font-medium text-charcoal outline-none">
              <option>Anywhere in Namibia</option>
              {regions.map((r) => (
                <option key={r.slug}>{r.name}</option>
              ))}
            </select>
          </label>
          <span className="hidden h-10 w-px bg-charcoal/10 sm:block" />
          <label className="flex-1 px-3 py-2 text-left">
            <span className="block text-[11px] uppercase tracking-[0.14em] text-charcoal/40">
              Stay type
            </span>
            <select className="mt-0.5 w-full bg-transparent text-[15px] font-medium text-charcoal outline-none">
              <option>Any stay type</option>
              {experiences.map((e) => (
                <option key={e.title}>{e.title}</option>
              ))}
            </select>
          </label>
          <Link
            href="/where-to-stay/namibia"
            className="rounded-xl bg-rust px-6 py-3.5 text-center text-[13px] font-medium uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Explore
          </Link>
        </div>
      </section>

      {/* Manifesto strip */}
      <section className="bg-ivory pb-16 pt-16 sm:pb-20 sm:pt-20">
        <Reveal className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <p className="font-serif text-xl italic leading-relaxed text-charcoal sm:text-2xl">
            This isn&apos;t a booking engine. It&apos;s the resource we wished existed before
            our own first trip to Namibia — where to stay, when to go, and how many nights
            each region actually deserves.
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
                  <span className="absolute left-3 top-3 rounded-full bg-rust px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ivory shadow-sm">
                    {String(i + 1).padStart(2, "0")} &middot; {region.name}
                  </span>
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-ivory/90 px-2.5 py-1 text-[11px] font-semibold text-charcoal/70 shadow-sm">
                    <MetaIcon name="clock" className="h-3.5 w-3.5" />
                    {region.recommendedStay}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-2xl italic text-charcoal">{region.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {region.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[13px] text-charcoal/60">
                    <MetaIcon name="users" className="h-4 w-4 text-rust" />
                    Best for {region.bestFor}
                  </div>
                  <div className="mt-5 flex items-center justify-end border-t border-charcoal/10 pt-4">
                    <CardArrow />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
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
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg">
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
                    <span className="absolute right-3 top-3 rounded-full bg-olive px-3 py-1 text-[11px] font-semibold text-ivory shadow-sm">
                      {lodge.highlights[0]}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-2xl italic text-charcoal">
                      {lodge.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                      {lodge.description}
                    </p>

                    <div className="mt-4 grid grid-cols-1 gap-2 text-[13px] text-charcoal/60 sm:grid-cols-2">
                      <span className="flex items-center gap-1.5">
                        <MetaIcon name="pin" className="h-4 w-4 text-rust" />
                        {lodge.region}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MetaIcon name="users" className="h-4 w-4 text-rust" />
                        {lodge.bestFor}
                      </span>
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

                    <div className="mt-5 flex justify-end">
                      <CardArrow />
                    </div>
                  </div>
                </div>
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
              <div className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                <span className="text-5xl font-bold text-sand-dark">{route.days}</span>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-charcoal/40">
                  days &mdash; {route.title}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/60">
                  {route.description}
                </p>
                <p className="mt-4 text-[13px] text-charcoal/50">{route.stops}</p>
                <div className="mt-5 flex justify-end border-t border-charcoal/10 pt-4">
                  <CardArrow />
                </div>
              </div>
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
                <div className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                  <IconBadge icon={exp.icon} tone={i % 2 === 0 ? "rust" : "olive"} />
                  <h3 className="mt-4 text-xl font-bold text-charcoal">{exp.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {exp.description}
                  </p>
                  <div className="mt-5 flex justify-end border-t border-charcoal/10 pt-4">
                    <CardArrow />
                  </div>
                </div>
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
