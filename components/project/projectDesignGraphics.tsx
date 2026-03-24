"use client"

import { ArrowUpRight } from "lucide-react";

export default function ExecutedProjects() {
  const projects = [
    {
      year: "2024",
      title: "Nusantara Rebranding",
      client: "Kementerian Pariwisata",
      category: "Visual Identity",
      desc: "Transformasi identitas visual skala nasional yang menggabungkan elemen tradisional dengan estetika modern minimalis.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop", 
    },
    {
      year: "2023",
      title: "Eco-Logic Packaging",
      client: "Green Life Co.",
      category: "Sustainable Packaging",
      desc: "Pengembangan sistem kemasan ramah lingkungan menggunakan material biodegradable tanpa mengorbankan estetika premium.",
      image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=2070&auto=format&fit=crop",
    },
    {
      year: "2023",
      title: "Urban Motion Campaign",
      client: "TechRide Indonesia",
      category: "Digital Campaign",
      desc: "Eksekusi aset visual untuk kampanye digital berskala besar yang meningkatkan brand awareness sebesar 40%.",
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-[#F9F9F8] text-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header: Editorial Style */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-10">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-px bg-zinc-300"></div>
               <span className="text-zinc-400 font-mono text-[10px] font-bold uppercase tracking-[0.4em]">
                  Selection — 02
               </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 uppercase leading-[0.8]">
              Executed <br /> <span className="text-zinc-400 italic font-serif font-light lowercase">Works.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-light text-lg max-w-[320px] border-l border-zinc-200 pl-8 mb-2 leading-tight">
            Koleksi proyek terpilih yang mencakup strategi branding hingga eksekusi visual retail berskala besar.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-40">
          {projects.map((item, idx) => (
            <div key={idx} className="group relative grid md:grid-cols-12 gap-12 items-center">
              
              {/* Numbering (Watermark Style) */}
              <div className="hidden md:block md:col-span-1">
                <span className="text-6xl font-black text-zinc-100 group-hover:text-zinc-200 transition-colors duration-700 font-mono italic">
                  0{idx + 1}
                </span>
              </div>

              {/* Text Content */}
              <div className="md:col-span-5 space-y-8 order-2 md:order-0">
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest border border-zinc-200 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-[0.2em]">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter uppercase group-hover:translate-x-3 transition-transform duration-700 ease-in-out">
                    {item.title}
                  </h3>
                  <p className="text-xl font-medium text-zinc-400 italic font-serif">
                    for {item.client}
                  </p>
                </div>

                <p className="text-zinc-500 leading-relaxed max-w-md font-light text-lg">
                  {item.desc}
                </p>

                <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 group/btn">
                  <span className="border-b border-zinc-900 pb-1 group-hover/btn:border-zinc-400 group-hover/btn:text-zinc-400 transition-all">View Case Study</span>
                  <div className="p-2 rounded-full border border-zinc-200 group-hover/btn:bg-zinc-900 group-hover/btn:text-white transition-all duration-500">
                    <ArrowUpRight size={16} />
                  </div>
                </button>
              </div>

              {/* Image Preview */}
              <div className="md:col-span-6 order-1 md:order-0">
                <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-zinc-200 shadow-xl group-hover:shadow-2xl transition-all duration-1000">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                  />
                  {/* Subtle Grainy Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Link: More Projects */}
        <div className="mt-48 pt-20 border-t border-zinc-200 flex flex-col items-center gap-8">
          <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.4em]">Want to see more?</p>
          <button className="group relative px-16 py-6 bg-zinc-900 text-white overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 font-bold uppercase tracking-widest text-xs">Explore Full Archive</span>
            <div className="absolute inset-0 bg-zinc-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>

      </div>
    </section>
  );
}