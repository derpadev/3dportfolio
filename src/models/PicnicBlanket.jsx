import React, { useEffect, useMemo } from "react";
import * as THREE from "three";

const SIZE_TEX = 512;

/**
 * Draw classic gingham: semi-transparent stripes horizontal + vertical; overlaps read darker.
 */
function createGinghamCanvasTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = SIZE_TEX;
  canvas.height = SIZE_TEX;
  const ctx = canvas.getContext("2d");

  const base = "#fdf8f4";
  const stripe = "rgba(210, 75, 95, 0.42)";

  ctx.fillStyle = base;
  ctx.fillRect(0, 0, SIZE_TEX, SIZE_TEX);

  const bands = 14;
  const bandPx = SIZE_TEX / bands;

  ctx.fillStyle = stripe;
  for (let i = 0; i < bands; i += 2) {
    ctx.fillRect(0, i * bandPx, SIZE_TEX, bandPx);
  }
  for (let i = 0; i < bands; i += 2) {
    ctx.fillRect(i * bandPx, 0, bandPx, SIZE_TEX);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/**
 * Square picnic blanket: plane on XZ (Y up), gingham from canvas (no GLB).
 * @param {number} size - width & depth in world units
 */
const PicnicBlanket = ({
  size = 3.5,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  ...rest
}) => {
  const map = useMemo(() => createGinghamCanvasTexture(), []);

  useEffect(() => {
    return () => map.dispose();
  }, [map]);

  return (
    <group position={position} rotation={rotation} {...rest}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial
          map={map}
          roughness={0.92}
          metalness={0}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default PicnicBlanket;
