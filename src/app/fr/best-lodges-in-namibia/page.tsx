import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AvailabilityBadge, CardCTA, PriceTierBadge, SaveButton } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { lodgesFr } from "@/lib/data.fr";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Les meilleurs lodges de Namibie";
const DESCRIPTION =
  "Les meilleurs lodges et camps de Namibie, sélectionnés région par région : pas de prix, pas de faux avis, seulement des hébergements réels et identifiés qui valent la peine d'être connus.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/best-lodges-in-namibia",
    languages: {
      en: "/best-lodges-in-namibia",
      de: "/de/best-lodges-in-namibia",
      nl: "/nl/best-lodges-in-namibia", fr: "/fr/best-lodges-in-namibia",
        it: "/it/best-lodges-in-namibia",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function BestLodgesPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Lodges", url: `${SITE_URL}/fr/best-lodges-in-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Lodges à la une
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Les meilleurs lodges de Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Pas de prix. Pas de faux avis. Chaque lodge ci-dessous est un établissement réel,
          identifié et actuellement en activité, choisi pour son emplacement, son accompagnement
          ou sa façon d'être géré, pas pour qui nous paie le plus.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lodgesFr.map((lodge, i) => (
            <Reveal key={lodge.slug} delay={(i % 3) * 60}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg">
                <Link href={`/fr/lodges/${lodge.slug}`} className="relative aspect-[4/3] block w-full overflow-hidden">
                  <Image
                    src={lodge.image}
                    alt={lodge.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-rust px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ivory shadow-sm">
                    {lodge.region}
                  </span>
                  <SaveButton className="absolute bottom-3 right-3" />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-serif text-2xl italic text-charcoal">
                    <Link href={`/fr/lodges/${lodge.slug}`} className="hover:text-rust">
                      {lodge.name}
                    </Link>
                  </h2>
                  {lodge.operator && (
                    <p className="mt-1 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
                      {lodge.operator}
                    </p>
                  )}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {lodge.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-charcoal/10 pt-4">
                    {lodge.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-[13px] text-charcoal/70">
                        <MetaIcon name="check" className="h-3.5 w-3.5 shrink-0 text-olive" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between border-t border-charcoal/10 pt-4">
                    <AvailabilityBadge label="Vérifier les disponibilités" />
                    <PriceTierBadge tier={lodge.priceTier} />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href={`/fr/where-to-stay/${lodge.regionSlug}`}
                      className="text-[13px] font-medium text-charcoal/50 hover:text-rust"
                    >
                      Plus dans {lodge.region}
                    </Link>
                    <Link href={`/fr/lodges/${lodge.slug}`}>
                      <CardCTA label="Voir le lodge" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
