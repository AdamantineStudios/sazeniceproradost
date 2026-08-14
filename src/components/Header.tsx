"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useBasket } from "@/lib/basket";
import { SITE } from "@/config";
import SprLogo from "./SprLogo";

const NAV = [
  { href: "/nabidka/", label: "Nabídka" },
  { href: "/o-nas/", label: "O nás" },
  { href: "/jak-nakoupit/", label: "Jak nakoupit" },
  { href: "/kontakt/", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const { count, ready } = useBasket();
  const [open, setOpen] = useState(false);

  // Po přechodu na jinou stránku mobilní menu zavřít
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE.name} — domů`}>
          <SprLogo className="h-9 w-9 shrink-0" />
          <span className="font-display text-lg font-semibold leading-none sm:text-xl">
            Sazeničky <span className="text-leaf">pro radost</span>
          </span>
        </Link>

        <nav aria-label="Hlavní navigace" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-mint text-leaf-deep"
                  : "text-ink hover:bg-sunken"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/poptavka/"
            className="inline-flex items-center gap-2 rounded-full bg-terra px-4 py-2 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-terra-deep"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 5h2l1.6 8.4a1 1 0 0 0 1 .6h6.9a1 1 0 0 0 1-.7L17 7H6" />
              <circle cx="8.5" cy="16.5" r="1" />
              <circle cx="14" cy="16.5" r="1" />
            </svg>
            Poptávka
            {ready && count > 0 && (
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-terra-deep">
                {count}
              </span>
            )}
            <span aria-live="polite" className="sr-only">
              {ready && count > 0 ? `V poptávce ${count} kusů` : ""}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobilni-menu"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-sunken md:hidden"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobilni-menu"
          aria-label="Mobilní navigace"
          className="border-t border-line bg-cream px-4 pb-4 pt-2 md:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`block rounded-xl px-4 py-3 text-base font-semibold ${
                isActive(item.href) ? "bg-mint text-leaf-deep" : "text-ink hover:bg-sunken"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
