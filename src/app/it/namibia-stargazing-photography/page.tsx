import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Guida all'osservazione delle stelle in Namibia";
const DESCRIPTION =
  "Dove il cielo notturno namibiano è più buio, e cosa rende davvero questi luoghi diversi: la riserva di cielo stellato Gold di NamibRand, la luce fotografica delle dune, e dove dormire sotto questo cielo.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-stargazing-photography",
    languages: {
      en: "/namibia-stargazing-photography",
      de: "/de/namibia-stargazing-photography",
      nl: "/nl/namibia-stargazing-photography", fr: "/fr/namibia-stargazing-photography",
        it: "/it/namibia-stargazing-photography",
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

const SPOTS = [
  {
    place: "NamibRand Nature Reserve",
    href: "/it/where-to-stay/sossusvlei",
    text: (
      <>
        La destinazione di punta della Namibia per l&apos;osservazione del cielo notturno.
        NamibRand è stata iscritta nel 2012 come riserva internazionale di cielo stellato di
        livello Gold, il più rigoroso dei tre livelli, e all&apos;epoca era solo la seconda riserva
        Gold al mondo. Le misurazioni con lo Sky Quality Meter effettuate nella riserva superano
        regolarmente 21,0 magnitudini per secondo d&apos;arco quadrato, vicino al limite teorico di
        oscurità di circa 22, il che corrisponde a un cielo di classe Bortle 1-2, la
        classificazione più buia usata dagli astronomi. In una notte serena e senza luna si
        distinguono a occhio nudo le bande di polvere della Via Lattea, insieme alle Nubi di
        Magellano e, a volte, alla luce zodiacale, un debole cono di luce solare riflessa dalla
        polvere interplanetaria, invisibile quasi ovunque altrove a causa della luce artificiale.
        Diversi lodge ai margini della riserva, tra cui Wolwedans e NamibRand Family Hideout,
        organizzano sessioni di astronomia guidate con veri telescopi, non solo una coperta stesa
        sulla sabbia. Scegli la stagione secca (maggio-settembre), quando il cielo è più secco e la
        copertura nuvolosa è minima. Consulta la nostra{" "}
        <Link href="/it/best-time-to-visit-namibia" className="font-semibold text-rust hover:text-rust-dark">
          guida al periodo migliore per partire
        </Link>
        .
      </>
    ),
  },
  {
    place: "Dune di Sossusvlei",
    href: "/it/where-to-stay/sossusvlei",
    text: "La stessa aria limpida del deserto che rende eccezionale il cielo notturno rende qui anche il momento dell'alba una delle migliori fotografie d'Africa: la finestra di 20-45 minuti dopo l'apertura dei cancelli è quando il colore delle dune è più spettacolare, prima che si depositi la foschia da calore. Per l'astrofotografia, le dune stesse offrono un primo piano suggestivo di fronte alla Via Lattea; allontanati di poco dall'illuminazione del campo e lascia che i tuoi occhi si abituino al buio per almeno 15-20 minuti prima di scattare.",
  },
  {
    place: "Spitzkoppe",
    href: "/it/where-to-stay/spitzkoppe",
    text: "Un gruppo di inselberg granitici che si innalzano fino a 1.728 m, con circa 670 m di dislivello rispetto alla pianura di ghiaia circostante, a circa 180 km da Swakopmund e 280 km da Windhoek. La sua sagoma stagliata contro la Via Lattea è uno dei primi piani più fotografati della Namibia, e a differenza di NamibRand, è una semplice tappa in autonomia piuttosto che una riserva da prenotare. Il campeggio gestito dalla comunità locale conta circa 30 piazzole basilari e ben distanziate, direttamente tra le rocce, così puoi scattare dalla tua stessa piazzola senza alcun inquinamento luminoso; prenota con diversi mesi di anticipo durante il picco di luglio-settembre.",
  },
];

const GEAR_TIPS = [
  "Scatta intorno alla luna nuova: un cielo senza luna è molto più buio di uno con anche solo il primo quarto di luna, ed è il fattore numero uno per quanta Via Lattea riuscirai davvero a vedere. Controlla il calendario lunare prima di fissare le date se l'osservazione delle stelle è una priorità del viaggio.",
  "Il treppiede è irrinunciabile; un obiettivo grandangolare (14-24 mm su full frame) permette di inquadrare più cielo e primo piano in una sola esposizione.",
  "Per iniziare, usa l'apertura più ampia consentita dal tuo obiettivo (f/2.8 o più se possibile), una sensibilità ISO 1600-6400, e un tempo di posa inferiore a circa 500 diviso la lunghezza focale in mm per mantenere le stelle come punti anziché come scie (per esempio, circa 20 secondi a 24 mm).",
  "Porta con te una torcia frontale con modalità luce rossa per preservare la visione notturna, e uno scatto remoto o l'autoscatto della fotocamera per evitare mosso dovuto alla pressione del pulsante.",
  "Arriva sul posto mentre c'è ancora un po' di luce per comporre lo scatto e controllare l'appannamento dell'obiettivo, che si forma in fretta quando le temperature del deserto scendono dopo il tramonto.",
];

const FAQS = [
  {
    q: "Cosa rende diverso il cielo notturno di NamibRand da altri luoghi bui?",
    a: "NamibRand detiene lo status di riserva internazionale di cielo stellato di livello Gold dal 2012, il più alto dei tre livelli assegnati da DarkSky International, e all'epoca era solo la seconda riserva Gold designata al mondo. Le misurazioni con lo Sky Quality Meter nella riserva superano regolarmente 21 magnitudini per secondo d'arco quadrato, a fronte di un massimo teorico di circa 22, il che la colloca in classe Bortle 1-2, la classificazione più buia usata dagli astronomi. Ciò riflette sia l'assenza quasi totale di luce artificiale, sia le misure attive e continue adottate dalla riserva e dai lodge ai suoi confini, tra cui un'illuminazione schermata e rivolta verso il basso, per mantenere questa oscurità.",
  },
  {
    q: "Serve un'attrezzatura particolare per l'astrofotografia in Namibia?",
    a: "Un treppiede e una fotocamera capace di esposizioni lunghe manuali coprono gran parte delle esigenze; un obiettivo grandangolare (equivalente 14-24 mm) aiuta per gli scatti alla Via Lattea, così come un'apertura ampia (f/2.8 o più) e una torcia frontale con modalità luce rossa per preservare la visione notturna. Diversi lodge vicino a NamibRand e Sossusvlei, tra cui Wolwedans e NamibRand Family Hideout, offrono sessioni di astronomia guidate con veri telescopi se vuoi qualcosa in più di una semplice inquadratura ampia del cielo.",
  },
  {
    q: "Qual è il periodo migliore dell'anno per osservare le stelle in Namibia?",
    a: "La stagione secca (maggio-settembre) offre l'aria più limpida e secca, con la minor copertura nuvolosa, il che spiega anche perché coincide con il periodo migliore per l'osservazione della fauna. All'interno di questa finestra, regolati sul calendario lunare: una notte vicina alla luna nuova offre il cielo più buio possibile, mentre le notti intorno alla luna piena fanno sparire tutte le stelle tranne le più luminose, quindi conviene controllare la fase lunare prima di fissare le date di viaggio se l'osservazione delle stelle è una priorità.",
  },
  {
    q: "Sossusvlei o Spitzkoppe: quale è meglio per la fotografia?",
    a: "Sono soggetti diversi, non una scelta tra meglio e peggio. Sossusvlei riguarda il colore e la scala delle dune all'alba; Spitzkoppe, un gruppo di inselberg granitici a circa 180 km da Swakopmund che si innalzano fino a 1.728 m, riguarda le sagome spettacolari delle rocce contro la Via Lattea dopo il tramonto, con un campeggio gestito dalla comunità che ti posiziona proprio in mezzo ai massi. Diversi itinerari includono entrambi con una notte di tappa tra i due siti.",
  },
];

export default function StargazingPageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Osservazione delle stelle e fotografia", url: `${SITE_URL}/it/namibia-stargazing-photography` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guida
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Osservazione delle stelle e astrofotografia in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          L&apos;aria secca della Namibia e l&apos;assenza quasi totale di inquinamento luminoso ne
          fanno una delle poche vere destinazioni di cielo stellato al mondo, non solo materiale
          promozionale. Ecco dove è davvero migliore, e perché.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Il nostro consiglio:</span> se
          l&apos;osservazione delle stelle è una vera priorità del viaggio e non solo un
          gradito extra, imposta prima le date in base alla fase lunare, poi alla stagione. Una
          notte di stagione secca (maggio-settembre) a pochi giorni dalla luna nuova a NamibRand
          batte una notte di luna piena in qualsiasi mese.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {SPOTS.map((s, i) => (
            <Reveal
              key={s.place}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{s.place}</h2>
                <Link
                  href={s.href}
                  className="text-[12px] font-semibold uppercase tracking-[0.1em] text-rust hover:text-rust-dark"
                >
                  Dove alloggiare →
                </Link>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Tempistica e attrezzatura, in pratica</h2>
          <ul className="mt-5 space-y-3">
            {GEAR_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-[14px] leading-relaxed text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {tip}
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
