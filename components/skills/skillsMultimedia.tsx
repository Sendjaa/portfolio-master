"use client"
import React from 'react';

export const Skills = () => {
  const tools = ['After Effects', 'Premiere Pro', 'Cinema 4D', 'Blender', 'Figma', 'Photoshop'];
  return (
    <section id="skills" className="py-24 px-6 overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden group">
        <div className="flex space-x-12 animate-marquee py-10 group-hover:pause">
          {[...tools, ...tools].map((tool, i) => (
            <span key={i} className="text-6xl md:text-8xl font-black text-stroke hover:text-[#4ade80] transition-colors cursor-default uppercase">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};