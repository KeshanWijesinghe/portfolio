"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Target, Lightbulb, Rocket } from "lucide-react";
import {
  SectionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/SectionWrapper";

const highlights = [
  {
    icon: User,
    title: "1+ Year Experience",
    description:
      "Building scalable web applications, leading frontend architectures and mobile apps.",
  },
  {
    icon: Target,
    title: "Performance Focused",
    description:
      "Consistently delivering 95+ Lighthouse scores and optimized user experiences.",
  },
  {
    icon: Lightbulb,
    title: "Design Thinking",
    description:
      "Bridging design and development with a keen eye for user-centric solutions.",
  },
  {
    icon: Rocket,
    title: "Innovation Driven",
    description:
      "Early adopter of modern technologies and best practices in web development.",
  },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <StaggerItem>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-6 text-lg text-foreground-secondary leading-relaxed">
                <p>
                  I'm a passionate{" "}
                  <span className="text-accent-primary font-medium">
                    Undergraduate Software Engineer
                  </span>{" "}
                  and{" "}
                  <span className="text-accent-secondary font-medium">
                    UI/UX Designer
                  </span>{" "}
                  with over 1 year of experience crafting exceptional digital
                  experiences.
                </p>

                <p>
                  My expertise lies in building high-performance web
                  applications using modern technologies like{" "}
                  <span className="text-accent-tertiary font-medium">
                    React, Next.js, and TypeScript
                  </span>
                  . I have a strong focus on performance optimization,
                  accessibility, and creating intuitive user interfaces.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new design
                  trends, contributing to open-source projects, or mentoring
                  aspiring developers in the tech community.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <motion.a
                href="#contact"
                className="btn-primary inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.a>
            </StaggerItem>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight) => (
              <StaggerItem key={highlight.title} direction="right">
                <motion.div
                  className="glass-card p-6 text-center group"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="inline-block p-3 bg-accent-primary/10 rounded-2xl mb-4 group-hover:bg-accent-primary/20 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <highlight.icon className="w-6 h-6 text-accent-primary" />
                  </motion.div>

                  <h3 className="text-sm font-bold text-foreground mb-2">
                    {highlight.title}
                  </h3>

                  <p className="text-xs text-foreground-secondary leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
