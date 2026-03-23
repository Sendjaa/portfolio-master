// app/page.tsx
import NavigationMultimedia from "@/components/navigation/navigation" 
import { HeroPersonal } from "@/components/hero/heroMultimedia"
import { About } from "@/components/about/aboutMultimedia"
import {Projects} from "@/components/project/projectsMultimedia"
import Sertificate from "@/components/sertificate/sertificateMultimedia"
import { Skills } from "@/components/skills/skillsMultimedia"
import { Contact } from "@/components/contact/contactMultimedia"
import { themes } from '@/config/themes';
import { ThemeWrapper } from '@/components/shared/themeWrapper';

export default function Home() {
    const theme = themes.multimedia;

  return (
    
    <ThemeWrapper theme={theme}>

    <main className="bg-[#0a0a0a] text-white min-h-screen">

      <NavigationMultimedia />
        
      <section id="home">
        <HeroPersonal />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills" className="border-y border-white/5">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="sertificate">
        <Sertificate />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      {/* Footer Sederhana */}
      <footer className="py-10 text-center text-gray-600 text-xs tracking-widest font-mono border-t border-white/5 bg-[#0a0a0a]">
        MADE WITH PASSION BY ALFITO // 2026
      </footer>
    </main>
    </ThemeWrapper>
  );
}