import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "À propos de Namibia Stays";
const DESCRIPTION =
  "Comment Namibia Stays est construit : comment nous choisissons les lodges, pourquoi il n'y a ni prix ni notation par étoiles, et comment nous tenons les informations à jour.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/fr/about", languages: { en: "/about", de: "/de/about", nl: "/nl/about", fr: "/fr/about", it: "/it/about" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function AboutPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "À propos", url: `${SITE_URL}/fr/about` },
        ])}
      />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          À propos
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Comment Namibia Stays est construit
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Nous ne sommes pas une agence de voyage et nous n'avons pas personnellement séjourné
          dans chaque lodge présenté sur ce site. Voici précisément ce que nous faisons à la
          place, pour que vous sachiez ce que vous lisez.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Comment nous choisissons ce que nous listons</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Chaque lodge et chaque région sur Namibia Stays est étudié à partir de sources
              réelles et publiques : sites des exploitants et des lodges, offices de tourisme
              nationaux et régionaux, guides de voyage reconnus et reportages de voyage
              indépendants. Nous rassemblons et recoupons ces informations pour déterminer ce qui
              mérite réellement d'être listé, plutôt que de publier un compte-rendu personnel
              d'un séjour effectué.
            </p>
          </Reveal>
          <Reveal delay={60} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Pourquoi il n'y a ni prix ni notation par étoiles</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Les prix changent constamment et nous ne pouvons pas vérifier de manière
              indépendante les avis des clients pour des établissements où nous n'avons pas
              nous-mêmes séjourné, donc nous ne publions ni l'un ni l'autre. Là où la
              disponibilité et les tarifs en temps réel existent, nous renvoyons vers notre
              partenaire de réservation Stay22, plutôt que d'afficher sur ce site un chiffre qui
              pourrait déjà être dépassé au moment où vous le lisez. Les repères €&ndash;€€€€ que
              vous verrez sur les fiches lodge indiquent une catégorie de prix générale, fondée
              sur la manière dont l'exploitant positionne l'établissement, pas un tarif en direct
              : vérifiez auprès du lodge ou de Stay22 le coût réel de la réservation.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Aucun placement payant</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Nous percevons une commission lorsque vous réservez un séjour via un lien de ce
              site. Cela n'influence jamais les lodges que nous mettons en avant ni la façon dont
              nous les décrivons. Rien ici ne figure parce qu'un établissement a payé pour cela.
            </p>
          </Reveal>
          <Reveal delay={180} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Maintenir les informations à jour</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Les règles qui concernent les voyages en Namibie évoluent : frais d'entrée dans les
              parcs, conditions d'entrée, accès routier, permis de randonnée. Lorsque nous mettons
              à jour une page pour un changement réel, nous l'indiquons sur la page elle-même,
              avec la date. Nous préférons signaler un élément comme sensible au temps plutôt que
              de le laisser devenir obsolète en silence.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <div className="flex items-start gap-3">
            <MetaIcon name="check" className="mt-1 h-5 w-5 shrink-0 text-olive" />
            <p className="text-[14px] leading-relaxed text-charcoal/70">
              Vous avez repéré une information obsolète, ou un lodge qui a fermé ou changé de
              propriétaire ? Nous serions vraiment ravis de le savoir. Consultez{" "}
              <Link href="/fr/best-lodges-in-namibia" className="font-semibold text-rust hover:text-rust-dark">
                les meilleurs lodges de Namibie
              </Link>{" "}
              ou commencez par{" "}
              <Link href="/fr/where-to-stay/namibia" className="font-semibold text-rust hover:text-rust-dark">
                où séjourner en Namibie
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
