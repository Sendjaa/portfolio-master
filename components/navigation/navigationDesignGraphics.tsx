"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Menangani efek scroll untuk mengubah tampilan navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi Scroll Halus ke Section ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Tutup menu mobile setelah klik
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-[#0a1f1a]/90 backdrop-blur-xl border-b border-[#1a4d3c]" 
          : "py-8 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between text-[#e0e7e1]">
        
        {/* Identitas Logo */}
        <div 
          onClick={() => scrollToSection("home")} 
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#4ade80] rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-[0_0_15px_rgba(74,222,128,0.3)]"></div>
            <span className="relative z-10 text-[#0a1f1a] font-black text-xl italic">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter leading-none uppercase">Siti Rahma</span>
            <span className="text-[9px] font-mono tracking-[0.3em] text-[#4ade80] uppercase">Design Graphics</span>
          </div>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-bold uppercase tracking-widest hover:text-[#4ade80] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#4ade80] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => scrollToSection("contact")}
            className="bg-[#4ade80] text-[#0a1f1a] px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_5px_15px_rgba(74,222,128,0.2)]"
          >
            Hubungi Saya
          </button>
        </div>

        {/* Toggle Menu Mobile */}
        <button 
          className="md:hidden p-2 text-[#4ade80] hover:bg-[#1a4d3c]/30 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Overlay Menu Mobile - Background Hijau */}
      <div 
        className={`fixed inset-0 bg-[#0a1f1a] z-[-1] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Background Decor inside Mobile Menu */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ade80]/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4ade80]/5 blur-[100px] rounded-full pointer-events-none"></div>

        {navLinks.map((link) => (
          <button 
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="text-4xl font-black uppercase tracking-tighter text-[#e0e7e1] hover:text-[#4ade80] transition-all hover:scale-110 active:scale-90"
          >
            {link.name}
          </button>
        ))}
        
        <button 
          onClick={() => scrollToSection("contact")}
          className="mt-8 bg-[#4ade80] text-[#0a1f1a] px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-[0_10px_20px_rgba(74,222,128,0.15)]"
        >
          Mulai Projek
        </button>
      </div>
    </header>
  );
}