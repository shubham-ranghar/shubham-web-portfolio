import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Loader2, Mail, Phone, Send } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Section } from "./Section";
import { profile } from "./data";
import { fadeUp } from "./motion";

type State = "idle" | "loading" | "done";

export function Contact() {
  const [state, setState] = useState<State>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (state !== "idle") return;
    setState("loading");
    setTimeout(() => {
      setState("done");
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=Portfolio enquiry&body=${body}`;
      setTimeout(() => setState("idle"), 2500);
    }, 1100);
  };

  const field =
    "w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15";

  return (
    <Section id="contact" eyebrow="06 — Contact" title="Let's Build Something">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.form variants={fadeUp} onSubmit={submit} className="space-y-4">
          {(["name", "email"] as const).map((k) => (
            <motion.input
              key={k}
              whileFocus={{ scale: 1.01 }}
              required
              type={k === "email" ? "email" : "text"}
              placeholder={k === "email" ? "Your email" : "Your name"}
              value={form[k]}
              onChange={(e) => setForm({ ...form, [k]: e.target.value })}
              className={field}
            />
          ))}
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            required
            rows={5}
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${field} resize-none`}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-ring"
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
                  Send Message <Send size={15} />
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
                  Sending <Loader2 size={15} className="animate-spin" />
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
                  Sent <Check size={15} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>

        <motion.div variants={fadeUp} className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 rounded-2xl p-5 glass transition-colors hover:text-primary"
          >
            <Mail size={18} className="text-primary" /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-4 rounded-2xl p-5 glass transition-colors hover:text-primary"
          >
            <Phone size={18} className="text-primary" /> {profile.phone}
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
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: [-0, -8, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-5 text-muted-foreground glass hover:text-primary"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
