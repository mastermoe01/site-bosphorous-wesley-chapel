import type { Metadata } from "next";
import { OrderButton, ReserveButton } from "@/components/Ctas";
import { menu } from "@/lib/content";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The Bosphorous Wesley Chapel menu: meze and lavas, salads, pide, chicken, lamb and beef kebabs, sautés, seafood and Turkish desserts, with prices.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <div className="pt-18">
      <header className="tile-pattern relative">
        <div className="absolute inset-0 bg-night/80" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="label text-brass">Wesley Chapel</p>
          <h1 className="font-display mt-4 text-6xl font-light md:text-8xl">Menu</h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/85">
            Anatolian cuisine: fresh salads, hand carved Halal meats, made to order breads and pides. Vegetarian and gluten
            free options are plentiful.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <OrderButton size="lg" className="!border-tulip !bg-tulip !text-white hover:!bg-tulip-deep" />
            <ReserveButton size="lg" variant="outline" />
          </div>
        </div>
      </header>

      <nav aria-label="Menu sections" className="sticky top-18 z-30 border-b border-ink/10 bg-plaster/95 backdrop-blur">
        <ul className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-3 text-sm font-semibold text-ink md:px-8">
          {menu.sections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="hover:text-tulip">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bg-plaster text-ink">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          {menu.sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="border-b border-ink/10 py-14 last:border-0">
              <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <h2 id={`${s.id}-h`} className="font-display text-4xl md:text-5xl">
                    {s.title}
                  </h2>
                  <p className="font-display mt-2 text-xl italic text-brass-deep" lang="tr">
                    {s.turkish}
                  </p>
                </div>
                <ul className="grid gap-x-10 gap-y-7 md:col-span-8 md:grid-cols-2">
                  {s.items.map((it) => (
                    <li key={it.name}>
                      <div className="flex items-baseline gap-3">
                        <h3 className="text-lg font-semibold">{it.name}</h3>
                        <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-ink/25" />
                        <span className="tnum font-semibold text-brass-deep">${it.price}</span>
                      </div>
                      {it.desc && <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/75">{it.desc}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
          <p className="mt-8 text-sm text-ink/60">
            Prices as listed on Bosphorous Wesley Chapel online ordering. Items and prices are subject to change. Ask your
            server about the bar menu.
          </p>
        </div>
      </div>
    </div>
  );
}
