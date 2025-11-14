"use client"

import { motion, type Variants } from "framer-motion"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { useState, type ChangeEvent, type FormEvent } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all fields.")
      return
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.")
      return
    }
    
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", message: "" })
      alert("Thank you for your message! I&apos;ll get back to you soon.")
    }, 1000)
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="contact" className="relative py-20 sm:py-32 px-4 border-t border-border overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background pointer-events-none" />
      
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-6 text-foreground font-[var(--font-heading)]">
            Let&apos;s Connect
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, development ideas, or opportunities. Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Contact Form */}
          <motion.form 
            variants={itemVariants} 
            onSubmit={handleSubmit} 
            className="mb-10 space-y-5 p-8 rounded-2xl border-2 border-border/50 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm shadow-xl"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-primary/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-primary/50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-primary/50 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground font-bold hover:shadow-2xl hover:shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className={`h-5 w-5 ${isSubmitting ? "animate-pulse" : ""}`} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Or connect with me directly:</p>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="mailto:harshchanchad16@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-5 w-5" />
                Email
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/harsh-chanchad-4b5a49253/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 font-semibold shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/harshchanchad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 font-semibold shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="h-5 w-5" />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Available for full-time opportunities and freelance projects
        </motion.p>
      </div>
    </section>
  )
}
