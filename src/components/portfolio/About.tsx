import { motion } from "framer-motion";
import { Section } from "./Section";
import { fadeUp } from "./motion";

const facts = [
  { k: "Status", v: "Fresher · Available immediately" },
  { k: "Currently", v: "Interning at a Delhi-based Web3 studio" },
  { k: "Focus", v: "React · Node.js · MongoDB" },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="About Me">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <motion.p
          variants={fadeUp}
          className="text-lg leading-relaxed text-muted-foreground"
        >
          I'm a fresher full-stack developer,{" "}
          <span className="text-foreground">available immediately</span>, currently interning
          at a New Delhi-based Web3 development studio where I contribute to live production
          products alongside a professional engineering team. I enjoy owning features
          end-to-end — designing real-time backend systems, shaping clean APIs, and building
          polished, responsive interfaces on top of them.
        </motion.p>

        <motion.ul variants={fadeUp} className="space-y-3">
          {facts.map((f) => (
            <motion.li
              key={f.k}
              whileHover={{ x: 6 }}
              className="rounded-xl p-4 glass"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-primary">{f.k}</p>
              <p className="mt-1 text-sm text-foreground">{f.v}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
