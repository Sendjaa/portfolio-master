"use client"
import { ArrowUpRight, Mail, Instagram, Linkedin, Github } from "lucide-react";
import React from 'react';

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative bg-[#4ade80] text-black pt-32 pb-10 px-6 overflow-hidden">
      {/* Background Text Decorative (Watermark) */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none">
        <h2 className="text-[20rem] font-black leading-none -mr-20 -mt-10 uppercase">
          Work
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          {/* Kolom Kiri: Headline */}
          <div className="text-left">
            <p className="font-mono text-sm uppercase tracking-[0.3em] mb-4 font-bold">
              —— Let's Create Something Great
            </p>
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
              Punya <br /> Ide?
            </h2>
          </div>

          {/* Kolom Kanan: Detail & Links */}
          <div className="flex flex-col items-start md:items-end gap-8 pb-4">
            <a 
              href="mailto:hello@multimedia.com" 
              className="group flex items-center gap-4 text-3xl md:text-5xl font-bold hover:opacity-70 transition-all underline decoration-2 underline-offset-8"
            >
              <Mail size={40} className="hidden md:block" />
              hello@multimedia.com
              <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </a>
            
            <div className="flex flex-wrap gap-6 mt-4">
              <SocialLink icon={<Instagram size={20} />} label="Instagram" href="#" />
              <SocialLink icon={<Linkedin size={20} />} label="LinkedIn" href="#" />
              <SocialLink icon={<Github size={20} />} label="Github" href="#" />
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="mt-32 pt-8 border-t border-black/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono uppercase tracking-widest font-bold">
          <p>© {currentYear} MULTIMEDIA PORTFOLIO</p>
          <div className="flex gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:underline cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-komponen untuk Social Links agar rapi
const SocialLink = ({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) => (
  <a 
    href={href} 
    className="flex items-center gap-2 border border-black px-4 py-2 rounded-full font-bold hover:bg-black hover:text-[#4ade80] transition-all duration-300 group"
  >
    {icon}
    <span className="text-xs uppercase tracking-wider">{label}</span>
  </a>
);