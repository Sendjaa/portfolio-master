import Navigation from "@/components/navigation/navigationMultimedia"
import HeroPersonal from "@/components/hero/heroMultimedia"
import About from "@/components/about/aboutMultimedia"
import Projects from "@/components/project/projectsMultimedia"
import Experience from "@/components/experience/experienceMultimedia"
import Sertificate from "@/components/sertificate/sertificateMultimedia"
import Skills from "@/components/skills/skillsMultimedia"
import Contact from "@/components/contact/contactMultimedia"
import Footer from "@/components/footer/footerMultimedia"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroPersonal/>
	  <About />
	  <Experience/>
	  <Projects />
	  <Sertificate/>
	  <Skills />
	  <Contact />
      <Footer />
    </main>
  )
}
