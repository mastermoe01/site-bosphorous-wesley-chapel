import Image from "next/image";
import Link from "next/link";
import { OrderButton, ReserveButton } from "@/components/Ctas";
import { ArchReveal, Drift, Reveal } from "@/components/Reveal";
import { ReviewsSection, VisitSection } from "@/components/Sections";
import { TodayHours } from "@/components/TodayHours";
import { VideoSlot } from "@/components/VideoSlot";
import { HeroTiles } from "@/components/three/HeroTiles";
import { photos, priceOf, signatures } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-18">
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[46%] [mask-image:linear-gradient(to_bottom,transparent,black_40%)] md:h-[55%]">
          <HeroTiles />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgb(31_63_143/0.45),transparent_60%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-12 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:pb-32 md:pt-20">
          <div>
            <p className="label text-brass">Now open at {site.address.center}</p>
            <h1 className="font-display mt-5 text-[clamp(3.25rem,9vw,7.5rem)] font-light leading-[0.92] tracking-tight">
              Turkish cuisine,
              <br />
              <em className="font-normal text-strait">Wesley Chapel.</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-cream/85">
              Halal meats fresh, never frozen. Lavas baked to order. Chargrilled kebabs and house-made baklava. From the family that
              opened Central Florida&rsquo;s original Turkish restaurant in 2004.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ReserveButton size="lg" />
              <OrderButton size="lg" />
            </div>
            <p className="mt-6 text-sm text-cream/70">
              <TodayHours className="font-semibold text-cream" /> · {site.address.street}
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <div className="relative aspect-[3/4] overflow-hidden arch ring-1 ring-cream/15">
              <Image
                src={photos.storefront.src}
                alt={photos.storefront.alt}
                fill
                priority
                sizes="(min-width: 768px) 30vw, 80vw"
                className="object-cover"
              />
            </div>
            <Image
              src="/brand/tulip-mark.png"
              alt=""
              width={935}
              height={479}
              className="absolute -bottom-5 -left-6 w-24 drop-shadow-xl md:w-28"
            />
          </div>
        </div>
      </section>

      {/* Story strip */}
      <section aria-labelledby="story-heading" className="bg-plaster py-24 text-ink">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
          <Reveal className="md:col-span-5">
            <p className="label text-brass-deep">Authentic &amp; fresh</p>
            <h2 id="story-heading" className="font-display mt-3 text-4xl leading-tight md:text-6xl">
              Where Europe meets Asia.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-7">
            <p className="font-display text-2xl leading-snug md:text-3xl">{site.story}</p>
            <ul className="mt-10 grid gap-6 text-base sm:grid-cols-3">
              <li className="border-t-2 border-tulip pt-4">
                <strong className="block">Halal, never frozen</strong>
                Only Halal meats, fresh, never frozen.
              </li>
              <li className="border-t-2 border-cobalt pt-4">
                <strong className="block">Imported from Turkey</strong>
                Many of our ingredients come straight from Turkey.
              </li>
              <li className="border-t-2 border-brass pt-4">
                <strong className="block">Vegetarian &amp; gluten-free</strong>
                Plentiful options on every part of the menu.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Signature dishes */}
      <section aria-labelledby="signatures-heading" className="py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="label text-brass">From the Wesley Chapel menu</p>
              <h2 id="signatures-heading" className="font-display mt-3 text-4xl md:text-6xl">
                What to order first
              </h2>
            </Reveal>
            <Link href="/menu" className="font-semibold text-strait underline-offset-4 hover:underline">
              See the full menu →
            </Link>
          </div>
          <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {signatures.map((s, i) => {
              const p = photos[s.photo];
              return (
                <li key={s.item}>
                  <Reveal delay={(i % 3) * 0.08}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-night-2">
                      <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                    <div className="mt-5 flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl">{s.item}</h3>
                      <span className="tnum font-semibold text-brass">${priceOf(s.item)}</span>
                    </div>
                    <p className="mt-2 text-cream/75">{s.note}</p>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* The room */}
      <section aria-labelledby="room-heading" className="tile-pattern relative py-24">
        <div className="absolute inset-0 bg-night/80" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <ArchReveal className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src={photos.bar.src} alt={photos.bar.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </ArchReveal>
          <Reveal>
            <p className="label text-brass">The room</p>
            <h2 id="room-heading" className="font-display mt-3 text-4xl md:text-6xl">
              Bar, bistro &amp; restaurant
            </h2>
            <p className="mt-6 text-lg text-cream/85">
              Blue-and-white tile wraps the bar under a carved lattice canopy. Leather stools, tufted chairs, warm wood. We like
              to say we&rsquo;re &ldquo;polished casual&rdquo;: hand pulled crystal stemware, quality plate ware, and some of the best
              servers in the business.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src={photos.dining.src} alt={photos.dining.alt} fill sizes="(min-width: 768px) 20vw, 45vw" className="object-cover" />
              </div>
              <Drift className="relative aspect-[3/4] rounded-2xl" distance={40}>
                <div className="relative h-full w-full">
                  <Image src={photos.wcLavas.src} alt={photos.wcLavas.alt} fill sizes="(min-width: 768px) 20vw, 45vw" className="object-cover" />
                </div>
              </Drift>
            </div>
          </Reveal>
        </div>
      </section>

      <VideoSlot />
      <ReviewsSection />

      {/* Groups & gifts */}
      <section aria-labelledby="groups-heading" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 md:px-8">
          <Reveal className="h-full">
            <div className="relative h-full overflow-hidden rounded-3xl bg-night-2 p-10">
              <Image src={photos.grill.src} alt="" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-r from-night-2 via-night-2/90 to-night-2/30" />
              <div className="relative">
                <p className="label text-brass">Party with us</p>
                <h2 id="groups-heading" className="font-display mt-3 text-3xl md:text-4xl">
                  Group dining
                </h2>
                <p className="mt-4 max-w-md text-cream/85">
                  Private parties and large groups: talk to the Special Events team about your date, party size and budget.
                </p>
                <a href={site.groupDining} target="_blank" rel="noopener" className="mt-6 inline-block font-semibold text-strait underline-offset-4 hover:underline">
                  Make an inquiry →
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="h-full">
            <div className="relative h-full overflow-hidden rounded-3xl bg-night-2 p-10">
              <Image src={photos.baklava.src} alt="" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-r from-night-2 via-night-2/90 to-night-2/30" />
              <div className="relative">
                <p className="label text-brass">Share the taste of Turkey</p>
                <h2 className="font-display mt-3 text-3xl md:text-4xl">Gift cards</h2>
                <p className="mt-4 max-w-md text-cream/85">
                  Bosphorous gift cards, picked up at a location or mailed to you.
                </p>
                <a href={site.giftCards} target="_blank" rel="noopener" className="mt-6 inline-block font-semibold text-strait underline-offset-4 hover:underline">
                  Buy a gift card →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <VisitSection />
    </>
  );
}
