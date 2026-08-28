import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin as SiLinkedin } from "react-icons/fa6";
import { AskMeTerminal } from "./AskMeTerminal";
import { profile } from "./data";
import { fadeUp, hoverLift, hoverScale, hoverTransition, stagger } from "./motion";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const socialLinks = [
  { href: profile.github, Icon: SiGithub, label: "GitHub" },
  { href: profile.linkedin, Icon: SiLinkedin, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20 pb-16 sm:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid-bg opacity-60 [mask-image:radial-gradient(70%_60%_at_30%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/6 blur-[120px]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        transition={{ delayChildren: 1.55 }}
        className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-10 xl:gap-14"
      >
        {/* Left column */}
        <div className="relative">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span className="text-primary">AVAILABLE</span> · Open to opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="font-mono text-3xl font-normal text-muted-foreground sm:text-4xl md:text-5xl">
              ${" "}
            </span>
            <span className="text-foreground">hi, I&apos;m</span>
            <br />
            <span className="text-primary">Shubham</span>
            <motion.span
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1, repeat: Infinity, times: [0, 0.49, 0.5, 1] }}
              className="ml-1 inline-block h-[0.85em] w-[0.5em] translate-y-[-0.05em] bg-primary align-middle"
              aria-hidden
            />
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 font-mono text-sm text-muted-foreground sm:text-base"
          >
            Full-Stack Developer | React.js &amp; Node.js | Rishikesh → Remote
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl font-sans text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]"
          >
            I&apos;m a{" "}
            <span className="text-primary">full-stack developer</span> building real projects with
            React and Node.js. Currently interning at a{" "}
            <span className="text-primary">Delhi-based Web3 studio</span>, working on live client
            products. My recent project,{" "}
            <span className="text-primary">LinguaLens</span>, is a Chrome extension for real-time
            translation across 17 languages.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <motion.button
              type="button"
              whileHover={hoverScale}
              whileTap={{ scale: 0.98 }}
              transition={hoverTransition}
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-mono text-sm font-semibold text-primary-foreground hover-smooth hover:shadow-[0_0_24px_var(--glow)]"
            >
              get in touch
              <ArrowRight
                size={16}
                className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                aria-hidden
              />
            </motion.button>

            <motion.button
              type="button"
              whileHover={hoverScale}
              whileTap={{ scale: 0.98 }}
              transition={hoverTransition}
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center rounded-lg border border-border bg-background/80 px-4 py-2.5 font-mono text-sm text-muted-foreground hover-smooth hover:border-primary/40 hover:text-primary"
            >
              $ ls projects/
            </motion.button>

            <div className="flex w-full gap-2 sm:ml-1 sm:w-auto">
              {socialLinks.map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  whileHover={hoverLift}
                  whileTap={{ scale: 0.98 }}
                  transition={hoverTransition}
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover-smooth hover:border-primary/35 hover:text-primary"
                >
                  <Icon size={17} aria-hidden />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <AskMeTerminal />
      </motion.div>
    </section>
  );
}
