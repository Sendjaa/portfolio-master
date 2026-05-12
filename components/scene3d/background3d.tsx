"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Stars, Float } from "@react-three/drei";

// Komponen interaktif agar objek sedikit mengikuti mouse
const InteractiveObject = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      // Mengambil posisi mouse (-1 ke 1)
      const x = (state.mouse.x * viewport.width) / 6;
      const y = (state.mouse.y * viewport.height) / 6;
      
      // Lerp untuk pergerakan halus (Smooth follow)
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y, 0.05);
      
      // Rotasi otomatis konstan
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <torusKnotGeometry args={[1.5, 0.4, 250, 40]} />
      <meshToonMaterial color="#c084fc" />
      <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.05} />
    </mesh>
  );
};

const Points = ({ count = 2500 }) => {
  const meshRef = useRef<THREE.Points>(null);
  const particles = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#22d3ee" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
};

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} shadows>
        <fog attach="fog" args={["#020617", 5, 20]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow color="#a78bfa" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#06b6d4" />
        
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
          <InteractiveObject />
        </Float>
        
        <Points />
      </Canvas>
    </div>
  );
}