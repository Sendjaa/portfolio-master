import { Ruler, Code2, Camera, Paintbrush, LucideIcon, LayoutGrid, MonitorCog, PenTool, TrendingUp, Briefcase } from 'lucide-react';

export interface Project {
  id: string; // Diubah ke string untuk kombinasi ID unik
  title: string;
  image: string;
  // Dibuat opsional agar tidak error saat data dihapus
  location?: string; 
  year?: string;
  tags?: string[];
  category_label?: string; // Tambahan untuk label di mode General
}

export interface Category {
  title: string;
  icon: LucideIcon;
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
      { 
        id: "sp-1", 
        title: "Modern Portfolio for Architects", 
        location: "Bali", 
        year: "2024", 
        tags: ["Exterior"], 
        image: "/image_portfolio/spatial_image1.png",
        category_label: "Architecture"
      },
    ]
  },
  system: {
    title: "System Core",
    icon: Code2,
    color: "#3b82f6",
    description: "Infrastruktur digital dan sistem backend skala besar.",
    projects: [
      { 
        id: "sys-1", 
        title: "Cloud Engine", 
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
        category_label: "Backend System"
      },
    ]
  },
  visual: {
    title: "Visual Arts",
    icon: Paintbrush,
    color: "#f87171",
    description: "Karya seni digital imersif dan desain identitas brand.",
    projects: [
      { 
        id: "vis-1", 
        title: "Abstract Motion", 
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800",
        category_label: "Digital Art"
      },
    ]
  }
  // Tambahkan kategori lain (digital, photo, dll) di sini dengan pola yang sama
};