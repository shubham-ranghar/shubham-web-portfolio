import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "./Section";
import { experience } from "./data";
import { fadeUp } from "./motion";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="experience" eyebrow="02 — Experience" title="Where I've Worked">
      <div ref={ref} className="relative pl-8 sm:pl-12">
        <div className="absolute left-2 top-0 h-full w-px bg-border sm:left-3" />
        <motion.div
          style={{ scaleY }}
          className="absolute left-2 top-0 h-full w-px origin-top bg-primary sm:left-3"
        />

        {experience.map((e) => (
          <motion.div key={e.company} variants={fadeUp} className="relative">
            <motion.span
              whileHover={{ scale: 1.4 }}
              className="absolute -left-[1.6rem] top-2 size-3 rounded-full bg-primary glow-ring sm:-left-[2.35rem]"
            />
            <motion.article
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 glass sm:p-8"
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
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
