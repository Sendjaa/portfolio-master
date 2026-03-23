"use client"
import React, { useEffect, useState } from 'react';
import { Instagram, Dribbble, Linkedin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface Theme {
  bg: string;
  primary: string;
  secondary: string;
  tagline: string;
  label: string;
}

export const HeroDesignGraphics = ({ theme }: { theme: Theme }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Memastikan scroll smooth ke section lain
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      style={{ backgroundColor: theme.bg, color: theme.secondary }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-colors duration-700"
    >
      {/* Dynamic Background Decor: Mesh Gradient */}
      <div 
        className="absolute w-150 h-150 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out opacity-30"
        style={{ 
          backgroundColor: theme.primary,
          transform: `translate(${(mousePos.x - 800) * 0.05}px, ${(mousePos.y - 400) * 0.05}px)` 
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Sisi Kiri: Teks & Headline */}
          <div className={`flex-1 space-y-8 transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div 
              style={{ borderColor: `${theme.primary}40`, backgroundColor: `${theme.primary}10` }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md"
            >
              <Sparkles size={14} style={{ color: theme.primary }} />
              <span 
                style={{ color: theme.primary }}
                className="font-mono text-[10px] uppercase tracking-[0.3em]"
              >
                {theme.tagline}
              </span>
            </div>

            <h1 className="text-[12vw] lg:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase">
              Visual <br />
              <span 
                style={{ color: theme.primary }}
                className="italic font-serif font-light lowercase"
              >
                Architect
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-md leading-tight">
              Membangun narasi visual melalui strategi desain <span className="font-semibold text-white">modern dan berdampak.</span>
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button 
                onClick={() => scrollToSection("about")} 
                style={{ backgroundColor: theme.primary, color: theme.bg }}
                className="group relative px-10 py-5 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl font-black uppercase tracking-widest text-xs"
              >
                <span className="relative z-10">Mulai Jelajahi</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 opacity-20"></div>
              </button>
              
              <div className="flex gap-5" style={{ color: `${theme.primary}80` }}>
                <Instagram className="hover:text-white cursor-pointer transition-all hover:-translate-y-1" size={22} />
                <Dribbble className="hover:text-white cursor-pointer transition-all hover:-translate-y-1" size={22} />
                <Linkedin className="hover:text-white cursor-pointer transition-all hover:-translate-y-1" size={22} />
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Foto Profil */}
          <div className={`relative flex-1 max-w-md transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative group">
              <div 
                style={{ borderColor: `${theme.primary}40` }}
                className="relative z-10 aspect-4/5 rounded-4xl overflow-hidden border-2 bg-black/20 shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Decorative Elements dengan warna dinamis */}
              <div 
                style={{ borderTopColor: theme.primary, borderLeftColor: theme.primary }}
                className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 rounded-tl-3xl z-0 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
              ></div>
              <div 
                style={{ backgroundColor: theme.primary }}
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full -z-10 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
              ></div>
            </div>
          </div>

        </div>
      </div>

      {/* Vertical Indicator */}
      <div className="absolute left-8 bottom-12 hidden lg:flex items-center gap-4 origin-left -rotate-90">
         <span style={{ color: `${theme.primary}40` }} className="font-mono text-[10px] uppercase tracking-[0.4em]">
           {theme.label} / 2026
         </span>
         <div className="w-16 h-px" style={{ backgroundColor: `${theme.primary}20` }}></div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="font-mono text-[9px] uppercase tracking-[0.5em]">Scroll</span>
        <div 
          className="w-px h-12 bg-linear-to-b from-transparent via-white to-transparent"
          style={{ backgroundImage: `linear-gradient(to bottom, ${theme.primary}, transparent)` }}
        ></div>
      </div>
    </section>
  );
};