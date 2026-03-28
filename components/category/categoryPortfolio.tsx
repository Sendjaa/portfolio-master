"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categoryData } from '@/data/category'; 

import { 
  LayoutGrid, Ruler, Paintbrush, MonitorCog, Code2, 
  Camera, PenTool, TrendingUp, Briefcase,
  ExternalLink, MapPin, Calendar
} from 'lucide-react';

// Daftar kategori dengan "General" di urutan pertama
const portfolioCategories = [
  { id: "all", title: "General", icon: <LayoutGrid size={14} />, color: "#4ade80" },
  { id: "spatial", title: "Architecture", icon: <Ruler size={14} />, color: "#94a3b8" },
  { id: "visual", title: "Visual Arts", icon: <Paintbrush size={14} />, color: "#f87171" },
  { id: "digital", title: "Digital", icon: <MonitorCog size={14} />, color: "#facc15" },
  { id: "system", title: "System", icon: <Code2 size={14} />, color: "#3b82f6" },
  { id: "photo", title: "Photo", icon: <Camera size={14} />, color: "#a855f7" },
  { id: "writing", title: "Writing", icon: <PenTool size={14} />, color: "#fb923c" },
  { id: "marketing", title: "Marketing", icon: <TrendingUp size={14} />, color: "#4ade80" },
  { id: "business", title: "Business", icon: <Briefcase size={14} />, color: "#2dd4bf" }
];

export default function PortfolioCatalog() {
  // Default aktif di "all"
  const [selectedId, setSelectedId] = useState("all");

  // Logika untuk menggabungkan semua proyek jika memilih "General"
  const displayProjects = useMemo(() => {
    if (selectedId === "all") {
      // Mengambil semua project dari semua kategori di data/category.ts
      return Object.values(categoryData).flatMap(cat => cat.projects || []);
    }
    return categoryData[selectedId as keyof typeof categoryData]?.projects || [];
  }, [selectedId]);

  return (  
    <div className="min-h-screen bg-[#050505] text-white p-4 sm:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <header className="mb-10">
          <span className="font-mono text-[#4ade80] text-[9px] uppercase tracking-[0.4em] block mb-2">
            Showcase_Katalog
          </span>
          <h2 className="text-3xl font-black uppercase tracking-tighter">
            Eksplorasi <span className="italic font-serif text-[#3b82f6]">Karya.</span>
          </h2>
        </header>

        {/* --- TAB NAVIGASI (Sticky on Scroll) --- */}
        <div className="sticky top-20 z-40 bg-[#050505]/80 backdrop-blur-md flex flex-wrap gap-2 mb-12 pb-4 border-b border-white/5">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedId(cat.id)}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-mono text-[10px] uppercase tracking-widest transition-all duration-300 border ${
                selectedId === cat.id 
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                : "bg-zinc-900/50 text-white/40 border-white/5 hover:border-white/20"
              }`}
            >
              <span style={{ color: selectedId === cat.id ? 'black' : cat.color }}>
                {cat.icon}
              </span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* --- GRID PRODUK --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, idx) => (
              <motion.div
                key={project.id || `${selectedId}-${idx}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="group bg-zinc-900/20 border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-zinc-900/40 transition-all duration-500"
              >
                {/* Product Image Container */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Action */}
                  <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a 
                      href={project.link || "#"} 
                      target="_blank"
                      className="w-12 h-12 bg-[#4ade80] text-black rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-8">
                  <div className="space-y-1">
                    <h3 className="text-xl font-black uppercase tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
                      {project.category_label || "Creative Project"}
                    </p>
                  </div>
        
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {displayProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-32 border-2 border-dashed border-white/5 rounded-[4rem]"
          >
             <p className="font-mono text-[11px] text-white/10 uppercase tracking-[0.8em]">
               Data_Tidak_Ditemukan
             </p>
          </motion.div>
        )}

      </div>
    </div>
  );
}