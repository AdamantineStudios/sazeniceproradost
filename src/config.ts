// ---------------------------------------------------------------------------
// Centrální nastavení webu. Věci, které se běžně mění, jsou tady:
//   - e-mail pro poptávky (SITE.email)
//   - odkaz na Instagram
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Sazeničky pro radost",
  tagline: "Sazenice pěstované pro radost",
  description:
    "Rodinné pěstitelství na Plzeňsku. Sazenice rajčat, paprik, okurek, zeleniny, bylinek a květin ze tří skleníků a poctivého pařeniště — s automatickou závlahou, vytápěním a více než deseti lety zkušeností z profesionální zahradnické výroby.",
  /** E-mail, kam chodí poptávky. Změna = jeden řádek tady. */
  email: "t.jerousek@gmail.com",
  instagram: "https://www.instagram.com/sazenicky_pro_radost/",
  instagramHandle: "@sazenicky_pro_radost",
  motto: "Nolite oblivisci aqua",
  mottoTranslation: "nezapomeňte na vodu",
  region: "Plzeňsko",
  /** Doména, na které web běží (bez basePath). */
  origin: "https://adamantinestudios.github.io",
} as const;

/** Cesta, pod kterou web běží (GitHub Pages: „/sazeniceproradost“, vlastní doména: „“). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixuje cestu k souborům v public/, aby fungovala i pod basePath. */
export function withBase(path: string): string {
  return `${BASE_PATH}${path}`;
}

/** Absolutní URL stránky pro SEO (canonical, sitemap, OG). */
export function absoluteUrl(path: string): string {
  return `${SITE.origin}${BASE_PATH}${path}`;
}
