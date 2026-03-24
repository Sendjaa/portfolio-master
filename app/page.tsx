"use client"

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Code2, ArrowRight, MonitorCog, X, Ruler, Paintbrush } from 'lucide-react';

const sectors = [
  { title: "Spatial", sub: "Architecture", href: "/Architecture", color: "#94a3b8", icon: Ruler, desc: "Architectural Design & Urban Planning" },
  { title: "Visual", sub: "Arts", href: "/Multimedia", color: "#f87171", icon: Paintbrush, desc: "Fine Arts, Illustration & Gallery Works" },
  { title: "Digital", sub: "Design", href: "/DesignGraphics", color: "#facc15", icon: MonitorCog, desc: "UI/UX, Branding & Graphic Systems" },
  { title: "System", sub: "Core", href: "/Developer", color: "#3b82f6", icon: Code2, desc: "Full-stack Web & Software Architecture" }
];

const slides = [
  {
    title: "Creative",
    sub: "Engineer",
    desc: "Membangun ekosistem digital yang tak hanya berfungsi sempurna, tapi juga memikat mata. Solusi full-stack untuk bisnis masa depan.",
    video: "/videos/engineer-bg.mp4", 
  },
  {
    title: "Spatial",
    sub: "Architect",
    desc: "Transformasi visi menjadi ruang nyata. Kami merancang arsitektur modern yang presisi, estetis, dan fungsional bagi gaya hidup urban.",
    video: "/202603231812.mp4", // Video lokal Anda
  },
  {
    title: "Visual",
    sub: "Artist",
    desc: "Menghidupkan brand Anda melalui narasi visual yang kuat. Dari seni digital hingga instalasi imersif yang meninggalkan kesan mendalam.",
    video: "/videos/visual-bg.mp4",
  }
];

const socialLinks = [
  { label: "IG", url: "https://instagram.com/sendjaaaa_" },
  { label: "GH", url: "https://github.com/Sendjaa" },
  { label: "LI", url: "https://linkedin.com/in/senja-1ab986215/" }
];

