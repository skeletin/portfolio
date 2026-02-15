import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router";
import { getProject } from "../../../endpoints/ProjectEndpoints";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoArrowBack } from "react-icons/io5";
import StackIcon from "tech-stack-icons";
import Skeletin from "../../svgs/Skeletin";
import ServerError from "../ServerError";
import BlurEdge from "../../ui/BlurEdge";

const Project = () => {
  const { name } = useParams();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["project", name],
    queryFn: () => getProject(name),
    select: (res) => res.data,
    retry: false,
  });

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center h-full text-ink gap-3"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="w-6 h-6 border border-ink/20 border-t-ink/60 rounded-full"
        />
        <span className="orbitron text-[10px] tracking-[0.15em] uppercase text-ink/40">
          Loading
        </span>
      </motion.div>
    );
  }

  const isNotFound =
    (isError && error?.status === 404) ||
    (!isError && data && (data === null || data === undefined));

  if (isNotFound) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative flex flex-col items-center justify-center h-full text-ink px-6 z-1"
      >
        <div className="relative w-full max-w-xl rounded-xl border border-ink/8 bg-page/50 backdrop-blur-sm overflow-hidden p-6 md:p-10">
          <div
            aria-hidden
            className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(var(--glow-rgb),0.06)_0%,transparent_70%)]"
          />
          <div className="relative flex flex-col md:flex-row items-center gap-6">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                filter: "drop-shadow(0 0 24px rgba(var(--glow-rgb),0.18))",
              }}
            >
              <Skeletin className="w-20 h-20 md:w-24 md:h-24" />
            </motion.div>

            <div className="text-center md:text-left">
              <div className="orbitron text-2xl md:text-3xl tracking-[0.25em]">
                404
              </div>
              <div className="mt-2 text-ink/85 space-grotesk-text text-base md:text-lg">
                Project not found
              </div>
              <div className="mt-2 text-ink/55 text-sm leading-relaxed">
                We couldn’t find the project:{" "}
                <span className="text-ink/80">{name}</span>
              </div>
              <div className="mt-6 flex gap-3 justify-center md:justify-start">
                <Link
                  to="/projects"
                  className="orbitron inline-flex items-center justify-center rounded-xl border border-ink/15 bg-ink/5 px-4 py-2 text-ink hover:bg-ink/10 transition-colors"
                >
                  Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (isError || !data) {
    return (
      <ServerError
        title="Project unavailable"
        message={
          error?.status
            ? `The server returned an error (${error.status}).`
            : "We couldn’t reach the server."
        }
        onRetry={refetch}
        showHome={false}
        showProjects
        showContact
      />
    );
  }

  const project = data;

  return (
    <div className="relative z-1 w-full h-full max-w-240">
      <BlurEdge edges="bottom" size={36} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col w-full h-full overflow-y-auto hide-scrollbar px-4 md:px-8 lg:px-16 pt-6 md:pt-10 pb-8 md:pb-12"
      >
        <div className="relative w-full">
          {/* Hero Image Section */}
          <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden rounded-xl">
            {project.displayPictureUrl && (
              <img
                src={project.displayPictureUrl}
                alt={project.name}
                className="object-cover w-full h-full"
              />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-page via-page/50 to-transparent"></div>

            {/* Back Button */}
            <Link
              to="/projects"
              className="absolute top-4 left-4 md:top-8 md:left-8 z-10 flex items-center gap-2 px-4 py-2.5 bg-page/50 backdrop-blur-sm rounded-xl border border-ink/8 text-ink hover:border-ink/20 hover:bg-ink/10 transition-[color,background-color,border-color] duration-300"
            >
              <IoArrowBack className="text-xl" />
              <span className="michroma text-sm">Back</span>
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
                  <h1 className="michroma text-3xl md:text-4xl lg:text-5xl text-ink mb-2">
                    {project.name}
                  </h1>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="orbitron text-sm text-ink/50 tracking-wide">
                      {project.year}
                    </span>
                    <span className="h-3 w-px bg-ink/15" />
                    <span className="orbitron text-[10px] tracking-[0.15em] uppercase px-3 py-1 bg-ink/5 rounded-lg border border-ink/8 text-ink/50">
                      {project.projectType}
                    </span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 px-4 py-2.5 bg-ink/5 backdrop-blur-sm rounded-xl border border-ink/8 text-ink hover:border-ink/20 hover:bg-ink/10 transition-[color,background-color,border-color] duration-300"
                    >
                      <FaGithub className="text-lg text-ink/60 group-hover/link:text-ink transition-colors duration-300" />
                      <span className="michroma text-xs tracking-wide">
                        Repository
                      </span>
                    </a>
                  )}
                  {project.siteUrl && (
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 px-4 py-2.5 bg-ink/5 backdrop-blur-sm rounded-xl border border-ink/8 text-ink hover:border-ink/20 hover:bg-ink/10 transition-[color,background-color,border-color] duration-300"
                    >
                      <CgWebsite className="text-lg text-ink/60 group-hover/link:text-ink transition-colors duration-300" />
                      <span className="michroma text-xs tracking-wide">
                        Website
                      </span>
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
              <span className="orbitron text-[10px] tracking-[0.15em] uppercase text-ink/40 mb-3 block">
                About
              </span>
              <div className="h-px w-full bg-linear-to-r from-transparent via-ink/10 to-transparent mb-5" />
              <p className="text-ink-muted text-base md:text-lg leading-relaxed">
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
              <span className="orbitron text-[10px] tracking-[0.15em] uppercase text-ink/40 mb-3 block">
                Tech Stack
              </span>
              <div className="h-px w-full bg-linear-to-r from-transparent via-ink/10 to-transparent mb-5" />
              <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.techStack?.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    className="group/tech rounded-xl border border-ink/8 bg-page/50 backdrop-blur-sm p-4 hover:border-ink/20 hover:bg-ink/5 hover:shadow-lg hover:shadow-ink/10 transition-[border-color,background-color,box-shadow] duration-300 flex items-center gap-3 w-full overflow-hidden relative"
                  >
                    <div
                      aria-hidden
                      className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-ink/15 to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity duration-500"
                    />
                    <div className="w-9 h-9 shrink-0">
                      <StackIcon name={tech} className="w-full h-full" />
                    </div>
                    <h3 className="michroma text-sm text-ink capitalize">
                      {tech}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Project;
