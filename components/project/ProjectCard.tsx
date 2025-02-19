import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-[834px] h-[359px]">
      {/* 썸네일 수정 */}
      <div className="w-[555px] h-[294px] absolute left-[102.5px] top-[85.5px] rounded-[20px] bg-[#d9d9d9]" />
      {/* map이용해서 수정 */}
      {project.technologies.map((tech, index) => {
        return (
          <p
            className="absolute top-[420px] text-xl font-bold text-left text-black"
            key={index}
            style={{ left: `${103 + 150 * index}px` }}
          >
            {tech}
          </p>
        );
      })}
      <p className="absolute left-[696px] top-[86px] text-[32px] font-bold text-left text-black">
        {project.title}
      </p>
      <p className="absolute left-[696px] top-[138px] text-2xl text-left text-black">
        {project.description}
      </p>
      <p className="absolute left-[696px] top-[202px] text-2xl font-bold text-left text-black">
        기간
      </p>
      <p className="absolute left-[696px] top-[239px] text-xl text-left text-black">
        {project.date[0]}-{project.date[1] || "진행 중"}
      </p>
      <p className="absolute left-[696px] top-[290px] text-2xl font-bold text-left text-black">
        성과
      </p>
      <p className="absolute left-[696px] top-[327px] text-xl text-left text-black">
        개인 포트폴리오 웹사이트
      </p>
      {project.github && (
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[696px] top-[415px] text-2xl font-bold text-left text-black hover:text-blue-800"
        >
          Github
        </Link>
      )}
      {project.demo && (
        <Link
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[812px] top-[416px] text-2xl font-bold text-left text-black hover:text-blue-800"
        >
          Demo
        </Link>
      )}
    </div>
  );
}
