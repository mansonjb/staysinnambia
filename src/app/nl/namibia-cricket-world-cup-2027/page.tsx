import { CricketWcPage, cricketMetadata } from "@/components/cricket-wc-page";
import { contentNl } from "@/lib/cricket-wc.nl";
import { getLodgeNl } from "@/lib/data.nl";

export const metadata = cricketMetadata(contentNl, "nl");

export default function CricketWorldCup2027PageNl() {
  return <CricketWcPage content={contentNl} locale="nl" getLodge={getLodgeNl} />;
}
