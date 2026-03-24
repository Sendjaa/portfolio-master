import React from "react";
import { Briefcase, ArrowUpRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "2022 — Sekarang",
      title: "Senior Graphic Designer",
      company: "PT Creative Studio Indonesia",
      location: "Jakarta, Indonesia",
      description: "Memimpin tim desain kreatif dalam mengeksekusi visi visual brand global. Bertanggung jawab atas strategi branding end-to-end dan menjaga relasi strategis dengan klien utama.",
      tags: ["Creative Direction", "Branding", "Leadership"]
    },
    {
      year: "2020 — 2022",
      title: "Graphic Designer",
      company: 'Digital Agency "Pixelwork"',
      location: "Jakarta, Indonesia",
      description: "Mengembangkan aset visual untuk kampanye digital, materi pemasaran terpadu, dan desain kemasan inovatif yang meningkatkan brand awareness klien.",
      tags: ["Digital Ads", "Packaging", "Social Media"]
    },
    {
      year: "2018 — 2020",
      title: "Junior Graphic Designer",
      company: 'Agensi Iklan "Brand Pulse"',
      location: "Jakarta, Indonesia",
      description: "Berkolaborasi dengan desainer senior untuk menerjemahkan brief menjadi konsep visual yang menarik serta memastikan presisi dalam setiap revisi desain.",
      tags: ["Visual Concept", "Layouting", "Typography"]
    },
  ];

  return (
    // bg-stone-50 adalah warna putih tulang yang hangat dan tidak tajam di mata
    <section id="experience" className="py-32 bg-[#F9F9F8] text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex items-center gap-6 mb-24">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-zinc-900">
            Exp<span className="text-zinc-400 italic font-serif lowercase font-light">erience</span>
          </h2>
          <div className="h-px grow bg-zinc-200 mt-4"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-200 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-10 pb-20 last:pb-0 group"
            >
              {/* Dot Indikator Timeline - Hitam Minimalis */}
              <div className="absolute -left-2.25 top-2 w-4 h-4 rounded-full bg-[#F9F9F8] border-2 border-zinc-300 group-hover:border-zinc-900 group-hover:bg-zinc-900 transition-all duration-500" />

              <div className="grid md:grid-cols-4 gap-4 md:gap-12">
                
                {/* Kolom Tahun - Warna Abu-abu Lembut */}
                <div className="md:col-span-1">
                  <p className="text-xs font-bold tracking-[0.3em] text-zinc-400 uppercase md:pt-2 group-hover:text-zinc-600 transition-colors">
                    {exp.year}
                  </p>
                </div>

                {/* Kolom Detail */}
                <div className="md:col-span-3">
                  <div className="flex flex-col gap-2 mb-6">
                    <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 group-hover:translate-x-2 transition-all duration-500 leading-tight flex items-center gap-3">
                      {exp.title}
                      <ArrowUpRight className="w-6 h-6 text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                    </h3>
                    
                    <div className="flex items-center gap-3 text-zinc-500 font-medium tracking-tight">
                      <span className="text-zinc-700">{exp.company}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                      <span className="text-sm italic text-zinc-400">{exp.location}</span>
                    </div>
                  </div>

                  {/* Deskripsi - Warna Kontras Sedang (Charcoal) */}
                  <p className="text-zinc-600 leading-relaxed max-w-2xl mb-8 text-lg font-normal">
                    {exp.description}
                  </p>

                  {/* Tags - Minimalis dengan warna muted */}
                  <div className="flex gap-2 flex-wrap">
                    {exp.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] uppercase tracking-widest font-bold border border-zinc-200 bg-white text-zinc-400 px-4 py-1.5 rounded-full group-hover:border-zinc-900 group-hover:text-zinc-900 transition-all duration-300 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}