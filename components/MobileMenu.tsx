"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden className="relative block h-3 w-5">
          <span className={`absolute left-0 h-0.5 w-5 bg-cream transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 h-0.5 w-5 bg-cream transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
        </span>
      </button>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="absolute inset-x-0 top-18 border-b border-cream/10 bg-night px-5 pb-8 pt-4">
          <ul className="space-y-1">
            <li>
              <Link href="/" className="font-display block py-3 text-3xl">
                Home
              </Link>
            </li>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="font-display block py-3 text-3xl">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-cream/70">
            {site.address.street}, {site.address.city} ·{" "}
            <a href={`tel:${site.phone.tel}`} className="underline">
              {site.phone.display}
            </a>
          </p>
        </nav>
      )}
    </div>
  );
}
