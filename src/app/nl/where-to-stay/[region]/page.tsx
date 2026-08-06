import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AvailabilityBadge, CardCTA, SaveButton } from "@/components/card-arrow";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { Stay22Map } from "@/components/stay22-map";
import { getLodgesForRegionNl, getRegionNl, regionsNl } from "@/lib/data.nl";
import type { Region } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

const RELATED_LINKS_NL = [
  { title: "Beste lodges in Namibië", href: "/nl/best-lodges-in-namibia" },
  { title: "Alle reisroutes", href: "/nl/itineraries" },
];

export function generateStaticParams() {
  return regionsNl.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region: slug } = await params;
  const region = getRegionNl(slug);
  if (!region) return {};

  return {
    title: `Verblijven in ${region.name}`,
    description: region.description,
    alternates: {
      canonical: `/nl/where-to-stay/${region.slug}`,
      languages: {
        en: `/where-to-stay/${region.slug}`,
        de: `/de/where-to-stay/${region.slug}`,
        nl: `/nl/where-to-stay/${region.slug}`,
      },
    },
    openGraph: {
      title: `Verblijven in ${region.name}`,
      description: region.description,
      images: [{ url: region.image, width: 1600, height: 900 }],
    },
  };
}

export default async function RegionPageNl({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region: slug } = await params;
  const region = getRegionNl(slug);
  if (!region) notFound();

  const regionLodges = getLodgesForRegionNl(region.slug);

  const nearbyMatches = region.nearby.map((entry) => ({
    text: entry,
    region: regionsNl.find(
      (r) => r.slug !== region.slug && entry.toLowerCase().startsWith(r.name.toLowerCase())
    ),
  }));
  const pairedRegions = nearbyMatches.map((n) => n.region).filter((r): r is Region => Boolean(r));
  const landmarks = nearbyMatches.filter((n) => !n.region).map((n) => n.text);
  const otherRegions =
    pairedRegions.length > 0
      ? pairedRegions
      : regionsNl.filter((r) => r.slug !== region.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Verblijven", url: `${SITE_URL}/nl/where-to-stay/namibia` },
          { name: region.name, url: `${SITE_URL}/nl/where-to-stay/${region.slug}` },
        ])}
      />
      <JsonLd data={faqJsonLd(region.faqs)} />
      <nav className="mx-auto max-w-[1400px] px-6 pt-6 text-[13px] text-charcoal/50 sm:px-10">
        <Link href="/nl" className="hover:text-rust">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/nl/where-to-stay/namibia" className="hover:text-rust">
          Verblijven
        </Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{region.name}</span>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
              <LogoMark className="h-4 w-4" />
              {region.bestFor}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
              Verblijven in {region.name}
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-charcoal/70">
              {region.quickAnswer}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {region.knownFor.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-sand/30 px-3 py-1 text-[12px] font-medium text-charcoal/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-6 border-t border-charcoal/10 pt-6">
              <div>
                <p className="flex items-center gap-1.5 text-[13px] uppercase tracking-[0.08em] text-charcoal/40">
                  <MetaIcon name="clock" className="h-4 w-4" />
                  Aanbevolen verblijfsduur
                </p>
                <p className="mt-1 text-lg font-bold text-charcoal">{region.recommendedStay}</p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-[13px] uppercase tracking-[0.08em] text-charcoal/40">
                  <MetaIcon name="pin" className="h-4 w-4" />
                  Rijtijd vanaf Windhoek
                </p>
                <p className="mt-1 text-lg font-bold text-charcoal">{region.driveFromWindhoek}</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={region.image}
              alt={region.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              preload
            />
          </div>
        </div>
      </section>

      {/* Pros & cons */}
      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-olive/5 p-6">
            <h2 className="text-lg font-bold text-olive">Waarom hier verblijven</h2>
            <ul className="mt-4 space-y-2.5">
              {region.pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-black/5 bg-rust/5 p-6">
            <h2 className="text-lg font-bold text-rust">Goed om te weten</h2>
            <ul className="mt-4 space-y-2.5">
              {region.cons.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-[14px] text-charcoal/60">
            <span className="font-semibold text-charcoal">Beter vermijden als:</span> {region.avoidIf}
          </p>
        </Reveal>
      </section>

      {/* How many days */}
      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Hoeveel dagen voor {region.name}?
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/60">
            Kies de lengte die bij uw reis past: elke optie is een echte afweging, geen
            afvinklijst.
          </p>
        </Reveal>
        <div
          className={`mt-10 grid grid-cols-1 gap-6 ${
            region.dayPlans.length > 1 ? "sm:grid-cols-2" : "sm:max-w-xl"
          }`}
        >
          {region.dayPlans.map((plan, i) => (
            <Reveal
              key={plan.nights}
              delay={i * 80}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-5xl italic text-rust">{plan.nights}</span>
                <span className="text-[13px] uppercase tracking-[0.14em] text-charcoal/40">
                  {plan.nights === 1 ? "nacht" : "nachten"}
                </span>
              </div>
              <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-olive">
                {plan.verdict}
              </p>
              <p className="mt-4 flex-1 text-[14px] leading-relaxed text-charcoal/70">
                {plan.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Best lodges */}
      {regionLodges.length > 0 && (
        <section className="bg-sand/20 py-16 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                Beste lodges in {region.name}
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/60">
                Geen prijzen. Geen nepbeoordelingen. Gekozen op basis van ligging, service en
                kwaliteit alleen.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {regionLodges.map((lodge, i) => (
                <Reveal key={lodge.slug} delay={i * 60}>
                  <Link
                    href={`/nl/lodges/${lodge.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={lodge.image}
                        alt={lodge.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      {lodge.operator && (
                        <span className="absolute left-3 top-3 rounded-full bg-charcoal/80 px-3 py-1 text-[11px] font-semibold text-ivory shadow-sm">
                          {lodge.operator}
                        </span>
                      )}
                      <SaveButton className="absolute bottom-3 right-3" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-serif text-xl italic text-charcoal">{lodge.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">
                        {lodge.description}
                      </p>
                      <ul className="mt-3 space-y-1">
                        {lodge.highlights.slice(0, 2).map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-1.5 text-[12px] text-charcoal/60"
                          >
                            <MetaIcon name="check" className="h-3 w-3 shrink-0 text-olive" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex items-center justify-between border-t border-charcoal/10 pt-4">
                        <AvailabilityBadge label="Beschikbaarheid controleren" />
                        <CardCTA label="Bekijk lodge" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Map */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Kaart van verblijven in {region.name}
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/60">
            Elke pin is een echt, boekbaar verblijf, aangeboden door onze boekingspartner Stay22.
          </p>
          <Stay22Map lat={region.lat} lng={region.lng} label={region.name} className="mt-8" />
        </Reveal>
      </section>

      {/* Nearby regions */}
      <section className="bg-sand/20 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Vaak gecombineerd met {region.name}
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherRegions.map((r, i) => (
              <Reveal key={r.slug} delay={i * 60}>
                <Link
                  href={`/nl/where-to-stay/${r.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-xl italic text-charcoal">{r.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">
                      {r.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {landmarks.length > 0 && (
            <Reveal className="mt-8 flex flex-wrap items-center gap-2">
              <span className="text-[13px] font-semibold text-charcoal/50">
                Ook goed te combineren met:
              </span>
              {landmarks.map((l) => (
                <span
                  key={l}
                  className="rounded-full bg-white px-3 py-1.5 text-[12px] font-medium text-charcoal/70 shadow-sm"
                >
                  {l}
                </span>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Veelgestelde vragen
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4">
          {region.faqs.map((faq, i) => (
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

      {/* Related */}
      <section className="mx-auto max-w-[1400px] px-6 pb-10 sm:px-10">
        <Reveal className="flex flex-wrap gap-3">
          {RELATED_LINKS_NL.map((g) => (
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

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 sm:px-10 sm:pb-28">
        <Reveal className="rounded-3xl bg-rust px-6 py-14 text-center sm:px-16 sm:py-16">
          <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight text-ivory">
            Klaar om {region.name} te ontdekken?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-ivory/80">
            Bekijk elk verblijf dat we aanbevelen op de kaart hierboven, of ga terug om alle
            negen regio's te zien.
          </p>
          <Link
            href="/nl/where-to-stay/namibia"
            className="mt-8 inline-block rounded-full bg-ivory px-8 py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-white"
          >
            Bekijk alle regio's
          </Link>
        </Reveal>
      </section>
    </>
  );
}
