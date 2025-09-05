import { FaBars } from "react-icons/fa";
import Logo from "../svgs/Logo";
import { Link, Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="relative flex flex-col w-full h-full bg-black p-8 overflow-auto">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        {/* <button className="flex justify-center items-center group hover:bg-gray-200 w-10 h-10 rounded-full transition duration-500">
          <FaBars className="text-white group-hover:text-black" />
        </button> */}
      </nav>
      <Outlet />
    </div>
  );
};

export default AppLayout;
