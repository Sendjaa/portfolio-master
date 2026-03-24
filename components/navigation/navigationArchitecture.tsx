"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Spatial", id: "architecture" }, // Diubah agar lebih 'arsitektur'
    { name: "Visual", id: "projects" },
    { name: "About", id: "about" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? "py-4 bg-white/80 backdrop-blur-md border-b border-zinc-100 shadow-sm" 
          : "py-10 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between text-zinc-900">
        
        {/* Logo: Minimalist Architectural Mark */}
        <div 
          onClick={() => scrollToSection("home")} 
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="relative w-8 h-8 flex items-center justify-center border border-zinc-900 group-hover:bg-zinc-900 transition-all duration-500">
            <span className="text-zinc-900 group-hover:text-white font-serif italic text-lg transition-colors">A</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-[0.2em] uppercase leading-none">Alfito</span>
            <span className="text-[8px] font-mono tracking-[0.4em] text-zinc-400 uppercase mt-1">Studio Portfolio</span>
          </div>
        </div>

        {/* Desktop Menu: Spacing Lebar & Font Tipis */}
        <div className="hidden md:flex items-center gap-16">
          <div className="flex gap-12">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-900 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 group-hover:w-full transition-all duration-500"></span>
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] border border-zinc-200 px-6 py-3 rounded-sm hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-500"
          >
            Inquiry <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </nav>

      {/* Fullscreen Mobile Menu: Aesthetic Architecture Gallery Style */}
      <div 
        className={`fixed inset-0 bg-[#F9F9F8] z-[-1] flex flex-col items-center justify-center gap-10 transition-all duration-700 ease-in-out md:hidden ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {navLinks.map((link, idx) => (
          <button 
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="group flex flex-col items-center"
          >
            <span className="text-zinc-300 font-serif italic text-sm mb-2 opacity-0 group-hover:opacity-100 transition-all">0{idx + 1}</span>
            <span className="text-5xl font-black uppercase tracking-tighter text-zinc-900 hover:text-zinc-400 transition-all">
              {link.name}
            </span>
          </button>
        ))}
        
        <button 
          onClick={() => scrollToSection("contact")}
          className="mt-10 text-xs font-bold uppercase tracking-[0.5em] border-b border-zinc-900 pb-2"
        >
          Contact Me
        </button>
      </div>
    </header>
  );
}