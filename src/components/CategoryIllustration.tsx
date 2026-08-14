import type { CategoryId } from "@/data/categories";

/**
 * Botanické ilustrace kategorií — jednotný styl: tenká linka (currentColor),
 * kulaté konce, jedna organická podkladová skvrna v tlumeném tónu.
 * Vykreslují se inline, žádné requesty navíc.
 */

type IllProps = { className?: string };
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Rajcata({ className }: IllProps) {
  return (
    <svg viewBox="0 0 240 180" className={className} aria-hidden="true">
      <path
        d="M40 105 C 38 66, 82 44, 126 50 C 178 57, 208 84, 202 118 C 196 152, 140 166, 96 158 C 56 151, 42 134, 40 105 Z"
        fill="var(--color-lime-soft)"
      />
      <circle cx="106" cy="112" r="36" {...stroke} />
      <path d="M84 88 C 92 104, 92 122, 86 134" {...stroke} strokeWidth="2.5" />
      <path d="M128 88 C 122 104, 122 122, 127 134" {...stroke} strokeWidth="2.5" />
      <path d="M106 76 C 100 68, 100 60, 106 48" {...stroke} />
      <path d="M106 76 L 92 70 M106 76 L 120 70 M106 76 L 98 84 M106 76 L 114 84" {...stroke} strokeWidth="2.5" />
      <path d="M106 56 C 92 52, 82 42, 80 32 C 94 32, 104 40, 106 48" {...stroke} strokeWidth="2.5" />
      <circle cx="164" cy="126" r="20" {...stroke} />
      <path d="M164 106 L 158 100 M164 106 L 170 100" {...stroke} strokeWidth="2.5" />
    </svg>
  );
}

function Papriky({ className }: IllProps) {
  return (
    <svg viewBox="0 0 240 180" className={className} aria-hidden="true">
      <path
        d="M52 96 C 48 62, 88 40, 134 46 C 184 52, 200 82, 196 114 C 192 148, 142 164, 100 156 C 66 149, 55 126, 52 96 Z"
        fill="var(--color-terra-soft)"
      />
      <path
        d="M112 58 C 132 54, 150 66, 152 88 C 154 112, 142 138, 120 148 C 100 138, 88 112, 90 88 C 92 68, 98 61, 112 58 Z"
        {...stroke}
      />
      <path d="M104 74 C 100 90, 102 114, 110 132" {...stroke} strokeWidth="2.5" />
      <path d="M120 56 C 118 46, 122 38, 132 32" {...stroke} />
      <path d="M132 32 C 140 38, 140 46, 134 52 C 128 50, 124 44, 124 38 Z" {...stroke} strokeWidth="2.5" />
    </svg>
  );
}

function OkurkyATykve({ className }: IllProps) {
  return (
    <svg viewBox="0 0 240 180" className={className} aria-hidden="true">
      <path
        d="M44 100 C 42 66, 84 46, 128 50 C 178 55, 202 82, 198 114 C 194 148, 140 164, 96 157 C 58 151, 46 130, 44 100 Z"
        fill="var(--color-lime-soft)"
      />
      <path
        d="M66 128 C 88 146, 128 144, 152 122 C 172 104, 178 84, 172 72 C 160 70, 138 76, 118 92 C 96 110, 78 122, 66 128 Z"
        {...stroke}
      />
      <path d="M92 122 C 108 116, 130 102, 146 88" {...stroke} strokeWidth="2.5" />
      <path d="M172 72 C 176 62, 184 56, 194 56" {...stroke} />
      <path
        d="M182 44 C 190 42, 196 46, 196 52 C 196 58, 190 61, 185 58 C 181 55, 181 49, 185 46"
        {...stroke}
        strokeWidth="2.5"
      />
      <path d="M60 96 C 52 82, 56 66, 70 58 C 82 66, 84 82, 76 94" {...stroke} strokeWidth="2.5" />
    </svg>
  );
}

function Zelenina({ className }: IllProps) {
  return (
    <svg viewBox="0 0 240 180" className={className} aria-hidden="true">
      <path
        d="M48 98 C 46 64, 88 44, 132 48 C 182 53, 202 82, 198 114 C 194 148, 138 164, 94 156 C 58 149, 50 128, 48 98 Z"
        fill="var(--color-mint)"
      />
      <ellipse cx="120" cy="118" rx="40" ry="34" {...stroke} />
      <path d="M104 88 C 96 68, 96 52, 102 38" {...stroke} />
      <path d="M120 84 C 120 62, 122 48, 126 34" {...stroke} />
      <path d="M136 88 C 142 70, 146 56, 152 44" {...stroke} />
      <path d="M102 38 C 92 44, 86 52, 84 62 C 96 62, 104 54, 106 46" {...stroke} strokeWidth="2.5" />
      <path d="M126 34 C 118 28, 108 26, 100 28" {...stroke} strokeWidth="2.5" />
      <path d="M152 44 C 160 40, 168 40, 174 44 C 168 52, 160 56, 152 54" {...stroke} strokeWidth="2.5" />
      <path d="M112 152 L 110 160 M128 152 L 130 160" {...stroke} strokeWidth="2.5" />
    </svg>
  );
}

