import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "I migliori lodge nel deserto della Namibia";
const DESCRIPTION = "I migliori lodge nel deserto, dalla fascia di dune del Namib e oltre.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/best-desert-lodges",
    languages: { en: "/best-desert-lodges", de: "/de/best-desert-lodges", nl: "/nl/best-desert-lodges", fr: "/fr/best-desert-lodges", it: "/it/best-desert-lodges" },
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
      category="desert"
      title="I migliori lodge nel deserto della Namibia"
      intro="Dalle suite affacciate sulle dune di Sossusvlei agli chalet a forma di relitto sulla Skeleton Coast: i soggiorni nel deserto più suggestivi della Namibia."
      path="/best-desert-lodges"
    />
  );
}
