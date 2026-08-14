// ---------------------------------------------------------------------------
// Připraví fotky pro web: photos-src/*.jpg → public/photos/{název}-{šířka}.webp
//
//  - .rotate() bez argumentu narovná fotku podle EXIF Orientation
//  - metadata (EXIF včetně GPS polohy!) se do výstupu záměrně nekopírují
//  - zapisuje src/data/photos-manifest.json s rozměry pro <Photo/> (poměr stran)
//
// Spouští se automaticky před buildem (npm run build) i ručně: npm run photos
// ---------------------------------------------------------------------------
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "photos-src";
const OUT = "public/photos";
const MANIFEST = "src/data/photos-manifest.json";
const WIDTHS = [480, 960, 1600];
const QUALITY = 78;

const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f));
if (files.length === 0) {
  console.error(`V ${SRC}/ nejsou žádné fotky.`);
  process.exit(1);
}
await mkdir(OUT, { recursive: true });

const manifest = {};
for (const file of files) {
  const name = path.parse(file).name;
  const base = sharp(path.join(SRC, file)).rotate();
  const meta = await base.metadata();
  // Orientace 5–8 v EXIF znamená, že po narovnání se prohodí šířka a výška
  const swapped = (meta.orientation ?? 1) >= 5;
  const width = swapped ? meta.height : meta.width;
  const height = swapped ? meta.width : meta.height;
  manifest[name] = { width, height };

  await Promise.all(
    WIDTHS.map((w) =>
      base
        .clone()
        .resize({ width: w })
        .webp({ quality: QUALITY })
        .toFile(path.join(OUT, `${name}-${w}.webp`)),
    ),
  );
  console.log(`✓ ${name} → ${width}×${height}, ${WIDTHS.length} velikostí`);
}

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(MANIFEST, JSON.stringify(sorted, null, 2) + "\n");
console.log(`✓ manifest → ${MANIFEST} (${files.length} fotek)`);
