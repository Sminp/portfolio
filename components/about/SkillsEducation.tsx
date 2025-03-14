import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Profile {
  education: {
    school: string;
    major: string;
    degree: string;
    date: string[];
  }[];
}

export default function SkillsEducation({ profile }: { profile: Profile }) {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { once: false, amount: 0.4 });
  const { school, major, degree, date } = profile.education[0]; // 대학교만 표시

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      {/* gap-[50px] 추가 */}
      <div
        ref={divRef}
        className="max-w-7xl w-full flex md:flex-row flex-col items-center justify-center gap-[50px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[595px] h-[400px] rounded-[20px] bg-white shadow-lg p-[50px]"
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
          className="w-[595px] h-[400px] rounded-[20px] bg-white shadow-lg p-[50px]"
        >
          <h2 className="text-[32px] font-semibold text-[#00033d] mb-6">
            Education
          </h2>
          <div className="text-xl text-[#00033d]">
            <p>{school}</p>
            <p>
              {major} {degree}
            </p>
            <p>
              {date[0]} - {date[1] === "진행 중" ? "" : date[1]}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
