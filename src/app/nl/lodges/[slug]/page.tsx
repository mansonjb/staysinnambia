import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AvailabilityBadge, CardCTA } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd, lodgingBusinessJsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { Stay22Map } from "@/components/stay22-map";
import { getLodgeNl, getLodgesForRegionNl, getRegionNl, lodgesNl } from "@/lib/data.nl";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return lodgesNl.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lodge = getLodgeNl(slug);
  if (!lodge) return {};

  const title = `${lodge.name}, ${lodge.region}`;

  return {
    title,
    description: lodge.description,
    alternates: {
      canonical: `/nl/lodges/${lodge.slug}`,
      languages: { en: `/lodges/${lodge.slug}`, de: `/de/lodges/${lodge.slug}`, nl: `/nl/lodges/${lodge.slug}` },
    },
    openGraph: {
      title,
      description: lodge.description,
      images: [{ url: lodge.image, width: 1600, height: 900 }],
    },
  };
}

export default async function LodgePageNl({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lodge = getLodgeNl(slug);
  if (!lodge) notFound();

  const region = getRegionNl(lodge.regionSlug);
  const relatedLodges = getLodgesForRegionNl(lodge.regionSlug).filter((l) => l.slug !== lodge.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Lodges", url: `${SITE_URL}/nl/best-lodges-in-namibia` },
          { name: lodge.name, url: `${SITE_URL}/nl/lodges/${lodge.slug}` },
        ])}
      />
      <JsonLd
        data={lodgingBusinessJsonLd({
          name: lodge.name,
          description: lodge.description,
          url: `${SITE_URL}/nl/lodges/${lodge.slug}`,
          image: lodge.image,
          regionName: lodge.region,
          lat: region?.lat,
          lng: region?.lng,
        })}
      />
      <nav className="mx-auto max-w-[1400px] px-6 pt-6 text-[13px] text-charcoal/50 sm:px-10">
        <Link href="/nl" className="hover:text-rust">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/nl/best-lodges-in-namibia" className="hover:text-rust">
          Lodges
        </Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{lodge.name}</span>
      </nav>

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
              <LogoMark className="h-4 w-4" />
              {lodge.region}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
              {lodge.name}
            </h1>
            {lodge.operator && (
              <p className="mt-2 text-[13px] uppercase tracking-[0.1em] text-charcoal/40">
                Beheerd door {lodge.operator}
              </p>
            )}
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-charcoal/70">
              {lodge.description}
            </p>

            <ul className="mt-6 space-y-2">
              {lodge.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-[14px] text-charcoal/70">
                  <MetaIcon name="check" className="h-4 w-4 shrink-0 text-olive" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-1.5 border-t border-charcoal/10 pt-6 text-[13px] text-charcoal/60">
              <MetaIcon name="users" className="h-4 w-4 text-rust" />
              Het beste voor {lodge.bestFor}
            </div>

            {region && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={`/nl/where-to-stay/${region.slug}`}
                  className="inline-block rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
                >
                  Meer verblijven in {region.name}
                </Link>
                <a href="#availability">
                  <AvailabilityBadge label="Beschikbaarheid controleren" />
                </a>
              </div>
            )}
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={lodge.image}
              alt={lodge.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              preload
            />
          </div>
        </div>
      </section>

      {region && (
        <section id="availability" className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
          <Reveal>
            <h2 className="text-2xl font-bold text-charcoal">
              Kaart van verblijven bij {lodge.name}
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-charcoal/60">
              Echte, boekbare verblijven rond {region.name}, aangeboden door onze
              boekingspartner Stay22.
            </p>
            <Stay22Map lat={region.lat} lng={region.lng} label={lodge.name} className="mt-6" />
          </Reveal>
        </section>
      )}

      {relatedLodges.length > 0 && (
        <section className="bg-sand/20 py-16 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
            <Reveal>
              <h2 className="text-2xl font-bold text-charcoal">
                Andere lodges in {lodge.region}
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedLodges.map((l, i) => (
                <Reveal key={l.slug} delay={i * 60}>
                  <Link
                    href={`/nl/lodges/${l.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={l.image}
                        alt={l.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-serif text-xl italic text-charcoal">{l.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">
                        {l.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
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
    </>
  );
}
