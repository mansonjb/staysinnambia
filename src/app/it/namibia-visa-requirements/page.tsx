import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Requisiti per il visto in Namibia";
const DESCRIPTION =
  "Cosa è cambiato ad aprile 2025: il nuovo sistema online per il visto all'arrivo in Namibia, chi ne ha ancora bisogno, la tassa di 90 $ e i documenti da preparare.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-visa-requirements",
    languages: {
      en: "/namibia-visa-requirements",
      de: "/de/namibia-visa-requirements",
      nl: "/nl/namibia-visa-requirements", fr: "/fr/namibia-visa-requirements",
        it: "/it/namibia-visa-requirements",
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

const FAQS = [
  {
    q: "Serve un visto per la Namibia?",
    a: "Dipende dalla nazionalità. La Namibia esenta completamente dal visto circa 55 paesi per soggiorni turistici brevi, compresi i suoi vicini immediati della SADC, ossia Sudafrica, Botswana, Zambia e Zimbabwe, più altri 18 paesi in base ad accordi reciproci di esenzione dal visto. La maggior parte delle altre nazionalità, tra cui la maggioranza dei paesi dell'UE, il Regno Unito e gli Stati Uniti, è idonea per un visto all'arrivo (VoA), ma dal 1° aprile 2025 questo visto deve essere richiesto e approvato online prima della partenza, e non viene più rilasciato sul posto in aeroporto.",
  },
  {
    q: "Cosa è cambiato il 1° aprile 2025, e cosa è cambiato da allora?",
    a: "Il ministero namibiano dell'Interno, Immigrazione, Sicurezza e Protezione (MHAISS) ha trasformato il sistema del visto all'arrivo in una domanda online obbligatoria prima della partenza, presentata tramite il suo portale eServices. I viaggiatori idonei al VoA non possono più semplicemente mettersi in fila all'immigrazione e pagare in contanti: la domanda, il pagamento e l'approvazione avvengono ora prima della partenza, un po' come con un eTA. Il sistema ha continuato a evolversi dal suo lancio: il MHAISS ha aggiunto 36 nazionalità aggiuntive idonee all'elenco del VoA online nell'ottobre 2025, e il quadro dei requisiti di idoneità ha continuato a ricevere aggiornamenti periodici per tutto il 2026. Poiché questo elenco può cambiare, verifica sempre la tua nazionalità specifica sul portale ufficiale in prossimità della data di viaggio, invece di affidarti all'elenco dell'anno scorso.",
  },
  {
    q: "Quanto costa il visto all'arrivo in Namibia?",
    a: "La tassa pubblicata è di 1.600 N$ (circa 90 $ USA al tasso di cambio attuale) per la maggior parte delle nazionalità non africane, e di 1.200 N$ (circa 65-70 $ USA) alla tariffa ridotta per i cittadini di altri stati membri dell'Unione Africana. Il pagamento avviene online, in dollari namibiani, al momento della domanda. Il visto è valido 3 mesi dalla data di rilascio e consente un soggiorno unico fino a 30 giorni.",
  },
  {
    q: "Quali documenti servono per fare domanda?",
    a: "Un passaporto valido almeno 6 mesi oltre le date di viaggio, con pagine vuote disponibili per il visto; una breve lettera di motivazione che specifichi lo scopo del soggiorno; una prenotazione alloggio confermata o una lettera di invito; un estratto conto bancario o un'altra prova di mezzi finanziari sufficienti per la durata del soggiorno; e una prova di assicurazione di viaggio o medica che copra il soggiorno. Ad alcuni richiedenti viene anche chiesta la conferma del volo di ritorno o di proseguimento. I requisiti possono cambiare: verifica l'elenco attuale sul portale ufficiale eServices dell'immigrazione namibiana prima di fare domanda.",
  },
  {
    q: "Con quanto anticipo bisogna fare domanda?",
    a: "Le indicazioni dello stesso MHAISS parlano di circa 7-10 giorni lavorativi per le domande online, anche se consulenti indipendenti in materia di immigrazione hanno riportato tempi che vanno dall'approvazione in giornata ad attese molto più lunghe nei periodi di manutenzione del portale o di forte richiesta. Considera 7-10 giorni lavorativi come base di pianificazione, presenta la domanda almeno 2-3 settimane prima della partenza, e prevedi un margine ulteriore se viaggi in alta stagione (luglio-settembre), periodo in cui il volume delle domande è più alto.",
  },
];

export default function VisaPageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Requisiti per il visto", url: `${SITE_URL}/it/namibia-visa-requirements` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guida · Aggiornata per il 2026
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Requisiti per il visto in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Dal 1° aprile 2025, il visto all&apos;arrivo in Namibia non viene più rilasciato alla
          frontiera: va richiesto, pagato e approvato online tramite il portale eServices del
          ministero dell&apos;Interno prima di partire. L&apos;elenco delle nazionalità idonee ha continuato
          ad ampliarsi da allora, più di recente con 36 paesi aggiunti nell&apos;ottobre 2025. Molte
          guide più datate descrivono ancora il vecchio sistema di pagamento in aeroporto prima del
          2025. Ecco cosa vale ora, e come la tassa di circa 90 $ si inserisce nel resto del tuo{" "}
          <Link href="/it/namibia-trip-cost" className="font-medium text-rust hover:text-rust-dark">
            budget di viaggio
          </Link>
          .
        </p>
        <p className="mt-4 max-w-2xl text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Questa pagina riassume cambiamenti di policy resi pubblici e commenti di consulenti in
          materia di immigrazione, e non costituisce un parere in materia di immigrazione. Regole,
          tasse ed elenchi di nazionalità idonee sono cambiati più volte dall&apos;aprile 2025 e possono
          cambiare ancora. Verifica sempre i requisiti attuali per la tua nazionalità direttamente
          presso l&apos;autorità ufficiale dell&apos;immigrazione namibiana (il MHAISS, tramite il suo
          portale eServices) prima di prenotare voli o pagare qualsiasi tassa per il visto.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: "Tassa del visto all'arrivo", value: "90 $ USA" },
            { label: "Validità dal rilascio", value: "3 mesi" },
            { label: "Soggiorno massimo", value: "30 giorni" },
          ].map((stat) => (
            <Reveal
              key={stat.label}
              className="rounded-2xl border border-black/5 bg-white p-7 text-center shadow-sm"
            >
              <p className="font-serif text-4xl italic text-rust">{stat.value}</p>
              <p className="mt-2 text-[13px] uppercase tracking-[0.1em] text-charcoal/50">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Cosa serve per fare domanda</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Passaporto valido almeno 6 mesi oltre le date di viaggio, con pagine vuote disponibili per il visto",
              "Una breve lettera di motivazione che indichi lo scopo del soggiorno",
              "Prenotazione alloggio confermata (o una lettera di invito formale in caso di soggiorno presso conoscenti)",
              "Estratto conto bancario o un'altra prova di mezzi finanziari sufficienti per la durata del soggiorno",
              "Prova di assicurazione di viaggio o medica che copra il soggiorno",
              "Conferma del volo di ritorno o di proseguimento, se richiesta durante la procedura",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] leading-relaxed text-charcoal/50">
            Le domande si presentano tramite il portale ufficiale del governo namibiano,
            all&apos;indirizzo{" "}
            <span className="font-medium text-charcoal/70">eservices.mhaiss.gov.na</span>, gestito
            dal ministero dell&apos;Interno, Immigrazione, Sicurezza e Protezione. Evita i siti di terzi
            che applicano un sovrapprezzo per la stessa procedura.
          </p>
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
