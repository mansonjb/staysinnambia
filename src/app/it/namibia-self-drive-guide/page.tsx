import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Guida all'autotour in Namibia";
const DESCRIPTION =
  "Cosa comporta davvero l'autotour in Namibia: tipi di strade, pianificazione delle soste per il rifornimento, insidie delle assicurazioni di noleggio e perché non guidare mai di notte è la regola che tutti ripetono.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-self-drive-guide",
    languages: { en: "/namibia-self-drive-guide", de: "/de/namibia-self-drive-guide", nl: "/nl/namibia-self-drive-guide", fr: "/fr/namibia-self-drive-guide", it: "/it/namibia-self-drive-guide" },
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

const ROAD_TYPES = [
  {
    code: "Strade A / B",
    desc: "Grandi arterie asfaltate tra le principali città (Windhoek-Okahandja, Windhoek-Swakopmund via la B2). Guida normale, ma resta attento a kudu e bestiame all'alba, al tramonto e di notte.",
  },
  {
    code: "Strade C",
    desc: "Piste in ghiaia livellate, generalmente ben mantenute e la spina dorsale della maggior parte degli itinerari in autotour (la C28 Windhoek-Solitaire, le C39/C40 attraverso il Damaraland). Limita la velocità a 80 km/h e rallenta ulteriormente ogni volta che il fondo appare instabile o all'avvicinarsi di una curva; sgonfia le gomme di circa il 10-20% rispetto alla pressione su asfalto per un comfort e una tenuta migliori sul fondo ondulato.",
  },
  {
    code: "Strade D",
    desc: "Piste secondarie in ghiaia, più strette e più accidentate (Kamanjab-Palmwag, Sesfontein-Purros). Qui il fondo ondulato è peggiore e compaiono tratti di sabbia soffice senza preavviso. Mantieni una velocità costante nei tratti a fondo ondulato invece di frenare a metà, e frena prima di una curva, mai dentro.",
  },
  {
    code: "Strade F",
    desc: "Piste 4x4, spesso accidentate, sabbiose o impraticabili a seconda della stagione (l'area del Van Zyl's Pass, il Kaokoland profondo). Non adatte a una berlina a noleggio standard né a un 2x4, da percorrere idealmente con un secondo veicolo o una guida che conosce l'itinerario.",
  },
];

const TYRE_PRESSURE = [
  { surface: "Asfalto / strade A-B", psi: "Pressione consigliata dal costruttore (generalmente ~32-36 psi)", note: "Rigonfia a questa pressione prima di tornare sull'asfalto; le gomme sottogonfiate si surriscaldano rapidamente ad alta velocità." },
  { surface: "Ghiaia livellata (strade C)", psi: "Sgonfia di circa il 10-20% rispetto all'asfalto", note: "Migliora il comfort e la superficie di contatto sul fondo ondulato senza flettere troppo i fianchi." },
  { surface: "Ghiaia accidentata / strade D", psi: "Sgonfia ulteriormente, verso 25-28 psi", note: "Aspettati una sensazione più morbida; è il compromesso per rimbalzare meno sul fondo ondulato." },
  { surface: "Sabbia profonda (Kaokoland, piste di dune)", psi: "Fino a 1,8 bar (~26 psi), anche meno", note: "Sgonfia prima di rimanere bloccato, non dopo. Porta con te un compressore per rigonfiare in seguito." },
];

const RENTAL_COMPANIES = [
  {
    name: "Per un 2x4 semplice ed efficace",
    text: "Un 2x4 ben equipaggiato con una vera luce dal suolo (Toyota Corolla Cross, VW Polo Sedan, categoria Hyundai Creta) presso un noleggiatore con sede a Windhoek costa circa N$900-1.400/giorno e copre comodamente Etosha, Sossusvlei, Swakopmund e la rete principale di strade C. Consulta la nostra guida sui viaggi senza 4x4 per sapere esattamente quali itinerari restano percorribili.",
  },
  {
    name: "Per un 4x4 da safari completamente equipaggiato",
    text: "Bushlore e Asco Car Hire sono i due specialisti che la maggior parte dei viaggiatori in autotour finisce per confrontare, entrambi con tende da tetto, attrezzatura da campeggio, GPS e kit di recupero di serie. Considera circa N$2.500-4.000/giorno a seconda della stagione per un 4x4 categoria Hilux completamente equipaggiato. Anche Britz opera in Namibia da Windhoek con una flotta più ampia se vuoi maggiore scelta di veicoli.",
  },
  {
    name: "Franchigia e cauzione: da leggere prima di firmare",
    text: "La franchigia danni standard su un 4x4 si aggira generalmente intorno a N$30.000-40.000, con gomme, parabrezza, sottoscocca e ribaltamenti di un singolo veicolo spesso isolati come esclusioni separate e più elevate. I noleggiatori vendono formule a franchigia ridotta come opzione giornaliera (generalmente €8-25/giorno) che riportano la franchigia verso N$5.000-20.000; è comune anche una piccola cauzione alla riconsegna del veicolo (circa N$5.000 presso alcuni noleggiatori) per multe o perdite escluse. Chiedi esattamente quali sono le esclusioni legate alla ghiaia e ai ribaltamenti di un singolo veicolo prima di scegliere la formula.",
  },
];

