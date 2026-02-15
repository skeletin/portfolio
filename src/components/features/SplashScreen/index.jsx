import { motion } from "motion/react";

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed flex flex-col items-center justify-center bg-page h-screen w-screen z-50 overflow-hidden"
    >
      {/* Loading bar */}
      <div className="relative h-0.5 w-32 bg-ink/10 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 w-full bg-ink/40 rounded-full origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </div>

      {/* Label */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 orbitron text-[9px] tracking-[0.2em] uppercase text-ink/25"
      >
        Initializing
        <span className="cursor-blink ml-0.5">_</span>
      </motion.span>
    </motion.div>
  );
};

export default SplashScreen;
