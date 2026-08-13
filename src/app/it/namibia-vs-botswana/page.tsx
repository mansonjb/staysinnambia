import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia vs Botswana";
const DESCRIPTION =
  "Namibia e Botswana vengono spesso accostate nelle stesse guide di viaggio, e non è un caso: ecco la differenza onesta per un primo safari africano.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-vs-botswana",
    languages: {
      en: "/namibia-vs-botswana",
      de: "/de/namibia-vs-botswana",
      nl: "/nl/namibia-vs-botswana", fr: "/fr/namibia-vs-botswana",
        it: "/it/namibia-vs-botswana",
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
  { title: "Guida al self-drive in Namibia", href: "/it/namibia-self-drive-guide" },
  { title: "Periodo migliore per visitare la Namibia", href: "/it/best-time-to-visit-namibia" },
  { title: "Requisiti per il visto in Namibia", href: "/it/namibia-visa-requirements" },
  { title: "La Namibia è sicura? Sicurezza e salute", href: "/it/namibia-safety-and-health" },
  { title: "Quanto costa un viaggio in Namibia?", href: "/it/namibia-trip-cost" },
  { title: "Guida alla fauna della Namibia", href: "/it/namibia-wildlife-guide" },
];

const COMPARISON = [
  {
    axis: "Self-drive",
    namibia:
      "Davvero accessibile: una buona rete stradale, una segnaletica chiara e un mercato del noleggio ben consolidato rendono la Namibia uno dei paesi africani più facili da percorrere in self-drive. Parchi nazionali come Etosha e Namib-Naukluft rilasciano permessi e accesso al cancello sul posto, senza bisogno di prenotare un campeggio in anticipo solo per entrare.",
    botswana:
      "Molto più limitato: l'ingresso in self-drive alla Moremi Game Reserve richiede una prenotazione confermata del campeggio prima che il DWNP (il dipartimento dei parchi) lasci passare il cancello, e all'interno esiste solo una manciata di campeggi pubblici (Xakanxa, Third Bridge, Moremi, Okuti), spesso al completo con mesi di anticipo in alta stagione. A questo si aggiungono piste di sabbia profonda del Kalahari che richiedono vera esperienza di guida in 4x4 e rapporti ridotti, e gran parte del Delta dell'Okavango stesso è raggiungibile solo con piccoli aerei, motivo per cui la maggior parte dei visitatori del Botswana arriva con un operatore anziché in self-drive.",
  },
  {
    axis: "Densità della fauna",
    namibia:
      "Eccellente ma più dispersa: le pozze d'acqua illuminate di Etosha concentrano la fauna in modo eccezionale, soprattutto nella stagione secca (circa da giugno a ottobre), ma gli avvistamenti nel Damaraland o nel Kaokoland sono più selvaggi e meno garantiti.",
    botswana:
      "Osservazione più densa e più classica da safari: il Delta dell'Okavango e Chobe, che ospita una delle più grandi popolazioni di elefanti d'Africa, sono noti per avvistamenti costanti, ravvicinati e frequenti, comprese mandrie affidabili di bufali e un'attività regolare dei predatori.",
  },
  {
    axis: "Paesaggio",
    namibia:
      "L'attrattiva principale per molti viaggiatori alla prima esperienza: le imponenti dune rosse di Sossusvlei (tra le più alte al mondo, oltre 300 metri), fauna adattata al deserto e una costa atlantica selvaggia, introvabili altrove sul continente in questa forma.",
    botswana:
      "Un paesaggio d'acqua e di verde: i canali e le pianure alluvionali del Delta dell'Okavango sono l'opposto dei deserti namibiani, con il birdwatching e la fauna acquatica (ippopotamo, elefante, coccodrillo) come esperienza distintiva.",
  },
  {
    axis: "Fascia di prezzo tipica",
    namibia: (
      <>
        Realizzabile con budget realmente contenuti o medi (circa 225-250 €/giorno in self-drive,
        325 €/giorno nella fascia media) tramite guesthouse e auto a noleggio, accanto a una vera
        fascia di lusso oltre i 700 €/giorno. Consultate la nostra{" "}
        <Link href="/it/namibia-trip-cost" className="font-semibold text-rust hover:text-rust-dark">
          analisi completa dei costi
        </Link>
        .
      </>
    ),
    botswana:
      "Sistematicamente più elevata: lodge affermati costano solitamente 600-1.500 $+ a persona a notte, e i campi più esclusivi del Delta dell'Okavango raggiungibili solo in aereo spesso arrivano a 1.500-4.000 $+, con alcuni oltre i 7.000 $. Il modello turistico ad alto valore e basso volume del Botswana limita deliberatamente il numero di campi, quindi c'è ben poca della fascia economica tra guesthouse e auto a noleggio che caratterizza la Namibia.",
  },
  {
    axis: "Tariffe d'ingresso ai parchi",
    namibia:
      "Namibia Wildlife Resorts fa pagare ai visitatori internazionali 280 N$/giorno (circa 17,50 $) nei parchi principali come Etosha, Namib-Naukluft e la Skeleton Coast, più una tariffa separata per veicolo, in vigore dall'aprile 2026.",
    botswana:
      "Il DWNP fa pagare ai visitatori internazionali 270 BWP/giorno (circa 20 $) a Chobe e Moremi, e 500 BWP/giorno nel Kalahari Centrale, a Makgadikgadi e a Nxai Pan, più tariffe separate per veicolo, anch'esse aggiornate ad aprile 2026. Le tariffe giornaliere dei parchi sono in realtà simili tra i due paesi: il vero divario di costo nasce dai campi e dai voli, non dai cancelli dei parchi.",
  },
  {
    axis: "Visto e ingresso",
    namibia:
      "Richiede il visto per la maggior parte delle nazionalità, anche se molti possono ottenerlo all'arrivo o richiederlo online in anticipo; nel 2026 il costo standard del visto turistico è di circa 30 $, valido per soggiorni fino a 90 giorni.",
    botswana:
      "Più aperto sulla carta: la maggior parte dei visitatori provenienti da Nord America, Europa, Commonwealth e regione SADC (Namibia inclusa) entra senza visto per il turismo, in genere per soggiorni fino a 90 giorni in un periodo di 12 mesi.",
  },
];

