"use client"
import React, { useState, useEffect } from 'react';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <span className="text-2xl font-black tracking-tighter">M<span className="text-[#4ade80]">.</span>MEDIA</span>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#4ade80] transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};