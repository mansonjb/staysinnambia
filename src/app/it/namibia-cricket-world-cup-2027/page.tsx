import { CricketWcPage, cricketMetadata } from "@/components/cricket-wc-page";
import { contentIt } from "@/lib/cricket-wc.it";
import { getLodgeIt } from "@/lib/data.it";

export const metadata = cricketMetadata(contentIt, "it");

export default function CricketWorldCup2027PageIt() {
  return <CricketWcPage content={contentIt} locale="it" getLodge={getLodgeIt} />;
}
