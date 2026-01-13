import ComingSoon from "../../ui/ComingSoon";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col z-1 w-full h-full mt-10 md:flex-row"
    >
      <ComingSoon />
    </motion.main>
  );
};

export default Experience;
