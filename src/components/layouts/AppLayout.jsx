import { Outlet } from "react-router";
import Background from "../features/Home/Background";
import NavigationBar from "../shared/NavigationBar";
import BlurEdge from "../ui/BlurEdge";

const AppLayout = () => {
  return (
    <div className="relative flex flex-col w-full h-full bg-page transition-colors duration-500">
      <NavigationBar />
      <div className="relative flex-1 min-h-0">
        <BlurEdge edges="bottom" size={36} />
        <div className="flex justify-center w-full h-full overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </div>
      <Background />
    </div>
  );
};

export default AppLayout;
