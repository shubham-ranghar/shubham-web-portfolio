import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { navLinks } from "./data";
import { hoverLift } from "./motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [light, setLight] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 8));

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 h-16 border-b border-[var(--navbar-border)] bg-background transition-[backdrop-filter,background-color] duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/92" : ""
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-6">
        {/* Logo */}
        <button
          type="button"
          onClick={() => go("home")}
          className="flex shrink-0 items-center gap-2.5 font-mono text-sm font-bold"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          <span>
            SHUBHAM<span className="text-primary">.</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map(({ id }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => go(id)}
                className={`rounded-md px-3 py-2 font-mono text-xs hover-smooth sm:text-sm ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:drop-shadow-[0_0_8px_var(--glow)]"
                }`}
              >
                ~/{id}
              </button>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="flex shrink-0 items-center gap-2">
          <motion.button
            type="button"
            whileHover={hoverLift}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.85 }}
            onClick={() => setLight((v) => !v)}
            aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover-smooth hover:border-primary/35 hover:text-primary"
          >
            {light ? <Moon size={16} aria-hidden /> : <Sun size={16} aria-hidden />}
          </motion.button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/35 hover:text-primary lg:hidden"
          >
            {open ? <X size={16} aria-hidden /> : <Menu size={16} aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          />
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-16 z-50 border-b border-[var(--navbar-border)] bg-background/95 px-6 py-4 backdrop-blur-md lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {navLinks.map(({ id }) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => go(id)}
                    className={`rounded-lg px-3 py-2.5 text-left font-mono text-sm hover-smooth ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:bg-card hover:text-foreground"
                    }`}
                  >
                    ~/{id}
                  </button>
                );
              })}
            </div>
          </motion.nav>
        </>
      )}
    </motion.header>
  );
}
