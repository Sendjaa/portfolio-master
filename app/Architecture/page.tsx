"use client"

import React from "react";
import { motion } from "framer-motion";
import { Maximize2, MoveRight, Ruler, Map, Layers } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/navigation/navigationArchitecture";
import Hero from "../../components/hero/heroArchitecture";

const projects = [
  {
    id: "01",
    title: "Brutalist Modular",
    category: "Residential",
    year: "2025",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071",
    desc: "Eksplorasi beton ekspos dengan sistem modular untuk efisiensi ruang urban."
  },
  {
    id: "02",
    title: "Vertical Greenery",
    category: "Urban Planning",
    year: "2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    desc: "Integrasi ekosistem alami ke dalam struktur fasad gedung bertingkat."
  }
];

export default function ArchitecturePage() {
  return (
    <main className="bg-[#F9F9F8] min-h-screen text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-white overflow-x-hidden">
      
      {/* Navigation biasanya diletakkan langsung tanpa pembungkus section agar fixed position-nya aman */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* --- SECTION: PHILOSOPHY / ABOUT --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-black/40">[ The Philosophy ]</h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="text-2xl md:text-4xl font-light leading-tight tracking-tight">
              Menciptakan ruang yang menjembatani antara <span className="font-serif italic text-black/30">fungsi teknis</span> dan <span className="font-serif italic text-black/30">estetika emosional</span>.
            </p>
            <div className="flex gap-6 pt-4 text-black/40">
               <Ruler size={20} strokeWidth={1} />
               <Layers size={20} strokeWidth={1} />
               <Map size={20} strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: PROJECTS --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            {/* Project Image */}
            <div className="md:col-span-7 relative aspect-[16/10] overflow-hidden bg-zinc-200">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: "circOut" }}
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white p-3 rounded-full shadow-lg">
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="md:col-span-5 space-y-6 md:pl-8">
              <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-black/40">
                <span>{project.id}</span>
                <span className="w-8 h-px bg-black/10" />
                <span>{project.category}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none group-hover:italic transition-all">
                {project.title}
              </h3>
              <p className="text-black/60 text-sm leading-relaxed max-w-md">
                {project.desc}
              </p>
              <Link href={`/architecture/${project.id}`} className="inline-flex items-center gap-4 pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] group/link">
                View Project <MoveRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="py-40 border-t border-black/5 text-center px-6">
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="space-y-6"
         >
           <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-black/40">
             Ingin berdiskusi tentang visi spasial Anda?
           </p>
           <Link 
             href="/#contact" 
             className="text-3xl md:text-6xl font-black uppercase tracking-tighter hover:text-zinc-400 transition-all"
           >
             Start_A_Conversation_
           </Link>
           <div className="pt-12 font-mono text-[9px] uppercase tracking-[0.2em] opacity-30">
             © 2026 Senja Dev — Architecture Studio
           </div>
         </motion.div>
      </footer>
    </main>
  );
}