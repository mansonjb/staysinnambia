import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Guida alla fauna della Namibia";
const DESCRIPTION =
  "La lista della fauna namibiana per regione: elefanti adattati al deserto, rinoceronti neri, specie delle pozze d'acqua di Etosha, e la fauna costiera che la maggior parte degli itinerari si perde.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-wildlife-guide",
    languages: { en: "/namibia-wildlife-guide", de: "/de/namibia-wildlife-guide", nl: "/nl/namibia-wildlife-guide", fr: "/fr/namibia-wildlife-guide", it: "/it/namibia-wildlife-guide" },
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

const SIGHTINGS = [
  {
    region: "Etosha",
    href: "/it/where-to-stay/etosha",
    animals:
      "Leone, elefante, giraffa, zebra, springbok e l'impala dal volto nero, una sottospecie che non si trova al di fuori di Etosha e del Kaokoland nordoccidentale. Le pozze d'acqua illuminate nei campi di Okaukuejo e Halali offrono l'osservazione più affidabile del paese per il rinoceronte nero: i rinoceronti arrivano in genere tra le 19 e le 23 durante la stagione secca (circa maggio-ottobre), spesso condividendo la pozza d'acqua con elefanti e leoni nella stessa notte. Per il ghepardo, le pianure aperte a ovest di Okaukuejo e la pozza d'acqua di Okondeka sono una scommessa migliore rispetto alle pan orientali.",
  },
  {
    region: "Damaraland",
    href: "/it/where-to-stay/damaraland",
    animals:
      "Il territorio dell'elefante adattato al deserto, una popolazione risalita da meno di 30 individui negli anni '80 a circa 600-700 oggi, quasi interamente grazie al modello namibiano delle conservancy comunitarie. Questi elefanti percorrono territori fino a 700 km e possono resistere cinque giorni senza bere, adattamenti che non si trovano quasi in nessun altro luogo sulla Terra. La Torra Conservancy, nella valle del fiume Huab, è la base più affidabile per seguirli. Più a nord, la concessione di Palmwag ospita la più grande popolazione al mondo di rinoceronti neri in libertà, circa 200 animali monitorati quotidianamente dai ranger del Save the Rhino Trust; osservarli significa un'escursione guidata di un'intera giornata a piedi con una guida autorizzata, non una sosta in self-drive.",
  },
  {
    region: "Skeleton Coast",
    href: "/it/where-to-stay/skeleton-coast",
    animals:
      "Colonie di otarie orsine del Capo (solo Cape Cross ne ospita ben oltre 100.000 al picco della stagione), iena bruna in cerca di carogne lungo la battigia e, al largo, il delfino di Heaviside, una piccola specie di delfino che si trova solo lungo le coste namibiana e sudafricana. È un territorio più orientato al paesaggio e alla vita marina che una tappa di grande fauna.",
  },
  {
    region: "Caprivi (Zambesi)",
    href: "/it/where-to-stay/caprivi",
    animals: (
      <>
        La fauna più legata all&apos;acqua della Namibia, concentrata nel Parco Nazionale di
        Bwabwata lungo le pianure alluvionali del Kwando e dello Zambesi: ippopotamo, coccodrillo,
        mandrie considerevoli di elefanti e bufali, antilopi sable e roan, e una delle ultime
        popolazioni di licaoni del paese, monitorata dal Kwando Carnivore Project. È anche la
        migliore regione del paese per il birdwatching e l&apos;unico luogo dove un vero
        avvistamento dei Big Five, bufalo compreso, è realistico, un ecosistema completamente
        diverso dalle specie delle terre aride presenti altrove nel paese. È anche la regione della
        Namibia con il rischio di malaria più elevato: consultate la nostra{" "}
        <Link
          href="/it/namibia-safety-and-health"
          className="font-medium text-rust hover:text-rust-dark"
        >
          guida su sicurezza e salute
        </Link>{" "}
        prima di partire.
      </>
    ),
  },
  {
    region: "Sossusvlei",
    href: "/it/where-to-stay/sossusvlei",
    animals:
      "L'orice (gemsbok) stagliato sulle creste delle dune è l'avvistamento distintivo, e l'ultimo censimento faunistico della vicina NamibRand Nature Reserve ha contato circa 3.200 orici e 12.400 springbok sui suoi 172.000 ettari. Iena bruna, sciacallo dalla gualdrappa e leopardo sono presenti ma davvero elusivi; NamibRand porta avanti anche un programma attivo di reintroduzione del caracal e del ghepardo, quindi entrambi restano un avvistamento bonus, non una certezza.",
  },
];

const TIMING = [
  "L'alba (circa 5:30-8:00): i predatori sono più attivi, la finestra migliore per osservare leone, ghepardo e leopardo in movimento prima che si installi il caldo.",
  "Il mezzogiorno: la fauna si concentra attorno alle pozze d'acqua invece di spostarsi, soprattutto nella stagione secca da maggio a ottobre. Parcheggiare a Okaukuejo, Halali o Olifantsrus e aspettare funziona meglio che guidare in cerca di avvistamenti.",
  "Il crepuscolo e le prime ore di buio, alle pozze d'acqua illuminate dei campi: l'attività del rinoceronte nero e dell'elefante raggiunge il picco, in genere tra le 19 e le 23 nella stagione secca.",
  "La stagione delle piogge (novembre-aprile): la fauna si disperde ampiamente man mano che le pan temporanee si riempiono, rendendo gli avvistamenti meno prevedibili, ma il birdwatching, le nascite dei cuccioli e i paesaggi verdi migliorano notevolmente.",
];

