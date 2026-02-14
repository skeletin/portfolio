import { motion } from "motion/react";
import { Link } from "react-router";
import Skeletin from "../../svgs/Skeletin";

const Glitch404 = () => {
  return (
    <motion.div
      className="relative select-none leading-none"
      animate={{ opacity: [1, 0.92, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{
        textShadow:
          "0 0 18px rgba(var(--glow-rgb),0.15), 0 0 26px rgba(var(--glow-rgb),0.08)",
      }}
    >
      <span className="relative orbitron text-6xl md:text-8xl tracking-[0.35em] text-ink">
        404
      </span>
    </motion.div>
  );
};

const NotFound = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative flex flex-col z-1 justify-center items-center flex-1 w-full px-4 md:px-8 lg:px-16 pt-6 md:pt-10 pb-8 md:pb-12"
    >
        <div className="relative w-full max-w-2xl rounded-xl border border-ink/8 bg-page/50 backdrop-blur-sm overflow-hidden">
          <div
            aria-hidden
            className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(var(--glow-rgb),0.06)_0%,transparent_70%)]"
          />

          <div className="relative p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              <motion.div
                className="relative"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
              >
                <motion.div
                  aria-hidden
                  className="absolute -inset-4 rounded-full bg-ink/5 blur-lg"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                  style={{
                    filter: "drop-shadow(0 0 24px rgba(var(--glow-rgb),0.18))",
                  }}
                >
                  <Skeletin className="w-24 h-24 md:w-32 md:h-32" />
                </motion.div>
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <Glitch404 />
                <div className="mt-3 text-ink/85 space-grotesk-text text-base md:text-lg">
                  Not found.
                </div>
                <div className="mt-2 text-ink/55 text-sm leading-relaxed">
                  That page doesn't exist
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                  <Link
                    to="/"
                    className="orbitron inline-flex items-center justify-center rounded-xl border border-ink/15 bg-ink/5 px-4 py-2 text-ink hover:bg-ink/10 transition-colors"
                  >
                    Go home
                  </Link>
                  <Link
                    to="/projects"
                    className="orbitron inline-flex items-center justify-center rounded-xl border border-ink/15 bg-ink/5 px-4 py-2 text-ink hover:bg-ink/10 transition-colors"
                  >
                    Projects
                  </Link>
                  <Link
                    to="/contact"
                    className="orbitron inline-flex items-center justify-center rounded-xl border border-ink/15 bg-ink/5 px-4 py-2 text-ink hover:bg-ink/10 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-ink/15 to-transparent"
            />
          </div>
        </div>
    </motion.main>
  );
};

export default NotFound;
