import type { Metadata } from "next";
import { absoluteUrl } from "@/config";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PoptavkaClient from "@/components/PoptavkaClient";

export const metadata: Metadata = {
  title: "Poptávka",
  description:
    "Váš seznam sazenic k poptání. Web připraví hotový e-mail — stačí odeslat, my odpovíme s cenou a termínem vyzvednutí.",
  alternates: { canonical: absoluteUrl("/poptavka/") },
};

export default function PoptavkaPage() {
  return (
    <>
      <section className="border-b border-line bg-sunken/50">
        <Container className="py-12 sm:py-14">
          <SectionHeading
            as="h1"
            eyebrow="Poptávkový košík"
            title="Vaše poptávka"
            lead="Nezávazně: pošlete seznam, my odpovíme s cenou, dostupností a návrhem termínu vyzvednutí. Nic neplatíte předem."
          />
        </Container>
      </section>
      <Container className="py-12 sm:py-14">
        <PoptavkaClient />
      </Container>
    </>
  );
}
