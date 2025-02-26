import { useEffect, useState } from "react";
import ProjectContent from "./ProjectContent";
import projectData from "@/data/projects.json";
import useLanguageStore from "@/stores/useLanguageStore";

interface ProjectBoxProps {
  isActive: boolean;
}

export default function ProjectBox({ isActive }: ProjectBoxProps) {
  const language = useLanguageStore((state) => state.language);
  const projects = projectData[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const CARD_HEIGHT = 631;
  const TOTAL_HEIGHT = CARD_HEIGHT * (projects.length + 1);

  useEffect(() => {
    if (projects.length === 0) return;

    const handleScroll = () => {
      const section = document.getElementById("project-content");
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
  }, [projects.length, isActive]);

  return (
    <div style={{ height: `${TOTAL_HEIGHT}px` }}>
      <div className="sticky top-0">
        <div className=" h-screen flex items-center justify-center">
          <div className="w-[1240px] h-[631px] relative rounded-[20px] border border-[#4d4f78]">
            {isActive && <ProjectContent project={projects[activeIndex]} />}
          </div>
        </div>
      </div>
    </div>
  );
}
