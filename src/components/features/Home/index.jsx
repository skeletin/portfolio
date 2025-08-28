import { Outlet } from "react-router";
import HomeNav from "./HomeNav";
import ProjectContainer from "../../containers/ProjectContainer";

const Home = () => {
  return (
    <div className="flex flex-col h-full text-white mt-10">
      <HomeNav />
      <ProjectContainer projects={[{}]} />
    </div>
  );
};

export default Home;