const RULES = [
  "Non guidare mai di notte fuori dalle città: bestiame, kudu e altri animali selvatici spesso attraversano di scatto la strada abbagliati dai fari, e la maggior parte dei noleggiatori esclude esplicitamente la guida notturna dalla copertura assicurativa. È la regola più ripetuta in assoluto, e non è un caso.",
  "Nel nord-ovest e nel sud le stazioni di servizio si diradano rapidamente. Solitaire è l'unico punto di rifornimento tra Sesriem e la costa, un tratto di circa 340 km. Kamanjab e Khorixas delimitano il tratto senza benzina attraverso il Damaraland verso Palmwag e Sesfontein. Fai il pieno ogni volta che il serbatoio scende sotto la metà in uno di questi tratti, non quando l'indicatore è quasi vuoto, e porta con te acqua potabile extra in caso di guasto.",
  "I danni a gomme e parabrezza sulle piste in ghiaia sono il sinistro più frequente nel noleggio auto in Namibia. Leggi l'importo della franchigia sul contratto, non solo la tariffa giornaliera: la franchigia standard si aggira intorno a N$20.000-40.000 a seconda del noleggiatore, e le opzioni a franchigia ridotta costano generalmente €8-25/giorno in più.",
  "Il tasso alcolemico legale è dello 0,05%, controllato con posti di blocco su alcuni tratti.",
  "Rallenta nelle curve su ghiaia e sulla sabbia soffice: la maggior parte degli incidenti in autotour sono ribaltamenti di un singolo veicolo dovuti a frenate troppo brusche o correzioni eccessive ad alta velocità, non scontri con altri veicoli. Frena in linea retta prima della curva, poi rilascia gradualmente affrontandola.",
];

