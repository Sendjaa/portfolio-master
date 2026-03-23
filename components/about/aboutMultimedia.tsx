"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Video, Monitor, Cpu } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: 'Specialization', value: 'Multimedia & Web', icon: <Monitor size={20} /> },
    { label: 'Current Study', value: 'Informatics Eng.', icon: <Cpu size={20} /> },
    { label: 'Frameworks', value: 'React / Next.js', icon: <Code2 size={20} /> },
    { label: 'Production', value: 'Motion Graphics', icon: <Video size={20} /> },
  ];

  return (
    <section id="about" className="py-32 bg-[#0a0a0a] relative overflow-hidden bg-grid-subtle">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Kolom Kiri: Narasi */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-[#4ade80] tracking-[0.4em] uppercase mb-8 font-bold">
              // 01. About Me
            </h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-8">
              Blending <span className="about-gradient">Code</span> with Visual <span className="text-outline">Art</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Saya adalah seorang **Full-stack Web Developer** dan **Multimedia Specialist** yang fokus pada penciptaan pengalaman digital yang imersif. Dengan latar belakang pendidikan **Informatika**, saya menjembatani celah antara logika pemrograman yang kompleks dengan estetika visual yang dinamis.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Dari membangun arsitektur web yang skalabel hingga memproduksi Motion Graphics tingkat lanjut, misi saya adalah memberikan "Creative Vision" yang nyata bagi setiap proyek.
            </p>
          </motion.div>

          {/* Kolom Kanan: Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 md:mt-0">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#4ade80]/50 transition-colors group"
              >
                <div className="text-[#4ade80] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-2">
                  {item.label}
                </h4>
                <p className="text-xl font-bold uppercase tracking-tight text-white">
                  {item.value}
                </p>
              </motion.div>
            ))}

            {/* CTA / Quick Info Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="sm:col-span-2 p-8 bg-linear-to-r from-[#4ade80]/10 to-transparent border border-[#4ade80]/20 rounded-2xl"
            >
              <h4 className="text-[#4ade80] font-mono text-sm uppercase tracking-widest mb-4">
                Let's Create Something Amazing
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Ready to bring your vision to life? Let's collaborate on projects that blend cutting-edge technology with stunning visual design.
              </p>
              <button className="px-6 py-3 bg-[#4ade80] text-black font-bold rounded-full hover:bg-[#4ade80]/80 transition-colors">
                Get In Touch
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};