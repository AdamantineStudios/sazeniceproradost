import type { Metadata } from "next";
import Link from "next/link";
import { SITE, absoluteUrl } from "@/config";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Přes deset let zkušeností z profesionální zahradnické výroby, tři skleníky, pařeniště s automatickým topením a závlahou — a rodina, která pěstuje pro radost.",
  alternates: { canonical: absoluteUrl("/o-nas/") },
};

const STATS = [
  { cislo: "3", popis: "fóliové skleníky" },
  { cislo: "1", popis: "poctivé pařeniště" },
  { cislo: "10+", popis: "let v profesionální výrobě" },
  { cislo: "2", popis: "malí pomocníci" },
];

export default function ONasPage() {
  return (
    <>
      <section className="border-b border-line bg-sunken/50">
        <Container className="py-12 sm:py-16">
          <SectionHeading
            as="h1"
            eyebrow="O nás"
            title="Pěstujeme pro radost. Doslova."
            lead="Sazeničky pro radost jsou přesně to, co říká jméno: rodinná zahrada, kde se koníček potkal s řemeslem."
          />
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 leading-relaxed">
            <p>
              Všechno začalo prací: přes deset let vedení produkce
              v profesionální zahradnické velkovýrobě. Tisíce rostlin denně,
              přesné postupy, žádný prostor pro náhodu. Časem ale přišla chuť
              dělat to samé v malém — a po svém.
            </p>
            <p>
              Tak na naší zahradě vyrostly tři fóliové skleníky a k nim
              poctivé pařeniště, jak ho znali naši dědové. Jen s malým
              vylepšením: automatickým vytápěním a závlahou, které drží
              sazenicím stabilní podmínky, i když zrovna nejsme doma.
            </p>
            <p>
              Sejeme, přepicháváme a otužujeme každou rostlinku ručně.
              Pomáhá celá rodina — a ty nejmenší ruce u toho bývají
              nejpečlivější. Proto víme jistě, že od nás odchází jen to,
              co bychom si sami zasadili.
            </p>
            <p className="font-display italic text-leaf-deep">
              „{SITE.motto}“ — {SITE.mottoTranslation}. Motto, které u nás
              doma slyšíte nejčastěji. Latinsky proto, že co je latinsky,
              to se plní.
            </p>
          </div>
          <Reveal className="mx-auto w-full max-w-md">
            <Photo
              name="kids-sowing"
              alt="Dětská dlaň se semínky připravenými k výsevu"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 rounded-card border border-line bg-paper p-6 shadow-soft sm:grid-cols-4 sm:p-8">
          {STATS.map((stat) => (
            <div key={stat.popis} className="text-center">
              <p className="font-display text-4xl font-semibold text-brand-gradient">
                {stat.cislo}
              </p>
              <p className="mt-1 text-sm font-semibold text-muted">{stat.popis}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="border-y border-line bg-sunken/50">
        <Container className="py-16">
          <SectionHeading
            eyebrow="Zázemí"
            title="Kde sazeničky rostou"
            lead="Pařeniště dodá teplo na start, skleníky prostor pro růst a otužování. Automatika hlídá závlahu i teplotu — my hlídáme kvalitu."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <Photo
                name="greenhouse-rows-1"
                alt="Řady sazenic ve vytápěném fóliovníku"
                sizes="(min-width: 1024px) 55vw, 90vw"
                className="h-full w-full rounded-card object-cover shadow-soft"
              />
            </Reveal>
            <div className="grid gap-5">
              <Reveal delay={100}>
                <Photo
                  name="greenhouse-heater"
                  alt="Fóliovník s elektrickým vytápěním a sazenicemi brzy na jaře"
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className="w-full rounded-card object-cover shadow-soft"
                />
              </Reveal>
              <Reveal delay={200}>
                <Photo
                  name="sown-trays"
                  alt="Sadbovače naplněné substrátem před výsevem"
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className="w-full rounded-card object-cover shadow-soft"
                />
              </Reveal>
            </div>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Reveal>
              <Photo
                name="seedlings-dew"
                alt="Sazenice s kapkami vody po ranní zálivce"
                sizes="(min-width: 640px) 45vw, 90vw"
                className="aspect-[4/3] w-full rounded-card object-cover shadow-soft"
              />
            </Reveal>
            <Reveal delay={100}>
              <Photo
                name="greenhouse-rows-2"
                alt="Fóliovník plný mladých sazenic v květináčcích"
                sizes="(min-width: 640px) 45vw, 90vw"
                className="aspect-[4/3] w-full rounded-card object-cover shadow-soft"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <Container className="py-16 text-center">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          Chcete, aby u vás rostlo něco od nás?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Projděte si nabídku a pošlete nezávaznou poptávku — odpovíme
          obratem s cenou a termínem vyzvednutí.
        </p>
        <Link
          href="/nabidka/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-terra px-6 py-3.5 font-semibold text-white shadow-lift transition-colors hover:bg-terra-deep"
        >
          Prohlédnout nabídku
        </Link>
      </Container>
    </>
  );
}
