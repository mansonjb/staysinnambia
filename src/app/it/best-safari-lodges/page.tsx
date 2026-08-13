import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "I migliori lodge safari in Namibia";
const DESCRIPTION = "I migliori lodge safari vicino all'Etosha e oltre: vista su pozze d'acqua, uscite notturne e guide esperte.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/best-safari-lodges",
    languages: { en: "/best-safari-lodges", de: "/de/best-safari-lodges", nl: "/nl/best-safari-lodges", fr: "/fr/best-safari-lodges", it: "/it/best-safari-lodges" },
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
      category="safari"
      title="I migliori lodge safari in Namibia"
      intro="Vista su pozze d'acqua, tracking fuoristrada e guide esperte: i lodge che prenoteremmo davvero per un viaggio incentrato sulla fauna selvatica."
      path="/best-safari-lodges"
    />
  );
}
