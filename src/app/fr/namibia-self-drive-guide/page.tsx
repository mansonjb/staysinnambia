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
  { code: "Routes A / B", desc: "Grands axes goudronnés entre les principales villes, conduite normale." },
  {
    code: "Routes C",
    desc: "Pistes en gravier nivelées, généralement bien entretenues. L'ossature de la plupart des itinéraires en autotour.",
  },
  {
    code: "Routes D",
    desc: "Pistes secondaires en gravier, plus étroites et plus accidentées. Ralentissez sur les tôles ondulées et les plaques de sable meuble.",
  },
  {
    code: "Routes F",
    desc: "Pistes 4x4, souvent accidentées ou impraticables selon la saison. Pas adaptées à une berline de location standard.",
  },
];

const RULES = [
  "Ne roulez jamais de nuit en dehors des villes et villages : le bétail, la faune sauvage et les piétons non éclairés sur la route sont la première cause d'accidents graves.",
  "Dans le nord-ouest et le sud, les stations-service sont très espacées. Faites le plein dès que le réservoir passe sous la moitié, et emportez de l'eau supplémentaire en cas de panne.",
  "Les dommages aux pneus et au pare-brise sur les pistes en gravier sont le sinistre le plus fréquent en location de voiture : vérifiez précisément ce que couvre votre franchise avant de signer.",
  "Le taux d'alcoolémie légal est de 0,05 %, contrôlé par des barrages routiers sur certains axes.",
  "Ralentissez dans les virages en gravier et sur le sable meuble : la plupart des accidents en autotour sont des tonneaux d'un seul véhicule dus à un freinage trop brusque ou à une correction excessive à vitesse élevée.",
];

const FAQS = [
  {
    q: "Ai-je besoin d'un 4x4 pour faire l'autotour en Namibie ?",
    a: "Pas pour la plupart des itinéraires classiques. Etosha, Sossusvlei, Swakopmund et le réseau de routes C sont gérables avec un 2x4 bien équipé et à bonne garde au sol. Un 4x4 devient utile pour le Damaraland, le Kaokoland, et partout où vous emprunterez des routes D ou F. Consultez notre guide dédié sur les voyages sans 4x4 pour les itinéraires précis qui le permettent.",
  },
  {
    q: "Autotour ou safari accompagné : que choisir pour un premier voyage ?",
    a: "L'autotour vous donne un contrôle total sur le rythme et le budget, et le réseau routier namibien le rend plus accessible que dans la plupart des autres pays de safari. Un voyage accompagné échange cette liberté contre la connaissance locale, l'absence de logistique à gérer, et de meilleures observations de la faune pendant les gamedrives. Beaucoup de primo-voyageurs optent pour une formule hybride : autotour entre les régions, gamedrives accompagnés à l'intérieur des parcs.",
  },
  {
    q: "À quelle distance se trouvent les stations-service en Namibie ?",
    a: "Sur les grands axes, tous les 100 à 200 km. Sur les tronçons isolés (la Skeleton Coast, certaines parties du Kaokoland, la route vers le Fish River Canyon), les distances peuvent dépasser 250 km sans aucun service. Planifiez vos arrêts essence avant de quitter chaque ville, pas quand la jauge devient basse.",
  },
  {
    q: "Que couvre réellement l'assurance de location sur les pistes en gravier ?",
    a: "L'assurance dommages standard exclut souvent, ou soumet à une franchise élevée, les impacts de pare-brise et les crevaisons dues au gravier, qui sont pourtant les deux sinistres les plus fréquents en Namibie. Demandez précisément le montant de la franchise sur piste et envisagez une option zéro franchise si elle est proposée.",
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
