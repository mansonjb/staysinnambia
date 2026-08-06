/**
 * Real lodge photo scraper via Apify (compass/crawler-google-places actor),
 * same actor + approach as the bestsnowhotels project's fetch-hotels-apify.mjs.
 *
 * Unlike the ski-resort version (which ranks N candidate hotels per resort),
 * every entry here is a single NAMED real property, so this just searches for
 * "<lodge name> <region>, Namibia" and takes the best-matching single result.
 *
 * Setup: APIFY_TOKEN=apify_api_xxx in .env.local (already present).
 *
 * Usage:
 *   node scripts/fetch-lodge-photos-apify.mjs            all lodges
 *   node scripts/fetch-lodge-photos-apify.mjs --filter ongava-lodge,little-kulala
 *   node scripts/fetch-lodge-photos-apify.mjs --dry      preview only, no download
 */
import sharp from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const IMG_DIR = path.join(ROOT, "public", "images", "lodges");
const OUT = path.join(ROOT, "scripts", "lodge-photo-results.json");
const ACTOR = "compass~crawler-google-places";

const argv = process.argv.slice(2);
const DRY = argv.includes("--dry");
const filterArg = (() => {
  const i = argv.indexOf("--filter");
  return i >= 0 && argv[i + 1] ? argv[i + 1].split(",").map((s) => s.trim()) : null;
})();

const LODGES = [
  { slug: "ongava-lodge", name: "Ongava Lodge", region: "Etosha" },
  { slug: "onguma-tented-camp", name: "Onguma Tented Camp", region: "Etosha" },
  { slug: "mushara-lodge", name: "Mushara Lodge", region: "Etosha" },
  { slug: "little-kulala", name: "Little Kulala", region: "Sossusvlei" },
  { slug: "sossusvlei-desert-lodge", name: "Sossusvlei Desert Lodge", region: "Sossusvlei" },
  { slug: "kulala-desert-lodge", name: "Kulala Desert Lodge", region: "Sossusvlei" },
  { slug: "damaraland-camp", name: "Damaraland Camp", region: "Damaraland" },
  { slug: "grootberg-lodge", name: "Grootberg Lodge", region: "Damaraland" },
  { slug: "doro-nawas-camp", name: "Doro Nawas Camp", region: "Damaraland" },
  { slug: "shipwreck-lodge", name: "Shipwreck Lodge", region: "Skeleton Coast" },
  { slug: "hoanib-skeleton-coast-camp", name: "Hoanib Skeleton Coast Camp", region: "Skeleton Coast" },
  { slug: "the-delight-swakopmund", name: "The Delight Swakopmund", region: "Swakopmund" },
  { slug: "hansa-hotel", name: "Hansa Hotel", region: "Swakopmund" },
  { slug: "the-olive-exclusive", name: "The Olive Exclusive", region: "Windhoek" },
  { slug: "villa-violet", name: "Villa Violet", region: "Windhoek" },
  { slug: "canyon-lodge", name: "Canyon Lodge", region: "Fish River Canyon" },
  { slug: "nkasa-lupala-tented-lodge", name: "Nkasa Lupala Tented Lodge", region: "Caprivi Strip" },
  { slug: "spitzkoppen-lodge", name: "Spitzkoppen Lodge", region: "Spitzkoppe" },
  { slug: "thitaka-river-lodge", name: "Thitaka River Lodge", region: "Caprivi Strip" },
  { slug: "luna-namib-collection", name: "Luna Namib Collection", region: "Sossusvlei" },
];

async function loadToken() {
  if (process.env.APIFY_TOKEN) return process.env.APIFY_TOKEN.trim();
  const env = await readFile(path.join(ROOT, ".env.local"), "utf-8").catch(() => "");
  const m = env.match(/APIFY_TOKEN=(.+)/);
  if (m) return m[1].trim();
  throw new Error("APIFY_TOKEN not set in .env.local");
}

async function runActor(searchString, token) {
  const url = `https://api.apify.com/v2/acts/${ACTOR}/run-sync-get-dataset-items?token=${token}`;
  const input = {
    searchStringsArray: [searchString],
    maxCrawledPlacesPerSearch: 3,
    language: "en",
    skipClosedPlaces: true,
    scrapePlaceDetailPage: true,
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`Apify HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return res.json();
}

function normalize(item) {
  return {
    name: item.title || item.name,
    imageUrl: item.imageUrl || (item.imageUrls && item.imageUrls[0]) || null,
    imageUrls: item.imageUrls || [],
    website: item.website || "",
    address: item.address || "",
    rating: item.totalScore ?? null,
    reviewCount: item.reviewsCount ?? 0,
    url: item.url || "",
  };
}

async function downloadPhoto(imageUrl, outPath) {
  const img = await fetch(imageUrl);
  if (!img.ok) throw new Error(`photo HTTP ${img.status}`);
  const buf = Buffer.from(await img.arrayBuffer());
  await sharp(buf)
    .resize(1600, 900, { fit: "cover", position: "centre" })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(outPath);
}

async function main() {
  await mkdir(IMG_DIR, { recursive: true });
  const token = await loadToken();

  let work = LODGES;
  if (filterArg) work = LODGES.filter((l) => filterArg.includes(l.slug));

  const results = [];
  for (const lodge of work) {
    const searchString = `${lodge.name}, ${lodge.region}, Namibia`;
    console.log(`\n${lodge.slug}: searching "${searchString}"`);
    let raw;
    try {
      raw = await runActor(searchString, token);
    } catch (e) {
      console.error(`  ! ${e.message}`);
      results.push({ ...lodge, status: "search-failed", error: e.message });
      continue;
    }

    const candidates = raw.map(normalize);
    if (!candidates.length) {
      console.log("  no results");
      results.push({ ...lodge, status: "no-results" });
      continue;
    }

    const best = candidates[0];
    console.log(`  best match: "${best.name}" (${best.reviewCount} reviews, ${best.website || "no website"}) — photo: ${best.imageUrl ? "yes" : "no"}`);

    if (!best.imageUrl) {
      results.push({ ...lodge, status: "no-photo", matchedName: best.name });
      continue;
    }

    const imgPath = path.join(IMG_DIR, `${lodge.slug}.jpg`);
    if (!DRY) {
      try {
        await downloadPhoto(best.imageUrl, imgPath);
        console.log(`  saved ${imgPath}`);
      } catch (e) {
        console.error(`  ! photo download failed: ${e.message}`);
        results.push({ ...lodge, status: "download-failed", matchedName: best.name, error: e.message });
        continue;
      }
    }

    results.push({
      ...lodge,
      status: DRY ? "dry-run-match" : "downloaded",
      matchedName: best.name,
      matchedAddress: best.address,
      sourceUrl: best.url,
      localPath: `/images/lodges/${lodge.slug}.jpg`,
    });
    await new Promise((r) => setTimeout(r, 200));
  }

  await writeFile(OUT, JSON.stringify(results, null, 2) + "\n");
  console.log(`\nWrote ${OUT}`);
  console.log(`\nSummary: ${results.filter((r) => r.status === "downloaded" || r.status === "dry-run-match").length}/${work.length} matched`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
