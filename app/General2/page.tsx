"use client";

import React, { JSX, useState } from 'react';
import { motion } from 'framer-motion';
import { Theme } from '@/src/config/themes';
import { ThemeWrapper } from '@/components/shared/themeWrapper';
import { 
  Mail, 
  CheckCircle2, 
  Target,
  FileText,
  ArrowUpRight,
  Linkedin,
  Clock,
  Zap,
  Star,
  Sun,
  Moon,
  LucideIcon 
} from 'lucide-react';
import { themes } from '@/src/config/themes';

// --- DEFINISI INTERFACE ---
interface StatItem {
  label: string;
  value: string;
  icon: React.ReactElement<LucideIcon>;
}

interface ServiceItem {
  title: string;
  desc: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  impact: string;
}

export default function GeneralProfessionalPortfolio(): JSX.Element {
  const theme = themes?.general2 || {};
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Penamaan variabel warna yang konsisten
  const bgColor: string = darkMode ? "bg-slate-950" : "bg-white";
  const textColor: string = darkMode ? "text-slate-100" : "text-slate-900";
  const subTextColor: string = darkMode ? "text-slate-400" : "text-slate-500";
  const cardBg: string = darkMode ? "bg-slate-900" : "bg-slate-50";
  const borderColor: string = darkMode ? "border-slate-800" : "border-slate-200";

  // --- DATA SECTIONS ---
  const stats: StatItem[] = [
    { label: "Proyek Selesai", value: "50+", icon: <Zap size={20}/> },
    { label: "Kenaikan Efisiensi", value: "40%", icon: <ArrowUpRight size={20}/> },
    { label: "Kepuasan Klien", value: "4.9/5", icon: <Star size={20}/> },
    { label: "Jam Kerja", value: "2000+", icon: <Clock size={20}/> },
  ];

  const services: ServiceItem[] = [
    { title: "Project Management", desc: "Mengatur alur kerja tim, deadline, dan resource agar project selesai tepat waktu." },
    { title: "Content Strategy", desc: "Membangun narasi brand yang kuat untuk meningkatkan engagement di media sosial." },
    { title: "Data Analysis", desc: "Menerjemahkan angka menjadi laporan yang mudah dipahami untuk pengambilan keputusan." },
  ];

  const experiences: ExperienceItem[] = [
    { company: "Global Tech Inc.", role: "Operations Specialist", period: "2024 - Sekarang", impact: "Mengurangi biaya operasional sebesar 15% melalui otomatisasi workflow." },
    { company: "Creative Studio", role: "Social Media Lead", period: "2023 - 2024", impact: "Meningkatkan followers organik sebesar 200% dalam waktu 6 bulan." },
  ];

  return (
    <ThemeWrapper theme={theme}>
    <div className={`${bgColor} ${textColor} min-h-screen font-sans selection:bg-blue-100 transition-colors duration-300`}>
      
      {/* --- HEADER --- */}
      <nav className={`fixed top-0 w-full z-50 border-b ${borderColor} ${darkMode ? 'bg-slate-950/80' : 'bg-white/80'} backdrop-blur-md`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight uppercase">PRATAMA<span className="text-blue-600">.</span></span>
          <div className="flex gap-6 text-sm font-medium items-center">
            <a href="#about" className="hover:text-blue-600 transition-colors">Tentang</a>
            <a href="#stats" className="hover:text-blue-600 transition-colors">Hasil</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Pengalaman</a>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={`p-2 rounded-lg border ${borderColor} hover:bg-slate-100 dark:hover:bg-slate-800 transition-all`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* --- HERO --- */}
        <section id="about" className="mb-24 pt-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" // Menggunakan Grid 12 kolom
        >
            {/* --- KOLOM KIRI: TEKS (7 Kolom) --- */}
            <div className="lg:col-span-7 order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Membantu bisnis <span className="text-blue-600">tumbuh lebih cepat</span> dan efisien.
            </h1>
            <p className={`text-xl ${subTextColor} max-w-2xl leading-relaxed mb-10`}>
                Spesialis Operasional & Strategi Digital. Saya mengelola kerumitan agar Anda bisa fokus pada visi besar perusahaan.
            </p>
            <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                Hubungi Saya
                </a>
                <div className={`flex items-center gap-3 px-6 py-3 border ${borderColor} rounded-full font-medium text-sm`}>
                <CheckCircle2 className="text-green-500" size={18} /> Tersedia untuk Proyek Baru
                </div>
            </div>
            </div>

            {/* --- KOLOM KANAN: FOTO PROFIL (5 Kolom) --- */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
                {/* Dekorasi Aksen di belakang foto */}
                <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl group-hover:bg-blue-600/20 transition-all duration-500" />
                
                {/* Bingkai Foto Profil */}
                <div className={`relative w-64 h-80 md:w-80 md:h-[28rem] rounded-[2.5rem] overflow-hidden border-4 ${darkMode ? 'border-slate-800' : 'border-white'} shadow-2xl`}>
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" // Ganti dengan URL foto Anda
                    alt="Professional Profile"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Overlay gradasi halus agar terlihat menyatu */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                </div>

                {/* Badge Pengalaman (Opsional - Menambah Trust) */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <Star className="text-blue-600" size={20} />
                    </div>
                    <div>
                    <p className="text-xs font-bold uppercase tracking-wider opacity-60">Pengalaman</p>
                    <p className="text-sm font-bold">5+ Tahun</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </motion.div>
        </section>

        {/* --- STATS --- */}
        <section id="stats" className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${borderColor} ${cardBg} hover:shadow-md transition-shadow`}>
                <div className="text-blue-600 mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className={`text-[10px] uppercase tracking-wider font-bold ${subTextColor}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SERVICES --- */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
            <Target className="text-blue-600" /> Spesialisasi Utama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group">
                <div className="h-1 w-12 bg-blue-600 mb-6 group-hover:w-full transition-all duration-500" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className={`${subTextColor} text-sm leading-relaxed`}>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section id="projects" className="mb-24">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FileText className="text-blue-600" /> Pengalaman Terpilih
            </h2>
            <a href="#" className="text-sm font-bold text-blue-600 hover:underline">Lihat Semua CV →</a>
          </div>
          
          <div className="space-y-6">
            {experiences.map((job, i) => (
              <div key={i} className={`p-8 rounded-3xl border ${borderColor} hover:border-blue-500/50 transition-all group ${cardBg}`}>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{job.period}</span>
                    <h3 className="text-2xl font-bold mt-1">{job.role}</h3>
                    <p className="font-medium opacity-70">{job.company}</p>
                  </div>
                  <div className={`md:max-w-xs text-sm ${subTextColor} italic`}>
                    "{job.impact}"
                  </div>
                  <button className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className={`p-12 rounded-[3rem] ${darkMode ? 'bg-blue-900/30' : 'bg-blue-600'} ${darkMode ? 'text-blue-100' : 'text-white'} text-center border ${darkMode ? 'border-blue-500/30' : 'border-transparent'}`}>
          <h2 className="text-4xl font-bold mb-6">Siap untuk bekerja sama?</h2>
          <p className="mb-10 opacity-80 max-w-md mx-auto">Saya selalu terbuka untuk diskusi mengenai proyek baru atau peluang karir penuh waktu.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="mailto:email@anda.com" className={`px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 ${darkMode ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
              <Mail size={18} /> Kirim Email
            </a>
            <a href="#" className="bg-white/10 backdrop-blur-md px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 border border-white/20 transition-transform hover:scale-105">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </section>

      </main>

      <footer className={`py-12 border-t ${borderColor} text-center ${subTextColor} text-[10px] tracking-[0.2em] uppercase`}>
        © 2026 Pratama — Berfokus pada Hasil & Efisiensi.
      </footer>
    </div>
    </ThemeWrapper>
  );
}