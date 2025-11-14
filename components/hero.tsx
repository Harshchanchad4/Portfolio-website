"use client";

import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 pb-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 pointer-events-none" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 dark:opacity-30 pointer-events-none"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 dark:opacity-30 pointer-events-none"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-25 pointer-events-none"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="relative mx-auto max-w-5xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 via-accent/10 to-secondary/15 border border-primary/30 backdrop-blur-sm shadow-lg shadow-primary/10"
        >
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          <span className="text-sm font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Full-Stack MERN Developer
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-balance font-[var(--font-heading)]"
        >
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Hi, I&apos;m{" "}
          </span>
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
            Harsh Chanchad
          </span>{" "}
          👋
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-6 max-w-2xl text-xl sm:text-2xl lg:text-3xl text-muted-foreground leading-relaxed text-balance font-medium"
        >
          Building{" "}
          <span className="text-primary font-semibold">
            innovative web solutions
          </span>{" "}
          with modern technologies
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed text-balance"
        >
          Software Development Engineer at{" "}
          <span className="text-foreground font-semibold">devx commerce</span> |
          Final Year IT Student | Specializing in{" "}
          <span className="text-primary font-medium">React</span>,
          <span className="text-accent font-medium"> Next.js</span>,
          <span className="text-secondary font-medium"> Node.js</span> &
          <span className="text-primary font-medium"> MongoDB</span> | LeetCode
          Rating: <span className="text-accent font-semibold">1581</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground font-semibold overflow-hidden shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 rounded-xl border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all duration-300 font-semibold shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-accent/30 bg-card/50 backdrop-blur-sm hover:bg-accent/10 hover:border-accent transition-all duration-300 font-semibold shadow-lg"
            aria-label="Download Resume"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="h-5 w-5 group-hover:animate-bounce" />
            Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center"
        >
          <motion.a
            href="https://github.com/harshchanchad"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl border-2 border-border bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all duration-300 shadow-lg"
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-6 w-6 group-hover:text-primary transition-colors" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/harsh-chanchad-4b5a49253"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl border-2 border-border bg-card/50 backdrop-blur-sm hover:bg-accent/10 hover:border-accent transition-all duration-300 shadow-lg"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-6 w-6 group-hover:text-accent transition-colors" />
          </motion.a>
          <motion.a
            href="mailto:harshchanchad16@gmail.com"
            className="group p-4 rounded-xl border-2 border-border bg-card/50 backdrop-blur-sm hover:bg-secondary/10 hover:border-secondary transition-all duration-300 shadow-lg"
            aria-label="Send Email"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-6 w-6 group-hover:text-secondary transition-colors" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
