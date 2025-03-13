export type Theme = "light" | "dark";
export type Language = "ko" | "en";

export interface General {
  ko: {
    greeting: string;
  };
  en: {
    greeting: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  performance: string[];
  technologies: string[];
  image: string;
  github?: string;
  date: string[];
}

export interface Projects {
  ko: Project[];
  en: Project[];
}

export interface Profile {
  contact: {
    email: string;
    blog: string;
    github: string;
  };
  skills: string[];
  ko: {
    name: string;
    role: string;
    about: string;
    intro: string[];
    education: object[];
  };
  en: {
    name: string;
    role: string;
    about: string;
    intro: string[];
    education: object[];
  };
}
