import type { Metadata } from "next";
import Link from "next/link";
import { SITE, absoluteUrl } from "@/config";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SeasonCalendar from "@/components/SeasonCalendar";
import Faq from "@/components/Faq";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Jak nakoupit",
  description:
    "Vyberte sazenice, pošlete nezávaznou poptávku e-mailem a vyzvedněte osobně na Plzeňsku. Sezónní kalendář a odpovědi na časté otázky.",
  alternates: { canonical: absoluteUrl("/jak-nakoupit/") },
};

const KROKY = [
  {
    title: "Vyberte si z nabídky",
    text: "V katalogu si tlačítkem „Do poptávky“ poskládáte seznam sazenic i s počty kusů — funguje to jako košík v e-shopu, jen bez placení. Košík se vám uloží v prohlížeči, takže se k němu můžete kdykoli vrátit.",
  },
  {
    title: "Pošlete nezávaznou poptávku",
    text: "Na stránce Poptávka doplníte jméno a telefon (nemusíte), a web vám připraví hotový e-mail — stačí odeslat. Obratem odpovíme s cenou, dostupností a návrhem termínu.",
  },
  {
    title: "Vyzvedněte na zahradě",
    text: "Sazenice si převezmete osobně u nás na Plzeňsku — přesné místo a čas domluvíme v odpovědi. Platí se hotově nebo převodem při předání. Poštou neposíláme, sazenicím se to nelíbí.",
  },
];

export default function JakNakoupitPage() {
  return (
    <>
      <section className="border-b border-line bg-sunken/50">
        <Container className="py-12 sm:py-16">
          <SectionHeading
            as="h1"
            eyebrow="Postup"
            title="Jak u nás nakoupíte"
            lead="Žádná registrace, žádné platby předem. Poptávka vás k ničemu nezavazuje — je to prostě zpráva, na kterou odpovíme."
          />
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <ol className="grid gap-6 lg:grid-cols-3">
          {KROKY.map((krok, i) => (
            <Reveal key={krok.title} delay={i * 100}>
              <li className="relative h-full rounded-card border border-line bg-paper p-6 pl-20 shadow-soft">
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient font-display text-lg font-bold text-white"
                >
                  {i + 1}
                </span>
                <h2 className="font-semibold">{krok.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{krok.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <p className="mt-8 text-center">
          <Link
            href="/nabidka/"
            className="inline-flex items-center gap-2 rounded-full bg-terra px-6 py-3 font-semibold text-white shadow-soft transition-colors hover:bg-terra-deep"
          >
            Začít výběrem sazenic
          </Link>
        </p>
      </Container>

      <section className="border-y border-line bg-sunken/50">
        <Container className="py-16">
          <SectionHeading
            eyebrow="Sezóna"
            title="Kdy je co k odběru"
            lead="Jaro je u nás maraton: začínají petrklíče a saláty, vrcholí rajčata s paprikami. Přehled po kategoriích:"
          />
          <div className="mt-8">
            <SeasonCalendar />
          </div>
        </Container>
      </section>

      <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Vyzvednutí"
            title="Osobně, ze zahrady do zahrady"
            lead="Sazenice předáváme zakořeněné v květináčcích, zalité a připravené na cestu. Vyzvednutí je u nás na Plzeňsku — přesné místo pošleme v odpovědi na poptávku."
          />
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-gradient" aria-hidden="true" />
              Termín domluvíme podle vás — odpoledne i víkendy.
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-gradient" aria-hidden="true" />
              Platba hotově nebo převodem při předání.
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-gradient" aria-hidden="true" />
              Ke každé sazenici poradíme, jak ji dopěstovat do sklizně.
            </li>
          </ul>
        </div>
        <Reveal className="mx-auto w-full max-w-md">
          <Photo
            name="tomato-crates"
            alt="Přepravky se sazenicemi rajčat připravené k vyzvednutí"
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
          />
        </Reveal>
      </Container>

      <section className="border-t border-line">
        <Container className="py-16">
          <SectionHeading
            eyebrow="Časté otázky"
            title="Na co se ptáte nejčastěji"
          />
          <div className="mt-8 max-w-3xl">
            <Faq />
          </div>
          <p className="mt-8 text-sm text-muted">
            Nenašli jste odpověď? Napište nám na{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-leaf-deep underline underline-offset-4">
              {SITE.email}
            </a>{" "}
            nebo na Instagram{" "}
            <a href={SITE.instagram} rel="noopener" className="font-semibold text-leaf-deep underline underline-offset-4">
              {SITE.instagramHandle}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
