import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Guida ai costi di un viaggio in Namibia";
const DESCRIPTION =
  "Fasce di costo realistiche a persona e al giorno per un viaggio in Namibia, dal budget economico al lusso, e quanto fa risparmiare l'autotour rispetto a un safari organizzato.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-trip-cost",
    languages: { en: "/namibia-trip-cost", de: "/de/namibia-trip-cost", nl: "/nl/namibia-trip-cost", fr: "/fr/namibia-trip-cost", it: "/it/namibia-trip-cost" },
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
  { title: "Guida all'autotour in Namibia", href: "/it/namibia-self-drive-guide" },
  { title: "Il periodo migliore per visitare la Namibia", href: "/it/best-time-to-visit-namibia" },
  { title: "Requisiti per il visto in Namibia", href: "/it/namibia-visa-requirements" },
  { title: "La Namibia è sicura? Sicurezza e salute", href: "/it/namibia-safety-and-health" },
  { title: "Quanto costa un viaggio in Namibia?", href: "/it/namibia-trip-cost" },
  { title: "Guida alla fauna namibiana", href: "/it/namibia-wildlife-guide" },
];

const TIERS = [
  {
    name: "Budget",
    range: "≈ 225-250 € al giorno",
    desc: (
      <>
        <Link
          href="/it/namibia-self-drive-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          Autotour
        </Link>{" "}
        con un 2x4 compatto (circa 900-1.400 N$/giorno per una Corolla Cross, una Polo Sedan o una
        Hyundai Creta), alternando campeggi NWR e privati (circa 150-500 N$ a persona) con una
        notte in guesthouse in città ogni tanti giorni (58-112 $ per due a Swakopmund o Windhoek),
        e la maggior parte delle cene preparate autonomamente dopo la spesa al supermercato.
      </>
    ),
  },
  {
    name: "Fascia media",
    range: "≈ 325 € al giorno",
    desc: "Autotour con un 2x4 ben equipaggiato o un 4x4 base, oppure un tour in piccolo gruppo, alloggiando in lodge 3 stelle e guesthouse (generalmente 120-250 $/notte per due), con colazione e spesso anche cena inclusi.",
  },
  {
    name: "Lusso",
    range: "700 €+ al giorno",
    desc: "Safari fly-in o organizzato con guida privata, lodge di design come quelli del Namib e del Kunene, pensione completa a 350-700 $+ a persona a notte, con game drive, voli panoramici o escursioni guidate incluse.",
  },
];

const COST_LEVERS = [
  {
    title: "Noleggio del veicolo",
    text: "Un 2x4 basilare costa circa 900-1.400 N$/giorno. Un 4x4 da safari completamente equipaggiato con tenda da tetto e attrezzatura da campeggio, presso un noleggiatore come Bushlore, si avvicina piuttosto a 2.500-4.000 N$/giorno a seconda della stagione, prima delle riduzioni di franchigia assicurativa. Consulta la nostra guida all'autotour per capire cosa copre davvero quella franchigia.",
  },
  {
    title: "Carburante",
    text: "I prezzi alla pompa cambiano con le variazioni delle imposte governative; a inizio agosto 2026 si aggiravano intorno a 24,48 N$/litro per la benzina 95 e 26,26 N$/litro per il diesel sulla costa, con le città dell'interno generalmente un po' più care per via dei costi di trasporto. Un giro di due settimane in autotour consuma facilmente 4.000-6.000 N$ di carburante per un veicolo.",
  },
  {
    title: "Costi d'ingresso ai parchi",
    text: "I visitatori internazionali pagano 280 N$ a persona al giorno a Etosha e Namib-Naukluft (suddivisi in parti uguali tra un diritto d'ingresso e una tassa di conservazione), più una tariffa veicolo separata di 50 N$/giorno per un'auto normale. I bambini di 8 anni o meno entrano gratuitamente; i bambini più grandi e i cittadini della SADC pagano tariffe ridotte. Viene addebitato per blocchi di 24 ore, quindi pianifica gli ingressi per evitare di pagare una giornata appena iniziata.",
  },
  {
    title: "I 90 $ di tassa per il visto",
    text: "La maggior parte delle nazionalità ora la paga online in anticipo anziché all'arrivo. È un costo fisso indipendentemente dalla durata o dal livello del viaggio, quindi pesa proporzionalmente di più su un soggiorno breve.",
  },
];

