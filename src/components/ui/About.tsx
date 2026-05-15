"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Target, TrendingUp, Zap } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square glass-dark rounded-[3rem] border-white/5 overflow-hidden flex items-center justify-center">
               {/* Visual representation of "Backend" */}
               <div className="relative w-2/3 h-2/3">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-4 border-2 border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-8 border-2 border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="text-center">
                        <div className="text-6xl font-bold text-primary mb-2">2+</div>
                        <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Years Experience</div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Floating cards */}
            <motion.div 
              className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl shadow-2xl border-white/10"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                   <p className="text-xs text-muted-foreground">Focus</p>
                   <p className="text-sm font-bold">Scalability</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-mono text-sm uppercase tracking-widest block mb-4">My Story</span>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">Crafting high-performance <span className="text-gradient">Backend Systems</span>.</h2>
              
              <div className="space-y-6 text-muted-foreground text-lg mb-10">
                <p>
                  I'm a Software Engineer with a deep interest in distributed systems and real-time engineering. My journey is defined by a passion for solving complex architectural problems and building systems that scale effortlessly.
                </p>
                <p>
                  {portfolioData.about.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Architecture-First</h4>
                      <p className="text-sm">I believe in building solid foundations before scaling upwards.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Real-time Specialist</h4>
                      <p className="text-sm">Expertise in WebSockets and event-driven communication.</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
