"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6">
        <div className="glass-dark p-12 lg:p-20 rounded-[3rem] border-white/5 relative overflow-hidden">
          {/* Background Decorative */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -mr-20 -mt-20 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <motion.h2 
                className="text-4xl lg:text-6xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Let's build something <span className="text-gradient">extraordinary</span> together.
              </motion.h2>
              <p className="text-muted-foreground text-xl mb-12 max-w-md">
                Always open to discussing system architecture, backend challenges, or potential collaborations.
              </p>
              
              <div className="space-y-6">
                 <a 
                   href={`mailto:${portfolioData.contact.email}`} 
                   className="flex items-center gap-4 group w-fit"
                 >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-sm text-muted-foreground">Email</p>
                       <p className="text-lg font-medium group-hover:text-primary transition-colors">{portfolioData.contact.email}</p>
                    </div>
                 </a>

                 {(portfolioData.contact as any).phone && (
                   <a 
                     href={`tel:${(portfolioData.contact as any).phone}`} 
                     className="flex items-center gap-4 group w-fit"
                   >
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                         <p className="text-sm text-muted-foreground">Phone</p>
                         <p className="text-lg font-medium group-hover:text-primary transition-colors">{(portfolioData.contact as any).phone}</p>
                      </div>
                   </a>
                 )}
                 
                 <div className="flex gap-6 mt-12">
                   <a 
                    href={portfolioData.contact.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 hover:scale-110 transition-all text-muted-foreground hover:text-foreground"
                   >
                     <FaGithub className="w-6 h-6" />
                   </a>
                   <a 
                    href={portfolioData.contact.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 hover:scale-110 transition-all text-muted-foreground hover:text-foreground"
                   >
                     <FaLinkedin className="w-6 h-6" />
                   </a>
                 </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-end">
              <motion.div 
                className="glass p-8 rounded-3xl border-white/10 hover:border-primary/30 transition-all cursor-pointer group"
                whileHover={{ y: -10 }}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="text-3xl font-bold">Work with me</div>
                  <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-8">
                  Looking for a backend engineer who understands production-grade architecture? I'm just a message away.
                </p>
                <div className="h-[1px] bg-white/10 mb-8" />
                <a 
                  href={`mailto:${portfolioData.contact.email}`}
                  className="w-full block text-center py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all"
                >
                  Say Hello
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center text-muted-foreground text-sm font-mono opacity-50">
          © {new Date().getFullYear()} {portfolioData.name}. Built with Next.js & Framer Motion.
        </div>
      </div>
    </section>
  );
}
