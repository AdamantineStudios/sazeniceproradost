import type { Metadata } from "next";
import Link from "next/link";
import { SITE, absoluteUrl } from "@/config";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Napište nám e-mail nebo zprávu na Instagram. Sazenice si vyzvednete osobně na Plzeňsku.",
  alternates: { canonical: absoluteUrl("/kontakt/") },
};

export default function KontaktPage() {
  return (
    <>
      <section className="border-b border-line bg-sunken/50">
        <Container className="py-12 sm:py-16">
          <SectionHeading
            as="h1"
            eyebrow="Kontakt"
            title="Ozvěte se nám"
            lead="Nejrychlejší cesta k sazenicím je poptávka — ale napsat nám můžete s čímkoli. Rádi poradíme i s tím, co vám na zahradě zrovna trápí hlavu."
          />
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={`mailto:${SITE.email}`}
            className="group rounded-card border border-line bg-paper p-6 shadow-soft transition-shadow hover:shadow-lift"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-leaf-deep">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </div>
            <h2 className="font-semibold">E-mail</h2>
            <p className="mt-1 break-all text-sm font-semibold text-leaf-deep underline-offset-4 group-hover:underline">
              {SITE.email}
            </p>
            <p className="mt-2 text-sm text-muted">
              Na poptávky odpovídáme zpravidla do 1–2 dnů.
            </p>
          </a>

          <a
            href={SITE.instagram}
            rel="noopener"
            className="group rounded-card border border-line bg-paper p-6 shadow-soft transition-shadow hover:shadow-lift"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-leaf-deep">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
              </svg>
            </div>
            <h2 className="font-semibold">Instagram</h2>
            <p className="mt-1 text-sm font-semibold text-leaf-deep underline-offset-4 group-hover:underline">
              {SITE.instagramHandle}
            </p>
            <p className="mt-2 text-sm text-muted">
              Co právě klíčí, kvete a je k mání — vždy čerstvě.
            </p>
          </a>

          <div className="rounded-card border border-line bg-paper p-6 shadow-soft">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-leaf-deep">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-6.5-5.2-6.5-10.2a6.5 6.5 0 1 1 13 0C18.5 15.8 12 21 12 21z" />
                <circle cx="12" cy="10.5" r="2.3" />
              </svg>
            </div>
            <h2 className="font-semibold">Osobní odběr</h2>
            <p className="mt-1 text-sm font-semibold">{SITE.region}</p>
            <p className="mt-2 text-sm text-muted">
              Přesné místo a termín pošleme v odpovědi na poptávku.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-card bg-brand-gradient p-[2px] shadow-lift">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[calc(1.25rem-2px)] bg-paper px-6 py-6 sm:px-8">
            <div>
              <h2 className="font-display text-xl font-semibold">
                Máte už vybráno?
              </h2>
              <p className="mt-1 text-sm text-muted">
                Poptávkový košík vám e-mail připraví sám — i s počty kusů.
              </p>
            </div>
            <Link
              href="/poptavka/"
              className="inline-flex items-center rounded-full bg-terra px-6 py-3 font-semibold text-white shadow-soft transition-colors hover:bg-terra-deep"
            >
              Přejít na poptávku
            </Link>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted">
          Soukromí: tento web nepoužívá cookies ani analytiku. Poptávkový
          košík se ukládá jen ve vašem prohlížeči. Údaje, které nám pošlete
          v poptávce, použijeme výhradně k jejímu vyřízení.
        </p>
      </Container>
    </>
  );
}
