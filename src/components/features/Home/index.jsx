import HomeNav from "./HomeNav";
import ProjectContainer from "../../containers/ProjectContainer";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../../endpoints/ProjectEndpoints";
import HomeLayout from "../../layouts/HomeLayout";
import { CgSpinnerTwo } from "react-icons/cg";
import title from "../../svgs/title.svg";

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
    return (
      <HomeLayout>
        <div className="z-1 flex flex-col items-center  justify-center w-full h-full bg-transparent text-3xl text-white">
          <div>
            <img src={title} />
          </div>
        </div>
      </HomeLayout>
    );
  }
};

export default Home;
