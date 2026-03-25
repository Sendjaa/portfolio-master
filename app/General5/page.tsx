"use client";

import React, { useState, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sun, 
  Moon, 
  Instagram, 
  ArrowUpRight,
  Menu,
  X,
  BookOpen // Icon tambahan untuk pendidikan
} from 'lucide-react';
import { themes } from '@/src/config/themes';
import { ThemeWrapper } from '@/components/shared/themeWrapper';

export default function IndustrialArchitectPortfolio(): JSX.Element {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const theme = themes?.general5 || {};

  // Color Tokens
  const bg = isDark ? "bg-[#141412]" : "bg-[#f5f5f0]"; 
  const text = isDark ? "text-[#e5e5e1]" : "text-[#1a1a1a]";
  const border = isDark ? "border-white/10" : "border-black/10";
  const accent = "text-amber-600";
  const cardBg = isDark ? "bg-[#1c1c1a]" : "bg-white";

  return (
    <ThemeWrapper theme={theme}>
      <div className={`${bg} ${text} min-h-screen font-serif transition-colors duration-700 selection:bg-amber-200/30 overflow-x-hidden`}>
        
        {/* --- NAVIGATION --- */}
        <nav className={`fixed top-0 w-full z-50 border-b ${border} ${bg} bg-opacity-90 backdrop-blur-md transition-all`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-[0.2em] uppercase">PRATAMA</span>
              <span className="text-[9px] tracking-[0.4em] uppercase opacity-50 font-sans">Architectural Studio</span>
            </div>

            <div className="hidden md:flex items-center gap-12 text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
              <a href="#edu" className="hover:text-amber-600 transition-colors">Education</a>
              <a href="#projects" className="hover:text-amber-600 transition-colors">Portfolio</a>
              <a href="#about" className="hover:text-amber-600 transition-colors">Philosophy</a>
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full border ${border} hover:bg-amber-600 hover:text-white transition-all`}
              >
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
               <button onClick={() => setIsDark(!isDark)} className="p-2">{isDark ? <Sun size={20} /> : <Moon size={20} />}</button>
               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
            </div>
          </div>
        </nav>

        {/* --- MOBILE MENU --- */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className={`fixed inset-0 z-[49] ${bg} pt-32 px-10 flex flex-col gap-8 font-sans uppercase font-black text-4xl tracking-tighter`}
            >
              <a href="#edu" onClick={() => setIsMenuOpen(false)}>Education</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>Philosophy</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Inquiry</a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex items-center px-6 md:px-12 pt-24">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`h-[1px] w-12 ${isDark ? 'bg-white/20' : 'bg-black/20'}`} />
                  <span className={`font-sans text-[10px] font-bold uppercase tracking-[0.5em] ${accent}`}>Principal Architect</span>
                </div>
                <h1 className="text-5xl md:text-[7vw] leading-[0.95] font-bold tracking-tighter uppercase mb-10">
                  Refining <br />
                  <span className="italic font-light opacity-30 text-[5vw]">Human</span> <br />
                  Habitation.
                </h1>
                <p className="max-w-md text-lg leading-relaxed opacity-60 mb-12 font-sans font-light">
                  Pendekatan brutalist yang hangat, mengutamakan kejujuran material dan sirkulasi udara alami.
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                  <button className="px-10 py-5 bg-amber-600 text-white font-sans font-bold uppercase text-[10px] tracking-widest hover:bg-amber-700 transition-all flex items-center gap-4">
                    View Manifesto <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
                className="relative aspect-[4/5] bg-neutral-800 overflow-hidden group shadow-2xl"
              >
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Architect Profile" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                />
                <div className={`absolute bottom-0 right-0 p-8 ${cardBg} border-l border-t ${border} hidden md:block`}>
                  <p className="font-sans text-[10px] font-black uppercase tracking-widest mb-2">Pratama A.</p>
                  <p className="font-sans text-[8px] uppercase tracking-[0.2em] opacity-50">Architectural Designer</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- EDUCATION SECTION --- */}
        <section id="edu" className={`py-32 border-y ${border}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-sm font-sans font-bold uppercase tracking-[0.5em] opacity-30 mb-8">// ACADEMIC_HISTORY</h2>
                <p className="text-2xl font-bold uppercase tracking-tighter leading-tight">
                  Perjalanan pendidikan <br /> yang membentuk visi ruang.
                </p>
              </div>
              
              <div className="lg:col-span-8 space-y-16">
                {[
                  { 
                    year: "2024 — Present", 
                    school: "Institut Teknologi Arsitektur", 
                    degree: "Master of Urban Sustainability", 
                    note: "Fokus pada integrasi struktur beton dengan ekosistem hijau vertikal." 
                  },
                  { 
                    year: "2020 — 2024", 
                    school: "Universitas Desain Nasional", 
                    degree: "Bachelor of Architecture (B.Arch)", 
                    note: "Lulus dengan predikat terbaik. Spesialisasi dalam Material Brutalisme Modern." 
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative pl-12 border-l border-amber-600/30"
                  >
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-amber-600 rounded-full" />
                    <span className="font-sans text-[10px] font-bold text-amber-600 tracking-widest block mb-4">{item.year}</span>
                    <h3 className="text-3xl font-bold uppercase tracking-tighter mb-2 group-hover:text-amber-600 transition-colors">{item.school}</h3>
                    <p className="text-lg font-light italic opacity-80 mb-4">{item.degree}</p>
                    <p className="font-sans text-sm opacity-50 max-w-xl leading-relaxed">{item.note}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS GRID --- */}
        <section id="projects" className="py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-sans font-bold uppercase tracking-[0.5em] mb-20 text-center opacity-30">// SELECTED_COLLECTIONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {[
                { title: "The Monolith", loc: "Jakarta", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Glass Pavilion", loc: "Bandung", img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800" }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-[16/10] overflow-hidden mb-8 shadow-lg">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl font-bold uppercase tracking-tight group-hover:text-amber-600 transition-colors">{item.title}</h3>
                      <span className="font-sans text-[10px] uppercase tracking-widest opacity-40">{item.loc}</span>
                    </div>
                    <ArrowUpRight size={24} className="opacity-20 group-hover:opacity-100 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="py-48 px-6 text-center relative overflow-hidden">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${isDark ? 'bg-amber-600/5' : 'bg-amber-600/10'} rounded-full blur-[120px] pointer-events-none`} />
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-16 leading-none">
              Build <br /> <span className="italic font-light opacity-20">Together.</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 font-sans font-bold text-[10px] uppercase tracking-[0.4em]">
              <a href="mailto:studio@pratama.io" className="px-12 py-6 border border-amber-600 hover:bg-amber-600 hover:text-white transition-all">Start a Project</a>
              <div className="flex gap-8 items-center">
                <Instagram size={18} className="hover:text-amber-600 transition-all cursor-pointer" />
                <span className="opacity-30">/</span>
                <span className="hover:text-amber-600 transition-all cursor-pointer">LinkedIn</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- FOOTER --- */}
        <footer className={`py-16 border-t ${border} px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 font-sans text-[9px] font-bold uppercase tracking-[0.4em] opacity-40`}>
          <span>© 2026 PRATAMA STUDIO</span>
          <div className="flex gap-12 text-[8px]">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
             <span>Active in Bandung</span>
          </div>
        </footer>

      </div>
    </ThemeWrapper>
  );
}