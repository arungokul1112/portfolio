"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2, GitMerge, Network, Server } from "lucide-react";

export default function Architecture() {
  return (
    <section className="py-24 relative bg-muted/30" id="architecture">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-4">
            Unique Engineering Perspective
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Architecture <span className="text-gradient">Showcase</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visualizing the engineering thought process behind complex systems. I don't just build features; I architect solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.architecture.map((item, index) => (
            <motion.div
              key={index}
              className="glass-dark p-10 rounded-3xl border-white/5 relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {index === 0 ? <Network className="w-6 h-6" /> : <Server className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    {item.description}
                  </p>
                  
                  {/* Decorative Architecture Visual */}
                  <div className="relative h-32 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-grid" />
                    <div className="flex items-center gap-8 z-10">
                       <div className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded bg-white/10 border border-white/10 flex items-center justify-center text-[10px] font-mono">APP</div>
                          <span className="text-[8px] text-muted-foreground uppercase">Client</span>
                       </div>
                       <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent relative">
                          <motion.div 
                            className="absolute -top-[3px] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                            animate={{ left: ["0%", "100%", "0%"] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                          />
                       </div>
                       <div className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded bg-primary/20 border border-primary/20 flex items-center justify-center text-[10px] font-mono text-primary">API</div>
                          <span className="text-[8px] text-muted-foreground uppercase">Backend</span>
                       </div>
                       <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-purple-500" />
                       <div className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded bg-accent/20 border border-accent/20 flex items-center justify-center text-[10px] font-mono text-accent">DB</div>
                          <span className="text-[8px] text-muted-foreground uppercase">Storage</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex gap-6">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground cursor-default transition-colors">
                  <Code2 className="w-4 h-4" /> System Design
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground cursor-default transition-colors">
                  <GitMerge className="w-4 h-4" /> Workflow
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
