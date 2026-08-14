import { CATEGORIES } from "@/data/categories";
import { categoryMonths } from "@/data/products";
import { MESICE_KRATCE, MESICE_CELE } from "@/lib/mesice";

/** Sezónní kalendář: kdy je která kategorie sazenic k odběru. */
export default function SeasonCalendar() {
  return (
    <div className="overflow-x-auto rounded-card border border-line bg-paper p-4 shadow-soft sm:p-6">
      <table className="w-full min-w-[540px] border-separate border-spacing-1">
        <caption className="sr-only">
          Kalendář dostupnosti sazenic podle kategorií a měsíců
        </caption>
        <thead>
          <tr>
            <th scope="col" className="w-40 text-left text-xs font-bold uppercase tracking-wider text-muted">
              Kategorie
            </th>
            {MESICE_KRATCE.map((m, i) => (
              <th
                key={m}
                scope="col"
                className="text-center text-xs font-semibold text-muted"
              >
                <abbr title={MESICE_CELE[i]} className="no-underline">
                  {m}
                </abbr>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CATEGORIES.map((cat) => {
            const months = new Set(categoryMonths(cat.id));
            return (
              <tr key={cat.id}>
                <th scope="row" className="py-1 pr-3 text-left text-sm font-semibold">
                  {cat.nazev}
                </th>
                {MESICE_KRATCE.map((_, i) => {
                  const active = months.has(i + 1);
                  return (
                    <td key={i} className="p-0">
                      <div
                        className={`h-7 rounded-md ${active ? "bg-brand-gradient" : "bg-sunken"}`}
                        title={active ? `${cat.nazev}: ${MESICE_CELE[i]}` : undefined}
                      >
                        <span className="sr-only">
                          {MESICE_CELE[i]}: {active ? "k odběru" : "mimo sezónu"}
                        </span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="mt-4 text-xs text-muted">
        Orientační přehled — přesnou dostupnost potvrdíme v odpovědi na poptávku.
        Sezóna se každý rok mírně posouvá podle počasí.
      </p>
    </div>
  );
}
