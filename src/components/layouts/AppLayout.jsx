import { FaBars } from "react-icons/fa";
import Logo from "../svgs/Logo";
import { Link, Outlet } from "react-router";
import Background from "../features/Home/Background";

const AppLayout = () => {
  return (
    <div className="relative flex flex-col w-full h-full bg-black p-8 overflow-auto">
      <nav className="flex space-x-4 items-center">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex space-x-2 text-white font-thin">
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/experience">Experience</Link>
        </div>
      </nav>
      <Background />
      <Outlet />
    </div>
  );
};

export default AppLayout;