const FAQS = [
  {
    q: "Serve un 4x4 per fare l'autotour in Namibia?",
    a: "Non per la maggior parte degli itinerari classici. Etosha, Sossusvlei, Swakopmund e la rete di strade C sono gestibili con un 2x4 ben equipaggiato e con buona luce dal suolo, per circa N$900-1.400/giorno. Un 4x4 diventa utile per le strade D del Damaraland, il Kaokoland, e ovunque percorrerai strade D o F, e costa generalmente N$2.500-4.000/giorno completamente equipaggiato con attrezzatura da campeggio presso uno specialista come Bushlore o Asco Car Hire. Consulta la nostra guida dedicata sui viaggi senza 4x4 per gli itinerari precisi che lo consentono.",
  },
  {
    q: "Autotour o safari organizzato: cosa scegliere per un primo viaggio?",
    a: "L'autotour ti dà il controllo totale su ritmo e budget, e la rete stradale namibiana lo rende più accessibile che nella maggior parte degli altri paesi da safari. Un viaggio organizzato scambia questa libertà con la conoscenza del posto, l'assenza di logistica da gestire e migliori avvistamenti di fauna durante i gamedrive. Molti viaggiatori alla prima esperienza optano per una formula ibrida: autotour tra le regioni, gamedrive organizzati all'interno dei parchi.",
  },
  {
    q: "Quanto distano tra loro le stazioni di servizio in Namibia?",
    a: "Sulle grandi arterie, ogni 100-200 km. Sui tratti isolati, le distanze sono molto maggiori: Solitaire è l'unico punto di rifornimento tra Sesriem e la costa (circa 340 km), e il tratto Kamanjab-Khorixas-Palmwag attraverso il Damaraland ha anch'esso lunghe sezioni senza benzina. Sulla strada verso il Fish River Canyon nel sud, le distanze possono superare i 250 km senza alcun servizio. Pianifica le soste per il rifornimento prima di lasciare ogni città, non quando l'indicatore è quasi vuoto, e considera qualsiasi serbatoio sotto la metà come il segnale che è ora di fare rifornimento.",
  },
  {
    q: "Che pressione delle gomme usare su ghiaia e sabbia in Namibia?",
    a: "Sgonfia di circa il 10-20% rispetto alla pressione su asfalto sulle strade C livellate, per un comfort e una tenuta migliori sul fondo ondulato. Sulle strade D più accidentate, sgonfia ulteriormente. Nella sabbia profonda, in particolare nel Kaokoland o sulle piste di dune, pressioni basse fino a 1,8 bar (circa 26 psi) sono pratica comune, da sgonfiare prima di rimanere bloccati piuttosto che dopo. Rigonfia sempre alla pressione consigliata dal costruttore prima di tornare su una strada asfaltata, perché guidare veloce sull'asfalto con pressione bassa fa aumentare la temperatura e il rischio di scoppio.",
  },
  {
    q: "Cosa copre davvero l'assicurazione dell'auto a noleggio sulle piste in ghiaia?",
    a: "L'assicurazione danni standard spesso esclude, o sottopone a una franchigia elevata, i colpi al parabrezza, i danni alle gomme causati dalla ghiaia e i ribaltamenti di un singolo veicolo, che sono comunque i sinistri più frequenti in Namibia. La franchigia standard si aggira generalmente intorno a N$20.000-40.000; le formule a franchigia ridotta costano €8-25/giorno in più e riportano l'importo verso N$5.000-20.000, con un'opzione a franchigia zero a volte disponibile al livello più alto. Chiedi esattamente quali sono le esclusioni legate alla ghiaia e ai ribaltamenti di un singolo veicolo, non solo l'importo dichiarato della franchigia.",
  },
  {
    q: "Quale noleggiatore scegliere concretamente per un autotour in Namibia?",
    a: "Per un 2x4 sul circuito principale, va benissimo qualsiasi noleggiatore affidabile con sede a Windhoek che offra un veicolo categoria Corolla Cross/Polo Sedan/Hyundai Creta. Per un 4x4 equipaggiato per il campeggio, Bushlore e Asco Car Hire sono i due nomi che la maggior parte dei viaggiatori indipendenti confronta, entrambi con flotte dedicate alla Namibia, tende da tetto e kit di recupero; Britz è un'alternativa con flotta più ampia, anch'essa con sede a Windhoek. Confronta i livelli di franchigia, non solo la tariffa giornaliera, perché è lì che si gioca la vera differenza di costo su un itinerario ricco di piste in ghiaia.",
  },
];

export default function SelfDriveGuidePageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Guida all'autotour", url: `${SITE_URL}/it/namibia-self-drive-guide` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guida
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Guida all'autotour in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          L'autotour è il modo in cui la maggior parte dei viaggiatori indipendenti scopre la
          Namibia. La rete stradale è davvero buona, ma le distanze, il fondo delle strade e le
          clausole nascoste delle assicurazioni di noleggio spesso sorprendono. Ecco cosa
          pianificare davvero, incluso quanto si risparmia rispetto a un{" "}
          <Link href="/it/namibia-trip-cost" className="font-medium text-rust hover:text-rust-dark">
            viaggio organizzato
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Tipi di strade spiegati</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ROAD_TYPES.map((r, i) => (
            <Reveal
              key={r.code}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {r.code}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Pressione delle gomme in base al fondo</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/70">
            La maggior parte dei sinistri da noleggio su pista deriva da una pressione lasciata
            impostata per l&apos;asfalto sul fondo ondulato. Regolala a ogni cambio di fondo, e
            rigonfia sempre prima di tornare sull&apos;asfalto.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TYRE_PRESSURE.map((t, i) => (
            <Reveal
              key={t.surface}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {t.surface}
              </h3>
              <p className="mt-2 font-serif text-lg italic text-charcoal">{t.psi}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{t.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Quale noleggiatore scegliere concretamente</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {RENTAL_COMPANIES.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 60}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="text-[14px] font-bold text-charcoal">{r.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">
            Le regole che i viaggiatori esperti in autotour ripetono sempre
          </h2>
          <ul className="mt-5 space-y-3">
            {RULES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
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
            href="/it/namibia-without-4x4"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            La Namibia senza 4x4
          </Link>
        </Reveal>
      </section>
    </>
  );
}
