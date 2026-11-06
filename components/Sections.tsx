import Image from "next/image";
import { photos, reviews } from "@/lib/content";
import { fmtTime, hoursRows, site } from "@/lib/site";
import { CallLink, DirectionsLink, OrderButton, ReserveButton } from "./Ctas";
import { Reveal } from "./Reveal";

export function Stars({ n, className = "" }: { n: number; className?: string }) {
  return (
    <span className={`text-brass ${className}`} aria-label={`${n} out of 5 stars`}>
      {"★".repeat(Math.round(n))}
    </span>
  );
}

export function ReviewsSection() {
  return (
    <section aria-labelledby="reviews-heading" className="bg-night-2 py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-brass">Guests in Wesley Chapel</p>
            <h2 id="reviews-heading" className="font-display mt-3 text-4xl md:text-6xl">
              “We’ll definitely be back.”
            </h2>
          </div>
          <p className="tnum text-cream/80">
            <span className="font-display text-5xl text-cream">{site.rating.value}</span>
            <span className="ml-2 align-top">
              <Stars n={5} /> <br />
              <span className="text-sm">{site.rating.count} Google reviews</span>
            </span>
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="h-full rounded-3xl border border-cream/10 bg-night p-8">
                <Stars n={r.stars} />
                <blockquote className="mt-4 text-lg leading-relaxed text-cream/90">“{r.text}”</blockquote>
                <figcaption className="mt-6 text-sm text-cream/60">
                  — {r.name}, Google review of Bosphorous Wesley Chapel
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisitSection() {
  return (
    <section aria-labelledby="visit-heading" className="bg-plaster py-24 text-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <Reveal>
          <p className="label text-brass-deep">Find us at {site.address.center}</p>
          <h2 id="visit-heading" className="font-display mt-3 text-4xl md:text-6xl">
            Paseo Drive, Unit 105
          </h2>
          <p className="mt-6 text-lg">
            <DirectionsLink className="underline decoration-ink/30" />
          </p>
          <p className="mt-2 text-lg">
            <CallLink className="underline decoration-ink/30" />
          </p>
          <dl className="tnum mt-8 max-w-sm divide-y divide-ink/10 border-y border-ink/10">
            {hoursRows.map((r) => (
              <div key={r.label} className="flex justify-between gap-4 py-3">
                <dt className="font-medium">{r.label}</dt>
                <dd>
                  {fmtTime(r.open)} – {fmtTime(r.close)}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <ReserveButton size="lg" />
            <OrderButton size="lg" tone="light" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[3/4] overflow-hidden arch">
            <Image src={photos.storefront.src} alt={photos.storefront.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
