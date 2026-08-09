import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Is Namibië veilig? Veiligheid & gezondheid";
const DESCRIPTION =
  "Een eerlijke blik op Namibiës reële risico's: kleine criminaliteit, verkeersveiligheid, en waar malaria daadwerkelijk een aandachtspunt is, tegenover de delen van het land waar dat niet zo is.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-safety-and-health",
    languages: {
      en: "/namibia-safety-and-health",
      de: "/de/namibia-safety-and-health",
      nl: "/nl/namibia-safety-and-health", fr: "/fr/namibia-safety-and-health",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "Beste lodges in Namibië", href: "/nl/best-lodges-in-namibia" },
  { title: "Verblijven in Etosha", href: "/nl/where-to-stay/etosha" },
  { title: "Verblijven in Sossusvlei", href: "/nl/where-to-stay/sossusvlei" },
  { title: "Namibië zelfrijgids", href: "/nl/namibia-self-drive-guide" },
  { title: "Beste reistijd voor Namibië", href: "/nl/best-time-to-visit-namibia" },
  { title: "Namibië visumvereisten", href: "/nl/namibia-visa-requirements" },
  { title: "Is Namibië veilig? Veiligheid & gezondheid", href: "/nl/namibia-safety-and-health" },
  { title: "Wat kost een Namibië-reis?", href: "/nl/namibia-trip-cost" },
  { title: "Namibië wildlife gids", href: "/nl/namibia-wildlife-guide" },
];

const SAFETY_POINTS = [
  {
    title: "Kleine criminaliteit",
    text: "Concentreert zich in Windhoek en, in mindere mate, Walvis Bay, meestal na het invallen van de duisternis: zowel het Amerikaanse ministerie van Buitenlandse Zaken als het Britse FCDO noemen zakkenrollerij, tasjesroof en inbraken in onbeheerde geparkeerde auto's als de meest voorkomende incidenten voor bezoekers. Beide beoordelen Namibië op het niveau van 'extra voorzichtigheid betrachten,' hetzelfde niveau als een groot deel van West-Europa, geen ernstige risicoclassificatie. Geïsoleerde gewapende overvallen en woninginbraken komen voor, maar in woon- en zakenwijken, niet op toeristenroutes. Gebruik de kluis van het hotel, laat geen tassen zichtbaar liggen in geparkeerde auto's, en neem 's avonds een taxi in plaats van te lopen in het centrum. Buiten de steden, op lodge- en selfdrive-routes, speelt het vrijwel geen rol.",
  },
  {
    title: "Verkeersveiligheid",
    text: (
      <>
        Het echte risico voor de meeste bezoekers, en niet een beetje. Namibië heeft ongeveer
        12.000 km grindweg, en het standaardadvies van zowel het FCDO als lokale operators is om
        op grind onder de 60&ndash;80 km/u te blijven, ongeacht de aangegeven limiet: het meest
        voorkomende ernstige incident voor selfdrive-toeristen is een enkelvoudig ongeval waarbij
        de auto over de kop slaat na een te snel genomen bocht op golfplaatweg of los zand, niet
        een botsing met een andere auto. Tel daarbij lange trajecten zonder voorzieningen,
        vermoeidheid en dieren die bij schemer en zonsopgang oversteken, en het patroon is
        duidelijk: rijd langzamer, vermijd rijden na het invallen van de duisternis buiten de
        steden, en neem een reserveband en extra water mee. Bekijk onze{" "}
        <Link
          href="/nl/namibia-self-drive-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          self-drive-gids
        </Link>{" "}
        voor de details.
      </>
    ),
  },
  {
    title: "Alleen reizen en alleenreizende vrouwen",
    text: "Door solo reizigers, waaronder alleenreizende vrouwen, veelvuldig als prettig beschreven, vooral op georganiseerde routes en bij lodges. Gewelddadige criminaliteit gericht op toeristen komt zo zelden voor dat zowel de Amerikaanse als de Britse reisadviezen het als uitzondering behandelen, niet als patroon. In Windhoek en Walvis Bay gelden na het invallen van de duisternis de gebruikelijke voorzorgsmaatregelen, zoals overal.",
  },
  {
    title: "Ontmoetingen met wildlife",
    text: (
      <>
        Reëel, maar goed te beheersen met instructies van gidsen: blijf in wildgebieden in het
        voertuig tenzij anders aangegeven, nader nooit dieren bij waterpoelen dichtbij lodges, en
        volg de aanwijzingen van het kamppersoneel over lopen na het invallen van de duisternis op
        plekken waar bekend is dat olifanten of hyena's passeren. Eén specifiek punt om te weten:
        bij Namibiës kolonies Kaapse pelsrobben, waaronder Cape Cross, zijn gedocumenteerde
        gevallen van hondsdolheid vastgesteld in de robbenpopulatie, dus houd afstand en behandel
        elke beet of krab, hoe klein ook, als een noodgeval dat onmiddellijke medische zorg
        vereist, ongeacht eerdere vaccinatie. Bekijk onze{" "}
        <Link
          href="/nl/namibia-wildlife-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          wildlifegids
        </Link>{" "}
        voor wat u regio per regio kunt verwachten.
      </>
    ),
  },
  {
    title: "Medische zorg & evacuatie",
    text: "Lodges in de Namib, Kaokoland of de Zambeziregio kunnen uren rijden, of een vlucht met een klein vliegtuig, verwijderd zijn van het dichtstbijzijnde ziekenhuis dat traumazorg biedt, dus dit is geen optionele planning. Medical Rescue Africa (MRA) is Namibiës eigen aeromedische evacuatie- en ambulancedienst, en veel lodges en operators werken al met hen samen, maar uw reisverzekering is nog altijd wat de rekening betaalt. Heeft u al een AMREF Flying Doctors-lidmaatschap van een Oost-Afrikareis, weet dan dat dit niet geldt voor Namibië, Botswana of Zuid-Afrika: controleer of uw polis expliciet medische evacuatie dekt die geldig is in zuidelijk Afrika, voordat u vertrekt.",
  },
];

