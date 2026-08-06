import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Beste safarilodges in Namibië";
const DESCRIPTION = "De beste safarilodges bij Etosha en daarbuiten: waterpoelen voor de deur, nachtritten en ervaren gidsen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/best-safari-lodges",
    languages: { en: "/best-safari-lodges", de: "/de/best-safari-lodges", nl: "/nl/best-safari-lodges" },
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
      category="safari"
      title="Beste safarilodges in Namibië"
      intro="Waterpoelen voor de deur, off-road tracking en ervaren gidsen: de lodges die we daadwerkelijk zouden boeken voor een reis met de nadruk op wildlife."
      path="/best-safari-lodges"
    />
  );
}
