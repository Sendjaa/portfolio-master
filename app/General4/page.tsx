"use client";

import React, { useState, JSX } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sun, 
  Moon, 
  Compass, 
  PenTool, 
  Aperture,
  Instagram,
  Linkedin,
  ArrowUpRight
} from 'lucide-react';
import { themes } from '@/src/config/themes';
import { ThemeWrapper } from '@/components/shared/themeWrapper';

export default function CreativeDirectorPortfolio(): JSX.Element {
  const [isDark, setIsDark] = useState<boolean>(false);
  const theme = themes?.general4 || {};

  // UI Tokens
  const bg = isDark ? "bg-[#0d0d0d]" : "bg-[#f8f8f8]";
  const text = isDark ? "text-white" : "text-[#121212]";
  const border = isDark ? "border-white/10" : "border-black/5";
  const muted = isDark ? "opacity-40" : "opacity-50";
  const accent = "text-rose-600"; // Warna aksen diganti ke Rose untuk kesan esteti

  return (
    <ThemeWrapper theme={theme}>
      <div className={`${bg} ${text} min-h-screen font-sans transition-colors duration-700 selection:bg-rose-100`}>
        
        {/* --- NAVIGATION --- */}
        <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-10 flex justify-between items-center mix-blend-difference text-white">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
            <span className="font-black text-xl tracking-tighter uppercase">STUDIO<span className="text-rose-600">.</span>P</span>
            <span className="text-[8px] tracking-[0.4em] uppercase font-bold opacity-60">Visual Direction</span>
          </motion.div>
          
          <div className="flex items-center gap-10">
            <div className="hidden md:flex gap-10 text-[9px] font-bold uppercase tracking-[0.3em]">
              <a href="#work" className="hover:line-through transition-all underline-offset-4">Collections</a>
              <a href="#about" className="hover:line-through transition-all">Manifesto</a>
              <a href="#contact" className="hover:line-through transition-all">Inquiry</a>
            </div>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <h1 className="text-[14vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase mb-12">
              Creative <br />
              <span className={muted}>Director.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-5">
                <p className="text-xl md:text-2xl leading-tight font-light italic">
                  "Mengubah narasi abstrak menjadi identitas visual yang ikonik dan abadi."
                </p>
              </div>
              <div className="md:col-start-9 md:col-span-4 flex flex-col gap-6">
                <p className={`text-[10px] uppercase tracking-[0.3em] font-bold ${muted}`}>
                  Spesialisasi dalam Luxury Branding, Fashion Editorial, & Digital Storytelling.
                </p>
                <div className={`h-[1px] w-full ${isDark ? 'bg-white/20' : 'bg-black/10'}`} />
                <div className="flex justify-between items-center group cursor-pointer text-[10px] font-bold uppercase tracking-widest">
                  <span>View Selected Works</span>
                  <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- PORTFOLIO GRID --- */}
        <section id="work" className="py-32 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-40">
            {[
              { title: "Lumina Collection", cat: "Editorial 2026", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800" },
              { title: "Noir Identity", cat: "Branding", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800" },
              { title: "Urban Escape", cat: "Campaign", img: "https://plus.unsplash.com/premium_photo-1663011196248-99ade7cc259e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=800" },
              { title: "Minimal Concept", cat: "Art Direction", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="group relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="overflow-hidden bg-neutral-200 mb-8 aspect-[3/4]">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <span className={`text-[9px] uppercase tracking-[0.2em] font-bold ${muted} mb-2 block`}>{item.cat}</span>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">{item.title}</h3>
                  </div>
                  <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CAPABILITIES (SERVICES) --- */}
        <section className={`py-40 ${isDark ? 'bg-white text-black' : 'bg-black text-white'} px-6 md:px-12 transition-colors duration-700`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[8vw] md:text-[5vw] font-black leading-none uppercase mb-24 tracking-tighter">
              The <br /> Expertise.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: <Compass />, title: "Brand Strategy", desc: "Mendefinisikan DNA brand dan posisi pasar melalui riset mendalam." },
                { icon: <Aperture />, title: "Art Direction", desc: "Mengarahkan estetika visual mulai dari fotografi hingga desain grafis." },
                { icon: <PenTool />, title: "Concept Dev", desc: "Menciptakan ide kreatif yang segar dan relevan bagi audiens modern." }
              ].map((service, i) => (
                <div key={i} className="space-y-6">
                  <div className={`w-14 h-14 flex items-center justify-center border ${isDark ? 'border-black/20' : 'border-white/20'} rounded-full`}>
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight">{service.title}</h4>
                  <p className="text-sm leading-relaxed opacity-60 font-medium uppercase tracking-wider">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT MANTRA --- */}
        <section id="contact" className="py-48 px-6 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <span className={`text-[10px] font-bold uppercase tracking-[0.6em] ${accent} block mb-12`}>Available for Global Commission</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-20 leading-[0.8]">
              Ready to <br /> <span className={muted}>Collaborate?</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 font-bold text-[10px] uppercase tracking-[0.4em]">
              <a href="mailto:work@studio-p.com" className="hover:text-rose-600 transition-colors border-b pb-1 border-current">Email Inquiry</a>
              <a href="#" className="hover:text-rose-600 transition-colors border-b pb-1 border-current">Download Portfolio</a>
              <div className="flex gap-6">
                <Instagram size={16} className="hover:text-rose-600 transition-all cursor-pointer" />
                <Linkedin size={16} className="hover:text-rose-600 transition-all cursor-pointer" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- FOOTER --- */}
        <footer className={`py-12 border-t ${border} flex flex-col md:flex-row justify-between items-center px-6 md:px-12 text-[9px] font-bold uppercase tracking-[0.4em] ${muted}`}>
          <span>© 2026 Studio Pratama</span>
          <span className="italic">Simplicity is the ultimate sophistication</span>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
            <span>Currently in Paris, FR</span>
          </div>
        </footer>

      </div>
    </ThemeWrapper>
  );
}