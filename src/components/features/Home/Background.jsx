import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Center, Environment } from "@react-three/drei";

import { Skull } from "./Skull";
import CuriousSkeleton from "./CuriousSkeleton";

const Background = () => {
  return (
    <div className="absolute inset-0 w-full h-full p-0 m-0 bg-black">
      <Canvas>
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
