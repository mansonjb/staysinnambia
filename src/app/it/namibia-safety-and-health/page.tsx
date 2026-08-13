import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "La Namibia è sicura? Sicurezza e salute";
const DESCRIPTION =
  "Uno sguardo onesto sui rischi reali della Namibia: piccola criminalità, sicurezza stradale e le zone dove la malaria è davvero un problema, rispetto alle aree del paese dove non lo è.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-safety-and-health",
    languages: {
      en: "/namibia-safety-and-health",
      de: "/de/namibia-safety-and-health",
      nl: "/nl/namibia-safety-and-health", fr: "/fr/namibia-safety-and-health",
        it: "/it/namibia-safety-and-health",
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
  { title: "Guida all'autotour in Namibia", href: "/it/namibia-self-drive-guide" },
  { title: "Il periodo migliore per visitare la Namibia", href: "/it/best-time-to-visit-namibia" },
  { title: "Requisiti per il visto in Namibia", href: "/it/namibia-visa-requirements" },
  { title: "La Namibia è sicura? Sicurezza e salute", href: "/it/namibia-safety-and-health" },
  { title: "Quanto costa un viaggio in Namibia?", href: "/it/namibia-trip-cost" },
  { title: "Guida alla fauna namibiana", href: "/it/namibia-wildlife-guide" },
];

const SAFETY_POINTS = [
  {
    title: "Piccola criminalità",
    text: "Concentrata a Windhoek e, in misura minore, a Walvis Bay, soprattutto dopo il tramonto: sia il Dipartimento di Stato americano sia il FCDO britannico segnalano borseggi, scippi e furti con effrazione da auto parcheggiate e incustodite come gli episodi più comuni che coinvolgono i visitatori. Entrambi collocano la Namibia nel loro livello equivalente a \"esercitare maggiore cautela\", lo stesso livello di gran parte dell'Europa occidentale, non un livello di rischio serio. Si verificano rapine a mano armata e invasioni di domicilio isolate, ma in zone residenziali e commerciali, non lungo gli itinerari turistici. Usa la cassaforte dell'hotel, non lasciare borse in vista in un'auto parcheggiata e prendi un taxi invece di camminare di notte nei centri città. Fuori dalle città, sugli itinerari in lodge o in autotour, si tratta di un problema quasi inesistente.",
  },
  {
    title: "Sicurezza stradale",
    text: (
      <>
        Il rischio reale più importante per la maggior parte dei visitatori, e di gran lunga. La
        Namibia conta circa 12.000 km di piste in ghiaia, e l&apos;indicazione costante del FCDO
        come dei noleggiatori locali è di non superare i 60-80 km/h sulla ghiaia, a prescindere dal
        limite indicato: l&apos;incidente grave più frequente tra i viaggiatori in autotour è il
        ribaltamento di un veicolo isolato, in una curva presa troppo veloce su fondo ondulato o
        sabbioso, non uno scontro con un altro veicolo. Aggiungi a questo lunghi tratti senza
        servizi, la stanchezza e gli animali che attraversano al crepuscolo e all&apos;alba, e lo
        schema è chiaro: rallenta, evita di guidare di notte fuori dalle città e porta con te una
        ruota di scorta e acqua extra. Consulta la nostra{" "}
        <Link
          href="/it/namibia-self-drive-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          guida all&apos;autotour
        </Link>{" "}
        per i dettagli.
      </>
    ),
  },
  {
    title: "Viaggio in solitaria e viaggiatrici sole",
    text: "Ampiamente descritto come piacevole dai viaggiatori in solitaria, comprese le donne sole, soprattutto su itinerari organizzati e in lodge. La criminalità violenta rivolta ai turisti è abbastanza rara da essere trattata dalle autorità americane e britanniche come l'eccezione, non la regola. Le solite precauzioni valgono a Windhoek e Walvis Bay dopo il tramonto, come ovunque.",
  },
  {
    title: "Incontri con la fauna selvatica",
    text: (
      <>
        Un rischio reale ma gestibile seguendo le indicazioni delle guide: restare nel veicolo
        nelle zone di selvaggina salvo diversa indicazione, non avvicinarsi mai agli animali presso
        i punti d&apos;acqua vicino ai lodge, e seguire le raccomandazioni del personale del campo
        riguardo agli spostamenti a piedi dopo il tramonto, dove è noto che passano elefanti o
        iene. Un punto specifico da conoscere: le colonie di otarie orsine del Capo della Namibia,
        tra cui quella di Cape Cross, hanno registrato casi documentati di rabbia, quindi mantieni
        le distanze e tratta qualsiasi morso o graffio, per quanto lieve, come un&apos;emergenza che
        richiede assistenza medica immediata, a prescindere dal proprio stato vaccinale. Consulta
        la nostra{" "}
        <Link
          href="/it/namibia-wildlife-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          guida alla fauna selvatica
        </Link>{" "}
        per sapere cosa aspettarti regione per regione.
      </>
    ),
  },
  {
    title: "Assistenza medica ed evacuazione",
    text: "I lodge del Namib, del Kaokoland o della regione dello Zambesi possono trovarsi a diverse ore di strada, se non a un volo in piccolo aereo, dall'ospedale più vicino attrezzato per traumi: non è un dettaglio da trascurare nella pianificazione del viaggio. Medical Rescue Africa (MRA) è il fornitore namibiano di evacuazione aeromedica e ambulanze, e molti lodge e operatori collaborano già con loro, ma è la tua assicurazione di viaggio a coprire il conto. Se possiedi già un'iscrizione AMREF Flying Doctors da un viaggio in Africa orientale, tieni presente che non copre Namibia, Botswana né Sudafrica: verifica che la tua polizza includa esplicitamente un'evacuazione medica valida in Africa australe prima di partire.",
  },
];

