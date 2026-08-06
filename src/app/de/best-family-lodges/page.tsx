import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Beste Familien-Lodges in Namibia";
const DESCRIPTION = "Familienfreundliche Lodges in ganz Namibia, ausgewählt nach Platz, Komfort und Nähe.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/best-family-lodges",
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
      locale="de"
      category="family"
      title="Beste Familien-Lodges in Namibia"
      intro="Verbundene Zimmer, unkomplizierte Logistik und ein ruhigeres Tempo: die Lodges, die für Reisen mit Kindern gut funktionieren."
      path="/best-family-lodges"
    />
  );
}
