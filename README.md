# Sazeničky pro radost 🌱

Web rodinného pěstitelství sazenic na Plzeňsku — katalog sazenic
s poptávkovým košíkem, který zákazníkovi připraví hotový e-mail.
Bez backendu, bez plateb, hosting zdarma na GitHub Pages.

**Stack:** Next.js 15 (App Router, static export) · Tailwind CSS 4 ·
TypeScript · sharp (fotky) · GitHub Actions → GitHub Pages

---

## Rychlé úpravy (česky)

Nejčastější věci, které budete chtít změnit — vždy jeden soubor:

| Co změnit | Kde |
| --- | --- |
| **E-mail pro poptávky** | `src/config.ts` → `SITE.email` (jeden řádek) |
| **Produkty** (přidat/ubrat/upravit) | `src/data/products.ts` — každý produkt je jeden blok `{ … }` s poli `nazev`, `kratkyPopis`, `popis`, `tipy`, `mesice` (čísla 1–12), `umisteni`, volitelně `badge` |
| **Časté otázky** | `src/data/faq.ts` |
| **Texty kategorií** | `src/data/categories.ts` |
| **Instagram / motto / region** | `src/config.ts` |

Po úpravě: commit + push do `main` → web se sám přebuilduje a nasadí
(cca 2 minuty).

### Přidání nové fotky

1. Vložte JPG do `photos-src/` s rozumným názvem, např. `levandule-zahon.jpg`
   (⚠️ fotky dětí jen tak, aby nebyly vidět obličeje).
2. Spusťte `npm run photos` — vygeneruje zmenšené WebP verze a **odstraní
   EXIF metadata včetně GPS polohy**.
3. Ve stránce použijte `<Photo name="levandule-zahon" alt="…" />`.

Originály v `photos-src/` se na web nikdy nedostanou — publikují se jen
zmenšené, očištěné verze.

---

## Local development

```bash
npm install
npm run photos   # once: generates public/photos/ + manifest
npm run dev      # → http://localhost:3000/sazeniceproradost/
```

`npm run build` produces the static site in `out/` (runs the photo
pipeline automatically via `prebuild`).

## Deployment (GitHub Pages)

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds
the site and deploys it to GitHub Pages:

**https://adamantinestudios.github.io/sazeniceproradost/**

One-time setup (if the workflow's auto-enablement is not permitted):
repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Pull requests run a build check via `.github/workflows/ci.yml`.

## Custom domain later (e.g. `sazenickyproradost.cz`)

1. Buy the domain (~300 Kč/year) and in repo **Settings → Pages** set it
   as Custom domain (GitHub guides you through the DNS records).
2. The site then lives at the domain root, so build without the base path:
   in `.github/workflows/deploy.yml` add to the build step:
   `env: { NEXT_PUBLIC_BASE_PATH: "" }`
3. In `src/config.ts` change `SITE.origin` to `https://sazenickyproradost.cz`.

Everything else (links, sitemap, OG tags) adapts automatically — all URLs
flow through `withBase()`/`absoluteUrl()` in `src/config.ts`.

## Future: small e-shop

The product model already carries optional `cena` and `skladem` fields.
Reasonable upgrade paths, in order of effort:

- **Stripe Payment Links** — per-product payment URLs added to the data
  file; zero backend, works on static hosting.
- **Snipcart** — drop-in cart + checkout for static sites (~2% fee).
- **Shoptet** — the Czech e-commerce standard; this site then remains the
  brand/landing site and links to the shop.

## Privacy notes

- Photos are re-encoded at build time; EXIF (including GPS location of
  the garden) never reaches the published site.
- The site sets no cookies and uses no analytics. The inquiry basket
  lives only in the visitor's `localStorage`.
- The inquiry flow is plain e-mail — no personal data is stored anywhere.
