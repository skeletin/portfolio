import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Center, Environment } from "@react-three/drei";
import CuriousSkeleton from "./CuriousSkeleton";
import { useTheme } from "../../../context/ThemeContext";
import { useModelReady } from "../../../context/ModelReadyContext";
import DotGrid from "../../ui/DotGrid";

// Signals that the 3D model finished loading (rendered inside Suspense)
const ModelLoadedSignal = () => {
  const { setModelReady } = useModelReady();
  useEffect(() => {
    setModelReady();
  }, [setModelReady]);
  return null;
};

const Background = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed w-full h-full p-0 m-0 pointer-events-none" style={{ minHeight: 600 }}>
      {/* Dot grid sits behind the 3D canvas */}
      <DotGrid />
      <Canvas
        frameloop="demand"
        className="relative z-10"
        onCreated={({ gl, scene, camera }) => {
          // Pre-compile all shaders upfront to avoid lag spikes on first render
          gl.compile(scene, camera);
        }}
      >
        <Environment preset="studio" />
        <Suspense fallback={null}>
          <Center position={[0, -1.4, 4.2]}>
            <CuriousSkeleton theme={theme} />
          </Center>
          <ModelLoadedSignal />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background;
