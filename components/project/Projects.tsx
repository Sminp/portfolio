"use client";

import projectData from "@/data/projects.json";
import useLanguageStore from "@/stores/useLanguageStore";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import projectBox from "@/public/projectBox.svg";

export default function Projects() {
  const language = useLanguageStore((state) => state.language);
  const projects = projectData[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const CARD_HEIGHT = 600;
  const TOTAL_HEIGHT = CARD_HEIGHT * (projects.length + 1);

  useEffect(() => {
    if (projects.length === 0) return;

    const handleScroll = () => {
      const section = document.getElementById("projects");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const offset = window.innerHeight - rect.top - CARD_HEIGHT;

      if (offset > 0) {
        const index = Math.floor(offset / CARD_HEIGHT);
        setActiveIndex(Math.min(index, projects.length - 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects.length]);

  return (
    <div
      className="w-[1440px] h-[731px] relative bg-[#f2e6ee]"
      style={{ height: `${TOTAL_HEIGHT}px` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <div className="w-[1080px] h-[531px] relative">
          {/* 고정된 프로젝트 박스 */}
          <Image
            src={projectBox}
            alt="projectBox"
            width={1080}
            height={550}
            className="absolute left-0 top-0 rounded-[20px]"
          />

          {/* 애니메이션 컨텐츠 컨테이너 */}
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <ProjectCard project={projects[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
