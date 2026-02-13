import { Outlet } from "react-router";
import Background from "../features/Home/Background";
import NavigationBar from "../shared/NavigationBar";

const AppLayout = () => {
  return (
    <div className="relative flex flex-col w-full h-screen bg-page overflow-y-auto transition-colors duration-500">
      <NavigationBar />
      <div className="relative flex justify-center w-full flex-1 min-h-0 overflow-auto">
        <Outlet />
      </div>
      <Background />
    </div>
  );
};

export default AppLayout;
