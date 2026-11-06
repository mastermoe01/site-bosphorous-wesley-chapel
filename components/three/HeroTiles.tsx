"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

// Static Iznik pattern: shown while the scene loads and whenever WebGL is unavailable.
export function TilesFallback() {
  return <div className="tile-pattern h-full w-full opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_55%)]" />;
}

const TileScene = dynamic(() => import("./TileScene"), { ssr: false, loading: () => <TilesFallback /> });

type Mode = "none" | "still" | "small" | "full";
let cached: Mode | null = null;

function detect(): Mode {
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (conn?.saveData) return "none";
  try {
    const c = document.createElement("canvas");
    const gl = (c.getContext("webgl2") || c.getContext("webgl")) as WebGLRenderingContext | null;
    if (!gl) return "none";
    const dbg = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : "";
    if (/swiftshader|llvmpipe|software/i.test(renderer)) return "none";
  } catch {
    return "none";
  }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "still";
  return window.matchMedia("(max-width: 767px)").matches ? "small" : "full";
}

const noop = () => () => {};
const getMode = () => (cached ??= detect());

export function HeroTiles() {
  const mode = useSyncExternalStore(noop, getMode, () => "none" as Mode);
  if (mode === "none") return <TilesFallback />;
  return <TileScene small={mode !== "full"} animate={mode !== "still"} />;
}
