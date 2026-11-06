import { site } from "@/lib/site";

// Sticky errands bar on phones: reserve, order, call, directions — one tap each.
export function ActionBar() {
  const items = [
    { href: site.reserve, label: "Reserve", external: true, primary: true },
    { href: site.order, label: "Order", external: true },
    { href: `tel:${site.phone.tel}`, label: "Call" },
    { href: site.directions, label: "Directions", external: true },
  ];
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-cream/10 bg-night/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <ul className="grid grid-cols-4">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              {...(it.external ? { target: "_blank", rel: "noopener" } : {})}
              className={`flex h-14 items-center justify-center text-sm font-semibold ${it.primary ? "bg-tulip text-white" : "text-cream"}`}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
