// src/config/themes.ts
export interface Theme {
  primary: string;
  bg: string;
  secondary: string;
  label: string;
  tagline: string;
  accent?: string;
}

export const themes: Record<string, Theme> = {
  DesignGraphics: {
    primary: "#4ade80",
    bg: "#0a1f1a",
    secondary: "#e0e7e1",
    label: "Creative Studio",
    tagline: "Visual Architect & Designer"
  },
  Developer: {
    primary: "#3b82f6",
    bg: "#020617",
    secondary: "#f8fafc",
    label: "Tech Laboratory",
    tagline: "Full-stack Engineer"
  },
  multimedia: {
    primary: "oklch(0.7 0.25 150)",
    bg: "oklch(0.12 0.01 270)",    
    secondary: "oklch(0.98 0.01 270)",
    accent: "var(--accent)",
    label: "Motion & Visual",
    tagline: "Narrative Video Specialist"
  },
  architecture: {
    primary: "#fbbf24",
    bg: "#1a202c",
    secondary: "#f7fafc",
    label: "Architectural Firm",
    tagline: "Sustainable Design & Planning"
  },
  general: {
    primary: "#6b7280",
    bg: "#f9fafb",
    secondary: "#374151",
    label: "General Portfolio",
    tagline: "Diverse Creative Works"
  },
  general2: {
    primary: "#6b7280",
    bg: "#f9fafb",  
    secondary: "#374151",
    label: "General Portfolio",
    tagline: "Diverse Creative Works"
  },
  generl3: {
    primary: "#6b7280",
    bg: "#f9fafb",
    secondary: "#374151",
    label: "General Portfolio",
    tagline: "Diverse Creative Works"
  },
  general4: {
    primary: "#6b7280",
    bg: "#f9fafb",
    secondary: "#374151",
    label: "General Portfolio",
    tagline: "Diverse Creative Works"
  },
  general5: {
    primary: "#6b7280",
    bg: "#f9fafb",
    secondary: "#374151",
    label: "General Portfolio",
    tagline: "Diverse Creative Works"
  },
};