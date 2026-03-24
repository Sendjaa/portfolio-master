"use client"

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { categoryData} from '@/src/data/category';
import CategoryDetail from '@/components/category/category_detail';

import { 
  ArrowRight, 
  X, 
  Ruler, 
  Paintbrush, 
  ShieldCheck, 
  Code2, 
  Camera
} from 'lucide-react';

const CategoryDetailInternal = ({ categoryId, onBack }: { categoryId: string; onBack: () => void }) => {
  const data = categoryData[categoryId] || categoryData.spatial;
  const IconComponent = data.icon;

  return (
     <CategoryDetail />
  );
};

const PortfolioCategoriesInternal = ({ onSelect }: { onSelect: (id: string) => void }) => {
  const categories = [
    { id: "spatial", title: "Spatial", sub: "Architecture", icon: Ruler, color: "#94a3b8" },
    { id: "visual", title: "Visual", sub: "Arts", icon: Paintbrush, color: "#f87171" },
    { id: "system", title: "System", sub: "Core", icon: Code2, color: "#3b82f6" },
    { id: "photo", title: "Lens", sub: "Photo", icon: Camera, color: "#a855f7" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <motion.div
          key={cat.id}
          whileHover={{ y: -5 }}
          onClick={() => onSelect(cat.id)}
          className="group relative p-8 bg-zinc-900/30 border border-white/5 rounded-4xl hover:border-white/20 transition-all cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity" style={{ color: cat.color }}>
            <cat.icon size={40} />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/20 group-hover:text-white/60 transition-colors">Sector_{cat.id}</span>
          <h3 className="text-3xl font-black uppercase tracking-tighter mt-4 leading-none">
            {cat.title} <br/>
            <span className="text-transparent [-webkit-text-stroke:1px_white] opacity-40">{cat.sub}</span>
          </h3>
          <div className="mt-8 flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.3em] text-[#4ade80] opacity-0 group-hover:opacity-100 transition-all">
            View_Projects <ArrowRight size={12} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function EntryPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', project: '' });
  const [currentSlide, setCurrentSlide] = useState(0);

  const [activeTab, setActiveTab] = useState('home');
  const [selectedId, setSelectedId] = useState('');

  const slides = [
    {
      title: "Creative",
      sub: "Engineer",
      desc: "Membangun ekosistem digital yang tak hanya berfungsi sempurna, tapi juga memikat mata.",
      video: "/videos/engineer-bg.mp4", 
    },
    {
      title: "Spatial",
      sub: "Architect",
      desc: "Transformasi visi menjadi ruang nyata. Kami merancang arsitektur modern yang presisi.",
      video: "/202603231812.mp4",
    }
  ];

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleTabClick = (id: React.SetStateAction<string>) => { 
    setSelectedId(id);
    setActiveTab("detail");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const target = "6289509162484";
    const message = `Halo Senja Dev! Saya ${formData.name}.%0A%0A*Project:* ${formData.project}`;
    window.open(`https://wa.me/${target}?text=${message}`, '_blank');
    setIsModalOpen(false);
  };

  // Toggle View
  if (activeTab === 'detail') {
    return <CategoryDetailInternal categoryId={selectedId} onBack={() => setActiveTab('home')} />;
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white antialiased overflow-x-hidden selection:bg-[#4ade80] selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-svh w-full flex items-center justify-center overflow-hidden">
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
              className="w-full h-full object-cover pointer-events-none"
              src={slides[currentSlide].video}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-[#050505]" />
          </motion.div>
        </AnimatePresence>

        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="text-center z-20 px-6 max-w-5xl">
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

      </section>

      {/* --- FLOATING NAVBAR --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isScrolled ? 0 : -100, 
          opacity: isScrolled ? 1 : 0,
          pointerEvents: isScrolled ? "auto" : "none"
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Ease yang lebih smooth
        className="fixed top-0 left-0 w-full z-100 backdrop-blur-md bg-black/40 border-b border-white/5"
      > 
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          {/* Logo dengan animasi hover sederhana */}
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40 hover:text-[#4ade80] transition-colors cursor-default">
            SENJA_DEV
          </span>

          <div className="flex items-center gap-10">
            {/* Nav Link dengan font mono agar konsisten */}
            {['Home', 'Works'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-[#4ade80] transition-colors"
              >
                {item}
              </a>
            ))}

            {/* Button CTA yang lebih tegas */}
            <a 
              onClick={() => setIsModalOpen(true)}
              href="#contact" 
              className="px-5 py-2 rounded-full border border-white/10 font-mono text-[9px] uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Start_Project
            </a> 
          </div>
        </div>
      </motion.nav>

      {/* --- MAIN CONTENT --- */}
      <main className="py-20 md:py-32 px-6 lg:px-10 max-w-7xl mx-auto space-y-32">
        
        {/* Portfolio Categories */}
        <section>
           <div className="mb-12 space-y-4">
              <span className="font-mono text-[#4ade80] text-[10px] uppercase tracking-[0.5em] block">Explore_Work</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Pilih <span className="italic font-serif text-[#3b82f6]">Kategori.</span></h2>
           </div>
           <PortfolioCategoriesInternal onSelect={handleTabClick} />
        </section>

        {/* Workflow Section */}
        <section className="space-y-12">
          <div className="space-y-4">
            <span className="font-mono text-[#4ade80] text-[10px] uppercase tracking-[0.5em] block">The_Process</span>
            <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Cara Kami <span className="italic font-serif text-[#3b82f6]">Bekerja.</span></h4>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Konsultasi", desc: "Diskusi mendalam untuk memahami visi bisnis Anda." },
              { step: "02", title: "Prototyping", desc: "Perancangan UI/UX yang modern dan intuitif." },
              { step: "03", title: "Development", desc: "Proses coding menggunakan Next.js & sistem IoT." },
              { step: "04", title: "Support", desc: "Maintenance berkala agar sistem tetap optimal." }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] hover:border-[#4ade80]/30 transition-all">
                <span className="font-mono text-2xl font-black text-white/10 group-hover:text-[#4ade80] transition-colors">{item.step}</span>
                <h5 className="text-xl font-bold mt-4 mb-2">{item.title}</h5>
                <p className="text-white/40 text-[10px] leading-relaxed font-mono uppercase">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Special Limited Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-linear-to-br from-[#4ade80]/10 to-transparent border border-[#4ade80]/20 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="relative z-10 flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 mb-6">
              <ShieldCheck size={12} className="text-[#4ade80]" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#4ade80]">Slot Terbatas: 5 Orang</span>
            </div>
            <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">Early Bird <br/> <span className="text-transparent [-webkit-text-stroke:1px_white]">Special.</span></h4>
            <p className="font-mono text-xs text-white/60 uppercase tracking-widest">Hanya Rp 50.000 untuk 5 pelanggan pertama.</p>
          </div>

          <div className="relative z-10 text-center lg:text-right">
            <div className="mb-8">
              <span className="text-white/30 line-through text-xl font-mono block">Rp 100.000</span>
              <span className="text-6xl md:text-8xl font-black text-[#4ade80] block">Rp 50rb</span>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-[#4ade80] text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:scale-105 active:scale-95 transition-transform"
            >
              Ambil Slot Sekarang
            </button>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">
          <p>© 2026 SENJA DEV — PROTECTED BY SYSTEM</p>
          <div className="flex gap-8">
            <a href="https://www.instagram.com/sendjaaaa_" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://www.github.com/Sendjaa" className="hover:text-white transition-colors">Github</a>
            <a href="https://www.linkedin.com/in/senja" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </footer>
      </main>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/98 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-zinc-950 border border-white/10 rounded-[2.5rem] p-8 md:p-12"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-white/20 hover:text-white"><X size={20} /></button>
              <h3 className="font-serif italic text-3xl mb-8 text-[#4ade80]">Start_Project</h3>
              <form onSubmit={handleWhatsApp} className="space-y-6">
                <input required className="w-full bg-transparent border-b border-white/10 py-3 text-sm outline-none focus:border-[#4ade80] transition-all" placeholder="Nama Anda" onChange={e => setFormData({...formData, name: e.target.value})} />
                <textarea required className="w-full bg-transparent border-b border-white/10 py-3 text-sm h-24 resize-none outline-none focus:border-[#4ade80] transition-all" placeholder="Detail Proyek" onChange={e => setFormData({...formData, project: e.target.value})} />
                <button type="submit" className="w-full bg-white text-black font-black uppercase text-[10px] tracking-widest py-5 rounded-xl flex items-center justify-center gap-3">
                  Hubungi Admin <ArrowRight size={14} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}