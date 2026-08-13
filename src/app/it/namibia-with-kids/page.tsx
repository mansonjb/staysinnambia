import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getLodgesByCategoryIt } from "@/lib/data.it";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "La Namibia con i bambini";
const DESCRIPTION =
  "Consigli organizzativi per un viaggio in famiglia in Namibia: quali lodge funzionano bene con i bambini, e cosa sapere prima di partire.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-with-kids",
    languages: { en: "/namibia-with-kids", de: "/de/namibia-with-kids", nl: "/nl/namibia-with-kids", fr: "/fr/namibia-with-kids", it: "/it/namibia-with-kids" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const NOTES = [
  "L'età minima varia da lodge a lodge, non esiste una regola nazionale unica: il Mushara Bush Camp, vicino al cancello orientale di Etosha, accetta bambini di qualsiasi età nei game drive guidati, mentre molti altri campi fissano un limite intorno ai 6-8 anni (in alcuni casi fino a 12) per i veicoli di game drive condivisi. Confermate la politica esatta sull'età direttamente con il lodge che state prenotando, poiché può variare tra strutture gemelle.",
  "Il rischio di malaria è reale ma concentrato, non uniforme. È presente tutto l'anno lungo i fiumi Kunene, Zambesi e Okavango (quindi la Caprivi Strip e l'estremo nord-ovest), e stagionalmente, all'incirca da novembre a giugno, in tutta Etosha e nelle altre regioni settentrionali della Namibia. La maggior parte del classico circuito Sossusvlei-Swakopmund-Damaraland, più a sud e a ovest, comporta un rischio scarso o nullo. Verificate le indicazioni attuali e specifiche per regione presso un centro di medicina dei viaggi prima di decidere sugli antimalarici.",
  "Le giornate di self-drive sono lunghe: pianificate soste e mantenete ogni tratto di guida sotto le 4-5 ore con bambini piccoli. I cancelli di Etosha si trovano a circa 4 ore e mezza da Windhoek e i tratti su sterrato del Damaraland possono richiedere 3-4 ore ciascuno, quindi consideratele come giornate di guida a sé stanti piuttosto che incastrarle tra un'attività e l'altra.",
  "I campi di Etosha con pozze d'acqua illuminate, all'interno del parco a Okaukuejo e Halali, o nelle riserve private che lo circondano (Ongava, Onguma), permettono ai bambini di osservare elefanti, rinoceronti e leoni venire a bere dopo il tramonto in tutta sicurezza dal lodge, senza bisogno di un game drive.",
  "Le passeggiate guidate e le visite culturali (le incisioni rupestri di Twyfelfontein, la visita a un villaggio himba più a nord) tendono ad adattarsi a una fascia d'età più ampia rispetto a un lungo game drive accidentato. Chiedete al lodge, al momento della prenotazione e non una volta arrivati, quali attività sono realistiche per l'età precisa dei vostri figli.",
];

export default function KidsPageIt() {
  const familyLodges = getLodgesByCategoryIt("family");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/it` },
          { name: "Guides", url: `${SITE_URL}/it/guides` },
          { name: "La Namibia con i bambini", url: `${SITE_URL}/it/namibia-with-kids` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          La Namibia con i bambini
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La Namibia si presta bene come destinazione per un safari in famiglia:{" "}
          <Link
            href="/it/namibia-self-drive-guide"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            guidare da soli al proprio ritmo
          </Link>{" "}
          significa giornate di guida più brevi e flessibili, e molti lodge dispongono di camere
          familiari comunicanti. Alcuni aspetti pratici, tra cui{" "}
          <Link
            href="/it/namibia-safety-and-health"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            dove la malaria è o non è un problema
          </Link>
          , meritano di essere conosciuti prima di prenotare.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <ul className="space-y-3">
            {NOTES.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Lodge adatti alle famiglie</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Mushara Lodge si trova vicino al cancello orientale di Etosha, con suite adatte alle
            famiglie e una struttura gemella nelle vicinanze se serve più spazio. Desert Quiver
            Camp si trova proprio al cancello di Sesriem, con chalet in self-catering e tariffe che
            includono i bambini gratis, una base facile ed economica per una giornata in famiglia
            tra le dune. Villa Violet è una piccola guesthouse a conduzione familiare a Windhoek,
            con un&apos;opzione in self-catering, una tappa discreta prima o dopo il circuito. Canyon
            Lodge, vicino al Fish River Canyon, è rustico ma confortevole, una buona base se
            l&apos;escursionismo o il sud fanno parte del vostro itinerario.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {familyLodges.map((lodge, i) => (
            <Reveal key={lodge.slug} delay={i * 60}>
              <Link
                href={`/it/lodges/${lodge.slug}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div>
                  <p className="font-serif text-xl italic text-charcoal">{lodge.name}</p>
                  <p className="mt-1 text-[13px] text-charcoal/50">{lodge.region}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
