import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1, 0];
    let rotation = [0, 1, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ position: [0, 3, 15], near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls target={[0, 0, 0]} enablePan={false} />
          <directionalLight position={[5, 10, 5]} intensity={1.2} />
          <ambientLight intensity={0.7} />
          <Sky />
          <Island 
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
