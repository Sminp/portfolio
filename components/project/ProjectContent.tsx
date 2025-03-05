import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  const position = { left: 670, top: 407 }; // 기술 스택 초기 위치 설정

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="w-full h-full flex flex-row items-center ">
            <div className="w-[620px] h-[631px] rounded-l-[20px] bg-[#d9d9d9] overflow-hidden">
              <Image
                width={620}
                height={631}
                src={`${
                  process.env.NODE_ENV === "production" ? "/portfolio" : ""
                }/projects/${project.title}.png`}
                alt={project.title}
              />
            </div>
            <div className="w-50% h-full p-[50px] mb-15">
              <p className=" text-[32px]/8 font-bold text-left text-black">
                {project.title}
              </p>
              <p className=" text-xl/10 text-left text-black">
                {project.date[0]}-{project.date[1] || "진행 중"}
              </p>
              <p className=" text-2xl/10 text-left text-black">
                {project.description}
              </p>
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-2xl/10 font-bold text-left text-black hover:text-blue-800"
                >
                  Github
                </Link>
              )}
              {project.technologies.map((tech, index) => {
                const wordWidth = tech.length * 16 + 30; // 단어 너비 계산

                // 한 줄이 355px을 넘으면 새 줄로
                if (position.left + wordWidth > 670 + 355) {
                  position.left = 670; // 새 줄에서 왼쪽 위치 초기화
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
