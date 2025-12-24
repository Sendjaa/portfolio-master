"use client"

import React, { useEffect, useState } from 'react';
import { ArrowDown, Instagram, Dribbble, Linkedin, Sparkles } from 'lucide-react';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1f1a] text-[#e0e7e1] pt-20">
      {/* Background Decor: Mesh Gradient Hijau */}
      <div 
        className="absolute w-[600px] h-[600px] bg-[#1a4d3c]/30 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{ 
          transform: `translate(${(mousePos.x - 800) * 0.05}px, ${(mousePos.y - 400) * 0.05}px)` 
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Sisi Kiri: Teks & Headline */}
          <div className={`flex-1 space-y-8 transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2a5d4c] bg-[#1a4d3c]/20 backdrop-blur-md">
              <Sparkles size={14} className="text-[#4ade80]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#4ade80]">
                Creative Director & Designer
              </span>
            </div>

            <h1 className="text-[12vw] lg:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase">
              Visual <br />
              <span className="text-[#4ade80] italic font-serif font-light lowercase">Architect</span>
            </h1>

            <p className="text-lg md:text-xl text-[#a0afae] max-w-md leading-tight">
              Membangun narasi visual yang kuat melalui strategi desain <span className="text-[#e0e7e1] font-semibold">modern, berkelanjutan, dan berdampak.</span>
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button onClick={() => scrollToSection("about")} className="group relative bg-[#4ade80] text-[#0a1f1a] px-10 py-5 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                <span className="relative z-10 font-black uppercase tracking-widest text-xs">Mulai Jelajahi</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <div className="flex gap-5 text-[#4ade80]/50">
                <Instagram className="hover:text-[#4ade80] cursor-pointer transition-all hover:-translate-y-1" size={22} />
                <Dribbble className="hover:text-[#4ade80] cursor-pointer transition-all hover:-translate-y-1" size={22} />
                <Linkedin className="hover:text-[#4ade80] cursor-pointer transition-all hover:-translate-y-1" size={22} />
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Foto Profil Artistik */}
          <div className={`relative flex-1 max-w-md transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative group">
              {/* Frame Foto */}
              <div className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-[#2a5d4c] bg-[#0d2b24] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                  alt="Siti Rahma Profile" 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Green Tint Overlay */}
                <div className="absolute inset-0 bg-[#1a4d3c]/20 mix-blend-color group-hover:opacity-0 transition-opacity duration-700"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#4ade80] rounded-tl-3xl z-0 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4ade80] rounded-full -z-10 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              {/* Floating Badge */}
              <div className="absolute -right-8 top-1/4 bg-[#e0e7e1] text-[#0a1f1a] p-4 rounded-2xl shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500 hidden md:block">
                <p className="font-mono text-[10px] font-bold leading-none uppercase">Based In</p>
                <p className="font-black text-lg">Jakarta</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Vertical Indicator */}
      <div className="absolute left-8 bottom-12 hidden lg:flex items-center gap-4 origin-left -rotate-90">
         <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#4ade80]/40">
           Portfolio / 2024
         </span>
         <div className="w-16 h-[1px] bg-[#2a5d4c]"></div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="font-mono text-[9px] uppercase tracking-[0.5em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#4ade80] to-transparent"></div>
      </div>
    </section>
  );
}