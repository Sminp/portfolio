import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      {/* 썸네일 수정 */}
      <div className="w-[555px] h-[294px] absolute left-[258px] top-[190px] rounded-[20px] bg-[#d9d9d9]" />
      {/* 제목 위치 수정 */}
      <p className="absolute left-[292px] top-[110px] text-base font-bold text-left text-black">
        {project.title}
      </p>
      {/* map이용해서 수정 */}
      <p className="absolute left-[259px] top-[525px] text-xl font-bold text-left text-black">
        #JavaScript
      </p>
      <p className="absolute left-[410px] top-[525px] text-xl font-bold text-left text-black">
        #JavaScript
      </p>
      <p className="absolute left-[561px] top-[525px] text-xl font-bold text-left text-black">
        #JavaScript
      </p>
      <p className="absolute left-[841px] top-[191px] text-[32px] font-bold text-left text-black">
        {project.title}
      </p>
      <p className="absolute left-[841px] top-[243px] text-2xl text-left text-black w-80 break-words whitespace-pre-wrap">
        {project.description}
      </p>
      <p className="absolute left-[841px] top-[307px] text-2xl font-bold text-left text-black">
        역할
      </p>
      <p className="absolute left-[841px] top-[432px] text-xl text-left text-black">
        개인 포트폴리오 웹사이트
      </p>
      <p className="absolute left-[841px] top-[395px] text-2xl font-bold text-left text-black">
        성과
      </p>
      <p className="absolute left-[841px] top-[344px] text-xl text-left text-black">
        개인 포트폴리오 웹사이트
      </p>

      {project.github && (
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          GitHub
        </Link>
      )}
      {project.demo && (
        <Link
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Demo
        </Link>
      )}
    </>
  );
}
