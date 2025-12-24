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
      // Gambar: Studio Branding/Moodboard Minimalis
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop", 
    },
    {
      year: "2023",
      title: "Eco-Logic Packaging",
      client: "Green Life Co.",
      category: "Sustainable Packaging",
      desc: "Pengembangan sistem kemasan ramah lingkungan menggunakan material biodegradable tanpa mengorbankan estetika premium.",
      // Gambar: Packaging/Wadah Estetik
      image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=2070&auto=format&fit=crop",
    },
    {
      year: "2023",
      title: "Urban Motion Campaign",
      client: "TechRide Indonesia",
      category: "Digital Campaign",
      desc: "Eksekusi aset visual untuk kampanye digital berskala besar yang meningkatkan brand awareness sebesar 40%.",
      // Gambar: Iklan Outdoor/Typography Design
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header: Editorial Style */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
              Selection — 02
            </span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-[0.85]">
              Executed <br /> <span className="text-accent italic font-serif font-light lowercase">Works.</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-medium max-w-[300px] border-l border-border pl-6 mb-4">
            Koleksi proyek terpilih yang mencakup strategi branding hingga eksekusi visual retail.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-32">
          {projects.map((item, idx) => (
            <div key={idx} className="group relative grid md:grid-cols-12 gap-8 items-center">
              
              {/* Numbering */}
              <div className="hidden md:block md:col-span-1">
                <span className="text-5xl font-black text-primary/10 group-hover:text-accent/20 transition-colors duration-500 font-mono">
                  0{idx + 1}
                </span>
              </div>

              {/* Text Content */}
              <div className="md:col-span-5 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono font-bold text-accent px-2 py-1 bg-accent/10 rounded">
                    {item.year}
                  </span>
                  <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-4xl md:text-5xl font-black text-primary tracking-tighter uppercase group-hover:text-accent transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-lg font-bold text-foreground/60 italic font-serif">
                    for {item.client}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed max-w-md">
                  {item.desc}
                </p>

                <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary border-b-2 border-primary pb-2 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                  Case Study <ArrowUpRight size={18} />
                </button>
              </div>

              {/* Image Preview */}
              <div className="md:col-span-6 mt-8 md:mt-0">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-secondary group-hover:shadow-2xl transition-all duration-700">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  {/* Overlay Aksen Warna */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply"></div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-32 pt-16 border-t border-border flex justify-center">
          <button className="group relative overflow-hidden bg-primary text-primary-foreground px-12 py-6 rounded-full font-black uppercase tracking-tighter text-xl">
            <span className="relative z-10">Archive of All Projects</span>
            <div className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>

      </div>
    </section>
  );
}