const FAQS = [
  {
    q: "La Namibia è sicura da visitare?",
    a: "Sì. Sia il Dipartimento di Stato americano sia il FCDO britannico collocano la Namibia nel loro livello equivalente a \"esercitare maggiore cautela\", lo stesso livello di gran parte dell'Europa occidentale, non un livello di rischio serio. I suoi rischi reali sono la sicurezza stradale (lunghe distanze, ghiaia, ribaltamenti di veicoli isolati e fauna selvatica sulle strade al crepuscolo) e la comune piccola criminalità urbana a Windhoek e Walvis Bay, non la criminalità violenta rivolta ai viaggiatori.",
  },
  {
    q: "Serve un trattamento antimalarico per la Namibia?",
    a: "Dipende da dove vai e in quale periodo. Il CDC elenca Kavango East, Kavango West, Kunene, Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa e Zambesi come regioni a rischio malaria, ossia in generale il terzo settentrionale del paese, compresa la parte nord di Etosha e la regione dello Zambesi (Caprivi), e il rischio è massimo durante la stagione delle piogge (circa da novembre ad aprile). Non c'è trasmissione della malaria a Windhoek, e il rischio è basso a Sossusvlei, Swakopmund e nella maggior parte della Namibia centrale e meridionale durante tutto l'anno. La Namibia ha anche registrato un forte aumento dei casi all'inizio del 2026, concentrato nelle regioni dello Zambesi e del Kavango, quindi verifica la situazione attuale con un medico specializzato in medicina dei viaggi in base al tuo itinerario e alle date precise. Questa è un'informazione generale, non un parere medico.",
  },
  {
    q: "La Namibia è sicura per le donne che viaggiano da sole?",
    a: "Generalmente descritta come piacevole, in particolare per soggiorni in lodge o autotour organizzati; gli stessi avvisi di sicurezza che segnalano la piccola criminalità in Namibia non rilevano alcun rischio specifico maggiore per le donne che viaggiano da sole. Le solite precauzioni urbane valgono a Windhoek e Walvis Bay dopo il tramonto, come in qualsiasi città.",
  },
  {
    q: "Quali vaccini servono per la Namibia?",
    a: "Non esiste un elenco universale, ma le raccomandazioni standard del CDC per la Namibia includono epatite A, epatite B e febbre tifoide per la maggior parte dei viaggiatori, oltre ai vaccini di routine (MPR, poliomielite, ecc.). La vaccinazione preventiva contro la rabbia merita di essere considerata se prevedi di andare in bicicletta, fare speleologia o maneggiare animali, ed è particolarmente rilevante alla luce dei casi di rabbia documentati nelle colonie di otarie orsine del Capo della Namibia. La vaccinazione contro la febbre gialla non è richiesta per un volo diretto dall'Europa o dal Nord America, ma la prova della vaccinazione può essere richiesta se arrivi da un paese a rischio febbre gialla. Rivolgiti a un centro di medicina dei viaggi quattro o sei settimane prima della partenza: il tuo itinerario e la tua storia clinica personale possono cambiare la risposta. Questa è un'informazione generale, non un parere medico.",
  },
  {
    q: "Serve un'assicurazione per l'evacuazione medica?",
    a: "Prendila sul serio, dato quanto sono remoti alcuni lodge. La Namibia ha un proprio fornitore di evacuazione aeromedica, Medical Rescue Africa (MRA), con cui molti lodge e operatori collaborano già, ma serve comunque un'assicurazione di viaggio che copra esplicitamente l'evacuazione medica in Namibia. Se combini questo viaggio con l'Africa orientale e possiedi già un'iscrizione AMREF Flying Doctors, tieni presente che non si estende a Namibia, Botswana né Sudafrica. Verifica la tua copertura prima di partire, non dopo.",
  },
];

