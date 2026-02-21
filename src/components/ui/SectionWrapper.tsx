"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
}

const directionVariants = {
  up: { y: 30, opacity: 0 },
  down: { y: -30, opacity: 0 },
  left: { x: -30, opacity: 0 },
  right: { x: 30, opacity: 0 },
};

export function SectionWrapper({
  children,
  className,
  id,
  delay = 0,
  direction = "up",
  duration = 0.8,
  once = true,
}: SectionWrapperProps) {
  const variants = {
    hidden: {
      ...directionVariants[direction],
      transition: {
        duration: 0,
      },
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.1,
        margin: "-100px",
      }}
      variants={variants}
      className={cn(
        "section-padding section-spacing will-change-transform",
        className,
      )}
    >
      {children}
    </motion.section>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className,
}: StaggerContainerProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: StaggerItemProps) {
  const item = {
    hidden: directionVariants[direction],
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={item}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
