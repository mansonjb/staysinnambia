import {
  lodges,
  regions,
  selfDriveRoutes,
  type Lodge,
  type LodgeCategory,
  type Region,
  type RoutePlan,
} from "./data";

/**
 * Italian field overrides, keyed by slug. Non-text fields (slug/lat/lng/image/categories/
 * regionSlug/nights/days) are reused from the English data in data.ts and never overridden
 * here. Missing keys/fields silently fall back to the English value (safe during translation
 * rollout, never crashes a build), but every slug below MUST be fully translated before the
 * /it pages ship, this is a checklist, not a permanent fallback.
 */

type RegionTranslation = Partial<
  Pick<
    Region,
    | "description"
    | "quickAnswer"
    | "bestFor"
    | "avoidIf"
    | "recommendedStay"
    | "driveFromWindhoek"
    | "alt"
    | "pros"
    | "cons"
    | "nearby"
    | "faqs"
    | "knownFor"
    | "dayPlans"
  >
>;

export const regionTranslationsIt: Record<string, RegionTranslation> = {
  etosha: {
    description:
      "Un'immensa distesa salina orlata di pozze d'acqua dove elefanti, leoni e rinoceronti si radunano al crepuscolo.",
    quickAnswer:
      "Etosha è la destinazione faunistica di punta della Namibia: un parco nazionale di 22.000 km² costruito attorno a una distesa salina così vasta da essere visibile dallo spazio e che copre circa un quarto della superficie del parco. Si entra da tre cancelli principali: Von Lindequist a est, Anderson a sud vicino a Okaukuejo, e King Nehale a nord. La scelta del cancello determina l'intero itinerario. Sistematevi in un lodge sulle riserve private confinanti con il parco (Ongava, Onguma) per i safari notturni e il tracking fuoristrada, oppure all'interno del parco stesso per osservare le pozze d'acqua illuminate senza mai lasciare il campo.",
    bestFor: "Primo safari, fotografia naturalistica",
    avoidIf: "Volete inserire una deviazione balneare o costiera nello stesso tratto di viaggio",
    recommendedStay: "3-4 notti",
    driveFromWindhoek: "circa 4h30",
    alt: "Un elefante sulle pianure secche e polverose del Parco Nazionale di Etosha",
    pros: [
      "Uno degli avvistamenti di fauna più affidabili dell'Africa australe",
      "Le pozze d'acqua illuminate portano gli animali fino a voi dopo il tramonto",
      "Strade ben mantenute, percorribili con un normale 2x4 nella stagione secca",
    ],
    cons: [
      "I cancelli e i limiti di velocità sono controllati rigorosamente all'interno del parco nazionale",
      "Nella stagione secca l'affluenza si concentra attorno alle pozze d'acqua più frequentate",
      "Gli alloggi all'interno del parco si esauriscono presto in alta stagione",
    ],
    nearby: ["Damaraland (arte rupestre ed elefanti del deserto)", "Altopiano di Waterberg"],
    faqs: [
      {
        q: "Quante notti conviene trascorrere a Etosha?",
        a: "Tre o quattro notti permettono di coprire sia la sezione orientale sia quella occidentale senza dover correre da una pozza d'acqua all'altra.",
      },
      {
        q: "Meglio alloggiare all'interno del parco o in una riserva privata?",
        a: "Le riserve private come Ongava permettono safari notturni e tracking fuoristrada, non consentiti all'interno del parco nazionale vero e proprio: un compromesso reale rispetto a soggiornare dentro il parco per la classica esperienza del campo con pozza d'acqua illuminata.",
      },
      {
        q: "C'è attualmente una strada chiusa a Etosha?",
        a: "Sì, un progetto di ammodernamento stradale ha chiuso il percorso diretto tra Okaukuejo e Halali, con una deviazione obbligatoria in vigore dal 2 giugno 2026 fino a luglio 2027. Il traffico viene deviato tramite la circonvallazione di Gemsbokvlakte (fino a circa il km 47) e poi Rhino Drive per raggiungere Halali, con solo le pozze d'acqua di Gemsbokvlakte, Sueda e Salvadora accessibili su questo tratto. Mettete in conto molto più tempo di guida tra i due campi rispetto a quanto suggeriscono le guide più datate, e verificate lo stato aggiornato presso NWR prima di partire, poiché queste date possono cambiare in base all'avanzamento dei lavori.",
      },
      {
        q: "Quanto costa l'ingresso al parco di Etosha?",
        a: "Le tariffe sono aumentate bruscamente il 1° aprile 2026: i visitatori internazionali pagano ora N$280 a persona al giorno (contro i precedenti N$150), più una tariffa veicolo di N$620 per due persone, mentre i cittadini SADC e i namibiani pagano meno. È il primo aumento dal 2021, quindi qualsiasi stima dei costi di viaggio scritta prima della metà del 2026 ora sottostima questa voce.",
      },
      {
        q: "Da quale cancello conviene entrare a Etosha?",
        a: "Anderson Gate a sud, vicino a Okaukuejo, è l'ingresso standard per chi arriva da Windhoek o Sossusvlei, ed è il più vicino alle pozze d'acqua più affidabili del parco nella stagione secca. Von Lindequist Gate a est è l'uscita (o l'ingresso) naturale se si prosegue verso il Waterberg o la Caprivi Strip, essendo il più vicino a Fischer's Pan. King Nehale Gate a nord serve principalmente i viaggiatori provenienti dall'Ovamboland. La maggior parte degli itinerari in auto entra da Anderson ed esce da Von Lindequist, attraversando il parco in linea retta invece di tornare sui propri passi.",
      },
      {
        q: "Quanto distano tra loro le pozze d'acqua di Etosha?",
        a: "Le distanze variano molto e non sono regolari. Le pozze d'acqua attorno a Okaukuejo e Namutoni si trovano a breve distanza l'una dall'altra, mentre alcune nella più tranquilla sezione occidentale possono distare anche un'ora o più su piste di ghiaia. Pianificate un giro di tre o quattro pozze d'acqua per uscita invece di provare a coprire l'intero parco in un giorno. Solo la guida consuma gran parte della luce diurna, specialmente al di fuori del percorso di deviazione obbligatorio tra Okaukuejo e Halali.",
      },
    ],
    knownFor: [
      "Pozze d'acqua illuminate",
      "Avvistamenti di rinoceronte nero",
      "Safari in auto propria",
      "L'immensa distesa salina bianca",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Sufficiente solo per la sezione orientale",
        text: "Due notti vi mantengono sul lato orientale di Etosha, tra le pozze d'acqua di Namutoni e Halali. Avrete avvistamenti reali, ma salterete le pozze d'acqua occidentali di Dolomite e Okaukuejo, che la maggior parte delle guide considera le migliori del parco: una scelta sensata solo se Etosha è una tappa fra tante.",
      },
      {
        nights: 4,
        verdict: "La durata giusta per una visita vera e propria",
        text: "Quattro notti permettono di dividere il tempo tra una riserva privata al confine del parco (per i safari notturni e il tracking dei rinoceronti fuoristrada, entrambi vietati all'interno del parco) e un campo dentro il parco stesso per vivere l'esperienza delle pozze d'acqua illuminate dopo il tramonto. Coprirete sia la metà orientale sia quella occidentale senza dover correre da un cancello all'altro.",
      },
    ],
  },
  sossusvlei: {
    description:
      "Le imponenti dune rosse del Namib, gli alberi di spina di cammello morti e alcuni dei cieli notturni più bui della Terra.",
    quickAnswer:
      "Sossusvlei è l'immagine da cartolina della Namibia: dune rosse alte oltre 300 metri che si innalzano da una distesa di argilla bianca all'interno del Namib-Naukluft Park, in un deserto considerato tra i più antichi al mondo. Dune 45, la più scalata e fotografata, prende semplicemente il nome dalla sua posizione, a 45 km lungo la strada dal cancello di Sesriem; gli alberi di spina di cammello fossilizzati di Deadvlei, in piedi da secoli in una conca troppo secca perché possano decomporsi, si trovano a una breve camminata da lì. Alloggiate in una riserva privata confinante con il parco (come Kulala Wilderness Reserve) per avere un cancello privato che vi permette di anticipare la folla dell'alba all'ingresso pubblico.",
    bestFor: "Fotografia, passeggiate tra le dune all'alba",
    avoidIf: "Non amate le partenze mattutine presto: la luce migliore è prima delle 8",
    recommendedStay: "2-3 notti",
    driveFromWindhoek: "circa 5h",
    alt: "Un'imponente duna di sabbia rossa nel deserto del Namib vicino a Sossusvlei",
    pros: [
      "Uno dei paesaggi più fotografati dell'Africa, e se lo merita",
      "I lodge sulla riserva privata dispongono di un proprio cancello, prima della fila pubblica",
      "Alcuni dei cieli notturni più bui al mondo per l'osservazione delle stelle",
    ],
    cons: [
      "Il caldo diurno è estremo da ottobre a marzo",
      "L'ultimo tratto verso Sossusvlei richiede un 4x4 o la navetta",
      "Deadvlei richiede un'ulteriore camminata di 20-45 minuti dal parcheggio per 2x4",
    ],
    nearby: ["Canyon di Sesriem", "Riserva naturale di NamibRand"],
    faqs: [
      {
        q: "Serve un 4x4 per visitare Sossusvlei?",
        a: "No per il tragitto d'accesso, sì per l'ultimo tratto. La strada asfaltata e sterrata fino a Sesriem si percorre bene con un'auto normale; gli ultimi 5 km di sabbia soffice fino a Sossusvlei richiedono un 4x4 o il servizio navetta del parco. La nostra guida al self-drive tratta la scelta del veicolo per il resto del paese, se state pianificando un circuito completo.",
      },
      {
        q: "A che ora conviene arrivare alle dune?",
        a: "Proprio all'apertura del cancello, che coincide con l'alba. Arrivare a quell'ora permette di evitare sia il caldo sia la folla su Dune 45 e a Deadvlei. Anche solo 30 minuti di ritardo in alta stagione bastano perché il parcheggio di Sesriem cominci già a riempirsi.",
      },
      {
        q: "Si può ancora guidare da soli fino a Deadvlei?",
        a: "No, dal 1° maggio 2026 i veicoli privati, 4x4 compresi, non sono più ammessi sull'ultimo tratto di circa 5 km di pista sabbiosa dal parcheggio per 2x4 all'area di parcheggio 4x4 di Deadvlei/Big Daddy. Quel tratto è ora riservato esclusivamente alla navetta, utilizzando il servizio ufficiale o un veicolo di un lodge registrato presso l'NTB, al costo di circa N$260 per adulto e N$130 per bambino sotto i 12 anni (tariffe soggette a variazione: verificate i prezzi aggiornati prima di partire). È un cambiamento recente per proteggere il Namib Sand Sea, e vengono spesso segnalati tempi di attesa della navetta di circa 30 minuti, da tenere in conto nella pianificazione della mattinata.",
      },
      {
        q: "Quanto sono alte le dune di Sossusvlei?",
        a: "Big Daddy, accanto a Deadvlei, è la più alta della zona immediata, con circa 325 metri, tra le dune più alte della Terra. Dune 45, la più scalata, è più bassa ma molto più accessibile, e si trova proprio a bordo strada, a 45 km dal cancello di Sesriem. 'Big Mama', accanto a Deadvlei stessa, è la salita più breve e facile, se la cresta di Big Daddy sembra troppo impegnativa prima di colazione.",
      },
      {
        q: "Quanto è profondo il canyon di Sesriem?",
        a: "Il canyon di Sesriem si incide per circa 30 metri nella pianura lungo un tratto di circa un chilometro, scavato dal fiume Tsauchab: è abbastanza poco profondo da poterci camminare dentro senza attrezzatura tecnica, ed è una buona opzione ombreggiata a metà giornata, quando le dune diventano troppo calde per essere scalate.",
      },
    ],
    knownFor: [
      "Dune rosse di 300 metri",
      "Gli alberi di spina di cammello morti di Deadvlei",
      "Alcuni dei cieli notturni più bui della Terra",
      "Passeggiate tra le dune all'alba",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Fattibile, ma solo un'alba alle dune",
        text: "Due notti offrono una sessione completa all'alba: Dune 45, poi Deadvlei con la navetta, poi il canyon di Sesriem nel tardo pomeriggio più fresco. È un programma stretto: ottenete lo scatto da cartolina, ma non avete margine se la luce o le energie non sono giuste il primo mattino.",
      },
      {
        nights: 3,
        verdict: "La durata giusta per una visita vera e propria",
        text: "Tre notti offrono due sessioni all'alba alle dune invece di una, spazio per aggiungere una serata di osservazione delle stelle lato Riserva naturale di NamibRand, e un vero pomeriggio di riposo invece di ripartire subito in auto. È la durata che prenoteremmo davvero.",
      },
    ],
  },
  swakopmund: {
    description:
      "Una cittadina balneare coloniale dove le dune incontrano l'Atlantico, e il ritmo finalmente rallenta.",
    quickAnswer:
      "Swakopmund è il pulsante di reset costiero della Namibia, una cittadina di stile coloniale tedesco, percorribile a piedi, fondata nel 1892 come principale porto dell'Africa Sud-Occidentale Tedesca, incuneata tra le dune del Namib e il mare freddo dell'Atlantico. Vanta ristoranti davvero buoni, un intero menu di attività adrenaliniche (paracadutismo, sandboarding, quad) a due passi, e si trova a meno di un'ora dalla laguna di Walvis Bay, una zona umida protetta dalla Convenzione di Ramsar che attira migliaia di fenicotteri minori e maggiori.",
    bestFor: "Una pausa dalla guida, attività d'avventura",
    avoidIf: "Avete pochi giorni a disposizione e dovete dare priorità al tempo dedicato alla fauna",
    recommendedStay: "2 notti",
    driveFromWindhoek: "circa 4h",
    alt: "Il faro rosso e bianco di Swakopmund, in Namibia",
    pros: [
      "Di gran lunga il miglior cibo e caffè di tutto un circuito in auto in Namibia",
      "Un vero cambio di ritmo dopo giorni di guida e safari",
      "Un'ampia gamma di attività prenotabili direttamente tramite l'hotel",
    ],
    cons: [
      "La nebbia costiera (la cosiddetta 'foschia della Costa degli Scheletri') può persistere fino a tarda mattinata",
      "L'Atlantico qui è troppo freddo e mosso per fare il bagno",
      "La brezza marina rende le serate più fresche rispetto all'entroterra desertico",
    ],
    nearby: ["Laguna di Walvis Bay (fenicotteri)", "Cintura di dune del deserto del Namib"],
    faqs: [
      {
        q: "Vale la pena fermarsi due notti a Swakopmund?",
        a: "Sì, se volete inserire un'attività costiera come lo sandboarding o una gita in barca a Walvis Bay senza avere fretta; una sola notte basta per una cena e una passeggiata in città.",
      },
      {
        q: "Quanto è fredda l'acqua dell'Atlantico a Swakopmund?",
        a: "Abbastanza fredda da rendere il bagno non l'attrattiva principale. La corrente di Benguela porta acqua fredda dall'Atlantico meridionale, mantenendo la temperatura del mare bassa tutto l'anno, anche quando l'aria sopra le dune, poco più nell'entroterra, è calda. È anche questa corrente a generare la nebbia costiera che può persistere fino a tarda mattinata, chiamata a volte 'foschia della Costa degli Scheletri', lo stesso effetto della corrente che modella quella regione più a nord.",
      },
      {
        q: "Si può fare paracadutismo a Swakopmund?",
        a: "Sì, i lanci in tandem sopra la cintura di dune e la costa sono una delle attività simbolo della città, con partenza da un piccolo aereo dall'aeroporto locale, meteo e nebbia permettendo. Lo sandboarding e il quad sulle dune appena fuori città non dipendono dal cielo sereno come il paracadutismo, quindi sono l'alternativa più affidabile se la nebbia mattutina non si è ancora diradata.",
      },
    ],
    knownFor: [
      "Architettura coloniale tedesca",
      "Paracadutismo e sandboarding",
      "Fenicotteri di Walvis Bay",
      "Il miglior cibo della Namibia",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Va bene come tappa di passaggio, non come vera visita",
        text: "Una notte basta per camminare sul molo, fare una buona cena e dormire, per una volta, in un posto che non è un lodge. Non avrete tempo di prenotare un'attività. Consideratela una pausa, non una destinazione.",
      },
      {
        nights: 2,
        verdict: "La durata giusta per fare davvero qualcosa",
        text: "Due notti lasciano spazio per un'attività vera e propria (sandboarding sulle dune appena fuori città, un lancio con il paracadute sopra la costa, o una gita in barca alla laguna dei fenicotteri di Walvis Bay), oltre al programma di passeggiate e pasti che offre una sola notte.",
      },
    ],
  },
  damaraland: {
    description:
      "Montagne ocra, elefanti adattati al deserto e alcune delle arti rupestri più suggestive della Namibia.",
    quickAnswer:
      "Il Damaraland è il cuore delle conservancy comunitarie della Namibia: un deserto montuoso aperto, dai colori ocra, dove gli elefanti adattati al deserto si spostano tra i letti dei fiumi asciutti, e dove diversi lodge sono realmente di proprietà delle comunità, non solo affiliati a esse. Twyfelfontein, sito patrimonio dell'UNESCO dal 2007, ospita una delle più grandi concentrazioni di incisioni rupestri d'Africa, alcune vecchie di oltre 2.000 anni. La regione del Kunene che la circonda ospita anche una delle più grandi popolazioni al mondo di rinoceronte nero allo stato libero, al di fuori di un parco nazionale recintato.",
    bestFor: "Paesaggi remoti, fauna adattata al deserto",
    avoidIf: "Avete bisogno di avvistamenti di fauna garantiti ogni giorno",
    recommendedStay: "2-3 notti",
    driveFromWindhoek: "circa 5h30",
    alt: "Il paesaggio desertico e roccioso del Damaraland al tramonto",
    pros: [
      "Diversi lodge sono direttamente di proprietà delle comunità, non solo a marchio comunitario",
      "Tracking a piedi o in veicolo di elefanti e rinoceronti adattati al deserto",
      "Le incisioni rupestri di Twyfelfontein sono un vero sito patrimonio dell'UNESCO",
    ],
    cons: [
      "La fauna è selvatica e libera di spostarsi: gli avvistamenti non sono garantiti",
      "Le distanze tra i siti sono lunghe su piste di ghiaia",
      "Meno opzioni gastronomiche rispetto alla costa o alla capitale",
    ],
    nearby: ["Arte rupestre di Twyfelfontein", "Costa degli Scheletri", "Spitzkoppe"],
    faqs: [
      {
        q: "Si possono vedere elefanti nel Damaraland?",
        a: "Non c'è nessuna garanzia, ma un tracking guidato offre una possibilità concreta. Gli elefanti adattati al deserto si spostano lungo i letti dei fiumi asciutti e gli avvistamenti non sono mai garantiti, ma un tracking guidato con un lodge locale offre le migliori probabilità realistiche. La nostra guida sulla fauna spiega cosa aspettarsi dalle specie adattate al deserto in tutto il paese.",
      },
      {
        q: "Dove si possono vedere i rinoceronti adattati al deserto, oltre agli elefanti?",
        a: "La concessione di Palmwag, nel Damaraland occidentale, è uno dei pochi luoghi in Africa a offrire il tracking a piedi del rinoceronte nero, gestito in collaborazione con le conservancy comunitarie locali, lo stesso modello che protegge gli elefanti adattati al deserto della regione. Di solito va prenotato come attività dedicata tramite un lodge dell'area di Palmwag, più che come aggiunta occasionale, quindi va pianificato in anticipo se vi interessa.",
      },
      {
        q: "Vale la pena visitare Twyfelfontein anche se l'arte rupestre non vi interessa particolarmente?",
        a: "Sì, anche solo per il paesaggio. Il sito si trova tra le formazioni di arenaria ocra del Damaraland, tra cui gli Organ Pipes e la Burnt Mountain nelle vicinanze, entrambi meritevoli della breve deviazione anche se le incisioni in sé non sono il vostro interesse principale.",
      },
    ],
    knownFor: [
      "Elefanti adattati al deserto",
      "Incisioni rupestri di Twyfelfontein (UNESCO)",
      "Lodge di proprietà comunitaria",
      "Paesaggi montani color ocra",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Copre i punti salienti, un'unica occasione per la fauna",
        text: "Due notti coprono le incisioni rupestri di Twyfelfontein e un'uscita guidata alla ricerca di elefanti adattati al deserto. Gli avvistamenti non sono garantiti in nessuna singola uscita, quindi questo è il minimo indispensabile, non la soluzione ideale.",
      },
      {
        nights: 3,
        verdict: "La durata giusta, dato che la fauna non è garantita",
        text: "Tre notti vi garantiscono una seconda uscita se la prima non dà risultati, più il tempo per aggiungere il tracking guidato del rinoceronte nero nella concessione di Palmwag, uno dei pochi luoghi in Africa dove questo si fa a piedi, in collaborazione con le conservancy comunitarie.",
      },
    ],
  },
  "skeleton-coast": {
    description:
      "Nebbia, relitti di navi e colonie di otarie lungo una delle coste più remote d'Africa.",
    quickAnswer:
      "La Costa degli Scheletri è il paesaggio più remoto e meno visitato della Namibia, una striscia avvolta dalla nebbia dove le dune del Namib scendono direttamente in un Atlantico freddo e disseminato di relitti. I primi marinai portoghesi la chiamavano 'le Porte dell'Inferno': la stessa corrente fredda di Benguela che genera la nebbia rende anche il litorale pericoloso, e le navi naufragate giacciono ancora semisepolte nella sabbia. La maggior parte dei viaggiatori la scopre con una breve deviazione dal Damaraland, oppure vi arriva in aereo per un soggiorno vero e proprio di più notti con un operatore specializzato.",
    bestFor: "Avventura remota, itinerari in aereo",
    avoidIf: "Il vostro programma in auto è serrato e avete pochi giorni a disposizione",
    recommendedStay: "2 notti",
    driveFromWindhoek: "circa 7h (oppure in aereo)",
    alt: "Un relitto arenato sulla sabbia della Costa degli Scheletri, in Namibia",
    pros: [
      "Isolamento autentico: alcuni lodge non vedono altro traffico per un centinaio di chilometri",
      "Colonie di otarie, relitti ed escursioni alla scoperta della fauna adattata al deserto",
      "Uno dei litorali più spettacolari e meno fotografati d'Africa",
    ],
    cons: [
      "Arrivarci nel modo giusto significa di solito prendere l'aereo, il che aumenta sensibilmente il costo",
      "La nebbia costiera persistente può limitare la visibilità per gran parte della giornata",
      "Pochissime opzioni di alloggio: prenotate con largo anticipo",
    ],
    nearby: ["Damaraland", "Kaokoveld / regione del Kunene"],
    faqs: [
      {
        q: "Bisogna volare per raggiungere la Costa degli Scheletri?",
        a: "Solo per l'estremo nord. Un breve tratto meridionale è raggiungibile in auto dal Damaraland, ma la parte settentrionale della Costa degli Scheletri (dove si trovano i lodge più notevoli) è normalmente accessibile solo in aereo.",
      },
      {
        q: "Cape Cross fa parte della Costa degli Scheletri?",
        a: "Sì, Cape Cross si trova all'estremità meridionale della Costa degli Scheletri, raggiungibile in auto da Swakopmund o dal Damaraland, ed è sede di una delle più grandi colonie di otarie orsine del Capo del continente, decine di migliaia di esemplari in stagione. È la versione accessibile e raggiungibile in auto dell'esperienza della Costa degli Scheletri; i lodge raggiungibili solo in aereo più a nord coprono la sezione davvero remota.",
      },
      {
        q: "Qual è il momento migliore della giornata per visitare la Costa degli Scheletri?",
        a: "Il pomeriggio, una volta che la nebbia si è dissolta. La nebbia costiera è un effetto tutto l'anno della corrente di Benguela, che tipicamente si dirada a metà o tarda mattinata, quindi la maggior parte degli operatori programma le escursioni al pomeriggio invece di combattere con la scarsa visibilità nelle prime ore del giorno.",
      },
    ],
    knownFor: [
      "Relitti",
      "Colonie di otarie orsine del Capo",
      "Isolamento totale",
      "Litorale avvolto dalla nebbia",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "La durata standard, e funziona",
        text: "Due notti sono quanto propongono la maggior parte degli itinerari in aereo, ed è sufficiente: un pomeriggio per un'escursione a una colonia di otarie o a un relitto, un'intera giornata per un giro costiero con la vostra guida, e il tempo necessario perché la nebbia si diradi prima di impegnarvi in un programma per la giornata.",
      },
    ],
  },
  windhoek: {
    description:
      "La capitale compatta della Namibia, dalle influenze tedesche: la maggior parte degli itinerari inizia e finisce qui.",
    quickAnswer:
      "Windhoek è il punto in cui inizia e finisce quasi ogni viaggio in Namibia, grazie all'aeroporto internazionale Hosea Kutako, che si trova a circa 45 minuti dal centro città. La capitale sorge a oltre 1.600 metri di altitudine sull'altopiano dei Khomas, il che rende le serate più fresche di quanto ci si potrebbe aspettare così a sud dell'Africa australe, anche in estate. È compatta, in parte percorribile a piedi, e merita una notte per ritirare l'auto a noleggio, adattarsi al fuso orario e mangiare bene prima di partire verso il deserto.",
    bestFor: "Notti di arrivo e partenza",
    avoidIf: "Avete un volo di coincidenza lo stesso giorno e non avete bisogno di pernottare",
    recommendedStay: "1 notte",
    driveFromWindhoek: "non applicabile",
    alt: "La Christuskirche, una chiesa simbolo di Windhoek, in Namibia",
    pros: [
      "La migliore offerta di ristoranti e caffè fuori da Swakopmund",
      "Un posto facile e senza pensieri per ambientarsi prima o dopo un lungo viaggio in auto",
      "Centrale per il ritiro e la riconsegna dell'auto a noleggio",
    ],
    cons: [
      "Non è di per sé una destinazione faunistica o paesaggistica",
      "L'aeroporto si trova a circa 45 minuti dal centro città",
      "La sicurezza in centro dopo il tramonto richiede le normali precauzioni urbane",
    ],
    nearby: ["Riserva faunistica di Daan Viljoen", "Monti Auas"],
    faqs: [
      {
        q: "Una notte a Windhoek è sufficiente?",
        a: "Sì, per la maggior parte degli itinerari una notte a ciascuna estremità del viaggio è la norma, di più se atterrate tardi o avete una partenza mattutina.",
      },
      {
        q: "Cos'è la Christuskirche?",
        a: "È il monumento più noto di Windhoek, una chiesa luterana costruita agli inizi del Novecento con arenaria locale, su una rotatoria di rilievo nel centro città. La maggior parte degli itinerari in auto vi passa vicino andando verso l'aeroporto o tornando, anche senza aver programmato una sosta.",
      },
      {
        q: "Si può camminare in sicurezza per Windhoek?",
        a: "Il centro di Windhoek è percorribile a piedi di giorno con le normali precauzioni urbane, ma come nella maggior parte delle capitali richiede più prudenza dopo il tramonto, in particolare attorno alla stazione ferroviaria e nelle strade laterali più tranquille. Attenetevi a zone ben illuminate e frequentate, oppure prendete un breve taxi per tornare in hotel di sera. La nostra guida su sicurezza e salute offre un quadro più completo per il resto del paese.",
      },
    ],
    knownFor: [
      "Il monumento della Christuskirche",
      "La cucina tedesco-namibiana",
      "Punto di riferimento per il noleggio auto",
      "Mercati di artigianato e curiosità",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "È davvero tutto ciò di cui Windhoek ha bisogno",
        text: "Una notte a ciascuna estremità del viaggio è lo schema standard, tempo sufficiente per ritirare o restituire l'auto a noleggio, fare una buona cena e ambientarsi prima o dopo i lunghi viaggi in auto che vi aspettano. Non è di per sé una tappa paesaggistica o faunistica.",
      },
    ],
  },
  "fish-river-canyon": {
    description:
      "Il secondo canyon più grande della Terra, da ammirare preferibilmente all'ora dorata dal bordo.",
    quickAnswer:
      "Fish River Canyon è il sud della Namibia, e la sua attrazione principale più sottovalutata: una gola lunga 160 km e profonda fino a 550 metri, spesso descritta come il secondo canyon più grande della Terra, che rivaleggia con il Grand Canyon per dimensioni senza averne la folla. La maggior parte dei visitatori lo osserva dai punti panoramici sul bordo; gli escursionisti più determinati affrontano il sentiero di più giorni in basso, che termina ad Ai-Ais, dove sorgenti termali sgorgano dal terreno a circa 60°C.",
    bestFor: "Trekking, punti panoramici spettacolari",
    avoidIf: "Il sud non rientra nel vostro percorso: è una deviazione rispetto al circuito principale",
    recommendedStay: "1-2 notti",
    driveFromWindhoek: "circa 5h30",
    alt: "Una vista dall'alto su Fish River Canyon, nel sud della Namibia",
    pros: [
      "Uno dei canyon più grandi della Terra, con una frazione dei visitatori",
      "I punti panoramici sul bordo non richiedono alcun trekking",
      "Il sentiero di più giorni del Fish River Canyon è un vero trekking da fare almeno una volta nella vita",
    ],
    cons: [
      "È una vera deviazione verso sud: aggiunge un tempo di guida considerevole a un circuito standard",
      "Il sentiero di più giorni è aperto solo da maggio a settembre e richiede un certificato medico",
      "Pochissime opzioni di alloggio nelle vicinanze",
    ],
    nearby: ["Sorgenti termali di Ai-Ais", "Regione di confine tra Namibia e Sudafrica"],
    faqs: [
      {
        q: "Si può vedere il canyon senza fare trekking?",
        a: "Sì, i principali punti panoramici sul bordo vicino a Hobas si raggiungono con una breve camminata dal parcheggio e offrono la classica vista sul canyon.",
      },
      {
        q: "Quali sono le regole per il trekking di più giorni del Fish River Canyon?",
        a: "Il sentiero è aperto stagionalmente, indicativamente dal 1° maggio al 15 settembre, con date esatte di apertura e chiusura stabilite ogni anno da Namibia Wildlife Resorts (NWR) in base al livello del fiume. Serve un certificato medico di idoneità fisica e un gruppo di almeno 3 persone (il trekking in solitaria non è permesso), con permessi da prenotare in anticipo direttamente presso NWR. Verificate le date della stagione in corso prima di pianificare, poiché cambiano di anno in anno.",
      },
      {
        q: "Si può combinare Ai-Ais con i punti panoramici sul bordo senza percorrere l'intero sentiero?",
        a: "Sì, l'Ai-Ais Hot Springs Resort è raggiungibile su strada all'estremità meridionale del canyon senza dover percorrere alcun tratto del sentiero di più giorni sopra di esso, quindi una visita ai punti panoramici vicino a Hobas e un bagno ad Ai-Ais possono essere combinati nello stesso breve viaggio. I due siti sono collegati dalla strada, non solo dal sentiero escursionistico, il che sorprende alcuni viaggiatori.",
      },
      {
        q: "Come si confronta Fish River Canyon con il Grand Canyon?",
        a: "È più piccolo, ma comunque enorme. Fish River Canyon si estende per circa 160 km di lunghezza e fino a 550 metri di profondità, contro i circa 450 km di lunghezza del Grand Canyon e profondità che si avvicinano ai 1.800 metri, quindi resta nella stessa categoria per dimensioni, senza però avvicinarsi al numero di visitatori o alle infrastrutture del Grand Canyon.",
      },
    ],
    knownFor: [
      "Il secondo canyon più grande della Terra",
      "Il sentiero escursionistico di più giorni del Fish River",
      "Sorgenti termali di Ai-Ais",
      "Vista dal bordo all'ora dorata",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Sufficiente per il bordo, non per il sentiero",
        text: "Una notte copre i principali punti panoramici vicino a Hobas all'ora dorata (nessun trekking richiesto), che è ciò per cui la maggior parte dei viaggiatori si reca qui. Non lascia spazio per il sentiero di più giorni sotto il bordo, che richiede un viaggio dedicato a sé.",
      },
      {
        nights: 2,
        verdict: "La durata giusta per chi visita il bordo",
        text: "Due notti offrono sia una sessione al tramonto sia una all'alba nei punti panoramici, che cambiano completamente il colore del canyon, più il tempo per un bagno nelle sorgenti termali di Ai-Ais mentre si riparte, invece di passare dritti senza fermarsi.",
      },
    ],
  },
  caprivi: {
    description:
      "La verde e ricca d'acqua appendice della Namibia: fiumi, pianure alluvionali e un ritmo completamente diverso.",
    quickAnswer:
      "La Caprivi Strip (ufficialmente ribattezzata Regione dello Zambesi nel 2013) è una Namibia completamente diversa, una sottile appendice ricca d'acqua fatta di fiumi e pianure alluvionali al confine con Botswana, Zambia e Angola, più adatta al birdwatching e alla fauna fluviale rispetto al circuito desertico più a sud. La striscia stessa è un residuo della spartizione coloniale delle mappe: la Germania la acquisì con il Trattato di Helgoland-Zanzibar del 1890, specificamente per dare all'Africa Sud-Occidentale Tedesca un corridoio verso il fiume Zambesi, e il vecchio nome (dal cancelliere tedesco Leo von Caprivi) resta in uso comune anche se il nome ufficiale è cambiato.",
    bestFor: "Estendere il viaggio verso Botswana o Zambia",
    avoidIf: "State facendo solo il classico circuito di dune e deserto",
    recommendedStay: "2 notti",
    driveFromWindhoek: "circa 12h (la maggior parte vola fino a Katima Mulilo)",
    alt: "Sagome di alberi lungo un fiume al tramonto nella Caprivi Strip",
    pros: [
      "Un paesaggio davvero diverso dal resto della Namibia: fiumi, non deserto",
      "Ottimo birdwatching e osservazione della fauna fluviale",
      "Un ponte naturale verso il Delta dell'Okavango o Chobe, in Botswana",
    ],
    cons: [
      "Lontano dal resto del paese: la maggior parte delle persone vola invece di guidare",
      "Le precauzioni antimalariche sono rilevanti qui, a differenza della maggior parte del resto della Namibia",
      "Scelta di lodge limitata rispetto alle regioni desertiche",
    ],
    nearby: ["Parco Nazionale di Chobe (Botswana)", "Parco Nazionale di Bwabwata"],
    faqs: [
      {
        q: "Vale la pena aggiungere la Caprivi Strip a un viaggio in Namibia?",
        a: "Meglio considerarla come un'estensione, non come una tappa a sé stante. Funziona bene per i viaggiatori che proseguono verso Botswana o Zambia, più che come tappa in un circuito namibiano standard di due settimane.",
      },
      {
        q: "La malaria è un rischio reale specificamente nella Caprivi Strip?",
        a: "Sì, a differenza della maggior parte del resto della Namibia, la Regione dello Zambesi presenta un rischio di malaria tutto l'anno a causa dei suoi fiumi e delle sue zone umide, quindi le precauzioni antimalariche vanno prese sul serio qui, anche se le avete tralasciate per il resto di un itinerario incentrato sul deserto. La nostra guida su sicurezza e salute offre indicazioni aggiornate prima di partire, poiché le raccomandazioni possono cambiare.",
      },
      {
        q: "Si può combinare la Caprivi Strip con il Delta dell'Okavango o Chobe, in Botswana?",
        a: "Sì, è la ragione principale per cui la maggior parte dei viaggiatori la aggiunge. La Regione dello Zambesi confina direttamente con il Botswana, e il Parco Nazionale di Bwabwata e il sistema fluviale Kwando-Linyanti qui si collegano naturalmente al Parco Nazionale di Chobe o al Delta dell'Okavango dall'altra parte del confine, rendendola un'estensione pratica più che un viaggio separato.",
      },
    ],
    knownFor: [
      "Pianure alluvionali del fiume Zambesi",
      "Birdwatching",
      "Il ponte verso l'Okavango/Chobe in Botswana",
      "Ippopotami e fauna fluviale",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "La durata standard per una tappa di estensione",
        text: "Due notti coprono una crociera fluviale per osservare ippopotami e uccelli, e un safari in veicolo nel Parco Nazionale di Bwabwata, sufficiente per percepire il ritmo diverso della regione prima di proseguire verso Botswana o Zambia, oppure di tornare in aereo al circuito desertico.",
      },
    ],
  },
  spitzkoppe: {
    description:
      "Picchi di granito che si ergono a picco dalle pianure, la risposta della Namibia alla Table Mountain.",
    quickAnswer:
      "Spitzkoppe è un gruppo di picchi di granito che si innalzano direttamente da pianure di ghiaia piatte: il picco principale raggiunge circa 1.784 metri e si erge per circa 600 metri sopra la pianura circostante, con un granito stimato in oltre 120 milioni di anni, motivo per cui viene talvolta chiamato il 'Cervino della Namibia.' È una facile deviazione di una notte tra Swakopmund e il Damaraland, e uno dei migliori punti per l'osservazione delle stelle di tutto il percorso, senza inquinamento luminoso per un centinaio di chilometri.",
    bestFor: "Osservazione delle stelle, deviazioni di una notte",
    avoidIf: "Volete il comfort completo di un lodge: qui si tratta soprattutto di campeggio rustico",
    recommendedStay: "1 notte",
    driveFromWindhoek: "circa 3h30",
    alt: "I picchi di granito di Spitzkoppe che si innalzano dalle pianure desertiche namibiane",
    pros: [
      "Tra i migliori punti per l'osservazione delle stelle di tutto un itinerario in auto in Namibia",
      "Deviazione facile e breve, che non costa un'intera giornata di guida",
      "Luce spettacolare al tramonto e all'alba sulle cupole di granito",
    ],
    cons: [
      "La maggior parte degli alloggi in loco sono campeggi comunitari essenziali, non lodge",
      "Strutture molto limitate: portate con voi le provviste",
      "Il terreno esposto significa nessuna ombra durante le ore più calde della giornata",
    ],
    nearby: ["Swakopmund", "Monti Erongo"],
    faqs: [
      {
        q: "Vale la pena fermarsi a dormire a Spitzkoppe?",
        a: "Sì, anche solo per il tramonto, il cielo notturno e l'alba: è una delle notti singole più fotogeniche di un itinerario namibiano.",
      },
      {
        q: "Dove si trova la migliore arte rupestre a Spitzkoppe?",
        a: "Bushman's Paradise, un riparo roccioso sul lato orientale del massiccio raggiungibile con una breve arrampicata, custodisce alcune delle pitture più note del sito, incluse immagini di elefanti. Di solito viene visitato con una guida della comunità locale, sia per la salita sia perché la guida qui sostiene direttamente la conservancy circostante.",
      },
      {
        q: "Si può scalare Spitzkoppe?",
        a: "Il picco principale è un'arrampicata tecnica, non un'escursione. La sua vetta è stata raggiunta per la prima volta solo nel 1946 e richiede ancora oggi corde ed esperienza di arrampicata. La maggior parte dei visitatori percorre invece i sentieri più brevi e non segnalati attorno alla base e verso punti panoramici come l'arco di roccia naturale, che non richiedono alcuna attrezzatura da arrampicata.",
      },
    ],
    knownFor: [
      "Inselberg di granito",
      "Osservazione delle stelle",
      "Arte rupestre boscimana",
      "Fotografia al tramonto e all'alba",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "È proprio questo il senso di Spitzkoppe",
        text: "Una notte è la durata standard e corretta: arrivate in tempo per il tramonto sulle cupole di granito, trascorrete la notte sotto alcuni dei cieli più limpidi del percorso, e cogliete l'alba prima di proseguire. È una deviazione, non una destinazione a sé stante.",
      },
    ],
  },
};

