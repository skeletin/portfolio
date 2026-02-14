import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../../endpoints/ProjectEndpoints";
import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import PageTitle from "../../ui/PageTitle";
import { motion } from "motion/react";
import ServerError from "../ServerError";
import { mockProjects } from "./mockData";

const Projects = () => {
  const [projectType, setProjectType] = useState("all");

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    select: (res) =>
      res.data.filter((project) =>
        projectType === "all" ? true : project.projectType === projectType,
      ),
    retry: false,
  });

  const changeProjectType = (type) => {
    setProjectType(type);
  };

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

  if (isError) {
    return (
      <ServerError
        title="Projects unavailable"
        message={
          error?.status
            ? `The server returned an error (${error.status}).`
            : "We couldn't reach the server."
        }
        onRetry={refetch}
        showContact
      />
    );
  }

  if (data) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative flex flex-col z-1 w-full h-full px-4 md:px-8 lg:px-16 pt-6 md:pt-10 pb-8 md:pb-12"
      >
        {/* ─── Header ─── */}
        <div className="relative mb-6 md:mb-8">
          <PageTitle className="mb-2">PROJECTS</PageTitle>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-center orbitron text-[10px] md:text-xs tracking-[0.15em] uppercase text-ink/30"
          >
            A selection of things I've built
          </motion.p>

          {/* Decorative line under header */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-4 h-px w-32 mx-auto bg-linear-to-r from-transparent via-ink/15 to-transparent origin-center"
          />
        </div>

        {/* ─── Grid ─── */}
        <div className="w-full max-w-7xl mx-auto overflow-hidden flex-1 min-h-0">
          <ProjectGrid
            projects={data}
            activeType={projectType}
            onTypeChange={changeProjectType}
          />
        </div>
      </motion.main>
    );
  }
};

export default Projects;
