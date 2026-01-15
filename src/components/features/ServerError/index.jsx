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
      className="relative flex flex-col z-1 justify-center items-center flex-1 w-full px-4 py-10"
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-black/55 backdrop-blur-md">
        <div
          aria-hidden
          className="absolute -inset-28 rounded-full bg-gradient-to-r from-cyan-400/12 via-fuchsia-400/12 to-emerald-400/12 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -inset-18 rounded-full border border-white/10"
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
                filter: "drop-shadow(0 0 24px rgba(255,255,255,0.18))",
              }}
            >
              <Skeletin className="w-24 h-24 md:w-32 md:h-32" />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <div
                className="orbitron text-6xl md:text-8xl tracking-[0.35em] text-white"
                style={{
                  textShadow:
                    "0 0 18px rgba(34,211,238,0.22), 0 0 26px rgba(217,70,239,0.14)",
                }}
              >
                500
              </div>
              <div className="mt-3 text-white/85 space-grotesk-text text-base md:text-lg">
                {title}
              </div>
              <div className="mt-2 text-white/55 text-sm leading-relaxed">
                {message}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                {onRetry && (
                  <button
                    type="button"
                    onClick={onRetry}
                    className="orbitron inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white hover:bg-white/15 transition-colors"
                  >
                    Retry
                  </button>
                )}
                {showHome && (
                  <Link
                    to="/"
                    className="orbitron inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  >
                    Go home
                  </Link>
                )}
                {showProjects && (
                  <Link
                    to="/projects"
                    className="orbitron inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  >
                    Projects
                  </Link>
                )}
                {showContact && (
                  <Link
                    to="/contact"
                    className="orbitron inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  >
                    Contact
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ opacity: 0.35 }}
          />
        </div>
      </div>
    </motion.main>
  );
};

export default ServerError;
