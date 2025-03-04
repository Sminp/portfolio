import ProjectBox from "./ProjectBox";
import ProjectIntro from "./ProjectIntro";

export default function Projects() {
  return (
    <>
      <section id="project-intro">
        <ProjectIntro />
      </section>
      <section id="project-content">
        <ProjectBox />
      </section>
    </>
  );
}
