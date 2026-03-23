// components/projectShowcase/MultimediaCard.tsx
"use client"
import { useState, useRef } from 'react';

interface Project {
  title: string;
  thumbnail: string;
  tags: string[];
}

export const MultimediaCard = ({ project }: { project: Project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div 
      className="group relative rounded-3xl overflow-hidden bg-card border border-border"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
      }}
    >
      <video 
        ref={videoRef}
        src={project.thumbnail}
        muted
        loop
        className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
      />
      <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
        <h4 className="text-xl font-bold text-white">{project.title}</h4>
        <p className="text-primary text-sm font-mono">{project.tags.join(" • ")}</p>
      </div>
    </div>
  );
};