import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, stagger, viewport } from "./motion";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={`mx-auto w-full max-w-6xl scroll-mt-20 px-6 pt-0 pb-16 sm:pb-20 ${className}`}
    >
      {(eyebrow || title) && (
        <motion.div variants={fadeUp} className="mb-10">
          {eyebrow && (
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
          )}
        </motion.div>
      )}
      {children}
    </motion.section>
  );
}
