"use client";

import React, { useState, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  Code2, 
  ExternalLink, 
  Github, 
  Layers,
  ArrowUpRight,
  Linkedin,
  Mail,
  Sun,
  Moon
} from 'lucide-react';
import { themes } from '@/src/config/themes';
import { ThemeWrapper } from '@/components/shared/themeWrapper';

export default function TechCreativePortfolio(): JSX.Element {
  const [isDark, setIsDark] = useState<boolean>(true);
  const theme = themes?.general3 || {};

  // Variabel Warna Dinamis
  const bgColor = isDark ? "bg-[#030712]" : "bg-slate-50";
  const textColor = isDark ? "text-white" : "text-slate-900";
  const borderColor = isDark ? "border-white/10" : "border-slate-200";
  const cardBg = isDark ? "bg-gray-900/50" : "bg-white";
  const subText = isDark ? "text-gray-400" : "text-slate-500";

  return (
    <ThemeWrapper theme={theme}>
      <div className={`${bgColor} ${textColor} min-h-screen font-sans transition-colors duration-500 selection:bg-indigo-500/30`}>
        
        {/* --- 1. NAVIGATION --- */}
        <nav className={`fixed top-0 w-full z-50 border-b ${borderColor} ${isDark ? 'bg-[#030712]/50' : 'bg-white/50'} backdrop-blur-xl transition-colors`}>
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-xs text-white">P</div>
              <span className="font-bold tracking-tighter text-xl uppercase">PRATAMA<span className="text-indigo-500">_</span></span>
            </div>
            
            <div className="flex items-center gap-8">
              <div className={`hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] ${subText}`}>
                <a href="#about" className="hover:text-indigo-500 transition-colors">// About</a>
                <a href="#edu" className="hover:text-indigo-500 transition-colors">// Education</a>
                <a href="#work" className="hover:text-indigo-500 transition-colors">// Projects</a>
              </div>
              
              {/* TOGGLE SWITCH */}
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-xl border ${borderColor} hover:scale-110 transition-all bg-opacity-20`}
              >
                {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-indigo-600" />}
              </button>
            </div>
          </div>
        </nav>

        {/* --- 2. HERO SECTION --- */}
        <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
          {/* Background Ornaments - Opacity adjusted for light mode */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/${isDark ? '20' : '10'} rounded-full blur-[120px]`} />
            <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/${isDark ? '20' : '10'} rounded-full blur-[120px]`} />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${isDark ? 'bg-indigo-500/10' : 'bg-indigo-50'} border border-indigo-500/20 text-indigo-500 text-xs font-mono mb-6`}>
                  <Terminal size={14} /> <span>System.Ready_ (2026)</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.85] mb-6 uppercase">
                  Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Beyond</span> <br />
                  The Interface.
                </h1>
                <p className={`${subText} text-lg md:text-xl max-w-xl leading-relaxed font-light`}>
                  Mengkombinasikan kekuatan <span className="font-medium text-indigo-500">Hardware</span> dan <span className="font-medium text-indigo-500">Full-stack</span> untuk menciptakan solusi digital yang berdampak nyata.
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-5">
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2">
                  Explore Projects <ExternalLink size={18} />
                </button>
                <button className={`px-8 py-4 rounded-xl border ${borderColor} ${isDark ? 'bg-white/5' : 'bg-white'} font-bold hover:bg-indigo-50 transition-all flex items-center gap-2`}>
                  <Github size={18} /> Source
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-500/20 rounded-[4rem] blur-2xl animate-pulse" />
                <div className={`relative w-72 h-96 md:w-80 md:h-[30rem] ${isDark ? 'bg-gray-900' : 'bg-slate-200'} rounded-[3.5rem] overflow-hidden border-4 ${isDark ? 'border-gray-800' : 'border-white'} shadow-2xl`}>
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800" 
                    alt="Profile" 
                    className={`w-full h-full object-cover transition-all duration-700 ${isDark ? 'mix-blend-luminosity hover:mix-blend-normal' : ''}`} 
                  />
                  <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] backdrop-blur-md ${isDark ? 'bg-black/60' : 'bg-white/80'} p-5 rounded-3xl border ${borderColor}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] uppercase tracking-widest text-indigo-500 font-bold">Status</span>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-tighter">Available for Contracts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. EDUCATION --- */}
        <section id="edu" className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-sm font-mono text-indigo-500 mb-12 uppercase tracking-widest">// Academic_History</h2>
          <div className="grid gap-4">
            {[
              { year: "2024-2026", school: "Universitas Informatika", major: "Informatics Engineering", status: "Active" },
              { year: "2021-2024", school: "SMK Teknik Komputer", major: "Software Engineering", status: "Graduated" }
            ].map((edu, i) => (
              <div key={i} className={`p-8 ${cardBg} border ${borderColor} rounded-3xl flex flex-col md:flex-row justify-between md:items-center gap-6 group hover:border-indigo-500 transition-all`}>
                <span className="font-mono text-indigo-500 text-sm">{edu.year}</span>
                <div className="flex-1">
                  <h4 className="text-xl font-black uppercase tracking-tight">{edu.school}</h4>
                  <p className={subText}>{edu.major}</p>
                </div>
                <div className={`px-4 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 text-[10px] font-bold uppercase self-start md:self-center`}>
                  {edu.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. PROJECTS --- */}
        <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-sm font-mono text-indigo-500 mb-12 uppercase tracking-widest">// Selected_Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "IoT Health Monitor", tech: "Raspberry Pi + Next.js", code: "Log_0x1A" },
              { title: "E-Voting Blockchain", tech: "Solidity + React", code: "Log_0x2B" }
            ].map((project, i) => (
              <div key={i} className={`group relative aspect-video rounded-[2.5rem] ${cardBg} border ${borderColor} overflow-hidden p-10 hover:shadow-2xl transition-all`}>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 ${isDark ? 'bg-white/5' : 'bg-slate-100'} rounded-xl flex items-center justify-center border ${borderColor}`}>
                      <Layers size={20} className="text-indigo-500" />
                    </div>
                    <ArrowUpRight className={`${subText} group-hover:text-indigo-500 transition-all`} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-indigo-500 font-bold uppercase tracking-widest">{project.code}</span>
                    <h3 className="text-3xl font-black uppercase mt-2 tracking-tighter">{project.title}</h3>
                    <p className={`${subText} text-sm mt-1`}>{project.tech}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 5. CONTACT --- */}
        <section id="contact" className="py-40 px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
            <h3 className="text-6xl md:text-9xl font-black uppercase mb-16 tracking-tighter">
              Let's Sync<span className="text-indigo-600">_</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:hello@pratama.io" className="px-12 py-6 bg-indigo-600 text-white font-black rounded-2xl hover:scale-105 transition-all flex items-center gap-3 shadow-xl shadow-indigo-500/20">
                <Mail size={20} /> SAY_HELLO
              </a>
              <a href="#" className={`px-12 py-6 ${isDark ? 'bg-white/5' : 'bg-white'} border ${borderColor} font-black rounded-2xl hover:border-indigo-500 transition-all flex items-center gap-3`}>
                <Linkedin size={20} /> LINKEDIN
              </a>
            </div>
          </motion.div>
        </section>

        <footer className={`py-12 border-t ${borderColor} text-center ${subText} font-mono text-[10px] uppercase tracking-[0.5em]`}>
          &copy; 2026 PRATAMA / INFORMATICS_ENGINEER / {isDark ? 'DARK_MODE' : 'LIGHT_MODE'}
        </footer>

      </div>
    </ThemeWrapper>
  );
}