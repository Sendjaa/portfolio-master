"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const HeroPersonal = () => {
  const { scrollY } = useScroll();
  
  // Efek Parallax: Teks akan sedikit bergerak lebih lambat saat di-scroll
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Grid & Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-[#4ade80]/20" />
        
        {/* Animated Orbs (Sentuhan Multimedia) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4ade80]/10 rounded-full blur-[120px]" 
        />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-6"
      >
        {/* Tagline Animation */}
        <div className="overflow-hidden mb-4">
          <motion.p 
            initial={{ y: "100%" }} 
            animate={{ y: 0 }} 
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-[#4ade80] font-mono text-xs md:text-sm tracking-[0.5em] uppercase font-bold"
          >
            Digital Artist & Multimedia Specialist
          </motion.p>
        </div>

        {/* Main Title Animation */}
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }} 
            animate={{ y: 0 }} 
            transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="text-[14vw] md:text-[10vw] font-black leading-[0.85] uppercase italic tracking-tighter"
          >
            CREATIVE<br/>
            <span className="text-transparent [text-stroke:1px_white] [-webkit-text-stroke:1px_white] hover:text-white transition-colors duration-500">
              VISION
            </span>
          </motion.h1>
        </div>

        {/* Action Button / Sub-text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12"
        >
          <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base font-light tracking-wide italic">
            "Transforming complex ideas into immersive visual experiences through motion and design."
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-[#4ade80]"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};