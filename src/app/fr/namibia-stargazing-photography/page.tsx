import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Guide de l'observation des étoiles en Namibie";
const DESCRIPTION =
  "Où le ciel nocturne namibien est le plus sombre, et ce qui rend ces lieux vraiment différents : la réserve de ciel étoilé Gold de NamibRand, la lumière photographique des dunes, et où dormir sous ce ciel.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-stargazing-photography",
    languages: {
      en: "/namibia-stargazing-photography",
      de: "/de/namibia-stargazing-photography",
      nl: "/nl/namibia-stargazing-photography", fr: "/fr/namibia-stargazing-photography",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "Meilleurs lodges de Namibie", href: "/fr/best-lodges-in-namibia" },
  { title: "Où loger à Etosha", href: "/fr/where-to-stay/etosha" },
  { title: "Où loger à Sossusvlei", href: "/fr/where-to-stay/sossusvlei" },
  { title: "Guide de la conduite en Namibie", href: "/fr/namibia-self-drive-guide" },
  { title: "Meilleure période pour visiter la Namibie", href: "/fr/best-time-to-visit-namibia" },
  { title: "Conditions de visa pour la Namibie", href: "/fr/namibia-visa-requirements" },
  { title: "La Namibie est-elle sûre ? Sécurité & santé", href: "/fr/namibia-safety-and-health" },
  { title: "Quel est le coût d'un voyage en Namibie ?", href: "/fr/namibia-trip-cost" },
  { title: "Guide de la faune namibienne", href: "/fr/namibia-wildlife-guide" },
];

const SPOTS = [
  {
    place: "NamibRand Nature Reserve",
    href: "/fr/where-to-stay/sossusvlei",
    text: (
      <>
        La destination phare de la Namibie pour l&apos;observation du ciel nocturne. NamibRand a
        été inscrite en 2012 comme réserve internationale de ciel étoilé de niveau Gold, le plus
        strict des trois niveaux, et c&apos;était alors seulement la deuxième réserve Gold au
        monde. Les mesures au Sky Quality Meter réalisées sur la réserve dépassent régulièrement
        21,0 magnitudes par seconde d&apos;arc carrée, proche du plafond théorique de noirceur
        d&apos;environ 22, ce qui correspond à un ciel de classe Bortle 1–2, la classification la
        plus sombre utilisée par les astronomes. Par nuit claire et sans lune, on distingue à
        l&apos;œil nu les bandes de poussière de la Voie lactée, ainsi que les Nuages de Magellan
        et, parfois, la lumière zodiacale, un faible cône de lumière solaire réfléchie par la
        poussière interplanétaire, invisible presque partout ailleurs à cause de la lumière
        artificielle. Plusieurs lodges en bordure de la réserve, dont Wolwedans et NamibRand
        Family Hideout, organisent des sessions d&apos;astronomie guidées avec de véritables
        télescopes, et pas seulement une couverture posée sur le sable. Privilégiez la saison
        sèche (mai–septembre), quand le ciel est le plus sec et la couverture nuageuse la plus
        faible. Consultez notre{" "}
        <Link href="/fr/best-time-to-visit-namibia" className="font-semibold text-rust hover:text-rust-dark">
          guide de la meilleure période pour partir
        </Link>
        .
      </>
    ),
  },
  {
    place: "Dunes de Sossusvlei",
    href: "/fr/where-to-stay/sossusvlei",
    text: "Le même air désertique limpide qui rend le ciel nocturne exceptionnel offre ici aussi l'une des meilleures photographies de lever de soleil d'Afrique : la fenêtre de 20 à 45 minutes après l'ouverture des grilles est le moment où la couleur des dunes est la plus spectaculaire, avant que la brume de chaleur ne s'installe. Pour l'astrophotographie, les dunes elles-mêmes offrent un premier plan saisissant face à la Voie lactée ; éloignez-vous un peu de l'éclairage du camp et laissez vos yeux s'habituer à l'obscurité pendant au moins 15 à 20 minutes avant de shooter.",
  },
  {
    place: "Spitzkoppe",
    href: "/fr/where-to-stay/spitzkoppe",
    text: "Un ensemble d'inselbergs de granit culminant à 1 728 m, avec environ 670 m de dénivelé au-dessus de la plaine de gravier environnante, à environ 180 km de Swakopmund et 280 km de Windhoek. Sa silhouette se détachant sur la Voie lactée est l'un des premiers plans les plus photographiés de Namibie, et contrairement à NamibRand, c'est une simple étape en autonomie plutôt qu'une réserve à réserver. Le camping géré par la communauté locale compte une trentaine d'emplacements basiques et bien espacés, directement au milieu des rochers, de quoi shooter depuis son propre emplacement sans aucune pollution lumineuse ; réservez plusieurs mois à l'avance pendant le pic de juillet à septembre.",
  },
];

