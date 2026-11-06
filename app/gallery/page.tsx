import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { photos, type PhotoKey } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Inside Bosphorous Wesley Chapel and the dishes on its table: lavas, kebabs, meze, pide and Turkish desserts.",
  alternates: { canonical: "/gallery" },
};

const wesleyChapel: PhotoKey[] = ["bar", "dining", "wcMeze", "wcLavas", "wcAdana", "wcKebab", "wcAdanaSkewers", "wcBeyti"];
const kitchen: PhotoKey[] = [
  "lavas", "beyti", "lambShank", "mixedAppetizer", "humus", "mixedGrill", "lahmacun", "grapeLeaves", "sigara",
  "shrimp", "moussaka", "okra", "whiteBean", "shepherd", "feta", "kunefe", "baklava", "pineapple", "mojito", "oldFashioned",
];

function Grid({ keys }: { keys: PhotoKey[] }) {
  return (
    <ul className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>li]:mb-4">
      {keys.map((k) => {
        const p = photos[k];
        return (
          <li key={k} className="break-inside-avoid">
            <figure>
              <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 48vw" className="h-auto w-full rounded-2xl" />
              <figcaption className="mt-2 text-xs text-cream/60">{p.alt}</figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}

export default function GalleryPage() {
  return (
    <div className="pt-18">
      <header className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <p className="label text-brass">Gallery</p>
        <h1 className="font-display mt-4 text-6xl font-light md:text-8xl">At the table</h1>
      </header>
      <section aria-labelledby="wc-heading" className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <Reveal>
          <h2 id="wc-heading" className="font-display mb-8 text-3xl md:text-4xl">
            Wesley Chapel
          </h2>
        </Reveal>
        <Grid keys={wesleyChapel} />
      </section>
      <section aria-labelledby="kitchen-heading" className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <Reveal>
          <h2 id="kitchen-heading" className="font-display mb-8 text-3xl md:text-4xl">
            From the Bosphorous kitchen
          </h2>
        </Reveal>
        <Grid keys={kitchen} />
      </section>
    </div>
  );
}
