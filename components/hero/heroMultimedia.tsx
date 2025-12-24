"use client"

import React from 'react';
import { ChevronDown } from 'lucide-react';

export const HeroPersonal = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-grid">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />
    <div className="relative z-10 text-center">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#4ade80] font-mono text-sm tracking-[0.5em] mb-4 uppercase">Multimedia Specialist</motion.p>
      <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-[15vw] lg:text-[10vw] font-black leading-none uppercase italic">CREATIVE<br/><span className="text-stroke">VISION</span></motion.h1>
    </div>
    <div className="absolute bottom-10 animate-bounce"><ChevronDown size={32} /></div>
  </section>
);