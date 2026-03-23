"use client"
import React from 'react';

export const Skills = () => {
  const tools = ['After Effects', 'Premiere Pro', 'Cinema 4D', 'Blender', 'Figma', 'Photoshop'];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap group relative">
        {/* Container Utama Animasi */}
        <div className="flex animate-marquee py-10">
          {[...tools, ...tools, ...tools].map((tool, i) => (
            <span 
              key={i} 
              className="text-6xl md:text-9xl font-black mx-8 transition-all duration-500 cursor-default uppercase tracking-tighter text-stroke-custom"
            >
              {tool}
            </span>
          ))}
        </div>
        
        {/* Duplikasi untuk menyambung (Gap-less) */}
        <div className="flex animate-marquee py-10" aria-hidden="true">
          {[...tools, ...tools, ...tools].map((tool, i) => (
            <span 
              key={`dup-${i}`} 
              className="text-6xl md:text-9xl font-black mx-8 transition-all duration-500 cursor-default uppercase tracking-tighter text-stroke-custom"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};