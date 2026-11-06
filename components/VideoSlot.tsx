import { existsSync } from "node:fs";
import path from "node:path";

// Video-slot contract (docs/design-principles.md §5): a section renders only when its file
// exists in public/videos/<subject-slug>/ at build time. Click-to-play from the poster.
export const SUBJECT = "28330-paseo-dr";

const hasFile = (file: string) => existsSync(path.join(process.cwd(), "public", "videos", SUBJECT, file));

export function availableVideos() {
  return (["walkthrough", "flyover"] as const)
    .filter((family) => hasFile(`${family}.mp4`))
    .map((family) => ({
      family,
      src: `/videos/${SUBJECT}/${family}.mp4`,
      poster: hasFile(`poster-${family}.jpg`) ? `/videos/${SUBJECT}/poster-${family}.jpg` : "/photos/wc-storefront.webp",
      title: family === "walkthrough" ? "Step inside" : "From above Wiregrass",
    }));
}

export function VideoSlot() {
  const videos = availableVideos();
  if (videos.length === 0) return null;
  return (
    <section aria-labelledby="inside-heading" className="bg-night py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="label text-brass">Wesley Chapel</p>
        <h2 id="inside-heading" className="font-display mt-3 text-4xl md:text-6xl">
          Inside Bosphorous Wesley Chapel
        </h2>
        <div className={`mt-10 grid gap-8 ${videos.length > 1 ? "md:grid-cols-2" : ""}`}>
          {videos.map((v) => (
            <figure key={v.family}>
              <video
                controls
                playsInline
                preload="metadata"
                poster={v.poster}
                className="aspect-video w-full rounded-2xl bg-night-2 object-cover"
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-sm text-cream/70">{v.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
