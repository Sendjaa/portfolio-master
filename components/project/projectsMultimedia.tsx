"use client"
import { ExternalLink, PlayCircle } from "lucide-react";
import React from 'react';

const projectMultimediaData = [
  { 
    year: '2022 - Now', 
    role: 'Senior Motion Designer', 
    company: 'Studio XYZ',
    tags: ['After Effects', 'C4D', 'Lottie'],
    preview: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300' // Ganti dengan screenshot karya
  },
  { 
    year: '2020 - 2022', 
    role: 'Multimedia Lead', 
    company: 'Digital Agency',
    tags: ['Video Dir', 'Post-Prod', 'Branding'],
    preview: 'https://images.unsplash.com/photo-1492691523567-6170f2295b4f?auto=format&fit=crop&w=300'
  },
  { 
    year: '2018 - 2020', 
    role: 'Video Editor', 
    company: 'Broadcast TV',
    tags: ['Premiere Pro', 'Color Grading', 'Live-Stream'],
    preview: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=300'
  },
];

export const Projects = () => {
  return (
    <section id="experience" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-20 border-b border-white/20 pb-8">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Selected <br/> <span className="text-[#4ade80]">Works</span>
          </h2>
          <p className="hidden md:block text-gray-400 font-mono text-right max-w-xs">
            Spanning through motion graphics, brand identity, and video production.
          </p>
        </div>

        <div className="flex flex-col">
          {projectMultimediaData.map((item, i) => (
            <div 
              key={i} 
              className="group relative border-b border-white/10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center transition-all duration-300 hover:px-8"
            >
              {/* Floating Preview Image (Tampil saat Hover di Desktop) */}
              <div className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 transition-opacity duration-300">
                <img 
                  src={item.preview} 
                  alt="Preview" 
                  className="w-64 h-40 object-cover rounded-xl shadow-2xl border-2 border-[#4ade80] rotate-3"
                />
              </div>

              <div className="flex flex-col gap-2 z-10">
                <span className="text-[#4ade80] font-mono text-sm tracking-widest uppercase">
                  [{item.year}]
                </span>
                <div className="flex items-center gap-4">
                  <h3 className="text-4xl md:text-6xl font-bold transition-all duration-300 group-hover:italic">
                    {item.role}
                  </h3>
                  <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity text-[#4ade80]" size={32} />
                </div>
              </div>

              <div className="flex flex-col md:items-end mt-4 md:mt-0 z-10">
                <span className="text-2xl font-light text-gray-400 group-hover:text-white transition-colors">
                  {item.company}
                </span>
                <div className="flex gap-2 mt-2">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="text-[10px] border border-white/20 px-2 py-1 rounded-full text-gray-500 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Background Fill on Hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};