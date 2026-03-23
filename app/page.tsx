"use client"
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Palette, Code2, ArrowRight, MonitorCog, Cpu, ChevronDown, X, Send, Ruler, Paintbrush } from 'lucide-react';

const sectors = [
  { 
    title: "Spatial", sub: "Architecture", href: "/Architecture", 
    color: "#94a3b8", icon: Ruler, tag: "Environment", 
    desc: "Architectural Design & Urban Planning" 
  },
  { 
    title: "Visual", sub: "Arts", href: "/Multimedia", 
    color: "#f87171", icon: Paintbrush, tag: "Creative", 
    desc: "Fine Arts, Illustration & Gallery Works" 
  },
  { 
    title: "Digital", sub: "Design", href: "/DesignGraphics", 
    color: "#facc15", icon: MonitorCog, tag: "Communication", 
    desc: "UI/UX, Branding & Graphic Systems" 
  },
  { 
    title: "System", sub: "Core", href: "/Developer", 
    color: "#3b82f6", icon: Code2, tag: "Engineering", 
    desc: "Full-stack Web & Software Architecture" 
  }
];

const socialLinks = [
  { label: "IG", name: "Instagram", url: "https://instagram.com/sendjaaaa_" },
  { label: "GH", name: "GitHub", url: "https://github.com/Sendjaa" },
  { label: "LI", name: "LinkedIn", url: "https://linkedin.com/in/senja-1ab986215/" }
];