const FAQS = [
  {
    q: "La Namibia ha i Big Five?",
    a: "Non ovunque, e non nella versione classica che include il bufalo suggerita dalla maggior parte del marketing sui safari. Etosha offre in modo affidabile leone, elefante, rinoceronte nero e leopardo; il bufalo non fa parte dell'ecosistema di Etosha. Il Parco Nazionale di Bwabwata, nella regione della Caprivi (Zambesi), è l'unico luogo con una reale possibilità di osservare tutti e cinque, bufalo incluso, accanto ad antilopi sable e roan e a uno degli ultimi branchi di licaoni del paese.",
  },
  {
    q: "Cosa rende la fauna namibiana diversa da quella del Kenya o della Tanzania?",
    a: "La fauna distintiva della Namibia è adattata al deserto: elefanti e rinoceronti neri che sopravvivono con una frazione dell'acqua necessaria ai loro parenti di savana. La popolazione di elefanti del deserto del Damaraland è salita da meno di 30 animali negli anni '80 a circa 600-700 oggi, e la concessione di Palmwag ospita la più grande popolazione al mondo di rinoceronti neri adattati al deserto in libertà, circa 200 individui. È un incontro con la fauna diverso, più essenziale, rispetto alle mandrie dense dell'Africa orientale, costruito su avvistamenti rari piuttosto che sul volume.",
  },
  {
    q: "Qual è il posto migliore per vedere il rinoceronte nero in Namibia?",
    a: "Le pozze d'acqua illuminate di Okaukuejo e Halali a Etosha per la possibilità più affidabile, con i rinoceronti che arrivano in genere tra le 19 e le 23 nella stagione secca; e la concessione di Palmwag nel Damaraland per il tracking guidato a piedi di animali monitorati dal Save the Rhino Trust, uno dei pochi luoghi in Africa dove questo viene offerto in modo responsabile, in collaborazione con le conservancy comunitarie.",
  },
  {
    q: "Si può osservare la fauna in self-drive, o serve una guida?",
    a: "Etosha si presta davvero bene all'osservazione della fauna in self-drive: le pozze d'acqua sono raggiungibili con una normale auto a noleggio e la fauna vi si concentra in modo prevedibile, soprattutto nella stagione secca da maggio a ottobre. Il tracking degli elefanti adattati al deserto nella Torra Conservancy del Damaraland e il tracking del rinoceronte nero nella concessione di Palmwag richiedono entrambi una guida specializzata e autorizzata; non sono avvistamenti dalla strada.",
  },
  {
    q: "Dove vedere il ghepardo in Namibia?",
    a: "La Namibia ospita la più grande popolazione di ghepardi in libertà al mondo, stimata in circa 1.500 animali, e Otjiwarongo, vicino al Waterberg, è spesso soprannominata la capitale mondiale del ghepardo. Il centro di ricerca del Cheetah Conservation Fund lì offre l'osservazione più affidabile, insieme alla fondazione AfriCat a Okonjima. A Etosha, le migliori probabilità durante un game drive si trovano sulle pianure aperte a ovest di Okaukuejo e alla pozza d'acqua di Okondeka, anche se gli avvistamenti di ghepardo restano ovunque occasionali, mai garantiti.",
  },
  {
    q: "Qual è il periodo migliore dell'anno per l'osservazione della fauna in Namibia?",
    a: "La stagione secca, circa da maggio a ottobre, quando la scarsità d'acqua costringe gli animali a concentrarsi attorno alle pozze d'acqua e rende gli avvistamenti molto più prevedibili, soprattutto a Etosha. La stagione delle piogge (novembre-aprile) disperde maggiormente la fauna e rende gli avvistamenti più difficili da prevedere, ma è la finestra migliore per il birdwatching, le nascite dei cuccioli e i paesaggi verdi.",
  },
];

export default function WildlifeGuidePageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Guida alla fauna", url: `${SITE_URL}/it/namibia-wildlife-guide` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          La fauna della Namibia: cosa vedrete, e dove
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La fauna namibiana è dispersa, non concentrata come in Africa orientale. La regione in
          cui soggiornate determina cosa vedrete davvero.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {SIGHTINGS.map((s, i) => (
            <Reveal
              key={s.region}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{s.region}</h2>
                <Link
                  href={s.href}
                  className="text-[12px] font-semibold uppercase tracking-[0.1em] text-rust hover:text-rust-dark"
                >
                  Dove alloggiare: {s.region} →
                </Link>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{s.animals}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Il momento migliore della giornata, per specie</h2>
          <ul className="mt-5 space-y-3">
            {TIMING.map((item) => (
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
            href="/it/best-safari-areas"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Migliori zone safari
          </Link>
        </Reveal>
      </section>
    </>
  );
}
