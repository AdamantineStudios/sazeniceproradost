"use client";

// ---------------------------------------------------------------------------
// Poptávkový košík — jediný stavový modul webu.
// Ukládá se do localStorage (klíč spr:kosik:v1), přežívá načtení stránky
// a synchronizuje se mezi taby. Při nedostupném úložišti (soukromý režim)
// košík funguje aspoň v paměti aktuální stránky.
// ---------------------------------------------------------------------------

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type BasketItem = { slug: string; qty: number };

const KEY = "spr:kosik:v1";
const MAX_QTY = 99;

type BasketApi = {
  /** false dokud se košík nenačte z úložiště (zabraňuje hydratačním skokům) */
  ready: boolean;
  items: BasketItem[];
  count: number;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const BasketContext = createContext<BasketApi | null>(null);

function read(): BasketItem[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const data: unknown = JSON.parse(raw);
    if (
      typeof data !== "object" || data === null ||
      (data as { v?: unknown }).v !== 1 ||
      !Array.isArray((data as { polozky?: unknown }).polozky)
    ) {
      return [];
    }
    return ((data as { polozky: unknown[] }).polozky as BasketItem[]).filter(
      (p) =>
        typeof p?.slug === "string" &&
        typeof p?.qty === "number" &&
        p.qty > 0 &&
        p.qty <= MAX_QTY,
    );
  } catch {
    return [];
  }
}

function write(items: BasketItem[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ v: 1, polozky: items }));
  } catch {
    // soukromý režim / plné úložiště — košík poběží jen v paměti
  }
}

const clamp = (qty: number) => Math.max(1, Math.min(MAX_QTY, Math.round(qty)));

export function BasketProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<BasketItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItems(read());
    setReady(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) setItems(read());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const update = useCallback(
    (fn: (prev: BasketItem[]) => BasketItem[]) =>
      setItems((prev) => {
        const next = fn(prev);
        write(next);
        return next;
      }),
    [],
  );

  const add = useCallback(
    (slug: string, qty = 1) =>
      update((prev) => {
        const existing = prev.find((p) => p.slug === slug);
        if (existing) {
          return prev.map((p) =>
            p.slug === slug ? { ...p, qty: clamp(p.qty + qty) } : p,
          );
        }
        return [...prev, { slug, qty: clamp(qty) }];
      }),
    [update],
  );

  const setQty = useCallback(
    (slug: string, qty: number) =>
      update((prev) =>
        qty <= 0
          ? prev.filter((p) => p.slug !== slug)
          : prev.map((p) => (p.slug === slug ? { ...p, qty: clamp(qty) } : p)),
      ),
    [update],
  );

  const remove = useCallback(
    (slug: string) => update((prev) => prev.filter((p) => p.slug !== slug)),
    [update],
  );

  const clear = useCallback(() => update(() => []), [update]);

  const count = items.reduce((sum, p) => sum + p.qty, 0);

  return (
    <BasketContext.Provider
      value={{ ready, items, count, add, setQty, remove, clear }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket(): BasketApi {
  const ctx = useContext(BasketContext);
  if (!ctx) throw new Error("useBasket musí být uvnitř <BasketProvider>");
  return ctx;
}
