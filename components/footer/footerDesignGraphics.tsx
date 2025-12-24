"use client"

import React from 'react';
import { Instagram, Dribbble, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  // Fungsi Scroll Halus yang konsisten dengan Navigation.jsx
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061411] text-[#e0e7e1] py-20 border-t border-[#1a4d3c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection("home")}>
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#4ade80] rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                <span className="relative z-10 text-[#0a1f1a] font-black text-xl italic">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none uppercase">Siti Rahma</span>
                <span className="text-[9px] font-mono tracking-[0.3em] text-[#4ade80] uppercase">Visual Architect</span>
              </div>
            </div>
            <p className="text-[#a0afae] text-sm leading-relaxed max-w-xs">
              Membangun narasi visual yang kuat melalui desain strategis. Spesialisasi dalam branding, UI/UX, dan arah kreatif.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-[#4ade80] font-bold">Navigasi Cepat</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm font-medium text-[#a0afae] hover:text-[#4ade80] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#4ade80] group-hover:w-4 transition-all"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-[#4ade80] font-bold">Mari Berdiskusi</h4>
            <div className="space-y-4">
              <a href="mailto:siti@example.com" className="flex items-center gap-3 text-sm text-[#a0afae] hover:text-[#e0e7e1] transition-colors group">
                <div className="p-2 rounded-lg bg-[#1a4d3c]/30 group-hover:bg-[#4ade80]/20 transition-colors">
                  <Mail size={16} className="text-[#4ade80]" />
                </div>
                siti@example.com
              </a>
              <a href="tel:+6281234567890" className="flex items-center gap-3 text-sm text-[#a0afae] hover:text-[#e0e7e1] transition-colors group">
                <div className="p-2 rounded-lg bg-[#1a4d3c]/30 group-hover:bg-[#4ade80]/20 transition-colors">
                  <Phone size={16} className="text-[#4ade80]" />
                </div>
                +62 812 3456 7890
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[#1a4d3c]/50 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-8">
            <a href="#" className="text-[#4ade80]/40 hover:text-[#4ade80] transition-all transform hover:-translate-y-1">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-[#4ade80]/40 hover:text-[#4ade80] transition-all transform hover:-translate-y-1">
              <Dribbble size={20} />
            </a>
            <a href="#" className="text-[#4ade80]/40 hover:text-[#4ade80] transition-all transform hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#4ade80]/30">
              © {currentYear} SITI RAHMA. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[9px] text-[#4ade80]/20 flex items-center gap-1">
              Designed with <span className="text-[#4ade80]/40">❤</span> for Creative Excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}