import Link from "next/link";
import type { Metadata } from "next";
import { SITE, absoluteUrl } from "@/config";
import { CATEGORIES } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import CategoryIllustration from "@/components/CategoryIllustration";

export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl("/") },
};

const USP = [
  {
    title: "10+ let z profesionální výroby",
    text: "Zkušenosti vedoucího produkce ve velkovýrobě, přenesené na domácí zahradu.",
    icon: (
      <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 8.7l5.4-.8L12 3z" />
    ),
  },
  {
    title: "Tři skleníky a pařeniště",
    text: "Sazenice rostou v teple poctivého pařeniště a otužují se ve fóliovnících.",
    icon: (
      <path d="M4 20V10L12 4l8 6v10M4 20h16M9 20v-6h6v6" />
    ),
  },
  {
    title: "Automatická závlaha i topení",
    text: "Stabilní podmínky každý den v roce — žádný stres ze sucha nebo chladu.",
    icon: (
      <path d="M12 3c3.5 4.2 6 7.4 6 10.5a6 6 0 1 1-12 0C6 10.4 8.5 7.2 12 3zM9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
    ),
  },
  {
    title: "Rodinná péče",
    text: "Každou sazenici jsme přepichovali vlastníma rukama — i ty dětské pomáhaly.",
    icon: (
      <path d="M12 20s-7-4.6-9-9c-1.2-2.7.6-6 3.8-6 2 0 3.6 1.2 5.2 3.3C13.6 6.2 15.2 5 17.2 5c3.2 0 5 3.3 3.8 6-2 4.4-9 9-9 9z" />
    ),
  },
];

