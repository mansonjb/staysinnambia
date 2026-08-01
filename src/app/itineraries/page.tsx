import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { selfDriveRoutes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Namibia Itineraries",
  description:
    "Self-drive Namibia itineraries from one to three weeks — how many days you need and which regions to combine.",
};

export default function ItinerariesPage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Itineraries
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Build your Namibia itinerary
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia is a self-drive country — distances are long and roads are mostly gravel, so
          the number of days you have should decide your route, not the other way round. Start
          with how much time you&apos;ve got.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {selfDriveRoutes.map((route, i) => (
            <Reveal key={route.days} delay={i * 60}>
              <Link
                href={`/itineraries/${route.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-6xl font-bold text-sand-dark">{route.days}</span>
                <p className="mt-1 text-[12px] uppercase tracking-[0.2em] text-charcoal/40">
                  days &mdash; {route.title}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">
                  {route.description}
                </p>
                <div className="mt-6 border-t border-charcoal/10 pt-4">
                  <p className="text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
                    Suggested route
                  </p>
                  <p className="mt-2 text-[14px] text-charcoal/70">{route.stops}</p>
                </div>
                <span className="mt-4 text-[13px] font-medium text-rust opacity-0 transition-opacity group-hover:opacity-100">
                  See day-by-day &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-lg font-bold text-charcoal">A rule of thumb for pacing</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Namibia&apos;s gravel roads are slower than they look on a map — budget 60–80km/h
            average, not highway speeds. As a guide: never drive more than 4–5 hours in a single
            day, and give every region at least two nights so one full day isn&apos;t lost to
            arriving and leaving.
          </p>
        </Reveal>
      </section>
    </>
  );
}
