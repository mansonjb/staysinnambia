import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Les lodges les plus isolés de Namibie";
const DESCRIPTION = "Une nuit là où aucun autre voyageur ne se trouve à cent kilomètres à la ronde : les séjours les plus isolés et les plus difficiles d'accès de Namibie.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/most-remote-lodges",
    languages: { en: "/most-remote-lodges", de: "/de/most-remote-lodges", nl: "/nl/most-remote-lodges", fr: "/fr/most-remote-lodges", it: "/it/most-remote-lodges" },
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
      category="remote"
      title="Les lodges les plus isolés de Namibie"
      intro="Ce sont des hébergements entourés d'un véritable isolement : camps accessibles uniquement par avion, littoraux à lodge unique et détours suffisamment éloignés du circuit principal pour que la plupart des itinéraires les évitent complètement."
      path="/most-remote-lodges"
    />
  );
}
