import { motion } from "motion/react";
import { Link } from "react-router";
import Skeletin from "../../svgs/Skeletin";

const ServerError = ({
  title = "Internal server error",
  message = "The server didn’t respond. Try again in a moment.",
  onRetry,
  showHome = true,
  showProjects = true,
  showContact = false,
}) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="relative flex flex-col z-1 justify-center items-center flex-1 w-full px-4 md:px-8 lg:px-16 pt-6 md:pt-10 pb-8 md:pb-12"
    >
        <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-ink/10 bg-page/55 backdrop-blur-sm">
          <div
            aria-hidden
            className="absolute -inset-16 rounded-full bg-linear-to-r from-cyan-400/8 via-fuchsia-400/8 to-emerald-400/8 blur-2xl"
          />

          <div className="relative p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
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

              <div className="flex-1 text-center md:text-left">
                <div
                  className="orbitron text-6xl md:text-8xl tracking-[0.35em] text-ink"
                  style={{
                    textShadow:
                      "0 0 18px rgba(34,211,238,0.22), 0 0 26px rgba(217,70,239,0.14)",
                  }}
                >
                  500
                </div>
                <div className="mt-3 text-ink/85 space-grotesk-text text-base md:text-lg">
                  {title}
                </div>
                <div className="mt-2 text-ink/55 text-sm leading-relaxed">
                  {message}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                  {onRetry && (
                    <button
                      type="button"
                      onClick={onRetry}
                      className="orbitron inline-flex items-center justify-center rounded-xl border border-ink/15 bg-ink/10 px-4 py-2 text-ink hover:bg-ink/15 transition-colors"
                    >
                      Retry
                    </button>
                  )}
                  {showHome && (
                    <Link
                      to="/"
                      className="orbitron inline-flex items-center justify-center rounded-xl border border-ink/15 bg-ink/5 px-4 py-2 text-ink hover:bg-ink/10 transition-colors"
                    >
                      Go home
                    </Link>
                  )}
                  {showProjects && (
                    <Link
                      to="/projects"
                      className="orbitron inline-flex items-center justify-center rounded-xl border border-ink/15 bg-ink/5 px-4 py-2 text-ink hover:bg-ink/10 transition-colors"
                    >
                      Projects
                    </Link>
                  )}
                  {showContact && (
                    <Link
                      to="/contact"
                      className="orbitron inline-flex items-center justify-center rounded-xl border border-ink/15 bg-ink/5 px-4 py-2 text-ink hover:bg-ink/10 transition-colors"
                    >
                      Contact
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-ink/30 to-transparent"
              style={{ opacity: 0.35 }}
            />
          </div>
        </div>
    </motion.main>
  );
};

export default ServerError;
