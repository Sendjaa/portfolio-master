"use client"
import { Award, ExternalLink, ArrowRight } from "lucide-react";

export default function Certificates() {
  const certs = [
    {
      title: "Professional Graphic Design",
      issuer: "Adobe Education Exchange",
      year: "2022",
      image: "/design-certificate.jpg",
      type: "Adobe Certified",
    },
    {
      title: "Brand Identity Masterclass",
      issuer: "School of Motion",
      year: "2021",
      image: "/branding-certificate.jpg",
      type: "Identity Design",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Google Coursera",
      year: "2021",
      image: "/ui-ux-certificate.jpg",
      type: "Product Design",
    },
    {
      title: "Advanced Typography",
      issuer: "Design Academy Jakarta",
      year: "2020",
      image: "/typography-certificate.jpg",
      type: "Typography",
    },
  ];

  return (
    <section className="py-32 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header: Lebih Compact */}
        <div className="mb-20">
          <div className="flex items-center gap-3 text-accent mb-4">
            <div className="h-[1px] w-12 bg-accent"></div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold">Credentials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-primary uppercase leading-none">
            Learning <br /> History<span className="text-accent">.</span>
          </h2>
        </div>

        {/* List Layout: Image Lebih Kecil & Proporsional */}
        <div className="space-y-6">
          {certs.map((cert, idx) => (
            <div 
              key={idx} 
              className="group bg-background border border-border/40 p-4 md:p-6 rounded-lg flex flex-col md:flex-row items-center gap-8 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Thumbnail Image: Ukuran Terkontrol */}
              <div className="w-full md:w-48 h-32 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                <img 
                  src={cert.image || "/api/placeholder/400/300"} 
                  alt={cert.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Info: Mendominasi Ruang */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-secondary text-primary rounded">
                    {cert.year}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">
                    {cert.type}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm font-medium">
                  {cert.issuer}
                </p>
              </div>

              {/* Action: Link Button */}
              <div className="flex-shrink-0">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-transparent hover:border-accent pb-1 transition-all"
                >
                  Verify <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Footer for Section */}
        <p className="mt-16 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          All certificates are verified and digitally signed
        </p>
      </div>
    </section>
  );
}