import menuData from "./menu.json";

export type MenuItem = { name: string; desc: string; price: string };
export type MenuSection = { id: string; title: string; turkish: string; items: MenuItem[] };
export const menu = menuData as { source: string; captured: string; note: string; sections: MenuSection[] };

export function priceOf(name: string) {
  for (const s of menu.sections) for (const i of s.items) if (i.name === name) return i.price;
  throw new Error(`Menu item not found: ${name}`);
}

export type Photo = { src: string; alt: string; w: number; h: number; origin: "wesley-chapel" | "brand" };

// origin "wesley-chapel" = photos from this location's Google Business Profile;
// "brand" = food photography from bosphorousrestaurant.com (same menu across locations).
export const photos = {
  storefront: { src: "/photos/wc-storefront.webp", alt: "Bosphorous Turkish Cuisine storefront at 28330 Paseo Drive, Wesley Chapel", w: 1200, h: 1600, origin: "wesley-chapel" },
  bar: { src: "/photos/wc-bar.webp", alt: "The blue-and-white tiled bar with leather stools under a carved lattice canopy — Bosphorous Wesley Chapel", w: 1600, h: 1200, origin: "wesley-chapel" },
  dining: { src: "/photos/wc-dining-room.webp", alt: "The dining room at Bosphorous Wesley Chapel, tufted blue chairs and wood tables", w: 901, h: 1600, origin: "wesley-chapel" },
  wcMeze: { src: "/photos/wc-meze-lavas.webp", alt: "Lavas bread over a mixed appetizer plate at Bosphorous Wesley Chapel", w: 900, h: 1600, origin: "wesley-chapel" },
  wcBeyti: { src: "/photos/wc-beyti.webp", alt: "Special Beyti with tomato and yogurt sauces and pickled vegetables", w: 1600, h: 1600, origin: "wesley-chapel" },
  wcKebab: { src: "/photos/wc-kebab-plate.webp", alt: "A chargrilled kebab plate with rice pilaf, carrots, beets and red onion at Bosphorous Wesley Chapel", w: 1200, h: 1600, origin: "wesley-chapel" },
  wcAdana: { src: "/photos/wc-adana-rice.webp", alt: "Adana kebab over rice pilaf at Bosphorous Wesley Chapel", w: 1600, h: 1200, origin: "wesley-chapel" },
  wcAdanaSkewers: { src: "/photos/wc-adana-skewers.webp", alt: "Two Adana kebab skewers over rice pilaf at Bosphorous Wesley Chapel", w: 900, h: 1600, origin: "wesley-chapel" },
  wcLavas: { src: "/photos/wc-lavas.webp", alt: "A puffed lavas bread on a wooden board at Bosphorous Wesley Chapel", w: 1200, h: 1600, origin: "wesley-chapel" },
  lavas: { src: "/photos/lavas.webp", alt: "Lavas, the signature hollow bread baked to order", w: 1600, h: 1181, origin: "brand" },
  beyti: { src: "/photos/special-beyti.webp", alt: "Special Beyti kebab wrapped in pita with tomato and yogurt sauces", w: 1600, h: 1246, origin: "brand" },
  lambShank: { src: "/photos/lamb-shank.webp", alt: "Lamb shank braised five hours with carrots, onions and bell peppers", w: 1600, h: 1282, origin: "brand" },
  kunefe: { src: "/photos/kunefe.webp", alt: "Künefe, shredded filo with sweet Turkish cheese and pistachios", w: 1600, h: 1067, origin: "brand" },
  mixedAppetizer: { src: "/photos/mixed-appetizer.webp", alt: "Mixed appetizer with humus, babaganoush, ezme and lavas", w: 1600, h: 1598, origin: "brand" },
  baklava: { src: "/photos/baklava.webp", alt: "House-made pistachio baklava", w: 1600, h: 1468, origin: "brand" },
  humus: { src: "/photos/humus.webp", alt: "Humus with olive oil and tomato", w: 1600, h: 1203, origin: "brand" },
  mixedGrill: { src: "/photos/mixed-grill.webp", alt: "Mixed grill platter of kebabs and köfte", w: 1162, h: 1600, origin: "brand" },
  lahmacun: { src: "/photos/lahmacun.webp", alt: "Lahmacun, Turkish-style thin crust with ground lamb", w: 1600, h: 1123, origin: "brand" },
  grapeLeaves: { src: "/photos/stuffed-grape-leaves.webp", alt: "Stuffed grape leaves with lemon and tomato", w: 1600, h: 1043, origin: "brand" },
  sigara: { src: "/photos/sigara-boregi.webp", alt: "Sigara böreği, crispy filo rolls with feta and parsley", w: 1600, h: 1067, origin: "brand" },
  shrimp: { src: "/photos/shrimp-saute.webp", alt: "Shrimp sauté with rice pilaf", w: 1600, h: 1050, origin: "brand" },
  moussaka: { src: "/photos/moussaka.webp", alt: "Moussaka with béchamel and kaşar cheese", w: 1600, h: 1067, origin: "brand" },
  okra: { src: "/photos/okra-saute.webp", alt: "Okra sauté in a savory tomato sauce", w: 1600, h: 1374, origin: "brand" },
  whiteBean: { src: "/photos/white-bean-salad.webp", alt: "White bean salad with tomato, peppers and parsley", w: 1600, h: 1383, origin: "brand" },
  shepherd: { src: "/photos/shepherd-salad.webp", alt: "Fresh salad with feta, bulgur and vegetables", w: 1600, h: 1067, origin: "brand" },
  feta: { src: "/photos/feta-plate.webp", alt: "Feta plate with peppadews, cucumber and tomato", w: 1600, h: 1067, origin: "brand" },
  pineapple: { src: "/photos/turkish-pineapple.webp", alt: "Turkish pineapple delight, sponge cake layered with pineapple and mousse", w: 1600, h: 1299, origin: "brand" },
  grill: { src: "/photos/kebabs-on-the-grill.webp", alt: "Kebab skewers over the flames of the grill", w: 1600, h: 733, origin: "brand" },
  mojito: { src: "/photos/bar-blueberry-mojito.webp", alt: "A blueberry mojito from the Bosphorous bar", w: 554, h: 416, origin: "brand" },
  oldFashioned: { src: "/photos/bar-old-fashioned.webp", alt: "An old fashioned from the Bosphorous bar", w: 648, h: 482, origin: "brand" },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

// Signature dishes on the home page: names and prices from the Wesley Chapel Toast menu.
export const signatures: { item: string; photo: PhotoKey; note: string }[] = [
  { item: "Lavas", photo: "lavas", note: "Our signature, baked-to-order bread creation." },
  { item: "Special Beyti", photo: "beyti", note: "Hand-carved lamb, chargrilled and wrapped in our special pita." },
  { item: "Lamb Shank", photo: "lambShank", note: "Braised slowly over 5 hours until it falls off the bone." },
  { item: "Mixed Appetizer", photo: "mixedAppetizer", note: "Humus, babaganoush, sautéed eggplant, muhammara, ezme, cacik, haydari and dolma." },
  { item: "Mixed Grill", photo: "mixedGrill", note: "Doner, Adana, sis and köfte — chicken and lamb — over rice pilaf." },
  { item: "Kunefe", photo: "kunefe", note: "Sweet Turkish cheese in shredded filo, syrup and pistachios. Perfect for sharing." },
];

// Real Google reviews of the Wesley Chapel location (assets/reviews.md), verbatim.
export const reviews = [
  {
    name: "roro boudib",
    stars: 5,
    text: "Food was SO good!! Everything we ordered was amazing and tasted super fresh. Our waiter told us that nothing is frozen except the ice cream, and you can honestly taste the difference. The staff was so welcoming and attentive and made sure we were enjoying everything throughout our meal. The food came out pretty quickly too, which was a plus! Such a great experience overall, we’ll definitely be back!",
  },
  {
    name: "Angela Birtwell",
    stars: 5,
    text: "After going to their location in Winter park we have been anticipating their opening in Wesley Chapel for some time.  We are so excited to have them so close to us!  The food was delicious, fresh and cooked perfectly.  The hospitality was great. Our servers Becca and Jorge were attentive and it was an overall great experience and we will definitely be back.",
  },
];
