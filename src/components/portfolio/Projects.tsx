import { motion } from "framer-motion";
import { Chrome, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Section } from "./Section";
import { projects } from "./data";
import { fadeUp } from "./motion";

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Selected Work">
      <div className="grid gap-6">
        {projects.map((p) => (
          <motion.article
            key={p.name}
            variants={fadeUp}
            whileHover={{ y: -8, rotateX: 2, rotateY: -2, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            className="group relative overflow-hidden rounded-3xl p-7 glass sm:p-10"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-primary/12 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              <h3 className="text-2xl font-bold sm:text-3xl">
                {p.name}
                <span className="ml-2 text-base font-normal text-muted-foreground">
                  — {p.subtitle}
                </span>
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={p.store}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-ring"
                >
                  <Chrome size={16} /> View on Chrome Web Store
                  <ExternalLink size={14} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={p.repo}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  <SiGithub size={16} /> GitHub
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