function Bylinky({ className }: IllProps) {
  return (
    <svg viewBox="0 0 240 180" className={className} aria-hidden="true">
      <path
        d="M50 100 C 48 66, 88 46, 130 50 C 180 55, 200 84, 196 116 C 192 148, 138 162, 96 155 C 60 148, 52 128, 50 100 Z"
        fill="var(--color-mint)"
      />
      <path d="M96 150 C 96 118, 98 92, 104 68" {...stroke} />
      <path d="M104 68 C 100 58, 101 48, 106 40 C 111 48, 112 58, 108 66 Z" {...stroke} strokeWidth="2.5" />
      <path d="M100 92 C 92 88, 87 82, 86 74" {...stroke} strokeWidth="2.5" />
      <path d="M99 116 C 91 113, 86 108, 84 101" {...stroke} strokeWidth="2.5" />
      <path d="M128 152 C 128 124, 130 100, 136 78" {...stroke} />
      <ellipse cx="139" cy="66" rx="7" ry="12" {...stroke} strokeWidth="2.5" />
      <ellipse cx="127" cy="88" rx="5" ry="9" transform="rotate(-15 127 88)" {...stroke} strokeWidth="2.5" />
      <ellipse cx="149" cy="88" rx="5" ry="9" transform="rotate(15 149 88)" {...stroke} strokeWidth="2.5" />
      <path d="M158 150 C 158 128, 160 110, 164 94" {...stroke} />
      <path d="M162 110 C 170 106, 174 100, 175 92" {...stroke} strokeWidth="2.5" />
      <path d="M160 128 C 152 125, 148 120, 147 113" {...stroke} strokeWidth="2.5" />
    </svg>
  );
}

function Kvetiny({ className }: IllProps) {
  return (
    <svg viewBox="0 0 240 180" className={className} aria-hidden="true">
      <path
        d="M46 100 C 44 66, 86 46, 130 50 C 180 55, 202 84, 198 116 C 194 148, 138 162, 94 155 C 58 148, 48 128, 46 100 Z"
        fill="var(--color-terra-soft)"
      />
      <circle cx="118" cy="74" r="11" {...stroke} />
      <ellipse cx="118" cy="48" rx="10" ry="13" {...stroke} strokeWidth="2.8" />
      <ellipse cx="142" cy="66" rx="10" ry="13" transform="rotate(72 142 66)" {...stroke} strokeWidth="2.8" />
      <ellipse cx="133" cy="94" rx="10" ry="13" transform="rotate(144 133 94)" {...stroke} strokeWidth="2.8" />
      <ellipse cx="103" cy="94" rx="10" ry="13" transform="rotate(-144 103 94)" {...stroke} strokeWidth="2.8" />
      <ellipse cx="94" cy="66" rx="10" ry="13" transform="rotate(-72 94 66)" {...stroke} strokeWidth="2.8" />
      <path d="M118 106 C 118 124, 116 138, 112 150" {...stroke} />
      <path d="M115 128 C 104 126, 97 120, 95 111 C 106 110, 113 116, 115 122" {...stroke} strokeWidth="2.5" />
      <circle cx="170" cy="118" r="7" {...stroke} strokeWidth="2.8" />
      <path d="M170 104 L170 96 M180 111 L187 107 M180 125 L187 129 M160 111 L153 107 M160 125 L153 129 M170 132 L170 140" {...stroke} strokeWidth="2.5" />
      <path d="M170 140 C 170 146, 169 150, 167 154" {...stroke} strokeWidth="2.5" />
    </svg>
  );
}

const MAP: Record<CategoryId, (p: IllProps) => React.ReactElement> = {
  rajcata: Rajcata,
  papriky: Papriky,
  "okurky-a-tykve": OkurkyATykve,
  zelenina: Zelenina,
  bylinky: Bylinky,
  kvetiny: Kvetiny,
};

export default function CategoryIllustration({
  id,
  className = "",
}: {
  id: CategoryId;
  className?: string;
}) {
  const Ill = MAP[id];
  return <Ill className={className} />;
}
