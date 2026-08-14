import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { absoluteUrl } from "@/config";
import { PRODUCTS, productBySlug, productsByCategory, UMISTENI } from "@/data/products";
import { categoryById } from "@/data/categories";
import { MESICE_KRATCE, MESICE_CELE, formatMesice } from "@/lib/mesice";
import Container from "@/components/Container";
import CategoryIllustration from "@/components/CategoryIllustration";
import AddToBasketButton from "@/components/AddToBasketButton";
import ProductCard from "@/components/ProductCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  const nazev = product.odruda ? `${product.nazev} ‚${product.odruda}'` : product.nazev;
  return {
    title: `${nazev} — sazenice`,
    description: product.kratkyPopis,
    alternates: { canonical: absoluteUrl(`/nabidka/${product.slug}/`) },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const kategorie = categoryById(product.kategorie);
  const nazevCely = product.odruda
    ? `${product.nazev} ‚${product.odruda}'`
    : product.nazev;
  const souvisejici = productsByCategory(product.kategorie)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);
  const mesiceSet = new Set(product.mesice);

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Nabídka", item: absoluteUrl("/nabidka/") },
      { "@type": "ListItem", position: 2, name: kategorie.nazev, item: absoluteUrl(`/nabidka/#${kategorie.id}`) },
      { "@type": "ListItem", position: 3, name: nazevCely, item: absoluteUrl(`/nabidka/${product.slug}/`) },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Container className="py-10 sm:py-14">
        <nav aria-label="Drobečková navigace" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/nabidka/" className="hover:text-leaf-deep hover:underline">
                Nabídka
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={`/nabidka/#${kategorie.id}`} className="hover:text-leaf-deep hover:underline">
                {kategorie.nazev}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-ink">
              {nazevCely}
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <div className="flex aspect-[4/3] items-center justify-center rounded-card border border-line bg-cream text-leaf-deep shadow-soft">
              <CategoryIllustration id={product.kategorie} className="h-full w-full p-10" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.umisteni.map((u) => (
                <span
                  key={u}
                  className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-semibold text-muted"
                >
                  {UMISTENI[u]}
                </span>
              ))}
            </div>
          </div>

          <div>
            {product.badge && (
              <span
                className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold ${
                  product.badge === "Oblíbené"
                    ? "bg-terra-soft text-terra-deep"
                    : "bg-mint text-leaf-deep"
                }`}
              >
                {product.badge}
              </span>
            )}
            <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              {nazevCely}
            </h1>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              {product.popis.map((odstavec) => (
                <p key={odstavec.slice(0, 24)}>{odstavec}</p>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted">
                Kdy bývá k odběru
              </h2>
              <div className="mt-3 flex max-w-md gap-1" role="img" aria-label={`K odběru: ${formatMesice(product.mesice)}`}>
                {MESICE_KRATCE.map((m, i) => {
                  const active = mesiceSet.has(i + 1);
                  return (
                    <div key={m} className="flex-1 text-center" aria-hidden="true">
                      <div
                        className={`h-2.5 rounded-full ${active ? "bg-brand-gradient" : "bg-sunken"}`}
                        title={MESICE_CELE[i]}
                      />
                      <span className={`mt-1 block text-[10px] font-semibold ${active ? "text-leaf-deep" : "text-muted/60"}`}>
                        {m}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 rounded-card border border-line bg-mint/60 p-5">
              <h2 className="font-semibold text-leaf-deep">Jak na to</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                {product.tipy.map((tip) => (
                  <li key={tip.slice(0, 24)} className="flex gap-2.5">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-leaf" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 10.5l4 4 8-9" />
                    </svg>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AddToBasketButton slug={product.slug} nazev={nazevCely} size="md" />
              <p className="text-sm text-muted">
                Cena na dotaz — v odpovědi na poptávku ji pošleme obratem.
              </p>
            </div>
          </div>
        </div>

        {souvisejici.length > 0 && (
          <section className="mt-20" aria-labelledby="souvisejici-nadpis">
            <h2 id="souvisejici-nadpis" className="font-display text-2xl font-semibold">
              Mohlo by se hodit k tomu
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {souvisejici.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
