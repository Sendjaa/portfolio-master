"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";

const Hero = () => {
    return (
        <section id="architecture" className="min-h-screen flex flex-col items-center justify-center px-6 relative bg-[#F9F9F8] overflow-hidden">
            
            {/* Background Grid Accent - Memberikan kesan "Blueprint" */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] -z-10" />
            
            <div className="max-w-7xl w-full flex flex-col items-center text-center">
                {/* ID Tagging */}
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-mono text-[10px] uppercase tracking-[0.6em] text-black/40 mb-8"
                >
                    [ Sektor _ 01 / Spatial _ Design ]
                </motion.span>

                {/* Main Heading dengan Tipografi Kontras */}
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] text-[#1a1a1a]"
                >
                    Arsitektur<br />
                    <span className="italic font-serif font-light lowercase text-black/20">Eksperimental.</span>
                </motion.h1>   

                {/* Deskripsi dengan Max-Width agar lebih rapi */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-12 text-lg md:text-xl text-black/60 max-w-2xl leading-relaxed font-medium"
                >
                    Menjelajahi batas antara logika informatika dan estetika ruang melalui eksperimen visual, materialitas, dan struktur konseptual.
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 flex flex-col items-center gap-2 opacity-30"
            >
                <span className="font-mono text-[8px] uppercase tracking-widest">Scroll_to_explore</span>
                <MoveDown size={14} />
            </motion.div>

            {/* Decorative Corner Lines */}
            <div className="absolute top-10 left-10 w-20 h-px bg-black/10 hidden md:block" />
            <div className="absolute top-10 left-10 h-20 w-px bg-black/10 hidden md:block" />
        </section>
    );
}

export default Hero;