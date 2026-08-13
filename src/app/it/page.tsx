import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AvailabilityBadge, CardArrow, CardCTA, PriceTierBadge, SaveButton } from "@/components/card-arrow";
import { faqJsonLd, JsonLd, websiteJsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { Stay22Map } from "@/components/stay22-map";
import { featuredLodgesIt, regionsIt, selfDriveRoutesIt } from "@/lib/data.it";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";

const TITLE = "Namibia Stays: soggiorni straordinari in tutta la Namibia";
const DESCRIPTION =
  "Guide indipendenti ai lodge, ai campi e agli hotel della Namibia: dove soggiornare a Etosha, Sossusvlei, Damaraland, la Skeleton Coast e oltre.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it",
    languages: { en: "/", de: "/de", nl: "/nl", fr: "/fr", it: "/it" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/it",
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const HOME_FAQS_NL = [
  {
    q: "Quanti giorni servono per la Namibia?",
    a: "Dieci o quattordici giorni bastano per il circuito classico (Etosha, Sossusvlei, Swakopmund e una deviazione verso il Damaraland o il Fish River Canyon) senza fretta. Una settimana è fattibile scegliendo due o tre regioni invece del circuito completo; tre settimane lasciano spazio per la Skeleton Coast o la fascia del Caprivi. Consulta i nostri itinerari per durata per uno schema giorno per giorno.",
  },
  {
    q: "Qual è il periodo migliore per visitare la Namibia?",
    a: "Da maggio a ottobre, la stagione secca, l'osservazione della fauna è più affidabile perché gli animali si concentrano intorno ai punti d'acqua. Da novembre ad aprile il paesaggio è più verde, con cieli spettacolari e un birdwatching migliore, ma la fauna si disperde maggiormente e alcune strade possono essere condizionate dalle piogge.",
  },
  {
    q: "Serve un visto per la Namibia?",
    a: "Dipende dalla nazionalità: alcuni paesi sono esenti da visto, e la maggior parte degli altri è idonea per un Visa on Arrival che, dall'aprile 2025, deve essere richiesto online prima della partenza invece che rilasciato alla frontiera.",
  },
  {
    q: "La Namibia è sicura per i viaggiatori?",
    a: "Sì, secondo gli standard regionali è uno dei paesi più sicuri dell'Africa australe: i rischi reali riguardano la sicurezza stradale sugli itinerari in autonomia e la piccola criminalità urbana comune, non la criminalità violenta rivolta ai viaggiatori.",
  },
  {
    q: "Serve un 4x4 per guidare in autonomia in Namibia?",
    a: "Non per l'itinerario classico: Etosha, Sossusvlei, Swakopmund e la rete principale di piste in ghiaia sono percorribili con un 2x4 ben equipaggiato. Il 4x4 diventa utile nel Damaraland, nel Kaokoland e ovunque al di fuori delle strade C mantenute.",
  },
];

const CHIP_TONES = [
  "bg-rust/10 text-rust",
  "bg-olive/10 text-olive",
  "bg-sand-dark/20 text-sand-dark",
];

const BADGE_TONES = ["bg-rust text-ivory", "bg-olive text-ivory", "bg-sand-dark text-charcoal"];

const STATS = [
  { value: "9", label: "Regioni" },
  { value: "40+", label: "Lodge e campi" },
  { value: "100%", label: "Indipendente" },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1505598872760-6090aa9ed603?q=80&w=2400&auto=format&fit=crop";

export default function HomeIt() {
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
              Trova il tuo soggiorno perfetto in{" "}
              <span className="bg-gradient-to-r from-rust via-sand-dark to-olive bg-clip-text text-transparent">
                Namibia
              </span>
              .
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal/70">
              Consigli indipendenti su lodge, campi safari e soggiorni indimenticabili, in nove
              delle regioni più straordinarie del paese, nominata da Lonely Planet una delle
              migliori destinazioni del 2026, per i suoi elefanti adattati al deserto e il
              turismo orientato alla conservazione.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/it/where-to-stay/namibia"
                className="rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory shadow-lg transition-colors hover:bg-rust-dark"
              >
                Esplora la Namibia
              </Link>
              <Link
                href="/it/where-to-stay/namibia"
                className="rounded-full border border-charcoal/20 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors hover:border-charcoal/40"
              >
                Dove soggiornare
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {["Nessuna recensione falsa", "Link diretto al lodge o al partner", "Aggiornato per il 2026"].map(
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
              alt="Vista aerea della fascia di dune rosse nel deserto del Namib"
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
            Questo non è una piattaforma di prenotazione. È la risorsa che avremmo voluto avere
            prima del nostro primo viaggio in Namibia: dove soggiornare, quando partire, e quante
            notti ogni regione merita davvero.
          </p>
        </Reveal>
      </section>

      {/* Editorial intro */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 sm:px-10 sm:pb-20">
        <Reveal className="mx-auto grid max-w-4xl grid-cols-1 gap-6 text-[15px] leading-relaxed text-charcoal/70 sm:grid-cols-2">
          <p>
            La Namibia non premia una base fissa, premia il movimento. La maggior parte dei
            viaggi funziona come un circuito da Windhoek attraverso due, tre o quattro regioni, e
            la stagione del viaggio determina in parte quali regioni valgono la deviazione.
            Abbiamo costruito questo sito regione per regione, così puoi vedere esattamente dove
            soggiornare e quante notti ogni regione merita davvero, invece di un semplice elenco
            di hotel senza alcun senso della geografia del paese.
          </p>
          <p>
            Gran parte della Namibia si presta bene alla guida in autonomia, e ogni consiglio qui
            è scelto unicamente in base alla posizione e al servizio, mai in base alla
            commissione. Inizia con un{" "}
            <Link href="/it/itineraries" className="font-medium text-rust hover:text-rust-dark">
              itinerario per durata
            </Link>
            , se conosci già le tue date, oppure sfoglia per{" "}
            <Link href="/it/where-to-stay/namibia" className="font-medium text-rust hover:text-rust-dark">
              regione
            </Link>
            , se stai ancora definendo il tuo percorso.
          </p>
        </Reveal>
      </section>

      {/* Choose a Region */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionEyebrow label="Scegli una regione" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Nove regioni, un paese straordinario
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regionsIt.map((region, i) => (
            <Reveal key={region.slug} delay={(i % 3) * 60}>
              <Link
                href={`/it/where-to-stay/${region.slug}`}
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
                    <CardCTA label="Vedi i soggiorni" />
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
            <SectionEyebrow label="La Namibia a colpo d'occhio" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Ogni regione, una mappa
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/60">
              Ogni indicatore corrisponde a un soggiorno reale e prenotabile, offerto dal nostro
              partner di prenotazione Stay22. Rimpicciolisci da Windhoek per vedere l&apos;intero
              paese, oppure vai direttamente a una regione qui sotto.
            </p>
          </Reveal>

          <Reveal className="mt-8">
            <Stay22Map lat={-22.5609} lng={17.0658} label="Namibia" zoom={9} />
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-2">
            {regionsIt.map((r) => (
              <Link
                key={r.slug}
                href={`/it/where-to-stay/${r.slug}`}
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
            <SectionEyebrow label="Lodge in evidenza" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Selezionati, non sponsorizzati
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/60">
              Nessun prezzo. Nessuna recensione falsa. Ogni soggiorno qui sotto è scelto
              unicamente in base al merito.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuredLodgesIt.map((lodge, i) => (
              <Reveal key={lodge.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/it/lodges/${lodge.slug}`}
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
                        <AvailabilityBadge label="Verifica disponibilità" />
                        <PriceTierBadge tier={lodge.priceTier} />
                      </div>
                      <CardCTA label="Vedi il lodge" />
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
          <SectionEyebrow label="Itinerari in autonomia" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Costruisci il tuo itinerario
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {selfDriveRoutesIt.map((route, i) => (
            <Reveal key={route.days} delay={i * 60}>
              <Link
                href={`/it/itineraries/${route.slug}`}
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
                    giorni: {route.title}
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
          <SectionEyebrow label="Guide popolari" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Inizia da qui
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { title: "I migliori lodge della Namibia", href: "/it/best-lodges-in-namibia" },
            { title: "Dove soggiornare a Etosha", href: "/it/where-to-stay/etosha" },
            { title: "Dove soggiornare a Sossusvlei", href: "/it/where-to-stay/sossusvlei" },
            { title: "Tutti gli itinerari", href: "/it/itineraries" },
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
          <SectionEyebrow label="Pianifica la Namibia" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Domande rapide, risposte chiare
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
            Non sai ancora da dove cominciare?
          </p>
          <h2 className="mx-auto mt-5 max-w-xl text-3xl font-bold tracking-tight text-ivory sm:text-4xl">
            Dicci come vuoi viaggiare.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-ivory/80">
            Giorni disponibili, ritmo di viaggio, e se la fauna o i paesaggi contano di più per
            te: sfoglia le nostre regioni e i nostri soggiorni per trovare il tuo itinerario.
          </p>
          <Link
            href="/it/where-to-stay/namibia"
            className="mt-8 inline-block rounded-full bg-ivory px-8 py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-white"
          >
            Pianifica il mio viaggio
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
