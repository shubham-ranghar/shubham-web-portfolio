import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { education } from "./data";
import { fadeUp } from "./motion";

export function Education() {
  return (
    <Section id="education" eyebrow="05 — Education" title="Education">
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -6 }}
        className="flex items-start gap-5 rounded-2xl p-7 glass sm:p-8"
      >
        <span className="rounded-xl bg-primary/12 p-3 text-primary">
          <GraduationCap size={22} />
        </span>
        <div>
          <h3 className="text-xl font-semibold">{education.degree}</h3>
          <p className="mt-1 text-muted-foreground">{education.school}</p>
          <p className="mt-2 font-mono text-xs text-primary">{education.period}</p>
        </div>
      </motion.div>
    </Section>
  );
}
