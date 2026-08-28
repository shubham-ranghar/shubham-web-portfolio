import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { profile } from "./data";
import { fadeUp, stagger } from "./motion";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const blobX = useTransform(sx, (v) => v * 40);
  const blobY = useTransform(sy, (v) => v * 40);
  const gridX = useTransform(sx, (v) => v * -16);
  const gridY = useTransform(sy, (v) => v * -16);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      onMouseMove={onMove}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <motion.div
        style={{ x: gridX, y: gridY }}
        className="pointer-events-none absolute -inset-24 opacity-40 grid-bg [mask-image:radial-gradient(60%_55%_at_50%_40%,black,transparent)]"
      />
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary/18 blur-[120px]"
      />
      <motion.div
        style={{ x: blobY, y: blobX }}
        className="pointer-events-none absolute bottom-[-12rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[130px]"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        transition={{ delayChildren: 1.6 }}
        className="relative mx-auto w-full max-w-6xl px-6 py-32"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs text-muted-foreground glass"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-primary" />
          Available immediately
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-7 text-5xl font-bold leading-[1.05] sm:text-7xl md:text-8xl"
        >
          <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 font-display text-xl text-primary sm:text-2xl"
        >
          {profile.title}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="text-primary" /> {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail size={15} className="text-primary" /> {profile.email}
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-ring"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            Contact Me
          </motion.button>

          {[
            { href: profile.github, Icon: SiGithub, label: "GitHub" },
            { href: profile.linkedin, Icon: SiLinkedin, label: "LinkedIn" },
          ].map(({ href, Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.12, y: -3 }}
              whileTap={{ scale: 0.94 }}
              className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
