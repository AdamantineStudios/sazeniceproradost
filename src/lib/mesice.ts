/** Práce s měsíci dostupnosti sazenic. Měsíce jsou čísla 1–12. */

export const MESICE_KRATCE = [
  "led", "úno", "bře", "dub", "kvě", "čvn",
  "čvc", "srp", "zář", "říj", "lis", "pro",
] as const;

export const MESICE_CELE = [
  "leden", "únor", "březen", "duben", "květen", "červen",
  "červenec", "srpen", "září", "říjen", "listopad", "prosinec",
] as const;

/** „[4,5,6]“ → „duben–červen“, „[3]“ → „březen“, nesouvislé → výčet. */
export function formatMesice(mesice: readonly number[]): string {
  const m = [...new Set(mesice)].sort((a, b) => a - b);
  if (m.length === 0) return "";
  if (m.length === 1) return MESICE_CELE[m[0] - 1];
  const souvisle = m.every((x, i) => i === 0 || x === m[i - 1] + 1);
  if (souvisle) return `${MESICE_CELE[m[0] - 1]}–${MESICE_CELE[m[m.length - 1] - 1]}`;
  return m.map((x) => MESICE_CELE[x - 1]).join(", ");
}