const FAQS = [
  {
    q: "Quanto costa un safari in Namibia al giorno?",
    a: "Circa 225-250 € a persona al giorno per un autotour economico, intorno a 325 € al giorno per la fascia media, e 700 €+ al giorno per un safari di lusso o fly-in completamente organizzato con lodge all inclusive. Sono stime a persona che coprono l'alloggio, la maggior parte dei pasti e un'auto a noleggio o un trasporto organizzato; i voli per la Namibia sono a parte.",
  },
  {
    q: "L'autotour è più economico di un safari organizzato in Namibia?",
    a: "Decisamente: l'autotour elimina il costo di una guida privata e di un veicolo dedicato, la spesa singola più alta in un viaggio organizzato. Il compromesso è il tuo tempo dedicato alla logistica e alla guida. Consulta la nostra guida all'autotour per capire cosa comporta concretamente.",
  },
  {
    q: "Quale valuta usa la Namibia?",
    a: "Il dollaro namibiano (N$), agganciato 1:1 al rand sudafricano. Anche il rand è ampiamente accettato. Le carte funzionano in città e nella maggior parte dei lodge; porta con te del contante per le stazioni di servizio, i costi d'ingresso ai parchi e le zone rurali dove i terminali di pagamento sono poco affidabili.",
  },
  {
    q: "Qual è la principale voce di spesa di un viaggio in Namibia?",
    a: "Di gran lunga il livello di alloggio: il divario tra una guesthouse e un lodge di lusso fly-in è spesso di 5-10 volte il prezzo a notte. Il tipo di veicolo (2x4 contro 4x4 a noleggio) e la scelta tra viaggio organizzato e autotour sono le leve successive più importanti, dato che un 4x4 da safari completamente equipaggiato può costare 2-3 volte un 2x4 basilare.",
  },
  {
    q: "Quanto costano i biglietti d'ingresso ai parchi nazionali namibiani?",
    a: "Sono aumentati bruscamente il 1° aprile 2026, il primo rialzo dal 2021, un balzo dell'86% rispetto alla tariffa precedente. I visitatori internazionali pagano ora 280 N$ a persona al giorno (suddivisi in parti uguali tra una tariffa d'ingresso di 140 N$ e una tassa di conservazione di 140 N$) nei grandi parchi come Etosha e Namib-Naukluft, contro i 150 N$ precedenti, più una tariffa veicolo separata di 50 N$/giorno per un'auto normale (2-10 posti). I cittadini della SADC pagano 180 N$ a persona al giorno, i namibiani 60 N$, e i bambini di 8 anni o meno entrano gratuitamente. Le tariffe vengono addebitate per blocchi di 24 ore e non sono rimborsabili, quindi tieni conto di questa voce esplicitamente in un autotour attraverso più parchi.",
  },
  {
    q: "Quanto costa il carburante per un autotour in Namibia?",
    a: "A inizio agosto 2026, i prezzi alla pompa erano intorno a 24,48 N$/litro per la benzina 95 e 26,26 N$/litro per il diesel sulla costa (Walvis Bay), con un piccolo sovrapprezzo di trasporto nell'entroterra. I prezzi del carburante cambiano con le variazioni delle imposte governative alcune volte all'anno, quindi considera questi valori come una fotografia del momento e non un importo fisso. Un tipico giro di due o tre settimane in autotour che copre Etosha, il Damaraland, Sossusvlei e la costa consuma circa 4.000-6.000 N$ di carburante per un veicolo.",
  },
  {
    q: "Quanto costa noleggiare un'auto in Namibia?",
    a: "Un 2x4 basilare con una luce dal suolo ragionevole (Toyota Corolla Cross, VW Polo Sedan, categoria Hyundai Creta) costa circa 900-1.400 N$/giorno presso i noleggiatori locali. Un 4x4 completamente equipaggiato con tenda da tetto e attrezzatura da campeggio, presso uno specialista come Bushlore o Asco Car Hire, si avvicina piuttosto a 2.500-4.000 N$/giorno tra bassa e alta stagione, e questo prima ancora di scegliere un'opzione assicurativa a franchigia ridotta, che costa generalmente 8-25 € in più al giorno a seconda di quanto vuoi abbassare la franchigia standard di 20.000-40.000 N$.",
  },
];

export default function TripCostPageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Costo del viaggio", url: `${SITE_URL}/it/namibia-trip-cost` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guida
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Quanto costa un viaggio in Namibia?
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La Namibia può essere una destinazione in autotour davvero economica oppure un safari di
          lusso a cinque cifre. È il livello di alloggio scelto a fare la differenza. Ecco fasce
          approssimative a persona e al giorno, esclusi i voli e i 90 $ di{" "}
          <Link
            href="/it/namibia-visa-requirements"
            className="font-medium text-rust hover:text-rust-dark"
          >
            tassa per il visto all&apos;arrivo
          </Link>{" "}
          che la maggior parte delle nazionalità ora paga online in anticipo.
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
          Solo stime, a persona e al giorno. Il costo effettivo varia in base alla stagione, alla
          dimensione del gruppo e all&apos;itinerario. Esclusi i voli internazionali.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Cosa determina davvero la cifra</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            Dietro i tre livelli qui sopra, quattro voci fanno gran parte del lavoro. Definiscile
            bene quando pianifichi il budget, e la stima giornaliera smette di essere un
            azzardo.
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
            href="/it/best-luxury-lodges"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            I migliori lodge di lusso
          </Link>
        </Reveal>
      </section>
    </>
  );
}
