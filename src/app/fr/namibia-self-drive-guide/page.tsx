import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Guide de l'autotour en Namibie";
const DESCRIPTION =
  "Ce qu'implique réellement l'autotour en Namibie : types de routes, planification des arrêts essence, pièges des assurances de location, et pourquoi ne jamais conduire de nuit est la règle que tout le monde répète.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-self-drive-guide",
    languages: { en: "/namibia-self-drive-guide", de: "/de/namibia-self-drive-guide", nl: "/nl/namibia-self-drive-guide", fr: "/fr/namibia-self-drive-guide" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "Meilleurs lodges de Namibie", href: "/fr/best-lodges-in-namibia" },
  { title: "Où séjourner à Etosha", href: "/fr/where-to-stay/etosha" },
  { title: "Où séjourner à Sossusvlei", href: "/fr/where-to-stay/sossusvlei" },
  { title: "Guide de l'autotour en Namibie", href: "/fr/namibia-self-drive-guide" },
  { title: "Meilleure période pour visiter la Namibie", href: "/fr/best-time-to-visit-namibia" },
  { title: "Conditions de visa pour la Namibie", href: "/fr/namibia-visa-requirements" },
  { title: "La Namibie est-elle sûre ? Sécurité & santé", href: "/fr/namibia-safety-and-health" },
  { title: "Combien coûte un voyage en Namibie ?", href: "/fr/namibia-trip-cost" },
  { title: "Guide de la faune namibienne", href: "/fr/namibia-wildlife-guide" },
];

const ROAD_TYPES = [
  {
    code: "Routes A / B",
    desc: "Grands axes goudronnés entre les principales villes (Windhoek-Okahandja, Windhoek-Swakopmund via la B2). Conduite normale, mais restez attentif aux koudous et au bétail à l'aube, au crépuscule et la nuit.",
  },
  {
    code: "Routes C",
    desc: "Pistes en gravier nivelées, généralement bien entretenues et l'ossature de la plupart des itinéraires en autotour (la C28 Windhoek-Solitaire, les C39/C40 à travers le Damaraland). Plafonnez votre vitesse à 80 km/h et ralentissez davantage dès que le revêtement paraît meuble ou à l'approche d'un virage ; dégonflez les pneus d'environ 10 à 20 % par rapport à la pression sur bitume pour un meilleur confort et une meilleure adhérence sur la tôle ondulée.",
  },
  {
    code: "Routes D",
    desc: "Pistes secondaires en gravier, plus étroites et plus accidentées (Kamanjab-Palmwag, Sesfontein-Purros). La tôle ondulée y est pire et des plaques de sable meuble apparaissent sans prévenir. Gardez une vitesse stable dans les sections de tôle ondulée plutôt que de freiner en plein milieu, et freinez avant un virage, jamais dedans.",
  },
  {
    code: "Routes F",
    desc: "Pistes 4x4, souvent accidentées, sablonneuses ou impraticables selon la saison (le secteur du Van Zyl's Pass, le Kaokoland profond). Pas adaptées à une berline de location standard ni à un 2x4, à parcourir idéalement avec un second véhicule ou un guide qui connaît l'itinéraire.",
  },
];

const TYRE_PRESSURE = [
  { surface: "Bitume / routes A-B", psi: "Pression constructeur (généralement ~32-36 psi)", note: "Regonflez à cette pression avant de reprendre le bitume ; des pneus sous-gonflés surchauffent vite à vitesse élevée." },
  { surface: "Gravier nivelé (routes C)", psi: "Dégonflez d'environ 10-20 % par rapport au bitume", note: "Améliore le confort et la surface de contact sur la tôle ondulée sans trop fléchir les flancs." },
  { surface: "Gravier accidenté / routes D", psi: "Dégonflez davantage, vers 25-28 psi", note: "Attendez-vous à une sensation plus molle ; c'est le compromis pour moins rebondir sur la tôle ondulée." },
  { surface: "Sable profond (Kaokoland, pistes de dunes)", psi: "Jusqu'à 1,8 bar (~26 psi), voire moins", note: "Dégonflez avant d'être bloqué, pas après. Emportez un compresseur pour regonfler ensuite." },
];

