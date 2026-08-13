import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Lista bagagli per la Namibia";
const DESCRIPTION =
  "Cosa richiedono davvero il caldo, la polvere e i grandi sbalzi di temperatura tra giorno e notte della Namibia: una lista bagagli pratica per un viaggio in autotour.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-packing-list",
    languages: {
      en: "/namibia-packing-list",
      de: "/de/namibia-packing-list",
      nl: "/nl/namibia-packing-list", fr: "/fr/namibia-packing-list",
        it: "/it/namibia-packing-list",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "Migliori lodge in Namibia", href: "/it/best-lodges-in-namibia" },
  { title: "Soggiornare a Etosha", href: "/it/where-to-stay/etosha" },
  { title: "Soggiornare a Sossusvlei", href: "/it/where-to-stay/sossusvlei" },
  { title: "Guida all'autotour in Namibia", href: "/it/namibia-self-drive-guide" },
  { title: "Periodo migliore per visitare la Namibia", href: "/it/best-time-to-visit-namibia" },
  { title: "Requisiti visto per la Namibia", href: "/it/namibia-visa-requirements" },
  { title: "La Namibia è sicura? Sicurezza e salute", href: "/it/namibia-safety-and-health" },
  { title: "Quanto costa un viaggio in Namibia?", href: "/it/namibia-trip-cost" },
  { title: "Guida alla fauna namibiana", href: "/it/namibia-wildlife-guide" },
];

const malariaItem = (
  <>
    Una profilassi antimalarica (la doxiciclina o l&apos;associazione
    atovaquone-proguanil/Malarone sono le due opzioni più spesso prescritte) se il vostro
    itinerario attraversa le regioni a rischio: Kavango, Kunene, Ohangwena, Omaheke, Omusati,
    Oshana, Oshikoto, Otjozondjupa e Zambesi, con un rischio più alto durante la stagione delle
    piogge. Consultate la nostra{" "}
    <Link href="/it/namibia-safety-and-health" className="font-semibold text-rust hover:text-rust-dark">
      guida sicurezza e salute
    </Link>{" "}
    per il dettaglio regione per regione, e fate confermare il farmaco da un medico specializzato
    in medicina dei viaggi
  </>
);

const CATEGORIES = [
  {
    title: "Abbigliamento",
    items: [
      "Abbigliamento a strati: le giornate desertiche possono superare i 35°C mentre le notti scendono sotto i 10°C, a volte vicino al gelo in inverno (giugno-agosto)",
      "Abbigliamento dai colori neutri per i game drive (evitate il bianco brillante o il nero, che mostrano la polvere e trattengono il calore)",
      "Un vero cappello a tesa larga e occhiali da sole polarizzati: il sole è implacabile, anche durante la stagione verde",
      "Una giacca calda o un pile per i game drive del mattino presto e le notti nel deserto, anche in estate",
      "Un buff o scaldacollo: il capo più utile nelle giornate su piste in ghiaia, che funge sia da maschera antipolvere, sia da protezione solare, sia da calore all'alba",
      "Pantaloni ad asciugatura rapida e scarpe chiuse invece dei sandali non appena si lascia l'asfalto: ghiaia, spine e sabbia soffice penalizzano i piedi scoperti",
    ],
  },
  {
    title: "Salute e praticità",
    items: [
      "Una crema solare ad alta protezione e un burrocacao: l'aria secca e l'altitudine aumentano entrambe l'esposizione ai raggi UV",
      "Un kit di primo soccorso di base e i vostri farmaci personali, dato quanto alcuni lodge siano lontani da una farmacia",
      malariaItem,
      "Borracce riutilizzabili: portate 2-5 litri a persona sui tratti isolati dell'autotour",
    ],
  },
  {
    title: "Specifico per l'autotour",
    items: [
      "Una mappa fisica, stampata o scaricata offline: consultate la nostra guida alla connettività per capire perché non potete contare sulla rete",
      "Un kit di attrezzi di base e un kit di riparazione pneumatici se il vostro noleggio non ne include già uno, dato che danni a pneumatici e parabrezza sulle piste in ghiaia sono il sinistro più frequente nei noleggi",
      "Contanti (dollari namibiani o rand sudafricani) per le stazioni di servizio e i biglietti d'ingresso ai parchi (280 N$/persona/giorno a Etosha e Namib-Naukluft), dove i terminali per carte sono poco affidabili",
      "Sacchetti antipolvere o sacche stagne per l'attrezzatura fotografica e l'elettronica durante i percorsi su piste in ghiaia: la polvere fine namibiana si infiltra in cerniere, porte e attacchi degli obiettivi",
    ],
  },
  {
    title: "Elettronica ed energia",
    items: [
      "Una torcia frontale con batterie di riserva: molti lodge isolati e campi nel deserto funzionano a generatore o a energia solare in fasce orarie fisse invece che con una rete elettrica continua, e tolgono la corrente di notte",
      "Un adattatore universale per le prese namibiane di tipo D e M (220V), più una power bank: le finestre di ricarica nei campi isolati sono limitate e condivise",
      "Un telefono con le mappe scaricate in anticipo per l'uso offline, e una mappa cartacea di riserva: il segnale mobile scompare per lunghi tratti fuori dalle città",
    ],
  },
  {
    title: "Fotografia",
    items: [
      "Un treppiede se prevedete osservazione delle stelle o astrofotografia: consultate la nostra guida dedicata",
      "Batterie e schede di memoria di riserva: le possibilità di ricarica sono limitate nei campi isolati",
      "Un panno per obiettivi e una pompetta soffiante: la polvere delle piste in ghiaia si infiltra ovunque",
    ],
  },
];

