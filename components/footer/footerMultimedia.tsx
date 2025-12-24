"use client"
import React from 'react';

export const Footer = () => (
  <footer className="py-10 px-6 border-t border-white/5 text-center">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <span className="text-sm text-gray-500 font-mono">© 2024 PORTFOLIO EDITION</span>
      <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
        <a href="#">Instagram</a>
        <a href="#">Behance</a>
        <a href="#">Dribbble</a>
      </div>
    </div>
  </footer>
);