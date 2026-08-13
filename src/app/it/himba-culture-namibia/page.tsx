import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Visitare le comunità himba";
const DESCRIPTION =
  "Chi sono gli Himba, dove vivono e come visitarli con rispetto: la vera differenza tra una tappa messa in scena in un «museo vivente» e un turismo gestito dalla comunità.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/himba-culture-namibia",
    languages: {
      en: "/himba-culture-namibia",
      de: "/de/himba-culture-namibia",
      nl: "/nl/himba-culture-namibia", fr: "/fr/himba-culture-namibia",
        it: "/it/himba-culture-namibia",
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

const PRINCIPLES = [
  {
    title: "Chiedete il permesso prima di fotografare",
    text: "Chiedete sempre direttamente il permesso a una persona prima di fotografarla, anche in un luogo dove la fotografia è generalmente consentita. Un cenno della guida non equivale al consenso della persona inquadrata, e il fatto che un intermediario vi faccia segno di procedere non sostituisce comunque il sì della persona stessa.",
  },
  {
    title: "Portate provviste, non contanti",
    text: "Il denaro contante è quasi inutile a giorni di distanza dal negozio più vicino e non fa tradizionalmente parte del modo in cui gli Himba commerciano, quindi è un modo scadente per compensare una comunità per il suo tempo. La norma più solida, seguita dalle guide comunitarie di Opuwo, è fermarsi con la vostra guida in un supermercato prima della visita e acquistare i generi alimentari che la guida sceglie: farina di mais, zucchero, olio da cucina, tè o caffè. Prevedete un budget di circa 500 N$ di cibo per due visitatori, di più per un gruppo più numeroso, e lasciate che sia la guida a giudicare la quantità giusta invece di risparmiare.",
  },
  {
    title: "Sappiate distinguere un «museo vivente» da un villaggio vero",
    text: "Alcune tappe sono dimostrazioni messe in scena appositamente per il turismo, distinte dal luogo in cui le persone vivono realmente ogni giorno. Nessuna delle due è di per sé sbagliata, e un museo vivente può comunque essere una fonte di reddito legittima e di proprietà della comunità, ma dovreste sapere quale delle due state visitando e chiederlo direttamente alla vostra guida invece di darlo per scontato.",
  },
  {
    title: "Rispettate i limiti che la comunità stessa pone a ciò che viene condiviso",
    text: "I fuochi sacri, alcuni rituali e specifiche aree di un insediamento potrebbero non essere destinati ai visitatori, indipendentemente da ciò che viene offerto altrove. Una visita rispettosa segue i confini stabiliti dalla comunità, non quelli dell'itinerario, e una buona guida vi dirà cosa è vietato prima del vostro arrivo, invece di improvvisare sul momento.",
  },
];

const FAQS = [
  {
    q: "Chi sono gli Himba?",
    a: "Gli Himba sono un popolo pastorale semi-nomade che vive principalmente nel Kaokoland, nella regione settentrionale del Kunene in Namibia, noto per l'allevamento del bestiame e un'identità visiva distintiva: in particolare la pasta di otjize (una miscela di grasso animale e ocra) che molte donne applicano sulla pelle e sui capelli. Sono uno dei gruppi etnici più piccoli della Namibia e tra i più fotografati del paese, il che crea di per sé una reale tensione etica di cui vale la pena essere consapevoli prima di visitarli.",
  },
  {
    q: "È giusto visitare un villaggio himba da turisti?",
    a: "Può esserlo, se fatto con rispetto e attraverso il canale giusto: una guida con un rapporto autentico con la comunità, un consenso informato per ogni fotografia, e una compensazione che arriva alle persone visitate in una forma che desiderano davvero, il che in pratica significa quasi sempre generi alimentari acquistati insieme alla guida invece che contanti. Vale la pena essere onesti con se stessi sul fatto che una determinata tappa sia un vero scambio culturale o un servizio fotografico messo in scena, e scegliere di conseguenza.",
  },
  {
    q: "Qual è la differenza tra un «museo vivente» e la visita di un vero insediamento himba?",
    a: "Un museo vivente è una dimostrazione allestita appositamente per mostrare ai visitatori la vita tradizionale himba, spesso distinta dal luogo in cui la stessa comunità vive realmente ogni giorno. Può comunque essere una fonte di reddito legittima e gestita dalla comunità, ma è un'esperienza diversa da una visita spontanea a un insediamento in piena attività, e gli operatori dovrebbero chiarire in anticipo quale delle due state prenotando.",
  },
  {
    q: "Dove in Namibia si possono visitare le comunità himba, e a chi ci si deve rivolgere?",
    a: "Principalmente nel Kaokoland e nell'area più ampia della regione del Kunene, nel nord-ovest della Namibia, raggiungibile come estensione da un soggiorno nel Damaraland per i viaggiatori che dispongono di giorni extra e, di solito, di un 4x4. La città di Opuwo è il punto di riferimento pratico: ospita servizi di guide come il Kaoko Information Centre, gestito da Himba per gli Himba, dove una guida vi accompagnerà ad acquistare provviste sul posto prima della visita vera e propria. È una vera e propria deviazione, non una tappa del circuito classico, quindi richiede una pianificazione consapevole invece di essere inserita all'ultimo momento.",
  },
  {
    q: "Cosa bisogna portare o acquistare per una visita a una comunità himba?",
    a: "Generi alimentari pratici invece di contanti o gadget occidentali: farina di mais, zucchero, olio da cucina, tè o caffè sono i prodotti che le comunità stesse richiedono, poiché sono semi-nomadi e questi beni non sono sempre facili da riapprovvigionare. La norma seguita dalle guide comunitarie è acquistarli insieme in un supermercato di Opuwo immediatamente prima della visita, in modo che la comunità veda esattamente cosa viene portato e la guida possa giudicare le quantità giuste in base alla dimensione del gruppo.",
  },
];

export default function HimbaCulturePageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Cultura himba", url: `${SITE_URL}/it/himba-culture-namibia` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guida
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Visitare le comunità himba in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Questo è uno degli aspetti più delicati nella pianificazione di un viaggio in Namibia, e
          preferiamo affrontarlo apertamente piuttosto che ometterlo. Ecco chi sono gli Himba e
          come visitarli (se deciderete di farlo) con un rispetto autentico.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <MetaIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-olive" />
                <div>
                  <h2 className="text-[14px] font-bold text-charcoal">{p.title}</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Il nostro consiglio</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            Niente di tutto questo è un motivo per evitare il Kaokoland o la regione del Kunene:
            è un motivo per rivolgersi a operatori e guide che hanno relazioni reali e durature
            con comunità specifiche, invece di una tappa generica aggiunta a un itinerario. In
            pratica questo significa stabilirsi a Opuwo o transitarci, e affidarsi a un servizio
            di guide gestito da Himba, come il Kaoko Information Centre, invece di prenotare una
            tappa in villaggio come opzione anonima tramite un&apos;agenzia costiera. La maggior
            parte delle visite si organizza come estensione di un{" "}
            <Link
              href="/it/where-to-stay/damaraland"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              soggiorno nel Damaraland
            </Link>
            , il che aggiunge almeno una giornata di viaggio in ciascuna direzione, in gran parte
            su piste sterrate. Chiedete direttamente alla vostra guida cosa comporterà la visita,
            se acquisterete le provviste insieme in anticipo, e come funziona il consenso
            fotografico il giorno stesso, prima di prenotare piuttosto che una volta arrivati
            davanti all&apos;insediamento.
          </p>
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
            href="/it/where-to-stay/damaraland"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Dove alloggiare nel Damaraland
          </Link>
        </Reveal>
      </section>
    </>
  );
}
