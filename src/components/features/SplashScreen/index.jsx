import Logo from "../../svgs/Logo";
import { motion } from "motion/react";
import Skeletin from "../../svgs/Skeletin";

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed flex flex-col items-center justify-center bg-black h-screen w-screen z-50 overflow-hidden"
    >
      {/* Animated Background */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
      </div> */}

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
