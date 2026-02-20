"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SectionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/SectionWrapper";

const techCategories = [
  {
    title: "Frontend",
    techs: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "PostgreSQL", level: 80 },
      { name: "Prisma", level: 75 },
      { name: "tRPC", level: 78 },
    ],
  },
  {
    title: "Tools & Others",
    techs: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 85 },
      { name: "Vercel", level: 88 },
    ],
  },
];

export function TechStack() {
  return (
    <SectionWrapper id="tech-stack" className="bg-background-tertiary/30">
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <StaggerItem key={category.title}>
              <div className="glass-card p-6 h-full">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.techs.map((tech, techIndex) => (
                    <div key={tech.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground-secondary">
                          {tech.name}
                        </span>
                        <span className="text-xs text-foreground-tertiary">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.2 + techIndex * 0.1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
