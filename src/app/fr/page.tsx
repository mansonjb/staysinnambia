import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AvailabilityBadge, CardArrow, CardCTA, PriceTierBadge, SaveButton } from "@/components/card-arrow";
import { faqJsonLd, JsonLd, websiteJsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { Stay22Map } from "@/components/stay22-map";
import { featuredLodgesFr, regionsFr, selfDriveRoutesFr } from "@/lib/data.fr";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";

const TITLE = "Namibia Stays : séjours d'exception dans toute la Namibie";
const DESCRIPTION =
  "Guides indépendants des lodges, camps et hôtels de Namibie : où séjourner à Etosha, Sossusvlei, Damaraland, la Skeleton Coast et au-delà.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr",
    languages: { en: "/", de: "/de", nl: "/nl", fr: "/fr" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/fr",
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const HOME_FAQS_NL = [
  {
    q: "Combien de jours faut-il prévoir pour la Namibie ?",
    a: "Dix à quatorze jours suffisent pour la boucle classique (Etosha, Sossusvlei, Swakopmund et un détour par le Damaraland ou le Fish River Canyon) sans se presser. Une semaine est envisageable en se limitant à deux ou trois régions plutôt qu'au circuit complet ; trois semaines laissent de la place pour la Skeleton Coast ou la bande de Caprivi. Consultez nos itinéraires par durée pour un déroulé jour par jour.",
  },
  {
    q: "Quelle est la meilleure période pour visiter la Namibie ?",
    a: "De mai à octobre, la saison sèche, l'observation de la faune est la plus fiable car les animaux se rassemblent autour des points d'eau. De novembre à avril, le paysage est plus vert, avec des ciels spectaculaires et une meilleure observation des oiseaux, mais la faune se disperse davantage et certaines routes peuvent être affectées par les pluies.",
  },
  {
    q: "Ai-je besoin d'un visa pour la Namibie ?",
    a: "Cela dépend de votre nationalité : certains pays sont exemptés de visa, et la plupart des autres sont éligibles à un visa à l'arrivée (Visa on Arrival), qui depuis avril 2025 doit être demandé en ligne avant le départ plutôt que délivré à la frontière.",
  },
  {
    q: "La Namibie est-elle sûre pour les voyageurs ?",
    a: "Oui, selon les standards régionaux, c'est l'un des pays les plus sûrs d'Afrique australe : les vrais risques concernent la sécurité routière sur les itinéraires en autonomie et la petite délinquance urbaine ordinaire, pas la criminalité violente ciblant les voyageurs.",
  },
  {
    q: "Faut-il un 4x4 pour conduire soi-même en Namibie ?",
    a: "Pas pour l'itinéraire classique : Etosha, Sossusvlei, Swakopmund et le principal réseau de pistes en gravier sont praticables avec un 2x4 bien équipé. Le 4x4 devient utile dans le Damaraland, le Kaokoland et partout en dehors des routes C entretenues.",
  },
];

const CHIP_TONES = [
  "bg-rust/10 text-rust",
  "bg-olive/10 text-olive",
  "bg-sand-dark/20 text-sand-dark",
];

const BADGE_TONES = ["bg-rust text-ivory", "bg-olive text-ivory", "bg-sand-dark text-charcoal"];

const STATS = [
  { value: "9", label: "Régions" },
  { value: "40+", label: "Lodges et camps" },
  { value: "100%", label: "Indépendant" },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1505598872760-6090aa9ed603?q=80&w=2400&auto=format&fit=crop";

export default function HomeFr() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd(HOME_FAQS_NL)} />
      {/* Hero */}
      <section className="bg-white pb-8 pt-14 sm:pt-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-rust">
                <LogoMark className="h-4 w-4" />
                Namibia Stays
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-olive/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-olive">
                Lonely Planet Best in Travel 2026
              </span>
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
              Trouvez votre séjour idéal en{" "}
              <span className="bg-gradient-to-r from-rust via-sand-dark to-olive bg-clip-text text-transparent">
                Namibie
              </span>
              .
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal/70">
              Des recommandations indépendantes de lodges, camps de safari et séjours
              inoubliables, dans neuf des régions les plus extraordinaires du pays, désignée par
              Lonely Planet comme l'une des meilleures destinations de 2026, pour ses éléphants
              adaptés au désert et son tourisme axé sur la conservation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/fr/where-to-stay/namibia"
                className="rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory shadow-lg transition-colors hover:bg-rust-dark"
              >
                Découvrir la Namibie
              </Link>
              <Link
                href="/fr/where-to-stay/namibia"
                className="rounded-full border border-charcoal/20 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors hover:border-charcoal/40"
              >
                Où séjourner
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {["Aucun faux avis", "Lien direct vers le lodge ou le partenaire", "Mis à jour pour 2026"].map(
                (label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-olive"
                  >
                    <MetaIcon name="check" className="h-4 w-4" />
                    {label}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 flex max-w-md gap-8 border-t border-charcoal/10 pt-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-charcoal sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-charcoal/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl lg:aspect-[5/4]">
            <Image
              src={HERO_IMAGE}
              alt="Vue aérienne de la ceinture de dunes rouges dans le désert du Namib"
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Manifesto strip */}
      <section className="bg-white pb-16 pt-16 sm:pb-20 sm:pt-20">
        <Reveal className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <p className="font-serif text-xl italic leading-relaxed text-charcoal sm:text-2xl">
            Ceci n'est pas une plateforme de réservation. C'est la ressource que nous aurions
            aimé avoir avant notre propre premier voyage en Namibie : où séjourner, quand
            partir, et combien de nuits chaque région mérite vraiment.
          </p>
        </Reveal>
      </section>

      {/* Editorial intro */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 sm:px-10 sm:pb-20">
        <Reveal className="mx-auto grid max-w-4xl grid-cols-1 gap-6 text-[15px] leading-relaxed text-charcoal/70 sm:grid-cols-2">
          <p>
            La Namibie ne récompense pas un point d'ancrage fixe, elle récompense le mouvement.
            La plupart des voyages fonctionnent comme une boucle au départ de Windhoek à travers
            deux, trois ou quatre régions, et la saison du voyage détermine en partie quelles
            régions valent le détour. Nous avons construit ce site région par région, afin que
            vous puissiez voir exactement où séjourner et combien de nuits chaque région mérite
            réellement, plutôt qu'une simple liste d'hôtels sans aucun sens de la géographie du
            pays.
          </p>
          <p>
            La majeure partie de la Namibie se prête bien à l'autonomie au volant, et chaque
            recommandation ici est choisie uniquement selon l'emplacement et le service, jamais
            selon la commission. Commencez par un{" "}
            <Link href="/fr/itineraries" className="font-medium text-rust hover:text-rust-dark">
              itinéraire selon la durée
            </Link>
            , si vous connaissez déjà vos dates, ou parcourez par{" "}
            <Link href="/fr/where-to-stay/namibia" className="font-medium text-rust hover:text-rust-dark">
              région
            </Link>
            , si vous êtes encore en train de définir votre itinéraire.
          </p>
        </Reveal>
      </section>

      {/* Choose a Region */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionEyebrow label="Choisissez une région" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Neuf régions, un pays extraordinaire
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regionsFr.map((region, i) => (
            <Reveal key={region.slug} delay={(i % 3) * 60}>
              <Link
                href={`/fr/where-to-stay/${region.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={region.image}
                    alt={region.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] shadow-sm ${BADGE_TONES[i % BADGE_TONES.length]}`}
                  >
                    {String(i + 1).padStart(2, "0")} &middot; {region.name}
                  </span>
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-ivory/90 px-2.5 py-1 text-[11px] font-semibold text-charcoal/70 shadow-sm">
                    <MetaIcon name="clock" className="h-3.5 w-3.5" />
                    {region.recommendedStay}
                  </span>
                  <SaveButton className="absolute bottom-3 right-3" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-2xl italic text-charcoal">{region.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {region.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {region.bestFor.split(", ").map((tag, ti) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${CHIP_TONES[ti % CHIP_TONES.length]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-end border-t border-charcoal/10 pt-4">
                    <CardCTA label="Voir les séjours" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Namibia at a glance */}
      <section className="bg-sand/20 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <Reveal>
            <SectionEyebrow label="La Namibie en un coup d'œil" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Chaque région, une carte
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/60">
              Chaque repère correspond à un séjour réel et réservable, proposé par notre
              partenaire de réservation Stay22. Dézoomez depuis Windhoek pour voir le pays
              entier, ou accédez directement à une région ci-dessous.
            </p>
          </Reveal>

          <Reveal className="mt-8">
            <Stay22Map lat={-22.5609} lng={17.0658} label="Namibia" zoom={9} />
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-2">
            {regionsFr.map((r) => (
              <Link
                key={r.slug}
                href={`/fr/where-to-stay/${r.slug}`}
                className="rounded-full bg-white px-4 py-2 text-[13px] font-medium text-charcoal/70 shadow-sm transition-colors hover:text-rust"
              >
                {r.name}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Featured Lodges */}
      <section className="bg-sand/20 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <Reveal>
            <SectionEyebrow label="Lodges à la une" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Sélectionnés, pas sponsorisés
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/60">
              Pas de prix. Pas de faux avis. Chaque séjour ci-dessous est choisi uniquement sur
              son mérite.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuredLodgesFr.map((lodge, i) => (
              <Reveal key={lodge.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/fr/lodges/${lodge.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={lodge.image}
                      alt={lodge.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-rust px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ivory shadow-sm">
                      {lodge.region}
                    </span>
                    <span
                      className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold shadow-sm ${BADGE_TONES[(i + 1) % BADGE_TONES.length]}`}
                    >
                      {lodge.highlights[0]}
                    </span>
                    <SaveButton className="absolute bottom-3 right-3" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-2xl italic text-charcoal">{lodge.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                      {lodge.description}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5 text-[13px] text-charcoal/60">
                      <MetaIcon name="pin" className="h-4 w-4 text-rust" />
                      {lodge.region}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {lodge.bestFor.split(", ").map((tag, ti) => (
                        <span
                          key={tag}
                          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${CHIP_TONES[ti % CHIP_TONES.length]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-4 space-y-1.5 border-t border-charcoal/10 pt-4">
                      {lodge.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-[13px] text-charcoal/70">
                          <MetaIcon name="check" className="h-3.5 w-3.5 shrink-0 text-olive" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AvailabilityBadge label="Vérifier la disponibilité" />
                        <PriceTierBadge tier={lodge.priceTier} />
                      </div>
                      <CardCTA label="Voir le lodge" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Self-drive Routes */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionEyebrow label="Itinéraires en autonomie" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Construisez votre itinéraire
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {selfDriveRoutesFr.map((route, i) => (
            <Reveal key={route.days} delay={i * 60}>
              <Link
                href={`/fr/itineraries/${route.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={route.image}
                    alt={route.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-3xl font-bold text-ivory">
                    {route.days}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-charcoal/40">
                    jours : {route.title}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {route.description}
                  </p>
                  <p className="mt-4 text-[13px] text-charcoal/50">{route.stops}</p>
                  <div className="mt-5 flex justify-end border-t border-charcoal/10 pt-4">
                    <CardArrow />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Popular links */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionEyebrow label="Guides populaires" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Commencez ici
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { title: "Meilleurs lodges de Namibie", href: "/fr/best-lodges-in-namibia" },
            { title: "Où séjourner à Etosha", href: "/fr/where-to-stay/etosha" },
            { title: "Où séjourner à Sossusvlei", href: "/fr/where-to-stay/sossusvlei" },
            { title: "Tous les itinéraires", href: "/fr/itineraries" },
          ].map((guide, i) => (
            <Reveal key={guide.href} delay={i * 40}>
              <Link
                href={guide.href}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="font-serif text-xl italic text-charcoal">{guide.title}</span>
                <CardArrow />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Homepage FAQ */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionEyebrow label="Planifier la Namibie" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Questions rapides, réponses claires
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4">
          {HOME_FAQS_NL.map((faq, i) => (
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

      {/* Closing CTA */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 sm:px-10 sm:pb-28">
        <Reveal className="rounded-3xl bg-rust px-6 py-16 text-center sm:px-16 sm:py-20">
          <p className="text-[13px] uppercase tracking-[0.3em] text-ivory/70">
            Vous ne savez pas encore par où commencer ?
          </p>
          <h2 className="mx-auto mt-5 max-w-xl text-3xl font-bold tracking-tight text-ivory sm:text-4xl">
            Dites-nous comment vous voulez voyager.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-ivory/80">
            Jours disponibles, rythme de voyage, et si la faune ou les paysages comptent le plus
            pour vous : parcourez nos régions et nos séjours pour trouver votre itinéraire.
          </p>
          <Link
            href="/fr/where-to-stay/namibia"
            className="mt-8 inline-block rounded-full bg-ivory px-8 py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-white"
          >
            Planifier mon voyage
          </Link>
        </Reveal>
      </section>
    </>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
      <LogoMark className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
}
