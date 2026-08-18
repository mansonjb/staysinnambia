import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { EsimWidget } from "@/components/esim-widget";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "SIM e eSIM in Namibia";
const DESCRIPTION =
  "Quale operatore usare, dove avrete davvero campo e dove non ne avrete affatto: una guida pratica alla connettività per l'autotour in Namibia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-connectivity",
    languages: {
      en: "/namibia-connectivity",
      de: "/de/namibia-connectivity",
      nl: "/nl/namibia-connectivity", fr: "/fr/namibia-connectivity",
        it: "/it/namibia-connectivity",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "Migliori lodge della Namibia", href: "/it/best-lodges-in-namibia" },
  { title: "Dove alloggiare a Etosha", href: "/it/where-to-stay/etosha" },
  { title: "Dove alloggiare a Sossusvlei", href: "/it/where-to-stay/sossusvlei" },
  { title: "Viaggio in autonomia in Namibia", href: "/it/namibia-self-drive-guide" },
  { title: "Periodo migliore per visitare la Namibia", href: "/it/best-time-to-visit-namibia" },
  { title: "Requisiti visto per la Namibia", href: "/it/namibia-visa-requirements" },
  { title: "La Namibia è sicura? Sicurezza e salute", href: "/it/namibia-safety-and-health" },
  { title: "Quanto costa un viaggio in Namibia?", href: "/it/namibia-trip-cost" },
  { title: "Guida alla fauna namibiana", href: "/it/namibia-wildlife-guide" },
];

const COVERAGE = [
  {
    area: "Windhoek, Swakopmund, Walvis Bay",
    signal: "Buona 4G MTC, abbastanza affidabile per chiamate, mappe e streaming.",
  },
  {
    area: "Etosha (campi e strade principali)",
    signal: "Discontinuo ma presente: la maggior parte dei campi (Okaukuejo, Halali, Namutoni) ha il wifi alla reception, anche dove il segnale mobile è debole o assente lungo gli anelli di pista circostanti.",
  },
  {
    area: "Sossusvlei, Damaraland, Spitzkoppe",
    signal: "Debole o assente per lunghi tratti, soprattutto fuori dalle strade C. Scaricate le mappe offline prima di lasciare la costa, non una volta sulla pista D che porta al Damaraland.",
  },
  {
    area: "Skeleton Coast, Kaokoland remoto (compresa la deviazione per Opuwo)",
    signal: "Aspettatevi zero segnale MTC o TN Mobile per intere giornate: è normale, non un guasto di rete, e vale anche per le eSIM che passano sulle stesse antenne.",
  },
];

const FAQS = [
  {
    q: "Quale operatore è il migliore per i turisti in Namibia?",
    a: "MTC è l'operatore dominante in Namibia e offre generalmente la copertura più ampia lungo i principali itinerari turistici e nelle città; Telecom Namibia (tramite TN Mobile) è l'alternativa. Nessuno dei due ha una copertura significativa nelle zone desertiche e costiere più remote, inclusa la Skeleton Coast, il Namib profondo e la maggior parte del Kaokoland: è un limite legato al territorio e alle infrastrutture, non una scelta di operatore risolvibile cambiando provider.",
  },
  {
    q: "Quanto costa una SIM turistica MTC?",
    a: "MTC vende due pacchetti specifici per turisti, entrambi disponibili al suo chiosco in aeroporto: un pacchetto Leisure a 349 N$ per 14 giorni con 10,1 GB di dati più un po' di credito per chiamate e SMS internazionali, e un pacchetto Premium a 659 N$ per 30 giorni con 20,1 GB di dati e più credito per chiamate. Una semplice SIM prepagata con un pacchetto dati separato costa generalmente meno se siete disposti a ricaricarla da soli, ma i pacchetti turistici vi risparmiano la seccatura fin dal primo giorno.",
  },
  {
    q: "Posso acquistare una SIM in aeroporto?",
    a: "Sì, MTC ha un chiosco nell'area arrivi dell'aeroporto internazionale Hosea Kutako, ed è il modo più semplice per connettersi prima di mettersi in viaggio. Portate con voi il passaporto; la registrazione di una SIM locale richiede generalmente un documento d'identità, e i pacchetti turistici vengono attivati sul posto.",
  },
  {
    q: "L'eSIM funziona bene in Namibia, ed è più economica di una SIM locale?",
    a: "Funziona, ma raramente è più economica. I fornitori di eSIM internazionali passano sulle stesse antenne MTC o Telecom Namibia di una SIM fisica, quindi la copertura è identica, e i piani partono in genere da circa 9,50 $ per una settimana di dati. Il problema è il prezzo per gigabyte: i dati eSIM costano spesso da due a tre volte in più di un pacchetto prepagato MTC per lo stesso volume. Ciò per cui pagate è la comodità di arrivare già connessi invece di fare la fila al chiosco dell'aeroporto, non una rete migliore.",
  },
  {
    q: "Avrò campo per tutto l'itinerario dell'autotour?",
    a: "No, e non bisogna contarci nella pianificazione. Sossusvlei, il Damaraland, Spitzkoppe, la Skeleton Coast e il Kaokoland remoto hanno tutti lunghi tratti, a volte intere giornate di guida, completamente privi di segnale su entrambi gli operatori. Scaricate Google Maps offline per il vostro itinerario, salvate le prenotazioni dei lodge in PDF, e considerate la connettività un fenomeno legato a città e campi, non ai tratti intermedi.",
  },
];

export default function ConnectivityPageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Connettività", url: `${SITE_URL}/it/namibia-connectivity` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guida
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          SIM, eSIM e connettività in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La versione onesta: avrete un segnale discreto nelle città, discontinuo o assente
          ovunque altrove. Pianificate di conseguenza invece di combatterlo.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {COVERAGE.map((c, i) => (
            <Reveal
              key={c.area}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h2 className="text-[14px] font-bold text-charcoal">{c.area}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{c.signal}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Prima di lasciare la costa</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Acquistate una SIM MTC al chiosco dell'aeroporto Hosea Kutako (349 N$ per 14 giorni / 10,1 GB, o 659 N$ per 30 giorni / 20,1 GB), oppure verificate che il vostro fornitore di eSIM copra specificamente la Namibia prima di affidarvi a essa per i dati invece che a una SIM fisica",
              (
                <>
                  Scaricate in anticipo le mappe offline per l&apos;intero itinerario
                  dell&apos;autotour. La nostra{" "}
                  <Link href="/it/namibia-self-drive-guide" className="font-semibold text-rust hover:text-rust-dark">
                    guida all&apos;autotour
                  </Link>{" "}
                  copre il resto della logistica pre-partenza
                </>
              ),
              "Salvate le conferme dei lodge e le indicazioni stradali in PDF o screenshot, non solo come link via email",
              "Informate qualcuno del vostro itinerario giornaliero approssimativo se guidate da soli su tratti isolati",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-charcoal">Prenota una eSIM per la Namibia</h2>
          <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Per arrivare già connessi senza fare la fila al chiosco dell&apos;aeroporto,
            confronta e acquista una eSIM direttamente qui sotto.
          </p>
          <div className="mt-6">
            <EsimWidget locale="it" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Domande frequenti
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
            href="/it/namibia-packing-list"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Lista bagagli per la Namibia
          </Link>
        </Reveal>
      </section>
    </>
  );
}
