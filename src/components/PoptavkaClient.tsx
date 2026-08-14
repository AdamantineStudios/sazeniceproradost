"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { SITE } from "@/config";
import { useBasket } from "@/lib/basket";
import { productBySlug } from "@/data/products";

// ---------------------------------------------------------------------------
// Stránka poptávky: seznam položek z košíku, kontaktní údaje a hotový e-mail.
// E-mail se skládá jako mailto: odkaz; plný text je vždy viditelný v poli
// s tlačítkem kopírování — funguje tedy i bez nastaveného poštovního klienta.
// ---------------------------------------------------------------------------

const KONTAKT_KEY = "spr:kontakt:v1";
/** Delší mailto: odkazy některé klienty (hlavně Windows) oříznou. */
const MAILTO_LIMIT = 1900;

type Kontakt = { jmeno: string; telefon: string; poznamka: string };
const PRAZDNY_KONTAKT: Kontakt = { jmeno: "", telefon: "", poznamka: "" };

function loadKontakt(): Kontakt {
  try {
    const raw = window.localStorage.getItem(KONTAKT_KEY);
    if (!raw) return PRAZDNY_KONTAKT;
    const data = JSON.parse(raw) as Partial<Kontakt>;
    return {
      jmeno: typeof data.jmeno === "string" ? data.jmeno : "",
      telefon: typeof data.telefon === "string" ? data.telefon : "",
      poznamka: typeof data.poznamka === "string" ? data.poznamka : "",
    };
  } catch {
    return PRAZDNY_KONTAKT;
  }
}

function buildEmailText(
  radky: { nazev: string; qty: number }[],
  kontakt: Kontakt,
): string {
  const seznam = radky.map((r) => `– ${r.nazev} … ${r.qty} ks`).join("\r\n");
  return [
    "Dobrý den,",
    "",
    "rádi bychom poptali tyto sazeničky:",
    seznam,
    "",
    `Jméno: ${kontakt.jmeno.trim() || "(nevyplněno)"}`,
    `Telefon: ${kontakt.telefon.trim() || "(nevyplněno)"}`,
    `Poznámka: ${kontakt.poznamka.trim() || "–"}`,
    "",
    "Předem děkujeme za informaci o ceně a možnostech vyzvednutí.",
    "",
    "(Odesláno z webu Sazeničky pro radost)",
  ].join("\r\n");
}

