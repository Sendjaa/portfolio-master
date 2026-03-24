import { Ruler, Code2, Camera, Paintbrush, LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  tags: string[];
  image: string;
}

export interface Category {
  title: string;
  icon: LucideIcon; // Lebih spesifik daripada 'any'
  color: string;
  description: string;
  projects: Project[];
}

export const categoryData: Record<string, Category> = {
  spatial: {
    title: "Spatial Architecture",
    icon: Ruler,
    color: "#94a3b8",
    description: "Perancangan ruang presisi teknis dan visi artistik.",
    projects: [
      { id: 1, title: "Modern Portfolio for Architects", location: "Bali", year: "2024", tags: ["Exterior"], image: "/image_portfolio/spatial_image1.png" },
    ]
  },
  system: {
    title: "System Core",
    icon: Code2,
    color: "#3b82f6",
    description: "Infrastruktur digital dan sistem backend skala besar.",
    projects: [
      { id: 1, title: "Cloud Engine", location: "Remote", year: "2024", tags: ["Backend"], image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800" },
    ]
  },
  visual: {
    title: "Visual Arts",
    icon: Paintbrush,
    color: "#f87171",
    description: "Karya seni digital imersif dan desain identitas brand.",
    projects: [
      { id: 1, title: "Abstract Motion", location: "Bandung", year: "2024", tags: ["Motion"], image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800" },
    ]
  }
};