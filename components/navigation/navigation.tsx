"use client"

import { useState } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-accent to-cyan-500 bg-clip-text text-transparent">
          Portfolio
        </div>

        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection("home")} className="hover:text-accent transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-accent transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-accent transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-accent transition-colors">
            Contact
          </button>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <button onClick={() => scrollToSection("home")} className="text-left hover:text-accent transition-colors">
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-accent transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-accent transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-accent transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
