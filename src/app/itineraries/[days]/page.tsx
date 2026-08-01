import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { getRoute, selfDriveRoutes } from "@/lib/data";

export function generateStaticParams() {
  return selfDriveRoutes.map((r) => ({ days: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ days: string }>;
}): Promise<Metadata> {
  const { days } = await params;
  const route = getRoute(days);
  if (!route) return {};

  return {
    title: `${route.days}-Day Namibia Itinerary`,
    description: route.description,
  };
}

export default async function ItineraryDetailPage({
  params,
}: {
  params: Promise<{ days: string }>;
}) {
  const { days } = await params;
  const route = getRoute(days);
  if (!route) notFound();

  return (
    <>
      <nav className="mx-auto max-w-[1400px] px-6 pt-6 text-[13px] text-charcoal/50 sm:px-10">
        <Link href="/" className="hover:text-rust">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/itineraries" className="hover:text-rust">
          Itineraries
        </Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{route.days} days</span>
      </nav>

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-6 sm:px-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          {route.title}
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          {route.days}-Day Namibia Itinerary
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          {route.description}
        </p>
        <p className="mt-4 text-[13px] uppercase tracking-[0.08em] text-charcoal/40">
          {route.stops}
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-2xl">
          {route.dayByDay.map((d, i) => (
            <Reveal
              key={d.label}
              delay={i * 50}
              className="flex gap-6 border-b border-charcoal/10 py-6 last:border-b-0"
            >
              <span className="w-24 shrink-0 text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {d.label}
              </span>
              <p className="text-[15px] leading-relaxed text-charcoal/70">{d.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-2xl rounded-2xl border border-black/5 bg-sand/20 p-8 text-center">
          <p className="text-[14px] text-charcoal/70">
            Want more or less time? See every itinerary length.
          </p>
          <Link
            href="/itineraries"
            className="mt-4 inline-block rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            All Itineraries
          </Link>
        </Reveal>
      </section>
    </>
  );
}
