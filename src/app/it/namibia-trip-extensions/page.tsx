import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Prolungare il tuo viaggio in Namibia";
const DESCRIPTION =
  "La Namibia si combina naturalmente con alcune mete vicine imperdibili: ecco come i viaggiatori prolungano davvero il loro soggiorno, e quanto costa ogni estensione in termini di tempo aggiuntivo.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-trip-extensions",
    languages: {
      en: "/namibia-trip-extensions",
      de: "/de/namibia-trip-extensions",
      nl: "/nl/namibia-trip-extensions", fr: "/fr/namibia-trip-extensions",
        it: "/it/namibia-trip-extensions",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "I migliori lodge della Namibia", href: "/it/best-lodges-in-namibia" },
  { title: "Dove alloggiare a Etosha", href: "/it/where-to-stay/etosha" },
  { title: "Dove alloggiare a Sossusvlei", href: "/it/where-to-stay/sossusvlei" },
  { title: "Guida alla guida in Namibia", href: "/it/namibia-self-drive-guide" },
  { title: "Il periodo migliore per visitare la Namibia", href: "/it/best-time-to-visit-namibia" },
  { title: "Requisiti per il visto in Namibia", href: "/it/namibia-visa-requirements" },
  { title: "La Namibia è sicura? Sicurezza e salute", href: "/it/namibia-safety-and-health" },
  { title: "Quanto costa un viaggio in Namibia?", href: "/it/namibia-trip-cost" },
  { title: "Guida alla fauna namibiana", href: "/it/namibia-wildlife-guide" },
];

const EXTENSIONS = [
  {
    place: "Cascate Vittoria (Zambia/Zimbabwe)",
    text: "L'estensione più comune dalla Namibia, generalmente in aereo anziché in auto. Un volo diretto da Windhoek all'aeroporto delle Cascate Vittoria (VFA) dura poco più di un'ora di volo, anche se il tempo reale porta a porta con uno scalo si avvicina piuttosto a mezza giornata. L'autotour è possibile ma lungo: si parla di circa 1.228 km e 12 ore di guida tra Windhoek e Katima Mulilo, all'estremità est della regione dello Zambesi (l'ex striscia di Caprivi); la maggior parte dei viaggiatori in autotour lo suddivide in 2 giorni con una notte a Rundu, prima ancora di attraversare il confine e guidare fino alle cascate stesse. Una volta lì, prevedi almeno 2 notti per vedere bene sia il lato zambiano sia quello zimbabwiano, due punti di vista realmente diversi sulle stesse cascate.",
    time: "+3-4 giorni minimo",
  },
  {
    place: "Parco nazionale di Chobe e delta dell'Okavango (Botswana)",
    text: (
      <>
        Un collegamento naturale dalla nostra regione dello Zambesi (l&apos;ex striscia di
        Caprivi), che confina direttamente con Chobe attraverso il valico di frontiera del ponte di
        Ngoma (aperto dalle 7:00 alle 18:00 tutti i giorni), a circa 55 km da Kasane e circa 70 km
        da Katima Mulilo sul lato namibiano. Per il delta dell&apos;Okavango e Maun, la maggior
        parte dei viaggiatori in autotour attraversa invece più a ovest, al valico di Mohembo
        (aperto dalle 6:00 alle 18:00), a sud di Divundu, e prosegue poi per circa 580 km fino a
        Maun attraverso l&apos;Okavango Panhandle, in parte su pista percorribile con una berlina
        nella stagione secca ma che può ammorbidirsi dopo forti piogge. Consulta il nostro{" "}
        <Link href="/it/namibia-vs-botswana" className="font-semibold text-rust hover:text-rust-dark">
          confronto tra Namibia e Botswana
        </Link>{" "}
        per sapere cosa cambia una volta attraversato il confine: aspettati soprattutto campi
        raggiungibili solo in aereo e un livello di prezzi più alto rispetto al circuito in
        autonomia namibiano.
      </>
    ),
    time: "+4-7 giorni",
  },
  {
    place: "Città del Capo e la Garden Route (Sudafrica)",
    text: "Di solito aggiunta all'inizio o alla fine del viaggio piuttosto che combinata a metà percorso: molti viaggiatori volano verso Città del Capo prima o dopo il loro giro in Namibia, trattandola come un soggiorno urbano separato piuttosto che come un'estensione dell'autotour stesso. È un'aggiunta semplice dal punto di vista logistico: un volo diretto da Windhoek a Città del Capo dura poco più di 2 ore, con diversi voli al giorno su questa tratta.",
    time: "+3-5 giorni",
  },
];

