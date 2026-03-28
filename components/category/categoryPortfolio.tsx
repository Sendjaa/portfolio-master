"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categoryData } from '@/data/category'; 
import Image from 'next/image';

import { 
  LayoutGrid, Ruler, Paintbrush, MonitorCog, Code2, 
  Camera, PenTool, TrendingUp, Briefcase,
  ExternalLink, X, Globe, Github, Info,
  ShoppingBag,
  MessageCircle
} from 'lucide-react';

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
  const [selectedId, setSelectedId] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Mencegah scroll saat modal terbuka
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const displayProjects = useMemo(() => {
    if (selectedId === "all") {
      return Object.values(categoryData).flatMap(cat => cat.projects || []);
    }
    return categoryData[selectedId as keyof typeof categoryData]?.projects || [];
  }, [selectedId]);

  return (  
    <div className="min-h-screen bg-[#050505] text-white p-4 sm:p-8 lg:p-12 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <header className="mb-10">
          <span className="font-mono text-[#4ade80] text-[9px] uppercase tracking-[0.4em] block mb-2">
            Showcase_Katalog
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-white">
            Eksplorasi <span className="italic font-serif text-[#3b82f6]">Karya.</span>
          </h2>
        </header>

        {/* --- TAB NAVIGASI (KATEGORI TETAP ADA) --- */}
        <div className="sticky top-20 z-40 bg-[#050505]/80 backdrop-blur-md flex flex-wrap gap-2 mb-8 sm:mb-12 pb-4 border-b border-white/5">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedId(cat.id)}
              className={`flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl font-mono text-[8px] sm:text-[10px] uppercase tracking-widest transition-all duration-300 border ${
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
          className="flex flex-wrap -mx-1.5 sm:-mx-4 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, idx) => (
              <motion.div
                key={project.id || `${selectedId}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="w-1/2 lg:w-1/3 p-1.5 sm:p-4 flex cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="group bg-zinc-900/20 border border-white/5 rounded-2xl sm:rounded-[2.5rem] overflow-hidden hover:bg-zinc-900/40 transition-all duration-500 w-full flex flex-col shadow-2xl relative">
                  
                  {/* Image Container */}
                  <div className="relative aspect-square sm:aspect-[16/10] w-full overflow-hidden bg-zinc-800">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                  </div>

                  {/* Info Area */}
                  <div className="p-3 sm:p-8 flex flex-col flex-grow justify-between">
                    <div className="mb-4">
                      <h3 className="text-[10px] sm:text-xl font-black uppercase tracking-tight leading-tight line-clamp-2 min-h-[2.4em] sm:min-h-[2.8em] flex items-center">
                        {project.title}
                      </h3>
                      <p className="text-[7px] sm:text-[10px] font-mono text-[#3b82f6] uppercase tracking-[0.2em] mt-2 opacity-80">
                        {project.category_label || "PROJECT_FILE"}
                      </p>
                    </div>
                    
                    {/* View Detail Button */}
                    <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-widest text-white/20 group-hover:text-[#4ade80] transition-colors">
                      <span>Click for Detail</span>
                      <Info size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- MODAL DETAIL (NOT FULL) --- */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Overlay Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]"
              />

              {/* Modal Container */}
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] sm:rounded-[3.5rem] z-[101] overflow-hidden flex flex-col shadow-[0_0_80px_rgba(0,0,0,1)]"
              >
                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[85vh] sm:max-h-[90vh]">
                  {/* Modal Image Header */}
                  <div className="relative aspect-video w-full">
                    <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-6 right-6 w-10 h-10 bg-black/50 hover:bg-black/80 text-white backdrop-blur-md rounded-full flex items-center justify-center transition-all border border-white/10"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Modal Text Content */}
                  {/* Modal Text Content */}
                  <div className="p-8 sm:p-12">
                    {/* Header Info */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#4ade80]" />
                        <span className="text-[#4ade80] font-mono text-[9px] tracking-[0.4em] uppercase">
                          Project_Case_Study
                        </span>
                      </div>
                      <span className="text-white/20 font-mono text-[9px] uppercase border border-white/10 px-3 py-1 rounded-full">
                        v.1.0.2
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                      {selectedProject.title}
                    </h2>
                    
                    <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
                      {selectedProject.description || 
                        "Sebuah solusi digital komprehensif yang dirancang untuk mengoptimalkan alur kerja pengguna dengan antarmuka yang intuitif dan performa tinggi."
                      }
                    </p>

                    {/* Technical Specs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                      <div className="p-5 bg-white/0.02 border border-white/5 rounded-2rem">
                        <p className="text-[8px] font-mono text-[#3b82f6] uppercase mb-2 tracking-widest">Tech_Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {["Next.js", "Tailwind", "Framer"].map((tech) => (
                            <span key={tech} className="text-[10px] font-bold text-white/80 bg-white/5 px-2 py-0.5 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-5 bg-white/0.02 border border-white/5 rounded-2rem">
                        <p className="text-[8px] font-mono text-[#4ade80] uppercase mb-2 tracking-widest">Timeline</p>
                        <p className="text-[10px] font-bold text-white">Q1 2026 - Present</p>
                      </div>

                      <div className="p-5 bg-white/0.02 border border-white/5 rounded-2rem">
                        <p className="text-[8px] font-mono text-[#fb923c] uppercase mb-2 tracking-widest">Role</p>
                        <p className="text-[10px] font-bold text-white">Lead Developer</p>
                      </div>
                    </div>

                    {/* Features Section */}
                    <div className="mb-12">
                      <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-6">Data Portfolio</h4>
                      <ul className="space-y-4">
                        {[
                          "Foto profil yang menarik dan profesional.",
                          "Deskripsi singkat yang jelas dan menarik.",
                          "Daftar keterampilan yang relevan dengan bidang yang ditekuni.",
                          "Portofolio proyek yang menampilkan karya terbaik.",
                          "Testimoni atau rekomendasi dari klien atau rekan kerja.",
                          "Informasi kontak yang mudah diakses."
                        ].map((feature, i) => (
                          <li key={i} className="flex items-start gap-4 text-xs sm:text-sm text-white/70">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/5">
                      <a 
                        href={selectedProject.link || "#"} 
                        target="_blank"
                        className="group relative flex-1 bg-white text-black py-4 rounded-2xl font-black uppercase text-[10px] flex items-center justify-center gap-3 overflow-hidden transition-all hover:pr-8"
                      >
                        <span className="relative z-10">Visit Portfolio</span>
                        <Globe size={16} className="relative z-10" />
                        <div className="absolute right-4 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                          <ExternalLink size={16} />
                        </div>
                      </a>
                      
                     <a 
                        href="https://wa.me/62889509162484?text=Halo%20SoftEngineer,%20saya%20tertarik%20dengan%20project%20ini" 
                        target="_blank"
                        className="flex-1 bg-[#25D366] border border-green-600/20 text-white py-4 rounded-2xl font-black uppercase text-[10px] flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-all shadow-[0_10px_20px_rgba(37,211,102,0.2)]"
                      >
                        <MessageCircle size={16} /> Konsultasi Gratis
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}