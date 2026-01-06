import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

export function SkullNeck(props) {
  const { nodes } = useGLTF("/public/human_skull_and_neck/scene.gltf");

  const obsidianMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#000000",
        roughness: 0.1, // glassy but not mirror
        metalness: 0,
        clearcoat: 0,
        clearcoatRoughness: 0.03,
        reflectivity: 0.1,
        envMapIntensity: 2.5,
        ior: 1.25, // glass, not diamond
        transmission: 0.05, // VERY subtle depth
        thickness: 0.5,
      }),
    []
  );
  return (
    <group {...props} dispose={null}>
      <group
        rotation={[-Math.PI / 2, 0, 1.2]}
        scale={0.693}
        position={[0, 0 - 0.0, 0]}
      >
        {Object.values(nodes).map((node, i) =>
          node.geometry ? (
            <mesh
              key={i}
              geometry={node.geometry}
              material={obsidianMaterial}
            />
          ) : null
        )}
      </group>
    </group>
  );
}

useGLTF.preload("/public/human_skull_and_neck/scene.gltf");
