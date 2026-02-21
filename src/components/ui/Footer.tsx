"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/KeshanWijesinghe",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/keshanwijesinghe",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:wijesinghe.kbhanuka@gmail.com",
    label: "Email",
    mailto: true,
  },
];

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">
              Keshan Wijesinghe
            </h3>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              Undergraduate Software Engineer crafting modern web experiences
              with a passion for clean code and thoughtful design.
            </p>
          </div>

          {/* Nav links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground-secondary hover:text-accent-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.mailto ? "_self" : "_blank"}
                  rel={link.mailto ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  className="glass-card p-3 hover:bg-glass-border transition-colors group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-4 h-4 text-foreground-secondary group-hover:text-accent-primary transition-colors" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-foreground-secondary">
              wijesinghe.kbhanuka@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-sm text-foreground-tertiary">
            © {new Date().getFullYear()} Keshan Wijesinghe. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="glass-card p-3 hover:bg-glass-border transition-colors group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-foreground-secondary group-hover:text-accent-primary transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
