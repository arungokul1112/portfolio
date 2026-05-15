"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";
import FuzzyText from "@/components/animations/FuzzyText";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#050505]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid z-0 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-2 rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight flex items-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I'm&nbsp;
              <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
                fontSize="clamp(3.5rem, 10vw, 5.5rem)"
                fontWeight="900"
                gradient={["#0070f3", "#00d4ff", "#a855f7"]}
                className="inline-block -ml-12"
              >
                {portfolioData.name}
              </FuzzyText>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {portfolioData.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 group cursor-target"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={portfolioData.contact.resumeUrl}
                download="Arun_Gokul_Resume.pdf"
                className="px-8 py-4 glass border-white/10 rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 cursor-target"
              >
                Download Resume
                <Download className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              className="flex gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors cursor-target">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors cursor-target">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          >
            {/* Visual element - Terminal or Abstract */}
            <div className="relative w-full aspect-square glass-dark rounded-3xl p-8 border-white/10 overflow-hidden shadow-2xl group">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>

              <div className="space-y-4 font-mono text-sm">
                <p className="text-primary">$ <span className="text-foreground">whoami</span></p>
                <p className="text-muted-foreground">Arun Gokul K</p>
                <p className="text-primary">$ <span className="text-foreground">stats --backend</span></p>
                <div className="grid grid-cols-2 gap-4">
                  {portfolioData.stats.map((stat, i) => (
                    <div key={i} className="p-3 bg-white/5 rounded-lg border border-white/5">
                      <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-lg font-bold text-accent">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-primary">$ <span className="text-foreground">skills --list</span></p>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills[0].items.slice(0, 4).map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                      {skill}
                    </span>
                  ))}
                  <span className="text-muted-foreground text-xs">...and more</span>
                </div>
              </div>

              {/* Floating glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-[100px] group-hover:bg-primary/50 transition-all duration-1000" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
