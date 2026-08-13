import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Self-drive o safari guidato";
const DESCRIPTION =
  "Costo, libertà, rischio e comfort: i compromessi onesti tra il self-drive in Namibia e la prenotazione di un safari guidato, senza preferenze per l'uno o per l'altro.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/self-drive-vs-guided-namibia",
    languages: {
      en: "/self-drive-vs-guided-namibia",
      de: "/de/self-drive-vs-guided-namibia",
      nl: "/nl/self-drive-vs-guided-namibia", fr: "/fr/self-drive-vs-guided-namibia",
        it: "/it/self-drive-vs-guided-namibia",
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

const FACTORS = [
  {
    axis: "Costo",
    selfDrive:
      "Circa 225-250 €/persona/giorno per un budget contenuto, circa 325 €/giorno nella fascia media: il solo noleggio di un 4x4 costa circa 1.500-2.200 N$/giorno (circa 75-110 €) prima di carburante e franchigia assicurativa, più le tariffe d'ingresso ai parchi di 280 N$/persona/giorno e 620 N$/veicolo, da pagare direttamente al cancello. Consultate la nostra analisi completa dei costi per il dettaglio per fascia di prezzo.",
    guided:
      "Una guida privata e un veicolo costano in genere 700-1.100 €+ a persona al giorno per un itinerario completamente su misura, anche se i tour in piccolo gruppo con date fisse possono costare meno. In genere include pasti, tariffe d'ingresso ai parchi e attività, voci separate in un viaggio in self-drive, quindi il divario dichiarato esagera un po' la differenza reale.",
  },
  {
    axis: "Libertà e ritmo",
    selfDrive:
      "Controllo totale: restare un'ora in più a una pozza d'acqua, cambiare itinerario d'impulso, saltare una tappa che non vi interessa. Il compromesso è che gestite voi la logistica.",
    guided:
      "Itinerario fisso, deciso in anticipo: meno flessibile, ma nessuna logistica da gestire giorno per giorno.",
  },
  {
    axis: "Osservazione della fauna",
    selfDrive:
      "Davvero efficace a Etosha, dove le pozze d'acqua illuminate di Okaukuejo e Halali concentrano la fauna in modo prevedibile, soprattutto rinoceronte ed elefante dopo il tramonto nella stagione secca. Meno efficace nelle zone che richiedono capacità di tracking, come l'elefante adattato al deserto nella Torra Conservancy del Damaraland o il rinoceronte nero nella concessione di Palmwag, che richiedono una guida specializzata e autorizzata indipendentemente da come viaggiate.",
    guided:
      "L'occhio allenato di una guida per le tracce, i suoni e il comportamento animale aumenta sensibilmente gli avvistamenti, soprattutto al di fuori dell'osservazione più facile alle pozze d'acqua di Etosha, ed è l'unico modo per fare il tracking del rinoceronte a Palmwag o trovare in modo affidabile il licaone a Bwabwata.",
  },
  {
    axis: "Rischio e comfort",
    selfDrive:
      "Rischi reali da prendere sul serio: guida su strade in ghiaia, fauna sulla strada di notte, lunghi tratti senza carburante né rete telefonica. Consultate la nostra guida al self-drive per i dettagli.",
    guided:
      "Rischio personale più basso (qualcun altro guida, naviga e gestisce i guasti), al prezzo di dover seguire il programma di terzi.",
  },
  {
    axis: "Il profilo ideale per un primo viaggio",
    selfDrive:
      "Conducenti sicuri, a proprio agio sulle strade in ghiaia e nell'orientarsi da soli, che vogliono stabilire il proprio ritmo e hanno un budget più contenuto. La rete di strade \"C\" asfaltate e livellate della Namibia rende questa opzione davvero più accessibile rispetto alla maggior parte dei paesi da safari.",
    guided:
      "Viaggiatori che privilegiano gli avvistamenti della fauna e l'assenza di logistica rispetto al costo e alla flessibilità, o chiunque non si senta sicuro a guidare su strade in ghiaia sconosciute.",
  },
];

const FAQS = [
  {
    q: "Self-drive o safari guidato: qual è la scelta migliore per un primo viaggio in Namibia?",
    a: "Nessuno dei due è oggettivamente migliore: dipende da cosa privilegiate. Il self-drive è adatto a conducenti sicuri che vogliono controllare ritmo e costo, per circa 225-325 €/persona/giorno; il safari guidato è adatto a chi vuole i migliori avvistamenti di fauna possibili senza logistica da gestire, in genere 700-1.100 €+ a persona al giorno. La nostra raccomandazione per la maggior parte di chi è alla prima esperienza: percorrete in self-drive il classico anello Etosha-Sossusvlei-Swakopmund, dove la rete stradale e l'osservazione alle pozze d'acqua rendono tutto semplice, e aggiungete una componente guidata solo dove le capacità di tracking cambiano davvero il risultato, ossia il Damaraland e Palmwag.",
  },
  {
    q: "Si possono combinare self-drive e safari guidato?",
    a: "Sì, ed è un compromesso comune e sensato: fate il self-drive per i trasferimenti tra le regioni, poi prenotate game drive guidati una volta arrivati in un lodge, in particolare in zone come il Damaraland e la concessione di Palmwag, dove il tracking dell'elefante adattato al deserto e del rinoceronte nero richiede davvero una guida specializzata, indipendentemente da quanto vi sentiate sicuri alla guida.",
  },
  {
    q: "Quanto costa in più un safari guidato rispetto al self-drive?",
    a: "Sostanzialmente di più, anche se meno di quanto suggeriscano i numeri principali, una volta considerato cosa è incluso: una guida privata e un veicolo da soli costano in genere 700-1.100 €+ a persona al giorno, contro circa 225-325 €/persona/giorno in self-drive, ma i viaggi guidati in genere includono pasti, tariffe d'ingresso ai parchi e attività, costi separati in un itinerario self-drive. Consultate la nostra analisi completa dei costi di viaggio per i numeri per fascia di prezzo.",
  },
  {
    q: "Serve esperienza di guida fuoristrada per il self-drive in Namibia?",
    a: "Non per l'itinerario classico: Etosha, Sossusvlei e Swakopmund sono gestibili da chiunque sia a proprio agio sulle strade in ghiaia, senza serie competenze fuoristrada. Diventa più rilevante nel Damaraland e nel Kaokoland, dove un 4x4 e una certa sicurezza sulla ghiaia contano di più, e dove il noleggio di un 4x4 costa da solo circa 1.500-2.200 N$/giorno prima del carburante.",
  },
];

export default function SelfDriveVsGuidedPageIt() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Self-drive o guidato", url: `${SITE_URL}/it/self-drive-vs-guided-namibia` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Self-drive o safari guidato in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          È una decisione davvero diversa dalla domanda{" "}
          <Link
            href="/it/namibia-without-4x4"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            &quot;mi serve un 4x4&quot;
          </Link>
          . Si tratta di capire chi guida, chi decide l&apos;itinerario, e cosa state scambiando
          con cosa.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4">
          {FACTORS.map((row, i) => (
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
                    Self-drive
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.selfDrive}</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-charcoal/50">
                    Guidato
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.guided}</p>
                </div>
              </div>
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
            href="/it/namibia-self-drive-guide"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Guida logistica al self-drive
          </Link>
        </Reveal>
      </section>
    </>
  );
}
