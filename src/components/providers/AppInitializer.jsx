import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AnimatePresence } from "motion/react";
import SplashScreen from "../features/SplashScreen/index.jsx";
import { getProjects } from "../../endpoints/ProjectEndpoints";

const AppInitializer = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const queryClient = useQueryClient();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Prefetch projects data
        await queryClient.prefetchQuery({
          queryKey: ["projects"],
          queryFn: getProjects,
          staleTime: 1000 * 60 * 5, // 5 minutes
        });

        // Minimum display time for splash screen (for smooth UX)
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } catch (error) {
        console.error("Error initializing app:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, [queryClient]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
};

export default AppInitializer;

