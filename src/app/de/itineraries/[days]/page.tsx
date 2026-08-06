import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getRegionDe, getRouteDe, selfDriveRoutesDe } from "@/lib/data.de";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return selfDriveRoutesDe.map((r) => ({ days: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ days: string }>;
}): Promise<Metadata> {
  const { days } = await params;
  const route = getRouteDe(days);
  if (!route) return {};

  return {
    title: `${route.days}-Tage-Reiseroute Namibia`,
    description: route.description,
    alternates: {
      canonical: `/de/itineraries/${route.slug}`,
      languages: { en: `/itineraries/${route.slug}`, de: `/de/itineraries/${route.slug}`, nl: `/nl/itineraries/${route.slug}` },
    },
    openGraph: {
      title: `${route.days}-Tage-Reiseroute Namibia`,
      description: route.description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
    },
  };
}

export default async function ItineraryDetailPageDe({
  params,
}: {
  params: Promise<{ days: string }>;
}) {
  const { days } = await params;
  const route = getRouteDe(days);
  if (!route) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Reiserouten", url: `${SITE_URL}/de/itineraries` },
          { name: `${route.days} Tage`, url: `${SITE_URL}/de/itineraries/${route.slug}` },
        ])}
      />
      <JsonLd data={faqJsonLd(route.faqs)} />

      <nav className="mx-auto max-w-[1400px] px-6 pt-6 text-[13px] text-charcoal/50 sm:px-10">
        <Link href="/de" className="hover:text-rust">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/de/itineraries" className="hover:text-rust">
          Reiserouten
        </Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{route.days} Tage</span>
      </nav>

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-6 sm:px-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          {route.title}
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          {route.days}-Tage-Reiseroute Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
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
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Reveal className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <p className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.1em] text-charcoal/40">
              <MetaIcon name="clock" className="h-4 w-4" />
              Reisetempo
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{route.pace}</p>
          </Reveal>
          <Reveal delay={60} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <p className="text-[12px] uppercase tracking-[0.1em] text-charcoal/40">Fahrzeug</p>
            <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{route.vehicle}</p>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <p className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.1em] text-charcoal/40">
              <MetaIcon name="users" className="h-4 w-4" />
              Am besten für
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{route.bestFor}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-3xl">
          {route.dayByDay.map((d, i) => {
            const region = d.regionSlug ? getRegionDe(d.regionSlug) : undefined;
            return (
              <Reveal
                key={d.label}
                delay={i * 50}
                className="flex flex-col gap-3 border-b border-charcoal/10 py-6 last:border-b-0 sm:flex-row sm:gap-6"
              >
                <span className="w-28 shrink-0 text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                  {d.label}
                </span>
                <div className="flex-1">
                  <p className="text-[15px] leading-relaxed text-charcoal/70">{d.text}</p>
                  {region && (
                    <Link
                      href={`/de/where-to-stay/${region.slug}`}
                      className="mt-2 inline-block text-[13px] font-semibold text-rust hover:text-rust-dark"
                    >
                      Unterkünfte in {region.name} ansehen →
                    </Link>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-12 max-w-3xl rounded-2xl border border-black/5 bg-sand/20 p-8 text-center">
          <p className="text-[14px] text-charcoal/70">
            Mehr oder weniger Zeit? Alle Reiserouten ansehen.
          </p>
          <Link
            href="/de/itineraries"
            className="mt-4 inline-block rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Alle Reiserouten
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Häufig gestellte Fragen
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
            href="/de/best-lodges-in-namibia"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Beste Lodges in Namibia
          </Link>
          <Link
            href="/de/where-to-stay/namibia"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Unterkünfte nach Region
          </Link>
        </Reveal>
      </section>
    </>
  );
}
