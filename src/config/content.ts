// src/config/content.ts
export const multimediaContent = {
  skills: [
    { name: "After Effects", level: "Advanced", icon: "video" },
    { name: "Premiere Pro", level: "Expert", icon: "film" },
    { name: "Cinema 4D", level: "Intermediate", icon: "box" },
    { name: "Figma", level: "Advanced", icon: "layout" }
  ],
  projects: [
    {
      id: 1,
      title: "Motion Identity 2026",
      tags: ["Motion", "Branding"],
      thumbnail: "/projects/motion-1.mp4", // Pakai video untuk multimedia!
    },
    {
      id: 2,
      title: "Visual Storytelling",
      tags: ["Video", "Narrative"],
      thumbnail: "/projects/motion-2.mp4", // Pakai video untuk multimedia!
    },
    {
      id: 3,
      title: "Motion Design",
      tags: ["Motion", "Design"],
      thumbnail: "/projects/motion-3.mp4",
    },
  ]
};