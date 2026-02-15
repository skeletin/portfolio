import { Link } from "react-router";
import Logo from "../../svgs/Logo";
import { motion } from "motion/react";
import { IoArrowForward } from "react-icons/io5";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-1 w-full items-center justify-center px-4"
    >
      <div className="relative flex flex-col items-center text-center max-w-2xl">
        {/* Logo entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mb-8"
        >
          {/* Ambient glow */}
          <motion.div
            aria-hidden
            className="absolute -inset-6 rounded-full bg-ink/5 blur-2xl"
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <Logo
            className="relative w-auto h-16 md:h-20 text-ink"
            style={{
              filter: "drop-shadow(0 0 30px rgba(var(--glow-rgb), 0.15))",
            }}
          />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center gap-3"
        >
          <Link
            to="/projects"
            className="group/cta relative flex items-center gap-2 px-5 py-2.5 rounded-xl border border-ink/15 bg-ink/8 text-ink michroma text-xs tracking-wider uppercase overflow-hidden hover:border-ink/30 hover:bg-ink/12 transition-[color,background-color,border-color] duration-300 backdrop-blur-xs"
          >
            {/* Shimmer */}
            <span
              aria-hidden
              className="absolute inset-0 bg-linear-to-r from-transparent via-ink/5 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700"
            />
            <span className="relative">View Work</span>
            <IoArrowForward className="relative text-ink/50 group-hover/cta:text-ink group-hover/cta:translate-x-0.5 transition-all duration-300" />
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl border border-ink/8 text-ink/50 michroma text-xs tracking-wider uppercase hover:text-ink hover:border-ink/20 hover:bg-ink/5 transition-[color,background-color,border-color] duration-300 backdrop-blur-xs"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-10 flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-ink/5 border border-ink/8 backdrop-blur-xs"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink/40" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ink/60" />
          </span>
          <span className="orbitron text-[9px] text-ink/40 tracking-wider uppercase">
            Available for work
          </span>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Home;