const FAQS = [
  {
    q: "Is Namibië veilig om te bezoeken?",
    a: "Ja. Zowel het Amerikaanse ministerie van Buitenlandse Zaken als het Britse FCDO beoordelen Namibië op het niveau 'extra voorzichtigheid betrachten,' hetzelfde niveau als een groot deel van West-Europa, geen ernstige risicoclassificatie. De reële risico's zijn verkeersveiligheid (lange afstanden, grind, enkelvoudige ongevallen en wildlife op de weg bij schemer) en gewone stedelijke kleine criminaliteit in Windhoek en Walvis Bay, niet gewelddadige criminaliteit gericht op reizigers.",
  },
  {
    q: "Heb ik malariatabletten nodig voor Namibië?",
    a: "Dat hangt af van waar u naartoe gaat en wanneer. De CDC noemt Kavango-Oost, Kavango-West, Kunene, Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa en Zambezi als malariaregio's, grofweg het noordelijke derde deel van het land inclusief noordelijk Etosha en de Zambeziregio (Caprivi), en het risico is het hoogst in het regenseizoen (ruwweg november tot april). Er is geen malariaoverdracht in Windhoek, en het risico is het hele jaar door laag in Sossusvlei, Swakopmund en het grootste deel van Centraal- en Zuid-Namibië. Namibië zag begin 2026 ook een scherpe stijging van het aantal gevallen, geconcentreerd in de Zambezi- en Kavango-regio's, dus controleer de actuele situatie bij een reisarts in combinatie met uw specifieke reisroute en data. Dit is algemene informatie, geen medisch advies.",
  },
  {
    q: "Is Namibië veilig voor alleenreizende vrouwen?",
    a: "Wordt vaak als prettig beschreven, vooral bij lodge-gebaseerde of georganiseerde selfdrive-reizen. In Windhoek en Walvis Bay gelden na het invallen van de duisternis de gebruikelijke stedelijke voorzorgsmaatregelen, net als in elke stad.",
  },
  {
    q: "Welke vaccinaties heb ik nodig voor Namibië?",
    a: "Er is geen universele lijst, maar de vaste aanbevelingen van de CDC voor Namibië zijn hepatitis A, hepatitis B en tyfus voor de meeste reizigers, bovenop de reguliere vaccinaties (BMR, polio, enzovoort). Een preventieve rabiësvaccinatie is de moeite van het bespreken waard als u gaat fietsen, grotten bezoeken of met dieren werkt, en is extra relevant gezien de gedocumenteerde gevallen van hondsdolheid in Namibiës kolonies Kaapse pelsrobben. Een gelekoortsvaccinatie is niet vereist bij directe reizen vanuit Europa of Noord-Amerika, maar een vaccinatiebewijs kan wel worden gevraagd als u aankomt vanuit een land met gelekoortsrisico. Informeer vier tot zes weken voor vertrek bij een reisgeneeskundige kliniek: uw reisroute en persoonlijke medische voorgeschiedenis kunnen het antwoord veranderen. Dit is algemene informatie, geen medisch advies.",
  },
  {
    q: "Hoe zit het met een medische evacuatieverzekering?",
    a: "Neem dit serieus, gezien hoe afgelegen sommige lodges zijn. Namibië heeft zijn eigen aeromedische evacuatiedienst, Medical Rescue Africa (MRA), waar veel lodges en operators al mee samenwerken, maar u heeft nog altijd een reisverzekering nodig die medische evacuatie binnen Namibië expliciet dekt. Combineert u deze reis met Oost-Afrika en heeft u al een AMREF Flying Doctors-lidmaatschap, weet dan dat dit niet geldt voor Namibië, Botswana of Zuid-Afrika. Controleer uw dekking vóór vertrek, niet erna.",
  },
];

