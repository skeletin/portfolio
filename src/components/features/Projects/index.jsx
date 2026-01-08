import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../../endpoints/ProjectEndpoints";
import { useState } from "react";
import ProjectContainer from "../../containers/ProjectContainer";

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
      <main className="flex flex-col z-1 w-full h-full mt-10 md:flex-row">
        <header className="flex items-center justify-center text-white michroma font-thin space-x-20 md:flex-col md:justify-normal  md:items-stretch md:border-r md:space-x-0 md:space-y-3">
          <button
            onClick={() => changeProjectType("personal")}
            className={`text-start p-2 border-b-2 border-transparent transition duration-500 ${
              projectType === "personal" ? "border-b-2 border-white" : null
            }`}
          >
            personal
          </button>
          <button
            onClick={() => changeProjectType("works")}
            className={`text-start p-2 border-b-2 border-transparent transition duration-500 ${
              projectType === "works" ? "border-b-2 border-white " : null
            }`}
          >
            works
          </button>
        </header>
        <div className="flex text-white px-8 mt-8 md:mt-0">
          <ProjectContainer projects={data} />
        </div>
      </main>
    );
};

export default Projects;
