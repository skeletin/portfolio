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
    <nav className="w-full z-20 sticky top-0 bg-page flex items-center gap-1.5 sm:gap-3 md:gap-4 px-2 py-2 transition-colors duration-500">
      {/* Logo */}
      <Link
        to="/"
        className={`relative shrink-0 hover:opacity-80 transition-opacity duration-300 ${pathname === "/" ? "hover:opacity-100" : "opacity-70"}`}
      >
        {pathname === "/" && (
          <span className="absolute inset-0 rounded-full blur-xl bg-ink/20 pointer-events-none" />
        )}
        <Skeletin
          className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
          style={
            pathname === "/"
              ? { filter: "drop-shadow(0 0 10px rgba(var(--glow-rgb), 0.35))" }
              : undefined
          }
        />
      </Link>

      {/* Nav links */}
      <div className="flex text-[10px] sm:text-xs text-ink font-thin orbitron gap-0.5 sm:gap-1 min-w-0">
        {navItems.map(({ to, label, desktopLabel }) => (
          <NavLink key={to} to={to} className="relative">
            {({ isActive }) => (
              <span
                className={`relative z-10 block px-1.5 sm:px-2.5 py-1.5 rounded-md transition-colors duration-200 whitespace-nowrap ${
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

      {/* Theme toggle — always visible */}
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="ml-auto shrink-0 flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg border border-ink/8 bg-ink/5 text-ink/70 hover:text-ink hover:border-ink/20 hover:bg-ink/10 transition-[color,background-color,border-color] duration-300"
      >
        <IoSkull className="text-xs sm:text-sm" />
        {theme === "dark" ? (
          <IoSunny className="text-base sm:text-lg" />
        ) : (
          <IoMoon className="text-base sm:text-lg" />
        )}
      </button>
    </nav>
  );
};

export default NavigationBar;
