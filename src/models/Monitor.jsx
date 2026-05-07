import { useState } from "react";
import * as THREE from "three";
import { useGLTF, useCursor, Billboard, Html } from "@react-three/drei";
import { FaUser } from "react-icons/fa";

import monitorScene from "../assets/3d/monitor.glb?url";

const MONITOR_ROTATION = [-Math.PI, -Math.PI / 4, -Math.PI];
const MONITOR_SCALE = 0.489;
const OVERLAY_SCALE = MONITOR_SCALE * 1.018;
const HOVER_SCALE_MULTIPLIER = 1.03;

/** Skip raycasts so the hover overlay never steals the pointer from the main mesh. */
const noopRaycast = () => {};

function Monitor({ onOpen, bannerVisible = true, ...props }) {
  const { nodes, materials } = useGLTF(monitorScene);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const baseScale = props.scale ?? 1;
  const interactiveScale = Array.isArray(baseScale)
    ? baseScale.map((value) => value * (hovered ? HOVER_SCALE_MULTIPLIER : 1))
    : baseScale * (hovered ? HOVER_SCALE_MULTIPLIER : 1);
  return (
    <group
      {...props}
      scale={interactiveScale}
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
    >
      {bannerVisible ? (
        <Billboard position={[0, 1.15, 0]} follow>
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
              <FaUser className="h-3.5 w-3.5 shrink-0 opacity-95" aria-hidden />
              <span>About Me</span>
            </div>
          </Html>
        </Billboard>
      ) : null}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.monitor}
        rotation={MONITOR_ROTATION}
        scale={MONITOR_SCALE}
      />
      {hovered && (
        <mesh
          geometry={nodes.Object_4.geometry}
          rotation={MONITOR_ROTATION}
          scale={OVERLAY_SCALE}
          renderOrder={1}
          raycast={noopRaycast}
        >
          <meshBasicMaterial
            color="#93c5fd"
            transparent
            opacity={0.28}
            depthWrite={false}
            side={THREE.DoubleSide}
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </mesh>
      )}
    </group>
  );
}

export default Monitor;
