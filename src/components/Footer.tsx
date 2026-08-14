import Link from "next/link";
import { SITE } from "@/config";
import SprLogo from "./SprLogo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-sunken/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <SprLogo className="h-9 w-9" />
            <span className="font-display text-lg font-semibold">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Pěstování sazeniček pro nás, pro radost — a když zbyde, tak i pro
            ostatní. Rodinné pěstitelství na Plzeňsku.
          </p>
          <p className="mt-4 font-display text-sm italic text-leaf-deep">
            „{SITE.motto}“{" "}
            <span className="not-italic text-muted">— {SITE.mottoTranslation}</span>
          </p>
        </div>

        <nav aria-label="Patička — navigace">
          <h2 className="text-sm font-bold uppercase tracking-wider text-ink">Web</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link className="text-muted underline-offset-4 hover:text-leaf-deep hover:underline" href="/nabidka/">Nabídka sazenic</Link></li>
            <li><Link className="text-muted underline-offset-4 hover:text-leaf-deep hover:underline" href="/o-nas/">O nás</Link></li>
            <li><Link className="text-muted underline-offset-4 hover:text-leaf-deep hover:underline" href="/jak-nakoupit/">Jak nakoupit</Link></li>
            <li><Link className="text-muted underline-offset-4 hover:text-leaf-deep hover:underline" href="/kontakt/">Kontakt</Link></li>
            <li><Link className="text-muted underline-offset-4 hover:text-leaf-deep hover:underline" href="/poptavka/">Poptávka</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-ink">Kontakt</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a className="text-muted underline-offset-4 hover:text-leaf-deep hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
            <li>
              <a className="text-muted underline-offset-4 hover:text-leaf-deep hover:underline" href={SITE.instagram} rel="noopener">
                Instagram {SITE.instagramHandle}
              </a>
            </li>
            <li className="text-muted">{SITE.region} — osobní odběr</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-5 text-xs text-muted sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <p>Vypěstováno a vyrobeno s radostí na Plzeňsku 🌱</p>
        </div>
      </div>
    </footer>
  );
}
