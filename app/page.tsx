"use client"

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { categoryData } from '@/src/data/category'; 
import CategoryDetail from '@/components/category/category_detail';

import { 
  ArrowRight, 
  X, 
  Ruler, 
  Paintbrush, 
  ShieldCheck, 
  Code2, 
  Camera,
  ArrowUpRight,
  MonitorCog,
  PenTool,
  TrendingUp,
  Briefcase,
  Menu
} from 'lucide-react';

// --- DATA KATEGORI LOKAL ---
const portfolioCategories = [
  { id: "spatial", title: "Spatial Architecture", icon: <Ruler className="w-4 h-4" />, color: "#94a3b8" },
  { id: "visual", title: "Visual Arts", icon: <Paintbrush className="w-4 h-4" />, color: "#f87171" },
  { id: "digital", title: "Digital Design", icon: <MonitorCog className="w-4 h-4" />, color: "#facc15" },
  { id: "system", title: "System Core", icon: <Code2 className="w-4 h-4" />, color: "#3b82f6" },
  { id: "photo", title: "Lens Photography", icon: <Camera className="w-4 h-4" />, color: "#a855f7" },
  { id: "writing", title: "Content Writing", icon: <PenTool className="w-4 h-4" />, color: "#fb923c" },
  { id: "marketing", title: "Growth Marketing", icon: <TrendingUp className="w-4 h-4" />, color: "#4ade80" },
  { id: "business", title: "Business Admin", icon: <Briefcase className="w-4 h-4" />, color: "#2dd4bf" }
];

// --- SUB-KOMPONEN CARD ---
const MiniCategoryCard = ({ category, onSelect }: { category: any, onSelect: (id: string) => void }) => {
  // Ambil count real dari data/category.js jika tersedia
  const projectCount = categoryData[category.id]?.projects?.length || 0;

  return (
    <motion.div
      whileHover={{ scale: 1.02, backgroundColor: "rgba(39, 39, 42, 0.8)" }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(category.id)}
      className="relative group overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5 p-4 sm:p-5 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div 
            className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border border-white/5 backdrop-blur-sm"
            style={{ backgroundColor: `${category.color}15`, color: category.color }}
          >
            {category.icon}
          </div>
          <div className="min-w-0">
            <h3 className="text-[10px] sm:text-[11px] font-black uppercase tracking-tight leading-tight text-white/90 truncate sm:whitespace-normal">
              {category.title.split(' ')[0]} <br className="hidden sm:block"/>
              <span className="text-white/40">{category.title.split(' ').slice(1).join(' ')}</span>
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-end shrink-0">
          <span className="font-mono text-[9px] text-[#4ade80] font-bold mb-1">
            {projectCount}
          </span>
          <div className="text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
            <ArrowUpRight size={12} />
          </div>
        </div>
      </div>
      <div 
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 hidden sm:block"
        style={{ backgroundColor: category.color }}
      />
    </motion.div>
  );
};

// --- WRAPPER UNTUK DETAIL ---
const CategoryDetailInternal = ({ categoryId, onBack }: { categoryId: string; onBack: () => void }) => {
  const data = categoryData[categoryId] || categoryData.spatial;
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {/* Mengirimkan data kategori ke komponen detail */}
       <CategoryDetail categoryId={categoryId} />
    </motion.div>
  );
};

export default function EntryPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', project: '' });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleTabClick = (id: string) => { 
    setSelectedId(id);
    setActiveTab("detail");
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const target = "6289509162484";
    const message = `Halo Senja Dev! Saya ${formData.name}.%0A%0A*Project:* ${formData.project}`;
    window.open(`https://wa.me/${target}?text=${message}`, '_blank');
    setIsModalOpen(false);
  };


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
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-black/40 border-b border-white/5"
        > 
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40 hover:text-[#4ade80] transition-colors cursor-default">
              SENJA_DEV
            </span>

            {/* --- DESKTOP MENU --- */}
            <div className="hidden md:flex items-center gap-10">
              {['Home', 'Works'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-[#4ade80] transition-colors"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2 rounded-full border border-white/10 font-mono text-[9px] uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Start_Project
              </button> 
            </div>

            {/* --- MOBILE HAMBURGER BUTTON --- */}
            <button 
              className="md:hidden text-white/60 hover:text-[#4ade80] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* --- MOBILE MENU OVERLAY --- */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-black/90 border-b border-white/5 p-6 flex flex-col gap-6"
            >
              {['Home', 'Works'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="font-mono text-[12px] uppercase tracking-widest text-white/60 hover:text-[#4ade80]"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
                className="w-full py-3 rounded-full border border-white/10 font-mono text-[10px] uppercase tracking-widest text-white"
              >
                Start_Project
              </button>
            </motion.div>
          )}
        </motion.nav>

      {/* --- MAIN CONTENT --- */}
      <main className="py-20 md:py-32 px-6 lg:px-10 max-w-7xl mx-auto space-y-32">
        
        {/* Portfolio Categories Terintegrasi */}
        <section id="works" className="space-y-12">
          <div className="space-y-4">
            <span className="font-mono text-[#4ade80] text-[10px] uppercase tracking-[0.5em] block">Portfolio_Grid</span>
            <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Pilih <span className="italic font-serif text-[#3b82f6]">Kategori.</span></h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {portfolioCategories.map((cat) => (
              <MiniCategoryCard key={cat.id} category={cat} onSelect={handleTabClick} />
            ))}
          </div>
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

        {/* Early Bird Offer */}
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
            <p className="font-mono text-xs text-white/60 uppercase tracking-widest">Dapatkan harga spesial untuk 5 pelanggan pertama.</p>
          </div>

          <div className="relative z-10 text-center lg:text-right">
            <div className="mb-8">
              <span className="text-white/30 line-through text-xl font-mono block text-right">Rp 100.000</span>
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
            <a href="https://www.instagram.com/sendjaaaa_" target="_blank" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@sendjaa0" target="_blank" className="hover:text-white transition-colors">TikTok</a>
            <a href="https://shopee.co.id/softengineer_?entryPoint=ShopBySearch&searchKeyword=softengineer_" target="_blank" className="hover:text-white transition-colors">Shopee</a>
            <a href="https://www.github.com/Sendjaa" target="_blank" className="hover:text-white transition-colors">Github</a>
            <a href="https://www.linkedin.com/in/senja" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </footer>
      </main>

      {/* --- MODAL FORM --- */}
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