export default function SafetyHealthPageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Sicurezza e salute", url: `${SITE_URL}/it/namibia-safety-and-health` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guida
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          La Namibia è sicura? Sicurezza e salute
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La Namibia è tra i paesi più sicuri in cui viaggiare in Africa australe, ma
          &quot;sicuro&quot; non è sinonimo di &quot;privo di rischi.&quot; Ecco dove si trovano
          davvero i rischi reali.
        </p>
        <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Solo informazioni generali, non un parere medico né di sicurezza. Consulta un
          professionista di medicina dei viaggi e gli avvisi di viaggio del tuo governo prima di
          partire.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SAFETY_POINTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-lg font-bold text-charcoal">{p.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Malaria: la realtà regione per regione</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Regioni a rischio più elevato secondo CDC e OMS: Kavango East, Kavango West, Kunene, Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa e Zambesi, ossia in generale la fascia settentrionale del paese, compresa la parte nord di Etosha e la regione dello Zambesi (Caprivi)",
              "Nessuna trasmissione della malaria a Windhoek, e rischio basso o raro a Sossusvlei, Fish River Canyon, la Skeleton Coast e nella maggior parte della Namibia centrale e meridionale",
              "Il rischio è massimo durante la stagione delle piogge (nov.-apr.); i tratti lungo i fiumi Kunene, Zambesi e Okavango presentano un certo rischio tutto l'anno",
              "Il ministero della Sanità namibiano ha registrato un forte aumento dei casi all'inizio del 2026, concentrato nello Zambesi, nel Kavango East e nel Kavango West, il che ha innescato una risposta sostenuta dall'OMS: se il tuo itinerario attraversa queste regioni, considera la profilassi come non negoziabile, non facoltativa",
              "La scelta della profilassi (più spesso atovaquone-proguanil, doxiciclina o meflochina) dipende dal tuo itinerario, dalle date e dalla tua storia clinica: è un medico specializzato in medicina dei viaggi a doverlo confermare, non una guida generale",
            ].map((item) => (
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
        </Reveal>
      </section>
    </>
  );
}
