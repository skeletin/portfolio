import HomeNav from "./HomeNav";
import ProjectContainer from "../../containers/ProjectContainer";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../../endpoints/ProjectEndpoints";
import HomeLayout from "../../layouts/HomeLayout";
import { CgSpinnerTwo } from "react-icons/cg";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";

const Home = () => {
  const [projectType, setProjectType] = useState("personal");

  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    select: (res) => res?.data.filter((p) => p.projectType === projectType),
    retry: false,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full w-full">
        <CgSpinnerTwo className="text-gray-500 text-6xl animate-spin" />
      </div>
    );

  if (data) {
    return (
      <HomeLayout>
        <HomeNav projectType={projectType} setProjectType={setProjectType} />
        <ProjectContainer projects={data} />
      </HomeLayout>
    );
  }
};

export default Home;