const FAQS = [
  {
    q: "Conviene visitare la Namibia o il Botswana per un primo safari africano?",
    a: "Se volete guidare da soli, controllare il vostro ritmo e privilegiare il paesaggio e la fauna adattata al deserto, la Namibia è il primo viaggio più semplice e generalmente più economico: la sua rete stradale, la segnaletica e il mercato del noleggio sono pensati proprio per questo, e i permessi dei parchi si gestiscono direttamente al cancello. Se l'osservazione classica e densa della fauna è la priorità e il budget consente 600 $+ a persona a notte in campi raggiungibili solo in aereo, il Botswana offre questo in modo più affidabile, in particolare nel Delta dell'Okavango e a Chobe.",
  },
  {
    q: "È possibile visitare sia la Namibia sia il Botswana in un solo viaggio?",
    a: "Sì, è una combinazione ben consolidata, e la nostra regione della Caprivi Strip confina direttamente con il Parco Nazionale di Chobe in Botswana, il che la rende un collegamento naturale tra i due paesi piuttosto che una deviazione separata raggiungibile solo in aereo. Consultate la nostra guida sulle estensioni di viaggio per capire come funziona di solito.",
  },
  {
    q: "Il Botswana è più caro della Namibia?",
    a: "Sostanzialmente sì. La politica turistica del Botswana, ad alto valore e basso volume, limita deliberatamente il numero di campi per mantenere le zone poco affollate: i lodge affermati costano solitamente 600-1.500 $+ a persona a notte, e i campi più esclusivi del Delta dell'Okavango raggiungibili solo in aereo spesso 1.500-4.000 $+. La vera fascia economica della Namibia si aggira sui 225-250 €/giorno in self-drive. Le tariffe d'ingresso ai parchi in sé sono in realtà simili tra i due paesi nel 2026 (entrambe circa 17-20 $/giorno): il divario riguarda i campi, le guide e i voli interni, non il prezzo dei cancelli.",
  },
  {
    q: "Quale paese è migliore per il self-drive?",
    a: "La Namibia, chiaramente. Le migliori zone faunistiche del Botswana sono in gran parte inaccessibili senza un 4x4 serio e esperienza di guida fuoristrada: l'ingresso in self-drive alla Moremi Game Reserve, ad esempio, richiede una prenotazione confermata del campeggio DWNP prima di poter varcare il cancello, e questi campeggi si esauriscono con mesi d'anticipo. Non è un paese pensato per il tipo di viaggio in autonomia per cui la Namibia è famosa.",
  },
  {
    q: "Serve il visto per la Namibia o per il Botswana?",
    a: "Il Botswana è esente da visto per la maggior parte delle nazionalità occidentali e della SADC, per soggiorni turistici fino a 90 giorni. La Namibia in genere richiede un visto, anche se la maggior parte dei visitatori può ottenerlo all'arrivo o richiederlo online in anticipo; il costo standard del visto turistico nel 2026 è di circa 30 $, valido anch'esso fino a 90 giorni.",
  },
];

export default function VsBotswanaPageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Namibia vs Botswana", url: `${SITE_URL}/it/namibia-vs-botswana` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia vs Botswana
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Le guide di viaggio accostano costantemente questi due paesi, e per buoni motivi: sono
          vicini con esperienze di safari quasi opposte. Ecco la differenza onesta, senza
          preferenze per l&apos;uno o per l&apos;altro.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4">
          {COMPARISON.map((row, i) => (
            <Reveal
              key={row.axis}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {row.axis}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-olive">
                    Namibia
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.namibia}</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-charcoal/50">
                    Botswana
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.botswana}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Non scegliete, combinateli</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            La Caprivi Strip della Namibia confina direttamente con il Parco Nazionale di Chobe in
            Botswana, ed è per questo che tanti itinerari più lunghi trattano questa zona come
            un&apos;unica regione anziché due viaggi separati. Se avete tre settimane o più,
            aggiungere una tappa in Botswana a un self-drive in Namibia è più semplice di quanto
            sembri.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[13px] text-charcoal/60">
            <MetaIcon name="check" className="h-4 w-4 text-olive" />
            Consultate la nostra{" "}
            <Link
              href="/it/namibia-trip-extensions"
              className="ml-1 font-semibold text-rust hover:text-rust-dark"
            >
              guida sulle estensioni di viaggio
            </Link>{" "}
            per capire come funziona di solito.
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
        </Reveal>
      </section>
    </>
  );
}
