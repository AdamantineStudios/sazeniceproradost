import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="font-display text-7xl font-semibold text-brand-gradient">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold">
        Tahle stránka nevyklíčila
      </h1>
      <p className="mx-auto mt-3 max-w-md text-muted">
        Buď jsme ji přesadili jinam, nebo semínko vůbec nevzešlo. Zkuste to
        z domovské stránky nebo rovnou z nabídky.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-terra px-6 py-3 font-semibold text-white shadow-soft transition-colors hover:bg-terra-deep"
        >
          Na domovskou stránku
        </Link>
        <Link
          href="/nabidka/"
          className="rounded-full border-2 border-leaf px-6 py-3 font-semibold text-leaf-deep transition-colors hover:bg-mint"
        >
          Prohlédnout nabídku
        </Link>
      </div>
    </Container>
  );
}
