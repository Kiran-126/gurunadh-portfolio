import { useEffect } from "react";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Gurunadh | AI/ML Developer";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
