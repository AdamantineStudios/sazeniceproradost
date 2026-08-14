import type { Metadata } from "next";
import { absoluteUrl } from "@/config";
import { CATEGORIES } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import CategoryIllustration from "@/components/CategoryIllustration";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Nabídka sazenic",
  description:
    "Sazenice rajčat, paprik, okurek, zeleniny, bylinek a květin z rodinného pěstitelství na Plzeňsku. Vyberte si a pošlete nezávaznou poptávku.",
  alternates: { canonical: absoluteUrl("/nabidka/") },
};

export default function NabidkaPage() {
  return (
    <>
      <section className="border-b border-line bg-sunken/50">
        <Container className="py-12 sm:py-16">
          <SectionHeading
            as="h1"
            eyebrow="Katalog"
            title="Nabídka sazenic"
            lead="Ceny neuvádíme — pošlete nezávaznou poptávku a obratem odpovíme s cenou i dostupností. Tlačítkem „Do poptávky“ si seznam poskládáte jako v e-shopu."
          />
          <nav aria-label="Kategorie" className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold text-ink shadow-soft transition-colors hover:bg-mint hover:text-leaf-deep"
              >
                {cat.nazev}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <Container className="space-y-16 py-14 sm:py-16">
        {CATEGORIES.map((cat) => {
          const products = productsByCategory(cat.id);
          return (
            <section
              key={cat.id}
              id={cat.id}
              aria-labelledby={`${cat.id}-nadpis`}
              className="scroll-mt-24"
            >
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="block h-16 w-20 shrink-0 text-leaf-deep" aria-hidden="true">
                    <CategoryIllustration id={cat.id} className="h-full w-full" />
                  </span>
                  <div>
                    <h2
                      id={`${cat.id}-nadpis`}
                      className="font-display text-2xl font-semibold sm:text-3xl"
                    >
                      {cat.nazev}
                    </h2>
                    <p className="mt-1 max-w-xl text-sm text-muted">{cat.popis}</p>
                  </div>
                </div>
              </Reveal>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </Container>
    </>
  );
}
