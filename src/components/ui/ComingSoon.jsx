import { motion } from "motion/react";
import { Link } from "react-router";
import Skeletin from "../svgs/Skeletin";
import ElectricBorder from "./ElectricBorder";

const ComingSoon = ({
  title = "Projects",
  subtitle = "This section is being polished. New work is landing soon.",
  showContact = true,
}) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col z-1 justify-center items-center w-full flex-1 px-4 py-10"
    >
      <ElectricBorder
        className={"w-full max-w-2xl"}
        speed={0.1}
        chaos={0.015}
        thickness={1}
        style={{ borderRadius: 16 }}
      >
        <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-page/55 backdrop-blur-md">
          <div
            aria-hidden
            className="absolute -inset-28 rounded-full bg-linear-to-r from-ink/10 via-cyan-400/10 to-fuchsia-400/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -inset-18 rounded-full border border-ink/10"
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
                  className="absolute -inset-5 rounded-full bg-ink/5 blur-xl"
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
                <div className="michroma text-xs tracking-[0.35em] text-ink/60">
                  COMING SOON
                </div>
                <div className="mt-3 michroma text-3xl md:text-4xl text-ink">
                  {title}
                </div>
                <div className="mt-3 text-ink/70 text-sm md:text-base leading-relaxed">
                  {subtitle}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                  <Link
                    to="/"
                    className="orbitron inline-flex items-center justify-center rounded-xl border border-ink/15 bg-ink/5 px-4 py-2 text-ink hover:bg-ink/10 transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="orbitron inline-flex items-center justify-center rounded-xl border border-ink/15 bg-ink/5 px-4 py-2 text-ink hover:bg-ink/10 transition-colors"
                  >
                    About
                  </Link>
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
      </ElectricBorder>
    </motion.main>
  );
};

export default ComingSoon;
