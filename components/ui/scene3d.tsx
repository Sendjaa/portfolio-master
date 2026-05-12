"use client"; // Wajib karena Three.js berjalan di sisi client (browser)
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function Box() {
  return (
    <mesh rotation={[10, 10, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <Box />
        <OrbitControls /> {/* Memungkinkan user memutar objek dengan mouse */}
      </Canvas>
    </div>
  );
}