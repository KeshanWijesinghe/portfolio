"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import {
  SectionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  gridClass: string;
  year: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "Modern shopping experience with real-time inventory",
    longDescription:
      "A full-stack e-commerce platform built with Next.js and Stripe integration, featuring real-time inventory management, advanced search, and seamless checkout experience.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    image: "/projects/ecommerce.jpg",
    liveUrl: "https://example-ecommerce.vercel.app",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true,
    gridClass: "",
    year: "2024",
  },
  {
    id: "project-2",
    title: "Design System",
    description: "Comprehensive UI component library",
    longDescription:
      "A scalable design system with 40+ components, built with React, TypeScript, and Storybook. Features dark mode, accessibility compliance, and extensive documentation.",
    tech: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    image: "/projects/design-system.jpg",
    liveUrl: "https://example-design-system.vercel.app",
    githubUrl: "https://github.com/username/design-system",
    featured: true,
    gridClass: "",
    year: "2024",
  },
  {
    id: "project-3",
    title: "AI Dashboard",
    description: "Analytics dashboard with ML insights",
    longDescription:
      "An AI-powered analytics dashboard that provides real-time insights and predictions using machine learning algorithms. Built with modern web technologies.",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    image: "/projects/ai-dashboard.jpg",
    liveUrl: "https://example-ai-dashboard.vercel.app",
    githubUrl: "https://github.com/username/ai-dashboard",
    featured: true,
    gridClass: "",
    year: "2023",
  },
  {
    id: "project-4",
    title: "Mobile Banking App",
    description: "Secure financial mobile experience",
    longDescription:
      "A React Native banking application with biometric authentication, real-time transactions, and comprehensive financial management features.",
    tech: ["React Native", "TypeScript", "Firebase", "Plaid API"],
    image: "/projects/banking-app.jpg",
    liveUrl: "https://example-banking.app",
    githubUrl: "https://github.com/username/banking-app",
    featured: false,
    gridClass: "",
    year: "2023",
  },
  {
    id: "project-5",
    title: "Task Management",
    description: "Collaborative project management tool",
    longDescription:
      "A comprehensive project management platform with team collaboration, time tracking, and advanced reporting capabilities.",
    tech: ["Next.js", "tRPC", "Prisma", "WebSockets"],
    image: "/projects/task-management.jpg",
    liveUrl: "https://example-tasks.vercel.app",
    githubUrl: "https://github.com/username/task-management",
    featured: false,
    gridClass: "",
    year: "2023",
  },
];

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <StaggerItem className={cn("group relative", project.gridClass)}>
      <motion.div
        className="glass-card h-full overflow-hidden relative"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
          <div className="w-full h-full bg-gradient-to-br from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 flex items-center justify-center">
            <span className="text-6xl opacity-20">
              {project.title.charAt(0)}
            </span>
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-background/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100"
            initial={false}
            transition={{ duration: 0.3 }}
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent-primary rounded-full hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground rounded-full hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`View ${project.title} source code`}
              >
                <Github className="w-5 h-5 text-background" />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-foreground group-hover:text-accent-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-foreground-tertiary bg-background-secondary px-2 py-1 rounded-full">
              {project.year}
            </span>
          </div>

          <p className="text-foreground-secondary mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full border border-accent-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Corner arrow indicator */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
          initial={false}
          transition={{ duration: 0.3 }}
        >
          <div className="p-2 bg-accent-primary rounded-full">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      </motion.div>
    </StaggerItem>
  );
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="bg-background-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <StaggerContainer>
          <StaggerItem>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto">
                A selection of my recent work showcasing modern web development,
                thoughtful design, and performance optimization.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Featured Projects Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerContainer>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <StaggerContainer>
              <StaggerItem>
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Other Notable Projects
                </h3>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer
              staggerDelay={0.1}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </StaggerContainer>
          </>
        )}

        {/* View More CTA */}
        <StaggerContainer>
          <StaggerItem>
            <div className="text-center mt-16">
              <motion.a
                href="https://github.com/KeshanWijesinghe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                View All Projects on GitHub
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
