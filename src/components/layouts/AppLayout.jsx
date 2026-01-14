import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Skeletin from "../svgs/Skeletin";
import { Link, Outlet, useLocation } from "react-router";
import Background from "../features/Home/Background";

const AppLayout = () => {
  const { pathname } = useLocation();

  const navRefs = {
    "/": useRef(),
    "/projects": useRef(),
    "/experience": useRef(),
    "/contact": useRef(),
  };

  const [currentTabWidth, setCurrentTabWidth] = useState(0);
  const [left, setLeft] = useState(0);

  useLayoutEffect(() => {
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

  return (
    <div className="relative flex flex-col w-full h-full bg-black overflow-auto items-center">
      <nav className="z-2 sticky top-0 bg-black flex space-x-4 items-center p-2">
        <Link
          to="/"
          className="justi hover:opacity-80 transition-opacity duration-300"
        >
          <Skeletin className="w-12 h-12 md:w-16 md:h-16" />
        </Link>
        <div className="flex flex-col text-xs text-white font-thin orbitron">
          <div className="flex space-x-4">
            {Object.entries(navRefs).map(([pathname, ref]) => (
              <Link to={pathname} ref={ref}>
                {pathname === "/" ? "home" : pathname.substring(1)}
              </Link>
            ))}
          </div>
          <div className="relative flex flex-1">
            <div
              style={{
                transform: `translateX(${left}px)`,
                width: `${currentTabWidth}px`,
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
