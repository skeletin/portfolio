import HomeNav from "./HomeNav";
import ProjectContainer from "../../containers/ProjectContainer";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../../endpoints/ProjectEndpoints";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    retry: false,
  });

  if (isLoading) return <div className="text-white">Loading...</div>;

  if (data) {
    const { data: projects } = data;
    return (
      <div className="flex flex-col h-full text-white mt-10">
        <HomeNav />
        <ProjectContainer projects={projects} />
      </div>
    );
  }
};

export default Home;
