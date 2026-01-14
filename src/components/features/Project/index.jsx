import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router";
import { getProject } from "../../../endpoints/ProjectEndpoints";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoArrowBack } from "react-icons/io5";
import StackIcon from "tech-stack-icons";

const Project = () => {
  const { name } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["project", name],
    queryFn: () => getProject(name),
    retry: false,
  });

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-full text-white"
      >
        <div className="text-xl michroma">Loading...</div>
      </motion.div>
    );
  }

  if (isError || !data?.data) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center h-full text-white"
      >
        <div className="text-xl michroma mb-4">Project not found</div>
        <Link
          to="/projects"
          className="text-white/60 hover:text-white transition-colors"
        >
          Back to Projects
        </Link>
      </motion.div>
    );
  }

  const project = data.data;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col border border-white z-1 w-full h-full overflow-y-auto hide-scrollbar pt-10 md:pt-16 px-8 max-w-[60rem]"
    >
      <div className="relative w-full">
        {/* Hero Image Section */}
        <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
          {project.displayPictureUrl && (
            <img
              src={project.displayPictureUrl}
              alt={project.name}
              className="object-cover w-full h-full"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

          {/* Back Button */}
          <Link
            to="/projects"
            className="absolute top-4 left-4 md:top-8 md:left-8 z-10 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
          >
            <IoArrowBack className="text-xl" />
            <span className="michroma">Back</span>
          </Link>
        </div>

        {/* Content Section */}
        <div className="relative px-4 md:px-8 lg:px-16 py-8 md:py-12 max-w-6xl mx-auto">
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="michroma text-4xl md:text-5xl lg:text-6xl text-white mb-2">
                  {project.name}
                </h1>
                <div className="flex items-center gap-4 text-gray-400">
                  <span className="text-lg">{project.year}</span>
                  <span className="text-gray-600">•</span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 text-sm">
                    {project.projectType}
                  </span>
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <FaGithub className="text-xl" />
                    <span className="michroma text-sm">Repository</span>
                  </a>
                )}
                {project.siteUrl && (
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <CgWebsite className="text-xl" />
                    <span className="michroma text-sm">Website</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="michroma text-2xl md:text-3xl text-white mb-4">
              About
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="michroma text-2xl md:text-3xl text-white mb-6">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.techStack?.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-black/70 flex items-center gap-3"
                >
                  <div className="w-10 h-10 flex-shrink-0">
                    <StackIcon name={tech} className="w-full h-full" />
                  </div>
                  <h3 className="michroma text-lg text-white capitalize">
                    {tech}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default Project;
