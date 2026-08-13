import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Soggiorni in fattoria in Namibia";
const DESCRIPTION = "Fattorie attive trasformate in tranquille e semplici guesthouse in tutta la Namibia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/it/namibia-farm-stays",
    languages: { en: "/namibia-farm-stays", de: "/de/namibia-farm-stays", nl: "/nl/namibia-farm-stays", fr: "/fr/namibia-farm-stays", it: "/it/namibia-farm-stays" },
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
      category="farm"
      title="Soggiorni in fattoria in Namibia"
      intro="Le autentiche fattorie in attività trasformate in guesthouse sono una delle tradizioni ricettive più discrete della Namibia. Stiamo ancora selezionando le strutture che soddisfano i nostri standard prima di consigliarne alcuna per nome."
      path="/namibia-farm-stays"
    />
  );
}
