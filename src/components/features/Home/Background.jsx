import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Center, Environment } from "@react-three/drei";
import CuriousSkeleton from "./CuriousSkeleton";

const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full p-0 m-0 pointer-events-none bg-black">
      <Canvas frameloop="demand">
        <Environment preset="studio" />
        <Suspense fallback={null}>
          <Center position={[0, -1.4, 4.2]}>
            <CuriousSkeleton />
          </Center>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background;
