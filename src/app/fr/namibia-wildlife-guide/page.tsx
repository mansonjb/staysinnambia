import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Guide de la faune namibienne";
const DESCRIPTION =
  "La liste de la faune namibienne par région : éléphants adaptés au désert, rhinocéros noirs, espèces des points d'eau d'Etosha, et la faune côtière que la plupart des itinéraires manquent.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-wildlife-guide",
    languages: { en: "/namibia-wildlife-guide", de: "/de/namibia-wildlife-guide", nl: "/nl/namibia-wildlife-guide", fr: "/fr/namibia-wildlife-guide", it: "/it/namibia-wildlife-guide" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "Meilleurs lodges en Namibie", href: "/fr/best-lodges-in-namibia" },
  { title: "Séjourner à Etosha", href: "/fr/where-to-stay/etosha" },
  { title: "Séjourner à Sossusvlei", href: "/fr/where-to-stay/sossusvlei" },
  { title: "Guide de l'autotour en Namibie", href: "/fr/namibia-self-drive-guide" },
  { title: "Meilleure période pour visiter la Namibie", href: "/fr/best-time-to-visit-namibia" },
  { title: "Conditions de visa pour la Namibie", href: "/fr/namibia-visa-requirements" },
  { title: "La Namibie est-elle sûre ? Sécurité et santé", href: "/fr/namibia-safety-and-health" },
  { title: "Combien coûte un voyage en Namibie ?", href: "/fr/namibia-trip-cost" },
  { title: "Guide de la faune namibienne", href: "/fr/namibia-wildlife-guide" },
];

const SIGHTINGS = [
  {
    region: "Etosha",
    href: "/fr/where-to-stay/etosha",
    animals:
      "Lion, éléphant, girafe, zèbre, springbok, et l'impala à face noire, une sous-espèce que l'on ne trouve nulle part ailleurs qu'à Etosha et dans le nord-ouest du Kaokoland. Les points d'eau éclairés la nuit des camps d'Okaukuejo et de Halali offrent l'observation la plus fiable du pays pour le rhinocéros noir : les rhinocéros arrivent généralement entre 19h et 23h pendant la saison sèche (environ mai-octobre), souvent en partageant le point d'eau avec des éléphants et des lions la même nuit. Pour le guépard, les plaines ouvertes à l'ouest d'Okaukuejo et le point d'eau d'Okondeka sont un meilleur pari que les pans à l'est.",
  },
  {
    region: "Damaraland",
    href: "/fr/where-to-stay/damaraland",
    animals:
      "Le territoire de l'éléphant adapté au désert, une population passée de moins de 30 individus dans les années 1980 à environ 600-700 aujourd'hui, presque entièrement grâce au modèle namibien des réserves communautaires. Ces éléphants parcourent des territoires allant jusqu'à 700 km et peuvent tenir cinq jours sans boire, des adaptations que l'on ne trouve presque nulle part ailleurs sur Terre. La Torra Conservancy, dans la vallée de la rivière Huab, est la base la plus fiable pour les suivre. Plus au nord, la concession de Palmwag abrite la plus grande population au monde de rhinocéros noirs en liberté, environ 200 animaux surveillés quotidiennement par les rangers du Save the Rhino Trust ; les observer suppose une excursion guidée d'une journée entière à pied avec un guide agréé, pas une halte en autotour.",
  },
  {
    region: "Skeleton Coast",
    href: "/fr/where-to-stay/skeleton-coast",
    animals:
      "Colonies d'otaries à fourrure du Cap (Cape Cross à elle seule en compte largement plus de 100 000 au pic de la saison), hyène brune rôdant le long de la laisse de mer à la recherche de charognes, et, au large, le dauphin de Heaviside, une petite espèce de dauphin que l'on ne trouve que le long des côtes namibienne et sud-africaine. C'est un territoire davantage tourné vers le paysage et la vie marine qu'une étape de grande faune.",
  },
  {
    region: "Caprivi (Zambezi)",
    href: "/fr/where-to-stay/caprivi",
    animals: (
      <>
        La faune la plus liée à l&apos;eau de Namibie, concentrée dans le parc national de
        Bwabwata le long des plaines inondables du Kwando et du Zambèze : hippopotame, crocodile,
        troupeaux conséquents d&apos;éléphants et de buffles, antilopes sable et rouanne, et
        l&apos;une des dernières populations de lycaons du pays, suivie par le Kwando Carnivore
        Project. C&apos;est aussi la meilleure région d&apos;observation d&apos;oiseaux du pays et
        le seul endroit où une véritable observation des Big Five, buffle compris, est réaliste,
        un écosystème entièrement différent des espèces des terres arides ailleurs dans le pays.
        C&apos;est aussi la région de Namibie où le risque de paludisme est le plus élevé :
        consultez notre{" "}
        <Link
          href="/fr/namibia-safety-and-health"
          className="font-medium text-rust hover:text-rust-dark"
        >
          guide sécurité et santé
        </Link>{" "}
        avant de partir.
      </>
    ),
  },
  {
    region: "Sossusvlei",
    href: "/fr/where-to-stay/sossusvlei",
    animals:
      "L'oryx (gemsbok) qui se découpe sur les crêtes des dunes est l'observation emblématique, et le dernier recensement de la faune de la réserve voisine de NamibRand a compté environ 3 200 oryx et 12 400 springboks sur ses 172 000 hectares. Hyène brune, chacal à chabraque et léopard sont présents mais réellement discrets ; NamibRand mène aussi un programme actif de réintroduction du caracal et du guépard, donc l'un ou l'autre reste un bonus, pas une certitude.",
  },
];

