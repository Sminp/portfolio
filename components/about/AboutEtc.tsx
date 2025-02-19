// 나중에 분리시키자 수정
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = aboutSectionRef.current;
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const isAboutVisible =
        rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
      setIsVisible(isAboutVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[490px] h-[265px] absolute left-0 top-[251px] rounded-[20px] bg-white"
        style={{
          boxShadow:
            "0px 84px 24px 0 rgba(0,0,0,0), 0px 54px 22px 0 rgba(0,0,0,0.01), 0px 30px 18px 0 rgba(0,0,0,0.05), 0px 13px 13px 0 rgba(0,0,0,0.09), 0px 3px 7px 0 rgba(0,0,0,0.1)",
        }}
      >
        <div className="w-[430px] h-[166px]">
          <p className="absolute left-[15px] text-[32px] top-[15px] font-semibold text-left text-[#00033d]">
            Skills
          </p>
          <p className="absolute left-[15px] top-[67px] text-xl text-left text-[#00033d]">
            Frontend : React, Next.js, TypeScript, JavaScript
            <br />
            Backend: Node.js, Express
            <br />
            Tool: Github, Notion, Figma
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[490px] h-[265px] absolute left-[550px] top-[251px] rounded-[20px] bg-white"
        style={{
          boxShadow:
            "0px 84px 24px 0 rgba(0,0,0,0), 0px 54px 22px 0 rgba(0,0,0,0.01), 0px 30px 18px 0 rgba(0,0,0,0.05), 0px 13px 13px 0 rgba(0,0,0,0.09), 0px 3px 7px 0 rgba(0,0,0,0.1)",
        }}
      >
        <div className="w-[264px] h-32">
          <p className="absolute left-[15px] top-[15px] text-[32px] font-semibold text-left text-[#00033d]">
            Education
          </p>
          <p className="absolute left-[15px] top-[67px] text-xl text-left text-[#00033d]">
            <span className="text-xl text-left text-[#00033d]">
              컴퓨터공학 학사
            </span>
            <br />
            <span className="text-xl text-left text-[#00033d]"></span>
          </p>
        </div>
      </motion.div>
    </>
  );
}
