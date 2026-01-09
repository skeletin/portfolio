import { motion } from "motion/react";

export const HomeLayout = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col z-1 justify-center items-center flex-1 w-full mt-4"
    >
      {children}
    </motion.main>
  );
};

export default HomeLayout;
