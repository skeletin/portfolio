import ProjectCard from "../cards/ProjectCard";
import { motion } from "motion/react";

const ProjectContainer = ({ projects }) => {
  return (
    <div className="flex flex-col gap-8 md:gap-10 w-full h-full max-w-[50rem]">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectContainer;
