import { motion } from "framer-motion";
import { Section } from "./Section";
import { skillGroups } from "./data";
import { fadeUp, popIn, stagger, viewport } from "./motion";

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 — Skills" title="Tools I Build With">
      <div className="grid gap-8">
        {skillGroups.map((g) => (
          <motion.div key={g.category} variants={fadeUp}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {g.category}
            </h3>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-4 flex flex-wrap gap-3"
            >
              {g.skills.map(({ name, Icon }) => (
                <motion.div
                  key={name}
                  variants={popIn}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="group flex items-center gap-2.5 rounded-xl px-4 py-3 glass transition-shadow hover:glow-ring"
                >
                  <Icon
                    size={18}
                    className="text-muted-foreground transition-colors group-hover:text-primary"
                  />
                  <span className="text-sm">{name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
