import { motion } from "motion/react";
import Skeletin from "../../svgs/Skeletin";

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed flex flex-col items-center justify-center bg-page h-screen w-screen z-50 overflow-hidden"
    >
      {/* Skeleton Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative h-50 z-10"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Skeletin className="scale-145 translate-y-10" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
