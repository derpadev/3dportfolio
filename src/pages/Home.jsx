import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import { SCENE_MODALS } from "../components/modalContent/SceneModalBodies";
import Island from "../models/Island";
import Camping from "../models/Camping";
import Coffee from "../models/Coffee";
import Apple from "../models/Apple";
import Monitor from "../models/Monitor";
import PicnicBlanket from "../models/PicnicBlanket";
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

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  /** Which modal is open — keys must match `SCENE_MODALS` in SceneModalBodies.jsx */
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);
  const config = activeModal ? SCENE_MODALS[activeModal] : null;
  const Body = config?.Body;

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{
          position: [0.45, 6.2, -1.35],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            target={[0, 0, 0]}
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2 - 0.35}
            maxPolarAngle={1.3}
          />
          <directionalLight position={[5, 10, 5]} intensity={1.2} />
          <ambientLight intensity={0.7} />
          <Sky />
          <PicnicBlanket
            position={[1, 0.45, -1.5]}
            rotation={[0, 0.4, 0]}
          />
          {/* <Camping scale={0.95} /> */}
          <Monitor
            position={[1.5, 0.5, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1}
            onOpen={() => setActiveModal("monitor")}
          />
          <Coffee
            position={[1.5, 0.6, -1]}
            rotation={[0, 3, 0]}
            scale={0.25}
            onOpen={() => setActiveModal("coffee")}
          />
          <Apple position={[0.8, 0.2, 1.2]} rotation={[0, 3, 0]} scale={1} />
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>

      <Modal
        open={!!config}
        onClose={closeModal}
        title={config?.title ?? ""}
        titleId={`scene-modal-${activeModal ?? "none"}`}
      >
        {Body ? <Body /> : null}
      </Modal>
    </section>
  );
};

export default Home;
