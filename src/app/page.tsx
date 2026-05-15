import Hero from "@/components/hero/Hero";
import About from "@/components/ui/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Architecture from "@/components/projects/Architecture";
import Experience from "@/components/experience/Experience";
import Stats from "@/components/ui/Stats";
import Contact from "@/components/ui/Contact";
import Navbar from "@/components/ui/Navbar";
import { LenisProvider } from "@/components/ui/lenis-provider";

export default function Home() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-background selection:bg-primary/30">
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Architecture />
        <Experience />
        <Contact />
      </main>
    </LenisProvider>
  );
}
