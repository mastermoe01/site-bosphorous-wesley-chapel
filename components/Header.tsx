import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/site";
import { ReserveButton } from "./Ctas";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-night/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Bosphorous Turkish Cuisine Wesley Chapel — home">
          <Image src="/brand/logo-wordmark.png" alt="" width={460} height={99} priority className="h-8 w-auto md:h-9" />
          <span className="label hidden border-l border-cream/25 pl-3 text-[0.65rem] text-brass lg:inline">Wesley Chapel</span>
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-cream/80 transition-colors hover:text-cream">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <ReserveButton />
          </span>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
