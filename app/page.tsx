"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Palette, Code2, ArrowRight, MonitorCog, Cpu } from 'lucide-react';

const sectors = [
  {
    title: "Creative",
    sub: "Studio",
    href: "/Multimedia",
    color: "#4ade80",
    icon: Palette,
    tag: "Multimedia",
    desc: "Motion & Video"
  },
  {
    title: "Visual",
    sub: "Graphics",
    href: "/DesignGraphics",
    color: "#facc15",
    icon: MonitorCog,
    tag: "Design",
    desc: "Brand Identity"
  },
  {
    title: "Tech",
    sub: "Lab",
    href: "/Developer",
    color: "#3b82f6",
    icon: Code2,
    tag: "Engineering",
    desc: "Full-stack Dev"
  },
  {
    title: "System",
    sub: "Core",
    href: "/iot",
    color: "#f87171",
    icon: Cpu,
    tag: "Hardware/IoT",
    desc: "Smart Systems"
  }
];

export default function EntryPage() {
  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row bg-[#050505] overflow-hidden select-none">
      
      {sectors.map((sector, index) => (
        <Link 
          key={index}
          href={sector.href} 
          className="group relative flex-1 flex flex-col overflow-hidden border-b md:border-b-0 md:border-r border-white/5 last:border-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:hover:flex-[1.5]"
        >
          {/* Content Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="h-full w-full flex flex-col items-center justify-center p-8 relative z-10"
          >
            {/* Animated Icon with Glow */}
            <div className="relative mb-8">
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
               >
                 <sector.icon 
                   size={48} 
                   style={{ color: sector.color }}
                   className="relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" 
                 />
               </motion.div>
               <div 
                 className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500"
                 style={{ backgroundColor: sector.color }}
               />
            </div>
            
            <h2 className="text-4xl xl:text-6xl font-black uppercase tracking-tighter text-white text-center leading-[0.85]">
              {sector.title} <br/> 
              <span 
                className="text-transparent [text-stroke:1px_rgba(255,255,255,0.2)] transition-all duration-500 group-hover:[text-stroke:1px_transparent]"
                style={{ '--hover-color': sector.color } as React.CSSProperties}
              >
                <span className="group-hover:text-(--hover-color) transition-colors duration-500">
                  {sector.sub}
                </span>
              </span>
            </h2>

            {/* Hidden Description - Appears on Hover */}
            <p className="mt-4 text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              {sector.desc}
            </p>

            <div 
              style={{ backgroundColor: sector.color }}
              className="mt-8 flex items-center gap-3 px-4 py-2 rounded-full text-black opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">{sector.tag}</span>
              <ArrowRight size={14} strokeWidth={3} />
            </div>
          </motion.div>
          
          {/* Subtle Background Overlay Image or Pattern */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 grayscale pointer-events-none scale-110 group-hover:scale-100 transition-transform duration-[2000ms]">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          </div>

          {/* Dynamic Background Glow */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
            style={{ background: `linear-gradient(to bottom, transparent, ${sector.color})` }}
          />
          
          {/* Index Numbering */}
          <div className="absolute bottom-10 md:top-10 left-1/2 -translate-x-1/2 overflow-hidden h-4">
            <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-white/10 group-hover:-translate-y-full transition-transform duration-500">
              0{index + 1}
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.4em] style={{ color: sector.color }} transition-transform duration-500 group-hover:-translate-y-full">
               GO
            </span>
          </div>
        </Link>
      ))}

      {/* Center Branding - More Minimalist */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
        <div className="group/brand bg-white/5 backdrop-blur-3xl border border-white/10 p-[2px] rounded-full overflow-hidden">
          <div className="bg-black/90 px-8 py-4 rounded-full flex items-center gap-4 transition-transform duration-500 group-hover/brand:scale-95">
             <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
             <span className="font-mono text-[11px] uppercase tracking-[0.6em] text-white/90">
               SENJA DEV
             </span>
             <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </div>
        </div>
      </div>

    </main>
  );
}