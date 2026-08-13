import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Meilleure période pour visiter la Namibie";
const DESCRIPTION =
  "Quand partir en Namibie : les compromis honnêtes entre la saison sèche, la saison verte et les mois intermédiaires.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/best-time-to-visit-namibia",
    languages: {
      en: "/best-time-to-visit-namibia",
      de: "/de/best-time-to-visit-namibia",
      nl: "/nl/best-time-to-visit-namibia", fr: "/fr/best-time-to-visit-namibia",
        it: "/it/best-time-to-visit-namibia",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const SEASONS = [
  {
    name: "Saison sèche",
    months: "Mai – octobre",
    summary:
      "La saison safari classique. Les pluies cessent pratiquement dès mai, la végétation s'éclaircit rapidement et les animaux perdent leurs points d'eau dispersés, ce qui les concentre autour d'une poignée de points d'eau permanents. À Etosha, cela se traduit par des observations prévisibles à des pans comme Okaukuejo, Halali, Klein Namutoni et Rietfontein, parfois à portée de vue du camp. Juillet est le mois le plus sec jamais enregistré en Namibie ; juin et juillet sont aussi les plus froids, avec des nuits qui descendent régulièrement à 5°C ou moins dans l'intérieur désertique (le gel est possible sur les plaines de gravier autour de Sossusvlei et dans le Khomas Hochland), tandis que les journées restent agréables, entre 22 et 25°C.",
    tradeoffs: [
      "L'observation de la faune atteint son pic entre août et octobre, la soif obligeant les animaux à se concentrer sur un nombre de plus en plus restreint de points d'eau",
      "Nuits désertiques froides, parfois proches de zéro, de mai à août : prévoyez une vraie doudoune, pas juste une polaire",
      "Tarifs de haute saison et camps les plus complets de l'année, surtout de juillet à septembre : réservez les camps du parc d'Etosha 6 à 9 mois à l'avance",
    ],
  },
  {
    name: "Saison verte",
    months: "Novembre – avril",
    summary:
      "Les pluies arrivent sous forme d'orages épars dès novembre et atteignent leur pic entre janvier et mars, quand Windhoek reçoit en moyenne environ 150 mm de pluie pour son mois le plus arrosé, contre environ 0,5 mm en juin, en pleine saison sèche. La poussière retombe, le désert reverdit presque du jour au lendemain, et c'est à cette période que les oiseaux migrateurs paléarctiques (limicoles, milans, guêpiers d'Europe) sont présents aux côtés des espèces résidentes, ce qui en fait la meilleure fenêtre ornithologique de l'année. Le revers de la médaille : avec de l'eau partout, la faune n'a plus aucune raison de se rassembler aux points d'eau, donc les observations à Etosha sont plus dispersées et demandent davantage de déplacements.",
    tradeoffs: [
      "Meilleure période de l'année pour l'ornithologie, de décembre à mars, avec la présence d'espèces migratrices aux côtés des résidentes",
      "Photographie spectaculaire de ciels et de lumière, et saison des naissances chez les antilopes (impalas, springboks) en décembre-janvier",
      "La faune se disperse loin des points d'eau, et certaines routes non goudronnées de la région du Zambèze et de zones du Kaokoland peuvent être temporairement coupées par la pluie",
    ],
  },
  {
    name: "Ailes de saison",
    months: "Avril–mai & septembre–octobre",
    summary:
      "Le meilleur rapport conditions/affluence de Namibie. Avril-mai : les pluies viennent de s'arrêter, les paysages sont encore verts après la saison humide, mais la foule et la chaleur ne sont pas encore là, et les routes ont surtout séché. Septembre-octobre : toujours en plein dans la saison sèche pour l'observation de la faune, sans doute la meilleure période de l'année car octobre pousse les dernières réserves d'eau à leur limite, mais avant la remise à zéro des tarifs de janvier et avec des camps nettement moins remplis qu'en août. Le hic, c'est la chaleur d'octobre : les régions désertiques comme Sossusvlei et le Kaokoveld dépassent régulièrement les 35-38°C en milieu d'après-midi, ce qui pousse certains guides à qualifier, mi-sérieux mi-amusés, ce mois de plus difficile à affronter en extérieur.",
    tradeoffs: [
      "Avril-mai : paysages verdoyants, routes qui sèchent, et tarifs bien en dessous du pic de saison sèche",
      "Septembre-octobre : qualité d'observation de la saison sèche, sans l'affluence du mois d'août",
      "Octobre apporte une vraie chaleur avant l'arrivée des pluies : prévoyez les safaris tôt le matin et en fin d'après-midi",
    ],
  },
];

const MONTHS = [
  { m: "Jan", temp: "32–34° / 17–19°", rain: "Saison des pluies s'installe", note: "Chaud, humide, orages fréquents l'après-midi ; paysages luxuriants" },
  { m: "Fév", temp: "31–33° / 17–19°", rain: "Mois le plus arrosé", note: "Windhoek reçoit en moyenne ~154 mm ; pic de la saison verte et de l'ornithologie" },
  { m: "Mar", temp: "30–32° / 16–18°", rain: "Pluies en baisse", note: "Encore humide, paysages à leur plus vert" },
  { m: "Avr", temp: "28–30° / 13–15°", rain: "Pluies presque arrêtées", note: "Mois intermédiaire sous-estimé : verdoyant, routes qui sèchent, peu de monde" },
  { m: "Mai", temp: "25–27° / 8–10°", rain: "Quasi nulles", note: "Début de la saison sèche ; la végétation commence à s'éclaircir" },
  { m: "Juin", temp: "22–24° / 5–7°", rain: "Période la plus sèche", note: "Nuits les plus froides de l'année ; ciels les plus dégagés pour l'observation des étoiles" },
  { m: "Juil", temp: "22–24° / 5–7°", rain: "Mois le plus sec", note: "Air le plus limpide de l'année ; la faune se concentre de plus en plus aux points d'eau" },
  { m: "Août", temp: "25–27° / 8–10°", rain: "Quasiment nulles", note: "Haute saison touristique ; réservez les camps d'Etosha bien à l'avance" },
  { m: "Sep", temp: "29–32° / 11–14°", rain: "Quasiment nulles", note: "Excellente observation, moins de monde, avant la chaleur d'octobre" },
  { m: "Oct", temp: "33–36° / 16–18°", rain: "Dernier mois sec", note: "Meilleure activité aux points d'eau de l'année, mais vraiment chaud l'après-midi" },
  { m: "Nov", temp: "33–35° / 18–19°", rain: "Premiers orages", note: "Début des pluies ; la faune commence à se disperser, arrivée des oiseaux migrateurs" },
  { m: "Déc", temp: "31–33° / 17–19°", rain: "Début de la saison verte", note: "Chaud et humide ; forte affluence des vacanciers régionaux vers la côte" },
];

export default function BestTimePageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guides", url: `${SITE_URL}/fr/guides` },
          { name: "Meilleure période pour visiter la Namibie", url: `${SITE_URL}/fr/best-time-to-visit-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Meilleure période pour visiter la Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Il n&apos;existe pas un seul mois idéal : tout dépend si votre priorité est la{" "}
          <Link
            href="/fr/namibia-wildlife-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            faune
          </Link>
          , la{" "}
          <Link
            href="/fr/namibia-stargazing-photography"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            photographie
          </Link>{" "}
          ou d&apos;éviter la foule. Voici le compromis honnête pour chaque période de l&apos;année.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Notre recommandation :</span> si
          c&apos;est un premier voyage centré sur l&apos;observation de la faune, visez septembre
          ou début octobre. Vous profitez des conditions de saison sèche les plus concentrées,
          avant que la vraie chaleur et l&apos;affluence du mois d&apos;août n&apos;atteignent
          leur pic. Si les grands paysages verdoyants et l&apos;ornithologie comptent plus que la
          garantie d&apos;observations, février et mars offrent les deux, au prix de davantage de
          déplacements entre les animaux.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SEASONS.map((season, i) => (
            <Reveal key={season.name} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold text-charcoal">{season.name}</h2>
                <p className="mt-1 text-[12px] uppercase tracking-[0.1em] text-rust">
                  {season.months}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-charcoal/70">
                  {season.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-charcoal/10 pt-4">
                  {season.tradeoffs.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-2 text-[13px] text-charcoal/60"
                    >
                      <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-16 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
            Mois par mois
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Les températures diurnes / nocturnes indiquées sont des moyennes pour le centre et le
            sud de la Namibie (région de Windhoek). L&apos;intérieur désertique du Namib et les
            pans d&apos;Etosha sont plusieurs degrés plus chauds l&apos;après-midi pendant les
            mois intermédiaires, et plus froids la nuit en juin et juillet.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {MONTHS.map((mo, i) => (
            <Reveal
              key={mo.m}
              delay={i * 30}
              className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-charcoal">
                  {mo.m}
                </h3>
                <span className="text-[11px] font-medium text-rust">{mo.temp}C</span>
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-charcoal/40">
                {mo.rain}
              </p>
              <p className="mt-2 text-[12.5px] leading-snug text-charcoal/60">{mo.note}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
