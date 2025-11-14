"use client";

import { motion, type Variants } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Engineer",
      company: "devx commerce",
      period: "July 2025 - Present",
      description:
        "Working as a Software Development Engineer focusing on full-stack web development, building scalable applications, and contributing to production features using modern technologies.",
      highlights: [
        "MERN Stack",
        "Full-Stack Development",
        "Production Code",
        "Scalable Solutions",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "devx commerce",
      period: "Apr 2025 - June 2025",
      description:
        "Started as a Junior Software Engineer, working on full-stack web development and learning production-level code practices.",
      highlights: ["MERN Stack", "Full-Stack Development", "Production Code"],
    },
    {
      title: "Final Year IT Student",
      company: "Sarvajanik College of Engineering & Technology",
      period: "2021 - 2025",
      description:
        "Pursuing B.Tech in Information Technology with focus on web development and data structures.",
      highlights: ["Web Development", "DSA", "Problem Solving"],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-32 px-4 border-t border-border"
    >
      <div className="mx-auto max-w-4xl">
        {/* Clean Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-foreground font-[var(--font-heading)]">
            My experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            I have experience developing and maintaining web applications using
            a range of technologies, including React.js, Next.js, Node.js,
            Express.js, and MongoDB. My expertise in both front-end and back-end
            development has allowed me to create user-friendly and dynamic web
            applications.
          </p>
        </motion.div>

        {/* Clean Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative flex gap-8 sm:gap-12 group"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  {/* Year/Period - Clean and prominent */}
                  <div className="mb-3">
                    <span className="text-sm sm:text-base font-semibold text-primary">
                      {exp.period}
                    </span>
                  </div>

                  {/* Title and Company */}
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors font-[var(--font-heading)]">
                      {exp.title}
                    </h3>
                    <p className="text-base sm:text-lg font-medium text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights/Tags */}
                  {exp.highlights && (
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md border border-border"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
