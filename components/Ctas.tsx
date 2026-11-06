import { site } from "@/lib/site";

type Size = "md" | "lg";
const pad: Record<Size, string> = { md: "px-5 py-3 text-sm", lg: "px-7 py-4 text-base" };

export function ReserveButton({ size = "md", className = "" }: { size?: Size; className?: string }) {
  return (
    <a
      href={site.reserve}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-tulip font-semibold text-white shadow-[0_10px_30px_-10px_rgb(230_30_37/0.7)] transition-colors hover:bg-tulip-deep ${pad[size]} ${className}`}
    >
      Book a table
      <span aria-hidden>→</span>
      <span className="sr-only">(OpenTable, opens in a new tab)</span>
    </a>
  );
}

export function OrderButton({ size = "md", tone = "dark", className = "" }: { size?: Size; tone?: "dark" | "light"; className?: string }) {
  const colors =
    tone === "dark"
      ? "border-cream/35 text-cream hover:border-cream hover:bg-cream/10"
      : "border-ink/30 text-ink hover:border-ink hover:bg-ink/5";
  return (
    <a
      href={site.order}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center justify-center gap-2 rounded-full border font-semibold transition-colors ${colors} ${pad[size]} ${className}`}
    >
      Order pickup
      <span className="sr-only">(Toast online ordering, opens in a new tab)</span>
    </a>
  );
}

export function CallLink({ className = "" }: { className?: string }) {
  return (
    <a href={`tel:${site.phone.tel}`} className={`underline-offset-4 hover:underline ${className}`}>
      {site.phone.display}
    </a>
  );
}

export function DirectionsLink({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return (
    <a href={site.directions} target="_blank" rel="noopener" className={`underline-offset-4 hover:underline ${className}`}>
      {children ?? (
        <>
          {site.address.street}, {site.address.city}, {site.address.region} {site.address.zip}
        </>
      )}
    </a>
  );
}
