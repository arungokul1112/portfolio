"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building my professional foundation through complex engineering challenges and enterprise-level development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-primary/10 to-transparent md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10 hidden md:block" />

                {/* Content Card */}
                <div className="md:w-1/2 group">
                  <div className="glass-dark p-8 rounded-3xl border-white/5 group-hover:border-primary/20 transition-all duration-300 relative">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground group-hover:text-foreground/90 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0 group-hover:bg-primary transition-colors" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for empty side */}
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
