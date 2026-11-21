import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { AvailabilityBadge, CardCTA } from "@/components/card-arrow";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { Stay22Map } from "@/components/stay22-map";
import {
  LAST_UPDATED_ISO,
  MATCH_DATES_ISO,
  SOURCES,
  type CricketContent,
  type Section,
  type Table,
} from "@/lib/cricket-wc";
import { withLocale, type Locale } from "@/lib/i18n";
import type { Lodge } from "@/lib/data";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const SLUG = "namibia-cricket-world-cup-2027";
const WINDHOEK_SLUGS = [
  "moevenpick-windhoek",
  "mercure-windhoek",
  "windhoek-country-club-resort",
  "hilton-windhoek",
  "hilton-garden-inn-windhoek",
  "avani-windhoek",
  "protea-furstenhof-windhoek",
  "the-olive-exclusive",
];
const GROUND = { lat: -22.605833, lng: 17.0875 };

function pathFor(locale: Locale) {
  return withLocale(`/${SLUG}`, locale);
}

export function cricketMetadata(content: CricketContent, locale: Locale): Metadata {
  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: pathFor(locale),
      languages: {
        en: `/${SLUG}`,
        de: `/de/${SLUG}`,
        nl: `/nl/${SLUG}`,
        fr: `/fr/${SLUG}`,
        it: `/it/${SLUG}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
    },
  };
}

/** Turns "[1, 6]" markers into superscript links to the numbered sources. */
function Cited({ text, plain = false }: { text: string; plain?: boolean }): ReactNode {
  const parts = text.split(/(\[\d+(?:,\s*\d+)*\])/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[(\d+(?:,\s*\d+)*)\]$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        const ids = m[1].split(",").map((n) => n.trim());
        return (
          <sup key={i} className="ml-0.5 text-[10px] font-semibold text-rust">
            [
            {ids.map((id, k) => (
              <Fragment key={id}>
                {k > 0 && ", "}
                {plain ? (
                  id
                ) : (
                  <a href={`#src-${id}`} className="hover:text-rust-dark hover:underline">
                    {id}
                  </a>
                )}
              </Fragment>
            ))}
            ]
          </sup>
        );
      })}
    </>
  );
}

/** Plain text without the [n] markers, for JSON-LD answers. */
function stripCites(text: string) {
  return text.replace(/\s*\[\d+(?:,\s*\d+)*\]/g, "");
}

