"use client"

import { MapPin, Sparkles, Target, Award } from "lucide-react";

export default function About() {
  return (
    // Menggunakan bg-[#F9F9F8] agar konsisten dengan section Experience
    <section id="about" className="py-32 bg-[#F9F9F8] text-zinc-900 relative overflow-hidden font-sans">
      
      {/* Decorative Background Text (Watermark Style) - Dibuat sangat tipis */}
      <div className="absolute -bottom-10 -left-10 text-[15rem] font-black text-zinc-200/30 select-none leading-none pointer-events-none uppercase">
        Profile
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Image & Identity */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative group">
              {/* Main Image Frame - Desain lebih clean tanpa border tebal */}
              <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl transition-all duration-700 group-hover:shadow-indigo-500/10">
                <img
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop"
                  alt="Muhammad Alfito - Graphic Designer"
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
              </div>
              
              {/* Decorative Accent Behind Image - Menggunakan warna zinc/abu-abu tua */}
              <div className="absolute -top-6 -right-6 w-full h-full border border-zinc-200 z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              {/* Location Tag Floating - Dibuat lebih minimalis */}
              <div className="absolute bottom-10 -right-6 z-20 bg-zinc-900 text-white p-5 rounded-none shadow-2xl hidden md:block italic">
                <div className="flex items-center gap-4">
                  <MapPin size={18} className="text-zinc-400" />
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-1">Based in</p>
                    <p className="font-medium tracking-tight text-sm">Bandung, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Content & Narrative */}
          <div className="md:col-span-7 order-1 md:order-2 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-px bg-zinc-300"></div>
                 <span className="text-zinc-400 font-mono text-[10px] font-bold uppercase tracking-[0.4em]">
                    01 — The Designer
                 </span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 leading-[0.8] uppercase">
                Artistic <br />
                <span className="text-zinc-400 italic font-serif font-light lowercase">Mindset.</span>
              </h2>
            </div>

            <div className="space-y-10 max-w-xl">
              <p className="text-2xl font-light text-zinc-600 leading-tight tracking-tight">
                Seorang desainer grafis yang berfokus pada <span className="text-zinc-900 font-medium">kejelasan visual</span> dan kekuatan cerita di balik setiap piksel yang diciptakan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-900 font-bold uppercase text-[10px] tracking-[0.2em]">
                    <Sparkles size={14} className="text-zinc-400" />
                    Specialization
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed font-normal">
                    Fokus pada branding system, desain antarmuka modern, dan aset visual untuk kebutuhan pemasaran digital.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-900 font-bold uppercase text-[10px] tracking-[0.2em]">
                    <Target size={14} className="text-zinc-400" />
                    Methodology
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed font-normal">
                    Pendekatan berbasis riset untuk memastikan desain tidak hanya estetik, tapi juga berfungsi secara strategis.
                  </p>
                </div>
              </div>

              {/* Personal Details Row - Dibuat lebih eksklusif */}
              <div className="pt-10 flex flex-wrap gap-16 border-t border-zinc-200">
                <div className="space-y-2">
                  <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-400">Experience</p>
                  <p className="text-2xl font-black text-zinc-900 uppercase leading-none tracking-tighter">6+ Years</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-400">Main Focus</p>
                  <p className="text-2xl font-black text-zinc-900 uppercase leading-none tracking-tighter">Branding</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-400">Availability</p>
                  <p className="text-2xl font-black text-zinc-900 uppercase leading-none tracking-tighter italic">Open</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}