export default function SafetyHealthPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Veiligheid & gezondheid", url: `${SITE_URL}/nl/namibia-safety-and-health` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Is Namibië veilig? Veiligheid & gezondheid
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibië behoort tot de veiligere landen om in zuidelijk Afrika te reizen, maar
          &quot;veilig&quot; is niet hetzelfde als &quot;risicovrij.&quot; Hier leest u waar de
          reële risico&apos;s daadwerkelijk liggen.
        </p>
        <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Uitsluitend algemene informatie, geen medisch of veiligheidsadvies. Raadpleeg voor
          vertrek een reisgeneeskundige en het reisadvies van uw overheid.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SAFETY_POINTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-lg font-bold text-charcoal">{p.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Malaria: de realiteit per regio</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Door de CDC en WHO aangewezen regio's met verhoogd risico: Kavango-Oost, Kavango-West, Kunene, Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa en Zambezi, dat wil zeggen de noordelijke strook van het land inclusief noordelijk Etosha en de Zambezi-uitloper (Caprivi)",
              "Geen malariaoverdracht in Windhoek, en een laag of zeldzaam risico in Sossusvlei, Fish River Canyon, de Skeleton Coast en het grootste deel van Centraal- en Zuid-Namibië",
              "Het risico is het hoogst in het regenseizoen (nov–apr); trajecten langs de Kunene-, Zambezi- en Okavango-rivieren houden het hele jaar door een zeker risico",
              "Namibiës ministerie van Volksgezondheid registreerde begin 2026 een scherpe stijging van het aantal gevallen, geconcentreerd in Zambezi, Kavango-Oost en Kavango-West, wat leidde tot een door de WHO ondersteunde respons: als uw route deze regio's aandoet, behandel profylaxe dan als niet-onderhandelbaar, niet als optioneel",
              "De keuze van profylaxe (meestal atovaquon-proguanil, doxycycline of mefloquine) hangt af van uw reisroute, data en medische voorgeschiedenis: dit moet een reisarts bevestigen, geen algemene gids",
            ].map((item) => (
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
            Veelgestelde vragen
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
