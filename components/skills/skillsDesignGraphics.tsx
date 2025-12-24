"use client"

import { Monitor, PenTool, Zap, Code2, Layers, Figma } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Design Software",
      icon: <Monitor className="w-5 h-5" />,
      software: [
        { name: "Adobe Photoshop", short: "Ps", color: "text-[#31A8FF]" },
        { name: "Adobe Illustrator", short: "Ai", color: "text-[#FF9A00]" },
        { name: "Adobe InDesign", short: "Id", color: "text-[#FF3366]" },
        { name: "Adobe Lightroom", short: "Lr", color: "text-[#31A8FF]" },
        { name: "Figma", icon: <Figma className="w-5 h-5" />, color: "text-[#F24E1E]" },
        { name: "After Effects", short: "Ae", color: "text-[#9999FF]" },
      ],
    },
    {
      title: "Creative Expertise",
      icon: <PenTool className="w-5 h-5" />,
      skills: ["Branding", "Logo Design", "Packaging", "UI/UX Design", "Social Media", "Print Design"],
    },
    {
      title: "Core Professional",
      icon: <Zap className="w-5 h-5" />,
      skills: ["Communication", "Problem Solving", "Management", "Client Relations", "Leadership"],
    },
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-baseline gap-6 mb-24 border-b border-border pb-12">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-none">
            Expertise<span className="text-accent">/</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md font-medium leading-tight">
            Menjembatani pemikiran strategis dengan eksekusi visual yang presisi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {/* 1. Design Software dengan Inisial Brand (Lebih Estetik & Pasti Tampil) */}
          <div className="relative group">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-secondary text-accent rounded-sm">
                {skillCategories[0].icon}
              </div>
              <h3 className="text-xl font-bold tracking-tight text-primary uppercase">
                {skillCategories[0].title}
              </h3>
            </div>
            
            <ul className="space-y-4">
              {skillCategories[0].software.map((sw, sidx) => (
                <li key={sidx} className="group/item flex items-center gap-4 border-b border-border/50 pb-2 overflow-hidden cursor-default">
                  <div className={`w-8 h-8 flex items-center justify-center font-bold text-xs border border-current rounded-sm transition-all duration-300 opacity-40 group-hover/item:opacity-100 ${sw.color}`}>
                    {sw.icon ? sw.icon : sw.short}
                  </div>
                  <span className="text-foreground/80 group-hover/item:text-accent transition-colors duration-300 font-medium flex-grow">
                    {sw.name}
                  </span>
                  <div className="w-1 h-1 bg-accent rounded-full translate-x-10 group-hover/item:translate-x-0 transition-transform duration-500" />
                </li>
              ))}
            </ul>
          </div>

          {/* 2 & 3. Categories Lainnya */}
          {skillCategories.slice(1).map((category, idx) => (
            <div key={idx} className="relative group">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-secondary text-accent rounded-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-primary uppercase">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {category.skills.map((skill, sidx) => (
                  <li key={sidx} className="group/item flex items-center justify-between border-b border-border/50 pb-2 overflow-hidden cursor-default">
                    <span className="text-foreground/80 group-hover/item:text-accent transition-colors duration-300 font-medium">
                      {skill}
                    </span>
                    <div className="w-1 h-1 bg-accent rounded-full translate-x-10 group-hover/item:translate-x-0 transition-transform duration-500" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Tools Footer: Visual Grid yang Pasti Muncul */}
        <div className="relative overflow-hidden bg-primary rounded-2xl p-8 md:p-16 text-primary-foreground shadow-2xl">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <div className="mb-12">
              <h3 className="text-3xl font-black uppercase tracking-tighter italic">
                The Creative Toolkit<span className="text-accent">.</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skillCategories[0].software.map((sw, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center gap-4 p-6 rounded-lg border border-white/5 hover:bg-white/10 transition-all"
                >
                  <div className={`text-2xl font-black transition-all duration-500 brightness-200 group-hover:scale-110 ${sw.color}`}>
                    {sw.icon ? sw.icon : sw.short}
                  </div>
                  <span className="text-[9px] font-mono tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity text-center leading-tight">
                    {sw.name.split(' ').pop()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}