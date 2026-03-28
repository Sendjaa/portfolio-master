"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  ExternalLink, 
  Palette, 
  Brush, 
  Image as ImageIcon, 
  Download,
  ArrowRight,
  Instagram,
  Linkedin,
  Sun,
  Moon,
  GraduationCap,
  Layers,
  Sparkles
} from 'lucide-react';
import { themes } from '@/src/config/themes';
import { ThemeWrapper } from '@/components/shared/themeWrapper';

export default function CreativePortfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = themes?.general || {};

  const bgColor = darkMode ? "bg-[#0d0d0d]" : "bg-stone-50";
  const textColor = darkMode ? "text-stone-100" : "text-stone-900";
  const subTextColor = darkMode ? "text-stone-400" : "text-stone-600";
  const cardBg = darkMode ? "bg-stone-900/40" : "bg-white";
  const borderColor = darkMode ? "border-white/5" : "border-stone-200";
  const accentColor = "text-indigo-500";
  const accentBg = "bg-indigo-500";

  return (
    <ThemeWrapper theme={theme}>
      <div className={`${bgColor} ${textColor} min-h-screen transition-colors duration-500 selection:bg-indigo-500/30`}>
        
        {/* --- NAVIGASI --- */}
        <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${borderColor} ${darkMode ? 'bg-black/10' : 'bg-white/30'}`}>
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="font-bold tracking-widest text-xl uppercase">STUDIO<span className={accentColor}>.</span></span>
            
            <div className="flex items-center gap-8">
              <div className={`hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest ${subTextColor}`}>
                <a href="#tentang" className="hover:text-indigo-500 transition-colors">Arsip</a>
                <a href="#karya" className="hover:text-indigo-500 transition-colors">Karya</a>
                <a href="#kontak" className="hover:text-indigo-500 transition-colors">Kontak</a>
              </div>
              
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full border ${borderColor} hover:bg-stone-500/10 transition-all`}
              >
                {darkMode ? <Sun size={18} className="text-orange-300" /> : <Moon size={18} className="text-indigo-600" />}
              </button>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          
          {/* --- HERO SECTION --- */}
        <section className="mb-32 mt-12 md:mt-20"> {/* Tambah margin top sedikit agar lebih seimbang */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center" // Ganti max-w-4xl menjadi grid
            >
                {/* --- KOLOM KIRI: TEKS & TOMBOL (Isi 7 dari 12 kolom desktop) --- */}
                <div className="md:col-span-7 order-2 md:order-1 max-w-4xl">
                <span className={`px-4 py-1 rounded-full border ${darkMode ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400' : 'border-indigo-600/20 bg-indigo-600/5 text-indigo-600'} text-[10px] font-bold uppercase tracking-[0.2em] mb-8 inline-block`}>
                    Lulusan Seni & Desain — 2026
                </span>
                <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 leading-[0.9]">
                    Menerjemahkan <span className={`italic font-serif ${accentColor}`}>imajinasi</span> ke dalam bentuk visual<span className={accentColor}>.</span>
                </h1>
                <p className={`${subTextColor} text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-2xl`}>
                    Halo, saya seorang <strong>Visual Artist</strong>. Fokus saya adalah menciptakan narasi bermakna melalui ilustrasi digital, identitas visual, dan desain eksperimental.
                </p>
                <div className="flex flex-wrap gap-6">
                    <button className={`px-10 py-4 ${darkMode ? 'bg-white text-black' : 'bg-stone-900 text-white'} font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-2xl`}>
                    Lihat Portfolio (PDF)
                    </button>
                    <div className="flex items-center gap-6 px-4">
                    <a href="#" className={`${subTextColor} hover:text-indigo-500 transition-colors`}><Instagram size={22} /></a>
                    <a href="#" className={`${subTextColor} hover:text-indigo-500 transition-colors`}><Linkedin size={22} /></a>
                    </div>
                </div>
                </div>

                {/* --- KOLOM KANAN: FOTO PROFIL (Isi 5 dari 12 kolom desktop) --- */}
                <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
                {/* Container Foto dengan Aspek Rasio Portrait dan Sudut Melengkung Besar */}
                <div className="relative w-full max-w-sm md:max-w-none aspect-3/4 rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
                    {/* Dekorasi Latar Belakang Halus */}
                    <div className={`absolute inset-0 ${darkMode ? 'bg-indigo-950' : 'bg-indigo-50'} z-0`} />
                    
                    {/* Tag IMG dari Unsplash */}
                    <img 
                    // Menggunakan gambar portrait yang estetik dari Unsplash
                    src="/profile.jpg" 
                    alt="Profil Visual Artist"
                    // object-cover memastikan foto mengisi kontainer tanpa merusak rasio
                    className="w-full h-full object-cover relative z-10 filter ${darkMode ? 'grayscale opacity-70' : 'grayscale-0'}" 
                    />
                    
                    {/* Overlay Gradasi Halus di Atas Foto */}
                    <div className="absolute inset-0 bg-linear-to-t from-indigo-950/30 to-transparent z-20" />
                </div>
                </div>
            </motion.div>
            </section>

          {/* --- CREATIVE BENTO GRID --- */}
          <section id="tentang" className="mb-32">
            <h2 className={`text-[10px] font-bold ${subTextColor} uppercase tracking-[0.3em] mb-12 flex items-center gap-3`}>
              <Sparkles size={14} className={accentColor} /> Profil Kreatif
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Education Card */}
              <div className={`md:col-span-2 p-10 rounded-[3rem] ${cardBg} border ${borderColor} flex flex-col justify-between shadow-sm`}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <GraduationCap className={accentColor} size={28} />
                    <h3 className="text-3xl font-light italic font-serif">Pendidikan</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-indigo-500 font-bold text-sm uppercase tracking-widest">Akademi Seni & Desain</p>
                      <p className="font-medium text-2xl mt-1">Sarjana Desain Komunikasi Visual (DKV)</p>
                      <p className={`${subTextColor} mt-2`}>Fokus pada Ilustrasi Naratif & Tipografi Eksperimental</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex gap-4 flex-wrap">
                  {['Curating', 'Digital Painting', 'Brand Identity', 'Art Direction'].map(skill => (
                    <span key={skill} className={`px-5 py-2 rounded-full ${darkMode ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-600'} text-[10px] font-bold uppercase tracking-wider border ${borderColor}`}>{skill}</span>
                  ))}
                </div>
              </div>

              {/* Tools/Medium Card */}
              <div className={`p-10 rounded-[3rem] ${darkMode ? 'bg-linear-to-b from-indigo-900/20 to-stone-900' : 'bg-indigo-50'} border ${borderColor}`}>
                <Palette className={accentColor} size={32} />
                <h3 className="text-2xl font-light italic font-serif mt-6 mb-6">Medium</h3>
                <ul className={`space-y-4 text-sm font-medium ${subTextColor}`}>
                  <li className="flex items-center justify-between border-b border-white/5 pb-2">Adobe Creative Suite <Brush size={14} /></li>
                  <li className="flex items-center justify-between border-b border-white/5 pb-2">Procreate <Brush size={14} /></li>
                  <li className="flex items-center justify-between border-b border-white/5 pb-2">Traditional Oil Paint <Brush size={14} /></li>
                  <li className="flex items-center justify-between border-b border-white/5 pb-2">Blender 3D <Brush size={14} /></li>
                  <li className="flex items-center justify-between">Figma <Brush size={14} /></li>
                </ul>
              </div>
            </div>
          </section>

          {/* --- GALLERY SECTION --- */}
          <section id="karya" className="mb-32">
            <div className="flex justify-between items-baseline mb-16">
              <h2 className="text-5xl font-light italic font-serif">Karya Terpilih</h2>
              <p className={`${subTextColor} text-sm uppercase tracking-widest`}>2024 — 2026</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "Nirmala: Seri Ilustrasi",
                  desc: "Eksplorasi cerita rakyat Indonesia melalui teknik digital painting kontemporer.",
                  medium: "Digital Art",
                  tags: ["Ilustrasi", "Storytelling"],
                  image: ["/6826950.jpg"]
                },
                {
                  title: "Re-Branding Museum Kota",
                  desc: "Desain identitas visual baru yang menggabungkan elemen klasik dan modernis.",
                  medium: "Branding",
                  tags: ["Logo", "Typography"],
                  image: ["/10468500.jpg"]
                }
              ].map((project, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 0.98 }}
                  className="group cursor-pointer"
                >
                  <div className={`aspect-4/5 rounded-[3rem] ${darkMode ? 'bg-stone-800' : 'bg-stone-200'} mb-8 overflow-hidden relative shadow-2xl group`}>
                    {/* Overlay Warna saat Hover */}
                    <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        Lihat Karya <ArrowRight size={14} />
                        </span>
                    </div>

                    <img 
                        src={project.image?.[0]} 
                        alt="Digital Art Piece"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                    />

                    {/* Dekorasi Cahaya Halus di Pojok (Opsional) */}
                    <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/10 to-transparent pointer-events-none z-15" />
                    </div>
                  <div className="px-2">
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-indigo-500">{project.medium}</p>
                      <div className="flex gap-2">
                        {project.tags.map(t => <span key={t} className={`text-[10px] ${subTextColor}`}>#{t}</span>)}
                      </div>
                    </div>
                    <h3 className="text-3xl font-light italic font-serif mb-4 leading-tight">{project.title}</h3>
                    <p className={`${subTextColor} text-base leading-relaxed`}>{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* --- CONTACT SECTION --- */}
          <section id="kontak" className={`py-24 rounded-[4rem] ${darkMode ? 'bg-indigo-950/20' : 'bg-stone-100'} border ${borderColor} text-center overflow-hidden relative`}>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-light italic font-serif mb-8 leading-tight">Mulai proyek baru?</h2>
              <p className={`${subTextColor} mb-12 max-w-lg mx-auto text-lg`}>Saya selalu terbuka untuk kolaborasi kreatif, pameran, atau posisi penuh waktu di studio kreatif.</p>
              <a 
                href="mailto:art@hello.com" 
                className={`inline-flex items-center gap-4 px-12 py-6 ${accentBg} text-white font-bold rounded-full hover:scale-105 transition-all text-sm uppercase tracking-widest shadow-2xl shadow-indigo-500/40`}
              >
                Kirim Pesan <Mail size={18} />
              </a>
            </div>
            {/* Dekorasi Artistik */}
            <div className="absolute -bottom-10 -right-10 opacity-5">
              <Layers size={300} />
            </div>
          </section>

        </main>

        <footer className={`max-w-6xl mx-auto px-6 py-12 border-t ${borderColor} flex flex-col md:flex-row justify-between items-center gap-8 ${subTextColor} text-[10px] font-bold uppercase tracking-[0.2em]`}>
          <p>© 2026 Hak Cipta Dilindungi. Visual Artist & Designer.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-indigo-500 transition-colors">Behance</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Dribbble</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Instagram</a>
          </div>
        </footer>
      </div>
    </ThemeWrapper>
  );
}