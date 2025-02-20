import AboutMe from "./AboutMe";
import SkillsEducation from "./SkillsEducation";
import profileData from "@/data/profile.json";
import useLanguageStore from "@/stores/useLanguageStore";

export default function About() {
  const language = useLanguageStore((state) => state.language);
  const profile = profileData[language];

  return (
    <>
      <AboutMe profile={profile} />
      <SkillsEducation profile={profile} />
    </>
  );
}
