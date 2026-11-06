"use client";

import { useSyncExternalStore } from "react";
import { fmtTime, site } from "@/lib/site";

// Computed in the browser (Eastern time) so the static page never goes stale.
function statusNow() {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
  const today = site.hours[now.getDay()];
  const mins = now.getHours() * 60 + now.getMinutes();
  const toMin = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3));
  if (mins >= toMin(today.open) && mins < toMin(today.close)) return `Open now · until ${fmtTime(today.close)}`;
  if (mins < toMin(today.open)) return `Opens today at ${fmtTime(today.open)}`;
  return `Closed now · opens ${fmtTime(site.hours[(now.getDay() + 1) % 7].open)} tomorrow`;
}

const subscribe = (cb: () => void) => {
  const id = window.setInterval(cb, 60_000);
  return () => window.clearInterval(id);
};

export function TodayHours({ className = "" }: { className?: string }) {
  const text = useSyncExternalStore(subscribe, statusNow, () => "Open 7 days");
  return <span className={className}>{text}</span>;
}