type LodgeTranslation = Partial<Pick<Lodge, "description" | "highlights" | "bestFor" | "alt">>;

export const lodgeTranslationsIt: Record<string, LodgeTranslation> = {
  "ongava-lodge": {
    description:
      "Chalet costruiti contro uno sperone roccioso che domina una pozza d'acqua, su una riserva privata adiacente al cancello Anderson di Etosha.",
    highlights: ["Camere affacciate sulla pozza d'acqua", "Safari notturni sulla riserva privata", "Tracking fuoristrada consentito"],
    bestFor: "Coppie al primo safari, fotografi naturalisti",
    alt: "Chalet in paglia costruito contro uno sperone roccioso a Ongava Lodge, Etosha",
  },
  "onguma-tented-camp": {
    description:
      "Un campo tendato su una riserva privata direttamente confinante con il lato orientale di Etosha, con camere affacciate su una pozza d'acqua.",
    highlights: ["Tende affacciate su una pozza d'acqua", "Riserva privata, safari notturni consentiti", "Campi gemelli nelle vicinanze"],
    bestFor: "Fotografi, coppie che desiderano più flessibilità di quanta ne consenta il parco",
    alt: "Una suite tendata al crepuscolo sotto un grande albero a Onguma Tented Camp, Etosha",
  },
  "mushara-lodge": {
    description:
      "Un lodge in stile chalet vicino al cancello orientale Von Lindequist di Etosha, con aree comuni in paglia e legno e una struttura gemella nelle vicinanze.",
    highlights: ["Vicino al cancello orientale del parco", "Aree comuni in paglia e legno", "Struttura gemella nelle vicinanze"],
    bestFor: "Famiglie, viaggiatori che preferiscono la vicinanza all'isolamento",
    alt: "Salotto e terrazza in paglia a Mushara Lodge, Etosha, illuminati al crepuscolo",
  },
  "grootberg-lodge": {
    description:
      "Ritenuto il primo lodge namibiano interamente di proprietà comunitaria, costruito con la comunità ≠Khoadi //Hoas su una cresta con vista sulla valle da ogni camera.",
    highlights: ["Interamente di proprietà comunitaria", "Vista sulla valle da ogni camera, in cima alla cresta", "Accesso al tracking dei rinoceronti"],
    bestFor: "Viaggiatori che privilegiano il turismo comunitario, fotografi",
    alt: "Vista sulla valle da una camera a Grootberg Lodge, Damaraland",
  },
  "shipwreck-lodge": {
    description:
      "L'unico lodge situato realmente sulla Costa degli Scheletri stessa, con chalet a forma di relitto sparsi tra le dune, a due ore a nord di Möwe Bay.",
    highlights: ["Situato davvero sulla costa", "Architettura ispirata ai relitti", "Escursioni remote tra le dune e sul litorale"],
    bestFor: "Viaggiatori in cerca d'avventura remota, ospiti attenti al design",
    alt: "Gli chalet a forma di relitto dello Shipwreck Lodge sulle dune al crepuscolo",
  },
  "the-delight-swakopmund": {
    description:
      "Un hotel boutique di 54 camere nel centro di Swakopmund, con un design colorato e contemporaneo, e colazione, acqua, parcheggio e Wi-Fi inclusi.",
    highlights: ["Posizione centrale in centro città", "Design contemporaneo", "Colazione, acqua, parcheggio e Wi-Fi inclusi"],
    bestFor: "Coppie, viaggiatori attenti al design, soste per una fuga in città",
    alt: "La facciata contemporanea di The Delight Swakopmund sul lungomare",
  },
  "hansa-hotel": {
    description:
      "L'hotel più antico della Namibia, fondato nel 1905 nel centro storico di Swakopmund, con 49 camere e un'architettura d'epoca conservata.",
    highlights: ["L'hotel più antico della Namibia (1905)", "Posizione nel centro storico", "Facciata coloniale conservata"],
    bestFor: "Viaggiatori appassionati di storia, fedelissimi degli hotel classici",
    alt: "L'ingresso storico dell'Hansa Hotel, Swakopmund, illuminato al crepuscolo",
  },
  "the-olive-exclusive": {
    description:
      "Un hotel boutique di sette suite a Windhoek, ciascuna a tema su una diversa regione namibiana, con piscina privata e bar-ristorante completo.",
    highlights: ["Solo sette suite", "Ogni suite a tema su una regione namibiana", "Piscina privata"],
    bestFor: "Coppie, un tocco di lusso prima o dopo un circuito safari",
    alt: "Suite affacciate su Windhoek al crepuscolo da The Olive Exclusive",
  },
  "villa-violet": {
    description:
      "Una piccola guesthouse a conduzione familiare con cinque camere nel sobborgo di Klein Windhoek, a cinque minuti dal centro città.",
    highlights: ["Gestione diretta dei proprietari, servizio personale", "Opzione cucina in self-catering", "Piccola piscina e patio"],
    bestFor: "Viaggiatori attenti al budget, viaggiatori solitari in cerca di un tocco personale",
    alt: "La piscina e la terrazza del giardino a Villa Violet, Windhoek",
  },
  "canyon-lodge": {
    description:
      "Trenta chalet rustici costruiti tra massi di granito rosso nel Gondwana Canyon Park, vicino al canyon, base abituale per il sentiero di più giorni del Fish River.",
    highlights: ["Chalet costruiti tra massi di granito", "Base per il sentiero del Fish River Canyon", "Ambientazione nel Gondwana Canyon Park"],
    bestFor: "Escursionisti, viaggiatori in cerca di un alloggio desertico rustico ma confortevole",
    alt: "Una camera costruita tra massi di granito a Canyon Lodge, Fish River Canyon",
  },
  "nkasa-lupala-tented-lodge": {
    description:
      "Un piccolo lodge di 10 tende su Lupala Island, nel sistema fluviale Kwando-Linyanti, incentrato su un turismo sostenibile e legato alle comunità nel nordest della Namibia.",
    highlights: ["Solo 10 tende", "Ambientazione su un canale fluviale", "Legato alle comunità, orientato alla sostenibilità"],
    bestFor: "Birdwatcher, viaggiatori in cerca del nordest namibiano, più umido e ricco di fauna",
    alt: "Una terrazza per i pasti affacciata sulla pianura alluvionale a Nkasa Lupala Tented Lodge",
  },
  "spitzkoppen-lodge": {
    description:
      "Un lodge di 15 chalet sul margine settentrionale del massiccio di Spitzkoppe, collegati da passerelle rialzate progettate per ridurre al minimo il disturbo al terreno sottostante.",
    highlights: ["Design con passerelle rialzate", "Chalet privati con terrazza panoramica", "Ambientazione tra massi di granito"],
    bestFor: "Viaggiatori che desiderano comfort vicino a Spitzkoppe senza il campeggio completo",
    alt: "Chalet rialzati tra le cupole di granito dello Spitzkoppen Lodge al crepuscolo",
  },
  "little-kulala": {
    description:
      "Un resort desertico in stile castello sulla strada D826, a circa 20 km dal cancello di Sesriem, con tre categorie di camere, comprese le camere-torre a cielo aperto per dormire sotto le stelle.",
    highlights: ["Camere-torre a cielo aperto per osservare le stelle", "Mystique Spa con servizio completo", "Piscina e ristorante in loco"],
    bestFor: "Coppie che desiderano i comfort di un resort vicino a Sossusvlei",
    alt: "Architettura a torre in stile castello al Le Mirage Resort & Spa, Sossusvlei",
  },
  "sossusvlei-desert-lodge": {
    description:
      "Un lodge di 45 camere proprio al cancello del parco di Sesriem, con una terrazza affacciata su una pozza d'acqua illuminata e il tragitto più breve possibile verso Sossusvlei tra tutti i lodge della zona.",
    highlights: ["Situato proprio al cancello del parco di Sesriem", "Vista sulla pozza d'acqua illuminata dalla terrazza", "Terrazza per l'aperitivo al tramonto e giardino della birra"],
    bestFor: "Viaggiatori che desiderano il tragitto più breve verso Sossusvlei con il comfort di un resort",
    alt: "La terrazza vicino al cancello e la piscina al Sossusvlei Lodge, Sesriem",
  },
  "kulala-desert-lodge": {
    description:
      "Un campo in self-catering con 24 chalet su una riserva privata adiacente al cancello di Sesriem, a circa 5 km dall'accesso a Sossusvlei e Deadvlei, con chalet dotati di angolo cottura e una piscina affacciata su Elim Dune.",
    highlights: ["A 5 km dal cancello del parco di Sesriem", "Chalet in self-catering con angolo cottura", "Piscina affacciata su Elim Dune"],
    bestFor: "Famiglie che desiderano una base economica e confortevole proprio al cancello di Sossusvlei",
    alt: "Chalet in paglia in self-catering sul terreno desertico rosso al Desert Quiver Camp, Sossusvlei",
  },
  "luna-namib-collection": {
    description:
      "Un lodge con campeggio a circa 30-45 minuti di auto dal cancello di Sesriem, noto per la sua terrazza per l'osservazione delle stelle, la piscina aperta tutto l'anno e la cucina.",
    highlights: ["Terrazza molto apprezzata per l'osservazione delle stelle", "Ottima reputazione per cibo e servizio", "Piscina aperta tutto l'anno"],
    bestFor: "Viaggiatori in cerca di un buon rapporto qualità-prezzo vicino a Sossusvlei senza tariffe ultra-lusso",
    alt: "La terrazza per l'osservazione delle stelle e la piscina al Little Sossus Lodge, Sossusvlei",
  },
  "damaraland-camp": {
    description:
      "Un campo costruito tra enormi massi di granito rosso, tra i letti dei fiumi Ugab e Huab, a circa 15 km a nord di Twyfelfontein, con camere su piattaforme rialzate.",
    highlights: ["Camere costruite tra giganteschi massi di granito", "Bar per l'aperitivo al tramonto su uno sperone roccioso", "Uscite per elefanti adattati al deserto ed escursioni all'arte rupestre di Twyfelfontein"],
    bestFor: "Safari desertico e glamping in uno scenario spettacolare di massi rocciosi",
    alt: "Camere in paglia tra giganteschi massi di granito rosso a Mowani Mountain Camp",
  },
  "doro-nawas-camp": {
    description:
      "Bungalow in pietra a forma di igloo, costruiti nelle fessure tra massi di granito impilati vicino a Twyfelfontein, con uscite naturalistiche per elefanti adattati al deserto e arte rupestre.",
    highlights: ["Bungalow costruiti direttamente nelle formazioni rocciose", "Architettura in pietra dalle forme curve", "Uscite naturalistiche per elefanti e arte rupestre di Twyfelfontein"],
    bestFor: "Coppie che desiderano un soggiorno appartato tra i massi rocciosi vicino a Twyfelfontein",
    alt: "Bungalow in pietra costruiti tra massi di granito a Camp Kipwe, Damaraland",
  },
  "hoanib-skeleton-coast-camp": {
    description:
      "Un campo di sei tende nella valle dell'Hoanib, vicino a Sesfontein, gestito come joint venture con la comunità locale e la Giraffe Conservation Foundation. Si trova nell'entroterra, nella regione più ampia della Costa degli Scheletri, non sul litorale stesso.",
    highlights: ["Giornate guidate di ricerca sulle giraffe con ricercatori residenti", "Tracking di elefanti, giraffe e rinoceronti adattati al deserto", "Lusso sotto tenda fuori rete, gestito con la comunità locale"],
    bestFor: "Safari faunistico desertico in aereo, con un'impronta di ricerca e conservazione",
    alt: "Una suite tendata al crepuscolo nella valle dell'Hoanib, a Hoanib Valley Camp",
  },
  "thitaka-river-lodge": {
    description:
      "Un lodge fluviale di 24 camere sul fiume Kwando, al confine con il Parco Nazionale di Bwabwata, gestito da Gondwana Collection, con crociere in barca all'alba e al tramonto.",
    highlights: ["Crociere in barca per osservare ippopotami, coccodrilli e oltre 400 specie di uccelli", "Safari guidati in veicolo nel Parco Nazionale di Bwabwata", "Struttura gemella Namushasha River Villa per un'opzione di lusso superiore"],
    bestFor: "Safari fluviali e uscite nel corridoio degli elefanti nel Parco Nazionale di Bwabwata",
    alt: "Il fiume Kwando al crepuscolo accanto a Namushasha River Lodge, Caprivi",
  },
  "etosha-village": {
    description:
      "Un lodge e campeggio in stile villaggio immerso nella foresta di mopane, a 2 km dal cancello Andersson di Etosha, vicino a Okaukuejo, con bungalow in paglia disposti come un villaggio tradizionale.",
    highlights: ["A 2 km dal cancello Andersson", "Ristorazione a buffet, oltre a opzioni self-catering e campeggio", "Kudu, orici e giraffe che si muovono liberamente nella proprietà"],
    bestFor: "Viaggiatori con budget contenuto o medio in cerca di una base economica proprio al cancello del parco",
    alt: "Bungalow in paglia in stile villaggio a Etosha Village, vicino al cancello Andersson",
  },
  "safarihoek-lodge": {
    description:
      "Un lodge di 11 chalet su una piattaforma di legno rialzata nella Etosha Heights Private Reserve, vicino a Kamanjab, a sudovest del parco, con vista su una pozza d'acqua e un programma attivo di monitoraggio dei rinoceronti.",
    highlights: ["Chalet su piattaforma rialzata affacciati su una pozza d'acqua", "Solo 11 chalet, piccolo ed esclusivo", "Tracking di rinoceronte nero e bianco nell'ambito del progetto di conservazione della riserva"],
    bestFor: "Viaggiatori in cerca di una base di lusso esclusiva e remota a sudovest di Etosha",
    alt: "Uno chalet su piattaforma di legno rialzata affacciato su una pozza d'acqua a Safarihoek Lodge",
  },
  "elegant-desert-camp": {
    description:
      "Un boutique camp di 10 tende su uno sperone di granito nelle Tsaris Mountains, fuori Sesriem, con piscina a picco sulla scogliera, terrazza per l'aperitivo al tramonto e colazione inclusa.",
    highlights: ["Piscina e terrazza panoramica per l'aperitivo al tramonto su uno sperone montano", "Solo 10 spaziose tende con bagno privato e terrazza propria", "Ristorante e bar, colazione inclusa"],
    bestFor: "Viaggiatori in cerca di un'esperienza boutique in tenda con viste spettacolari sulle montagne",
    alt: "Una tenda in tela con terrazza privata su uno sperone roccioso a The Elegant Desert Camp, Sossusvlei",
  },
  "twyfelfontein-country-lodge": {
    description:
      "Un lodge di 56 camere costruito nelle pareti di arenaria della valle dell'Aba-Huab, a 3 km dal sito UNESCO delle incisioni rupestri di Twyfelfontein, con piscina e ristorante.",
    highlights: ["A 3 km dal sito patrimonio UNESCO dell'arte rupestre di Twyfelfontein", "56 camere, la struttura con più posti letto della zona", "Piscina esterna e terrazza solarium incastonate nella parete rocciosa"],
    bestFor: "Famiglie e gruppi in cerca di un accesso facile all'arte rupestre di Twyfelfontein a un prezzo contenuto",
    alt: "Edifici del lodge costruiti nelle pareti di arenaria a Twyfelfontein Country Lodge, Damaraland",
  },
  "vingerklip-lodge": {
    description:
      "Un lodge nella valle dell'Ugab, vicino a Khorixas, costruito ai piedi del Vingerklip, un pinnacolo isolato di arenaria alto 35 metri, noto per il ristorante panoramico Eagle's Nest, raggiungibile con una scalinata.",
    highlights: ["Si trova ai piedi del Vingerklip, una delle formazioni rocciose più fotografate del Damaraland", "Ristorante panoramico Eagle's Nest per cenare al tramonto", "Due piscine e sentieri che salgono fino al punto panoramico"],
    bestFor: "Viaggiatori in cerca di un soggiorno scenografico, incentrato su un punto di riferimento iconico del Damaraland",
    alt: "Camere del lodge con il pinnacolo di arenaria del Vingerklip sullo sfondo, Damaraland",
  },
  "palmwag-lodge": {
    description:
      "Un lodge recintato con piscina e chalet in paglia, all'ingresso meridionale della concessione di Palmwag, base per il tracking di elefanti adattati al deserto e rinoceronti neri.",
    highlights: ["Base per il tracking di elefanti adattati al deserto e rinoceronti neri nella concessione di Palmwag", "Piscina esterna aperta tutto l'anno, giardino e ristorante", "Camere per famiglie e parco giochi per bambini"],
    bestFor: "Famiglie e viaggiatori indipendenti in cerca di una base facilmente raggiungibile alle porte del Kaokoveld, terra degli elefanti del deserto",
    alt: "Chalet in paglia e piscina a Palmwag Lodge, porta d'accesso alla concessione di Palmwag",
  },
  "khowarib-lodge": {
    description:
      "Un lodge di 14 chalet tendati su palafitta, direttamente sul fiume Hoanib, nella gola di Khowarib vicino a Sesfontein, di fronte alle pareti rocciose del canyon.",
    highlights: ["Ambientazione fluviale sull'Hoanib, di fronte alle pareti della gola di Khowarib", "14 chalet tendati su palafitta con bagno privato", "Piscina e giardino, colazione a buffet inclusa"],
    bestFor: "Viaggiatori in cerca di una tappa scenografica sul fiume Hoanib senza i prezzi da soggiorno raggiungibile solo in aereo",
    alt: "Chalet tendati su palafitta sopra il letto del fiume Hoanib a Khowarib Lodge",
  },
  "okahirongo-elephant-lodge": {
    description:
      "Un lodge boutique di 9 suite sul fiume Hoarusib a Purros, gestito con il marchio Abercrombie & Kent Sanctuary, con piscina e ristorante gourmet.",
    highlights: ["L'unica struttura specializzata di Purros, sul fiume Hoarusib", "Formato boutique di 9 suite, con piscina e ristorante di cucina internazionale", "Visite guidate a un villaggio Himba come attività signature"],
    bestFor: "Coppie in luna di miele e viaggiatori di lusso in cerca di un lodge intimo nella remota Purros",
    alt: "Una suite boutique affacciata sul fiume Hoarusib a Okahirongo Elephant Lodge, Purros",
  },
  "strand-hotel-swakopmund": {
    description:
      "Un hotel 4 stelle di 125 camere sul molo storico di Swakopmund, circondato dall'Atlantico su tre lati, con più ristoranti e l'Atlantic Spa. Il nome più noto del lusso costiero namibiano.",
    highlights: ["Vista panoramica sull'oceano dalla maggior parte delle 125 camere", "Atlantic Spa interna con bagni turchi e una suite per coppie nel giardino", "Diversi punti ristoro, dal ristorante formale alla gastronomia"],
    bestFor: "Viaggiatori in cerca di un soggiorno iconico e a servizio completo fronte oceano, nel cuore di Swakopmund",
    alt: "La facciata fronte oceano dello Strand Hotel Swakopmund sul molo",
  },
  "secret-garden-guesthouse": {
    description:
      "Una guesthouse di 10 camere nel centro storico di Swakopmund, costruita attorno a un giardino curato con terrazza solarium, a circa 250 metri dall'oceano e dal molo (Jetty).",
    highlights: ["Posizione centrale nella Old Swakopmund, a 5 minuti a piedi dal molo", "Ambientazione con giardino interno", "Colazione servita in sala da pranzo o in giardino, sotto le palme"],
    bestFor: "Coppie o piccoli gruppi in cerca di un soggiorno tranquillo e personale, vicino al centro città",
    alt: "Il giardino interno curato a The Secret Garden Guesthouse, Swakopmund",
  },
  "bismarck-2": {
    description:
      "Un complesso di appartamenti in self-catering all'angolo tra Bismarck Street e Sam Nujoma Avenue, nel centro di Swakopmund, a circa 300 metri da Palm Beach, con unità da 2 camere e 2 bagni.",
    highlights: ["Posizione centralissima, tutto a un isolato di distanza", "Cucina completa e disposizione con 2 camere e 2 bagni", "Balcone con vista sulla città"],
    bestFor: "Viaggiatori attenti al budget o famiglie in cerca di una base self-catering proprio in città",
    alt: "Il balcone di un appartamento self-catering a Bismarck 2, centro di Swakopmund",
  },
  "hilton-windhoek": {
    description:
      "Un hotel contemporaneo di 15 piani nel centro di Windhoek, con casinò interno, centro fitness, spa e piscina panoramica con bar sul tetto, pensato per viaggiatori d'affari e congressisti.",
    highlights: ["Posizione centrale, a pochi passi da Zoo Park e dalla National Art Gallery", "Casinò, centro fitness, spa e piscina panoramica con bar sul tetto", "Diversi punti ristoro"],
    bestFor: "Viaggiatori d'affari e congressisti in cerca di un hotel internazionale a servizio completo in centro città",
    alt: "La piscina panoramica e il bar sul tetto dell'Hilton Windhoek",
  },
  "chameleon-backpackers": {
    description:
      "Una struttura economica di lunga tradizione nel North Windhoek Central, aperta nel 1995, con soluzioni che vanno dai letti in dormitorio alle camere private con bagno, a pochi minuti a piedi da negozi e ristoranti.",
    highlights: ["Piscina esterna, giardino, salotto comune e bar interno", "Colazione continentale inclusa, più un tour a piedi gratuito della città", "Camere che vanno dai dormitori alle stanze private e familiari"],
    bestFor: "Viaggiatori con budget contenuto, backpacker e overlander in cerca di una base conviviale prima o dopo un viaggio in Namibia",
    alt: "L'area giardino e piscina a Chameleon Backpackers & Guesthouse, Windhoek",
  },
  "etango-ranch-guest-farm": {
    description:
      "Una guest farm recintata e in attività a Voigtland, a circa 4 km dall'aeroporto internazionale Hosea Kutako, con orici, kudu, zebre di montagna e hartebeest che si muovono liberamente nella proprietà.",
    highlights: ["A 5-10 minuti di auto dall'aeroporto, con navetta disponibile", "Ambientazione da fattoria con fauna visibile e piscina", "Posizione ideale per voli in partenza al mattino presto o in arrivo la sera tardi"],
    bestFor: "Viaggiatori che cercano un soggiorno comodo e senza pensieri prima di un volo mattutino o dopo un arrivo serale",
    alt: "Orici che si muovono liberamente nella proprietà di Etango Ranch Guest Farm, vicino all'aeroporto di Windhoek",
  },
  "fish-river-lodge": {
    description:
      "L'unico lodge costruito direttamente sul bordo occidentale di Fish River Canyon, con 20 chalet in pietra e vetro, vetrate a tutta altezza e terrazze affacciate sul canyon.",
    highlights: ["L'unica struttura con camere affacciate proprio sul bordo del canyon", "Chalet contemporanei in pietra e vetro con terrazza vista canyon", "Escursioni a piedi e in fuoristrada guidate lungo il fondo del canyon"],
    bestFor: "Viaggiatori che vogliono svegliarsi con lo sguardo dritto nel canyon",
    alt: "Uno chalet in pietra e vetro sul bordo di Fish River Canyon a Fish River Lodge",
  },
  "gondwana-canyon-roadhouse": {
    description:
      "Una struttura del Gondwana Collection vicino al cancello del canyon sul lato di Hobas, con un tema ispirato ai vecchi roadhouse americani, auto d'epoca sparse nel giardino, camere d'hotel e un campeggio.",
    highlights: ["Tema auto d'epoca e roadhouse, insolito per la zona", "La struttura Gondwana più vicina al cancello d'ingresso principale del canyon", "Camere d'hotel e campeggio, una gamma di budget più ampia rispetto ai lodge vicini"],
    bestFor: "Viaggiatori in auto in cerca di un soggiorno originale ed economico, proprio accanto al cancello del canyon",
    alt: "Auto d'epoca nel giardino di Canyon Roadhouse, Fish River Canyon",
  },
  "gondwana-canyon-village": {
    description:
      "Una struttura del Gondwana Collection con 42 chalet in pietra e paglia disposti attorno a un nucleo centrale con ristorante, bar e piscina, nel Gondwana Nature Park a circa 19 km dal canyon.",
    highlights: ["42 chalet disposti a ferro di cavallo attorno al nucleo centrale con piscina e ristorante", "Uscite al tramonto e sentieri escursionistici in loco", "Più grande e più adatta alle famiglie rispetto ai campi boutique della zona"],
    bestFor: "Famiglie o gruppi in cerca di una struttura più grande e conviviale vicino al canyon",
    alt: "Chalet in pietra e paglia attorno alla piscina a Canyon Village, Fish River Canyon",
  },
  "mount-canyon-guest-farm": {
    description:
      "Una guest farm in attività, gestita direttamente dai proprietari, sulla strada tra Keetmanshoop e Grunau, a circa un'ora di auto da Fish River Canyon, con un canyon privato all'interno della proprietà e uscite al tramonto per osservare la fauna.",
    highlights: ["Fattoria in attività gestita direttamente dai proprietari, indipendente dai grandi gruppi della zona del canyon", "Un canyon privato e uscite per osservare la fauna direttamente in proprietà", "Apprezzata per l'ospitalità personale e a conduzione familiare"],
    bestFor: "Viaggiatori con budget contenuto in cerca di un'autentica tappa in fattoria lungo il percorso da o verso il canyon",
    alt: "La fattoria e il canyon privato a Mount Canyon Guest Farm",
  },
  "camp-kwando": {
    description:
      "Un piccolo campo a conduzione familiare, con 6 chalet rialzati in legno e tela sul fiume Kwando, tra i Parchi Nazionali di Bwabwata e Mudumu, con piscina e ristorante fronte fiume.",
    highlights: ["Solo 6 chalet, una scala intima e a conduzione familiare", "Piscina e terrazza fronte fiume, affacciate sulla pianura alluvionale del Kwando", "Base per safari in veicolo a Bwabwata e Mudumu, e per le crociere in barca sul Kwando"],
    bestFor: "Viaggiatori in cerca di un piccolo campo fluviale molto apprezzato, invece di un grande lodge",
    alt: "Uno chalet rialzato in legno e tela sopra il fiume Kwando a Camp Kwando",
  },
  "zambezi-mubala-lodge": {
    description:
      "Un lodge del Gondwana Collection con 21 bungalow in mattoni e paglia, direttamente sul fiume Zambesi, a circa 40 km a est di Katima Mulilo, con ristorante, bar e piscina.",
    highlights: ["Si trova proprio sul fiume Zambesi, a differenza dei campi della regione sul fiume Kwando", "21 bungalow, comprese unità familiari da 4 posti letto", "Ristorante, bar, piscina e negozio di souvenir"],
    bestFor: "Famiglie e coppie in cerca di un affidabile lodge di fascia media direttamente sullo Zambesi",
    alt: "Bungalow in mattoni e paglia sul fiume Zambesi a Zambezi Mubala Lodge",
  },
  "protea-zambezi-river-lodge": {
    description:
      "Un hotel cittadino a servizio completo, con 42 camere, sul fiume Zambesi a Katima Mulilo, parte del marchio Protea di Marriott, con noleggio auto e un desk escursioni che organizza gite di un giorno alle Cascate Vittoria e a Chobe.",
    highlights: ["L'unico hotel a marchio internazionale della regione", "Un vero e proprio hub logistico, con noleggio auto e desk escursioni", "Gite di un giorno organizzate alle Cascate Vittoria, a Chobe e in Zambia"],
    bestFor: "Viaggiatori in cerca di una base affidabile in città, con una logistica semplice per le escursioni oltre confine",
    alt: "La terrazza fronte fiume del Protea Hotel by Marriott Zambezi River Lodge, Katima Mulilo",
  },
  "hohenstein-lodge": {
    description:
      "Un lodge boutique di 14 bungalow in pietra bifamiliari, costruiti tra i massi di granito ai piedi della vetta più alta dei Monti Erongo, a circa un'ora di auto da Spitzkoppe, con una propria rete di sentieri escursionistici segnalati.",
    highlights: ["Bungalow in pietra costruiti direttamente nella roccia, ciascuno con terrazza privata", "Uso gratuito delle biciclette e sentieri segnalati tra le colline dell'Erongo", "Alimentato a energia solare, con ristorante affacciato sui giardini"],
    bestFor: "Viaggiatori in cerca di una base tranquilla e curata nel design, tra le montagne di granito dell'Erongo",
    alt: "Bungalow in pietra costruiti tra i massi di granito a Hohenstein Lodge, Monti Erongo",
  },
  "achab-chalets": {
    description:
      "Una fattoria privata dedicata alla conservazione, ai piedi dei monti Gamgamichab vicino a Usakos, trasformata in un santuario faunistico per la zebra di montagna di Hartmann e specie di uccelli endemiche, con eco-cabin in self-catering e tende glamping.",
    highlights: ["Fattoria privata di conservazione con zebre di montagna di Hartmann e specie di uccelli endemiche", "Eco-cabin in self-catering e tende glamping con angolo cottura", "Area campeggio adatta alle famiglie, con servizi igienici privati"],
    bestFor: "Viaggiatori in self-catering e famiglie in cerca di un soggiorno economico in una fattoria faunistica vicino a Spitzkoppe",
    alt: "Una eco-cabin in self-catering nella fattoria faunistica di Achab Chalets, vicino a Spitzkoppe",
  },
};

