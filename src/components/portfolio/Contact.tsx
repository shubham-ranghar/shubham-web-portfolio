import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Loader2, Mail, Phone, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin as SiLinkedin } from "react-icons/fa6";
import { Section } from "./Section";
import { profile } from "./data";
import { fadeUp, hoverLift, hoverScale, hoverTransition } from "./motion";

type State = "idle" | "loading" | "done" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "loading") return;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setState("error");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      setState("error");
      return;
    }

    setError("");
    setState("loading");
    setTimeout(() => {
      setState("done");
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=Portfolio inquiry&body=${body}`;
      setTimeout(() => setState("idle"), 2500);
    }, 1100);
  };

  const field =
    "w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15";

  return (
    <Section id="contact" eyebrow="05 — Contact" title="Let's Build Something" className="pt-16 sm:pt-20">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.form variants={fadeUp} onSubmit={submit} noValidate className="space-y-5">
          <div>
            <label htmlFor="contact-name" className="sr-only">
              Your name
            </label>
            <motion.input
              id="contact-name"
              whileFocus={{ scale: 1.01 }}
              required
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
                if (state === "error") setState("idle");
              }}
              className={field}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="sr-only">
              Your email
            </label>
            <motion.input
              id="contact-email"
              whileFocus={{ scale: 1.01 }}
              required
              type="email"
              autoComplete="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                if (state === "error") setState("idle");
              }}
              className={field}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Your message
            </label>
            <motion.textarea
              id="contact-message"
              whileFocus={{ scale: 1.01 }}
              required
              rows={5}
              placeholder="Your message"
              value={form.message}
              onChange={(e) => {
                setForm({ ...form, message: e.target.value });
                if (state === "error") setState("idle");
              }}
              className={`${field} resize-none`}
            />
          </div>

          {state === "error" && error && (
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
          )}

          <motion.button
            type="submit"
            disabled={state === "loading"}
            whileHover={state === "loading" ? {} : hoverScale}
            whileTap={state === "loading" ? {} : { scale: 0.98 }}
            transition={hoverTransition}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-ring disabled:opacity-70"
          >
            <AnimatePresence mode="wait" initial={false}>
              {state === "idle" && (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="inline-flex items-center gap-2"
                >
                  Send Message <Send size={15} aria-hidden />
                </motion.span>
              )}
              {state === "loading" && (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-2"
                >
                  Sending <Loader2 size={15} className="animate-spin" aria-hidden />
                </motion.span>
              )}
              {state === "done" && (
                <motion.span
                  key="done"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-2"
                >
                  Sent <Check size={15} aria-hidden />
                </motion.span>
              )}
              {state === "error" && (
                <motion.span
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-2"
                >
                  Send Message <Send size={15} aria-hidden />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>

        <motion.div variants={fadeUp} className="space-y-5">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 rounded-2xl p-5 glass hover-smooth hover:text-primary"
          >
            <Mail size={18} className="shrink-0 text-primary" aria-hidden />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-4 rounded-2xl p-5 glass hover-smooth hover:text-primary"
          >
            <Phone size={18} className="shrink-0 text-primary" aria-hidden />
            {profile.phone}
          </a>
          <div className="flex gap-3">
            {[
              { href: profile.github, Icon: SiGithub, label: "GitHub" },
              { href: profile.linkedin, Icon: SiLinkedin, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={hoverLift}
                whileTap={{ scale: 0.98 }}
                transition={hoverTransition}
                className="rounded-2xl p-5 text-muted-foreground glass hover-smooth hover:text-primary"
              >
                <Icon size={20} aria-hidden />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