const RENTAL_COMPANIES = [
  {
    name: "Pour un 2x4 simple et efficace",
    text: "Un 2x4 bien équipé avec une vraie garde au sol (Toyota Corolla Cross, VW Polo Sedan, catégorie Hyundai Creta) auprès d'un loueur basé à Windhoek coûte environ N$900-1 400/jour et couvre confortablement Etosha, Sossusvlei, Swakopmund et le réseau principal de routes C. Consultez notre guide sur les voyages sans 4x4 pour savoir précisément quels itinéraires restent accessibles.",
  },
  {
    name: "Pour un 4x4 safari entièrement équipé",
    text: "Bushlore et Asco Car Hire sont les deux spécialistes que la plupart des voyageurs en autotour finissent par comparer, tous deux équipant en série tentes de toit, matériel de camping, GPS et kit de récupération. Comptez environ N$2 500-4 000/jour selon la saison pour un 4x4 catégorie Hilux entièrement équipé. Britz opère aussi en Namibie depuis Windhoek avec une flotte plus large si vous voulez plus de choix de véhicules.",
  },
  {
    name: "Franchise et caution : à lire avant de signer",
    text: "La franchise dommages standard sur un 4x4 se situe généralement autour de N$30 000-40 000, les pneus, pare-brise, soubassement et tonneaux d'un seul véhicule étant souvent isolés en exclusions distinctes et plus élevées. Les loueurs vendent des formules à franchise réduite en option journalière (généralement €8-25/jour) qui ramènent la franchise vers N$5 000-20 000 ; une petite caution de remise du véhicule (environ N$5 000 chez certains loueurs) est aussi habituelle pour les amendes ou les pertes exclues. Demandez précisément quelles sont les exclusions liées au gravier et aux tonneaux d'un seul véhicule avant de choisir votre formule.",
  },
];

const RULES = [
  "Ne roulez jamais de nuit en dehors des villes : le bétail, les koudous et d'autres animaux sauvages bondissent souvent sur la route sous l'effet des phares, et la plupart des loueurs excluent explicitement la conduite de nuit de leur couverture d'assurance. C'est la règle la plus répétée, et ce n'est pas un hasard.",
  "Dans le nord-ouest et le sud, les stations-service se raréfient vite. Solitaire est le seul point d'essence entre Sesriem et la côte, un tronçon d'environ 340 km. Kamanjab et Khorixas encadrent la portion sans essence à travers le Damaraland vers Palmwag et Sesfontein. Faites le plein dès que le réservoir passe sous la moitié sur l'un de ces tronçons, pas quand la jauge devient basse, et emportez de l'eau potable supplémentaire en cas de panne.",
  "Les dommages aux pneus et au pare-brise sur les pistes en gravier sont le sinistre le plus fréquent en location de voiture en Namibie. Lisez le montant de la franchise sur votre contrat, pas seulement le tarif journalier : la franchise standard tourne autour de N$20 000-40 000 selon le loueur, et les options de franchise réduite coûtent généralement €8-25/jour de plus.",
  "Le taux d'alcoolémie légal est de 0,05 %, contrôlé par des barrages routiers sur certains axes.",
  "Ralentissez dans les virages en gravier et sur le sable meuble : la plupart des accidents en autotour sont des tonneaux d'un seul véhicule dus à un freinage trop brusque ou à une correction excessive à vitesse élevée, pas des collisions avec d'autres véhicules. Freinez en ligne droite avant le virage, puis relâchez progressivement en le négociant.",
];

