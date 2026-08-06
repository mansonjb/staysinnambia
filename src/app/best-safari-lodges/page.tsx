import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Best Safari Lodges in Namibia";
const DESCRIPTION = "The best safari lodges near Etosha and beyond: waterhole frontages, night drives and expert guiding.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/best-safari-lodges", languages: { en: "/best-safari-lodges", de: "/de/best-safari-lodges", nl: "/nl/best-safari-lodges" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function Page() {
  return (
    <LodgeCategoryPage
      category="safari"
      title="Best safari lodges in Namibia"
      intro="Waterhole frontages, off-road tracking and expert guiding: the lodges we'd actually book for a wildlife-first trip."
      path="/best-safari-lodges"
    />
  );
}
