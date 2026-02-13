import { motion } from "motion/react";

const PageTitle = ({ children, className = "" }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`michroma text-2xl md:text-5xl lg:text-6xl text-ink text-center ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export default PageTitle;


