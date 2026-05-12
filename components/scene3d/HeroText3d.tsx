"use client";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const revealVariants: Variants = {
  hidden: { y: 80, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function DesignerHeroText() {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 select-none"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Badge dengan animasi halus */}
      <motion.div variants={revealVariants} className="mb-6">
        <span className="px-5 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-xl text-white/70 text-[10px] tracking-[0.3em] uppercase font-medium">
          Visual Storyteller & Illustrator
        </span>
      </motion.div>
      
      {/* 2. Heading dengan perbaikan mask animation */}
      <div className="overflow-hidden mb-4">
        <motion.h1 
          variants={revealVariants}
          className="text-7xl md:text-[10rem] font-serif italic text-white leading-[0.9] tracking-tighter"
        >
          Alfito
        </motion.h1>
      </div>
      
      <div className="overflow-hidden mb-8">
        <motion.h1 
          variants={revealVariants}
          className="text-7xl md:text-[10rem] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-cyan-400"
        >
          Studio
        </motion.h1>
      </div>
      
      {/* 3. Deskripsi dengan opasitas bertahap */}
      <motion.p 
        variants={revealVariants}
        className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-12 font-light italic"
      >
        "Seni adalah jembatan antara imajinasi dan realita." <br/>
        Membangun identitas visual melalui ilustrasi dan teknologi 3D.
      </motion.p>
      
      {/* 4. Action Buttons */}
      <motion.div variants={revealVariants} className="flex gap-8 items-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden group"
        >
          <span className="relative z-10">Explore Works</span>
          <motion.div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </motion.button>
        
        <motion.button 
          whileHover={{ opacity: 0.7 }}
          className="text-white text-sm font-semibold tracking-widest uppercase border-b border-white/30 pb-1"
        >
          Contact Me
        </motion.button>
      </motion.div>

      {/* Dekorasi Garis Grid */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>
    </motion.div>
  );
}