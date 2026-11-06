import Image from "next/image";
import Link from "next/link";
import { fmtTime, hoursRows, nav, site } from "@/lib/site";
import { CallLink, DirectionsLink } from "./Ctas";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-night pb-24 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <Image src="/brand/logo-wordmark.png" alt="Bosphorous Turkish Cuisine" width={460} height={99} className="h-10 w-auto" />
          <p className="mt-4 text-sm text-cream/70">
            Wesley Chapel, at {site.address.center}. Part of {site.brand}, Central Florida&rsquo;s original Turkish restaurant since 2004.
          </p>
        </div>
        <div>
          <h2 className="label text-brass">Visit</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-cream/85">
            <p>
              <DirectionsLink>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.zip}
              </DirectionsLink>
            </p>
            <p>
              <CallLink />
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="break-all underline-offset-4 hover:underline">
                {site.email}
              </a>
            </p>
          </address>
        </div>
        <div>
          <h2 className="label text-brass">Hours</h2>
          <dl className="tnum mt-4 space-y-2 text-sm text-cream/85">
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
        <div>
          <h2 className="label text-brass">More</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/85">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="underline-offset-4 hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.giftCards} target="_blank" rel="noopener" className="underline-offset-4 hover:underline">
                Gift cards
              </a>
            </li>
            <li>
              <a href={site.careers} target="_blank" rel="noopener" className="underline-offset-4 hover:underline">
                Careers in Wesley Chapel
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener" className="underline-offset-4 hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href={site.brandSite} target="_blank" rel="noopener" className="underline-offset-4 hover:underline">
                All Bosphorous locations
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-cream/50 md:px-8">
          © {site.brand}. All rights reserved. Menu prices from online ordering and subject to change.
        </p>
      </div>
    </footer>
  );
}
