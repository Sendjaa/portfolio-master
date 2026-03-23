import { themes } from '@/config/themes';
import { ThemeWrapper } from '@/components/shared/themeWrapper';
import HeroPersonal from '@/components/hero/hero-personal';
import { ProjectShowcase } from '@/components/projectShowcase/showCase';

export default function DesignGraphicsPage() {
  const theme = themes.DesignGraphics; 
  console.log("Current Theme:", theme); // Debugging: Pastikan theme terdefinisi dengan benar
  return (
    <ThemeWrapper theme={theme}>
      <main className="bg-(--bg-theme) text-white">
        <ProjectShowcase />
        <HeroPersonal /> 
      </main>
    </ThemeWrapper>
  );
}