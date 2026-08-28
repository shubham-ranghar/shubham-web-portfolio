import { motion } from "framer-motion";
import { Chrome, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Section } from "./Section";
import { projects } from "./data";
import { fadeUp, hoverLift, hoverScale, hoverTransition } from "./motion";

function isValidLink(href: string) {
  return href.length > 0 && href !== "#";
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="02 — Projects" title="Selected Work">
      <div className="grid gap-6">
        {projects.map((p) => {
          const hasStore = isValidLink(p.store);
          const hasRepo = isValidLink(p.repo);

          return (
            <motion.article
              key={p.name}
              variants={fadeUp}
              whileHover={hoverLift}
              transition={hoverTransition}
              className="group relative overflow-hidden rounded-3xl p-7 glass hover-smooth sm:p-10"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-primary/12 blur-3xl opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100" />

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

                {(hasStore || hasRepo) && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {hasStore && (
                      <motion.a
                        whileHover={hoverScale}
                        whileTap={{ scale: 0.98 }}
                        href={p.store}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-ring"
                      >
                        <Chrome size={16} aria-hidden />
                        View on Chrome Web Store
                        <ExternalLink size={14} aria-hidden />
                      </motion.a>
                    )}
                    {hasRepo && (
                      <motion.a
                        whileHover={hoverScale}
                        whileTap={{ scale: 0.98 }}
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover-smooth hover:border-primary hover:text-primary"
                      >
                        <SiGithub size={16} aria-hidden />
                        GitHub
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
