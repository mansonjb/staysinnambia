import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getLodgesByCategoryFr } from "@/lib/data.fr";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "La Namibie en famille";
const DESCRIPTION =
  "Conseils d'organisation pour un voyage en famille en Namibie : quels lodges conviennent aux enfants, et ce qu'il faut savoir avant de partir.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-with-kids",
    languages: { en: "/namibia-with-kids", de: "/de/namibia-with-kids", nl: "/nl/namibia-with-kids", fr: "/fr/namibia-with-kids", it: "/it/namibia-with-kids" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const NOTES = [
  "L'âge minimum varie selon les lodges, il n'existe pas de règle nationale unique : le Mushara Bush Camp, près de la porte est d'Etosha, accepte les enfants de tout âge sur les sorties guidées, tandis que de nombreux autres camps fixent un plancher autour de 6-8 ans (parfois jusqu'à 12 ans) pour les véhicules de game drive partagés. Confirmez la politique d'âge exacte directement auprès du lodge réservé, car elle peut varier entre propriétés sœurs.",
  "Le risque de paludisme est réel mais concentré, pas uniforme. Il est présent toute l'année le long des rivières Kunene, Zambèze et Okavango (donc la bande de Caprivi et l'extrême nord-ouest), et de façon saisonnière, environ de novembre à juin, à Etosha et dans les autres régions du nord de la Namibie. La majeure partie du circuit classique Sossusvlei-Swakopmund-Damaraland, plus au sud et à l'ouest, présente un risque faible à nul. Confirmez les recommandations actuelles et spécifiques à chaque région auprès d'un centre de vaccination voyage avant de décider des antipaludiques.",
  "Les journées de route en autonomie sont longues : prévoyez des pauses et gardez chaque trajet sous les 4 à 5 heures avec de jeunes enfants. Les portes d'Etosha se trouvent à environ 4h30 de Windhoek, et les tronçons de piste du Damaraland peuvent prendre 3 à 4 heures chacun : considérez-les comme des journées de route à part entière plutôt que de les caser entre deux activités.",
  "Les camps d'Etosha équipés de points d'eau éclairés la nuit, à l'intérieur du parc à Okaukuejo et Halali, ou sur les réserves privées qui le bordent (Ongava, Onguma), permettent aux enfants d'observer éléphants, rhinocéros et lions venir boire après la tombée de la nuit, en toute sécurité depuis le lodge, sans safari en véhicule.",
  "Les balades guidées et les visites culturelles (gravures rupestres de Twyfelfontein, visite d'un village himba plus au nord) conviennent généralement à une tranche d'âge plus large qu'un long game drive cahoteux. Demandez au lodge, au moment de la réservation et non une fois sur place, quelles activités sont réalistes pour l'âge précis de vos enfants.",
];

export default function KidsPageFr() {
  const familyLodges = getLodgesByCategoryFr("family");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guides", url: `${SITE_URL}/fr/guides` },
          { name: "La Namibie en famille", url: `${SITE_URL}/fr/namibia-with-kids` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          La Namibie en famille
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La Namibie se prête bien à un safari en famille :{" "}
          <Link
            href="/fr/namibia-self-drive-guide"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            conduire soi-même à son propre rythme
          </Link>{" "}
          permet des journées de route plus courtes et flexibles, et beaucoup de lodges
          proposent des chambres familiales communicantes. Quelques points pratiques, dont{" "}
          <Link
            href="/fr/namibia-safety-and-health"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            les zones où le paludisme est ou n'est pas un sujet de préoccupation
          </Link>
          , méritent d'être connus avant de réserver.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <ul className="space-y-3">
            {NOTES.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Des lodges adaptés aux familles</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Mushara Lodge se trouve près de la porte est d&apos;Etosha, avec des suites adaptées
            aux familles et une propriété sœur à proximité si vous avez besoin de plus
            d&apos;espace. Desert Quiver Camp se trouve juste à la porte de Sesriem, avec des
            chalets en autonomie et une tarification enfants gratuits, une base facile et
            abordable pour une journée en famille dans les dunes. Villa Violet est une petite
            guesthouse à Windhoek tenue par ses propriétaires, avec une option en autonomie, une
            étape discrète avant ou après le circuit. Canyon Lodge, près du Fish River Canyon, est
            rustique mais confortable, une bonne base si la randonnée ou le sud fait partie de
            votre itinéraire.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {familyLodges.map((lodge, i) => (
            <Reveal key={lodge.slug} delay={i * 60}>
              <Link
                href={`/fr/lodges/${lodge.slug}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div>
                  <p className="font-serif text-xl italic text-charcoal">{lodge.name}</p>
                  <p className="mt-1 text-[13px] text-charcoal/50">{lodge.region}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
