import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import { SCENE_MODALS } from "../components/modalContent/sceneModalsRegistry";
import Island from "../models/Island";
import Coffee from "../models/Coffee";
import Chest from "../models/Chest";
import Book from "../models/Book";
import Monitor from "../models/Monitor";
import Tree from "../models/Tree";
import Sky from "../models/Sky";

/** Set true to free-fly with OrbitControls (zoom / pan / orbit). */
const DEBUG_CAMERA = false;

/** Fixed-position camera that gently turns toward the pointer. */
function MouseLookCamera({
  lookRange = 4,
  ease = 0.06,
  // Resting aim sits above the origin so the default view looks slightly up
  baseLookAt = [0, 1.5, 0],
}) {
  const { camera, pointer } = useThree();
  const lookAt = useRef(new THREE.Vector3(...baseLookAt));
  const desired = useRef(new THREE.Vector3(...baseLookAt));

  useFrame(() => {
    desired.current.set(
      baseLookAt[0] + pointer.x * lookRange,
      baseLookAt[1] + pointer.y * lookRange * 0.45,
      baseLookAt[2]
    );
    lookAt.current.lerp(desired.current, ease);
    camera.lookAt(lookAt.current);
  });

  return null;
}

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1, 0];
    let rotation = [0, 1, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1.25, 1, 1.5];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  /** Which modal is open — keys must match `SCENE_MODALS` in sceneModalsRegistry.js */
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);
  const config = activeModal ? SCENE_MODALS[activeModal] : null;
  const Body = config?.Body;
  const bannerVisible = activeModal == null;

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{
          position: [-3, 6, -10],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          {DEBUG_CAMERA ? (
            <OrbitControls makeDefault />
          ) : (
            <MouseLookCamera />
          )}
          <directionalLight position={[5, 10, 5]} intensity={1.2} />
          <ambientLight intensity={0.7} />
          <Sky position={[0, 3, 0]} scale={[2, 2, 2]}/>
          <mesh
            position={[0, -1, 0]}
            rotation={[0, Math.PI + 1, 0]}
            receiveShadow
          >
            <boxGeometry args={[100, 1, 100]} />
            <meshStandardMaterial color="#2ED9FF" roughness={0.85} metalness={0.05} />
          </mesh>
          <Monitor
            position={[-3, 0.45, 1]}
            rotation={[0, Math.PI + 0.3, 0]}
            scale={2}
            bannerVisible={bannerVisible}
            onOpen={() => setActiveModal("monitor")}
          />
          {/* <Coffee
            position={[1.5, 0.6, -1]}
            rotation={[0, 3, 0]}
            scale={0.25}
            bannerVisible={bannerVisible}
            onOpen={() => setActiveModal("coffee")}
          /> */}     
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
          />
          <Tree position={[0, -3, 3]} scale={100} />
          <Book
            position={[-1.5, 0.2, -1.2]}
            rotation={[0, -0.2, 0]}
            scale={0.005}
            bannerVisible={bannerVisible}
            onOpen={() => setActiveModal("book")}
          />
          <Chest
            position={[3.5, 1.1, -1]}
            rotation={[0, 4, 0]}
            scale={0.7}
            bannerVisible={bannerVisible}
            onOpen={() => setActiveModal("chest")}
          />
        </Suspense>
      </Canvas>

      <Modal
        open={!!config}
        onClose={closeModal}
        title={config?.title ?? ""}
        subtitle={config?.subtitle}
        titleId={`scene-modal-${activeModal ?? "none"}`}
        subtitleId={`scene-modal-${activeModal ?? "none"}-subtitle`}
      >
        {Body ? <Body /> : null}
      </Modal>
    </section>
  );
};

export default Home;