const KROKY = [
  {
    title: "Vyberte si z nabídky",
    text: "Projděte katalog a tlačítkem „Do poptávky“ si poskládejte seznam sazenic.",
  },
  {
    title: "Pošlete nezávaznou poptávku",
    text: "Web vám připraví hotový e-mail. Obratem odpovíme s cenou a dostupností.",
  },
  {
    title: "Vyzvedněte na zahradě",
    text: "Domluvíme termín a sazenice si převezmete osobně u nás na Plzeňsku.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="grain overflow-hidden border-b border-line">
        <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-leaf-deep shadow-soft">
              <span className="h-2 w-2 rounded-full bg-brand-gradient" aria-hidden="true" />
              Rodinné pěstitelství · {SITE.region}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Sazeničky pěstované{" "}
              <span className="text-brand-gradient">pro radost</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Rajčata, papriky, okurky, bylinky i květiny — předpěstované ve
              třech sklenících a poctivém pařeništi s automatickým topením a
              závlahou. Vyberte si, pošlete poptávku a vyzvedněte přímo u nás
              na zahradě.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/nabidka/"
                className="inline-flex items-center gap-2 rounded-full bg-terra px-6 py-3.5 font-semibold text-white shadow-lift transition-colors hover:bg-terra-deep"
              >
                Prohlédnout nabídku
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 10h12m-5-5 5 5-5 5" />
                </svg>
              </Link>
              <Link
                href="/jak-nakoupit/"
                className="inline-flex items-center rounded-full border-2 border-leaf px-6 py-3 font-semibold text-leaf-deep transition-colors hover:bg-mint"
              >
                Jak to funguje
              </Link>
            </div>
            <p className="mt-8 font-display text-sm italic text-muted">
              „{SITE.motto}“ — {SITE.mottoTranslation}. Naše rodinné motto.
            </p>
          </div>

          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[3rem] bg-brand-gradient opacity-15 blur-2xl"
            />
            <Photo
              name="seedlings-perlite"
              alt="Mladé sazeničky okurek v sadbovači s perlitem"
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
            />
            <div className="absolute -bottom-5 left-6 rounded-2xl border border-line bg-paper px-4 py-3 shadow-lift">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">
                Hlavní sezóna
              </p>
              <p className="font-display text-lg font-semibold text-leaf-deep">
                březen–červenec
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── USP ──────────────────────────────────────────────────────── */}
      <section aria-label="Proč od nás">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {USP.map((usp, i) => (
              <Reveal key={usp.title} delay={i * 80}>
                <div className="h-full rounded-card border border-line bg-paper p-5 shadow-soft">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-leaf-deep">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {usp.icon}
                    </svg>
                  </div>
                  <h2 className="font-semibold">{usp.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{usp.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Kategorie ────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-sunken/50">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Nabídka"
            title="Co u nás vypěstujete"
            lead="Šest kategorií sazenic — od klasiky českých záhonů po vůni levandule. Všechno předpěstované tak, aby to u vás jen dorostlo do krásy."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 60}>
                <Link
                  href={`/nabidka/#${cat.id}`}
                  className="group flex h-full items-center gap-4 rounded-card border border-line bg-paper p-4 shadow-soft transition-shadow hover:shadow-lift"
                >
                  <span className="block h-20 w-24 shrink-0 text-leaf-deep">
                    <CategoryIllustration id={cat.id} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                  </span>
                  <span>
                    <span className="font-display text-lg font-semibold group-hover:text-leaf-deep">
                      {cat.nazev}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {productsByCategory(cat.id).length} druhů
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Jak to funguje ───────────────────────────────────────────── */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Jednoduše"
            title="Jak to funguje"
            lead="Žádný e-shop, žádné platby předem. Prostě si řeknete, co chcete — a my to pro vás vypěstujeme."
            align="center"
          />
          <ol className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {KROKY.map((krok, i) => (
              <Reveal key={krok.title} delay={i * 100}>
                <li className="relative h-full rounded-card border border-line bg-paper p-6 pt-8 text-center shadow-soft">
                  <span
                    aria-hidden="true"
                    className="absolute -top-5 left-1/2 inline-flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-brand-gradient font-display text-lg font-bold text-white shadow-soft"
                  >
                    {i + 1}
                  </span>
                  <h3 className="font-semibold">{krok.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{krok.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <p className="mt-10 text-center">
            <Link
              href="/jak-nakoupit/"
              className="font-semibold text-leaf-deep underline decoration-2 underline-offset-4 hover:text-leaf"
            >
              Celý postup včetně sezónního kalendáře →
            </Link>
          </p>
        </Container>
      </section>

      {/* ── Příběh ───────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-sunken/50">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-last mx-auto w-full max-w-md lg:order-first">
            <Photo
              name="squash-in-hands"
              alt="Dětské dlaně opatrně drží sazenici tykve"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
            />
            <div className="absolute -right-4 -top-4 rounded-2xl bg-paper px-4 py-3 shadow-lift">
              <p className="font-display text-2xl">🌱</p>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Náš příběh"
              title="Ze záliby řemeslo, z řemesla radost"
              lead="Přes deset let vedení produkce v profesionální zahradnické výrobě — a večer doma na zahradě tři skleníky, pařeniště a dvě děti, které pomáhají sázet semínka."
            />
            <p className="mt-6 max-w-xl leading-relaxed text-muted">
              Pěstujeme především pro sebe a pro radost. A protože sazeniček
              každý rok zbyde víc, než sami stihneme zasadit, dostanou se i na
              vás — silné, otužilé a připravené růst.
            </p>
            <p className="mt-6">
              <Link
                href="/o-nas/"
                className="font-semibold text-leaf-deep underline decoration-2 underline-offset-4 hover:text-leaf"
              >
                Přečíst celý příběh →
              </Link>
            </p>
          </div>
        </Container>
      </section>

      {/* ── Instagram ────────────────────────────────────────────────── */}
      <section>
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="overflow-hidden rounded-card border border-line bg-paper shadow-lift">
              <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-leaf">
                    Instagram
                  </p>
                  <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                    Sledujte, co právě klíčí
                  </h2>
                  <p className="mt-3 max-w-lg text-muted">
                    Ze skleníku na váš feed: výsevy, přepichování i první
                    plody. Nejrychlejší cesta, jak vědět, co je zrovna
                    k mání.
                  </p>
                  <a
                    href={SITE.instagram}
                    rel="noopener"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream transition-opacity hover:opacity-90"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
                    </svg>
                    {SITE.instagramHandle}
                  </a>
                </div>
                <div className="flex gap-3">
                  {(["seedlings-dew", "greenhouse-rows-1", "tomato-crates"] as const).map(
                    (name, i) => (
                      <Photo
                        key={name}
                        name={name}
                        alt=""
                        sizes="140px"
                        className={`h-28 w-24 rounded-xl object-cover shadow-soft sm:h-36 sm:w-28 ${
                          i === 1 ? "translate-y-3" : ""
                        }`}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
