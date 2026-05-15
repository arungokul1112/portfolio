"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Skills() {
  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set focused on building high-performance, scalable backend architectures and modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="glass-dark p-8 rounded-3xl border-white/5 hover:border-primary/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-6 text-foreground/90 group-hover:text-primary transition-colors flex items-center justify-between">
                {skillGroup.category}
                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-all group-hover:scale-150" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
