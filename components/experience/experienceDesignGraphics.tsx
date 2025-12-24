import { Briefcase } from "lucide-react"; // Opsional: Tambah icon agar lebih visual

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
    <section id="experience" className="py-32 bg-background selection:bg-accent selection:text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section dengan Garis Dekoratif */}
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Experience<span className="text-accent">.</span>
          </h2>
          <div className="h-[2px] flex-grow bg-foreground/10 mt-4 md:mt-6"></div>
        </div>

        <div className="relative border-l border-foreground/10 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-10 pb-16 last:pb-0 group"
            >
              {/* Dot Indikator Timeline */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition-colors duration-300" />

              <div className="grid md:grid-cols-4 gap-4 md:gap-10">
                {/* Kolom Tahun */}
                <div className="md:col-span-1">
                  <p className="text-sm font-bold tracking-widest text-foreground/40 uppercase md:pt-1">
                    {exp.year}
                  </p>
                </div>

                {/* Kolom Detail */}
                <div className="md:col-span-3">
                  <div className="flex flex-col gap-1 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors duration-300 leading-tight">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-foreground/60 font-medium">
                      <span>{exp.company}</span>
                      <span className="w-1 h-1 rounded-full bg-foreground/30"></span>
                      <span className="text-sm italic">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed max-w-2xl mb-6 text-lg">
                    {exp.description}
                  </p>

                  {/* Tags dengan gaya Minimalis */}
                  <div className="flex gap-3 flex-wrap">
                    {exp.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] uppercase tracking-widest font-bold border border-foreground/10 px-3 py-1 rounded-sm group-hover:border-accent/30 transition-colors"
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