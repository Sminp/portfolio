"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Lazy load components
const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/about/About"));
const Projects = dynamic(() => import("@/components/project/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));
const Navigation = dynamic(() => import("@/components/navigation/Navigation"));
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false, // 클라이언트 사이드에서만 렌더링
});

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      const curPos = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const height = element.offsetHeight;
          if (curPos >= top && curPos < top + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <Navigation activeSection={activeSection} />
      </header>
      <main className="min-h-screen">
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="contact" className="min-h-[334px] bg-[#F2E6EE]">
          <Contact />
        </section>
        <ScrollToTop />
      </main>
    </>
  );
}
