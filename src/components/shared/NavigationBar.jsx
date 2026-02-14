import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { motion } from "motion/react";
import Skeletin from "../svgs/Skeletin";
import { useTheme } from "../../context/ThemeContext";
import { IoSunny, IoMoon, IoSkull } from "react-icons/io5";

const NavigationBar = () => {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

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
    <nav className="w-full z-20 sticky top-0 bg-page flex space-x-4 items-center p-2 transition-colors duration-500">
      <Link
        to="/"
        className={`relative hover:opacity-80 transition-all duration-300 ${pathname === "/" ? "hover:opacity-100" : "opacity-70"}`}
      >
        {pathname === "/" && (
          <span className="absolute inset-0 rounded-full blur-xl bg-ink/20 pointer-events-none" />
        )}
        <Skeletin
          className="relative w-12 h-12 md:w-16 md:h-16"
          style={
            pathname === "/"
              ? { filter: "drop-shadow(0 0 10px rgba(var(--glow-rgb), 0.35))" }
              : undefined
          }
        />
      </Link>
      <div className="flex text-xs text-ink font-thin orbitron gap-1">
        {navItems.map(({ to, label }) => (
          <NavLink key={to} to={to} className="relative">
            {({ isActive }) => (
              <span
                className={`relative z-10 block px-2.5 py-1.5 rounded-md transition-colors duration-200 ${
                  isActive ? "text-ink" : "text-ink/55 hover:text-ink/80"
                }`}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute left-1 right-1 -bottom-0.5 h-px bg-linear-to-r from-ink/10 via-ink/40 to-ink/10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}
              </span>
            )}
          </NavLink>
        ))}
      </div>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="ml-auto flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-ink/10 bg-ink/5 text-ink/70 hover:text-ink hover:bg-ink/10 transition-all duration-300"
      >
        <IoSkull className="text-sm" />
        {theme === "dark" ? (
          <IoSunny className="text-lg" />
        ) : (
          <IoMoon className="text-lg" />
        )}
      </button>
    </nav>
  );
};

export default NavigationBar;
