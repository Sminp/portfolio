"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useThemeStore } from "@/stores/useThemeStore";

// Lazy load components
const Hero = dynamic(() => import("@/components/hero/Hero"));
const About = dynamic(() => import("@/components/about/AboutContainer"));
const Projects = dynamic(() => import("@/components/project/ProjectContainer"));
const Contact = dynamic(() => import("@/components/Contact"));
const Navigation = dynamic(() => import("@/components/navigation/Navigation"));
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false, // 클라이언트 사이드에서만 렌더링
});

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const { theme } = useThemeStore();

  // 테마 초기화를 위한 효과
  useEffect(() => {
    // useThemeStore에서 이미 처리되므로 여기서는 추가 작업 필요 없음
    // 다만 의존성 배열에 theme을 추가하여 테마 변경을 감지하도록 함
  }, [theme]);

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
      <main className="min-h-screen relative bg-white dark:bg-gray-900 transition-colors duration-300">
        <section
          id="hero"
          className="min-h-screen transition-colors duration-300"
        >
          <Hero />
        </section>
        <section
          id="about"
          className="min-h-screen transition-colors duration-300"
        >
          <About />
        </section>
        <section
          id="projects"
          className="min-h-screen transition-colors duration-300"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="min-h-[334px] transition-colors duration-300"
        >
          <Contact />
        </section>
        <ScrollToTop />
      </main>
    </>
  );
}
