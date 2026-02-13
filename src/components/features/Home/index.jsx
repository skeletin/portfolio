import Logo from "../../svgs/Logo";
import { motion } from "motion/react";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 flex w-full min-h-full items-center justify-center px-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex w-full h-full items-center justify-center"
      >
        <Logo className="w-auto h-16 md:h-24 text-ink" />
      </motion.div>
    </motion.main>
  );
};

export default Home;
