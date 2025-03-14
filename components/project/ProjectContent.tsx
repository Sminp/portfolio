import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
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
          <div className="w-full h-full flex md:flex-row flex-col items-center">
            <div className="w-[620px] h-[631px] rounded-l-[20px] bg-[#d9d9d9] overflow-hidden flex justify-items-center">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="hover:scale-105 transition-all duration-100 object-fit"
                  width={620}
                  height={631}
                  src={`${
                    process.env.NODE_ENV === "production" ? "/portfolio" : ""
                  }/projects/${project.title}.png`}
                  alt={project.title}
                />
              </Link>
            </div>
            <div className="md:w-1/2 w-full h-full p-[50px] mb-15 overflow-y-auto">
              <p className="text-[32px]/8 font-bold text-left">
                {project.title}
              </p>
              <p className="text-xl/10 text-left">
                {project.date[0]}-{project.date[1]}
              </p>
              <p className="text-2xl/10 text-left">{project.description}</p>
              <div className="mt-4">
                {project.performance.map((content, i) => (
                  <p
                    className="text-xl/8 text-left break-words"
                    key={i}
                    style={{
                      maxWidth: "100%",
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    {i + 1}. {content}
                  </p>
                ))}
              </div>
              {project.github && (
                <div className="mt-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl/10 font-bold text-left hover:text-blue-800"
                  >
                    Github
                  </Link>
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => {
                  return (
                    <span className="text-xl text-left" key={index}>
                      #{tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
