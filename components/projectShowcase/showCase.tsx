"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  { 
    title: "Visual Narrative Motion", 
    category: "Motion Graphics", 
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
    link: "#" 
  },
  { 
    title: "Eco-Brand Identity", 
    category: "Branding", 
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800",
    link: "#" 
  },
];

export const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-(--bg-theme)">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-mono tracking-[0.4em] uppercase opacity-50 mb-4" style={{ color: 'var(--primary-theme)' }}>
              // Featured Work
            </h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              Selected <br/> Projects
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Image Container dengan Border Tema */}
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 group-hover:border-(--primary-theme) transition-colors duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700" />
              </div>

              {/* Info Project */}
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--primary-theme)' }}>
                    {project.category}
                  </p>
                  <h4 className="text-2xl font-bold uppercase tracking-tight group-hover:italic transition-all">
                    {project.title}
                  </h4>
                </div>
                <div 
                  className="p-4 rounded-full border border-white/10 group-hover:bg-(--primary-theme) group-hover:text-black transition-all duration-500"
                >
                  <ExternalLink size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};