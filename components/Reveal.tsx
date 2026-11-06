"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

// Position-only rise (never starts at opacity 0, so content can't get stuck invisible).
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ y: 32 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.85, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

// Arch unveil: the photo opens from the top like the facade's arch.
export function ArchReveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(14% 0 0 0 round 999px 999px 18px 18px)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0 round 999px 999px 18px 18px)" }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

// Slow vertical drift tied to scroll, for one photo per section at most.
export function Drift({ children, className = "", distance = 60 }: { children: ReactNode; className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={reduce ? undefined : { y }} className="h-[calc(100%+120px)] -mt-[60px]">
        {children}
      </motion.div>
    </div>
  );
}
