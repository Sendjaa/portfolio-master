"use client"
import React, { useEffect, useState } from 'react';
import { Instagram, Dribbble, Linkedin, Sparkles, PenTool, Palette, Layers } from 'lucide-react';
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      style={{ backgroundColor: theme.bg, color: theme.secondary }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-colors duration-700 font-sans"
    >
      {/* Background Decor: Grainy Gradient & Mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div 
        className="absolute w-150 h-150 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out opacity-20"
        style={{ 
          backgroundColor: theme.primary,
          transform: `translate(${(mousePos.x - 800) * 0.07}px, ${(mousePos.y - 400) * 0.07}px)` 
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Sisi Kiri: Narrative & Bold Typography */}
          <div className={`flex-1 space-y-10 transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-4">
              <div 
                style={{ borderColor: `${theme.primary}30`, backgroundColor: `${theme.primary}05` }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border backdrop-blur-sm"
              >
                <Palette size={14} style={{ color: theme.primary }} />
                <span 
                  style={{ color: theme.primary }}
                  className="font-mono text-[11px] uppercase tracking-[0.4em] font-medium"
                >
                  {theme.tagline}
                </span>
              </div>

              <h1 className="text-[14vw] lg:text-[9vw] font-black leading-[0.75] tracking-[ -0.05em] uppercase italic">
                Shape <br />
                <span 
                  style={{ 
                    WebkitTextStroke: `1px ${theme.secondary}`, 
                    color: 'transparent' 
                  }}
                  className="not-italic font-light"
                >
                  Vision
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-400 max-w-lg leading-tight font-light tracking-tight">
              Mentransformasi ide abstrak menjadi <span className="text-white font-medium italic underline decoration-1 underline-offset-4">identitas visual</span> yang berkarakter dan tak terlupakan.
            </p>

            <div className="flex flex-wrap items-center gap-8 pt-6">
              <button 
                onClick={() => scrollToSection("works")} 
                style={{ backgroundColor: theme.primary, color: theme.bg }}
                className="group relative px-12 py-5 overflow-hidden transition-all hover:pr-16 active:scale-95 font-bold uppercase tracking-tighter text-sm italic"
              >
                <span className="relative z-10">Lihat Karya</span>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
              </button>
              
              <div className="flex gap-6 items-center" style={{ color: `${theme.secondary}60` }}>
                <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Dribbble size={20} /></a>
                <div className="h-8 w-px bg-white/10 mx-2"></div>
                <div className="flex flex-col text-[10px] uppercase tracking-widest leading-none">
                  <span>Inspiration</span>
                  <span className="font-bold text-white">Curated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Art-Focused Profile Frame */}
          <div className={`relative flex-1 max-w-md transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative group">
              {/* Frame Artistik */}
              <div 
                style={{ borderColor: `${theme.primary}20` }}
                className="relative z-10 aspect-3/4 overflow-hidden border bg-zinc-900 shadow-[30px_30px_0px_-1px_rgba(255,255,255,0.02)]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop" 
                  alt="Graphic Designer Profile" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:scale-110 transition-all duration-1000 ease-in-out"
                />
                
                {/* Floating Tool Labels */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-black/80 to-transparent">
                   <div className="flex gap-2">
                      <span className="text-[10px] px-2 py-1 bg-white/10 backdrop-blur-md rounded border border-white/20">Illustrator</span>
                      <span className="text-[10px] px-2 py-1 bg-white/10 backdrop-blur-md rounded border border-white/20">Photoshop</span>
                   </div>
                </div>
              </div>

              {/* Decorative Geometric Elements */}
              <div 
                className="absolute -top-10 -right-10 w-32 h-32 border border-dashed rounded-full animate-spin-slow opacity-20"
                style={{ borderColor: theme.primary }}
              ></div>
              <div 
                className="absolute -bottom-8 -left-8 flex gap-1"
              >
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-12 h-12 border" style={{ borderColor: `${theme.primary}40`, backgroundColor: i === 1 ? theme.primary : 'transparent' }}></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Designer Side Label */}
      <div className="absolute left-8 bottom-12 hidden lg:flex items-center gap-6 origin-left -rotate-90">
         <span style={{ color: `${theme.primary}` }} className="font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
           Creative Director / {new Date().getFullYear()}
         </span>
         <div className="w-24 h-px" style={{ backgroundColor: `${theme.primary}30` }}></div>
      </div>

      {/* Design Grid Hint */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-10 opacity-20">
        <PenTool size={18} />
        <Layers size={18} />
        <Sparkles size={18} />
      </div>

      {/* Scroll Indicator Custom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-px h-16 overflow-hidden bg-white/10 relative">
          <div 
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
            style={{ 
              animation: 'scroll-line 2s cubic-bezier(0.65, 0, 0.35, 1) infinite',
              backgroundColor: theme.primary 
            }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};