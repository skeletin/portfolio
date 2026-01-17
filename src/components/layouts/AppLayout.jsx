import Skeletin from "../svgs/Skeletin";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import Background from "../features/Home/Background";
import { useEffect } from "react";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page =
      pathname === "/"
        ? "HOME"
        : pathname.startsWith("/about")
        ? "ABOUT"
        : pathname.startsWith("/projects/")
        ? "PROJECT"
        : pathname.startsWith("/projects")
        ? "PROJECTS"
        : pathname.startsWith("/experience")
        ? "EXPERIENCE"
        : pathname.startsWith("/contact")
        ? "CONTACT"
        : "HOME";

    document.title = `SKELETIN - ${page}`;
  }, [pathname]);

  const navItems = [

    { to: "/about", label: "about" },
    { to: "/projects", label: "projects" },
    { to: "/experience", label: "experience" },
    { to: "/contact", label: "contact" },
  ];

  return (
    <div className="relative flex flex-col w-full h-full bg-black overflow-y-auto">
      <nav className="w-full z-20 sticky top-0 bg-black flex space-x-4 items-center p-2">
        <Link
          to="/"
          className={`hover:opacity-80 transition-opacity duration-300 ${pathname === "/" ? "hover:opacity-100":"opacity-70"}`}
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
      <div className="w-full flex flex-1 justify-center items-center">
        <Outlet />
      </div>

      <footer className="relative z-10 w-full px-4 py-4 text-center text-xs text-white/60 font-thin orbitron">
        made with passion <span aria-hidden="true">♥</span>
      </footer>
    </div>
  );
};

export default AppLayout;
