import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { getRegionFr } from "@/lib/data.fr";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Les meilleures régions de safari en Namibie";
const DESCRIPTION =
  "Etosha, Damaraland et Caprivi comparés : quelle région de safari namibienne correspond vraiment à votre voyage.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/best-safari-areas",
    languages: { en: "/best-safari-areas", de: "/de/best-safari-areas", nl: "/nl/best-safari-areas", fr: "/fr/best-safari-areas" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const COMPARISON = [
  {
    slug: "etosha",
    style: "Safari classique aux points d'eau",
    wildlife:
      "Fiable : éléphant, lion, rhinocéros noir, grands troupeaux concentrés autour des points d'eau éclairés la nuit",
    pace: "Safaris en véhicule structurés depuis une base fixe",
  },
  {
    slug: "damaraland",
    style: "Pistage, à pied ou en véhicule",
    wildlife:
      "Éléphants adaptés au désert et, avec un guide spécialisé depuis Palmwag, rhinocéros noirs pistés, jamais garantis, mais d'autant plus gratifiants quand on les trouve",
    pace: "Plus lent, accompagné, organisé autour des réserves communautaires",
  },
  {
    slug: "caprivi",
    style: "Faune de rivière et de plaine inondable",
    wildlife: "Hippopotame, crocodile, observation ornithologique de premier plan : un écosystème entièrement différent",
    pace: "Excursions en bateau en complément des safaris en véhicule",
  },
];

export default function SafariAreasPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guides", url: `${SITE_URL}/fr/guides` },
          { name: "Les meilleures régions de safari en Namibie", url: `${SITE_URL}/fr/best-safari-areas` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Les meilleures régions de safari en Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          &quot;Safari&quot; ne signifie pas la même chose dans ces trois régions. Consultez
          notre{" "}
          <Link
            href="/fr/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            guide de la faune
          </Link>{" "}
          pour savoir à quoi vous attendre dans chacune d'elles. Aucune n'est strictement
          meilleure : elles répondent à des priorités différentes.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {COMPARISON.map((c, i) => {
            const region = getRegionFr(c.slug);
            if (!region) return null;
            return (
              <Reveal key={c.slug} delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                  <h2 className="font-serif text-2xl italic text-charcoal">{region.name}</h2>
                  <dl className="mt-4 space-y-4 border-t border-charcoal/10 pt-4">
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Style de safari
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.style}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Faune
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.wildlife}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Rythme
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.pace}</dd>
                    </div>
                  </dl>
                  <Link
                    href={`/fr/where-to-stay/${region.slug}`}
                    className="group mt-6 flex items-center justify-between border-t border-charcoal/10 pt-4 text-[13px] font-medium text-charcoal/60 hover:text-rust"
                  >
                    Où loger à {region.name}
                    <CardArrow />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
