"use client"

import { useEffect, useState } from "react"

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleProjects((prev) => [...prev, index])
            }, index * 150)
          })
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and Stripe integration.",
      tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      image: "Project 1",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      tags: ["React", "Firebase", "Socket.io", "Redux"],
      image: "Project 2",
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive data visualization dashboard for tracking business metrics and KPIs.",
      tags: ["Next.js", "D3.js", "PostgreSQL", "TypeScript"],
      image: "Project 3",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation platform built with modern web technologies.",
      tags: ["Next.js", "OpenAI", "Vercel", "Tailwind CSS"],
      image: "Project 4",
    },
  ]

  return (
    <section id="projects" id="projects-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 animate-fadeInUp">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl animate-fadeInUp stagger-1">
          A selection of projects that showcase my skills and experience in web development
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`group border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 bg-card hover:shadow-xl hover:shadow-accent/10 transform hover:-translate-y-2 cursor-pointer ${
              visibleProjects.includes(index) ? "animate-scaleIn" : "opacity-0 scale-95"
            }`}
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            <div className="h-48 bg-gradient-to-br from-accent/20 via-cyan-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-700"></div>
              <div className="text-muted-foreground font-semibold text-lg group-hover:scale-110 transition-transform duration-500 relative z-10">
                {project.image}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/30 transform hover:scale-110 cursor-default"
                    style={{
                      transitionDelay: `${tagIndex * 0.05}s`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
