"use client"

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Code2, ArrowRight, MonitorCog, X, Ruler, Paintbrush } from 'lucide-react';

const sectors = [
  { title: "Spatial", sub: "Architecture", href: "/Architecture", color: "#94a3b8", icon: Ruler },
  { title: "Visual", sub: "Arts", href: "/Multimedia", color: "#f87171", icon: Paintbrush },
  { title: "Digital", sub: "Design", href: "/DesignGraphics", color: "#facc15", icon: MonitorCog },
  { title: "System", sub: "Core", href: "/Developer", color: "#3b82f6", icon: Code2 }
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
    video: "/202603231812.mp4",
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
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
  }, [isModalOpen]);

  useEffect(() => {
    return scrollY.on("change", (latest) => setIsScrolled(latest > 50));
  }, [scrollY]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const phone = "6289509162484"; 
    const message = `Halo Senja Dev! Saya ${formData.name}.%0A%0A*Project:* ${formData.project}%0A%0ASaya ingin berdiskusi mengenai project ini.`;
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white antialiased overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
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

        <motion.div style={{ opacity, scale }} className="text-center z-20 px-6 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                {slides[currentSlide].title} <br/> 
                <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">
                  {slides[currentSlide].sub}
                </span>
              </h1>
              <p className="font-mono text-[10px] md:text-sm text-white/60 max-w-xl mx-auto mb-10 uppercase tracking-[0.2em] leading-relaxed">
                {slides[currentSlide].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="mx-auto flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-[#4ade80] transition-all active:scale-95"
          >
            Start Your Project <ArrowRight size={14} />
          </button>
        </motion.div>

        {/* INDICATORS */}
        <div className="absolute bottom-10 flex gap-2 z-30">
          {slides.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all duration-500 ${
                idx === currentSlide ? "w-10 bg-[#4ade80]" : "w-3 bg-white/20"
              }`}
            />
          ))}
        </div>
      </section>

      {/* --- FLOATING NAVBAR --- */}
      <AnimatePresence>
        {isScrolled && (
          <motion.nav 
            initial={{ y: -100, x: "-50%" }}
            animate={{ y: 24, x: "-50%" }}
            exit={{ y: -100, x: "-50%" }}
            className="fixed top-0 left-1/2 z-[100] flex items-center gap-4 px-5 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full w-[90%] md:w-auto"
          >
            <Link href="/" className="w-7 h-7 bg-white rounded flex items-center justify-center font-black text-black italic text-xs">S</Link>
            <div className="hidden md:flex items-center gap-6">
              {sectors.map((s) => (
                <Link key={s.title} href={s.href} className="font-mono text-[9px] uppercase tracking-widest text-white/40 hover:text-[#4ade80] transition-colors">{s.title}</Link>
              ))}
            </div>
            <div className="h-3 w-px bg-white/10 hidden md:block" />
            <button onClick={() => setIsModalOpen(true)} className="font-mono text-[9px] font-bold uppercase text-[#4ade80] whitespace-nowrap">Hire_Me</button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* --- SECTOR GRID --- */}
      <section className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row min-h-[60vh] border-t border-white/5 bg-black">
        {sectors.map((sector, index) => (
          <Link key={index} href={sector.href} className="group relative flex-1 flex flex-col items-center justify-center py-20 px-10 border-b md:border-b-0 md:border-r border-white/5 hover:bg-zinc-900/30 transition-all duration-500 overflow-hidden">
            <sector.icon size={32} style={{ color: sector.color }} className="mb-6 z-10" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-center leading-[0.8] z-10 pointer-events-none">
              {sector.title} <br/> 
              <span className="text-transparent [text-stroke:1px_rgba(255,255,255,0.2)] italic font-serif lowercase">{sector.sub}</span>
            </h2>
          </Link>
        ))}
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="py-20 md:py-32 px-6 lg:px-10 max-w-7xl mx-auto space-y-32">
        
        {/* Philosophy */}
        <div className="max-w-4xl">
          <span className="font-mono text-[#4ade80] text-[10px] uppercase tracking-[0.5em] block mb-6">Core_Philosophy</span>
          <h4 className="text-5xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter text-balance">
            Merging <br/> 
            <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">Logic</span> with <br/> 
            <span className="italic font-serif text-[#3b82f6]">Design.</span>
          </h4>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative h-[400px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20">
              <h5 className="text-3xl md:text-5xl font-black uppercase mb-4">Spatial Excellence</h5>
              <Link href="/Architecture" className="text-[#4ade80] font-mono text-[10px] tracking-widest flex items-center gap-2">VIEW CASE STUDY <ArrowRight size={14} /></Link>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex-1 bg-zinc-900/50 border border-white/5 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem]">
              <Paintbrush className="text-[#f87171] mb-6" />
              <h6 className="text-xl md:text-2xl font-bold italic">Visual Arts_</h6>
              <p className="text-white/40 text-[10px] font-mono uppercase mt-2">Multimedia & Fine Art</p>
            </div>
            <div className="flex-1 bg-[#3b82f6] text-black p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between group cursor-pointer">
              <Code2 className="group-hover:rotate-12 transition-transform" />
              <h6 className="text-2xl md:text-3xl font-black uppercase mt-8 md:mt-0">Core Dev</h6>
            </div>
          </div>
        </div>

        {/* Workflow Section */}
        <section className="space-y-16">
          <div className="space-y-6">
            <span className="font-mono text-[#4ade80] text-[10px] uppercase tracking-[0.5em] block">The_Process</span>
            <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Cara Kami <span className="italic font-serif text-[#3b82f6]">Bekerja.</span></h4>
            <div className="bg-white/5 border-l-2 border-[#4ade80] p-6 rounded-r-2xl max-w-3xl">
              <p className="font-mono text-[10px] md:text-xs text-white/80 leading-relaxed">
                Pilih <span className="text-white font-bold underline">Template</span> yang sesuai dengan kebutuhan Anda. 
                <span className="text-[#4ade80] block mt-2 italic">* Biaya tambahan berlaku untuk kustomisasi fitur khusus.</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Konsultasi", desc: "Sesi diskusi strategis untuk memahami visi bisnis Anda." },
              { step: "02", title: "Prototyping", desc: "Visualisasi UI/UX yang intuitif dan estetik." },
              { step: "03", title: "Development", desc: "Transformasi kode menggunakan Next.js & IoT." },
              { step: "04", title: "Support", desc: "Pemeliharaan sistem agar siap skala besar." }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-zinc-900/30 border border-white/5 rounded-[2rem] hover:border-[#4ade80]/30 transition-all">
                <span className="font-mono text-2xl font-black text-white/10 group-hover:text-[#4ade80] transition-colors">{item.step}</span>
                <h5 className="text-xl font-bold mt-4 mb-2">{item.title}</h5>
                <p className="text-white/40 text-[10px] leading-relaxed font-mono uppercase">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Special Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-[#4ade80]/20 to-transparent border border-[#4ade80]/30 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="relative z-10 flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
                <span className="h-2 w-2 rounded-full bg-[#4ade80]"></span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#4ade80]">Slot Terbatas</span>
            </div>
            <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Early Bird <span className="text-transparent [-webkit-text-stroke:1px_white]">Special.</span></h4>
            <p className="font-mono text-xs text-white/60 max-w-sm mx-auto lg:mx-0">Pengerjaan sistem profesional dengan potongan harga 50% untuk 5 klien pertama.</p>
          </div>

          <div className="relative z-10 text-center lg:text-right w-full lg:w-auto">
            <div className="mb-6">
              <span className="text-white/30 line-through text-xl font-mono block">Rp 100.000</span>
              <span className="text-5xl md:text-7xl font-black text-[#4ade80] block">Rp 50.000</span>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full lg:w-auto px-10 py-5 bg-[#4ade80] text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:scale-105 transition-transform"
            >
              Klaim Slot Sekarang
            </button>
            <p className="font-mono text-[9px] text-white/20 mt-4 uppercase tracking-[0.3em]">Slot Tersisa: <span className="text-white font-bold">5 / 5</span></p>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">
          <p>© 2026 SENJA DEV</p>
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" className="hover:text-white transition-colors">{link.label}</a>
            ))}
          </div>
        </footer>
      </main>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-zinc-950 border border-white/10 rounded-[2rem] p-8 md:p-12"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-white/20 hover:text-white"><X size={20} /></button>
              <div className="mb-10">
                <h3 className="font-serif italic text-3xl mb-2 text-[#4ade80]">Hello_</h3>
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Wujudkan ide digital Anda sekarang.</p>
              </div>
              <form onSubmit={handleWhatsApp} className="space-y-6">
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase text-white/30">01. Nama Lengkap</label>
                  <input required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border-b border-white/10 py-3 text-sm outline-none focus:border-[#4ade80] transition-all" placeholder="Input your name" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase text-white/30">02. Detail Proyek</label>
                  <textarea required value={formData.project} onChange={(e) => setFormData({...formData, project: e.target.value})} className="w-full bg-transparent border-b border-white/10 py-3 text-sm h-24 resize-none outline-none focus:border-[#4ade80] transition-all" placeholder="Apa yang ingin Anda bangun?" />
                </div>
                <button type="submit" className="w-full bg-[#4ade80] text-black font-black uppercase text-[10px] tracking-widest py-5 rounded-xl flex items-center justify-center gap-3">
                  Kirim ke WhatsApp <ArrowRight size={14} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}