export default function EntryPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', project: '', budget: '' });
  const [currentSlide, setCurrentSlide] = useState(0);

  const { scrollYProgress, scrollY } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // FIX: Scroll Lock
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
  }, [isModalOpen]);

  // FIX: Scroll Listener
  useEffect(() => {
    return scrollY.on("change", (latest) => setIsScrolled(latest > 50));
  }, [scrollY]);

  // FIX: Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const phone = "6289509162484"; 
    const message = `Halo Senja Dev! Saya ${formData.name}.%0A%0A*Project:* ${formData.project}%0A*Estimasi Budget:* ${formData.budget || 'Belum ditentukan'}%0A%0ASaya ingin berdiskusi mengenai project ini.`;
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    setIsModalOpen(false);
    setFormData({ name: '', project: '', budget: '' });
  };

  return (
    // FIX: Dibungkus dengan satu div utama
    <div className="bg-[#050505] min-h-screen text-white antialiased">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <video
              autoPlay muted loop playsInline
              className="w-full h-full object-cover"
              src={slides[currentSlide].video}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
          </motion.div>
        </AnimatePresence>

        <motion.div style={{ opacity, scale }} className="text-center z-20 px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                {slides[currentSlide].title} <br/> 
                <span className="text-transparent [-webkit-text-stroke:2px_white]">
                  {slides[currentSlide].sub}
                </span>
              </h1>
              <p className="font-mono text-sm md:text-base text-white/60 max-w-2xl mx-auto mb-12 uppercase tracking-widest">
                {slides[currentSlide].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="mx-auto block px-8 py-4 bg-white text-black font-black uppercase text-sm rounded-full hover:bg-[#4ade80] transition-all active:scale-95"
          >
            Start Your Project
          </button>
        </motion.div>

        {/* INDICATORS */}
        <div className="absolute bottom-12 flex gap-3 z-30">
          {slides.map((_, idx) => (
            <div 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all duration-500 cursor-pointer ${
                idx === currentSlide ? "w-12 bg-[#4ade80]" : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>
      </section>

      {/* --- FLOATING NAVBAR --- */}
      <AnimatePresence>
        {isScrolled && (
          <motion.nav 
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 24, x: "-50%", opacity: 1 }}
            exit={{ y: -100, x: "-50%", opacity: 0 }}
            className="fixed top-0 left-1/2 z-[100] flex items-center gap-4 md:gap-8 px-5 py-2.5 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl w-[92%] max-w-fit"
          >
            <Link href="/" className="flex-shrink-0 w-8 h-8 bg-white rounded-lg flex items-center justify-center font-black text-black italic">S</Link>
            <div className="hidden md:flex items-center gap-6">
              {sectors.map((s) => (
                <Link key={s.title} href={s.href} className="font-mono text-[9px] uppercase tracking-widest text-white/40 hover:text-[#4ade80] transition-colors">{s.title}</Link>
              ))}
            </div>
            <div className="h-4 w-px bg-white/10" />
            <button onClick={() => setIsModalOpen(true)} className="font-mono text-[9px] font-bold uppercase text-[#4ade80]">Start_Project</button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-zinc-950 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-3xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-white/20 hover:text-white"><X size={24} /></button>
              <div className="mb-10">
                <h3 className="font-serif italic text-4xl mb-3 text-[#4ade80]">Hello_</h3>
                <p className="font-mono text-xs text-white/40 uppercase tracking-widest">Let's build something extraordinary.</p>
              </div>
              <form onSubmit={handleWhatsApp} className="space-y-8">
                <div className="group space-y-3">
                  <label className="font-mono text-[10px] uppercase text-white/30">01. Your Name</label>
                  <input required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border-b border-white/10 py-4 text-lg outline-none focus:border-[#4ade80] transition-all" placeholder="Nama Anda" />
                </div>
                <div className="group space-y-3">
                  <label className="font-mono text-[10px] uppercase text-white/30">02. Project Brief</label>
                  <textarea required value={formData.project} onChange={(e) => setFormData({...formData, project: e.target.value})} className="w-full bg-transparent border-b border-white/10 py-4 text-lg h-32 resize-none outline-none focus:border-[#4ade80] transition-all" placeholder="Ide project" />
                </div>
                <button type="submit" className="w-full bg-white text-black font-black uppercase text-xs py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#4ade80] transition-all">
                  Send to WhatsApp <ArrowRight size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- SECTOR GRID --- */}
      <section className="flex flex-col lg:flex-row min-h-screen border-t border-white/5 bg-black">
        {sectors.map((sector, index) => (
          <Link key={index} href={sector.href} className="group relative flex-1 flex flex-col items-center justify-center p-20 border-b lg:border-b-0 lg:border-r border-white/5 hover:flex-[1.5] transition-all duration-700 overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ background: `radial-gradient(circle, ${sector.color}, transparent 70%)` }} />
            <sector.icon size={42} style={{ color: sector.color }} className="mb-8 group-hover:scale-125 transition-transform" />
            <h2 className="text-5xl lg:text-7xl font-black uppercase text-center leading-[0.8] z-10">
              {sector.title} <br/> 
              <span className="text-transparent [text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[text-stroke:1px_white] italic font-serif lowercase transition-all">{sector.sub}</span>
            </h2>
          </Link>
        ))}
      </section>

      {/* --- BENTO CONTENT --- */}
      <section className="py-32 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="font-mono text-[#4ade80] text-[10px] uppercase tracking-[0.5em] block mb-4">Core_Philosophy</span>
          <h4 className="text-5xl md:text-8xl font-black uppercase leading-[0.8]">Merging <br/> <span className="text-transparent [-webkit-text-stroke:1.5px_white]">Logic</span> with <br/> <span className="italic font-serif text-[#3b82f6]">Design.</span></h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative h-[600px] rounded-[3rem] overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2')] bg-cover bg-center" />
            <div className="absolute bottom-12 left-12 z-20">
              <h5 className="text-5xl font-black uppercase mb-4">Spatial Excellence</h5>
              <Link href="/Architecture" className="text-[#4ade80] font-mono text-xs flex items-center gap-2">VIEW CASE STUDY <ArrowRight size={14} /></Link>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex-1 bg-zinc-900/50 border border-white/5 p-10 rounded-[2.5rem]">
              <Paintbrush className="text-[#f87171] mb-6" />
              <h6 className="text-2xl font-bold italic">Visual Arts_</h6>
              <p className="text-white/40 text-xs font-mono uppercase">Multimedia & Fine Art</p>
            </div>
            <div className="flex-1 bg-[#3b82f6] text-black p-10 rounded-[2.5rem] flex flex-col justify-between">
              <Code2 />
              <h6 className="text-2xl font-black uppercase">Core Dev</h6>
            </div>
          </div>
        </div>

        <footer className="mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-mono text-white/20 uppercase tracking-[0.5em]">
          <p>© 2026 SENJA DEV</p>
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} className="hover:text-white transition-colors">{link.label}</a>
            ))}
          </div>
        </footer>
      </section>

    </div>
  );
}