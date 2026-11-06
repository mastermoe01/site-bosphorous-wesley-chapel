"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";

// An Iznik tile field drawn from the Wesley Chapel bar tile: glazed hex tiles in cobalt,
// white and turquoise, swelling like water in the strait (east → west, Asia → Europe).
// A single tulip-red glint travels across it.

const palette = ["#1f3f8f", "#1f3f8f", "#183274", "#132a63", "#284fa8", "#1f3f8f", "#2ea8e0", "#e8e0d1", "#132a63", "#183274"];
const TULIP = new THREE.Color("#e61e25");

function Tiles({ cols, rows, animate }: { cols: number; rows: number; animate: boolean }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const group = useRef<THREE.Group>(null);
  const count = cols * rows;
  const { pointer } = useThree();

  const { positions, base } = useMemo(() => {
    const r = 0.36;
    const w = Math.sqrt(3) * r + 0.05;
    const h = 1.5 * r + 0.05;
    const positions: [number, number][] = [];
    const base: THREE.Color[] = [];
    let seed = 7;
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const x = (i - cols / 2) * w + (j % 2 ? w / 2 : 0);
        const z = (j - rows / 2) * h;
        positions.push([x, z]);
        base.push(new THREE.Color(palette[Math.floor(rand() * palette.length)]));
      }
    }
    return { positions, base };
  }, [cols, rows]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tmp = useMemo(() => new THREE.Color(), []);

  const layout = (t: number) => {
    const m = mesh.current;
    if (!m) return;
    const span = cols * 0.7;
    const glintX = ((t * 1.4) % span) - span / 2;
    for (let k = 0; k < count; k++) {
      const [x, z] = positions[k];
      const y = Math.sin(x * 0.45 + t * 0.7) * 0.22 + Math.cos(z * 0.55 + t * 0.45) * 0.16;
      dummy.position.set(x, y, z);
      dummy.rotation.set(Math.cos(z * 0.55 + t * 0.45) * 0.12, 0, Math.cos(x * 0.45 + t * 0.7) * 0.16);
      dummy.updateMatrix();
      m.setMatrixAt(k, dummy.matrix);
      const d = Math.abs(x - glintX) + Math.abs(z) * 0.35;
      const g = Math.max(0, 1 - d / 1.4);
      tmp.copy(base[k]).lerp(TULIP, g * 0.85);
      m.setColorAt(k, tmp);
    }
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  };

  useLayoutEffect(() => layout(4.2));

  useFrame((state, delta) => {
    if (!animate) return;
    layout(state.clock.elapsedTime + 4.2);
    const g = group.current;
    if (g) {
      g.rotation.x = THREE.MathUtils.damp(g.rotation.x, pointer.y * 0.06, 2, delta);
      g.rotation.z = THREE.MathUtils.damp(g.rotation.z, -pointer.x * 0.05, 2, delta);
    }
  });

  return (
    <group ref={group}>
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <cylinderGeometry args={[0.36, 0.36, 0.1, 6]} />
        <meshStandardMaterial roughness={0.22} metalness={0.05} />
      </instancedMesh>
    </group>
  );
}

export default function TileScene({ small, animate }: { small: boolean; animate: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={animate ? "always" : "demand"}
      camera={{ position: [0, 6.2, 9.5], fov: 34 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ camera }) => camera.lookAt(0, 0, 1.5)}
      aria-hidden
    >
      <fog attach="fog" args={["#0b1430", 6.5, 16]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 9, 4]} intensity={1.15} color="#ffe7c2" />
      <pointLight position={[-6, 3, 2]} intensity={12} color="#2ea8e0" />
      <Tiles cols={small ? 24 : 50} rows={small ? 26 : 34} animate={animate} />
    </Canvas>
  );
}
