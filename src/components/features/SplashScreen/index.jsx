import Logo from "../../svgs/Logo";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Skeletin from "../../svgs/Skeletin";

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed flex flex-col items-center justify-center bg-black h-screen w-screen z-1 overflow-hidden"
    >
      <motion.div className="relative h-50">
        <Skeletin className=" scale-145 translate-y-10" />
      </motion.div>
      <Logo className="z-1 w-100 h-20 " />
    </motion.div>
  );
};

export default SplashScreen;
