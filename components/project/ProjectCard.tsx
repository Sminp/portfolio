import Link from "next/link";
import { Project } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const position = { left: 681, top: 383 }; // 기술 스택 초기 위치 설정

  return (
    <div className="w-[803px] h-[355px]">
      {/* 썸네일 수정 */}
      <div className="w-[502px] h-[350px] absolute left-[118.5px] top-[92.5px] rounded-[20px] bg-[#d9d9d9] overflow-hidden">
        <Image
          width={502}
          height={350}
          src={`/projects/${project.title}.png`}
          alt={project.title}
        />
      </div>
      <div className="w-[241px] h-[355px]">
        <p className="absolute left-[681px] top-[88px] text-[32px] font-bold text-left text-black">
          {project.title}
        </p>
        <p className="absolute left-[681px] top-[149px] text-xl text-left text-black">
          {project.date[0]}-{project.date[1] || "진행 중"}
        </p>
        <p className="absolute left-[681px] top-[200px] text-2xl text-left text-black">
          {project.description}
        </p>
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[681px] top-[329px] text-2xl font-bold text-left text-black hover:text-blue-800"
          >
            Github
          </Link>
        )}
        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[801px] top-[329px] text-2xl font-bold text-left text-black hover:text-blue-800"
          >
            Demo
          </Link>
        )}
        {project.technologies.map((tech, index) => {
          const wordWidth = tech.length * 16 + 30; // 단어 너비 계산

          // 한 줄이 355px을 넘으면 새 줄로
          if (position.left + wordWidth > 681 + 355) {
            position.left = 681; // 새 줄에서 왼쪽 위치 초기화
            position.top += 30; // top 20px 증가
          }

          const currentLeft = position.left; // 현재 단어의 위치
          position.left += wordWidth; // 다음 단어의 왼쪽 위치로 이동

          return (
            <p
              className="absolute text-xl text-left text-black"
              key={index}
              style={{
                left: currentLeft, // 현재 단어 위치
                top: position.top,
                whiteSpace: "nowrap",
              }}
            >
              #{tech}
            </p>
          );
        })}
      </div>
    </div>
  );
}
