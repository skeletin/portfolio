import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Center, Environment } from "@react-three/drei";

import { Skull } from "./Skull";

const Background = () => {
  return (
    <div className="absolute inset-0 w-full h-full p-0 m-0 bg-black">
      <Canvas>
        <Environment preset="studio" />
        <Suspense fallback={null}>
          <Center position={[0, 0, 2]}>
            <Skull />
          </Center>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background;
