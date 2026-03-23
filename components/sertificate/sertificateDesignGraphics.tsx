"use client"
import { Award, ExternalLink, ArrowRight } from "lucide-react";

export default function Certificates() {
  const certs = [
    {
      title: "Professional Graphic Design",
      issuer: "Adobe Education Exchange",
      year: "2022",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?q=80&w=2070&auto=format&fit=crop",
      type: "Adobe Certified",
    },
    {
      title: "Brand Identity Masterclass",
      issuer: "School of Motion",
      year: "2021",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
      type: "Identity Design",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Google Coursera",
      year: "2021",
      image: "https://images.unsplash.com/photo-1541462608141-ad511a7ee5f1?q=80&w=2070&auto=format&fit=crop",
      type: "Product Design",
    },
    {
      title: "Advanced Typography",
      issuer: "Design Academy Jakarta",
      year: "2020",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      type: "Typography",
    },
  ];

  return (
    <section className="py-32 bg-[#F9F9F8] text-zinc-900 font-sans border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header: Editorial & Minimalist */}
        <div className="mb-24 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-zinc-300"></div>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400">Credentials — 03</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8]">
            Learning <br /> 
            <span className="text-zinc-400 italic font-serif font-light lowercase">History.</span>
          </h2>
        </div>

        {/* List Layout: Clean & Structured */}
        <div className="space-y-4">
          {certs.map((cert, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white border border-zinc-200 p-5 md:p-8 rounded-sm flex flex-col md:flex-row items-center gap-10 hover:border-zinc-900 transition-all duration-700 hover:shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.05)]"
            >
              {/* Thumbnail Image: Grayscale to Color */}
              <div className="w-full md:w-56 h-36 flex-shrink-0 overflow-hidden bg-zinc-100 rounded-sm">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
              </div>

              {/* Info: Balanced Hierarchy */}
              <div className="flex-grow space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest border border-zinc-100 px-2 py-0.5">
                    {cert.year}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-bold italic">
                    {cert.type}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                  {cert.title}
                </h3>
                <p className="text-zinc-500 text-base font-light font-serif italic">
                  Issued by {cert.issuer}
                </p>
              </div>

              {/* Action: Minimalist Verify Link */}
              <div className="flex-shrink-0 pt-4 md:pt-0">
                <a 
                  href="#" 
                  className="group/link inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900"
                >
                  <span className="border-b border-transparent group-hover/link:border-zinc-900 pb-1 transition-all">Verify</span>
                  <div className="p-3 rounded-full border border-zinc-100 group-hover/link:bg-zinc-900 group-hover/link:text-white transition-all duration-500">
                    <ArrowRight size={14} />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Footer */}
        <div className="mt-20 flex flex-col items-center gap-4 opacity-30">
          <Award size={20} className="text-zinc-900" />
          <p className="text-center font-mono text-[9px] uppercase tracking-[0.5em] text-zinc-900">
            Validated Credentials & Accreditations
          </p>
        </div>
      </div>
    </section>
  );
}