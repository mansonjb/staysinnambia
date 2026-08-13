import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Chi siamo | Namibia Stays";
const DESCRIPTION =
  "Come funziona Namibia Stays: come scegliamo i lodge, perché non ci sono prezzi né valutazioni a stelle, e come manteniamo le informazioni aggiornate.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/it/about", languages: { en: "/about", de: "/de/about", nl: "/nl/about", fr: "/fr/about", it: "/it/about" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function AboutPageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Chi siamo", url: `${SITE_URL}/it/about` },
        ])}
      />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Chi siamo
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Come è costruito Namibia Stays
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Non siamo un&apos;agenzia di viaggi e non abbiamo soggiornato personalmente in ogni lodge
          presente su questo sito. Ecco esattamente cosa facciamo invece, così sapete cosa state
          leggendo.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Come scegliamo cosa includere</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Ogni lodge e ogni regione su Namibia Stays viene studiato a partire da fonti reali e
              pubbliche: siti degli operatori e dei lodge, enti del turismo nazionali e regionali,
              guide di viaggio affermate e reportage di viaggio indipendenti. Raccogliamo e
              verifichiamo incrociando queste informazioni per stabilire cosa merita davvero di
              essere incluso, invece di pubblicare una recensione personale di un soggiorno che
              abbiamo effettivamente fatto.
            </p>
          </Reveal>
          <Reveal delay={60} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Perché non ci sono prezzi né valutazioni a stelle</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              I prezzi cambiano continuamente e non possiamo verificare in modo indipendente le
              valutazioni degli ospiti per le strutture in cui non abbiamo soggiornato noi stessi,
              quindi non pubblichiamo né gli uni né le altre. Dove esistono disponibilità e
              tariffe in tempo reale, rimandiamo al nostro partner per le prenotazioni, Stay22,
              invece di mostrare su questo sito un numero che potrebbe già essere superato nel
              momento in cui lo leggete. I contrassegni €&ndash;€€€€ che vedrete sulle schede dei
              lodge indicano una fascia di prezzo generale, basata sul modo in cui l&apos;operatore
              posiziona la struttura, non una tariffa in tempo reale: verificate presso il lodge o
              su Stay22 il costo effettivo della prenotazione.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Nessun posizionamento a pagamento</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Guadagniamo una commissione quando prenotate un soggiorno tramite un link su questo
              sito. Questo non influisce mai sui lodge che mettiamo in evidenza né sul modo in cui
              li descriviamo. Nulla qui è presente perché una struttura ha pagato per esserlo.
            </p>
          </Reveal>
          <Reveal delay={180} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Mantenere le informazioni aggiornate</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Le norme che riguardano i viaggi in Namibia cambiano: tariffe d&apos;ingresso ai parchi,
              requisiti di accesso, condizioni delle strade, permessi per le escursioni. Quando
              aggiorniamo una pagina per un cambiamento reale, lo indichiamo nella pagina stessa,
              con la data. Preferiamo segnalare un elemento come soggetto a variazioni piuttosto
              che lasciarlo diventare obsoleto in silenzio.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <div className="flex items-start gap-3">
            <MetaIcon name="check" className="mt-1 h-5 w-5 shrink-0 text-olive" />
            <p className="text-[14px] leading-relaxed text-charcoal/70">
              Avete notato qualcosa di obsoleto, o un lodge che ha chiuso o cambiato proprietario?
              Ci farebbe davvero piacere saperlo. Consultate{" "}
              <Link href="/it/best-lodges-in-namibia" className="font-semibold text-rust hover:text-rust-dark">
                i migliori lodge della Namibia
              </Link>{" "}
              oppure iniziate con{" "}
              <Link href="/it/where-to-stay/namibia" className="font-semibold text-rust hover:text-rust-dark">
                dove soggiornare in Namibia
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
