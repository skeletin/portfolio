import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Center, Environment } from "@react-three/drei";
import { SkullNeck } from "./SkullNeck";

const Background = () => {
  return (
    <div className="absolute inset-0 w-full h-full p-0 m-0 ">
      <Canvas>
        <Environment preset="studio" />
        <Suspense fallback={null}>
          <Center>
            <SkullNeck />
          </Center>{" "}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background;
