"use client"
import React from 'react';

const exp = [
  { year: '2022 - Now', role: 'Senior Motion Designer', company: 'Studio XYZ' },
  { year: '2020 - 2022', role: 'Multimedia Lead', company: 'Digital Agency' },
  { year: '2018 - 2020', role: 'Video Editor', company: 'Broadcast TV' },
];

export const Experience = () => (
  <section id="experience" className="py-24 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-black uppercase mb-16">Work History</h2>
      <div className="space-y-1">
        {exp.map((item, i) => (
          <div key={i} className="group border-b border-white/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-[#4ade80] transition-all duration-500 px-4 cursor-default">
            <span className="text-gray-500 group-hover:text-black font-mono transition-colors">{item.year}</span>
            <h3 className="text-3xl font-bold group-hover:text-black transition-colors">{item.role}</h3>
            <span className="text-xl italic group-hover:text-black/70 transition-colors">{item.company}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);