"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Superdry E-commerce Platform",
      description:
        "A live e-commerce platform with active users, built using Fynd Platform APIs. Features include dynamic product filtering, shopping cart management, secure checkout process, and an admin panel for inventory management and order tracking. Currently serving real customers with seamless shopping experience.",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Fynd API",
        "Redux",
        "Payment Gateway",
        "REST APIs",
      ],
      github: null,
      live: "https://superdry.in/",
      highlights: ["Live Platform", "Active Users", "500+ Products", "Secure Payments"],
    },
    {
      title: "StudyNotion EdTech Platform",
      description:
        "A modern e-learning platform built with Next.js featuring role-based access control for students and instructors. Integrated Stripe for seamless payments, Redux for state management, and implemented course creation, enrollment, and progress tracking systems. This is my college project showcasing full-stack development skills.",
      tags: [
        "Next.js",
        "React.js",
        "Redux Toolkit",
        "MongoDB",
        "Stripe",
        "TypeScript",
        "Razorpay",
      ],
      github: "https://github.com/Harshchanchad4/Studynotion",
      live: "https://studynotion-ed-tech-uohf.vercel.app/",
      highlights: ["College Project", "Role-Based Auth", "Payment Gateway", "Video Streaming"],
    },
    {
      title: "Hospital Management System",
      description:
        "A comprehensive hospital management system for managing patient records, appointments, staff, and hospital operations. Features include patient registration, appointment scheduling, medical records management, and administrative dashboard. This is my college project demonstrating full-stack development capabilities.",
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
      ],
      github: "https://github.com/Harshchanchad4/Hospital-management-system",
      live: "https://hospital-management-system-cyan.vercel.app/",
      highlights: ["College Project", "Patient Management", "Appointment System", "Admin Dashboard"],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-32 px-4 border-t border-border overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-foreground font-[var(--font-heading)]">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Showcasing my best work in full-stack web development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl border-2 border-border/50 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300 font-[var(--font-heading)]">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-75" />
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-150" />
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-accent"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 text-primary border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-semibold text-sm"
                    aria-label={`View ${project.title} live demo`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </motion.a>
                  {project.github ? (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 font-semibold text-sm"
                      aria-label={`View ${project.title} source code on GitHub`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </motion.a>
                  ) : (
                    <span className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-border bg-muted/50 text-muted-foreground font-semibold text-sm cursor-not-allowed">
                      <Github className="h-4 w-4" />
                      Code Not Available
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
