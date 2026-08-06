import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Over Namibia Stays";
const DESCRIPTION =
  "Hoe Namibia Stays is samengesteld: hoe we lodges kiezen, waarom er geen prijzen of sterrenbeoordelingen zijn, en hoe we feiten actueel houden.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/nl/about", languages: { en: "/about", de: "/de/about", nl: "/nl/about" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function AboutPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Over ons", url: `${SITE_URL}/nl/about` },
        ])}
      />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Over ons
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Hoe Namibia Stays is samengesteld
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Wij zijn geen reisbureau en hebben niet zelf in elke lodge op deze site verbleven. Dit
          is precies wat we in plaats daarvan doen, zodat u weet wat u leest.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Hoe we kiezen wat we vermelden</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Elke lodge en regio op Namibia Stays wordt onderzocht aan de hand van echte,
              publieke bronnen: websites van exploitanten en lodges, nationale en regionale
              toerismeautoriteiten, gevestigde reisgidsen en onafhankelijke reisjournalistiek. We
              verzamelen en controleren die informatie om te bepalen wat werkelijk het vermelden
              waard is, in plaats van een eigen ervaringsverslag van een verblijf te publiceren.
            </p>
          </Reveal>
          <Reveal delay={60} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Waarom er geen prijzen of sterrenbeoordelingen zijn</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Prijzen veranderen voortdurend en we kunnen gastbeoordelingen voor verblijven waar
              we zelf niet hebben overnacht niet onafhankelijk verifiëren, dus publiceren we geen
              van beide. Waar realtime beschikbaarheid en prijzen bestaan, linken we door naar
              onze boekingspartner Stay22, in plaats van een getal op deze site te tonen dat al
              achterhaald kan zijn tegen de tijd dat u het leest. De €&ndash;€€€€-markeringen op de
              lodgekaarten tonen een algemene prijscategorie op basis van hoe de exploitant de
              accommodatie positioneert, geen actueel tarief: vraag de lodge of Stay22 naar de
              werkelijke prijs.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Geen betaalde plaatsing</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Wij ontvangen een commissie wanneer u via een link op deze site een verblijf boekt.
              Dat beïnvloedt nooit welke lodges we uitlichten of hoe we ze beschrijven. Niets
              hier staat erbij omdat een accommodatie ervoor heeft betaald.
            </p>
          </Reveal>
          <Reveal delay={180} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Feiten actueel houden</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Regels die reizen naar Namibië beïnvloeden veranderen: parkkosten,
              inreisvereisten, wegtoegang, wandelvergunningen. Wanneer we een pagina bijwerken
              vanwege een echte verandering, vermelden we dat op de pagina zelf, met datum. We
              markeren liever iets als tijdgevoelig dan het stilzwijgend te laten verouderen.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <div className="flex items-start gap-3">
            <MetaIcon name="check" className="mt-1 h-5 w-5 shrink-0 text-olive" />
            <p className="text-[14px] leading-relaxed text-charcoal/70">
              Iets verouderds gevonden, of een lodge die gesloten is of van eigenaar is
              veranderd? We horen het graag. Bekijk{" "}
              <Link href="/nl/best-lodges-in-namibia" className="font-semibold text-rust hover:text-rust-dark">
                de beste lodges in Namibië
              </Link>{" "}
              of begin met{" "}
              <Link href="/nl/where-to-stay/namibia" className="font-semibold text-rust hover:text-rust-dark">
                verblijven in Namibië
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
