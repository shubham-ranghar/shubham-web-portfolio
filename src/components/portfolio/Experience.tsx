import { motion } from "framer-motion";
import { Section } from "./Section";
import { experience } from "./data";
import { fadeUp, hoverLift, viewport } from "./motion";
import type { Variants } from "framer-motion";

const timelineStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.08 },
  },
};

const dotPop: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 420, damping: 22 },
  },
};

const lineDraw: Variants = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
};

function isCurrentRole(period: string) {
  return period.toLowerCase().includes("present");
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Experience" title="Where I've Worked">
      <motion.div
        variants={timelineStagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid grid-cols-[24px_1fr] gap-x-6 sm:gap-x-8"
      >
        {experience.map((e, index) => {
          const isLast = index === experience.length - 1;
          const isCurrent = isCurrentRole(e.period);

          return (
            <div key={e.company} className="contents">
              {/* Timeline track: dot + connector line */}
              <div className="relative flex min-h-full flex-col items-center">
                <motion.div
                  variants={dotPop}
                  className="relative z-10 mt-6 shrink-0 sm:mt-8"
                >
                  {isCurrent && (
                    <>
                      <motion.span
                        aria-hidden
                        className="absolute -inset-2 rounded-full bg-primary/20"
                        animate={{ scale: [1, 1.7, 1], opacity: [0.55, 0, 0.55] }}
                        transition={{
                          duration: 2.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.span
                        aria-hidden
                        className="absolute -inset-1 rounded-full bg-primary/35"
                        animate={{ scale: [1, 1.12, 1] }}
                        transition={{
                          duration: 2.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </>
                  )}
                  <span className="relative block size-3 rounded-full bg-primary ring-4 ring-background" />
                </motion.div>

                {!isLast && (
                  <div className="relative w-px flex-1">
                    <div className="absolute inset-0 bg-border" aria-hidden />
                    <motion.div
                      variants={lineDraw}
                      className="absolute inset-0 origin-top bg-primary"
                      aria-hidden
                    />
                  </div>
                )}
              </div>

              {/* Experience card */}
              <motion.article
                variants={fadeUp}
                whileHover={hoverLift}
                className={`rounded-2xl px-6 pb-6 pt-6 glass hover-smooth sm:px-8 sm:pb-8 sm:pt-8 ${isLast ? "" : "pb-10"}`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold sm:text-2xl">{e.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {e.period} · {e.mode}
                  </span>
                </div>
                <p className="mt-1 text-primary">{e.company}</p>
                <ul className="mt-5 space-y-3">
                  {e.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70"
                        aria-hidden
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </div>
          );
        })}
      </motion.div>
    </Section>
  );
}
