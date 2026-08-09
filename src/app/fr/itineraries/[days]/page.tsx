import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getRegionFr, getRouteFr, selfDriveRoutesFr } from "@/lib/data.fr";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return selfDriveRoutesFr.map((r) => ({ days: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ days: string }>;
}): Promise<Metadata> {
  const { days } = await params;
  const route = getRouteFr(days);
  if (!route) return {};

  return {
    title: `Itinéraire de ${route.days} jours en Namibie`,
    description: route.description,
    alternates: {
      canonical: `/fr/itineraries/${route.slug}`,
      languages: {
        en: `/itineraries/${route.slug}`,
        de: `/de/itineraries/${route.slug}`,
        nl: `/nl/itineraries/${route.slug}`,
        fr: `/fr/itineraries/${route.slug}`,
      },
    },
    openGraph: {
      title: `Itinéraire de ${route.days} jours en Namibie`,
      description: route.description,
      images: [{ url: route.image, width: 1600, height: 900 }],
    },
  };
}

export default async function ItineraryDetailPageFr({
  params,
}: {
  params: Promise<{ days: string }>;
}) {
  const { days } = await params;
  const route = getRouteFr(days);
  if (!route) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Itinéraires", url: `${SITE_URL}/fr/itineraries` },
          { name: `${route.days} jours`, url: `${SITE_URL}/fr/itineraries/${route.slug}` },
        ])}
      />
      <JsonLd data={faqJsonLd(route.faqs)} />

      <nav className="mx-auto max-w-[1400px] px-6 pt-6 text-[13px] text-charcoal/50 sm:px-10">
        <Link href="/fr" className="hover:text-rust">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/fr/itineraries" className="hover:text-rust">
          Itinéraires
        </Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{route.days} jours</span>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
              <LogoMark className="h-4 w-4" />
              {route.title}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
              Itinéraire de {route.days} jours en Namibie
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-charcoal/70">
              {route.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {route.stops.split(" · ").map((stop) => (
                <span
                  key={stop}
                  className="rounded-full bg-sand/30 px-3 py-1 text-[12px] font-medium text-charcoal/70"
                >
                  {stop}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={route.image}
              alt={route.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              preload
            />
            <span className="absolute left-4 top-4 rounded-full bg-charcoal/80 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-ivory shadow-sm">
              {route.days} jours
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Reveal className="rounded-2xl border border-black/5 border-t-4 border-t-rust bg-white p-6 shadow-sm">
            <p className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.1em] text-charcoal/40">
              <MetaIcon name="clock" className="h-4 w-4" />
              Rythme
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{route.pace}</p>
          </Reveal>
          <Reveal delay={60} className="rounded-2xl border border-black/5 border-t-4 border-t-olive bg-white p-6 shadow-sm">
            <p className="text-[12px] uppercase tracking-[0.1em] text-charcoal/40">Véhicule</p>
            <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{route.vehicle}</p>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-black/5 border-t-4 border-t-sand-dark bg-white p-6 shadow-sm">
            <p className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.1em] text-charcoal/40">
              <MetaIcon name="users" className="h-4 w-4" />
              Idéal pour
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{route.bestFor}</p>
          </Reveal>
        </div>
      </section>

      {/* Day-by-day timeline */}
      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Jour par jour
          </h2>
        </Reveal>
        <div className="relative mx-auto mt-10 max-w-3xl">
          <div className="absolute bottom-0 left-[13px] top-2 hidden w-px bg-charcoal/10 sm:block" />
          {route.dayByDay.map((d, i) => {
            const region = d.regionSlug ? getRegionFr(d.regionSlug) : undefined;
            return (
              <Reveal
                key={d.label}
                delay={i * 50}
                className="relative flex flex-col gap-3 border-b border-charcoal/10 py-6 last:border-b-0 sm:flex-row sm:gap-6"
              >
                <div className="flex shrink-0 items-center gap-3 sm:w-28 sm:flex-col sm:items-start sm:gap-2">
                  <span className="relative z-10 hidden h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rust text-[11px] font-bold text-ivory sm:flex">
                    {i + 1}
                  </span>
                  <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                    {d.label}
                  </span>
                </div>
                <div className="flex flex-1 items-start gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  {region && (
                    <div className="relative hidden h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:block">
                      <Image
                        src={region.image}
                        alt={region.alt}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-[15px] leading-relaxed text-charcoal/70">{d.text}</p>
                    {region && (
                      <Link
                        href={`/fr/where-to-stay/${region.slug}`}
                        className="mt-2 inline-block text-[13px] font-semibold text-rust hover:text-rust-dark"
                      >
                        Voir où séjourner à {region.name} →
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-12 max-w-3xl rounded-2xl border border-black/5 bg-sand/20 p-8 text-center">
          <p className="text-[14px] text-charcoal/70">
            Plus ou moins de temps ? Consultez chaque itinéraire selon sa durée.
          </p>
          <Link
            href="/fr/itineraries"
            className="mt-4 inline-block rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Tous les itinéraires
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Questions fréquentes
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4">
          {route.faqs.map((faq, i) => (
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

      <section className="mx-auto max-w-[1400px] px-6 pb-20 sm:px-10">
        <Reveal className="flex flex-wrap gap-3">
          <Link
            href="/fr/best-lodges-in-namibia"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Meilleurs lodges de Namibie
          </Link>
          <Link
            href="/fr/where-to-stay/namibia"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Où séjourner par région
          </Link>
        </Reveal>
      </section>
    </>
  );
}