const FAQS = [
  {
    q: "Ai-je besoin d'un 4x4 pour faire l'autotour en Namibie ?",
    a: "Pas pour la plupart des itinéraires classiques. Etosha, Sossusvlei, Swakopmund et le réseau de routes C sont gérables avec un 2x4 bien équipé et à bonne garde au sol, pour environ N$900-1 400/jour. Un 4x4 devient utile pour les routes D du Damaraland, le Kaokoland, et partout où vous emprunterez des routes D ou F, et coûte généralement N$2 500-4 000/jour entièrement équipé avec du matériel de camping chez un spécialiste comme Bushlore ou Asco Car Hire. Consultez notre guide dédié sur les voyages sans 4x4 pour les itinéraires précis qui le permettent.",
  },
  {
    q: "Autotour ou safari accompagné : que choisir pour un premier voyage ?",
    a: "L'autotour vous donne un contrôle total sur le rythme et le budget, et le réseau routier namibien le rend plus accessible que dans la plupart des autres pays de safari. Un voyage accompagné échange cette liberté contre la connaissance locale, l'absence de logistique à gérer, et de meilleures observations de la faune pendant les gamedrives. Beaucoup de primo-voyageurs optent pour une formule hybride : autotour entre les régions, gamedrives accompagnés à l'intérieur des parcs.",
  },
  {
    q: "À quelle distance se trouvent les stations-service en Namibie ?",
    a: "Sur les grands axes, tous les 100 à 200 km. Sur les tronçons isolés, les écarts sont bien plus grands : Solitaire est le seul point d'essence entre Sesriem et la côte (environ 340 km), et le tronçon Kamanjab-Khorixas-Palmwag à travers le Damaraland comporte lui aussi de longues sections sans essence. Sur la route vers le Fish River Canyon dans le sud, les écarts peuvent dépasser 250 km sans aucun service. Planifiez vos arrêts essence avant de quitter chaque ville, pas quand la jauge devient basse, et considérez tout réservoir sous la moitié comme le signal qu'il faut faire le plein.",
  },
  {
    q: "Quelle pression de pneus adopter sur le gravier et le sable en Namibie ?",
    a: "Dégonflez d'environ 10 à 20 % par rapport à votre pression sur bitume sur les routes C nivelées, pour un meilleur confort et une meilleure adhérence sur la tôle ondulée. Sur les routes D plus accidentées, dégonflez davantage. Dans le sable profond, notamment au Kaokoland ou sur les pistes de dunes, des pressions aussi basses que 1,8 bar (environ 26 psi) sont une pratique courante, à dégonfler avant d'être bloqué plutôt qu'après. Regonflez toujours à la pression constructeur avant de reprendre une route goudronnée, car rouler vite sur bitume avec une pression basse fait monter la température et le risque d'éclatement.",
  },
  {
    q: "Que couvre réellement l'assurance de location sur les pistes en gravier ?",
    a: "L'assurance dommages standard exclut souvent, ou soumet à une franchise élevée, les impacts de pare-brise, les crevaisons dues au gravier et les tonneaux d'un seul véhicule, qui sont pourtant les sinistres les plus fréquents en Namibie. La franchise standard tourne généralement autour de N$20 000-40 000 ; les formules à franchise réduite coûtent €8-25/jour de plus et ramènent ce montant vers N$5 000-20 000, une option zéro franchise étant parfois disponible au niveau le plus élevé. Demandez précisément quelles sont les exclusions liées au gravier et aux tonneaux d'un seul véhicule, pas seulement le montant affiché de la franchise.",
  },
  {
    q: "Quel loueur choisir concrètement pour un autotour en Namibie ?",
    a: "Pour un 2x4 sur le circuit principal, n'importe quel loueur réputé basé à Windhoek avec un véhicule catégorie Corolla Cross/Polo Sedan/Hyundai Creta convient très bien. Pour un 4x4 équipé camping, Bushlore et Asco Car Hire sont les deux noms que la plupart des voyageurs indépendants comparent, tous deux avec des flottes namibiennes dédiées, tentes de toit et kit de récupération ; Britz est une alternative à flotte plus large, également basée à Windhoek. Comparez les niveaux de franchise, pas seulement le tarif journalier, car c'est là que se joue la vraie différence de coût sur un itinéraire riche en pistes de gravier.",
  },
];

export default function SelfDriveGuidePageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guide de l'autotour", url: `${SITE_URL}/fr/namibia-self-drive-guide` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Guide de l'autotour en Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          L'autotour est la façon dont la plupart des voyageurs indépendants découvrent la
          Namibie. Le réseau routier est vraiment bon, mais les distances, le revêtement des
          routes et les petites lignes des assurances de location surprennent souvent. Voici ce
          qu'il faut réellement anticiper, y compris ce que cela permet d'économiser par rapport à
          un{" "}
          <Link href="/fr/namibia-trip-cost" className="font-medium text-rust hover:text-rust-dark">
            voyage accompagné
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Types de routes décryptés</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ROAD_TYPES.map((r, i) => (
            <Reveal
              key={r.code}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {r.code}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Pression des pneus selon le revêtement</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            La plupart des sinistres de location sur piste viennent d&apos;une pression restée
            réglée pour le bitume sur la tôle ondulée. Ajustez-la à chaque changement de
            revêtement, et regonflez toujours avant de reprendre le bitume.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TYRE_PRESSURE.map((t, i) => (
            <Reveal
              key={t.surface}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {t.surface}
              </h3>
              <p className="mt-2 font-serif text-lg italic text-charcoal">{t.psi}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{t.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Quel loueur choisir concrètement</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {RENTAL_COMPANIES.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 60}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[14px] font-bold text-charcoal">{r.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">
            Les règles que les habitués de l'autotour ne cessent de répéter
          </h2>
          <ul className="mt-5 space-y-3">
            {RULES.map((item) => (
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
            href="/fr/namibia-without-4x4"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            La Namibie sans 4x4
          </Link>
        </Reveal>
      </section>
    </>
  );
}
