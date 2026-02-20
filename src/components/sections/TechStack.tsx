"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiDocker,
  SiAmazon,
  SiFigma,
  SiVercel,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiGithub,
  SiVite,
} from "react-icons/si";
import {
  SectionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/SectionWrapper";

const skills = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
  { name: "Framer Motion", Icon: SiFramer, color: "#BB4BFF" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express", Icon: SiExpress, color: "#ffffff" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "AWS", Icon: SiAmazon, color: "#FF9900" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
];

// Duplicate for seamless loop
const loopedSkills = [...skills, ...skills];

export function TechStack() {
  return (
    <SectionWrapper
      id="tech-stack"
      className="bg-background-tertiary/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <StaggerContainer>
          <StaggerItem>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Tech <span className="gradient-text">Stack</span>
              </h2>
              <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto">
                Technologies I work with to build exceptional digital
                experiences.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Marquee track — full bleed, not constrained by max-w */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background-tertiary/80 to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background-tertiary/80 to-transparent" />

        <div className="flex overflow-hidden">
          <div className="flex gap-5 animate-marquee whitespace-nowrap">
            {loopedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-3 glass-card w-24 h-24 sm:w-28 sm:h-28 p-4 hover:scale-105 transition-transform duration-300 cursor-default"
              >
                <skill.Icon
                  style={{ color: skill.color }}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm text-foreground-secondary font-medium text-center leading-tight truncate w-full">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
