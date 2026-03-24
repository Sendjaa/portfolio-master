"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Ruler, 
  Paintbrush, 
  MonitorCog, 
  Code2, 
  ArrowUpRight, 
  Camera, 
  PenTool, 
  TrendingUp, 
  Briefcase 
} from 'lucide-react';

interface CategoryItem {
  id: string;
  title: string;
  count: string;
  icon: React.ReactNode;
  color: string;
}

const portfolioCategories = [
  {
    id: "spatial",
    title: "Spatial Architecture",
    count: "1",
    icon: <Ruler className="w-4 h-4" />,
    color: "#94a3b8",
  },
  {
    id: "visual",
    title: "Visual Arts",
    count: "1",
    icon: <Paintbrush className="w-4 h-4" />,
    color: "#f87171",
  },
  {
    id: "digital",
    title: "Digital Design",
    count: "1",
    icon: <MonitorCog className="w-4 h-4" />,
    color: "#facc15",
  },
  {
    id: "system",
    title: "System Core",
    count: "0",
    icon: <Code2 className="w-4 h-4" />,
    color: "#3b82f6",
  },
  {
    id: "photo",
    title: "Lens Photography",
    count: "0",
    icon: <Camera className="w-4 h-4" />,
    color: "#a855f7",
  },
  {
    id: "writing",
    title: "Content Writing",
    count: "0",
    icon: <PenTool className="w-4 h-4" />,
    color: "#fb923c",
  },
  {
    id: "marketing",
    title: "Growth Marketing",
    count: "0",
    icon: <TrendingUp className="w-4 h-4" />,
    color: "#4ade80",
  },
  {
    id: "business",
    title: "Business Admin",
    count: "0",
    icon: <Briefcase className="w-4 h-4" />,
    color: "#2dd4bf",
  }
];

const MiniCategoryCard = ({ category }: { category: CategoryItem }) => {
    const handleClick = () => {
        window.location.href = `/${category.id}`; 
    };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className="relative group overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5 p-4 sm:p-5 hover:bg-zinc-800/80 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        {/* Icon & Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div 
            className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border border-white/5 backdrop-blur-sm"
            style={{ backgroundColor: `${category.color}15`, color: category.color }}
          >
            {category.icon}
          </div>
          <div className="min-w-0">
            <h3 className="text-[10px] sm:text-[11px] font-black uppercase tracking-tight leading-tight text-white/90 truncate sm:whitespace-normal">
              {category.title.split(' ')[0]} <br className="hidden sm:block"/>
              <span className="text-white/40">{category.title.split(' ')[1]}</span>
            </h3>
          </div>
        </div>

        {/* Count & Arrow */}
        <div className="flex flex-col items-end shrink-0">
          <span className="font-mono text-[9px] text-[#4ade80] font-bold mb-1">
            {category.count}
          </span>
          <div className="text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
            <ArrowUpRight size={12} />
          </div>
        </div>
      </div>
      
      {/* Accent Line - Hidden on mobile, visible on hover desktop */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 hidden sm:block"
        style={{ backgroundColor: category.color }}
      />
    </motion.div>
  );
};

export default function App() {
  return (  
    <div className="min-h-screen bg-[#050505] text-white p-4 sm:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-[#4ade80] text-[8px] sm:text-[9px] uppercase tracking-[0.4em] block">
              Kategori_Mini
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
              Bidang <span className="italic font-serif text-[#3b82f6]">Keahlian.</span>
            </h2>
          </div>
          <button className="self-start sm:self-auto font-mono text-[8px] sm:text-[9px] text-white/30 uppercase tracking-widest hover:text-[#4ade80] transition-colors border-b border-white/10 sm:border-none pb-1 sm:pb-0">
            Lihat_Semua +
          </button>
        </header>

        {/* Grid Responsive breakpoints */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {portfolioCategories.map((cat) => (
            <MiniCategoryCard key={cat.id} category={cat} />
          ))}
        </div>

      </div>
    </div>
  );
}