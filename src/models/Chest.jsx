import { useMemo, useState } from "react";
import * as THREE from "three";
import { Billboard, Html, useCursor, useGLTF } from "@react-three/drei";
import { FaFolderOpen } from "react-icons/fa";
import chestScene from "../assets/3d/chest.glb?url";

/** Skip raycasts so the hover overlay never steals the pointer from the base model. */
const noopRaycast = () => {};

function Chest({ onOpen, bannerVisible = true, ...props }) {
  const { scene } = useGLTF(chestScene);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const baseScale = props.scale ?? 1;
  const scaleMultiplier = hovered ? 1.06 : 1;
  const interactiveScale = Array.isArray(baseScale)
    ? baseScale.map((value) => value * scaleMultiplier)
    : baseScale * scaleMultiplier;
  const highlightScene = useMemo(() => {
    const clonedScene = scene.clone(true);

    clonedScene.traverse((child) => {
      if (!child.isMesh) return;

      child.material = new THREE.MeshBasicMaterial({
        color: "#93c5fd",
        transparent: true,
        opacity: 0.28,
        depthWrite: false,
        side: THREE.DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: -1,
      });
      child.renderOrder = 1;
      child.raycast = noopRaycast;
    });

    return clonedScene;
  }, [scene]);

  return (
    <group
      {...props}
      dispose={null}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        onOpen?.();
      }}
      scale={interactiveScale}
    >
      {bannerVisible ? (
        <Billboard position={[0, 2.5, 0]} follow>
          <Html
            center
            distanceFactor={14}
            style={{
              pointerEvents: "none",
              width: "max-content",
              whiteSpace: "nowrap",
            }}
          >
            <div className="inline-flex max-w-none items-center gap-1.5 whitespace-nowrap rounded-md bg-neutral-900/90 px-3 py-1 text-xs font-medium text-white shadow-md backdrop-blur-sm">
              <FaFolderOpen className="h-3.5 w-3.5 shrink-0 opacity-95" aria-hidden />
              <span>Projects</span>
            </div>
          </Html>
        </Billboard>
      ) : null}
      <primitive object={scene} dispose={null} />
      {hovered ? <primitive object={highlightScene} dispose={null} /> : null}
    </group>
  );
}

export default Chest;