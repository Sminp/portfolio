import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useThemeStore from "@/stores/useThemeStore"; // 더 쉬운 방법이 있을거야 수정

interface Profile {
  education: {
    school: string;
    major: string;
    degree: string;
  }[];
}

export default function SkillsEducation({ profile }: { profile: Profile }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const ThemeState = useThemeStore((state) => state);

  return (
    <section
      id="skills-education"
      ref={sectionRef}
      className="min-h-screen w-full relative flex flex-col items-center justify-start py-20"
    >
      {/* gap-[60px] 추가 */}
      <div className="max-w-7xl w-full flex flex-row items-center justify-center gap-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[490px] h-[300px] rounded-[20px] bg-white p-8 shadow-lg"
        >
          <h2 className="text-[32px] font-semibold text-[#00033d] mb-6">
            Skills
          </h2>
          <div className="text-xl text-[#00033d]">
            <p className="mb-2">
              <span className="font-medium">Frontend :</span> React, Next.js,
              TypeScript, JavaScript
            </p>
            <p className="mb-2">
              <span className="font-medium">Backend :</span> Node.js, Express
            </p>
            <p className="mb-2">
              <span className="font-medium">Tool :</span> Github, Notion, Figma
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[490px] h-[300px] rounded-[20px] bg-white p-8 shadow-lg"
        >
          <h2 className="text-[32px] font-semibold text-[#00033d] mb-6">
            Education
          </h2>
          <div className="text-xl text-[#00033d]">
            <p>{profile.education[0].school}</p>
            <p>
              {profile.education[0].major} {profile.education[0].degree}
            </p>
            <p>2020.03 - </p>
          </div>
        </motion.div>
      </div>
      {ThemeState.theme === "light" ? (
        <div className="absolute bottom-0 w-full h-[153px] bg-gradient-to-b from-white to-[#f2e6ee]" />
      ) : (
        <div className="absolute bottom-0 w-full h-[153px] bg-gradient-to-b from-[#1a1a1a] to-[#f2e6ee]" />
      )}
    </section>
  );
}
