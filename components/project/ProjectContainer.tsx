import { useState } from "react";
import ProjectBox from "./ProjectBox";
import ProjectIntro from "./ProjectIntro";

export default function Projects() {
  // 현재 보여지는 섹션 상태 (intro 또는 content)
  const [activeSection, setActiveSection] = useState<"intro" | "content">(
    "intro"
  );

  // 첫 번째 섹션 애니메이션이 완료될 때 호출될 콜백 함수
  const handleIntroComplete = () => {
    setActiveSection("content");

    // content 섹션으로 부드럽게 스크롤
    document.getElementById("project-content")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <section id="project-intro">
        <ProjectIntro onComplete={handleIntroComplete} />
      </section>
      <section id="project-content">
        <ProjectBox isActive={activeSection === "content"} />
      </section>
    </>
  );
}
