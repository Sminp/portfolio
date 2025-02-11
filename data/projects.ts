// data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description: "Next.js와 TypeScript를 활용한 개인 포트폴리오 웹사이트",
    longDescription:
      "반응형 디자인과 모던한 UI/UX를 적용한 개인 포트폴리오 웹사이트입니다. Next.js의 App Router를 활용하여 최적화된 성능을 구현했습니다.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/portfolio.jpg",
    github: "https://github.com/username/portfolio",
    date: "2024-02",
  },
  {
    id: 2,
    title: "OPTT",
    description: "React와 JavaScript로 구현한 OTT 추천 웹사이트",
    longDescription:
      "드래그 앤 드롭 기능과 로컬 스토리지를 활용한 데이터 저장 기능을 갖춘 Todo 애플리케이션입니다.",
    technologies: ["React", "JavaScript", "Redux", "Express"],
    image: "/projects/todo.jpg",
    github: "https://github.com/kny0716/OPTT.git",
    date: "2024-01",
  },
  {
    id: 3,
    title: "Dinary",
    description: "React와 JavaScript를 활용한 감정 일기 요약 웹사이트",
    longDescription:
      "반응형 디자인과 모던한 UI/UX를 적용한 개인 포트폴리오 웹사이트입니다. Next.js의 App Router를 활용하여 최적화된 성능을 구현했습니다.",
    technologies: ["React", "JavaScript", "Styled Components"],
    image: "/projects/portfolio.jpg",
    github: "https://github.com/Sminp/Dinary.git",
    date: "2024-02",
  },
  {
    id: 4,
    title: "UNO Game",
    description: "Pygame 라이브러리리를 활용한 UNO 게임",
    longDescription:
      "반응형 디자인과 모던한 UI/UX를 적용한 개인 포트폴리오 웹사이트입니다. Next.js의 App Router를 활용하여 최적화된 성능을 구현했습니다.",
    technologies: ["Python", "Pygame"],
    image: "/projects/portfolio.jpg",
    github: "https://github.com/Sminp/Softwareengineering.git",
    date: "2024-02",
  },
  {
    id: 5,
    title: "CookIndoor",
    description: "Pygame, OpenCV 라이브러리를 활용한 요리 게임",
    longDescription:
      "드래그 앤 드롭 기능과 로컬 스토리지를 활용한 데이터 저장 기능을 갖춘 Todo 애플리케이션입니다.",
    technologies: ["Python", "Pygame", "OpenCV"],
    image: "/projects/todo.jpg",
    github: "https://github.com/Seeyou2000/OpenSourceProject.git",
    date: "2024-01",
  },

  // ... 추가 프로젝트
];
