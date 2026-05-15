"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {portfolioData.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative inline-block">
                <h3 className="text-4xl lg:text-6xl font-bold mb-2 group-hover:text-primary transition-colors duration-500">
                  {stat.value}
                </h3>
                {/* Decorative glow */}
                <div className="absolute -inset-4 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              </div>
              <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
