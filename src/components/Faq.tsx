import { FAQ } from "@/data/faq";

export default function Faq() {
  return (
    <div className="space-y-3">
      {FAQ.map((item) => (
        <details
          key={item.otazka}
          className="group rounded-card border border-line bg-paper px-5 shadow-soft open:pb-5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
            {item.otazka}
            <svg
              viewBox="0 0 20 20"
              className="h-5 w-5 shrink-0 text-leaf transition-transform group-open:rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M10 4v12M4 10h12" />
            </svg>
          </summary>
          <p className="max-w-prose text-sm leading-relaxed text-muted">
            {item.odpoved}
          </p>
        </details>
      ))}
    </div>
  );
}
