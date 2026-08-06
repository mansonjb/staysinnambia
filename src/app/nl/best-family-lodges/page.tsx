import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Beste familielodges in Namibië";
const DESCRIPTION = "Gezinsvriendelijke lodges in heel Namibië, gekozen op ruimte, gemak en nabijheid.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/best-family-lodges",
    languages: { en: "/best-family-lodges", de: "/de/best-family-lodges", nl: "/nl/best-family-lodges" },
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
      category="family"
      title="Beste familielodges in Namibië"
      intro="Verbonden kamers, eenvoudige logistiek en een rustiger tempo: de lodges die goed werken voor reizen met kinderen."
      path="/best-family-lodges"
    />
  );
}
