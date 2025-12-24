"use client"

import { MapPin, Sparkles, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-secondary/50 relative overflow-hidden">
      {/* Decorative Background Text (Watermark Style) */}
      <div className="absolute -bottom-10 -left-10 text-[15rem] font-black text-primary/5 select-none leading-none">
        PROFILE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Image & Identity */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative group">
              {/* Main Image Frame */}
              <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-2xl border-8 border-background shadow-2xl transition-transform duration-500 group-hover:-rotate-2">
                <img
                  src="/designer-at-work.jpg"
                  alt="Siti Rahma - Graphic Designer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Decorative Accent Behind Image */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent rounded-2xl z-0 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              
              {/* Location Tag Floating */}
              <div className="absolute bottom-8 -right-8 z-20 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-accent rounded-full">
                    <MapPin size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-60">Based in</p>
                    <p className="font-bold tracking-tight text-lg leading-none">Jakarta, IDN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Content & Narrative */}
          <div className="md:col-span-7 order-1 md:order-2 space-y-12">
            <div className="space-y-4">
              <span className="text-accent font-mono text-sm font-bold uppercase tracking-[0.3em]">
                01 — About Me
              </span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-primary leading-[0.85] uppercase">
                Hello, I am <br />
                <span className="text-accent italic font-serif font-light lowercase px-2">Siti Rahma</span>
              </h2>
            </div>

            <div className="space-y-8 max-w-xl">
              <p className="text-2xl font-medium text-foreground leading-tight tracking-tight">
                Seorang desainer grafis dengan visi untuk mengubah ide kompleks menjadi <span className="text-accent">pengalaman visual</span> yang berkesan selama lebih dari 6 tahun.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest">
                    <Sparkles size={16} className="text-accent" />
                    Specialization
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Branding systems, premium packaging, and digital marketing materials for forward-thinking brands.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest">
                    <Target size={16} className="text-accent" />
                    Philosophy
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Client-focused approach, ensuring every pixel adds long-term value and resonates with the audience.
                  </p>
                </div>
              </div>

              {/* Personal Details Row */}
              <div className="pt-10 flex flex-wrap gap-12 border-t border-primary/10">
                <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Experience</p>
                  <p className="text-xl font-black text-primary uppercase leading-none tracking-tighter">6+ Years</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Born In</p>
                  <p className="text-xl font-black text-primary uppercase leading-none tracking-tighter">1995</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Status</p>
                  <p className="text-xl font-black text-primary uppercase leading-none tracking-tighter">Available</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}