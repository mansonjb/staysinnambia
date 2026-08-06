import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AvailabilityBadge, CardArrow, CardCTA, SaveButton } from "@/components/card-arrow";
import { faqJsonLd, JsonLd, websiteJsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { Stay22Map } from "@/components/stay22-map";
import { featuredLodgesDe, regionsDe, selfDriveRoutesDe } from "@/lib/data.de";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";

const TITLE = "Namibia Stays: Aussergewöhnliche Unterkünfte in ganz Namibia";
const DESCRIPTION =
  "Unabhängige Guides zu Namibias Lodges, Camps und Hotels: wo Sie in Etosha, Sossusvlei, Damaraland, an der Skeleton Coast und darüber hinaus übernachten.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/de", languages: { en: "/", de: "/de", nl: "/nl" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/de",
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const HOME_FAQS_DE = [
  {
    q: "Wie viele Tage braucht man für Namibia?",
    a: "Zehn bis vierzehn Tage decken die klassische Route ab (Etosha, Sossusvlei, Swakopmund und ein Abstecher nach Damaraland oder zum Fish River Canyon), ohne zu hetzen. Eine Woche funktioniert, wenn Sie sich auf zwei oder drei Regionen statt der ganzen Runde beschränken; drei Wochen erlauben zusätzlich die Skeleton Coast oder den Caprivi-Streifen. Details finden Sie in unseren Reiserouten nach Länge.",
  },
  {
    q: "Was ist die beste Reisezeit für Namibia?",
    a: "Von Mai bis Oktober, der Trockenzeit, ist die Tierbeobachtung am zuverlässigsten, da sich die Tiere an den Wasserlöchern konzentrieren. November bis April ist grüner mit dramatischem Himmel und besserer Vogelbeobachtung, aber die Tiere verteilen sich weiter und manche Straßen können durch Regen beeinträchtigt sein.",
  },
  {
    q: "Braucht man ein Visum für Namibia?",
    a: "Das hängt von der Staatsangehörigkeit ab: manche Länder sind visumsbefreit, die meisten anderen können ein Visa on Arrival beantragen, das seit April 2025 vorab online beantragt werden muss statt an der Grenze ausgestellt zu werden.",
  },
  {
    q: "Ist Namibia sicher zu bereisen?",
    a: "Ja, im regionalen Vergleich gehört Namibia zu den sichereren Ländern im südlichen Afrika: die realen Risiken liegen bei der Straßenverkehrssicherheit auf Selbstfahrer-Routen und gewöhnlicher Kleinkriminalität in Städten, nicht bei gewaltsamer Kriminalität gegen Reisende.",
  },
  {
    q: "Braucht man einen 4x4 für eine Selbstfahrer-Reise durch Namibia?",
    a: "Für die klassische Route nicht: Etosha, Sossusvlei, Swakopmund und das Hauptnetz an Schotterstraßen sind mit einem gut ausgestatteten 2x4 machbar. Ein 4x4 lohnt sich in Damaraland, im Kaokoland und überall abseits der gegradeten C-Straßen.",
  },
];

const CHIP_TONES = [
  "bg-rust/10 text-rust",
  "bg-olive/10 text-olive",
  "bg-sand-dark/20 text-sand-dark",
];

const BADGE_TONES = ["bg-rust text-ivory", "bg-olive text-ivory", "bg-sand-dark text-charcoal"];

const STATS = [
  { value: "9", label: "Regionen" },
  { value: "40+", label: "Lodges & Camps" },
  { value: "100%", label: "Unabhängig" },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1505598872760-6090aa9ed603?q=80&w=2400&auto=format&fit=crop";

export default function HomeDe() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd(HOME_FAQS_DE)} />
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
              Finden Sie Ihre perfekte Unterkunft in{" "}
              <span className="bg-gradient-to-r from-rust via-sand-dark to-olive bg-clip-text text-transparent">
                Namibia
              </span>
              .
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal/70">
              Unabhängige Empfehlungen für Lodges, Safari-Camps und unvergessliche Unterkünfte in
              neun der außergewöhnlichsten Regionen des Landes, von Lonely Planet 2026 unter die
              Top-Reiseziele gewählt, wegen seiner wüstenangepassten Elefanten und
              naturschutzorientierten Tourismus.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/de/where-to-stay/namibia"
                className="rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory shadow-lg transition-colors hover:bg-rust-dark"
              >
                Namibia entdecken
              </Link>
              <Link
                href="/de/where-to-stay/namibia"
                className="rounded-full border border-charcoal/20 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors hover:border-charcoal/40"
              >
                Unterkünfte
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {["Keine gefälschten Bewertungen", "Direkt zur Lodge oder zum Partner", "Aktualisiert für 2026"].map(
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
              alt="Luftaufnahme des roten Dünengürtels in der Namib-Wüste"
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
            Das ist keine Buchungsplattform. Es ist die Ressource, die wir uns vor unserer ersten
            eigenen Namibia-Reise gewünscht hätten: wo man übernachtet, wann man reist, und wie
            viele Nächte jede Region wirklich verdient.
          </p>
        </Reveal>
      </section>

      {/* Editorial intro */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 sm:px-10 sm:pb-20">
        <Reveal className="mx-auto grid max-w-4xl grid-cols-1 gap-6 text-[15px] leading-relaxed text-charcoal/70 sm:grid-cols-2">
          <p>
            Namibia belohnt keinen einzigen festen Standort, es belohnt Bewegung. Die meisten
            Reisen funktionieren als Rundreise ab Windhoek durch zwei, drei oder vier Regionen, und
            die Reisezeit entscheidet mit, welche Regionen die Fahrt wert sind. Wir haben diese
            Seite Region für Region aufgebaut, damit Sie genau sehen, wo Sie übernachten sollten
            und wie viele Nächte jede Region tatsächlich verdient, statt einer einzelnen Liste von
            Hotels ohne Bezug zur Geografie des Landes.
          </p>
          <p>
            Der größte Teil Namibias lässt sich gut mit dem Mietwagen bereisen, und jede Empfehlung
            hier wurde allein nach Lage und Service ausgewählt, nie nach Provisionshöhe. Beginnen
            Sie mit einer{" "}
            <Link href="/de/itineraries" className="font-medium text-rust hover:text-rust-dark">
              Reiseroute nach Länge
            </Link>
            , wenn Sie Ihre Reisedaten schon kennen, oder stöbern Sie nach{" "}
            <Link href="/de/where-to-stay/namibia" className="font-medium text-rust hover:text-rust-dark">
              Region
            </Link>
            , wenn Sie die Route noch planen.
          </p>
        </Reveal>
      </section>

      {/* Choose a Region */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionEyebrow label="Region wählen" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Neun Regionen, ein außergewöhnliches Land
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regionsDe.map((region, i) => (
            <Reveal key={region.slug} delay={(i % 3) * 60}>
              <Link
                href={`/de/where-to-stay/${region.slug}`}
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
                    <CardCTA label="Unterkünfte ansehen" />
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
            <SectionEyebrow label="Namibia im Überblick" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Jede Region, eine Karte
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/60">
              Jede Markierung ist eine echte, buchbare Unterkunft, bereitgestellt von unserem
              Buchungspartner Stay22. Zoomen Sie von Windhoek aus heraus, um das ganze Land zu
              sehen, oder springen Sie direkt zu einer Region.
            </p>
          </Reveal>

          <Reveal className="mt-8">
            <Stay22Map lat={-22.5609} lng={17.0658} label="Namibia" zoom={9} />
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-2">
            {regionsDe.map((r) => (
              <Link
                key={r.slug}
                href={`/de/where-to-stay/${r.slug}`}
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
            <SectionEyebrow label="Ausgewählte Lodges" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Kuratiert, nicht gesponsert
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/60">
              Keine Preise. Keine gefälschten Bewertungen. Jede Unterkunft unten wurde allein nach
              Qualität ausgewählt.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuredLodgesDe.map((lodge, i) => (
              <Reveal key={lodge.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/de/lodges/${lodge.slug}`}
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
                      <AvailabilityBadge label="Verfügbarkeit prüfen" />
                      <CardCTA label="Lodge ansehen" />
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
          <SectionEyebrow label="Selbstfahrer-Routen" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Ihre Reiseroute
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {selfDriveRoutesDe.map((route, i) => (
            <Reveal key={route.days} delay={i * 60}>
              <Link
                href={`/de/itineraries/${route.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-5xl font-bold text-sand-dark">{route.days}</span>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-charcoal/40">
                  Tage: {route.title}
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
          <SectionEyebrow label="Beliebt" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Hier beginnen
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { title: "Beste Lodges in Namibia", href: "/de/best-lodges-in-namibia" },
            { title: "Unterkünfte in Etosha", href: "/de/where-to-stay/etosha" },
            { title: "Unterkünfte in Sossusvlei", href: "/de/where-to-stay/sossusvlei" },
            { title: "Alle Reiserouten", href: "/de/itineraries" },
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
          <SectionEyebrow label="Namibia planen" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Kurze Fragen, klare Antworten
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4">
          {HOME_FAQS_DE.map((faq, i) => (
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
            Noch unsicher, wo Sie anfangen sollen?
          </p>
          <h2 className="mx-auto mt-5 max-w-xl text-3xl font-bold tracking-tight text-ivory sm:text-4xl">
            Sagen Sie uns, wie Sie reisen möchten.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-ivory/80">
            Verfügbare Tage, Reisetempo, und ob Tierwelt oder Landschaft wichtiger ist: schauen Sie
            sich unsere Regionen und Unterkünfte an und finden Sie Ihre Route.
          </p>
          <Link
            href="/de/where-to-stay/namibia"
            className="mt-8 inline-block rounded-full bg-ivory px-8 py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-white"
          >
            Reise planen
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
