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
      "La plus fiable des trois régions. On estime la population à plus de 2 000 éléphants, plusieurs centaines de lions répartis dans une vingtaine de troupes environ, et l'une des populations de rhinocéros noirs les plus importantes d'Afrique, qui se rassemblent autour des points d'eau éclairés la nuit, surtout à mesure que la saison sèche s'installe.",
    pace: "Safaris en véhicule structurés depuis une base fixe, ou observation aux points d'eau éclairés sans quitter le camp",
    bestMonths:
      "Juillet à octobre, quand les mares saisonnières s'assèchent et que les animaux se rassemblent autour des points d'eau permanents ; attendez-vous à de l'affluence aux points d'eau les plus prisés en haute saison",
  },
  {
    slug: "damaraland",
    style: "Pistage, à pied ou en véhicule",
    wildlife:
      "Une expérience entièrement différente : des éléphants adaptés au désert qui parcourent jusqu'à 700 km et peuvent rester des jours sans boire, et, avec un guide spécialisé depuis la concession de Palmwag, l'une des plus grandes populations de rhinocéros noirs en liberté au monde, pistée à pied. Rien n'est garanti ici comme aux points d'eau d'Etosha : une observation compte d'autant plus qu'elle n'était pas planifiée.",
    pace: "Plus lent, accompagné, organisé autour des réserves communautaires, souvent à pied",
    bestMonths:
      "Mai à octobre (saison sèche) ; la faune se disperse davantage après la pluie, ce qui réduit les chances de pistage en dehors de cette période",
  },
  {
    slug: "caprivi",
    style: "Faune de rivière et de plaine inondable",
    wildlife:
      "Hippopotames et crocodiles dans le système fluvial du Kwando-Linyanti, importants troupeaux d'éléphants et de buffles traversant le parc national de Bwabwata, et près de 450 espèces d'oiseaux recensées : un écosystème véritablement différent du circuit désertique plus au sud, pas une version diminuée de celui-ci.",
    pace: "Excursions en bateau en complément des safaris en véhicule",
    bestMonths:
      "Avril à septembre, quand la saison sèche concentre la faune le long des rivières et des plaines inondables et que les conditions de circulation sont optimales",
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
          &quot;Safari&quot; ne signifie pas la même chose dans ces trois régions : Etosha, c&apos;est
          la densité et la fiabilité, Damaraland, c&apos;est le frisson particulier de pister des
          espèces adaptées au désert qui ne sont enfermées nulle part, et la bande de Caprivi,
          c&apos;est presque un autre pays, un écosystème de rivières et de plaines inondables qui
          n&apos;a presque rien en commun avec le circuit désertique plus au sud. Consultez
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
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                        Meilleurs mois
                      </dt>
                      <dd className="mt-1 text-[14px] text-charcoal/70">{c.bestMonths}</dd>
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

        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">Notre recommandation :</span> si vous ne
            devez en choisir qu&apos;une, Etosha reste le choix le plus sûr pour un premier safari,
            surtout entre août et octobre, quand l&apos;activité aux points d&apos;eau est à son
            maximum. Damaraland trouve sa place sur un voyage plus long, comme la région qui
            récompense la patience par quelque chose qu&apos;Etosha ne peut pas offrir : une faune
            adaptée au désert, en totale liberté, sans la moindre clôture en vue. La bande de
            Caprivi ne vaut la peine d&apos;être ajoutée que si vous poursuivez vers le delta de
            l&apos;Okavango ou Chobe au Botswana, ou si vous recherchez spécifiquement
            l&apos;observation des oiseaux et la faune fluviale : comme étape isolée sur un voyage
            uniquement namibien et court, le trajet d&apos;environ 12 heures (la plupart des
            voyageurs préfèrent prendre l&apos;avion jusqu&apos;à Katima Mulilo) est difficile à
            justifier.
          </p>
        </Reveal>
      </section>
    </>
  );
}
