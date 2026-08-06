import Image from "next/image";
import Link from "next/link";
import { AvailabilityBadge, CardCTA, SaveButton } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getLodgesByCategory, type Lodge, type LodgeCategory } from "@/lib/data";
import { getLodgesByCategoryDe } from "@/lib/data.de";
import { getLodgesByCategoryNl } from "@/lib/data.nl";
import type { Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

const STRINGS = {
  en: {
    eyebrow: "Lodges",
    viewLodge: "View Lodge",
    availability: "Check availability",
    empty: "We're still adding lodges to this category. Check back soon.",
  },
  de: {
    eyebrow: "Lodges",
    viewLodge: "Lodge ansehen",
    availability: "Verfügbarkeit prüfen",
    empty: "Wir fügen dieser Kategorie noch Lodges hinzu. Schauen Sie bald wieder vorbei.",
  },
  nl: {
    eyebrow: "Lodges",
    viewLodge: "Bekijk Lodge",
    availability: "Beschikbaarheid controleren",
    empty: "We voegen nog lodges toe aan deze categorie. Kom binnenkort terug.",
  },
};

export function LodgeCategoryPage({
  category,
  title,
  intro,
  path,
  locale = "en",
}: {
  category: LodgeCategory;
  title: string;
  intro: string;
  path: string;
  locale?: Locale;
}) {
  const filtered: Lodge[] =
    locale === "de"
      ? getLodgesByCategoryDe(category)
      : locale === "nl"
        ? getLodgesByCategoryNl(category)
        : getLodgesByCategory(category);
  const t = STRINGS[locale];
  const lodgesHubHref = withLocale("/best-lodges-in-namibia", locale);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}${withLocale("/", locale)}` },
          { name: t.eyebrow, url: `${SITE_URL}${lodgesHubHref}` },
          { name: title, url: `${SITE_URL}${withLocale(path, locale)}` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          {t.eyebrow}
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">{intro}</p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((lodge, i) => (
            <Reveal key={lodge.slug} delay={(i % 3) * 60}>
              <Link
                href={withLocale(`/lodges/${lodge.slug}`, locale)}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={lodge.image}
                    alt={lodge.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-rust px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ivory shadow-sm">
                    {lodge.region}
                  </span>
                  <SaveButton className="absolute bottom-3 right-3" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-serif text-xl italic text-charcoal">{lodge.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {lodge.description}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {lodge.highlights.slice(0, 2).map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-1.5 text-[12px] text-charcoal/60"
                      >
                        <MetaIcon name="check" className="h-3 w-3 shrink-0 text-olive" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between border-t border-charcoal/10 pt-4">
                    <AvailabilityBadge label={t.availability} />
                    <CardCTA label={t.viewLodge} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-charcoal/60">{t.empty}</p>}
      </section>
    </>
  );
}
