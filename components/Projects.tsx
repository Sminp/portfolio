"use client";

import projectData from "@/data/projects.json";
import useLanguageStore from "@/stores/useLanguageStore";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export const Background = [
  "M1039.5 60V511C1039.5 521.77 1030.77 530.5 1020 530.5H20C9.23046 530.5 0.5 521.77 0.5 511V60C0.5 49.2305 9.23045 40.5 20 40.5H20.975C31.8989 40.5 40.9039 31.934 41.4494 21.0237L41.5493 19.0262C42.0682 8.64814 50.6339 0.5 61.025 0.5H190C200.77 0.5 209.5 9.23045 209.5 20C209.5 31.3218 218.678 40.5 230 40.5H1020C1030.77 40.5 1039.5 49.2304 1039.5 60Z",
  "M1039.5 60V511C1039.5 521.77 1030.77 530.5 1020 530.5H20C9.23046 530.5 0.5 521.77 0.5 511V60C0.5 49.2305 9.23045 40.5 20 40.5H220C231.322 40.5 240.5 31.3218 240.5 20C240.5 9.23045 249.23 0.5 260 0.5H390C400.77 0.5 409.5 9.23045 409.5 20C409.5 31.3218 418.678 40.5 430 40.5H1020C1030.77 40.5 1039.5 49.2304 1039.5 60Z",
  "M1039.5 60V511C1039.5 521.77 1030.77 530.5 1020 530.5H20C9.23046 530.5 0.5 521.77 0.5 511V60C0.5 49.2305 9.23045 40.5 20 40.5H420C431.322 40.5 440.5 31.3218 440.5 20C440.5 9.23045 449.23 0.5 460 0.5H590C600.77 0.5 609.5 9.23045 609.5 20C609.5 31.3218 618.678 40.5 630 40.5H1020C1030.77 40.5 1039.5 49.2304 1039.5 60Z",
  "M1039.5 60V511C1039.5 521.77 1030.77 530.5 1020 530.5H20C9.23046 530.5 0.5 521.77 0.5 511V60C0.5 49.2305 9.23045 40.5 20 40.5H620C631.322 40.5 640.5 31.3218 640.5 20C640.5 9.23045 649.23 0.5 660 0.5H790C800.77 0.5 809.5 9.23045 809.5 20C809.5 31.3218 818.678 40.5 830 40.5H1020C1030.77 40.5 1039.5 49.2304 1039.5 60Z",
  "M1039.5 55V511C1039.5 521.77 1030.77 530.5 1020 530.5H20C9.23046 530.5 0.5 521.77 0.5 511V60C0.5 49.2305 9.23045 40.5 20 40.5H820C831.322 40.5 840.5 31.3218 840.5 20C840.5 9.23045 849.23 0.5 860 0.5H990C1000.77 0.5 1009.5 9.23045 1009.5 20V25C1009.5 33.5604 1016.44 40.5 1025 40.5C1033.01 40.5 1039.5 46.9919 1039.5 55Z",
];

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
    <div className="relative" style={{ height: `${TOTAL_HEIGHT}px` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full flex items-center justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="absolute w-[1440px] h-[731px]"
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: index < activeIndex ? 0.8 : 1,
                opacity: index < activeIndex ? 0 : 1,
                zIndex: projects.length - index,
              }}
              transition={{ duration: 0.5 }}
            >
              {/* SVG 백그라운드 */}
              <svg
                width={1040}
                height={531}
                viewBox="0 0 1040 531"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[199px] top-[99px]"
                preserveAspectRatio="none"
              >
                <path
                  d={Background[index]}
                  fill="#F2E6EE"
                  stroke="url(#paint0_linear_52_4)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_52_4"
                    x1={520}
                    y1={0}
                    x2={520}
                    y2={531}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#977DFF" />
                    <stop offset="0.7" stopColor="#0033FF" />
                    <stop offset={1} stopColor="#0600AB" />
                  </linearGradient>
                </defs>
              </svg>

              {/* 프로젝트 컨텐츠 */}
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
