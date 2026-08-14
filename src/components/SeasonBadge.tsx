import { formatMesice } from "@/lib/mesice";

export default function SeasonBadge({ mesice }: { mesice: readonly number[] }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-2.5 py-1 text-xs font-semibold text-leaf-deep">
      <svg viewBox="0 0 8 8" className="h-2 w-2 fill-leaf" aria-hidden="true">
        <circle cx="4" cy="4" r="4" />
      </svg>
      k odběru: {formatMesice(mesice)}
    </span>
  );
}
