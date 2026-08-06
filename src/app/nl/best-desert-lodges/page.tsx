import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Beste woestijnlodges in Namibië";
const DESCRIPTION = "De beste woestijnlodges langs de Namib-duinengordel en daarbuiten.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/best-desert-lodges",
    languages: { en: "/best-desert-lodges", de: "/de/best-desert-lodges", nl: "/nl/best-desert-lodges" },
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
      locale="nl"
      category="desert"
      title="Beste woestijnlodges in Namibië"
      intro="Van suites met duinuitzicht in Sossusvlei tot in scheepswrakvorm gebouwde chalets aan de Skeleton Coast: Namibië's meest opvallende woestijnverblijven."
      path="/best-desert-lodges"
    />
  );
}
