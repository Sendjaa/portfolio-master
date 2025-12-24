"use client"

import React, { useEffect, useState } from "react"
import { ArrowRight, MessageSquare, Code, Globe, Zap, Layers } from "lucide-react"

export default function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-6 uppercase tracking-widest transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Zap size={14} className="fill-cyan-400" />
              Welcome to my portfolio
            </div>
            
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-balance transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              I build amazing{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  web experiences
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-cyan-500/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>

            <p
              className={`text-lg text-slate-400 mb-8 leading-relaxed max-w-xl transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Full-stack developer crafting beautiful, performant web applications with modern technologies. Let's build
              something extraordinary together.
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button className="group flex items-center gap-2 px-8 py-3 bg-cyan-500 text-slate-950 rounded-xl font-bold hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/25">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center gap-2 px-8 py-3 border border-slate-800 bg-slate-900/50 backdrop-blur-sm text-slate-100 rounded-xl font-bold hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 active:scale-95">
                <MessageSquare size={18} />
                Get in Touch
              </button>
            </div>

            {/* Tech Stack Mini Badge */}
            <div className={`mt-12 flex items-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <span className="text-sm text-slate-500 font-medium uppercase tracking-widest">Stack:</span>
                <div className="flex gap-3 text-slate-400">
                    <Code size={20} className="hover:text-cyan-400 transition-colors cursor-help" />
                    <Layers size={20} className="hover:text-cyan-400 transition-colors cursor-help" />
                    <Globe size={20} className="hover:text-cyan-400 transition-colors cursor-help" />
                </div>
            </div>
          </div>

          {/* Right Visual Asset */}
          <div
            className={`relative group transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-3"
            }`}
          >
            {/* Abstract Decorative Frame */}
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Outer Glow Circles */}
              <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 border border-blue-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Central Glass Card */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden">
                    {/* Animated Grid Background inside the card */}
                    <div className="absolute inset-0 opacity-20" 
                        style={{backgroundImage: 'radial-gradient(#22d3ee 0.5px, transparent 0.5px)', backgroundSize: '24px 24px'}}>
                    </div>
                    
                    {/* Floating Icons/Assets */}
                    <div className="relative flex flex-col items-center gap-4 z-10">
                        <div className="w-24 h-24 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 animate-bounce transition-all duration-500">
                            <Code size={48} className="text-cyan-400" />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="h-2 w-32 bg-slate-800 rounded-full overflow-hidden mb-2">
                                <div className="h-full bg-cyan-500 w-2/3 animate-[loading_2s_ease-in-out_infinite]" />
                            </div>
                            <div className="h-2 w-24 bg-slate-800 rounded-full overflow-hidden mb-2">
                                <div className="h-full bg-blue-500 w-1/2 animate-[loading_2s_ease-in-out_infinite_delay-300]" />
                            </div>
                        </div>
                    </div>

                    {/* Decorative Code Snippet UI */}
                    <div className="absolute top-4 left-4 p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-cyan-500/70 hidden sm:block">
                        <div className="flex gap-1 mb-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                        </div>
                        <p>const build = () =&gt; &#123;</p>
                        <p className="ml-2">success: true,</p>
                        <p className="ml-2">speed: "100ms"</p>
                        <p>&#125;</p>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Decorative Elements around the card */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl flex items-center justify-center animate-pulse">
                <Layers className="text-blue-400" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-600/20 backdrop-blur-xl border border-purple-500/30 rounded-full flex items-center justify-center animate-bounce">
                <Globe className="text-purple-400" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles for specific animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-loading {
          animation: loading 2s ease-in-out infinite;
        }
      `}} />
    </div>
  )
}