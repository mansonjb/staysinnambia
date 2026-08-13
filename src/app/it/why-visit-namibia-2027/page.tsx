import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Perché visitare la Namibia nel 2027";
const DESCRIPTION =
  "Un bilancio onesto per un viaggio in Namibia nel 2027: cosa è davvero cambiato quest'anno, il quadro stagionale mese per mese e una sezione dedicata alla luna di miele, originale e approfondita.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/why-visit-namibia-2027",
    languages: {
      en: "/why-visit-namibia-2027",
      de: "/de/why-visit-namibia-2027",
      nl: "/nl/why-visit-namibia-2027",
      fr: "/fr/why-visit-namibia-2027",
      it: "/it/why-visit-namibia-2027",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const REASONS_2027 = [
  {
    title: "I prezzi si sono già stabilizzati, non stanno per aumentare di nuovo",
    text: "Le tariffe d'ingresso ai parchi nazionali della Namibia sono salite bruscamente il 1° aprile 2026, un aumento dell'86% che è stato il primo dal 2021. È il tipo di cambiamento che coglie di sorpresa chi ha pianificato il viaggio su una guida più vecchia. Un viaggio nel 2027 viene calcolato fin dal primo giorno sulla nuova normalità: si pianifica un budget sulla struttura tariffaria attuale, non su una superata, e la storia suggerisce che un aumento di questa portata non si ripeterà per qualche anno.",
  },
  {
    title: "La grande deviazione a Etosha dovrebbe finalmente liberarsi",
    text: "Un progetto di ammodernamento stradale ha chiuso il collegamento diretto tra Okaukuejo e Halali, con una deviazione obbligatoria in vigore dal 2 giugno 2026 fino a luglio 2027. Chi visita a inizio 2027 percorrerà ancora la deviazione via Gemsbokvlakte e Rhino Drive; chi visita nella seconda metà dell'anno ha una possibilità concreta che il percorso diretto sia già stato riaperto. In entrambi i casi, verificate lo stato aggiornato con NWR prima di partire, perché i tempi dei cantieri possono slittare, ma il 2027 è l'anno in cui questo specifico fastidio è previsto finire.",
  },
  {
    title: "Il riconoscimento è recente, ma la folla non lo ha ancora raggiunto",
    text: "La Namibia è stata inserita tra le mete top della guida Best in Travel 2026 di Lonely Planet, per i suoi elefanti adattati al deserto e per un turismo orientato alla conservazione, e lo Shipwreck Lodge ha ricevuto una Michelin Key nella prima edizione della Global Michelin Keys Selection della guida nel 2025. Sono entrambi segnali genuini e recenti di un paese che entra in una fascia più alta di attenzione internazionale. Questo tipo di riconoscimento impiega di solito qualche anno per tradursi in campi più pieni e tariffe più alte. Il 2027 si colloca proprio all'inizio di quella finestra, dopo il riconoscimento ma prima dei suoi effetti più ampi.",
  },
  {
    title: "Il sistema dei visti si è assestato",
    text: "Dal 1° aprile 2025, il Visto all'Arrivo namibiano richiede una pre-domanda online obbligatoria anziché il pagamento in aeroporto, e l'elenco delle nazionalità idonee è cresciuto ulteriormente nell'ottobre 2025 con altri 36 paesi aggiunti. Nel 2027 questa transizione non sarà più una novità: il sistema online avrà avuto circa due anni per smussare i primi attriti, e la maggior parte delle nazionalità che pianifica di viaggiare saprà già se deve fare domanda e quanto costa. Verificate comunque lo stato della vostra nazionalità sul portale ufficiale prima di prenotare, perché l'elenco può ancora cambiare.",
  },
  {
    title: "Un anno più tranquillo prima della corsa all'eclissi del 2030",
    text: "La prossima eclissi solare totale in Namibia non arriverà prima del 25 novembre 2030, quando la fascia di totalità attraverserà Namibia, Botswana, Sudafrica, Lesotho e Australia. Manca ancora qualche anno, ma gli operatori di astroturismo e i lodge dedicati all'osservazione del cielo pianificano eventi come questo con largo anticipo, e lo status di Riserva Internazionale di Cielo Buio di livello Gold della NamibRand Nature Reserve, detenuto dal 2012, la rende già una base naturale per il turismo dell'eclissi man mano che il 2030 si avvicina. Il 2027 offre gli stessi cieli genuinamente bui a prezzi e disponibilità di un anno qualunque, ben prima di qualsiasi domanda spinta dall'eclissi.",
  },
  {
    title: "I nuovi lodge finalmente andranno a pieno ritmo",
    text: "Il settore turistico namibiano ha continuato a crescere nel 2026, con nuove aperture di lodge segnalate in tutto il nord, incluse nuove strutture nella regione dello Zambesi. I lodge appena aperti trascorrono in genere il primo anno a trovare il proprio ritmo: personale, percorsi guidati e logistica richiedono tempo per assestarsi. Nel 2027, tutto ciò che ha aperto nel 2026 avrà avuto una stagione intera per maturare, il che di solito significa un'esperienza più coerente rispetto a un soggiorno nell'anno di lancio.",
  },
];

const SEASONS_2027 = [
  {
    name: "Stagione secca",
    months: "Maggio – ottobre 2027",
    text: "La classica finestra da safari namibiana. Le piogge si fermano, la vegetazione si dirada e gli animali si concentrano presso le pozze permanenti di Etosha, soprattutto da agosto a ottobre quando la stagione secca stringe la morsa. Luglio è in genere il mese più secco mai registrato, e le notti tra giugno e luglio nell'entroterra desertico scendono regolarmente a 5°C o meno, quindi portate un vero piumino. È anche l'alta stagione delle prenotazioni: i campi del parco nazionale di Etosha vale la pena riservarli con 6-9 mesi di anticipo per un viaggio nella stagione secca 2027, il che significa iniziare a pianificare a metà-fine 2026.",
  },
  {
    name: "Stagione verde",
    months: "Novembre 2027 – aprile 2028",
    text: "I primi temporali sparsi di novembre crescono fino al picco tra gennaio e marzo, quando il deserto rinverdisce quasi da un giorno all'altro e gli uccelli migratori paleartici si uniscono alle specie residenti per il birdwatching più intenso dell'anno. La fauna si disperde lontano dalle pozze d'acqua man mano che l'acqua diventa abbondante ovunque, quindi a Etosha gli avvistamenti richiedono più spostamenti in auto. È anche il periodo in cui la stagione dei parti porta nuovi impala e springbok sulle pianure, e in cui la fotografia di nuvole e luce drammatiche dà il meglio di sé.",
  },
  {
    name: "Mesi di transizione",
    months: "Aprile-maggio e settembre-ottobre 2027",
    text: "Il miglior compromesso tra condizioni e affluenza del calendario. Aprile-maggio 2027 regala paesaggi verdi e in fase di asciugatura, con tariffe sotto il picco della stagione secca; settembre-ottobre 2027 regala l'osservazione della fauna al suo massimo di concentrazione, appena prima del reset delle tariffe di gennaio, con campi decisamente meno pieni rispetto ad agosto. Il caldo di ottobre, però, è reale: le regioni desertiche toccano regolarmente i 35-38°C nel primo pomeriggio, quindi pianificate i game drive al mattino presto e nel tardo pomeriggio.",
  },
];

const HONEYMOON_IDEAS = [
  {
    title: "Un rinnovo delle promesse o una cerimonia sotto le stelle al NamibRand",
    text: (
      <>
        La NamibRand Nature Reserve detiene lo status di Riserva Internazionale di Cielo Buio di
        livello Gold dal 2012, una delle poche riserve Gold al mondo, con letture dello Sky
        Quality Meter che superano regolarmente le 21 magnitudini per arcosecondo quadrato,
        vicino ai cieli più bui misurabili sulla Terra. Diversi lodge ai confini della riserva
        organizzano sessioni guidate di astronomia con veri telescopi, non solo una coperta sulla
        sabbia, e un numero crescente di coppie sceglie di far coincidere una cena privata o un
        informale rinnovo delle promesse con una notte senza luna. Sceglietela intorno alla luna
        nuova e leggete la nostra guida completa{" "}
        <Link
          href="/it/namibia-stargazing-photography"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          all&apos;osservazione delle stelle e all&apos;astrofotografia
        </Link>{" "}
        prima di prenotare.
      </>
    ),
  },
  {
    title: "Isolamento tra i massi nel Damaraland",
    text: (
      <>
        Per una notte, lasciate perdere la classica cartolina delle dune e optate per qualcosa di
        strano e affascinante:{" "}
        <Link href="/it/lodges/doro-nawas-camp" className="font-semibold text-rust hover:text-rust-dark">
          Camp Kipwe
        </Link>{" "}
        costruisce i suoi bungalow in pietra a forma di igloo direttamente tra le crepe di massi
        di granito ammucchiati vicino a Twyfelfontein, mentre{" "}
        <Link href="/it/lodges/damaraland-camp" className="font-semibold text-rust hover:text-rust-dark">
          Mowani Mountain Camp
        </Link>{" "}
        colloca le sue camere su piattaforme rialzate un po' più a nord, nello stesso paesaggio di
        granito rosso. Entrambi mettono a portata di mano safari guidati alla ricerca degli
        elefanti adattati al deserto durante il giorno e un sundowner su uno sperone roccioso alla
        sera. È uno sfondo di luna di miele genuinamente diverso rispetto alle dune su cui puntano
        di default molti itinerari, e pochi altri viaggiatori si spingono fin qui. Consultate la
        nostra{" "}
        <Link href="/it/where-to-stay/damaraland" className="font-semibold text-rust hover:text-rust-dark">
          guida ai lodge del Damaraland
        </Link>{" "}
        per l&apos;elenco completo.
      </>
    ),
  },
  {
    title: "Costruite il vostro itinerario: una luna di miele in self-drive, insieme",
    text: (
      <>
        La maggior parte dei consigli sulla luna di miele spinge verso un viaggio interamente
        guidato e già pianificato, e c'è una ragione concreta per quella comodità. Ma la rete
        stradale namibiana, con le sue strade asfaltate e ben tenute strade sterrate di categoria
        C, è genuinamente accessibile per guidatori sicuri di sé, e una luna di miele in self-drive
        ha un suo romanticismo particolare: nessun orario fisso, nessuno che decide per voi quando
        lasciare un tramonto, voi due soli in macchina per lunghi tratti con solo la radio e la
        strada. È adatta a chi preferisce costruire il proprio viaggio piuttosto che seguirne uno
        già pronto. Leggete il nostro{" "}
        <Link
          href="/it/self-drive-vs-guided-namibia"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          confronto tra self-drive e viaggio guidato
        </Link>{" "}
        per capire se questo compromesso fa per voi.
      </>
    ),
  },
  {
    title: "Una deviazione sulla Skeleton Coast da Swakopmund",
    text: (
      <>
        La maggior parte degli itinerari di luna di miele si ferma alle dune e alla costa di
        Swakopmund e torna indietro. Una deviazione a nord verso Cape Cross, raggiungibile in
        self-drive sia da Swakopmund sia dal Damaraland, vi porta presso una delle colonie di otarie
        orsine del Capo più grandi del continente, decine di migliaia di animali in stagione,
        contro lo stesso litorale avvolto dalla nebbia e disseminato di relitti che ha dato il nome
        alla Skeleton Coast. È un paesaggio aspro più che pittoresco, e proprio questo contrasto
        rispetto al resto di una luna di miele in Namibia (dune, massi, pozze d&apos;acqua) è il
        punto: una giornata che si sente genuinamente diversa da qualsiasi altra tappa del viaggio.
      </>
    ),
  },
  {
    title: "Tempo rispettoso e guidato in una comunità himba",
    text: (
      <>
        Non ogni luna di miele deve essere solo intimità privata. Una visita guidata e rispettosa a
        una comunità himba nel Kaokoland, organizzata tramite una guida con una relazione reale e
        continuativa con la comunità, come il Kaoko Information Centre di Opuwo, offre alla coppia
        un&apos;esperienza condivisa che è sostanziale, non decorativa: acquistare insieme le
        provviste in anticipo, chiedere il consenso prima di ogni fotografia e seguire i confini
        posti dalla comunità stessa piuttosto che quelli di un itinerario. Di solito viene
        organizzata come estensione dal Damaraland, aggiungendo almeno un giorno di guida in
        ciascuna direzione. La nostra{" "}
        <Link href="/it/himba-culture-namibia" className="font-semibold text-rust hover:text-rust-dark">
          guida alla cultura himba
        </Link>{" "}
        spiega come farlo nel modo giusto.
      </>
    ),
  },
  {
    title: "Il romanticismo da castello-resort al Le Mirage",
    text: (
      <>
        Per le coppie che desiderano il paesaggio delle dune senza rinunciare al comfort di un
        resort,{" "}
        <Link href="/it/lodges/little-kulala" className="font-semibold text-rust hover:text-rust-dark">
          Le Mirage Resort &amp; Spa
        </Link>{" "}
        è l&apos;eccezione sulla mappa dei lodge namibiani: una struttura in stile castello sulla
        strada D826 vicino al gate di Sesriem, con camere a torre a cielo aperto pensate
        specificamente per dormire sotto il cielo, e una spa completa in loco (la Mystique Spa) in
        un paese dove la maggior parte dei menu spa dei lodge resta ancora modesta. Chiedete la
        notte con le previsioni meteo più limpide del vostro soggiorno per la camera a torre,
        perché i cieli tersi e privi di inquinamento luminoso del Namib-Naukluft meritano di essere
        pianificati con attenzione.
      </>
    ),
  },
  {
    title: "Tracciare la fauna insieme, a piedi",
    text: (
      <>
        Un&apos;esperienza condivisa e fisica tende a restare impressa in una coppia più a lungo di
        una vista condivisa. La Palmwag Concession, nel Damaraland occidentale, è uno dei pochi
        luoghi in Africa dove si può praticare il tracking a piedi del rinoceronte nero, gestito
        insieme alle conservancy comunitarie locali, e viene solitamente prenotato come attività
        dedicata piuttosto che come aggiunta occasionale. Non è un pomeriggio di spa, è una vera
        avventura da vivere insieme, guidati da qualcuno che legge le tracce per mestiere.
        Mettete in conto tempo extra per la pianificazione: la nostra{" "}
        <Link href="/it/luxury-namibia" className="font-semibold text-rust hover:text-rust-dark">
          guida alla Namibia di lusso
        </Link>{" "}
        spiega come funziona di solito l&apos;accesso in volo a concessioni come questa.
      </>
    ),
  },
  {
    title: "Una tappa boutique a Windhoek, non solo uno scalo",
    text: (
      <>
        La maggior parte degli itinerari tratta Windhoek come una singola notte da smaltire a
        ciascuna estremità del viaggio.{" "}
        <Link
          href="/it/lodges/the-olive-exclusive"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          The Olive Exclusive
        </Link>
        , un boutique hotel di sette suite ciascuna ispirata a una diversa regione namibiana e con
        piscina privata propria, merita di essere trattato come un&apos;occasione vera e propria: una
        prima o un&apos;ultima notte autentica, non solo un posto dove smaltire il jet lag prima che
        inizi il vero viaggio.
      </>
    ),
  },
];

const PLANNING_LINKS = [
  {
    title: "Requisiti visto",
    stat: "90 US$",
    text: "La maggior parte delle nazionalità fa domanda online in anticipo per il Visto all'Arrivo, non più in aeroporto, dal 1° aprile 2025. Verificate lo stato della vostra nazionalità prima di prenotare i voli.",
    href: "/it/namibia-visa-requirements",
    cta: "Verifica i requisiti visto",
  },
  {
    title: "Per quanti giorni andare",
    stat: "7-21 giorni",
    text: "Le distanze di guida in Namibia fanno sì che sia la durata del viaggio a determinare il percorso, più che il contrario. Confrontate le opzioni da 7, 10, 14 e 21 giorni.",
    href: "/it/itineraries",
    cta: "Costruisci il tuo itinerario",
  },
  {
    title: "Quanto costa",
    stat: "225-700€+/giorno",
    text: "Dal self-drive economico al lusso interamente guidato: le fasce di prezzo per persona e per giorno di tutte e tre le categorie, e cosa determina davvero la cifra.",
    href: "/it/namibia-trip-cost",
    cta: "Vedi il dettaglio dei costi",
  },
  {
    title: "Self-drive o guidato",
    stat: "Decidete voi",
    text: "Costi, libertà, rischio e comfort: i compromessi onesti tra guidare da soli e prenotare una guida, senza spingere per nessuna delle due opzioni.",
    href: "/it/self-drive-vs-guided-namibia",
    cta: "Confronta self-drive e guidato",
  },
];

const FAQS = [
  {
    q: "C'è un evento astronomico speciale in Namibia nel 2027?",
    a: "No, nessuna eclissi solare totale tocca la Namibia nel 2027. C'è un'eclissi solare parziale visibile da Windhoek il 6 febbraio 2027 e un'altra il 2 agosto 2027, ma le fasce di totalità/anularità di entrambe cadono altrove in Africa. La prossima eclissi solare totale in Namibia sarà il 25 novembre 2030, quando la fascia di totalità attraverserà Namibia, Botswana, Sudafrica, Lesotho e Australia. Se i cieli bui sono la vostra priorità, lo status di Riserva di Cielo Buio di livello Gold del NamibRand rende quasi ogni notte serena e senza luna del 2027 già di per sé un'esperienza da vivere, senza bisogno di pianificare intorno a un evento raro.",
  },
  {
    q: "Il 2027 è davvero un anno migliore rispetto al 2026 o al 2028?",
    a: "Non c'è un'unica ragione clamorosa per cui il 2027 supera gli anni vicini, e preferiamo essere onesti piuttosto che inventarne una. Ciò che favorisce davvero il 2027 è una combinazione di fattori più piccoli ma reali: le tariffe dei parchi nazionali, resettate ad aprile 2026, si sono ormai assestate sulla nuova normalità invece di essere ancora uno shock recente, la deviazione stradale a Etosha tra Okaukuejo e Halali è prevista terminare entro luglio 2027, il sistema dei visti online ha avuto due anni per maturare dal suo lancio nell'aprile 2025, e il recente riconoscimento di Lonely Planet e Michelin per la Namibia è ancora abbastanza fresco da non aver avuto effetti pieni su folla e prezzi.",
  },
  {
    q: "Quando conviene prenotare un viaggio in Namibia nel 2027?",
    a: "Per un viaggio nella stagione secca (maggio-ottobre 2027), iniziate a pianificare con 6-9 mesi di anticipo, soprattutto se i campi del parco nazionale di Etosha fanno parte del percorso, perché sono i primi a esaurirsi. Per la stagione verde (novembre 2027-aprile 2028), in genere si può pianificare con meno anticipo, anche se voli e lodge di fascia alta beneficiano comunque di una prenotazione anticipata.",
  },
  {
    q: "Serve un 4x4 per un viaggio in Namibia nel 2027?",
    a: "Dipende dal percorso, non dall'anno. Il classico anello Windhoek-Sossusvlei-Swakopmund è gestibile con un normale 2x4. Le strade sterrate di categoria D del Damaraland ed eventuali estensioni nel Kaokoland sono dove un 4x4 diventa utile. Consultate il nostro confronto tra self-drive e guidato e le nostre guide agli itinerari per consigli specifici sul percorso.",
  },
  {
    q: "La Namibia va bene per una luna di miele nel 2027?",
    a: "Sì, e si può sostenere che sia una finestra particolarmente favorevole: il recente riconoscimento internazionale (Best in Travel 2026 di Lonely Planet, Michelin Key 2025 dello Shipwreck Lodge) non ha ancora provocato il tipo di affollamento che segue qualche anno dopo, quindi i veri punti di forza del paese per una luna di miele, privacy, cieli bui, paesaggi drammatici con pochissimi altri viaggiatori, restano pienamente intatti. Vedete le idee originali per la luna di miele più sopra, oppure la nostra guida dedicata alla luna di miele per l'elenco dei lodge più romantici.",
  },
  {
    q: "Cosa è cambiato più di recente e influisce sulla pianificazione del viaggio nel 2027?",
    a: "Tre cose da sapere prima di prenotare: il Visto all'Arrivo namibiano ora richiede una pre-domanda online obbligatoria anziché il pagamento in aeroporto, in vigore dal 1° aprile 2025, con altre 36 nazionalità idonee aggiunte nell'ottobre 2025. Le tariffe d'ingresso ai parchi nazionali sono aumentate dell'86% il 1° aprile 2026, il primo aumento dal 2021. E una deviazione stradale obbligatoria tra i campi di Okaukuejo e Halali a Etosha è in vigore dal 2 giugno 2026, prevista terminare entro luglio 2027, anche se i tempi dei cantieri possono slittare.",
  },
  {
    q: "La Namibia sarà più affollata nel 2027 a causa del suo recente riconoscimento?",
    a: "Non in modo drastico, in base a come questo tipo di riconoscimento si sviluppa di solito. Essere stati inseriti nella Best in Travel 2026 di Lonely Planet e la Michelin Key 2025 dello Shipwreck Lodge sono entrambi segnali reali che l'attenzione internazionale sulla Namibia sta crescendo, ma questa attenzione impiega di solito qualche anno per tradursi in campi materialmente più pieni e tariffe più alte. Il 2027 si colloca abbastanza presto in quella finestra perché il fascino principale della Namibia, una genuina remotezza e una densità di visitatori molto bassa rispetto agli altri paesi da safari dell'Africa australe, dovrebbe reggere ancora.",
  },
];

const POPULAR_LINKS_IT = [
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

export default function WhyVisit2027PageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Guide", url: `${SITE_URL}/it/guides` },
          { name: "Perché visitare la Namibia nel 2027", url: `${SITE_URL}/it/why-visit-namibia-2027` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guida
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Perché visitare la Namibia nel 2027
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Lo diciamo subito: non c&apos;è nessuna eclissi solare totale, nessun anniversario da
          una volta al secolo, nessuna singola ragione clamorosa per cui il 2027 si distingua da
          qualsiasi altro anno in Namibia. Quello che c&apos;è è un vero e proprio insieme di
          ragioni più piccole ma concrete per cui il 2027, in particolare, è un anno ben scelto
          per prenotare finalmente il viaggio, da una struttura tariffaria che si è appena
          assestata a un paese il cui riconoscimento internazionale è ancora abbastanza recente da
          non aver fatto arrivare la folla. Di seguito trovate il bilancio onesto, il quadro
          stagionale mese per mese e una sezione dedicata alla luna di miele deliberatamente
          originale, dato che tanti consigli sulla luna di miele in questo paese ripetono sempre
          le stesse quattro idee.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Il nostro consiglio:</span> se dovete
          scegliere tra il 2027 e rimandare ulteriormente il viaggio, scegliete il 2027. Gli
          ostacoli pratici che rendevano più difficile pianificare un viaggio in Namibia (un
          processo di visto poco chiaro, una struttura tariffaria poco chiara, una deviazione
          stradale attiva a Etosha) sono già risolti oppure previsti risolversi entro l&apos;anno,
          e il recente riconoscimento del paese non si è ancora tradotto in campi materialmente
          più pieni.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Cosa è davvero diverso nel 2027
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Non il solito ragionamento generico del tipo "ora è sempre un buon momento per
            viaggiare": sei elementi specifici e datati, veri per questo anno in particolare.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS_2027.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 60}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <MetaIcon name="check" className="h-5 w-5 text-olive" />
              <h3 className="mt-4 text-[15px] font-bold text-charcoal">{r.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-charcoal/70">{r.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h3 className="text-lg font-bold text-charcoal">
            Una nota sulla questione dell&apos;eclissi, visto che ce lo chiedono
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            Abbiamo verificato se un vero evento astronomico giustificasse la scelta di costruire
            questa guida intorno al 2027, dato che i cieli bui della Namibia ne fanno una
            destinazione naturale per l&apos;astroturismo. Non è così: le due eclissi solari che
            toccano la Namibia nel 2027 (6 febbraio e 2 agosto) sono entrambe parziali dal suolo
            namibiano, con le fasce di anularità e totalità che cadono rispettivamente in Africa
            occidentale e in Nord Africa/Penisola arabica. La prossima eclissi solare totale della
            Namibia non arriverà prima del 25 novembre 2030. Preferiamo dirvelo chiaramente
            piuttosto che inventare un aggancio che non regge. Ciò che il 2027 offre sono gli
            stessi cieli di livello Gold della NamibRand Nature Reserve che la Namibia offre ogni
            anno, senza il picco di domanda che probabilmente si formerà con l&apos;avvicinarsi
            del 2030.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            La Namibia nel 2027, stagione per stagione
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Il clima di fondo non cambia da un anno all&apos;altro, ma sapere esattamente in quali
            mesi cade ciascuna stagione nel 2027 conta per i tempi di prenotazione. Per il quadro
            completo mese per mese, consultate la nostra{" "}
            <Link
              href="/it/best-time-to-visit-namibia"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              guida al periodo migliore per visitare la Namibia
            </Link>
            .
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SEASONS_2027.map((season, i) => (
            <Reveal key={season.name} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-charcoal">{season.name}</h3>
                <p className="mt-1 text-[12px] uppercase tracking-[0.1em] text-rust">
                  {season.months}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-charcoal/70">{season.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Una luna di miele originale in Namibia
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            La maggior parte dei consigli sulla luna di miele in Namibia, compresi i nostri, si
            appoggia sempre alle stesse idee: una cena privata tra le dune, un&apos;alba in
            mongolfiera, una spa in stile castello. Sono idee genuinamente valide e vale la pena
            viverle. Ma se volete una luna di miele nel 2027 che sembri davvero vostra invece di
            una lista di cose da fare presa da qualsiasi altra guida, ecco otto idee che vanno
            oltre, organizzate all&apos;incirca dalla più tranquilla alla più avventurosa.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {HONEYMOON_IDEAS.map((idea, i) => (
            <Reveal
              key={idea.title}
              delay={(i % 4) * 60}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <span className="font-serif text-2xl italic text-rust">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-[15px] font-bold text-charcoal">{idea.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-charcoal/70">{idea.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h3 className="text-lg font-bold text-charcoal">Sul ritmo di una luna di miele</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            Una luna di miele funziona meglio se più breve rispetto a un primo circuito in
            Namibia. Due o tre delle idee qui sopra, con tre o quattro notti ciascuna, invece del
            giro con cinque tappe in dieci giorni che spesso costruiscono i primi visitatori, è
            tempo sufficiente per rallentare davvero, e lascia spazio per aggiungere una cena
            privata o un volo in mongolfiera senza che il viaggio sembri una lista di cose da
            spuntare. Consultate la nostra{" "}
            <Link href="/it/namibia-honeymoon" className="font-semibold text-rust hover:text-rust-dark">
              guida alla luna di miele in Namibia
            </Link>{" "}
            per l&apos;elenco principale dei lodge, oppure la nostra{" "}
            <Link href="/it/best-romantic-stays" className="font-semibold text-rust hover:text-rust-dark">
              guida ai soggiorni più romantici
            </Link>{" "}
            per l&apos;elenco completo.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">Pianificare il lato pratico</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Una volta decisi i tempi, quattro elementi definiscono il resto del piano.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANNING_LINKS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <p className="font-serif text-2xl italic text-rust">{p.stat}</p>
                <h3 className="mt-2 text-[14px] font-bold text-charcoal">{p.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-charcoal/70">{p.text}</p>
                <span className="mt-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-rust group-hover:text-rust-dark">
                  {p.cta} →
                </span>
              </Link>
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
          {POPULAR_LINKS_IT.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
            >
              {g.title}
            </Link>
          ))}
          <Link
            href="/it/namibia-honeymoon"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Luna di miele in Namibia
          </Link>
          <Link
            href="/it/luxury-namibia"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibia di lusso
          </Link>
          <Link
            href="/it/itineraries"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Itinerari in Namibia
          </Link>
        </Reveal>
      </section>
    </>
  );
}
