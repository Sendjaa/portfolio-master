"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { categoryData, Category } from '@/data/category';
import { 
  ArrowLeft, 
  ExternalLink, 
  Calendar, 
  MapPin 
} from 'lucide-react';

export default function CategoryDetail({ categoryId = "spatial" }) {
  const [data, setData] = useState<Category | null>(null); 

  useEffect(() => {
    const selectedData = categoryData[categoryId] || categoryData.spatial;
    setData(selectedData);
  }, [categoryId]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center font-mono text-xs uppercase tracking-[0.5em] text-white">
        Memuat_Data...
      </div>
    );
  }

  // Komponen Ikon Dinamis
  const IconComponent = data.icon;

  const MotionLink = motion(Link);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 lg:p-20 selection:bg-[#4ade80] selection:text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigasi Kembali */}
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.history.back()}
          className="group flex items-center gap-3 text-white/40 hover:text-[#4ade80] transition-colors mb-12 font-mono text-[10px] uppercase tracking-widest outline-none"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Kembali_Ke_Menu
        </motion.button>

        {/* Header Dinamis */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3" 
              style={{ color: data.color }}
            >
              {IconComponent && <IconComponent size={24} />}
              <span className="font-mono text-[10px] uppercase tracking-[0.5em]">
                Kategori_{data.title ? data.title.split(' ')[0] : 'Project'}
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              {data.title ? data.title.split(' ')[0] : 'Category'} <br/> 
              <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">
                {data.title && data.title.split(' ').length > 1 ? data.title.split(' ').slice(1).join(' ') : "Projects"}
              </span>
            </h1>
          </div>
          
          <p className="max-w-sm text-white/40 font-mono text-[11px] uppercase leading-relaxed border-l border-white/10 pl-6 italic">
            {data.description}
          </p>
        </header>

        {/* Daftar Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.projects && data.projects.map((project, idx) => {
            return (
              <motion.div
                key={project.id || idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Image Container */}
                <div className="aspect-4/3 overflow-hidden rounded-[2rem    ] md:rounded-[2.5rem] bg-zinc-900 border border-white/5 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Project Info */}
                <div className="mt-8 space-y-4 px-2">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-[#4ade80] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags && project.tags.map(tag => {
                          return (
                            <span key={tag} className="px-2 py-0.5 rounded-full border border-white/10 text-white/40 text-[8px] font-mono uppercase tracking-widest group-hover:border-[#4ade80]/30 group-hover:text-[#4ade80] transition-colors">
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <MotionLink
                        href='https://senja-dev-portfolio.vercel.app/Architecture'
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="shrink-0 w-12 h-12 relative z-50 rounded-2xl bg-white text-black flex items-center justify-center hover:bg-[#4ade80] transition-colors"
                      >
                        <ExternalLink size={18} />
                    </MotionLink>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center p-12 md:p-24 rounded-[3rem] md:rounded-[4rem] bg-zinc-900/20 border border-white/5"
        >
           <h4 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-8 leading-tight">
             Ingin Memulai <span className="text-[#4ade80] italic font-serif">Kolaborasi?</span>
           </h4>
           <button 
             onClick={() => window.location.href = 'https://wa.me/yournumber'}
             className="group relative px-10 md:px-12 py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] rounded-full overflow-hidden transition-all hover:pr-16 active:scale-95"
           >
             <span className="relative z-10">Hubungi_Kami</span>
             <div className="absolute right-0 top-0 bottom-0 w-0 group-hover:w-12 bg-[#4ade80] flex items-center justify-center transition-all duration-300">
               <ArrowLeft size={16} className="rotate-180" />
             </div>
           </button>  
        </motion.div>
        
      </div>
    </div>
  );
}