const GEAR_TIPS = [
  "Shootez autour de la nouvelle lune : un ciel sans lune est bien plus sombre qu'un ciel avec une lune même au premier quartier, et c'est le facteur numéro un pour la quantité de Voie lactée que vous verrez réellement. Vérifiez le calendrier lunaire avant de fixer vos dates si l'observation des étoiles est une priorité du voyage.",
  "Le trépied est non négociable ; un objectif grand angle (14–24 mm en plein format) permet de cadrer plus de ciel et de premier plan dans une seule exposition.",
  "Pour commencer, utilisez l'ouverture la plus large permise par votre objectif (f/2.8 ou plus si possible), une sensibilité ISO 1600–6400, et une vitesse d'obturation inférieure à environ 500 divisé par la focale en mm pour garder des étoiles nettes plutôt que des traînées (par exemple, environ 20 secondes à 24 mm).",
  "Prenez une lampe frontale avec un mode lumière rouge pour préserver votre vision nocturne, ainsi qu'une télécommande de déclenchement ou le retardateur de votre appareil pour éviter les flous liés à l'appui sur le bouton.",
  "Arrivez sur votre spot pendant qu'il fait encore un peu jour pour composer votre image et vérifier la buée sur l'objectif, qui se forme vite une fois que les températures désertiques chutent après le coucher du soleil.",
];

const FAQS = [
  {
    q: "Qu'est-ce qui distingue le ciel nocturne de NamibRand des autres lieux sombres ?",
    a: "NamibRand détient le statut Gold de réserve internationale de ciel étoilé depuis 2012, le plus élevé des trois niveaux attribués par DarkSky International, et ce n'était alors que la deuxième réserve Gold désignée sur toute la planète. Les mesures au Sky Quality Meter sur la réserve dépassent régulièrement 21 magnitudes par seconde d'arc carrée, contre un maximum théorique d'environ 22, ce qui la place en classe Bortle 1–2, la classification la plus sombre utilisée par les astronomes. Cela reflète à la fois l'absence quasi totale de lumière artificielle et les mesures actives et continues prises par la réserve et les lodges en bordure, notamment un éclairage dirigé vers le sol, pour préserver cette obscurité.",
  },
  {
    q: "Faut-il un équipement particulier pour l'astrophotographie en Namibie ?",
    a: "Un trépied et un appareil photo capable de poses longues manuelles suffisent pour l'essentiel ; un objectif grand angle (équivalent 14–24 mm) aide pour les prises de vue de la Voie lactée, tout comme une grande ouverture (f/2.8 ou plus) et une lampe frontale avec mode lumière rouge pour préserver votre vision nocturne. Plusieurs lodges proches de NamibRand et de Sossusvlei, dont Wolwedans et NamibRand Family Hideout, proposent des sessions d'astronomie guidées avec de vrais télescopes si vous voulez plus qu'un simple plan large du ciel.",
  },
  {
    q: "Quelle est la meilleure période de l'année pour observer les étoiles en Namibie ?",
    a: "La saison sèche (mai–septembre) offre l'air le plus clair et le plus sec, avec la couverture nuageuse la plus faible, ce qui explique aussi pourquoi elle coïncide avec la meilleure période pour observer la faune. Dans cette fenêtre, calez-vous sur le calendrier lunaire : une nuit proche de la nouvelle lune offre le ciel le plus sombre possible, tandis que les nuits autour de la pleine lune noient toutes les étoiles sauf les plus brillantes. Mieux vaut donc vérifier la phase lunaire avant de fixer vos dates si l'observation des étoiles est une priorité.",
  },
  {
    q: "Sossusvlei ou Spitzkoppe : lequel est le meilleur pour la photographie ?",
    a: "Ce sont des sujets différents, pas un choix entre meilleur et moins bon. Sossusvlei, c'est la couleur et l'ampleur des dunes au lever du soleil ; Spitzkoppe, un ensemble d'inselbergs de granit à environ 180 km de Swakopmund culminant à 1 728 m, c'est la silhouette spectaculaire des roches face à la Voie lactée après la tombée de la nuit, avec un camping géré par la communauté qui vous installe au cœur même des rochers. Plusieurs itinéraires combinent les deux avec une nuit d'étape entre les deux sites.",
  },
];

export default function StargazingPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Observation des étoiles & photographie", url: `${SITE_URL}/fr/namibia-stargazing-photography` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Observation des étoiles et astrophotographie en Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          L&apos;air sec de la Namibie et l&apos;absence quasi totale de pollution lumineuse en
          font l&apos;une des rares véritables destinations de ciel étoilé au monde, pas un simple
          argument marketing. Voici où c&apos;est réellement le mieux, et pourquoi.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Notre recommandation :</span> si
          l&apos;observation des étoiles est une vraie priorité du voyage et pas juste un bonus,
          calez d&apos;abord vos dates sur la phase lunaire, puis sur la saison. Une nuit de
          saison sèche (mai–septembre) proche de la nouvelle lune à NamibRand vaut mieux
          qu&apos;une nuit de pleine lune n&apos;importe quel mois.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {SPOTS.map((s, i) => (
            <Reveal
              key={s.place}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{s.place}</h2>
                <Link
                  href={s.href}
                  className="text-[12px] font-semibold uppercase tracking-[0.1em] text-rust hover:text-rust-dark"
                >
                  Où loger →
                </Link>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Timing et matériel, en pratique</h2>
          <ul className="mt-5 space-y-3">
            {GEAR_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-[14px] leading-relaxed text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {tip}
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
        </Reveal>
      </section>
    </>
  );
}
