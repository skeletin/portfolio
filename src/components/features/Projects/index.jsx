import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../../endpoints/ProjectEndpoints";
import { useState } from "react";
import ProjectContainer from "../../containers/ProjectContainer";
import ComingSoon from "../../ui/ComingSoon";
import { motion, AnimatePresence } from "motion/react";

const Projects = () => {
  const [projectType, setProjectType] = useState("personal");

  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    select: (res) => res.data.filter((p) => p.projectType === projectType),
    retry: false,
  });

  const changeProjectType = (type) => {
    setProjectType(type);
  };

  if (data)
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col z-1 w-full h-full mt-6 md:mt-10 px-4 md:px-8 lg:px-16"
      >
        {data.length === 0 ? (
          <ComingSoon />
        ) : (
          <>
            {/* Title Section */}
            <div className="mb-8 md:mb-12 text-center">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="michroma text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              >
                PROJECTS
              </motion.h2>

              {/* Filter Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-4 md:gap-6"
              >
                <button
                  onClick={() => changeProjectType("personal")}
                  className={`relative michroma text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 overflow-hidden group ${
                    projectType === "personal"
                      ? "text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 shadow-lg shadow-white/10"
                      : "text-gray-400 bg-black/30 backdrop-blur-sm border-2 border-gray-800/50 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">personal</span>
                  {projectType === "personal" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </button>

                <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

                <button
                  onClick={() => changeProjectType("works")}
                  className={`relative michroma text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 overflow-hidden group ${
                    projectType === "works"
                      ? "text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 shadow-lg shadow-white/10"
                      : "text-gray-400 bg-black/30 backdrop-blur-sm border-2 border-gray-800/50 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">works</span>
                  {projectType === "works" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </button>
              </motion.div>
            </div>

            {/* Projects Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={projectType}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center text-white w-full"
              >
                <ProjectContainer projects={data} />
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </motion.main>
    );
};

export default Projects;
