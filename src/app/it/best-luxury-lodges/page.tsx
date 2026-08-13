import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "I migliori lodge di lusso in Namibia";
const DESCRIPTION = "I lodge più curati nel design e nel servizio della Namibia: senza prezzi, senza recensioni false.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/best-luxury-lodges",
    languages: { en: "/best-luxury-lodges", de: "/de/best-luxury-lodges", nl: "/nl/best-luxury-lodges", fr: "/fr/best-luxury-lodges", it: "/it/best-luxury-lodges" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function Page() {
  return (
    <LodgeCategoryPage
      locale="it"
      category="luxury"
      title="I migliori lodge di lusso in Namibia"
      intro="Camp e lodge dal design curato, con il massimo livello di privacy e servizio: scelti per la location e la maestria artigianale, non per chi ci paga di più."
      path="/best-luxury-lodges"
    />
  );
}
