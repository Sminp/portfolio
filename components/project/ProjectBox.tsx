import { useEffect, useState } from "react";
import ProjectContent from "./ProjectContent";
import projectData from "@/data/projects.json";
import useLanguageStore from "@/stores/useLanguageStore";

export default function ProjectBox() {
  const language = useLanguageStore((state) => state.language);
  const projects = projectData[language];
  const [projectActive, setProjectActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const CARD_HEIGHT = 631;
  const TOTAL_HEIGHT = CARD_HEIGHT * (projects.length + 2);

  useEffect(() => {
    if (projects.length === 0) return;

    const handleScroll = () => {
      const section = document.getElementById("project-content");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const offset = window.innerHeight * 0.9 - rect.top - CARD_HEIGHT; // project 섹션으로 들어온 경우

      if (offset > 0) {
        console.log(
          `offset: ${offset}, window.scrollY: ${window.scrollY}, rect.bottom: ${rect.bottom}`
        );
        setProjectActive(true);
        const index = Math.floor(offset / CARD_HEIGHT);
        setActiveIndex(Math.min(index, projects.length - 1));
      } else {
        setProjectActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projectActive, projects.length]);

  return (
    <div style={{ height: `${TOTAL_HEIGHT}px` }}>
      <div className="sticky top-0">
        <div className=" h-screen flex items-center justify-center">
          {projectActive && (
            <div className="w-[1240px] h-[631px] relative rounded-[20px] border border-[#4d4f78]">
              <ProjectContent project={projects[activeIndex]} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
