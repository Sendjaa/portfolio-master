"use client";

import dynamic from 'next/dynamic';

// Kita import di sini karena file ini sudah Client Component
const DynamicHeroBackground = dynamic(() => import("@/components/scene3d/background3d"), { ssr: false });
const DynamicHeroText = dynamic(() => import("@/components/scene3d/HeroText3d"), { ssr: false });

export default function VisualStage() {
  return (
    <>
      <DynamicHeroBackground />
      <DynamicHeroText />
    </>
  );
}