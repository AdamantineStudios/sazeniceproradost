import Link from "next/link";
import type { Product } from "@/data/products";
import CategoryIllustration from "./CategoryIllustration";
import SeasonBadge from "./SeasonBadge";
import AddToBasketButton from "./AddToBasketButton";

export default function ProductCard({ product }: { product: Product }) {
  const nazevCely = product.odruda
    ? `${product.nazev} ‚${product.odruda}'`
    : product.nazev;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-paper shadow-soft transition-shadow hover:shadow-lift">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-cream text-leaf-deep">
        <CategoryIllustration
          id={product.kategorie}
          className="h-full w-full p-6 transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-bold ${
              product.badge === "Oblíbené"
                ? "bg-terra-soft text-terra-deep"
                : "bg-mint text-leaf-deep"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex grow flex-col gap-3 p-5">
        <h3 className="font-display text-xl font-semibold leading-snug">
          <Link
            href={`/nabidka/${product.slug}/`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {nazevCely}
          </Link>
        </h3>
        <p className="grow text-sm leading-relaxed text-muted">
          {product.kratkyPopis}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <SeasonBadge mesice={product.mesice} />
          <AddToBasketButton
            slug={product.slug}
            nazev={nazevCely}
            className="relative z-10"
          />
        </div>
      </div>
    </article>
  );
}
