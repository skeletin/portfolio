import HomeNav from "./HomeNav";
import ProjectContainer from "../../containers/ProjectContainer";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../../endpoints/ProjectEndpoints";
import HomeLayout from "../../layouts/HomeLayout";
import { CgSpinnerTwo } from "react-icons/cg";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    retry: false,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full w-full">
        <CgSpinnerTwo className="text-gray-500 text-6xl animate-spin" />
      </div>
    );

  if (data) {
    const projects = data?.data;
    return (
      <HomeLayout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col h-full text-white mt-10 max-w-[50rem] items-center"
        >
          <HomeNav />
          <ProjectContainer projects={projects} />
        </motion.div>
      </HomeLayout>
    );
  }
};

export default Home;
