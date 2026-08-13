import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Séjours à la ferme en Namibie";
const DESCRIPTION = "D'authentiques fermes en activité transformées en maisons d'hôtes calmes et sans prétention, dans toute la Namibie.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-farm-stays",
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
      locale="fr"
      category="farm"
      title="Séjours à la ferme en Namibie"
      intro="Les authentiques fermes en activité transformées en maisons d'hôtes font partie des traditions d'hébergement les plus discrètes de Namibie. Nous recherchons encore des établissements à la hauteur de nos exigences avant d'en recommander par leur nom."
      path="/namibia-farm-stays"
    />
  );
}
