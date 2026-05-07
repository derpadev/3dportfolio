import { useState } from "react";
import * as THREE from "three";
import { useGLTF, useCursor, Billboard, Html } from "@react-three/drei";
import bookScene from "../assets/3d/book.glb?url";
import { MdWork } from "react-icons/md";

/** Geometry ids used by the open-book mesh (same order as base meshes). */
const BOOK_GEOMETRY_KEYS = [
  "Object_10",
  "Object_11",
  "Object_2",
  "Object_3",
  "Object_4",
  "Object_5",
  "Object_6",
  "Object_7",
  "Object_8",
  "Object_9",
];

const OVERLAY_SCALE = 1.018;
const HOVER_SCALE_MULTIPLIER = 1.03;

/** Skip raycasts so the hover overlay never steals the pointer from the main meshes. */
const noopRaycast = () => {};

function Book({ onOpen, bannerVisible = true, ...props }) {
  const { nodes, materials } = useGLTF(bookScene);
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
        <Billboard position={[0, 250, 0]} follow>
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
              <MdWork className="h-3.5 w-3.5 shrink-0 opacity-95" aria-hidden />
              <span>Experience</span>
            </div>
          </Html>
        </Billboard>
      ) : null}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.vray_Open_book_pages_02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.vray_book_page_04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.vray_book_page_02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.vray_book_page_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.vray_book_page_03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.vray_book_page_05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.vray_book_page_06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.vray_Open_book_cover_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.vray_Open_book_inside_cover_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.vray_Open_book_pages_01}
        />
        {hovered
          ? BOOK_GEOMETRY_KEYS.map((key) => (
              <mesh
                key={`overlay-${key}`}
                geometry={nodes[key].geometry}
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
            ))
          : null}
      </group>
    </group>
  );
}

export default Book;
