import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Glamping en Namibie";
const DESCRIPTION = "Le confort sous toile sans renoncer à un vrai lit ni à une salle de bain : les meilleurs camps de tentes de Namibie.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-glamping",
    languages: { en: "/namibia-glamping", de: "/de/namibia-glamping", nl: "/nl/namibia-glamping", fr: "/fr/namibia-glamping", it: "/it/namibia-glamping" },
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
      category="glamping"
      title="Glamping en Namibie : les meilleurs camps de tentes"
      intro="Toile de tente, vrais lits et salle de bain privative : ces camps vous rapprochent du paysage et de ses sons nocturnes, sans pour autant sacrifier le confort."
      path="/namibia-glamping"
    />
  );
}
