import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "I migliori lodge per famiglie in Namibia";
const DESCRIPTION = "Lodge adatti alle famiglie in tutta la Namibia, scelti per spazio, comodità e vicinanza.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/best-family-lodges",
    languages: { en: "/best-family-lodges", de: "/de/best-family-lodges", nl: "/nl/best-family-lodges", fr: "/fr/best-family-lodges", it: "/it/best-family-lodges" },
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
      category="family"
      title="I migliori lodge per famiglie in Namibia"
      intro="Camere comunicanti, logistica semplice e un ritmo più rilassato: i lodge più adatti a viaggiare con i bambini."
      path="/best-family-lodges"
    />
  );
}