export default function PoptavkaClient() {
  const { ready, items, setQty, remove, clear } = useBasket();
  const [kontakt, setKontakt] = useState<Kontakt>(PRAZDNY_KONTAKT);
  const [zkopirovano, setZkopirovano] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setKontakt(loadKontakt());
    return () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);

  const updateKontakt = (patch: Partial<Kontakt>) =>
    setKontakt((prev) => {
      const next = { ...prev, ...patch };
      try {
        window.localStorage.setItem(KONTAKT_KEY, JSON.stringify(next));
      } catch {
        // úložiště nedostupné — údaje vydrží aspoň do obnovení stránky
      }
      return next;
    });

  // Položky košíku spárované s katalogem (neznámé slugy se tiše vynechají)
  const radky = useMemo(
    () =>
      items.flatMap((item) => {
        const product = productBySlug(item.slug);
        if (!product) return [];
        const nazev = product.odruda
          ? `${product.nazev} ‚${product.odruda}'`
          : product.nazev;
        return [{ slug: item.slug, nazev, qty: item.qty }];
      }),
    [items],
  );

  const celkem = radky.reduce((sum, r) => sum + r.qty, 0);
  const text = useMemo(() => buildEmailText(radky, kontakt), [radky, kontakt]);
  const subject = `Poptávka sazeniček — ${kontakt.jmeno.trim() || "z webu"}`;

  const mailtoHref = useMemo(() => {
    const plny = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    if (plny.length <= MAILTO_LIMIT) return plny;
    // Dlouhý seznam: krátké tělo, plný text si zákazník vloží kopírováním
    const stub =
      "Dobrý den,\r\n\r\nposíláme poptávku sazenic — seznam vkládáme z webu (tlačítko „Zkopírovat text“).\r\n";
    return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(stub)}`;
  }, [subject, text]);
  const mailtoZkracene = mailtoHref.length < 300 && radky.length > 0;

  const kopirovat = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      // starší prohlížeče / http: označit text a zkusit execCommand
      const ta = textareaRef.current;
      if (ta) {
        ta.focus();
        ta.select();
        try {
          ok = document.execCommand("copy");
        } catch {
          ok = false;
        }
      }
    }
    if (ok) {
      setZkopirovano(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setZkopirovano(false), 2000);
    }
  };

  if (!ready) {
    return (
      <p className="py-10 text-center text-muted" aria-busy="true">
        Načítám poptávku…
      </p>
    );
  }

  if (radky.length === 0) {
    return (
      <div className="mx-auto max-w-xl rounded-card border border-line bg-paper p-10 text-center shadow-soft">
        <p className="font-display text-5xl" aria-hidden="true">
          🌱
        </p>
        <h2 className="mt-4 font-display text-2xl font-semibold">
          Vaše poptávka je zatím prázdná
        </h2>
        <p className="mt-3 text-muted">
          Vyberte si v nabídce sazenice tlačítkem „Do poptávky“ — seznam se
          vám tady poskládá sám.
        </p>
        <Link
          href="/nabidka/"
          className="mt-6 inline-flex items-center rounded-full bg-terra px-6 py-3 font-semibold text-white shadow-soft transition-colors hover:bg-terra-deep"
        >
          Prohlédnout nabídku
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
      {/* ── Položky ────────────────────────────────────────────────── */}
      <div>
        <h2 className="font-display text-xl font-semibold">
          Vybrané sazenice{" "}
          <span className="text-muted">({celkem} ks)</span>
        </h2>
        <ul className="mt-4 divide-y divide-line rounded-card border border-line bg-paper shadow-soft">
          {radky.map((radek) => (
            <li key={radek.slug} className="flex items-center gap-3 p-4">
              <Link
                href={`/nabidka/${radek.slug}/`}
                className="grow font-semibold leading-snug underline-offset-4 hover:text-leaf-deep hover:underline"
              >
                {radek.nazev}
              </Link>
              <div
                className="flex items-center rounded-full border border-line"
                role="group"
                aria-label={`Počet kusů: ${radek.nazev}`}
              >
                <button
                  type="button"
                  onClick={() => setQty(radek.slug, radek.qty - 1)}
                  aria-label={`Ubrat jeden kus: ${radek.nazev}`}
                  className="h-9 w-9 rounded-l-full text-lg font-bold text-muted hover:bg-sunken"
                >
                  −
                </button>
                <input
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={99}
                  value={radek.qty}
                  onChange={(e) => {
                    const v = Number.parseInt(e.target.value, 10);
                    if (Number.isFinite(v)) setQty(radek.slug, v);
                  }}
                  aria-label={`Počet kusů: ${radek.nazev}`}
                  className="w-10 border-x border-line bg-transparent py-1.5 text-center text-sm font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <button
                  type="button"
                  onClick={() => setQty(radek.slug, radek.qty + 1)}
                  aria-label={`Přidat jeden kus: ${radek.nazev}`}
                  className="h-9 w-9 rounded-r-full text-lg font-bold text-muted hover:bg-sunken"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={() => remove(radek.slug)}
                aria-label={`Odebrat z poptávky: ${radek.nazev}`}
                className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted hover:bg-terra-soft hover:text-terra-deep"
              >
                <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 6h12M8 6V4.5A1.5 1.5 0 0 1 9.5 3h1A1.5 1.5 0 0 1 12 4.5V6m3 0-.8 9.6a1.5 1.5 0 0 1-1.5 1.4H7.3a1.5 1.5 0 0 1-1.5-1.4L5 6M8.2 9v5M11.8 9v5" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-center justify-between gap-3">
          <Link
            href="/nabidka/"
            className="text-sm font-semibold text-leaf-deep underline-offset-4 hover:underline"
          >
            ← Přidat další sazenice
          </Link>
          <button
            type="button"
            onClick={clear}
            className="text-sm text-muted underline-offset-4 hover:text-terra-deep hover:underline"
          >
            Vyprázdnit poptávku
          </button>
        </div>

        <fieldset className="mt-8 rounded-card border border-line bg-paper p-5 shadow-soft">
          <legend className="px-1 text-sm font-bold uppercase tracking-wider text-muted">
            Kontakt na vás <span className="font-normal normal-case">(nepovinné)</span>
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              Jméno
              <input
                type="text"
                autoComplete="name"
                value={kontakt.jmeno}
                onChange={(e) => updateKontakt({ jmeno: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-line bg-cream px-3.5 py-2.5 font-normal outline-none transition-colors focus:border-leaf"
              />
            </label>
            <label className="block text-sm font-semibold">
              Telefon
              <input
                type="tel"
                autoComplete="tel"
                value={kontakt.telefon}
                onChange={(e) => updateKontakt({ telefon: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-line bg-cream px-3.5 py-2.5 font-normal outline-none transition-colors focus:border-leaf"
              />
            </label>
            <label className="block text-sm font-semibold sm:col-span-2">
              Poznámka
              <textarea
                rows={3}
                value={kontakt.poznamka}
                onChange={(e) => updateKontakt({ poznamka: e.target.value })}
                placeholder="Např. kdy se vám hodí vyzvednutí, nebo na co se chcete zeptat…"
                className="mt-1.5 w-full resize-y rounded-xl border border-line bg-cream px-3.5 py-2.5 font-normal outline-none transition-colors focus:border-leaf"
              />
            </label>
          </div>
        </fieldset>
      </div>

      {/* ── Odeslání ───────────────────────────────────────────────── */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-card border border-line bg-paper p-6 shadow-lift">
          <h2 className="font-display text-xl font-semibold">Odeslat poptávku</h2>
          <p className="mt-2 text-sm text-muted">
            Tlačítko otevře váš e-mail s předvyplněnou zprávou pro{" "}
            <span className="font-semibold text-ink">{SITE.email}</span>.
          </p>
          <a
            href={mailtoHref}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terra px-6 py-3.5 font-semibold text-white shadow-soft transition-colors hover:bg-terra-deep"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m4 5 16 7-16 7 3.2-7L4 5z" />
            </svg>
            Odeslat e-mailem
          </a>
          {mailtoZkracene && (
            <p className="mt-2 text-xs text-muted">
              Máte dlouhý seznam — e-mail se otevře zkrácený. Celý text
              zkopírujte tlačítkem níže a vložte do zprávy.
            </p>
          )}

          <div className="mt-6 border-t border-line pt-5">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted">
                Text zprávy
              </h3>
              <button
                type="button"
                onClick={kopirovat}
                className={`rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition-colors ${
                  zkopirovano
                    ? "border-leaf bg-mint text-leaf-deep"
                    : "border-leaf text-leaf-deep hover:bg-mint"
                }`}
              >
                {zkopirovano ? "Zkopírováno ✓" : "Zkopírovat text"}
              </button>
              <span aria-live="polite" className="sr-only">
                {zkopirovano ? "Text poptávky zkopírován do schránky" : ""}
              </span>
            </div>
            <textarea
              ref={textareaRef}
              readOnly
              value={text}
              rows={12}
              aria-label="Text poptávky ke zkopírování"
              className="mt-3 w-full resize-y rounded-xl border border-line bg-sunken/70 px-3.5 py-3 font-mono text-xs leading-relaxed outline-none focus:border-leaf"
            />
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Nefunguje tlačítko e-mailu? Zkopírujte text a pošlete ho na{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-leaf-deep underline underline-offset-2">
                {SITE.email}
              </a>{" "}
              nebo zprávou na{" "}
              <a href={SITE.instagram} rel="noopener" className="font-semibold text-leaf-deep underline underline-offset-2">
                Instagram
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
