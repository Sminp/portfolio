import AboutMe from "./AboutMe";
import SkillsEducation from "./SkillsEducation";
import profileData from "@/data/profile.json";
import useLanguageStore from "@/stores/useLanguageStore";

export default function About() {
  const language = useLanguageStore((state) => state.language);
  const profile = profileData[language];

  return (
    <>
      <section className="md:min-h-screen min-h-1/2">
        <AboutMe profile={profile} />
      </section>
      <section className="md:min-h-screen min-h-1/2">
        <SkillsEducation profile={profile} />
      </section>
    </>
  );
}
