import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getLodgesByCategoryFr } from "@/lib/data.fr";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "La Namibie en famille";
const DESCRIPTION =
  "Conseils d'organisation pour un voyage en famille en Namibie : quels lodges conviennent aux enfants, et ce qu'il faut savoir avant de partir.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-with-kids",
    languages: { en: "/namibia-with-kids", de: "/de/namibia-with-kids", nl: "/nl/namibia-with-kids", fr: "/fr/namibia-with-kids" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const NOTES = [
  "Beaucoup de lodges safari imposent un âge minimum (souvent 6 à 8 ans) pour les sorties en véhicule : vérifiez ce point avant de réserver, pas à l'arrivée.",
  "Le risque de paludisme se concentre dans le nord (Etosha et la bande de Caprivi) et culmine pendant la saison des pluies (à peu près de novembre à avril) ; le reste du pays présente un risque globalement faible, mais confirmez les recommandations actuelles auprès d'un centre de vaccination voyage.",
  "Les journées de route en autonomie sont longues : prévoyez des pauses et gardez chaque trajet sous les 4 à 5 heures avec de jeunes enfants.",
  "Dans les campements d'Etosha équipés de points d'eau éclairés la nuit, les enfants peuvent observer les animaux en toute sécurité depuis le lodge, sans avoir besoin d'un safari en véhicule.",
];

export default function KidsPageFr() {
  const familyLodges = getLodgesByCategoryFr("family");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guides", url: `${SITE_URL}/fr/guides` },
          { name: "La Namibie en famille", url: `${SITE_URL}/fr/namibia-with-kids` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          La Namibie en famille
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La Namibie se prête bien à un safari en famille :{" "}
          <Link
            href="/fr/namibia-self-drive-guide"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            conduire soi-même à son propre rythme
          </Link>{" "}
          permet des journées de route plus courtes et flexibles, et beaucoup de lodges
          proposent des chambres familiales communicantes. Quelques points pratiques, dont{" "}
          <Link
            href="/fr/namibia-safety-and-health"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            les zones où le paludisme est ou n'est pas un sujet de préoccupation
          </Link>
          , méritent d'être connus avant de réserver.
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
          <h2 className="text-2xl font-bold text-charcoal">Des lodges adaptés aux familles</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {familyLodges.map((lodge, i) => (
            <Reveal key={lodge.slug} delay={i * 60}>
              <Link
                href={`/fr/lodges/${lodge.slug}`}
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
