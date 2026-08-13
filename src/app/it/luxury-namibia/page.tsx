import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia di lusso";
const DESCRIPTION =
  "Com'è davvero un viaggio di lusso in Namibia: circuiti in aereo privato, guide personali e i lodge di alta gamma che valgono il costo extra.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/luxury-namibia",
    languages: { en: "/luxury-namibia", de: "/de/luxury-namibia", nl: "/nl/luxury-namibia", fr: "/fr/luxury-namibia", it: "/it/luxury-namibia" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POINTS = [
  {
    title: "L'aereo invece dell'auto",
    text: (
      <>
        I migliori lodge si raggiungono spesso in piccolo aereo piuttosto che su strada. I campi
        fly-in della Palmwag Concession e della Hoanib Valley sono pensati specificamente per il
        tracking del leone del deserto, dell&apos;elefante e del rinoceronte, e di norma sono
        raggiungibili solo con volo charter. I lodge della NamibRand Nature Reserve, vicino a
        Sossusvlei, si raggiungono in circa 45 minuti di volo, contro le circa 5 ore di pista per
        lo stesso tragitto secondo la nostra{" "}
        <Link
          href="/it/namibia-self-drive-guide"
          className="text-rust underline underline-offset-2 hover:text-rust-dark"
        >
          guida al viaggio in autonomia
        </Link>
        . Più a nord, il Serra Cafema è isolato sulle rive del fiume Kunene, nella Hartmann
        Valley, raggiungibile solo con aereo leggero fino alla propria pista d&apos;atterraggio:
        è semplicemente il lodge più remoto del paese.
      </>
    ),
  },
  {
    title: "Riserve private, non solo camere private",
    text: "In Namibia il lusso si misura soprattutto in termini di accesso, non di densità dei fili del lenzuolo. La riserva di Ongava, che confina con il cancello Anderson di Etosha, consente uscite notturne ed escursioni fuori pista che il parco nazionale stesso vieta. Nel Damaraland, la Palmwag Concession ospita una delle più grandi popolazioni di rinoceronti neri allo stato libero al mondo, ed è uno dei pochi luoghi in Africa dove è possibile seguirli a piedi con una guida specializzata invece che da un veicolo.",
  },
  {
    title: "Meno notti, ma di qualità superiore",
    text: "Un itinerario di lusso è spesso più breve di un circuito economico in autonomia: tre o quattro campi distribuiti su 8-10 giorni, ciascuno merita due notti intere invece di una semplice tappa di passaggio. Lo Shipwreck Lodge, sulla Skeleton Coast, ha ricevuto una Michelin Key nella primissima selezione mondiale Global Michelin Keys (2025), un buon indicatore di cosa significhi «valere il volo» a questo livello.",
  },
  {
    title: "Cosa compra davvero il costo extra",
    text: "Al livello più alto, ogni unità dispone tipicamente di una propria guida e spesso di uno chef dedicato, invece di un veicolo da safari condiviso e un menu unico. L'intera area del Namib-Naukluft attorno a Sossusvlei è una Riserva Internazionale di Cielo Buio (livello Gold dal 2012): l'osservazione delle stelle è quindi un'attività programmata in molti dei suoi lodge, tra lucernari sopra il letto e piattaforme all'aperto per dormire sotto le stelle, non solo una bella notte serena notata per caso. Un volo privato in mongolfiera all'alba sopra le dune (Namib Sky Balloon Safaris, circa 9.900 N$ / 550 $ USA a persona, con colazione a base di champagne inclusa) è il tipo di lusso occasionale facile da aggiungere a un itinerario di lusso, e molto più difficile da giustificare su un circuito economico.",
  },
];

export default function LuxuryPageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Guide", url: `${SITE_URL}/it/guides` },
          { name: "Namibia di lusso", url: `${SITE_URL}/it/luxury-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guida
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia di lusso
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Un viaggio di lusso in Namibia assomiglia meno a un hotel a cinque stelle e più a un
          accesso totale e privato al paesaggio. Ecco cosa cambia davvero quando si spende di
          più: quali cancelli potete attraversare, su quale veicolo salite, e quante altre persone
          si trovano realmente nei vostri paraggi.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <MetaIcon name="compass" className="h-6 w-6 text-rust" />
                <h2 className="mt-4 text-lg font-bold text-charcoal">{p.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            href="/it/best-luxury-lodges"
            className="group inline-flex items-center gap-3 rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Scopri i migliori lodge di lusso
            <CardArrow className="bg-ivory/20 text-ivory group-hover:bg-ivory group-hover:text-rust" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
