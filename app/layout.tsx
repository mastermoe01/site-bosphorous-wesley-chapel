import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});
const manrope = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Bosphorous Turkish Cuisine Wesley Chapel | Turkish Restaurant at The Shops at Wiregrass",
    template: "%s | Bosphorous Turkish Cuisine Wesley Chapel",
  },
  description:
    "Authentic Turkish cuisine at The Shops at Wiregrass: Halal meats fresh, never frozen, lavas baked to order, kebabs from the charcoal grill. Book a table or order pickup. 4.5★ on Google.",
  openGraph: { type: "website", siteName: site.name, locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0b1430" };

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${site.url}/#restaurant`,
  name: site.name,
  description: site.story,
  url: site.url,
  telephone: site.phone.tel,
  email: site.email,
  image: `${site.url}/photos/wc-storefront.webp`,
  servesCuisine: ["Turkish", "Mediterranean"],
  priceRange: site.priceRange,
  menu: `${site.url}/menu`,
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: site.directions,
  containedInPlace: { "@type": "ShoppingCenter", name: site.address.center },
  openingHoursSpecification: site.hours.map((h, i) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${days[i]}`,
    opens: h.open,
    closes: h.close,
  })),
  aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating.value, reviewCount: site.rating.count, bestRating: 5 },
  potentialAction: [
    { "@type": "ReserveAction", target: site.reserve },
    { "@type": "OrderAction", target: site.order },
  ],
  sameAs: [site.facebook, site.brandSite],
  parentOrganization: { "@type": "Organization", name: site.brand, url: site.brandSite },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only z-[60] rounded bg-tulip px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ActionBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
