import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { navLinks } from "./data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [light, setLight] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "my-3 rounded-2xl py-3 glass" : "my-0 py-5"
        }`}
      >
        <button
          onClick={() => go("home")}
          className="font-display text-base font-bold tracking-tight"
        >
          SR<span className="text-primary">.</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="relative rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-primary/12"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span
                className={`relative ${active === l.id ? "text-primary" : ""}`}
              >
                {l.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 12 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setLight((v) => !v)}
            aria-label="Toggle theme"
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-primary"
          >
            {light ? <Moon size={16} /> : <Sun size={16} />}
          </motion.button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-full border border-border p-2 md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-6 flex flex-col gap-1 rounded-2xl p-3 glass md:hidden"
        >
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="rounded-xl px-4 py-2.5 text-left text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary"
            >
              {l.label}
            </button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
