"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, RefreshCcw, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#050505] text-white min-h-screen w-full overflow-hidden flex flex-col items-center justify-center relative selection:bg-[#4ade80] selection:text-black">
      
      {/* --- DESIGN RULES LAYER (Sama seperti Entry Page) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute top-[10%] w-full h-px bg-white/10" />
        <div className="absolute left-[5%] h-full w-px bg-white/10" />
        <div className="absolute top-8 left-8 text-[8px] font-mono text-white/40 uppercase tracking-tighter">
          ERR_CODE: 404 / path_not_found
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Animated 404 Number */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <h1 className="text-[12rem] md:text-[20rem] font-black leading-none tracking-tighter text-transparent [text-stroke:1px_rgba(255,255,255,0.1)] select-none">
            404
          </h1>
          <motion.div 
            animate={{ x: [-2, 2, -2], opacity: [0.5, 0.8, 0.5] }}
            transition={{ repeat: Infinity, duration: 0.1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-5xl md:text-8xl font-serif italic text-[#4ade80] drop-shadow-[0_0_30px_rgba(74,222,128,0.3)]">
              Lost?
            </span>
          </motion.div>
        </motion.div>

        {/* Message */}
        <div className="max-w-md mt-[-2rem] md:mt-[-4rem] space-y-6">
          <p className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-white/40 leading-relaxed">
            Halaman yang Anda cari telah dipindahkan, dihapus, atau tidak pernah ada dalam arsitektur sistem ini.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              href="/" 
              className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#4ade80] transition-all duration-500 w-full md:w-auto justify-center"
            >
              <Home size={14} /> Back to Core
            </Link>
            
            <button 
              onClick={() => window.location.reload()}
              className="flex items-center gap-3 border border-white/10 hover:border-white/40 px-8 py-4 rounded-full font-mono text-[10px] uppercase tracking-widest text-white/60 hover:text-white transition-all w-full md:w-auto justify-center"
            >
              <RefreshCcw size={14} /> Retry_System
            </button>
          </div>
        </div>
      </main>

      {/* --- DECORATIVE TERMINAL FOOTER --- */}
      <div className="absolute bottom-12 w-full px-10 flex justify-between items-end opacity-20 hidden md:flex">
        <div className="font-mono text-[9px] space-y-1">
          <p className="flex items-center gap-2 text-[#4ade80]"><Terminal size={10}/> {`> status: disconnected`}</p>
          <p>{`> location: bandung_west_java`}</p>
          <p>{`> timestamp: ${new Date().toISOString()}`}</p>
        </div>
        <div className="text-right font-mono text-[9px] uppercase tracking-widest">
          Senja Dev <br/> Systems Corp.
        </div>
      </div>

    </div>
  );
}