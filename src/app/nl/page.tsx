import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AvailabilityBadge, CardArrow, CardCTA, SaveButton } from "@/components/card-arrow";
import { faqJsonLd, JsonLd, websiteJsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { Stay22Map } from "@/components/stay22-map";
import { featuredLodgesNl, regionsNl, selfDriveRoutesNl } from "@/lib/data.nl";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";

const TITLE = "Namibia Stays: Buitengewone verblijven in heel Namibië";
const DESCRIPTION =
  "Onafhankelijke gidsen over Namibië's lodges, kampen en hotels: waar u kunt verblijven in Etosha, Sossusvlei, Damaraland, de Skeleton Coast en meer.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl",
    languages: { en: "/", de: "/de", nl: "/nl" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/nl",
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const HOME_FAQS_NL = [
  {
    q: "Hoeveel dagen heb je nodig voor Namibië?",
    a: "Tien tot veertien dagen dekken de klassieke rondreis (Etosha, Sossusvlei, Swakopmund en een omweg naar Damaraland of de Fish River Canyon) zonder te haasten. Een week is haalbaar als u zich beperkt tot twee of drie regio's in plaats van de volledige rondreis; drie weken laten ruimte voor de Skeleton Coast of de Caprivi-strook. Bekijk onze reisroutes per lengte voor een dag-tot-dag overzicht.",
  },
  {
    q: "Wat is de beste reistijd voor Namibië?",
    a: "Van mei tot oktober, het droge seizoen, is de dierenwaarneming het meest betrouwbaar omdat dieren zich verzamelen rond waterputten. November tot april is groener met dramatische luchten en betere vogelspotting, maar dieren verspreiden zich verder en sommige wegen kunnen door regen worden beïnvloed.",
  },
  {
    q: "Heb ik een visum nodig voor Namibië?",
    a: "Dat hangt af van uw nationaliteit: sommige landen zijn vrijgesteld van visumplicht, en de meeste andere komen in aanmerking voor een Visa on Arrival, dat sinds april 2025 online moet worden aangevraagd voor vertrek in plaats van bij de grens te worden uitgegeven.",
  },
  {
    q: "Is Namibië veilig om te bezoeken?",
    a: "Ja, naar regionale maatstaven is het een van de veiligere landen in zuidelijk Afrika: de echte risico's liggen bij verkeersveiligheid op zelfrijroutes en gewone kleine criminaliteit in steden, niet bij gewelddadige criminaliteit gericht op reizigers.",
  },
  {
    q: "Heb ik een 4x4 nodig om zelf door Namibië te rijden?",
    a: "Niet voor de klassieke route: Etosha, Sossusvlei, Swakopmund en het belangrijkste grindwegennet zijn goed te doen met een goed uitgeruste 2x4. Een 4x4 loont in Damaraland, Kaokoland en overal buiten de gegradeerde C-wegen.",
  },
];

const CHIP_TONES = [
  "bg-rust/10 text-rust",
  "bg-olive/10 text-olive",
  "bg-sand-dark/20 text-sand-dark",
];

const BADGE_TONES = ["bg-rust text-ivory", "bg-olive text-ivory", "bg-sand-dark text-charcoal"];

const STATS = [
  { value: "9", label: "Regio's" },
  { value: "40+", label: "Lodges & kampen" },
  { value: "100%", label: "Onafhankelijk" },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1505598872760-6090aa9ed603?q=80&w=2400&auto=format&fit=crop";

export default function HomeNl() {
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
              Vind uw perfecte verblijf in{" "}
              <span className="bg-gradient-to-r from-rust via-sand-dark to-olive bg-clip-text text-transparent">
                Namibië
              </span>
              .
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal/70">
              Onafhankelijke aanbevelingen voor lodges, safarikampen en onvergetelijke verblijven
              in negen van de meest buitengewone regio's van het land, door Lonely Planet 2026
              uitgeroepen tot een van de topbestemmingen, vanwege de aan de woestijn aangepaste
              olifanten en natuurbehoud-gerichte toerisme.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/nl/where-to-stay/namibia"
                className="rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory shadow-lg transition-colors hover:bg-rust-dark"
              >
                Ontdek Namibië
              </Link>
              <Link
                href="/nl/where-to-stay/namibia"
                className="rounded-full border border-charcoal/20 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors hover:border-charcoal/40"
              >
                Verblijven
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {["Geen nepbeoordelingen", "Rechtstreeks naar de lodge of partner", "Bijgewerkt voor 2026"].map(
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
              alt="Luchtfoto van de rode duinengordel in de Namib-woestijn"
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
            Dit is geen boekingsplatform. Het is de bron die we ons hadden gewenst vóór onze
            eigen eerste reis naar Namibië: waar je verblijft, wanneer je gaat, en hoeveel
            nachten elke regio echt verdient.
          </p>
        </Reveal>
      </section>

      {/* Editorial intro */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 sm:px-10 sm:pb-20">
        <Reveal className="mx-auto grid max-w-4xl grid-cols-1 gap-6 text-[15px] leading-relaxed text-charcoal/70 sm:grid-cols-2">
          <p>
            Namibië beloont geen vaste standplaats, het beloont beweging. De meeste reizen
            werken als een rondreis vanuit Windhoek door twee, drie of vier regio's, en het
            reisseizoen bepaalt mede welke regio's de rit waard zijn. We hebben deze site regio
            voor regio opgebouwd, zodat u precies kunt zien waar u moet verblijven en hoeveel
            nachten elke regio daadwerkelijk verdient, in plaats van een enkele lijst met hotels
            zonder gevoel voor de geografie van het land.
          </p>
          <p>
            Het grootste deel van Namibië is prima zelf te rijden, en elke aanbeveling hier is
            gekozen op basis van ligging en service alleen, nooit op basis van commissie.
            Begin met een{" "}
            <Link href="/nl/itineraries" className="font-medium text-rust hover:text-rust-dark">
              reisroute op lengte
            </Link>
            , als u uw data al kent, of bekijk per{" "}
            <Link href="/nl/where-to-stay/namibia" className="font-medium text-rust hover:text-rust-dark">
              regio
            </Link>
            , als u de route nog aan het uitstippelen bent.
          </p>
        </Reveal>
      </section>

      {/* Choose a Region */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionEyebrow label="Kies een regio" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Negen regio's, één buitengewoon land
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regionsNl.map((region, i) => (
            <Reveal key={region.slug} delay={(i % 3) * 60}>
              <Link
                href={`/nl/where-to-stay/${region.slug}`}
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
                    <CardCTA label="Bekijk verblijven" />
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
            <SectionEyebrow label="Namibië in één oogopslag" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Elke regio, één kaart
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/60">
              Elke pin is een echt, boekbaar verblijf, aangeboden door onze boekingspartner
              Stay22. Zoom uit vanaf Windhoek om het hele land te zien, of ga direct naar een
              regio hieronder.
            </p>
          </Reveal>

          <Reveal className="mt-8">
            <Stay22Map lat={-22.5609} lng={17.0658} label="Namibia" zoom={9} />
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-2">
            {regionsNl.map((r) => (
              <Link
                key={r.slug}
                href={`/nl/where-to-stay/${r.slug}`}
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
            <SectionEyebrow label="Uitgelichte lodges" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Samengesteld, niet gesponsord
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/60">
              Geen prijzen. Geen nepbeoordelingen. Elk verblijf hieronder is gekozen op basis van
              kwaliteit alleen.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuredLodgesNl.map((lodge, i) => (
              <Reveal key={lodge.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/nl/lodges/${lodge.slug}`}
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
                      <AvailabilityBadge label="Beschikbaarheid controleren" />
                      <CardCTA label="Bekijk lodge" />
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
          <SectionEyebrow label="Zelfrijroutes" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Uw reisroute
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {selfDriveRoutesNl.map((route, i) => (
            <Reveal key={route.days} delay={i * 60}>
              <Link
                href={`/nl/itineraries/${route.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-5xl font-bold text-sand-dark">{route.days}</span>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-charcoal/40">
                  dagen: {route.title}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/60">
                  {route.description}
                </p>
                <p className="mt-4 text-[13px] text-charcoal/50">{route.stops}</p>
                <div className="mt-5 flex justify-end border-t border-charcoal/10 pt-4">
                  <CardArrow />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Popular links */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionEyebrow label="Populair" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Begin hier
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { title: "Beste lodges in Namibië", href: "/nl/best-lodges-in-namibia" },
            { title: "Verblijven in Etosha", href: "/nl/where-to-stay/etosha" },
            { title: "Verblijven in Sossusvlei", href: "/nl/where-to-stay/sossusvlei" },
            { title: "Alle reisroutes", href: "/nl/itineraries" },
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
          <SectionEyebrow label="Namibië plannen" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Korte vragen, duidelijke antwoorden
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
            Nog niet zeker waar te beginnen?
          </p>
          <h2 className="mx-auto mt-5 max-w-xl text-3xl font-bold tracking-tight text-ivory sm:text-4xl">
            Vertel ons hoe u wilt reizen.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-ivory/80">
            Beschikbare dagen, tempo, en of dierenwaarneming of landschap belangrijker is: bekijk
            onze regio's en verblijven en vind uw route.
          </p>
          <Link
            href="/nl/where-to-stay/namibia"
            className="mt-8 inline-block rounded-full bg-ivory px-8 py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-white"
          >
            Reis plannen
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
