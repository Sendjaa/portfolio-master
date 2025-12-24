"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSkills, setVisibleSkills] = useState<string[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger skill animations
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setVisibleSkills((prev) => [...prev, skill.category])
            }, index * 100)
          })
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "PostgreSQL", "API Design", "REST/GraphQL"] },
    { category: "Tools", items: ["Git", "Docker", "Vercel", "CI/CD"] },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2
            className={`text-4xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-[30px]"
            }`}
          >
            About Me
          </h2>
          <p
            className={`text-muted-foreground mb-4 leading-relaxed transition-all duration-1000 ${
              isVisible ? "animate-fadeInUp stagger-1" : "opacity-0 translate-y-[30px]"
            }`}
          >
            I'm a passionate web developer with 5+ years of experience building scalable web applications. I specialize
            in creating user-centric designs combined with clean, maintainable code.
          </p>
          <p
            className={`text-muted-foreground leading-relaxed transition-all duration-1000 ${
              isVisible ? "animate-fadeInUp stagger-2" : "opacity-0 translate-y-[30px]"
            }`}
          >
            When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing
            knowledge with the developer community. I believe in continuous learning and staying at the forefront of web
            development.
          </p>
        </div>

        <div className="space-y-6">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className={`transition-all duration-1000 ${
                visibleSkills.includes(skillGroup.category) ? "animate-scaleIn" : "opacity-0 scale-95"
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <h3 className="font-semibold mb-3 text-accent">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, itemIndex) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 transition-all duration-500 hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/30 transform hover:scale-110 cursor-default ${
                      visibleSkills.includes(skillGroup.category) ? "animate-fadeInUp" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${index * 0.15 + itemIndex * 0.05}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
