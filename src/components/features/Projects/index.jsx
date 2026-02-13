import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../../endpoints/ProjectEndpoints";
import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import PageTitle from "../../ui/PageTitle";
import { motion } from "motion/react";
import ServerError from "../ServerError";

const Projects = () => {
  const [projectType, setProjectType] = useState("all");

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    select: (res) =>
      res.data.filter((project) => 
        projectType === "all" ? true : project.projectType === projectType
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
        className="flex items-center justify-center h-full text-white"
      >
        <div className="text-xl michroma">Loading...</div>
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
            : "We couldn’t reach the server."
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
        className="relative flex flex-col z-1 w-full h-full px-4 pt-6 md:px-8 md:pt-10 lg:px-16"
      >
        <PageTitle className="mb-6">PROJECTS</PageTitle>
        <div className="w-full max-w-7xl mx-auto overflow-hidden h-full">
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
