"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import {
  SectionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/SectionWrapper";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "wijesinghe.kbhanuka@gmail.com",
    href: "mailto:wijesinghe.kbhanuka@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 (777) 163869",
    href: "tel:+94777163869",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gaelle, Sri Lanka",
    href: "#",
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-background-secondary/50">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer>
          <StaggerItem>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Let's <span className="gradient-text">Connect</span>
              </h2>
              <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto">
                Have a project in mind or want to discuss opportunities? I'd
                love to hear from you.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <StaggerContainer className="space-y-6">
            {contactInfo.map((info) => (
              <StaggerItem key={info.label} direction="left">
                <motion.a
                  href={info.href}
                  className="glass-card p-6 flex items-center gap-4 group hover:bg-glass-border transition-colors"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="p-3 bg-accent-primary/10 rounded-2xl group-hover:bg-accent-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-tertiary">
                      {info.label}
                    </p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <StaggerItem direction="right">
              <div className="glass-card p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Name *
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      {...register("subject")}
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors"
                      placeholder="Project discussion, collaboration, etc."
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Tell me about your project or what you'd like to discuss..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Success Message */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
                    >
                      <p className="text-green-400 text-sm text-center">
                        ✅ Message sent successfully! I'll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                    >
                      <p className="text-red-400 text-sm text-center">
                        ❌ {submitError}
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </StaggerItem>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
