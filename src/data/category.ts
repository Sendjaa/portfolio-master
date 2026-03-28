import { Ruler, Code2, Camera, Paintbrush, LucideIcon, LayoutGrid, MonitorCog, PenTool, TrendingUp, Briefcase } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  image: string;
  category_label?: string;
  link?: string;
}

export interface Category {
  title: string;
  icon: LucideIcon;
  color: string;
  link?: string;
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
        image: "/image_portfolio/spatial_image1.png",
        link: "/projects/sp-1", 
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
  },
  General: {
    title: "Gen1",
    icon: LayoutGrid,
    color: "#4ade80",
    description: "Kumpulan proyek umum dan berbagai kategori.",
    projects: [
      {
        id: "gen-1",
        title: "Seniman Visual",
        image: "/image_portfolio/Gen1.png",
        category_label: "General",
        link: ""
      },
      {
        id: "gen-2",
        title: "Ahli Strategi Digital",
        image: "/image_portfolio/Gen2.png",
        category_label: "General"
      },
      {
        id: "gen-3",
        title: "Direktur Kreatif",
        image: "/image_portfolio/Gen3.png",
        category_label: "General"
      },
      {
        id: "Gen-4",
        title: "Full stack Developer",
        image: "/image_portfolio/Gen4.png",
        category_label: "General"
      },
      {
        id: "gen-5",
        title: "Kreatif",
        image: "/image_portfolio/Gen5.png",
        category_label: "General"
      },
    ]
  },
};