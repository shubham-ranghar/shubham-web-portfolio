import { useIsLightTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { skillGroups } from "./data";
import { fadeUp, hoverLift, popIn, stagger, viewport } from "./motion";

export function Skills() {
  const isLight = useIsLightTheme();

  return (
    <Section id="skills" eyebrow="01 — Skills" title="Tools I Build With">
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
              {g.skills.map(({ name, Icon, color, lightColor }) => (
                <motion.div
                  key={name}
                  variants={popIn}
                  whileHover={hoverLift}
                  className="group flex items-center gap-2.5 rounded-xl px-4 py-3 glass hover-smooth transition-shadow duration-500 hover:glow-ring"
                >
                  <Icon
                    size={18}
                    color={isLight ? (lightColor ?? color) : color}
                    aria-hidden
                    className="size-[18px] shrink-0"
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
