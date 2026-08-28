import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
  typing?: boolean;
};

const SUGGESTIONS = [
  "what is your stack?",
  "are you available for hire?",
  "tell me about a recent project",
  "what are you currently working on?",
] as const;

const RESPONSES: Record<string, string> = {
  "what is your stack?":
    "I work across the full stack with JavaScript (ES6+), TypeScript, React.js, Node.js, and Express.js on the backend. For data I use MongoDB and Supabase. On the frontend I reach for Tailwind CSS, Socket.IO for real-time features, and JWT for auth. Day-to-day tooling includes Git/GitHub, Postman, and Cloudinary.",
  "are you available for hire?":
    "Yes — I'm available immediately and open to full-time roles, internships, and contract work. I'm based in Rishikesh and comfortable working remotely with teams anywhere.",
  "tell me about a recent project":
    "LinguaLens is my latest shipped project — an AI-powered Chrome extension for real-time translation across 17 languages. It uses React 19, TypeScript, and Tailwind CSS with a Shadow DOM floating UI, a translation pipeline with caching, and an LLM fallback for grammar correction and Hinglish support. It's live on the Chrome Web Store.",
  "what are you currently working on?":
    "I'm a Software Development Intern at Quon Labs (OPC) Pvt. Ltd., a Delhi-based Web3 studio. I contribute to live client products — building features and fixing bugs on production React.js and Node.js applications alongside a senior engineering team.",
};

const DEFAULT_RESPONSE =
  "Good question! I'm a full-stack developer focused on React, Node.js, and MongoDB. Ask about my stack, availability, current work, or LinguaLens — or reach out directly via the contact section.";

function normalizeQuestion(input: string) {
  return input.trim().toLowerCase().replace(/[?!.]+$/, "");
}

function getResponse(question: string) {
  const key = normalizeQuestion(question);
  if (RESPONSES[key]) return RESPONSES[key];

  for (const [prompt, answer] of Object.entries(RESPONSES)) {
    if (key.includes(prompt.replace("?", "")) || prompt.includes(key)) return answer;
  }

  if (key.includes("stack") || key.includes("tech")) return RESPONSES["what is your stack?"];
  if (key.includes("hire") || key.includes("available") || key.includes("open"))
    return RESPONSES["are you available for hire?"];
  if (key.includes("project") || key.includes("lingualens"))
    return RESPONSES["tell me about a recent project"];
  if (key.includes("work") || key.includes("intern") || key.includes("quon"))
    return RESPONSES["what are you currently working on?"];

  return DEFAULT_RESPONSE;
}

function TypingText({ text, onDone }: { text: string; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const doneRef = useRef(false);

  useEffect(() => {
    setDisplayed("");
    doneRef.current = false;
    let i = 0;
    const interval = window.setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(interval);
        if (!doneRef.current) {
          doneRef.current = true;
          onDone?.();
        }
      }
    }, 12);
    return () => window.clearInterval(interval);
  }, [text, onDone]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="ml-0.5 inline-block h-3.5 w-2 bg-primary align-middle"
        />
      )}
    </span>
  );
}

export function AskMeTerminal() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [thinking, setThinking] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, thinking, scrollToBottom]);

  const sendQuestion = useCallback(
    (question: string) => {
      const trimmed = question.trim();
      if (!trimmed || busy) return;

      setBusy(true);
      const userId = `user-${Date.now()}`;
      const botId = `bot-${Date.now()}`;
      const answer = getResponse(trimmed);

      setMessages((prev) => [
        ...prev.map((m) => ({ ...m, typing: false })),
        { id: userId, role: "user", text: trimmed },
      ]);
      setInput("");
      setThinking(true);

      const delay = 600 + Math.min(answer.length * 8, 500);

      window.setTimeout(() => {
        setThinking(false);
        setMessages((prev) => [
          ...prev,
          { id: botId, role: "bot", text: answer, typing: true },
        ]);
      }, delay);
    },
    [busy],
  );

  const onTypingDone = useCallback(() => {
    setBusy(false);
    setMessages((prev) => prev.map((m) => ({ ...m, typing: false })));
  }, []);

  return (
    <div className="terminal-window relative w-full">
      {/* Corner brackets */}
      <span className="terminal-corner terminal-corner-tl" aria-hidden />
      <span className="terminal-corner terminal-corner-tr" aria-hidden />
      <span className="terminal-corner terminal-corner-bl" aria-hidden />
      <span className="terminal-corner terminal-corner-br" aria-hidden />

      <div className="overflow-hidden rounded-xl border border-primary/25 bg-[var(--terminal-bg)] shadow-[var(--terminal-shadow)]">
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-border/60 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <p className="flex-1 text-center font-mono text-xs text-muted-foreground">
            ~/ask-me.sh
          </p>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-primary">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            ready
          </span>
        </div>

        {/* Chat log */}
        <div
          ref={logRef}
          className="terminal-scroll h-[220px] space-y-4 overflow-y-auto px-4 py-4 font-mono text-xs leading-relaxed sm:h-[280px] md:h-[300px]"
        >
          <p className="text-muted-foreground">
            <span className="text-muted-foreground/70">{"// system"}</span>
            <br />
            <span className="text-foreground">connected to shubham.dev — ask anything.</span>
          </p>

          {messages.map((m) => (
              <div
                key={m.id}
                className={m.role === "user" ? "text-right" : "text-left"}
              >
                <p
                  className={`mb-1 text-[10px] uppercase tracking-wider ${
                    m.role === "user" ? "text-muted-foreground" : "text-primary"
                  }`}
                >
                  {m.role === "user" ? "> you" : "> shubham-bot"}
                </p>
                <p
                  className={`inline-block max-w-[95%] rounded-lg px-3 py-2 text-left text-[11px] leading-relaxed sm:text-xs ${
                    m.role === "user"
                      ? "bg-secondary/80 text-foreground"
                      : "bg-primary/8 text-foreground"
                  }`}
                >
                  {m.role === "bot" && m.typing ? (
                    <TypingText text={m.text} onDone={onTypingDone} />
                  ) : (
                    m.text
                  )}
                </p>
              </div>
            ))}

            {thinking && (
              <div className="text-left">
                <p className="mb-1 text-[10px] uppercase tracking-wider text-primary">
                  &gt; shubham-bot
                </p>
                <p className="inline-flex items-center gap-1 rounded-lg bg-primary/8 px-3 py-2.5 text-primary">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="size-1.5 rounded-full bg-primary"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </p>
              </div>
            )}
        </div>

        {/* Suggestions */}
        <div className="grid grid-cols-2 gap-2 border-t border-border/40 px-4 py-3">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              disabled={busy}
              onClick={() => sendQuestion(s)}
              className="rounded-md border border-border/60 bg-background/60 px-2 py-2 text-left font-mono text-[10px] text-muted-foreground hover-smooth hover:border-primary/40 hover:text-primary disabled:opacity-50 sm:text-[11px]"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendQuestion(input);
          }}
          className="flex items-center gap-2 border-t border-border/60 px-3 py-3"
        >
          <span className="shrink-0 font-mono text-primary">&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ask anything about shubham..."
            disabled={busy}
            className="min-w-0 flex-1 bg-transparent font-mono text-[11px] text-foreground outline-none placeholder:text-muted-foreground/60 sm:text-xs"
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            className="shrink-0 rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] text-primary hover-smooth hover:bg-primary/20 disabled:opacity-40 sm:text-xs"
          >
            send ↵
          </button>
        </form>
      </div>
    </div>
  );
}
