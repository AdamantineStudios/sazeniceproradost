"use client";

import { useEffect, useRef, useState } from "react";
import { useBasket } from "@/lib/basket";

type Props = {
  slug: string;
  nazev: string;
  size?: "sm" | "md";
  className?: string;
};

export default function AddToBasketButton({
  slug,
  nazev,
  size = "sm",
  className = "",
}: Props) {
  const { add } = useBasket();
  const [added, setAdded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const onClick = () => {
    add(slug);
    setAdded(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1600);
  };

  const sizing =
    size === "md"
      ? "px-6 py-3 text-base"
      : "px-3.5 py-2 text-sm";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Přidat do poptávky: ${nazev}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white shadow-soft transition-colors ${
        added ? "bg-leaf" : "bg-terra hover:bg-terra-deep"
      } ${sizing} ${className}`}
    >
      {added ? "Přidáno ✓" : "Do poptávky"}
      <span aria-live="polite" className="sr-only">
        {added ? `${nazev} přidáno do poptávky` : ""}
      </span>
    </button>
  );
}
