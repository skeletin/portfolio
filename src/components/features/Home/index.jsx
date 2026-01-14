import Logo from "../../svgs/Logo";
import { motion } from "motion/react";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col z-1 justify-center items-center flex-1 w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-black p-4"
      >
        <Logo className="w-auto h-16 md:h-24" />
      </motion.div>
    </motion.main>
  );
};

export default Home;
