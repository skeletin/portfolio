import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Skeletin from "../svgs/Skeletin";

const NavigationBar = () => {
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
    <nav className="w-full z-20 sticky top-0 bg-black flex space-x-4 items-center p-2 ">
      <Link
        to="/"
        className={`hover:opacity-80 transition-opacity duration-300 ${pathname === "/" ? "hover:opacity-100" : "opacity-70"}`}
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
                `pb-1 transition-colors duration-200 border-b border-transparent ${
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
  );
};

export default NavigationBar;
