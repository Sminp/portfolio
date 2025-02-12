import ProjectCard from "./ProjectCard";
import projectData from "@/data/projects.json";
import { Project } from "@/types";
import useLanguageStore from "@/stores/useLanguageStore";

export default function Projects() {
  const language = useLanguageStore((state) => state.language);
  const projects = projectData[language];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
