"use client";

import React from "react";
import Image from "next/image";
import profilePhoto from "../../images/a.png";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/SectionWrapper";

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub Profile",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn Profile",
    },
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Send Email",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgb(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgb(255, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgb(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgb(255, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgb(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgb(255, 119, 198, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left — Text content */}
        <StaggerContainer className="flex-1 text-center lg:text-left">
          <StaggerItem>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
              <span className="block text-foreground">Undergraduate</span>
              <span className="block gradient-text">Software Engineer</span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground-secondary mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I craft exceptional digital experiences through{" "}
              <span className="text-accent-primary font-medium">
                modern web technologies
              </span>
              ,{" "}
              <span className="text-accent-secondary font-medium">
                thoughtful design
              </span>
              , and{" "}
              <span className="text-accent-tertiary font-medium">
                performance optimization
              </span>
              .
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
              <motion.button
                onClick={scrollToProjects}
                className="btn-primary group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex items-center justify-center lg:justify-start gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 hover:bg-glass-border transition-colors group"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    rotate: { duration: 0.6 },
                  }}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-foreground-secondary group-hover:text-accent-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Right — Photo */}
        <motion.div
          className="flex-shrink-0 flex items-end justify-center w-64 sm:w-72 lg:w-80 xl:w-96"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-full">
            {/* Glow behind image */}
            <div />
            <Image
              src={profilePhoto}
              alt="Profile photo"
              width={400}
              height={520}
              priority
              className="relative w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.button
          onClick={scrollToProjects}
          className="p-3 glass-card hover:bg-glass-border transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll to projects"
        >
          <ArrowDown className="w-5 h-5 text-foreground-secondary group-hover:text-accent-primary transition-colors" />
        </motion.button>
      </motion.div>
    </section>
  );
}
