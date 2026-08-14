import { useId } from "react";

/** Značka SPR — kruh se značkovým gradientem a bílým klíčkem (semenáčkem). */
export default function SprLogo({ className = "h-9 w-9" }: { className?: string }) {
  const id = useId();
  const gid = `spr-gradient-${id}`;
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-teal)" />
          <stop offset="1" stopColor="var(--color-lime)" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill={`url(#${gid})`} />
      <path
        d="M32 48 V29"
        stroke="var(--color-paper)"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      <path
        d="M32 34 C 31 25, 23.5 20.5, 16 21.5 C 16.5 30, 24 35, 32 34 Z"
        fill="var(--color-paper)"
      />
      <path
        d="M32 29 C 32.5 21, 39.5 16.5, 47 17.5 C 46.5 26, 40 30.5, 32 29 Z"
        fill="var(--color-paper)"
      />
    </svg>
  );
}
