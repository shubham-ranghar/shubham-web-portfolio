import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "./data";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-background"
        >
          <div className="text-center">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              className="text-3xl font-bold sm:text-5xl"
            >
              {profile.name.split("").map((c, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
                    show: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  className="inline-block"
                >
                  {c === " " ? "\u00A0" : c}
                </motion.span>
              ))}
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="mx-auto mt-6 h-px w-48 origin-left bg-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
