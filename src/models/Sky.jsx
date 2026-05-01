import React from "react";
import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb?url";

const Sky = (props) => {
  const { scene } = useGLTF(skyScene);

  return (
    <group {...props} dispose={null}>
      <primitive
        object={scene}
        position={[0, 0, 0]}
        rotation={[0, 1, 0]}
        scale={0.0001}
      />
    </group>
  );
};

useGLTF.preload(skyScene);

export default Sky;