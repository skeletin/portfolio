import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AnimatePresence } from "motion/react";
import SplashScreen from "../features/SplashScreen/index.jsx";
import { getProjects } from "../../endpoints/ProjectEndpoints";
import { useModelReady } from "../../context/ModelReadyContext";

const AppInitializer = ({ children }) => {
  const [dataReady, setDataReady] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const { modelReady } = useModelReady();
  const queryClient = useQueryClient();

  const isReady = dataReady && modelReady && minTimeElapsed;

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Prefetch projects data
        await queryClient.prefetchQuery({
          queryKey: ["projects"],
          queryFn: getProjects,
          staleTime: 1000 * 60 * 5, // 5 minutes
        });
      } catch (error) {
        console.error("Error initializing app:", error);
      } finally {
        setDataReady(true);
      }
    };

    initializeApp();

    // Minimum display time for splash screen (for smooth UX)
    const timer = setTimeout(() => setMinTimeElapsed(true), 1500);
    return () => clearTimeout(timer);
  }, [queryClient]);

  return (
    <>
      <AnimatePresence>
        {!isReady && <SplashScreen />}
      </AnimatePresence>
      {/* Always render children so the 3D model can load behind the splash */}
      <div className={`w-full h-full ${isReady ? "" : "invisible"}`}>
        {children}
      </div>
    </>
  );
};

export default AppInitializer;

