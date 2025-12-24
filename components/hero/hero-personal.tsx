"use client"

import React, { useEffect, useState } from "react"
import { ArrowRight, Mail, Code, MapPin, Sparkles, Github, Twitter, Linkedin } from "lucide-react"

export default function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
      <section id="home" className="relative pt-20 pb-16 md:pt-24 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Decorative Ambient Light - Adjusted for White Theme */}
        <div className="absolute -top-24 -left-24 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500/5 rounded-full blur-[80px] md:blur-[120px] -z-10" />
        <div className="absolute top-1/2 -right-24 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-rose-500/5 rounded-full blur-[80px] md:blur-[100px] -z-10" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content: Personal Info */}
          <div className="order-2 lg:order-1 lg:col-span-7 z-10 text-center lg:text-left">
            <div
              className={`flex flex-col lg:flex-row items-center gap-4 mb-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-400 p-[2px] rotate-3 hover:rotate-0 transition-transform duration-300 shadow-lg">
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                      alt="Profil" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Halo, Saya Alex.
                </h3>
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-slate-400 text-xs font-medium uppercase tracking-wider">
                  <MapPin size={12} />
                  Jakarta, Indonesia
                </div>
              </div>
            </div>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.2] lg:leading-[1.1] tracking-tight text-slate-900 transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Mengubah ide menjadi{" "}
              <span className="text-indigo-600 italic block sm:inline">kenyataan</span> digital.
            </h1>

            <p
              className={`text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Seorang Full-stack Developer yang fokus pada pembuatan antarmuka yang intuitif dan skalabel. Saya percaya bahwa kode yang bagus bukan hanya tentang fungsi, tapi juga tentang pengalaman yang bermakna.
            </p>

            <div
              className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-4 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10">
                Lihat Proyek
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all duration-300 shadow-sm">
                <Mail size={18} className="text-indigo-600" />
                Hubungi Saya
              </button>
            </div>

            {/* Social Links */}
            <div className={`mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <div className="flex gap-4">
                  <a href="#" className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all" aria-label="Github"><Github size={20} /></a>
                  <a href="#" className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all" aria-label="Linkedin"><Linkedin size={20} /></a>
                  <a href="#" className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all" aria-label="Twitter"><Twitter size={20} /></a>
                </div>
                <div className="hidden sm:block h-px w-12 bg-slate-200" />
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase italic">Design & Code by Me</span>
            </div>
          </div>

          {/* Right Column: Experience/Stats Asset */}
          <div
            className={`order-1 lg:order-2 lg:col-span-5 relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative z-10 p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl shadow-indigo-100 overflow-hidden group max-w-[450px] mx-auto lg:max-w-none">
              
              {/* Profile Card Floating UI */}
              <div className="space-y-4 md:space-y-6">
                <div className="p-4 md:p-5 rounded-2xl bg-indigo-50 border border-indigo-100 transform -rotate-1 lg:-rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600"><Code size={20} /></div>
                    <span className="text-[9px] md:text-[10px] font-mono text-indigo-400 uppercase tracking-[0.2em]">Latest Project</span>
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-slate-900 mb-1 tracking-tight">E-Commerce Dashboard</h4>
                  <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed">Membangun sistem analitik real-time menggunakan Next.js & Supabase.</p>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-rose-50 border border-rose-100 transform rotate-1 group-hover:rotate-0 transition-transform duration-500 delay-75">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2 md:-space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                          <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                        </div>
                      ))}
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-white flex items-center justify-center text-[9px] text-rose-500 font-bold shadow-sm">+12</div>
                    </div>
                    <div>
                      <p className="text-[11px] md:text-xs font-bold text-slate-900 leading-none mb-1">Klien Senang</p>
                      <p className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-tighter">Kepuasan 100%</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100">
                      <Sparkles size={18} className="text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-bold text-slate-900">4+ Tahun</p>
                      <p className="text-[9px] md:text-[10px] text-slate-400 uppercase">Pengalaman</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs md:text-sm font-bold text-slate-900">20+</p>
                    <p className="text-[9px] md:text-[10px] text-slate-400 uppercase">Proyek</p>
                  </div>
                </div>
              </div>

              {/* Background Ornament - Subtle for White Theme */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-indigo-500/[0.03] blur-[60px] md:blur-[80px] -z-10" />
            </div>

            {/* Quote / Personal Note */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 p-3 md:p-4 bg-white border border-slate-100 rounded-xl md:rounded-2xl shadow-xl shadow-slate-200/50 max-w-[150px] md:max-w-[200px] animate-bounce-slow">
              <p className="text-[9px] md:text-[11px] italic text-slate-500 leading-tight">
                "Kualitas adalah melakukan hal yang benar saat tidak ada yang melihat."
              </p>
            </div>
          </div>

        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}} />
    </div>
  )
}