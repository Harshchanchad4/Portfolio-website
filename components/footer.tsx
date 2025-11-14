"use client"

import { motion, type Variants } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-background to-card/30 py-12 sm:py-16 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 pointer-events-none" />
      
      <motion.div
        className="relative mx-auto max-w-6xl px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-8">
          {/* Logo and tagline */}
          <motion.div variants={itemVariants} className="text-center space-y-3">
            <div className="inline-flex items-center gap-3 mb-2">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-lg font-bold text-primary-foreground">HC</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent font-[var(--font-heading)]">
                Harsh Chanchad
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Full-Stack Developer crafting exceptional digital experiences with modern web technologies
            </p>
          </motion.div>

          {/* Navigation links */}
          <motion.div variants={containerVariants} className="flex flex-wrap gap-6 justify-center">
            <motion.a
              variants={itemVariants}
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-200 hover:underline underline-offset-4"
              whileHover={{ y: -2 }}
            >
              About
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#experience"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-200 hover:underline underline-offset-4"
              whileHover={{ y: -2 }}
            >
              Experience
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-200 hover:underline underline-offset-4"
              whileHover={{ y: -2 }}
            >
              Projects
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#skills"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-200 hover:underline underline-offset-4"
              whileHover={{ y: -2 }}
            >
              Skills
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-200 hover:underline underline-offset-4"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <motion.p variants={itemVariants} className="text-sm text-muted-foreground text-center">
            © {currentYear} Harsh Chanchad. Built with{" "}
            <span className="text-red-500 animate-pulse">❤️</span> using{" "}
            <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Next.js
            </span>{" "}
            and{" "}
            <span className="font-semibold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Tailwind CSS
            </span>
          </motion.p>
        </div>
      </motion.div>
    </footer>
  )
}
