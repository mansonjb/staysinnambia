import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Guide des coûts d'un voyage en Namibie";
const DESCRIPTION =
  "Fourchettes de coûts réalistes par personne et par jour pour un voyage en Namibie, du budget économique au luxe, et ce que l'autotour vous fait économiser par rapport à un safari accompagné.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-trip-cost",
    languages: { en: "/namibia-trip-cost", de: "/de/namibia-trip-cost", nl: "/nl/namibia-trip-cost", fr: "/fr/namibia-trip-cost" },
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

const TIERS = [
  {
    name: "Budget",
    range: "≈ 225–250 € / jour",
    desc: (
      <>
        <Link
          href="/fr/namibia-self-drive-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          Autotour
        </Link>{" "}
        avec un 2x4 compact (environ 900–1 400 N$/jour pour une Corolla Cross, une Polo Sedan ou
        une Hyundai Creta), en combinant campings NWR et privés (environ 150–500 N$ par personne)
        avec une nuit en guesthouse en ville tous les quelques jours (58–112 $ pour deux à
        Swakopmund ou Windhoek), et l&apos;essentiel des dîners préparés soi-même après un passage
        au supermarché.
      </>
    ),
  },
  {
    name: "Milieu de gamme",
    range: "≈ 325 € / jour",
    desc: "Autotour avec un 2x4 bien équipé ou un 4x4 d'entrée de gamme, ou un circuit en petit groupe, en lodges 3 étoiles et guesthouses (généralement 120–250 $/nuit pour deux), petit-déjeuner et souvent dîner inclus.",
  },
  {
    name: "Luxe",
    range: "700 €+ / jour",
    desc: "Safari fly-in ou accompagné avec guide privé, lodges design comme ceux du Namib et du Kunene, pension complète à 350–700 $+ par personne et par nuit, avec game drives, vols panoramiques ou randonnées guidées inclus.",
  },
];

const COST_LEVERS = [
  {
    title: "Location de véhicule",
    text: "Un 2x4 basique coûte environ 900–1 400 N$/jour. Un 4x4 safari entièrement équipé avec tente de toit et matériel de camping, chez un loueur comme Bushlore, tourne plutôt autour de 2 500–4 000 N$/jour selon la saison, avant réduction de franchise d'assurance. Voir notre guide de l'autotour pour ce que couvre vraiment cette franchise.",
  },
  {
    title: "Carburant",
    text: "Les prix à la pompe évoluent avec les changements de taxes gouvernementales ; début août 2026, ils tournaient autour de 24,48 N$/litre pour l'essence 95 et 26,26 N$/litre pour le diesel sur la côte, les villes de l'intérieur étant généralement un peu plus chères en raison des coûts de transport. Une boucle de deux semaines en autotour consomme facilement 4 000–6 000 N$ de carburant pour un véhicule.",
  },
  {
    title: "Droits d'entrée des parcs",
    text: "Les visiteurs internationaux paient 280 N$ par personne et par jour à Etosha et Namib-Naukluft (répartis à parts égales entre un droit d'entrée et une taxe de conservation), plus des frais de véhicule séparés de 50 N$/jour pour une voiture normale. Les enfants de 8 ans et moins entrent gratuitement ; les enfants plus âgés et les ressortissants de la SADC paient des tarifs réduits. C'est facturé par tranche de 24 heures, donc calez vos entrées pour éviter de payer une journée à peine entamée.",
  },
  {
    title: "Les 90 $ de frais de visa",
    text: "La plupart des nationalités les règlent désormais en ligne à l'avance plutôt qu'à l'arrivée. C'est un coût fixe quelle que soit la durée ou le niveau de gamme du voyage, donc il pèse proportionnellement plus sur un court séjour.",
  },
];

