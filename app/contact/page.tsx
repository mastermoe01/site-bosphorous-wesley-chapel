import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CallLink, DirectionsLink, OrderButton, ReserveButton } from "@/components/Ctas";
import { TodayHours } from "@/components/TodayHours";
import { fmtTime, hoursRows, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit & contact",
  description:
    "Bosphorous Turkish Cuisine, 28330 Paseo Drive, Unit 105, Wesley Chapel, FL 33543 at The Shops at Wiregrass. Hours, phone, reservations, pickup orders and directions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-18">
      <header className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <p className="label text-brass">Visit</p>
        <h1 className="font-display mt-4 text-5xl font-light md:text-8xl">See you at Wiregrass</h1>
        <p className="mt-6 text-lg text-cream/85">
          <TodayHours className="font-semibold text-cream" />
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ReserveButton size="lg" />
          <OrderButton size="lg" />
        </div>
      </header>

      <section aria-label="Address, phone and hours" className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 md:grid-cols-3 md:px-8">
        <div className="rounded-3xl bg-night-2 p-8">
          <h2 className="label text-brass">Address</h2>
          <address className="mt-4 text-lg not-italic">
            <DirectionsLink>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.zip}
            </DirectionsLink>
            <br />
            <span className="text-cream/70">{site.address.center}</span>
          </address>
          <a href={site.directions} target="_blank" rel="noopener" className="mt-4 inline-block font-semibold text-strait underline-offset-4 hover:underline">
            Get directions →
          </a>
        </div>
        <div className="rounded-3xl bg-night-2 p-8">
          <h2 className="label text-brass">Call or write</h2>
          <p className="mt-4 text-lg">
            <CallLink />
          </p>
          <p className="mt-2 break-all">
            <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
              {site.email}
            </a>
          </p>
          <p className="mt-4 text-sm text-cream/70">
            Planning a party?{" "}
            <a href={site.groupDining} target="_blank" rel="noopener" className="text-strait underline-offset-4 hover:underline">
              Group dining inquiries
            </a>
          </p>
        </div>
        <div className="rounded-3xl bg-night-2 p-8">
          <h2 className="label text-brass">Hours</h2>
          <dl className="tnum mt-4 space-y-2">
            {hoursRows.map((r) => (
              <div key={r.label} className="flex justify-between gap-4">
                <dt>{r.label}</dt>
                <dd>
                  {fmtTime(r.open)} – {fmtTime(r.close)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="message-heading" className="bg-plaster py-24 text-ink">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-4">
            <h2 id="message-heading" className="font-display text-4xl md:text-5xl">
              Send us a note
            </h2>
            <p className="mt-4 text-ink/75">Questions, feedback or a special request for your visit.</p>
          </div>
          <div className="md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