export default function EntryPage() {
  const containerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', project: '', budget: '' });
  
  const { scrollYProgress, scrollY } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
    });
  }, [scrollY]);

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "6289509162484"; 
    const message = `Halo Senja Dev! Saya ${formData.name}.%0A%0A*Project:* ${formData.project}%0A*Estimasi Budget:* ${formData.budget || 'Belum ditentukan'}%0A%0ASaya ingin berdiskusi mengenai project ini.`;
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div ref={containerRef} className="bg-[#050505] text-white selection:bg-[#4ade80] selection:text-black min-h-screen overflow-x-hidden">
      
      {/* --- FLOATING NAVBAR --- */}
      <AnimatePresence>
        {isScrolled && (
          <motion.nav 
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 24, x: "-50%", opacity: 1 }}
            exit={{ y: -100, x: "-50%", opacity: 0 }}
            // Perubahan: w-[90%] md:w-auto untuk memastikan di HP tidak meluap
            className="fixed top-0 left-1/2 z-[100] flex items-center justify-between md:justify-start gap-3 md:gap-8 px-5 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl w-[92%] max-w-fit md:w-auto"
          >
            {/* Logo S */}
            <Link href="/" className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-white rounded flex items-center justify-center group">
              <span className="text-black font-black text-sm md:text-lg italic group-hover:scale-110 transition-transform">S</span>
            </Link>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-6">
              {sectors.map((s) => (
                <Link 
                  key={s.title} 
                  href={s.href} 
                  className="font-mono text-[9px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  {s.title}
                </Link>
              ))}
            </div>

            {/* Separator - Sembunyikan di mobile jika space terbatas */}
            <div className="hidden xs:block h-4 w-px bg-white/10 mx-1 md:mx-2" />

            {/* Button Start Project */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex-shrink-0 font-mono text-[9px] font-black uppercase tracking-[0.15em] text-[#4ade80] hover:brightness-125 transition-all cursor-pointer whitespace-nowrap"
            >
              Start_Project
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* --- START PROJECT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#4ade80] to-transparent" />
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 md:top-6 right-4 md:right-6 text-white/20 hover:text-white transition-colors"><X size={20} /></button>
              
              <div className="mb-6 md:mb-8">
                <h3 className="font-serif italic text-2xl md:text-3xl mb-2">Initialize Project_</h3>
                <p className="font-mono text-[9px] md:text-[10px] text-white/40 uppercase tracking-widest">Mari bangun sesuatu yang berdampak tinggi.</p>
              </div>

              <form onSubmit={handleWhatsApp} className="space-y-6">
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase text-[#4ade80] tracking-[0.2em]">Client_Name</label>
                  <input 
                    required type="text" placeholder="Siapa nama Anda?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4ade80]/50 transition-colors text-white"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase text-[#4ade80] tracking-[0.2em]">Project_Brief</label>
                  <textarea 
                    required placeholder="Apa yang ingin Anda bangun?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm h-24 resize-none focus:outline-none focus:border-[#4ade80]/50 transition-colors text-white"
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase text-[#4ade80] tracking-[0.2em]">Budget_Range</label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4ade80]/50 transition-colors appearance-none text-white/60 cursor-pointer"
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  >
                    <option value="">Pilih Estimasi Budget (Opsional)</option>
                    <option value="Under 5M">Di bawah Rp 5jt</option>
                    <option value="5M - 15M">Rp 5jt - Rp 15jt</option>
                    <option value="15M+">Rp 15jt+</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#4ade80] text-black font-black uppercase text-xs py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#3b82f6] hover:text-white transition-all duration-500 shadow-lg shadow-[#4ade80]/10"
                >
                  Kirim ke WhatsApp <Send size={14} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- DESIGN RULES LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[10%] w-full h-px bg-white/5" />
        <div className="absolute top-[50%] w-full h-px bg-white/10" />
        <div className="absolute left-[5%] h-full w-px bg-white/5" />
        <div className="absolute left-[50%] h-full w-px bg-white/10" />
        <div className="absolute top-8 left-8 text-[8px] font-mono text-white/20 uppercase tracking-tighter">
          ITENAS_INF_2026 / node_id: alfito_core
        </div>
      </div>

      {/* SECTION 1: THE GATEWAY */}
      <motion.main 
        style={{ opacity, scale }}
        className="h-screen w-full flex flex-col md:flex-row overflow-hidden select-none sticky top-0 z-10"
      >
        {!isScrolled && (
          <div className="absolute top-6 md:top-8 left-0 w-full z-30 px-6 md:px-10 flex justify-between items-center">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded flex items-center justify-center">
                <span className="text-black font-black text-lg md:text-xl italic">S</span>
              </div>
              <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em]">SENJA DEV</span>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden md:block font-mono text-[9px] md:text-[10px] uppercase border border-white/20 px-4 md:px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              [ Get in Touch ]
            </button>
          </div>
        )}

        {sectors.map((sector: any, index: number) => (
          <Link key={index} href={sector.href} 
            className="group relative flex-1 flex flex-col overflow-hidden border-b md:border-b-0 md:border-r border-white/5 last:border-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:hover:flex-[1.8] z-10"
          >
            <div className="absolute inset-0 bg-black z-0 group-hover:bg-transparent transition-colors duration-700" />
            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#4ade80] transition-colors" />
            <motion.div className="h-full w-full flex flex-col items-center justify-center p-6 md:p-8 relative z-10">
               <sector.icon size={36} style={{ color: sector.color }} className="mb-6 md:mb-10 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
               <h2 className="text-3xl md:text-5xl xl:text-7xl font-black uppercase tracking-tighter text-center leading-[0.8]">
                {sector.title} <br/> 
                <span className="text-transparent [text-stroke:1px_rgba(255,255,255,0.2)] italic font-serif lowercase" style={{ color: 'transparent' }}>
                   {sector.sub}
                </span>
               </h2>
            </motion.div>
          </Link>
        ))}

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 opacity-40">
          <ChevronDown size={20} />
        </motion.div>
      </motion.main>

      {/* SECTION 2: HIGHLIGHTS & BENTO */}
      <section className="relative z-40 bg-[#050505] py-20 md:py-40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          {/* Top Content: Branding */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-32 gap-8 md:gap-12">
            <div className="max-w-3xl relative">
              <h3 className="font-mono text-[#4ade80] text-[10px] uppercase tracking-[0.6em] mb-4 md:mb-6 flex items-center gap-4">
                <span className="px-2 py-1 bg-[#4ade80]/10 border border-[#4ade80]/20 rounded text-[#4ade80]">AVAILABLE_FOR_PROJECTS_2026</span>
                <span className="w-12 h-px bg-white/10" />
              </h3>
              <h4 className="text-3xl md:text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                Turning <span className="text-transparent [text-stroke:1px_white] hover:text-white transition-colors duration-500">Logic</span> <br/> 
                into <span className="italic font-serif text-[#3b82f6] drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">Visual Gold.</span>
              </h4>
            </div>
            <div className="max-w-sm space-y-6 md:space-y-8 pt-4">
              <p className="text-white/80 font-bold text-sm leading-relaxed uppercase tracking-widest italic">Bukan sekadar baris kode.</p>
              <p className="text-white/40 font-medium text-[12px] leading-relaxed uppercase tracking-wider">
                Berbasis di Bandung, saya membantu brand mentransformasi ide kompleks menjadi produk digital yang intuitif dan memiliki nilai estetika kelas atas.
              </p>
              

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 md:pt-8">
                <div className="group/stat cursor-default">
                  <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#3b82f6] rounded-full animate-pulse" />
                    Structure & Logic
                  </p>
                  <p className="text-[11px] text-white/80 font-bold uppercase tracking-tighter leading-tight group-hover/stat:text-[#3b82f6] transition-colors">
                    Architecture, Web <br/> & Core Engineering
                  </p>
                </div>
                <div className="group/stat cursor-default">
                  <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#facc15] rounded-full animate-pulse" />
                    Aesthetic Strategy
                  </p>
                  <p className="text-[11px] text-white/80 font-bold uppercase tracking-tighter leading-tight group-hover/stat:text-[#facc15] transition-colors">
                    Fine Arts, UI/UX <br/> & Visual Branding
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- BENTO GRID: SELECTED WORKS --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[800px] mb-16 md:mb-20">

  {/* CARD 1: ARCHITECTURE / SPATIAL (Besar) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-7 md:row-span-2 group relative bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-end p-6 md:p-10 hover:border-[#94a3b8]/50 transition-all duration-500"
          >
            <div className="absolute top-4 md:top-8 right-4 md:right-8 flex gap-2 z-20">
              <span className="px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[7px] md:text-[8px] uppercase text-[#94a3b8]">3D Render</span>
              <span className="px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[7px] md:text-[8px] uppercase text-white">Spatial Design</span>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700 bg-[url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071')] bg-cover bg-center" />
            <div className="relative z-20">
              <p className="font-mono text-[8px] md:text-[9px] text-white/40 uppercase tracking-[0.4em] mb-3 md:mb-4">Project_01 / Architecture</p>
              <h5 className="text-2xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-6">
                Minimalist <br/> <span className="text-[#94a3b8] italic font-serif">Structure_</span>
              </h5>
              <Link href="/Architecture" className="inline-flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-white/60 hover:text-white transition-colors group/btn">
                View Blueprint <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* CARD 2: FINE ARTS / SENI */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-5 group relative bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden p-6 md:p-10 hover:border-[#f87171]/50 transition-all duration-500"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[url('https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1890')] bg-cover" />
            <div className="flex justify-between items-start mb-8 md:mb-12 relative z-20">
              <Paintbrush className="text-[#f87171]" size={28} />
              <span className="font-mono text-[7px] md:text-[8px] text-white/20 uppercase tracking-widest italic">Gallery Exhibition</span>
            </div>
            <div className="relative z-20">
              <h5 className="text-xl md:text-3xl font-bold uppercase tracking-tight leading-none mb-3 md:mb-4">
                Abstract <br/> <span className="italic font-serif text-[#f87171]">Expression</span>
              </h5>
              <p className="text-[9px] md:text-[10px] text-white/40 uppercase leading-relaxed tracking-wider max-w-xs">
                Eksplorasi medium cat minyak dan digital komposisi untuk narasi visual modern.
              </p>
            </div>
          </motion.div>

          {/* CARD 3: DESIGN / BRANDING */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-5 group relative bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden p-6 md:p-10 hover:border-[#facc15]/50 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-6 md:mb-8 relative z-20">
              <div className="flex -space-x-2 md:-space-x-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-black bg-[#facc15]" />
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-black bg-white" />
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-black bg-slate-500" />
              </div>
              <span className="font-mono text-[7px] md:text-[8px] text-white/20 uppercase tracking-widest italic">Identity System</span>
            </div>
            <div className="relative z-20">
              <h5 className="text-lg md:text-2xl font-black uppercase tracking-tighter mb-3 md:mb-4">
                Visual <br/> Branding Lab
              </h5>
              <Link href="/DesignGraphics" className="text-[#facc15] font-mono text-[8px] md:text-[9px] uppercase tracking-widest flex items-center gap-2 group/link">
                See Case Studies <ArrowRight size={12} className="group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* CARD 4: MASTER PROJECT */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-7 md:row-span-2 group relative bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-end p-6 md:p-10 hover:border-[#4ade80]/50 transition-all duration-500"
          >
            <div className="absolute top-4 md:top-8 right-4 md:right-8 flex gap-2 z-20">
              <span className="px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[7px] md:text-[8px] uppercase text-[#4ade80]">Next.js</span>
              <span className="px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[7px] md:text-[8px] uppercase text-[#3b82f6]">React</span>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent z-10" />
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070')] bg-cover bg-center" />
            <div className="relative z-20">
              <p className="font-mono text-[8px] md:text-[9px] text-white/40 uppercase tracking-[0.4em] mb-3 md:mb-4">Master Project_01</p>
              <h5 className="text-2xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-6">
                Multi-Theme <br/> <span className="text-[#4ade80] italic">Portfolio</span>
              </h5>
              <Link href="/Developer" className="inline-flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-white/60 hover:text-white transition-colors group/btn">
                View System <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* CARD 5: IoT SYSTEM */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-5 group relative bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden p-6 md:p-10 hover:border-[#f87171]/50 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-8 md:mb-12 relative z-20">
               <Cpu className="text-[#f87171]" size={28} />
               <span className="font-mono text-[7px] md:text-[8px] text-white/20 uppercase tracking-widest">Hardware / Python</span>
            </div>
            <div className="relative z-20">
              <h5 className="text-xl md:text-3xl font-bold uppercase tracking-tight leading-none mb-3 md:mb-4">
                Heart Pulse <br/> <span className="italic font-serif opacity-40">Architecture</span>
              </h5>
              <p className="text-[9px] md:text-[10px] text-white/40 uppercase leading-relaxed tracking-wider max-w-xs">
                Sistem monitoring detak jantung real-time berbasis Raspberry Pi 4.
              </p>
            </div>
          </motion.div>

          {/* CARD 6: MULTIMEDIA */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-5 group relative bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden p-6 md:p-10 hover:border-[#facc15]/50 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-6 md:mb-8 relative z-20">
               <div className="flex -space-x-2 md:-space-x-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-black bg-[#4ade80]" />
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-black bg-[#3b82f6]" />
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-black bg-[#facc15]" />
               </div>
               <span className="font-mono text-[7px] md:text-[8px] text-white/20 uppercase tracking-widest italic">Live Streaming Lab</span>
            </div>
            <div className="relative z-20">
              <h5 className="text-lg md:text-2xl font-black uppercase tracking-tighter mb-3 md:mb-4 italic">
                OBS Stream <br/> Management
              </h5>
              <Link href="/Multimedia" className="text-[#facc15] font-mono text-[8px] md:text-[9px] uppercase tracking-widest flex items-center gap-2 group/link">
                Explore Visuals <ArrowRight size={12} className="group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

          {/* CTA BAR */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 p-6 md:p-8 border border-white/5 rounded-2xl bg-white/2">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 text-center md:text-left">
              Butuh solusi spesifik untuk bisnis Anda?
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 md:px-8 py-3 bg-white text-black font-black uppercase text-[9px] md:text-[10px] tracking-widest rounded-full hover:bg-[#4ade80] transition-colors cursor-pointer"
            >
              Diskusikan Project Sekarang
            </button>
          </div>

          {/* Footer Socials */}
          <div className="mt-16 md:mt-32 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3 md:gap-4">
               <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
               <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/40 italic">System active: 2026_MASTER_PORTFOLIO</span>
            </div>
            <div className="flex gap-6 md:gap-10">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="group/social relative">
                  <span className="font-mono text-[10px] md:text-[11px] text-white/40 group-hover/social:text-white transition-colors tracking-widest">{social.label}</span>
                  <div className="absolute -bottom-2 w-0 h-px bg-white group-hover/social:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}