type RouteTranslation = Partial<
  Pick<RoutePlan, "title" | "description" | "vehicle" | "pace" | "bestFor" | "dayByDay" | "faqs">
>;

export const routeTranslationsIt: Record<string, RouteTranslation> = {
  "7-days": {
    title: "Una settimana",
    description: "Un circuito serrato per un primo assaggio: le dune, la costa e una tappa dedicata alla fauna.",
    vehicle:
      "Un normale 2x4 a noleggio copre l'intero percorso. L'ultimo tratto di 5 km di sabbia verso Sossusvlei è comunque riservato alla navetta, e le strade verso Sesriem e Swakopmund sono asfaltate o su ghiaia ben mantenuta per tutto il tragitto.",
    pace: "Serrato: una giornata intera a ogni tappa, per lo più organizzata attorno all'attività principale di quella tappa.",
    bestFor: "Visitatori alla prima esperienza con una settimana o meno a disposizione, che vogliono un vero assaggio di deserto e costa e possono fare a meno di una tappa faunistica dedicata.",
    dayByDay: [
      {
        label: "Giorno 1",
        text: "Atterrate a Windhoek, ritirate l'auto a noleggio (per questo itinerario basta un 2x4) e pernottate nella capitale. Una buona cena e una notte di riposo sono meglio che partire subito per il deserto con il jet lag.",
        regionSlug: "windhoek",
      },
      {
        label: "Giorni 2-3",
        text: "Guidate fino a Sossusvlei (circa 5h via Rehoboth e Solitaire). Dedicate una mattina alla sessione all'alba: Dune 45, poi Deadvlei tramite la navetta dal parcheggio per 2x4 (obbligatoria da maggio 2026, mettete in conto circa 30 minuti di attesa), e il tardo pomeriggio più fresco per il canyon di Sesriem.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Giorni 4-5",
        text: "Guidate fino a Swakopmund (circa 4-5h via Solitaire e il Kuiseb Pass). Due notti sulla costa: scegliete un'attività vera e propria (sandboarding sulle dune appena fuori città, oppure una gita in barca a Walvis Bay per la laguna dei fenicotteri) e mangiate bene. È il miglior cibo e caffè di tutto il viaggio.",
        regionSlug: "swakopmund",
      },
      {
        label: "Giorni 6-7",
        text: "Tornate a Windhoek (circa 4h) con un'intera giornata di margine prima del volo, oppure volate direttamente da Walvis Bay se il vostro programma successivo permette di saltare il viaggio di ritorno in auto.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "7 giorni bastano per la Namibia?",
        a: "Sufficienti per un vero assaggio di deserto e costa, non abbastanza per aggiungere una tappa faunistica vera e propria. Etosha da sola meriterebbe 3-4 notti, per le quali questo itinerario non ha spazio. Consideratelo come la versione breve, non come la versione di compromesso.",
      },
      {
        q: "Serve un 4x4 per questo itinerario?",
        a: "No. Tutto questo circuito (Windhoek, Sossusvlei, Swakopmund) è raggiungibile su strade asfaltate o su ghiaia ben mantenuta con un normale 2x4, e l'ultimo tratto di sabbia soffice verso Sossusvlei è comunque riservato alla navetta, indipendentemente dal veicolo che guidate.",
      },
      {
        q: "Si può inserire Etosha in un viaggio di 7 giorni?",
        a: "Solo riducendo Swakopmund a una sola notte, e anche così sarebbe stretto. Se la fauna è importante per voi, l'itinerario di 10 giorni è la soluzione più breve che le lascia davvero spazio.",
      },
      {
        q: "Quanta guida richiede in totale l'itinerario di 7 giorni?",
        a: "Circa 13 ore ripartite su tre tratte: circa 5h da Windhoek a Sossusvlei, 4-5h fino a Swakopmund, e 4h di ritorno a Windhoek (oppure un volo da Walvis Bay al posto di quest'ultima tratta). È meno guida rispetto agli itinerari più lunghi, il che fa parte del compromesso per rinunciare a una tappa faunistica dedicata.",
      },
    ],
  },
  "10-days": {
    title: "Dieci giorni",
    description: "Il classico circuito namibiano, senza fretta, con due notti in ogni regione chiave.",
    vehicle:
      "Un 2x4 con buona altezza da terra funziona, ma un 4x4 si dimostra utile una volta sulle piste D in ghiaia del Damaraland, un upgrade che vale la pena specificamente per questo itinerario.",
    pace: "Due notti per tappa: il ritmo standard e confortevole della Namibia, con una giornata di guida integrata in ogni trasferimento invece che compressa attorno a esso.",
    bestFor: "Un primo viaggio completo in Namibia che copre bene deserto, costa e fauna, senza i lunghi deviamenti verso sud o nordest.",
    dayByDay: [
      {
        label: "Giorno 1",
        text: "Atterrate all'aeroporto internazionale Hosea Kutako, a circa 45 minuti dal centro città, ritirate l'auto a noleggio e pernottate a Windhoek, la classica notte d'apertura prima dell'inizio dei lunghi tragitti in auto.",
        regionSlug: "windhoek",
      },
      {
        label: "Giorni 2-3",
        text: "Guidate fino a Sossusvlei (circa 5h via Rehoboth e Solitaire) per una sessione all'alba a Dune 45 e Deadvlei (navetta dal parcheggio per 2x4, obbligatoria per quell'ultimo tratto), e il canyon di Sesriem nella parte più fresca della giornata.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Giorni 4-5",
        text: "Guidate fino a Swakopmund (circa 4-5h via Solitaire e il Kuiseb Pass) per due notti sulla costa, un'attività vera e propria (sandboarding o gita in barca a Walvis Bay), e il miglior cibo del percorso.",
        regionSlug: "swakopmund",
      },
      {
        label: "Giorni 6-7",
        text: "Damaraland (circa 3-4h da Swakopmund via Uis): le incisioni rupestri di Twyfelfontein, un vero sito patrimonio dell'UNESCO, il primo giorno; un'uscita guidata alla ricerca di elefanti adattati al deserto il secondo (gli avvistamenti non sono garantiti, ma è la migliore possibilità realistica nel paese).",
        regionSlug: "damaraland",
      },
      {
        label: "Giorni 8-9",
        text: "Etosha (circa 4h dal Damaraland via Kamanjab e Outjo): diviso tra un lodge su riserva privata per i safari notturni e il tracking fuoristrada, e l'osservazione delle pozze d'acqua all'interno del parco o dal campo.",
        regionSlug: "etosha",
      },
      {
        label: "Giorno 10",
        text: "Tornate in auto a Windhoek (circa 4h30) per il volo di partenza.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "10 giorni sono la durata giusta per un primo viaggio in Namibia?",
        a: "Per la maggior parte delle persone sì: è l'itinerario più breve che copre deserto, costa e una vera tappa faunistica senza trasformare ogni giorno in una giornata di guida. È l'itinerario che consiglieremmo di default.",
      },
      {
        q: "Conviene noleggiare un 4x4 per questo itinerario?",
        a: "Sì, vale la pena specificamente per le piste D in ghiaia del Damaraland. Un 2x4 con buona altezza da terra può cavarsela, ma un 4x4 è la scelta più comoda e meno rischiosa per quella tratta. Etosha, Sossusvlei e Swakopmund da soli non lo richiederebbero.",
      },
      {
        q: "Si può saltare il Damaraland per evitare l'upgrade al 4x4?",
        a: "Sì, tornate alla copertura dell'itinerario di 7 giorni e aggiungete invece una terza notte a Etosha, oppure sostituite il Damaraland con una seconda giornata di attività a Swakopmund. Perderete gli elefanti adattati al deserto e Twyfelfontein, un compromesso reale, non trascurabile.",
      },
      {
        q: "Quanta guida richiede in totale l'itinerario di 10 giorni?",
        a: "Circa 21 ore su cinque tratte: circa 5h verso Sossusvlei, 4-5h fino a Swakopmund, 3-4h verso il Damaraland, 4h verso Etosha, e 4h30 di ritorno a Windhoek. Sono poco più di 2 ore al giorno in media, ripartite su dieci giorni, dato che ogni tappa di due notti lascia un'intera giornata senza alcuna guida.",
      },
    ],
  },
  "14-days": {
    title: "Due settimane",
    description: "Spazio per aggiungere Fish River Canyon e Spitzkoppe senza dover accelerare le giornate di guida.",
    vehicle:
      "4x4 consigliato per l'intero circuito: questo itinerario copre le piste D in ghiaia del Damaraland e il lungo deviamento a sud verso Fish River Canyon, entrambi più comodi con maggiore altezza da terra.",
    pace: "Confortevole, con un vero margine: la maggior parte delle tappe ha due o più notti e c'è spazio per adattarsi se il meteo, la stanchezza o un'alba mancata lo richiedono.",
    bestFor: "Viaggiatori che desiderano il circuito classico più il sud, senza i lunghi deviamenti verso il Caprivi o la Costa degli Scheletri.",
    dayByDay: [
      {
        label: "Giorno 1",
        text: "Atterrate a Windhoek, ritirate il vostro 4x4 a noleggio (questo circuito richiede l'altezza da terra per le piste D del Damaraland e, più avanti, il deviamento verso Fish River Canyon), e pernottate nella capitale prima che inizino le lunghe tratte verso sud.",
        regionSlug: "windhoek",
      },
      {
        label: "Giorni 2-3",
        text: "Fish River Canyon (circa 5h30 a sud): i punti panoramici sul bordo vicino a Hobas all'ora dorata, nessun trekking richiesto per una tappa di questa durata. L'attrazione principale più sottovalutata della Namibia, e un vero deviamento che aggiunge un tempo di guida significativo al circuito.",
        regionSlug: "fish-river-canyon",
      },
      {
        label: "Giorni 4-5",
        text: "Sossusvlei (si torna verso nord, circa 4-5h): alba a Dune 45 e Deadvlei tramite la navetta, canyon di Sesriem nel caldo pomeridiano.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Giorno 6",
        text: "Spitzkoppe: una breve deviazione lungo la strada verso la costa. Una notte per il tramonto, tra i migliori punti per l'osservazione delle stelle del percorso, e l'alba sulle cupole di granito. Le strutture qui sono campeggi comunitari rustici, non il comfort di un lodge.",
        regionSlug: "spitzkoppe",
      },
      {
        label: "Giorni 7-8",
        text: "Swakopmund: due notti sulla costa, un'attività vera e propria (sandboarding sulle dune appena fuori città, oppure una gita in barca a Walvis Bay per la laguna dei fenicotteri), e il miglior cibo del viaggio.",
        regionSlug: "swakopmund",
      },
      {
        label: "Giorni 9-10",
        text: "Damaraland (circa 3-4h da Swakopmund via Uis): le incisioni rupestri di Twyfelfontein, un vero sito patrimonio dell'UNESCO, il primo giorno; un'uscita guidata alla ricerca di elefanti adattati al deserto il secondo (gli avvistamenti non sono garantiti, ma è la migliore possibilità realistica nel paese).",
        regionSlug: "damaraland",
      },
      {
        label: "Giorni 11-13",
        text: "Etosha: tre notti, divise tra un lodge su riserva privata per i safari notturni e il tracking fuoristrada (non consentito all'interno del parco) e un campo del parco per l'osservazione delle pozze d'acqua illuminate, con tempo sufficiente per raggiungere sia la sezione orientale sia quella occidentale invece di sceglierne una sola.",
        regionSlug: "etosha",
      },
      {
        label: "Giorno 14",
        text: "Tornate in auto a Windhoek (circa 4h30) per il volo di partenza.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Vale la pena il deviamento verso Fish River Canyon in un viaggio di 14 giorni?",
        a: "Sì, se avete i giorni: è uno dei canyon più grandi della Terra, con una frazione dei visitatori di siti comparabili altrove. Il compromesso onesto è il tempo di guida reale che aggiunge al circuito, esattamente per questo non compare negli itinerari di 7 o 10 giorni.",
      },
      {
        q: "Serve un 4x4 specificamente per il deviamento verso Fish River Canyon?",
        a: "No, le principali strade asfaltate e sterrate verso sud si percorrono bene con un 2x4, e i punti panoramici sul bordo stessi non richiedono affatto un 4x4. È la combinazione con il Damaraland più avanti in questo stesso circuito a rendere il 4x4 la scelta sensata per l'intero viaggio.",
      },
      {
        q: "Si può fare questo itinerario senza Spitzkoppe?",
        a: "Sì, è una deviazione di una notte, facile da eliminare se preferite aggiungere invece una terza notte a Swakopmund o Sossusvlei. Perdereste una delle migliori tappe per l'osservazione delle stelle del percorso, che è l'unico vero costo.",
      },
      {
        q: "Si può percorrere questo itinerario al contrario, iniziando da Etosha?",
        a: "Sì, iniziare con Etosha e il Damaraland e concludere con Fish River Canyon funziona altrettanto bene dal punto di vista logistico, dato che nessuna delle due tratte dipende dall'altra. L'ordine proposto qui è pensato per il ritmo: partire dal sud vi introduce gradualmente nel viaggio prima della costa, e riserva la fauna di Etosha come punto forte verso la fine.",
      },
    ],
  },
  "21-days": {
    title: "Tre settimane",
    description: "Il paese nella sua interezza, inclusi la Costa degli Scheletri, la Caprivi Strip e un finale ricco di fauna.",
    vehicle:
      "4x4 per le tratte in auto propria: sia il Damaraland sia il deviamento verso Fish River Canyon lo richiedono. Mettete in conto anche almeno un volo interno: i lodge più notevoli del nord della Costa degli Scheletri e la Caprivi Strip sono normalmente raggiunti in aereo da questo punto del circuito, non su strada.",
    pace: "Il paese nella sua interezza, senza fretta: è l'itinerario per i viaggiatori con tre settimane a disposizione che vogliono vedere tutto, non solo il circuito classico.",
    bestFor: "Visitatori di ritorno, oppure chi è alla prima visita ma ha il tempo per scoprire la Namibia a fondo, incluso il suo litorale più remoto e il suo nordest ricco d'acqua.",
    dayByDay: [
      {
        label: "Giorno 1",
        text: "Atterrate a Windhoek, ritirate il vostro 4x4 a noleggio e pernottate nella capitale, la classica notte d'apertura prima di tre settimane di guida e, più avanti, almeno un volo interno.",
        regionSlug: "windhoek",
      },
      {
        label: "Giorni 2-3",
        text: "Fish River Canyon (circa 5h30 a sud): i punti panoramici sul bordo vicino a Hobas all'ora dorata, nessun trekking richiesto.",
        regionSlug: "fish-river-canyon",
      },
      {
        label: "Giorni 4-5",
        text: "Sossusvlei (si torna verso nord, circa 4-5h): alba a Dune 45 e Deadvlei tramite la navetta, canyon di Sesriem.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Giorno 6",
        text: "Spitzkoppe: una breve deviazione lungo la strada verso la costa. Una notte per il tramonto, tra i migliori punti per l'osservazione delle stelle del percorso, e l'alba sulle cupole di granito. Le strutture qui sono campeggi comunitari rustici, non il comfort di un lodge.",
        regionSlug: "spitzkoppe",
      },
      {
        label: "Giorni 7-8",
        text: "Swakopmund: due notti sulla costa, un'attività vera e propria (sandboarding o gita in barca a Walvis Bay per la laguna dei fenicotteri), e il miglior cibo del viaggio.",
        regionSlug: "swakopmund",
      },
      {
        label: "Giorni 9-10",
        text: "Costa degli Scheletri: due notti. I lodge più notevoli del nord sono normalmente raggiungibili solo in aereo da Swakopmund; una breve deviazione in auto dal Damaraland raggiunge solo la sezione meridionale, meno remota. Colonie di otarie, relitti e isolamento autentico in entrambi i casi.",
        regionSlug: "skeleton-coast",
      },
      {
        label: "Giorni 11-12",
        text: "Damaraland: le incisioni rupestri di Twyfelfontein, un vero sito patrimonio dell'UNESCO, e un'uscita guidata di tracking degli elefanti adattati al deserto (gli avvistamenti non sono garantiti, ma è la migliore possibilità realistica nel paese).",
        regionSlug: "damaraland",
      },
      {
        label: "Giorni 13-15",
        text: "Etosha: tre notti, divise tra un lodge su riserva privata per i safari notturni e il tracking fuoristrada e campi vicino alle pozze d'acqua all'interno del parco, con tempo sufficiente per raggiungere sia la sezione orientale sia quella occidentale invece di sceglierne una sola.",
        regionSlug: "etosha",
      },
      {
        label: "Giorni 16-18",
        text: "Volate oppure affrontate il lungo tragitto in auto (circa 12h) verso la Caprivi Strip: la maggior parte delle persone da questo punto vola fino a Katima Mulilo invece di guidare. Tre notti di crociere fluviali per osservare ippopotami e uccelli, e un safari in veicolo nel Parco Nazionale di Bwabwata, una Namibia davvero diversa dal circuito desertico lasciato alle spalle.",
        regionSlug: "caprivi",
      },
      {
        label: "Giorni 19-21",
        text: "Tornate a Windhoek per chiudere il circuito: la maggior parte dei viaggiatori preferisce volare da Katima Mulilo piuttosto che ripetere il tragitto di circa 12h in auto, soprattutto dovendo prendere un volo internazionale entro il giorno 21.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Bisogna volare da qualche parte in questo itinerario di 21 giorni?",
        a: "Realisticamente sì, almeno una volta: i migliori lodge della Costa degli Scheletri e la Caprivi Strip sono normalmente raggiunti con un piccolo aereo o un volo interno piuttosto che in auto propria, date le distanze in gioco. Mettetelo in conto nel budget di questo itinerario.",
      },
      {
        q: "3 settimane sono troppe per la Namibia?",
        a: "Non date le distanze di guida nel paese: 3 settimane sono ciò che permette di aggiungere entrambi gli estremi (la Costa degli Scheletri e il Caprivi) al circuito classico senza trasformare l'intero viaggio in giornate di transito. La maggior parte dei viaggiatori che sceglie questa durata sono visitatori di ritorno o danno specificamente priorità all'isolamento.",
      },
      {
        q: "Si può fare questo itinerario in 2x4 invece che in 4x4?",
        a: "Non comodamente: le piste D del Damaraland e il deviamento verso Fish River Canyon sono le due tratte dove un 4x4 fa una vera differenza, e questo itinerario le include entrambe. Se volete restare su un 2x4, l'itinerario di 7 giorni è quello pensato per questo.",
      },
      {
        q: "Si può percorrere questo itinerario nella direzione opposta?",
        a: "Sì, strutturalmente: iniziare con Etosha e il nord, per poi scendere verso sud a Fish River Canyon come ultima tappa, funziona altrettanto bene, dato che né la Costa degli Scheletri né il Caprivi dipendono dalla direzione di viaggio. L'unico punto fisso è Windhoek stessa: entrambe le estremità del viaggio sono ancorate al suo aeroporto, quindi qualunque direzione scegliate, atterrerete e decollerete sempre dalla stessa città.",
      },
    ],
  },
};

