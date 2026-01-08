import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Logo from "../svgs/Logo";
import { Link, Outlet, useLocation } from "react-router";
import Background from "../features/Home/Background";

const AppLayout = () => {
  const { pathname } = useLocation();

  const navRefs = {
    "/": useRef(null),
    "/projects": useRef(null),
    "/contact": useRef(null),
    "/experience": useRef(null),
  };

  const [cuurentTabWidth, setCurrentTabWidth] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    const activeRef = navRefs[pathname];
    if (!activeRef?.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setCurrentTabWidth(entry.contentRect.width);
    });

    observer.observe(activeRef.current);

    const entries = Object.entries(navRefs);

    let width = 0;
    for (const [key, ref] of entries) {
      if (!ref.current) return; // safety
      if (key === pathname) break;
      width += ref.current.getBoundingClientRect().width + 16;
    }

    setLeft(width);
    return () => observer.disconnect();
  }, [pathname, navRefs]);

  const reset = () => {
    setCurrentTabWidth(0);
    setLeft(0);
  };

  return (
    <div className="relative flex flex-col w-full h-full bg-black p-8 overflow-auto">
      <nav className="z-1 flex space-x-4 items-center">
        <Link onClick={reset} to="/">
          <Logo />
        </Link>
        <div className="flex flex-col text-sm text-white font-thin orbitron">
          <div className="flex space-x-4">
            <Link className="" to="/" ref={navRefs["/"]}>
              home
            </Link>
            <Link className="" to="/projects" ref={navRefs["/projects"]}>
              projects
            </Link>
            <Link className="" to="/contact" ref={navRefs["/contact"]}>
              contact
            </Link>
            <Link className="" to="/experience" ref={navRefs["/experience"]}>
              experience
            </Link>
          </div>
          <div className="relative flex flex-1">
            <div
              style={{
                transform: `translateX(${left}px)`,
                width: `${cuurentTabWidth}px`,
              }}
              className={`transition duration-300 ease-out relative h-0.5 bg-white`}
            />
          </div>
        </div>
      </nav>
      <Background />
      <Outlet />
    </div>
  );
};

export default AppLayout;