const FAQS = [
  {
    q: "Si possono raggiungere le Cascate Vittoria in auto dalla Namibia?",
    a: "Tecnicamente sì, passando per la regione dello Zambesi (l'ex striscia di Caprivi) e poi in Zambia o Botswana, ma è un tragitto realmente lungo, di più giorni, che la maggior parte dei viaggiatori evita preferendo un volo interno da Windhoek o Katima Mulilo. Come riferimento, solo Windhoek-Katima Mulilo rappresenta circa 1.228 km e 12 ore di guida, di solito suddivise in 2 giorni con una notte a Rundu, e questo prima ancora di aver attraversato un confine. Volare resta l'opzione predefinita più pratica per questa estensione specifica, a meno che tu non stia già percorrendo in auto la regione dello Zambesi come parte del tuo itinerario namibiano.",
  },
  {
    q: "Serve un visto separato per queste estensioni?",
    a: "Sì, in ogni caso: Zambia, Zimbabwe, Botswana e Sudafrica hanno ciascuno i propri requisiti d'ingresso, distinti da quelli della Namibia (che a sua volta è passata a una domanda obbligatoria di visto all'arrivo online il 1° aprile 2025, e continua ad aggiornare da allora l'elenco delle nazionalità ammissibili). Se la tua estensione copre sia lo Zambia sia lo Zimbabwe, il KAZA UniVisa congiunto (circa 50 $USA, valido 30 giorni in entrambi i paesi entro un periodo di 12 mesi) è di solito l'opzione più semplice e copre anche le escursioni giornaliere in Botswana attraverso il valico di Kazungula, anche se un pernottamento in Botswana richiede un'autorizzazione d'ingresso separata propria di quel paese. Verifica i requisiti per la tua nazionalità specifica e per ciascun paese ben prima di prenotare i voli, insieme alla nostra guida sui requisiti per il visto in Namibia.",
  },
  {
    q: "Quanti giorni extra prevedere per un'estensione alle Cascate Vittoria?",
    a: "Almeno 3-4 giorni in totale, spostamenti inclusi: questo copre un volo di andata e uno di ritorno (poco più di un'ora di volo tra Windhoek e l'aeroporto delle Cascate Vittoria, più lungo porta a porta con uno scalo) più 2 notti per vedere bene le cascate sia dal punto di vista zambiano sia da quello zimbabwiano, esperienze realmente diverse che valgono l'attraversamento di confine aggiuntivo.",
  },
  {
    q: "Meglio prolungare verso il Botswana o volare direttamente alle Cascate Vittoria?",
    a: "Dipende da cosa desideri di più. Il Botswana prolunga l'esperienza da safari con un'osservazione della fauna più densa, in particolare intorno al parco nazionale di Chobe, raggiungibile dalla regione dello Zambesi namibiana tramite il valico del ponte di Ngoma; le Cascate Vittoria sono un luogo iconico a sé stante, con poca sovrapposizione rispetto a quanto già visto in Namibia. Molti viaggi più lunghi, di tre settimane o più, combinano entrambi, attraversando il confine verso Chobe in auto e poi volando verso le cascate.",
  },
];

export default function TripExtensionsPageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Prolungare il viaggio", url: `${SITE_URL}/it/namibia-trip-extensions` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guida
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Prolungare il tuo viaggio in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La Namibia confina con alcune delle mete più importanti dell&apos;Africa australe. Ecco
          come i viaggiatori le aggiungono davvero al loro itinerario, e quanto costa ognuna in
          termini di tempo.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Il nostro consiglio:</span> se il tuo
          itinerario termina già nella regione dello Zambesi, una breve estensione in aereo verso
          le Cascate Vittoria o un&apos;escursione giornaliera a Chobe attraverso il confine di Ngoma
          aggiunge relativamente poco tempo di viaggio extra per un paesaggio realmente diverso. Se
          il tuo giro namibiano si limita al sud e al centro (Sossusvlei, Etosha, la costa),
          aggiungere Città del Capo all&apos;inizio o alla fine del viaggio è l&apos;opzione meno impegnativa
          dal punto di vista logistico, poiché evita di attraversare tutto il paese a ritroso per
          raggiungere un confine.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {EXTENSIONS.map((e, i) => (
            <Reveal
              key={e.place}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{e.place}</h2>
                <span className="rounded-full bg-sand/30 px-3 py-1 text-[12px] font-semibold text-charcoal/70">
                  {e.time}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{e.text}</p>
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
            href="/it/namibia-vs-botswana"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibia contro Botswana
          </Link>
        </Reveal>
      </section>
    </>
  );
}
