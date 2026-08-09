import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Les meilleurs lodges du désert en Namibie";
const DESCRIPTION = "Les meilleurs lodges du désert, de la ceinture de dunes du Namib et au-delà.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/best-desert-lodges",
    languages: { en: "/best-desert-lodges", de: "/de/best-desert-lodges", nl: "/nl/best-desert-lodges", fr: "/fr/best-desert-lodges" },
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
      locale="fr"
      category="desert"
      title="Les meilleurs lodges du désert en Namibie"
      intro="Des suites face aux dunes de Sossusvlei aux chalets en forme d'épave sur la Skeleton Coast : les hébergements désertiques les plus saisissants de Namibie."
      path="/best-desert-lodges"
    />
  );
}
