"use client"

import { motion, type Variants } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React.js", "Next.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"],
      gradient: "from-primary to-accent"
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication", "Cloudinary", "Socket.io"],
      gradient: "from-accent to-secondary"
    },
    {
      category: "Tools & Technologies",
      skills: ["Git/GitHub", "Vercel", "Netlify", "VS Code", "Postman", "MongoDB Atlas", "Figma"],
      gradient: "from-secondary to-primary"
    },
    {
      category: "Problem Solving & DSA",
      skills: ["Data Structures", "Algorithms", "LeetCode 1581★", "Competitive Programming", "System Design"],
      gradient: "from-primary via-accent to-secondary"
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
      },
    },
  }

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15
      },
    },
  }

  return (
    <section id="skills" className="relative py-20 sm:py-32 px-4 border-t border-border overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background pointer-events-none" />
      
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-foreground font-[var(--font-heading)]">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {skillCategories.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              whileHover={{ scale: 1.02, y: -6 }}
              className="group relative rounded-2xl border-2 border-border/50 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
            >
              {/* Animated gradient accent bar */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${skillGroup.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative">
                <h3 className={`mb-6 text-xl sm:text-2xl font-bold bg-gradient-to-r ${skillGroup.gradient} bg-clip-text text-transparent font-[var(--font-heading)]`}>
                  {skillGroup.category}
                </h3>
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  {skillGroup.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      variants={skillVariants}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 text-primary border-2 border-primary/20 hover:border-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
