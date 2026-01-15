import Skeletin from "../svgs/Skeletin";
import { Link, NavLink, Outlet } from "react-router";
import Background from "../features/Home/Background";

const AppLayout = () => {
  const navItems = [
    { to: "/", label: "home" },
    { to: "/projects", label: "projects" },
    { to: "/experience", label: "experience" },
    { to: "/contact", label: "contact" },
  ];

  return (
    <div className="relative flex flex-col w-full h-full bg-black overflow-auto items-center">
      <nav className="w-full z-2 sticky top-0 bg-black flex space-x-4 items-center p-2">
        <Link
          to="/"
          className="justi hover:opacity-80 transition-opacity duration-300"
        >
          <Skeletin className="w-12 h-12 md:w-16 md:h-16" />
        </Link>
        <div className="flex flex-col text-xs text-white font-thin orbitron">
          <div className="flex space-x-4">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `pb-1 transition-colors duration-200 ${
                    isActive
                      ? "text-white border-b border-white"
                      : "text-white/70 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      <Background />
      <Outlet />
    </div>
  );
};

export default AppLayout;