const FAQS = [
  {
    q: "Quanta acqua devo portare per un autotour in Namibia?",
    a: "Prevedete almeno 2-5 litri a persona per qualsiasi tratto isolato, di più nei mesi più caldi. Non è solo una questione di comodità: le stazioni di servizio e i servizi sono realmente molto distanti tra loro, a volte oltre 250 km su tratti come la Skeleton Coast, il Kaokoland o la strada per il Fish River Canyon, e portare acqua è un consiglio standard in caso di guasto, non un'esagerazione.",
  },
  {
    q: "Servono vestiti caldi in un paese desertico?",
    a: "Sì, e questo sorprende molti viaggiatori alla prima esperienza. Le regioni desertiche della Namibia possono passare da oltre 35°C di giorno a meno di 10°C di notte, e in inverno (giugno-agosto) le notti possono avvicinarsi al gelo in luoghi come Sossusvlei. Gli strati non sono facoltativi, sono indispensabili, e un buff o scaldacollo copre sia la polvere sia il freddo dell'alba in un unico accessorio.",
  },
  {
    q: "Che colori indossare durante i game drive?",
    a: "Toni neutri e tenui (kaki, oliva, sabbia) invece di bianco brillante, nero o colori molto scuri, che mostrano rapidamente la polvere e possono risultare più evidenti alla fauna a distanza ravvicinata.",
  },
  {
    q: "È necessario portare un trattamento antimalarico nei bagagli?",
    a: "Dipende dal vostro itinerario specifico e dalle date: le indicazioni attuali dei CDC statunitensi segnalano un rischio di malaria nelle regioni namibiane di Kavango, Kunene, Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa e Zambesi, più alto durante la stagione delle piogge (circa da novembre ad aprile). La doxiciclina e l'associazione atovaquone-proguanil (Malarone) sono le due opzioni di profilassi più comunemente raccomandate. Consultate la nostra guida sicurezza e salute per il dettaglio regione per regione, e fate confermare il farmaco e il dosaggio esatti da un medico specializzato in medicina dei viaggi, invece di dare per scontato in un senso o nell'altro.",
  },
  {
    q: "Che adattatore di corrente serve per la Namibia?",
    a: "La Namibia utilizza prese di tipo D e M a 220V/50Hz, le stesse grandi spine rotonde a tre poli del Sudafrica. Un adattatore universale copre entrambe. La maggior parte dei caricabatterie per telefoni, fotocamere e computer portatili sono a doppio voltaggio (cercate la dicitura «100-240V» stampata sull'adattatore), quindi vi servirà solo la forma della spina, non un convertitore di tensione.",
  },
];

export default function PackingListPageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Lista bagagli", url: `${SITE_URL}/it/namibia-packing-list` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guida
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Lista bagagli per la Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Il caldo del deserto namibiano passa da oltre 35°C di giorno a meno di 10°C di notte (a
          volte vicino al gelo in inverno), e la polvere delle piste in ghiaia si infiltra
          ovunque. È questo che determina davvero questa lista, non una checklist safari generica.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-lg font-bold text-charcoal">{cat.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                    <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
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
            href="/it/namibia-connectivity"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            SIM, eSIM e connettività
          </Link>
        </Reveal>
      </section>
    </>
  );
}
