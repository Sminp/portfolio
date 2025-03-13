import AboutMe from "./AboutMe";
import SkillsEducation from "./SkillsEducation";
import profileData from "@/data/profile.json";
import useLanguageStore from "@/stores/useLanguageStore";

export default function About() {
  const language = useLanguageStore((state) => state.language);
  const profile = profileData[language];

  return (
    <>
      <section className="min-h-screen">
        <AboutMe profile={profile} />
      </section>
      <section className="min-h-screen">
        <SkillsEducation profile={profile} />
      </section>
    </>
  );
}
