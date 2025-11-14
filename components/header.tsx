"use client";

import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60 shadow-lg shadow-primary/5">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-300">
              <span className="text-base font-bold text-primary-foreground">
                HC
              </span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300 font-[var(--font-heading)]">
              Harsh Chanchad
            </span>
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-primary/10 border-2 border-transparent hover:border-primary/30 transition-all duration-300"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden gap-2 md:flex items-center">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-semibold hover:text-primary transition-all duration-200 px-4 py-2 rounded-xl hover:bg-primary/10 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-semibold hover:text-primary transition-all duration-200 px-4 py-2 rounded-xl hover:bg-primary/10 relative group"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-semibold hover:text-primary transition-all duration-200 px-4 py-2 rounded-xl hover:bg-primary/10 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-semibold hover:text-primary transition-all duration-200 px-4 py-2 rounded-xl hover:bg-primary/10 relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-semibold hover:text-primary transition-all duration-200 px-4 py-2 rounded-xl hover:bg-primary/10 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </button>
            <div className="w-px h-6 bg-border mx-2" />
            <motion.button
              onClick={toggleTheme}
              className="rounded-xl p-2.5 hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 border-2 border-transparent hover:border-primary/30 transition-all duration-300 shadow-sm"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-accent" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pb-4 flex flex-col gap-3 border-t border-border pt-4"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="text-base font-semibold hover:text-primary transition-all duration-200 text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 border-2 border-transparent hover:border-primary/30"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-base font-semibold hover:text-primary transition-all duration-200 text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 border-2 border-transparent hover:border-primary/30"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-base font-semibold hover:text-primary transition-all duration-200 text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 border-2 border-transparent hover:border-primary/30"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-base font-semibold hover:text-primary transition-all duration-200 text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 border-2 border-transparent hover:border-primary/30"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-base font-semibold hover:text-primary transition-all duration-200 text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 border-2 border-transparent hover:border-primary/30"
            >
              Contact
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
