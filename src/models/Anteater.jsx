import { useMemo, useState } from "react";
import * as THREE from "three";
import { Billboard, Html, useCursor, useGLTF } from "@react-three/drei";
import { FaGraduationCap } from "react-icons/fa";
import anteaterScene from "../assets/3d/anteater.glb?url";

/** Skip raycasts so the hover overlay never steals the pointer from the base model. */
const noopRaycast = () => {};

function Anteater({ onOpen, bannerVisible = true, ...props }) {
  const { scene } = useGLTF(anteaterScene);
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

  const bannerPosition = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    return [center.x, box.max.y + 0.35, center.z];
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
        <Billboard position={bannerPosition} follow>
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
              <FaGraduationCap className="h-3.5 w-3.5 shrink-0 opacity-95" aria-hidden />
              <span>Education</span>
            </div>
          </Html>
        </Billboard>
      ) : null}
      <primitive object={scene} dispose={null} />
      {hovered ? <primitive object={highlightScene} dispose={null} /> : null}
    </group>
  );
}

export default Anteater;
