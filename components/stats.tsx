"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, Award, Users, Briefcase } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Code2,
      value: "10+",
      label: "Projects Built",
      gradient: "from-primary to-accent",
    },
    {
      icon: Award,
      value: "1581",
      label: "LeetCode Rating",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Briefcase,
      value: "1+",
      label: "Years Experience",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Users,
      value: "100%",
      label: "Client Satisfaction",
      gradient: "from-primary via-accent to-secondary",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 sm:p-8 rounded-2xl border-2 border-border/50 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 text-center"
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl pointer-events-none`}
                />

                <div className="relative">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 shadow-lg`}
                  >
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                  </div>
                  <h3
                    className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-[var(--font-heading)]`}
                  >
                    {stat.value}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