function DataTable({ table }: { table: Table }) {
  return (
    <div className="mt-8">
      <div className="overflow-x-auto rounded-2xl border border-black/5 bg-white shadow-sm">
        <table className="w-full min-w-[640px] border-collapse text-left text-[13px] leading-relaxed">
          <thead>
            <tr className="border-b border-charcoal/15 bg-sand/20">
              {table.headers.map((h) => (
                <th key={h} className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-charcoal/70">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-charcoal/10">
            {table.rows.map((row, ri) => (
              <tr key={ri} className="align-top">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-5 py-3 ${ci === 0 ? "font-semibold text-charcoal" : "text-charcoal/70"}`}
                  >
                    <Cited text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && (
        <p className="mt-3 text-[12px] leading-relaxed text-charcoal/55">
          <Cited text={table.note} />
        </p>
      )}
    </div>
  );
}

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
      {children}
    </h2>
  );
}

function RelatedLinks({ links, locale }: { links: { label: string; href: string }[]; locale: Locale }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {links.map((l) => (
        <Link
          key={l.href}
          href={withLocale(l.href, locale)}
          className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

function SectionBlock({
  section,
  locale,
  getLodge,
}: {
  section: Section;
  locale: Locale;
  getLodge: (slug: string) => Lodge | undefined;
}) {
  if (section.kind === "text") {
    return (
      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <SectionHeading id={section.id}>{section.heading}</SectionHeading>
          {section.intro && (
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/60">
              <Cited text={section.intro} />
            </p>
          )}
        </Reveal>
        {section.table && <DataTable table={section.table} />}
        {section.paragraphs && (
          <div className="mt-6 space-y-4">
            {section.paragraphs.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-charcoal/70">
                <Cited text={p} />
              </p>
            ))}
          </div>
        )}
        {section.bullets && (
          <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <ul className="space-y-3">
              {section.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[14px] leading-relaxed text-charcoal/70">
                  <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                  <span>
                    <Cited text={b} />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
        {section.callout && (
          <div className="mt-6 border-l-4 border-rust bg-sand/20 px-6 py-4">
            <p className="text-[14px] font-semibold text-charcoal">{section.callout.title}</p>
            <p className="mt-1 text-[14px] leading-relaxed text-charcoal/70">
              <Cited text={section.callout.text} />
            </p>
          </div>
        )}
        {section.links && <RelatedLinks links={section.links} locale={locale} />}
      </section>
    );
  }

  if (section.kind === "lodges") {
    const lodges = WINDHOEK_SLUGS.map((slug) => getLodge(slug)).filter((l): l is Lodge => Boolean(l));
    return (
      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <SectionHeading id={section.id}>{section.heading}</SectionHeading>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/60">
            {section.intro}{" "}
            <Link
              href={withLocale("/where-to-stay/windhoek", locale)}
              className="font-semibold text-rust hover:text-rust-dark"
            >
              {section.windhoekGuideLabel}
            </Link>
            .
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lodges.map((lodge, i) => (
            <Reveal key={lodge.slug} delay={i * 60}>
              <Link
                href={withLocale(`/lodges/${lodge.slug}`, locale)}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={lodge.image}
                    alt={lodge.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-rust px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ivory shadow-sm">
                    {lodge.region}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl italic text-charcoal">{lodge.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/60">{lodge.description}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                    <AvailabilityBadge label={section.checkAvailability} />
                    <CardCTA label={section.viewLodge} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  if (section.kind === "map") {
    return (
      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <SectionHeading id={section.id}>{section.heading}</SectionHeading>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{section.intro}</p>
          <Stay22Map lat={-22.5609} lng={17.0658} zoom={11} label={section.label} className="mt-8" />
        </Reveal>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
      <Reveal>
        <SectionHeading id={section.id}>{section.heading}</SectionHeading>
        <p className="mt-3 text-[14px] leading-relaxed text-charcoal/60">{section.intro}</p>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {section.cards.map((r, i) => (
          <Reveal key={r.title} delay={i * 60}>
            <Link
              href={withLocale(r.href, locale)}
              className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <p className="font-serif text-2xl italic text-rust">{r.stat}</p>
              <h3 className="mt-2 text-[14px] font-bold text-charcoal">{r.title}</h3>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-charcoal/70">
                <Cited text={r.text} plain />
              </p>
              <span className="mt-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-rust group-hover:text-rust-dark">
                {section.cta} →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
        <ul className="space-y-3">
          {section.bullets.map((n) => (
            <li key={n} className="flex items-start gap-2 text-[14px] leading-relaxed text-charcoal/70">
              <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
              <span>
                <Cited text={n} />
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
      <p className="mt-5 text-[14px] leading-relaxed text-charcoal/70">
        {section.related}{" "}
        {section.links.map((l, i) => (
          <Fragment key={l.href}>
            {i > 0 && ", "}
            <Link
              href={withLocale(l.href, locale)}
              className="text-rust underline underline-offset-2 hover:text-rust-dark"
            >
              {l.label}
            </Link>
          </Fragment>
        ))}
        .
      </p>
    </section>
  );
}

export function CricketWcPage({
  content,
  locale,
  getLodge,
}: {
  content: CricketContent;
  locale: Locale;
  getLodge: (slug: string) => Lodge | undefined;
}) {
  const pageUrl = `${SITE_URL}${pathFor(locale)}`;
  const home = withLocale("/", locale);
  const matchSection = content.sections.find((s) => s.kind === "text" && s.id === "matches");
  const matchRows = matchSection && matchSection.kind === "text" ? (matchSection.table?.rows ?? []) : [];

  const events = matchRows.slice(0, MATCH_DATES_ISO.length).map((row, i) => ({
    "@type": "SportsEvent",
    name: `${content.jsonLd.matchName}: ${row[1]}`,
    startDate: MATCH_DATES_ISO[i],
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Namibia Cricket Ground",
      address: { "@type": "PostalAddress", addressLocality: "Windhoek", addressCountry: "NA" },
      geo: { "@type": "GeoCoordinates", latitude: GROUND.lat, longitude: GROUND.lng },
    },
    sport: "Cricket",
    organizer: { "@type": "Organization", name: "International Cricket Council", url: "https://www.icc-cricket.com" },
  }));

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.h1,
    description: content.description,
    inLanguage: locale,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    mainEntityOfPage: pageUrl,
    image: DEFAULT_OG_IMAGE,
    author: { "@type": "Organization", name: "Namibia Stays", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Namibia Stays", url: SITE_URL },
    citation: SOURCES.map((s) => ({
      "@type": "CreativeWork",
      name: s.title,
      publisher: s.publisher,
      url: s.url,
    })),
  };

  const faqs = content.faq.items.map((f) => ({ q: f.q, a: stripCites(f.a) }));
  const toc = [
    ...content.sections.filter((s) => s.kind !== "map").map((s) => ({ id: s.id, label: s.heading })),
    { id: "faq", label: content.faq.heading },
    { id: "sources", label: content.sources.heading },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: content.breadcrumbs.home, url: `${SITE_URL}${home === "/" ? "" : home}` },
          { name: content.breadcrumbs.guides, url: `${SITE_URL}${withLocale("/guides", locale)}` },
          { name: content.breadcrumbs.page, url: pageUrl },
        ])}
      />
      <JsonLd data={article} />
      <JsonLd data={faqJsonLd(faqs)} />
      {events.map((e, i) => (
        <JsonLd key={i} data={{ "@context": "https://schema.org", ...e }} />
      ))}

      <section className="mx-auto max-w-[1400px] px-6 pb-6 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          {content.badge}
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          {content.h1}
        </h1>
        <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.1em] text-charcoal/50">
          {content.updatedLabel}: <time dateTime={LAST_UPDATED_ISO}>{content.updatedDisplay}</time>
        </p>

        <div className="mt-8 border-l-4 border-rust bg-sand/20 px-6 py-6">
          <h2 className="text-xl font-bold text-charcoal">{content.shortAnswer.heading}</h2>
          <div className="mt-3 space-y-3">
            {content.shortAnswer.paragraphs.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-charcoal/80">
                <Cited text={p} />
              </p>
            ))}
          </div>
        </div>

        <nav aria-label={content.onThisPage} className="mt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-charcoal/50">{content.onThisPage}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  className="inline-block rounded-full border border-charcoal/15 px-3 py-1.5 text-[12px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal>
          <h2 id="glance" className="scroll-mt-24 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            {content.glance.heading}
          </h2>
        </Reveal>
        <dl className="mt-8 grid grid-cols-1 gap-x-10 border-t border-charcoal/15 sm:grid-cols-2">
          {content.glance.items.map((it) => (
            <div key={it.label} className="grid grid-cols-[9rem_1fr] gap-4 border-b border-charcoal/10 py-3">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.06em] text-charcoal/55">{it.label}</dt>
              <dd className="text-[14px] leading-relaxed text-charcoal/80">
                <Cited text={it.value} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {content.sections.map((section) => (
        <SectionBlock key={section.id} section={section} locale={locale} getLodge={getLodge} />
      ))}

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <Reveal>
          <SectionHeading id="faq">{content.faq.heading}</SectionHeading>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4">
          {content.faq.items.map((faq, i) => (
            <Reveal
              key={faq.q}
              delay={Math.min(i, 6) * 40}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-charcoal">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                <Cited text={faq.a} />
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-16 sm:px-10">
        <Reveal>
          <SectionHeading id="sources">{content.sources.heading}</SectionHeading>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/60">{content.sources.intro}</p>
          <p className="mt-2 text-[14px] leading-relaxed text-charcoal/60">{content.sources.methodology}</p>
        </Reveal>
        <ol className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/15">
          {SOURCES.map((s) => (
            <li key={s.id} id={`src-${s.id}`} className="scroll-mt-24 py-3 text-[13px] leading-relaxed text-charcoal/70">
              <span className="font-semibold text-rust">[{s.id}]</span>{" "}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-charcoal underline underline-offset-2 hover:text-rust"
              >
                {s.title}
              </a>
              . {s.publisher}, {s.date}.
            </li>
          ))}
        </ol>
        <p className="mt-4 text-[12px] text-charcoal/50">{content.sources.accessed}</p>
      </section>
    </>
  );
}
