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
    color: "#4ade80", // Green
    icon: Palette,
    tag: "Multimedia"
  },
  {
    title: "Visual",
    sub: "Graphics",
    href: "/DesignGraphics",
    color: "#facc15", // Yellow
    icon: MonitorCog,
    tag: "Design"
  },
  {
    title: "Tech",
    sub: "Lab",
    href: "/Developer",
    color: "#3b82f6", // Blue
    icon: Code2,
    tag: "Engineering"
  },
  {
    title: "System",
    sub: "Core",
    href: "/iot",
    color: "#f87171", // Red
    icon: Cpu,
    tag: "Hardware/IoT"
  }
];

export default function EntryPage() {
  return (
    <main className="h-screen w-full flex flex-col md:flex-row bg-black overflow-hidden select-none">
      
      {sectors.map((sector, index) => (
        <Link 
          key={index}
          href={sector.href} 
          className="group relative flex-1 overflow-hidden border-b md:border-b-0 md:border-r border-white/5 last:border-0"
        >
          {/* Content Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="h-full flex flex-col items-center justify-center p-6 relative z-10"
          >
            <sector.icon 
              size={32} 
              style={{ color: sector.color }}
              className="mb-6 group-hover:scale-110 transition-transform duration-500" 
            />
            
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white text-center leading-none">
              {sector.title} <br/> 
              <span 
                className="text-transparent [text-stroke:1px_rgba(255,255,255,0.3)] group-hover:[text-stroke:0px] transition-all duration-500"
                style={{ '--hover-color': sector.color } as React.CSSProperties}
              >
                <span className="group-hover:text-(--hover-color) transition-colors duration-500">
                  {sector.sub}
                </span>
              </span>
            </h2>

            <div 
              style={{ color: sector.color }}
              className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest">{sector.tag}</span>
              <ArrowRight size={12} />
            </div>
          </motion.div>
          
          {/* Background Gradient Hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
            style={{ background: `radial-gradient(circle at center, ${sector.color} 0%, transparent 70%)` }}
          />
          
          {/* Vertical Label (Desktop Only) */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 hidden md:block">
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20 group-hover:text-white/40 transition-colors">
              0{index + 1}
            </span>
          </div>
        </Link>
      ))}

      {/* Floating Center Branding */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden lg:block">
        <div className="bg-black/40 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-full shadow-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-white whitespace-nowrap">
            SENJA DEV
          </span>
        </div>
      </div>

    </main>
  );
}