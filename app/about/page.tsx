import type { Metadata } from "next";
import Image from "next/image";
import { ReserveButton } from "@/components/Ctas";
import { ArchReveal, Reveal } from "@/components/Reveal";
import { ReviewsSection } from "@/components/Sections";
import { photos } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Bosphorous opened Central Florida's original Turkish restaurant in 2004. Now in Wesley Chapel at The Shops at Wiregrass: Halal meats, imported ingredients and polished casual service.",
  alternates: { canonical: "/about" },
};

// Copy below is verbatim from bosphorousrestaurant.com/about and the home page (2026-11-06).
const pillars = [
  {
    label: "Our concept",
    title: "Authentic & Fresh",
    text: "Inside each of our restaurants you will find invitingly warm color tones accented with one of a kind Turkish ebru paintings, silk carpets, handmade Turkish glassware, fragrant aromas, fresh ingredients, and authentic Turkish hospitality.",
    photo: photos.dining,
  },
  {
    label: "Our food",
    title: "Turkish taste",
    text: "The Turkish food you will come to love is carefully hand crafted by our experienced Chefs and their culinary teams. At Bosphorous Turkish Cuisine, we labor each and every day using only Halal meats which are fresh, never frozen. The freshest vegetables, and most authentic Mediterranean ingredients, many of which we import directly from Turkey, are used in our dips, salads, and side plates.",
    photo: photos.wcMeze,
  },
  {
    label: "Service",
    title: "Polished casual",
    text: "We like to say we're “polished casual.” As owners we're far from “stuffy,” but you will be treated to some of the best servers in the business. Hand pulled crystal stemware, quality plate ware and utensils.",
    photo: photos.wcAdanaSkewers,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-18">
      <header className="mx-auto grid max-w-7xl items-end gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div>
          <p className="label text-brass">About Bosphorous</p>
          <h1 className="font-display mt-4 text-5xl font-light leading-[0.95] md:text-7xl">
            A strait between two continents. A table between friends.
          </h1>
        </div>
        <p className="font-display text-xl leading-snug text-cream/85 md:text-2xl">
          At Bosphorous, we have a passion for great Mediterranean food and great friends. {site.story}
        </p>
      </header>

      <section aria-labelledby="since-heading" className="bg-plaster py-24 text-ink">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
          <Reveal className="md:col-span-5">
            <p className="font-display text-[clamp(5rem,14vw,10rem)] font-light leading-none text-tulip">2004</p>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-7">
            <h2 id="since-heading" className="font-display text-3xl md:text-5xl">
              Central Florida&rsquo;s original Turkish restaurant, now at Wiregrass
            </h2>
            <p className="mt-6 text-lg">
              Bosphorous is the original Turkish Restaurant in Central Florida, opening in 2004. Today the
              family of restaurants reaches from Winter Park, Dr. Phillips, Lake Nona and Winter Garden to South Tampa, St.
              Pete and Wesley Chapel, where our newest dining room opened on Paseo Drive at {site.address.center}.
            </p>
            <p className="mt-4 text-lg">
              Our focus is Anatolian cuisine: a wonderful variety of fresh salads, hand carved Halal meats, made to order
              breads and pides, exquisitely prepared and served in a warm authentic Turkish atmosphere.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="What we stand for" className="py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-5 md:px-8">
          {pillars.map((p, i) => (
            <div key={p.label} className="grid items-center gap-10 md:grid-cols-2">
              <ArchReveal className={`relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                <Image src={p.photo.src} alt={p.photo.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover arch" />
              </ArchReveal>
              <Reveal>
                <p className="label text-brass">{p.label}</p>
                <h2 className="font-display mt-3 text-4xl md:text-5xl">{p.title}</h2>
                <p className="mt-6 text-lg text-cream/85">{p.text}</p>
              </Reveal>
            </div>
          ))}
          <div className="text-center">
            <ReserveButton size="lg" />
          </div>
        </div>
      </section>

      <ReviewsSection />
    </div>
  );
}