const TIMING = [
  "L'aube (environ 5h30-8h) : les prédateurs sont les plus actifs, la meilleure fenêtre pour observer lion, guépard et léopard en mouvement avant que la chaleur ne s'installe.",
  "La mi-journée : la faune se concentre autour des points d'eau plutôt que de se déplacer, surtout pendant la saison sèche de mai à octobre. Se garer à Okaukuejo, Halali ou Olifantsrus et attendre fonctionne mieux que rouler à la recherche d'observations.",
  "Le crépuscule et les premières heures de nuit, aux points d'eau éclairés des camps : l'activité du rhinocéros noir et de l'éléphant atteint son pic, généralement entre 19h et 23h en saison sèche.",
  "La saison des pluies (novembre-avril) : la faune se disperse largement à mesure que les pans temporaires se remplissent, rendant les observations moins prévisibles, mais l'observation des oiseaux, la naissance des petits et les paysages verdoyants s'améliorent nettement.",
];

const FAQS = [
  {
    q: "La Namibie compte-t-elle les Big Five ?",
    a: "Pas partout, et pas dans la version classique incluant le buffle que suggère la plupart du marketing safari. Etosha offre de manière fiable le lion, l'éléphant, le rhinocéros noir et le léopard ; le buffle ne fait pas partie de l'écosystème d'Etosha. Le parc national de Bwabwata, dans la région du Caprivi (Zambèze), est le seul endroit où l'on a une réelle chance d'observer les cinq, buffle compris, aux côtés d'antilopes sable et rouanne et de l'une des dernières meutes de lycaons du pays.",
  },
  {
    q: "Qu'est-ce qui différencie la faune namibienne de celle du Kenya ou de la Tanzanie ?",
    a: "La faune emblématique de la Namibie est adaptée au désert : des éléphants et des rhinocéros noirs qui survivent avec une fraction de l'eau dont ont besoin leurs cousins de savane. La population d'éléphants du désert au Damaraland est passée de moins de 30 animaux dans les années 1980 à environ 600-700 aujourd'hui, et la concession de Palmwag abrite la plus grande population au monde de rhinocéros noirs adaptés au désert en liberté, environ 200 individus. C'est une rencontre avec la faune différente, plus dépouillée, que les troupeaux denses d'Afrique de l'Est, construite autour d'observations rares plutôt que du volume.",
  },
  {
    q: "Où est le meilleur endroit pour voir le rhinocéros noir en Namibie ?",
    a: "Les points d'eau éclairés d'Okaukuejo et de Halali à Etosha pour la chance la plus fiable, les rhinocéros arrivant généralement entre 19h et 23h en saison sèche ; et la concession de Palmwag au Damaraland pour le tracking à pied guidé d'animaux surveillés par le Save the Rhino Trust, l'un des seuls endroits en Afrique où cela est proposé de manière responsable, en partenariat avec les réserves communautaires.",
  },
  {
    q: "Peut-on observer la faune en autotour, ou faut-il un guide ?",
    a: "Etosha se prête vraiment bien à l'observation de la faune en autotour : les points d'eau sont accessibles avec une voiture de location classique et la faune s'y concentre de façon prévisible, surtout pendant la saison sèche de mai à octobre. Le tracking des éléphants adaptés au désert dans la Torra Conservancy au Damaraland et le tracking du rhinocéros noir dans la concession de Palmwag nécessitent tous deux un guide agréé spécialisé ; ce ne sont pas des observations depuis la route.",
  },
  {
    q: "Où voir le guépard en Namibie ?",
    a: "La Namibie abrite la plus grande population de guépards en liberté au monde, estimée à environ 1 500 animaux, et Otjiwarongo, près du Waterberg, est souvent surnommée la capitale mondiale du guépard. Le centre de recherche du Cheetah Conservation Fund y offre l'observation la plus fiable, aux côtés de la fondation AfriCat à Okonjima. À Etosha, vos meilleures chances lors d'un game drive se trouvent sur les plaines ouvertes à l'ouest d'Okaukuejo et au point d'eau d'Okondeka, même si les observations de guépard restent partout opportunistes, jamais garanties.",
  },
  {
    q: "Quelle est la meilleure période de l'année pour observer la faune en Namibie ?",
    a: "La saison sèche, environ de mai à octobre, quand la rareté de l'eau force les animaux à se concentrer autour des points d'eau et rend les observations bien plus prévisibles, surtout à Etosha. La saison des pluies (novembre-avril) disperse davantage la faune et rend les observations plus difficiles à anticiper, mais c'est la meilleure fenêtre pour l'observation des oiseaux, la naissance des petits et les paysages verdoyants.",
  },
];

export default function WildlifeGuidePageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guide de la faune", url: `${SITE_URL}/fr/namibia-wildlife-guide` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          La faune namibienne : ce que vous verrez, et où
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La faune namibienne est dispersée, pas concentrée comme en Afrique de l&apos;Est. La
          région où vous séjournez détermine ce que vous verrez réellement.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {SIGHTINGS.map((s, i) => (
            <Reveal
              key={s.region}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{s.region}</h2>
                <Link
                  href={s.href}
                  className="text-[12px] font-semibold uppercase tracking-[0.1em] text-rust hover:text-rust-dark"
                >
                  Où séjourner : {s.region} →
                </Link>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{s.animals}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Meilleur moment de la journée, par espèce</h2>
          <ul className="mt-5 space-y-3">
            {TIMING.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Questions fréquentes
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4">
          {FAQS.map((faq, i) => (
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

      <section className="mx-auto max-w-[1400px] px-6 pb-10 sm:px-10">
        <Reveal className="flex flex-wrap gap-3">
          {POPULAR_GUIDES_NL.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
            >
              {g.title}
            </Link>
          ))}
          <Link
            href="/fr/best-safari-areas"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Meilleures zones de safari
          </Link>
        </Reveal>
      </section>
    </>
  );
}