export const regionsIt: Region[] = regions.map((r) => ({ ...r, ...(regionTranslationsIt[r.slug] ?? {}) }));
export const lodgesIt: Lodge[] = lodges.map((l) => ({ ...l, ...(lodgeTranslationsIt[l.slug] ?? {}) }));
export const selfDriveRoutesIt: RoutePlan[] = selfDriveRoutes.map((r) => ({
  ...r,
  ...(routeTranslationsIt[r.slug] ?? {}),
}));

export function getRegionIt(slug: string): Region | undefined {
  return regionsIt.find((r) => r.slug === slug);
}

export function getLodgeIt(slug: string): Lodge | undefined {
  return lodgesIt.find((l) => l.slug === slug);
}

export function getLodgesForRegionIt(regionSlug: string): Lodge[] {
  return lodgesIt.filter((l) => l.regionSlug === regionSlug);
}

export function getRouteIt(slug: string): RoutePlan | undefined {
  return selfDriveRoutesIt.find((r) => r.slug === slug);
}

export function getLodgesByCategoryIt(category: LodgeCategory): Lodge[] {
  return lodgesIt.filter((l) => l.categories.includes(category));
}

export const featuredLodgesIt: Lodge[] = [
  getLodgeIt("little-kulala")!,
  getLodgeIt("grootberg-lodge")!,
  getLodgeIt("ongava-lodge")!,
  getLodgeIt("canyon-lodge")!,
];
