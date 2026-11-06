// Every fact here traces to clients/bosphorous-wesley-chapel/intake.md (research 2026-11-06).
export const site = {
  url: "https://site-bosphorous-wesley-chapel.vercel.app",
  name: "Bosphorous Turkish Cuisine – Wesley Chapel",
  shortName: "Bosphorous Wesley Chapel",
  brand: "Bosphorous Turkish Cuisine",
  // Brand home page (bosphorousrestaurant.com), verbatim.
  story:
    "“Bosphorous” originates from the strait that lies in the center of Istanbul and connects Europe to Asia. Fragrant aromas, fresh ingredients, and family-like hospitality will have you wondering when you arrived in Turkey!",
  phone: { display: "(727) 634-3006", tel: "+17276343006" },
  email: "Wesleychapel@bosphorousrestaurant.com",
  address: {
    street: "28330 Paseo Drive, Unit 105",
    city: "Wesley Chapel",
    region: "FL",
    zip: "33543",
    center: "The Shops at Wiregrass",
  },
  geo: { lat: 28.1883665, lng: -82.3475202 },
  directions: "https://maps.google.com/?cid=2992378432297668591",
  reserve:
    "https://www.opentable.com/restaurant/profile/1540111/reserve?covers=2&restref=1540111&partysize=2&lang=en-US",
  order: "https://order.toasttab.com/online/bosphorous-turkish-cuisine-tampa-wesley-chapel",
  giftCards: "https://www.bosphorousrestaurant.com/gift-cards",
  groupDining: "https://www.bosphorousrestaurant.com/group-dining",
  careers:
    "https://recruiting.paylocity.com/recruiting/jobs/All/5f6e5878-6840-4315-aea8-78f9f56feba1/Bosphorous-Turkish-Cuisine---Wesley-Chapel",
  brandSite: "https://www.bosphorousrestaurant.com/",
  facebook: "https://facebook.com/BosphorousTurkishCuisine",
  // Google Business Profile, 2026-11-06.
  rating: { value: 4.5, count: 72 },
  priceRange: "$$$",
  // Google Business Profile hours, index 0 = Sunday. 24h strings.
  hours: [
    { open: "11:00", close: "21:00" },
    { open: "15:00", close: "21:00" },
    { open: "15:00", close: "21:00" },
    { open: "15:00", close: "21:00" },
    { open: "15:00", close: "21:00" },
    { open: "15:00", close: "22:00" },
    { open: "11:00", close: "22:00" },
  ],
} as const;

export const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function fmtTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hr = h % 12 === 0 ? 12 : h % 12;
  return m ? `${hr}:${String(m).padStart(2, "0")} ${suffix}` : `${hr} ${suffix}`;
}

// Grouped rows for display: Mon–Thu, Fri, Sat, Sun.
export const hoursRows = [
  { label: "Monday – Thursday", ...site.hours[1] },
  { label: "Friday", ...site.hours[5] },
  { label: "Saturday", ...site.hours[6] },
  { label: "Sunday", ...site.hours[0] },
];

export const nav = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Visit" },
];
