"use client"
import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // Gunakan lucide-react untuk icon modern

const sertificate = [
  { year: '2022 — Present', role: 'Senior Motion Designer', company: 'Studio XYZ', description: 'Leading the motion graphics team for global brands.' },
  { year: '2020 — 2022', role: 'Multimedia Lead', company: 'Digital Agency', description: 'Managed end-to-end video production and interactive media.' },
  { year: '2018 — 2020', role: 'Video Editor', company: 'Broadcast TV', description: 'Produced high-quality visual content for national television.' },
];

// Gunakan 'export default' agar sesuai dengan import di page.tsx kamu
export default function Sertificate() {
  return (
    <section id="experience" className="py-32 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-4">
            <span className="text-[#4ade80] font-mono tracking-widest uppercase text-sm">Professional Journey</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">
              Work <br /> <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px white' }}>History</span>
            </h2>
          </div>
          <p className="max-w-xs text-gray-400 text-sm leading-relaxed">
            Crafting digital experiences through motion, video, and creative direction since 2018.
          </p>
        </div>

        {/* Experience List */}
        <div className="border-t border-white/10">
          {sertificate.map((item, i) => (
            <div 
              key={i} 
              className="group relative border-b border-white/10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center transition-all duration-500 hover:px-8 cursor-pointer overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-[#4ade80] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />

              <div className="flex flex-col gap-2 z-10">
                <span className="text-gray-500 group-hover:text-black/60 font-mono text-sm transition-colors duration-300">
                  {item.year}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold group-hover:text-black transition-colors duration-300">
                  {item.role}
                </h3>
              </div>

              <div className="flex items-center gap-8 mt-4 md:mt-0 z-10">
                <div className="text-left md:text-right">
                  <span className="block text-xl font-medium group-hover:text-black transition-colors duration-300">
                    {item.company}
                  </span>
                  <span className="hidden md:block text-sm text-gray-500 group-hover:text-black/60 transition-colors duration-300">
                    {item.description}
                  </span>
                </div>
                <ArrowUpRight className="w-8 h-8 text-white group-hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}