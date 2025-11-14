"use client"

import { motion, type Variants } from "framer-motion"

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 border-t border-border overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />
      
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl font-bold mb-6 font-[var(--font-heading)]"
            >
              About Me
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="space-y-4 mb-8"
            >
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I&apos;m a passionate Full-Stack Developer focused on building efficient, scalable web applications 
                that solve real-world problems. I love crafting elegant solutions with clean code and modern 
                technologies like React, Next.js, and Node.js.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Currently working as a Software Development Engineer at devx commerce, I bring hands-on industry experience 
                combined with a strong foundation in Data Structures & Algorithms (LeetCode rating: 1581). 
                I&apos;m passionate about writing maintainable code and creating exceptional user experiences.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground font-[var(--font-heading)]">
                Interests & Passions
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Web Development", "Open Source", "Learning New Tech", "UI/UX Design", "System Design"].map(
                  (interest) => (
                    <span
                      key={interest}
                      className="inline-block px-3 py-1.5 text-sm font-medium bg-muted text-muted-foreground rounded-md border border-border"
                    >
                      {interest}
                    </span>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