const FAQS = [
  {
    q: "Combien coûte un safari en Namibie par jour ?",
    a: "Environ 225-250 € par personne et par jour pour un autotour économique, autour de 325 € par jour en milieu de gamme, et 700 €+ par jour pour un safari luxe ou fly-in entièrement accompagné avec lodges tout inclus. Ce sont des estimations par personne couvrant l'hébergement, la plupart des repas et une voiture de location ou un transport accompagné ; les vols vers la Namibie sont à part.",
  },
  {
    q: "L'autotour est-il moins cher qu'un safari accompagné en Namibie ?",
    a: "Nettement : l'autotour supprime le coût d'un guide privé et d'un véhicule dédié, de loin la plus grosse dépense d'un voyage accompagné. La contrepartie, c'est votre propre temps consacré à la logistique et à la conduite. Consultez notre guide de l'autotour pour savoir ce que cela implique concrètement.",
  },
  {
    q: "Quelle monnaie utilise la Namibie ?",
    a: "Le dollar namibien (N$), arrimé 1:1 au rand sud-africain. Le rand est également largement accepté. Les cartes fonctionnent dans les villes et la plupart des lodges ; prévoyez des espèces pour les stations-service, les droits d'entrée des parcs et les zones rurales où les terminaux de paiement sont peu fiables.",
  },
  {
    q: "Quel est le principal poste de dépense d'un voyage en Namibie ?",
    a: "De loin, le niveau d'hébergement : l'écart entre une guesthouse et un lodge de luxe fly-in est souvent de 5 à 10 fois le prix par nuit. Le type de véhicule (2x4 contre 4x4 de location) et le choix entre accompagné et autotour viennent ensuite.",
  },
  {
    q: "À combien s'élèvent les droits d'entrée des parcs nationaux namibiens ?",
    a: "Ils ont fortement augmenté le 1er avril 2026, la première hausse depuis 2021, un bond de 86 % par rapport au tarif précédent. Les visiteurs internationaux paient désormais 280 N$ par personne et par jour (répartis à parts égales entre un droit d'entrée de 140 N$ et une taxe de conservation de 140 N$) dans les grands parcs comme Etosha et Namib-Naukluft, contre 150 N$ auparavant, plus des frais de véhicule séparés de 50 N$/jour pour une voiture normale (2 à 10 places). Les ressortissants de la SADC paient 180 N$ par personne et par jour, les Namibiens 60 N$, et les enfants de 8 ans et moins entrent gratuitement. Les droits sont facturés par tranche de 24 heures et non remboursables, donc prévoyez ce poste explicitement lors d'un autotour à travers plusieurs parcs.",
  },
  {
    q: "Combien coûte le carburant pour un autotour en Namibie ?",
    a: "Début août 2026, les prix à la pompe tournaient autour de 24,48 N$/litre pour l'essence 95 et 26,26 N$/litre pour le diesel sur la côte (Walvis Bay), avec une petite majoration à l'intérieur des terres. Les prix évoluent avec les changements de taxes gouvernementales plusieurs fois par an, donc prenez ces chiffres comme une photo à un instant T plutôt qu'un montant fixe. Une boucle typique de deux à trois semaines en autotour couvrant Etosha, le Damaraland, Sossusvlei et la côte consomme environ 4 000–6 000 N$ de carburant pour un véhicule.",
  },
  {
    q: "Combien coûte une location de voiture en Namibie ?",
    a: "Un 2x4 basique avec une garde au sol raisonnable (Toyota Corolla Cross, VW Polo Sedan, catégorie Hyundai Creta) coûte environ 900–1 400 N$/jour chez les loueurs locaux. Un 4x4 entièrement équipé avec tente de toit et matériel de camping, chez un spécialiste comme Bushlore ou Asco Car Hire, tourne plutôt autour de 2 500–4 000 N$/jour selon la basse ou la haute saison, avant même de choisir une option d'assurance à franchise réduite, qui coûte généralement 8–25 € de plus par jour selon jusqu'où vous voulez faire baisser la franchise standard de 20 000–40 000 N$.",
  },
];

export default function TripCostPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Coût du voyage", url: `${SITE_URL}/fr/namibia-trip-cost` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Combien coûte un voyage en Namibie ?
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La Namibie peut être une destination d'autotour vraiment abordable ou un safari de luxe
          à cinq chiffres. C'est le niveau d'hébergement choisi qui fait la différence. Voici des
          fourchettes approximatives par personne et par jour, hors vols et hors les 90 $ de{" "}
          <Link
            href="/fr/namibia-visa-requirements"
            className="font-medium text-rust hover:text-rust-dark"
          >
            frais de visa à l'arrivée
          </Link>{" "}
          que la plupart des nationalités règlent désormais en ligne à l'avance.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 80}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-xl font-bold text-charcoal">{t.name}</h2>
              <p className="mt-1 font-serif text-2xl italic text-rust">{t.range}</p>
              <p className="mt-4 text-[14px] leading-relaxed text-charcoal/70">{t.desc}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Estimations uniquement, par personne et par jour. Le coût réel varie selon la saison, la
          taille du groupe et l'itinéraire. Vols internationaux exclus.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Ce qui fait vraiment varier le prix</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Derrière les trois niveaux ci-dessus, quatre postes font l&apos;essentiel du travail.
            Bien les cerner en préparant le budget, et l&apos;estimation par jour cesse d&apos;être
            un pari.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {COST_LEVERS.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <MetaIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-olive" />
                <div>
                  <h3 className="text-[14px] font-bold text-charcoal">{c.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{c.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
            href="/fr/best-luxury-lodges"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Meilleurs lodges de luxe
          </Link>
        </Reveal>
      </section>
    </>
  );
}
