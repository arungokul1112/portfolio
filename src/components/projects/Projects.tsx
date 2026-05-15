"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Layers, Zap, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Core <span className="text-gradient">Engineering Projects</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A deep dive into my technical implementations, from real-time systems to multi-tenant SaaS architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              className="group glass-dark rounded-[2rem] border border-white/5 overflow-hidden flex flex-col hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-muted-foreground uppercase tracking-widest border border-white/5">
                    {project.role || "Backend Developer"}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-4 mb-6">
                   <div className="flex flex-wrap gap-2">
                     {project.features?.slice(0, 4).map((f, i) => (
                       <span key={i} className="flex items-center gap-1 text-[11px] font-medium text-foreground/70 bg-white/5 px-2 py-1 rounded-md">
                          <Zap className="w-3 h-3 text-primary" /> {f}
                       </span>
                     ))}
                   </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono text-primary/80 border border-primary/20 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex gap-4">
                    <button className="text-muted-foreground hover:text-primary transition-colors cursor-target">
                      <FaGithub className="w-5 h-5" />
                    </button>
                    <button className="text-muted-foreground hover:text-primary transition-colors cursor-target">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="text-xs font-bold flex items-center gap-1 text-primary group/link cursor-target">
                    Case Study <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
