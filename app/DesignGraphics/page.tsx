import { themes } from '@/config/themes';
import { ThemeWrapper } from '@/components/shared/themeWrapper';
import {HeroDesignGraphics} from '@/components/hero/heroDesignGraphics';
import Navigation from '@/components/navigation/navigationDesignGraphics';
import AboutMe from '@/components/about/aboutDesignGraphics';
import Experience from '@/components/experience/experienceDesignGraphics';
import Projetcs from '@/components/project/projectDesignGraphics';
// import { ProjectShowcase } from '@/components/projectShowcase/showCase';
import Sertificate from '@/components/sertificate/sertificateDesignGraphics';
import Skills from '@/components/skills/skillsDesignGraphics';
import Contact from '@/components/contact/contactDesignGraphics';
import Footer from '@/components/footer/footerDesignGraphics';

export default function DesignGraphicsPage() {
  const theme = themes.DesignGraphics; 
  console.log("Current Theme:", theme); // Debugging: Pastikan theme terdefinisi dengan benar
  return (
    <ThemeWrapper theme={theme}>
      <main className="bg-(--bg-theme) text-white">
        <Navigation />
        <HeroDesignGraphics theme={theme} />
        <AboutMe />
        <Experience />
        {/* <ProjectShowcase /> */}
        <Projetcs />
        <Sertificate />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </ThemeWrapper>
  );
}