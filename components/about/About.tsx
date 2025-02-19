"use client";
import profileData from "@/data/profile.json";
import useLanguageStore from "@/stores/useLanguageStore";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const language = useLanguageStore((state) => state.language);
  const profile = profileData[language];
  const [isVisible, setIsVisible] = useState(false);
  const [activeParagraphIndex, setActiveParagraphIndex] = useState(0);
  const [activeCharIndex, setActiveCharIndex] = useState(0);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // 총 활성화될 목표 글자 수를 저장하는 ref
  const targetCharCountRef = useRef(0);
  // 각 문단의 문자열 길이를 미리 계산
  const paragraphLengths = useRef(profile.intro.map((text) => text.length));
  // 총 문자열 길이
  const totalCharCount = useRef(
    paragraphLengths.current.reduce((acc, len) => acc + len, 0)
  );

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = aboutSectionRef.current;
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const isAboutVisible =
        rect.top < window.innerHeight * 0.1 && rect.bottom > 0;
      setIsVisible(isAboutVisible);

      if (isAboutVisible) {
        const scrollProgress = Math.min(
          Math.max(
            (window.innerHeight - rect.top) / (window.innerHeight * 0.8),
            0
          ),
          1
        );

        targetCharCountRef.current = Math.floor(
          totalCharCount.current * scrollProgress
        );
      } else {
        targetCharCountRef.current = 0;
      }
    };

    const animateText = () => {
      const target = targetCharCountRef.current;

      const currentTotal =
        activeParagraphIndex > 0
          ? paragraphLengths.current
              .slice(0, activeParagraphIndex)
              .reduce((sum, len) => sum + len, 0) + activeCharIndex
          : activeCharIndex;

      if (currentTotal < target) {
        const currentParagraphLength =
          paragraphLengths.current[activeParagraphIndex];

        if (activeCharIndex < currentParagraphLength - 1) {
          setActiveCharIndex((prev) => prev + 1);
        } else if (activeParagraphIndex < profile.intro.length - 1) {
          setActiveParagraphIndex((prev) => prev + 1);
          setActiveCharIndex(0);
        }
      } else if (currentTotal > target) {
        if (activeCharIndex > 0) {
          setActiveCharIndex((prev) => prev - 1);
        } else if (activeParagraphIndex > 0) {
          setActiveParagraphIndex((prev) => prev - 1);
          setActiveCharIndex(
            paragraphLengths.current[activeParagraphIndex - 1] - 1
          );
        }
      }

      animationRef.current = requestAnimationFrame(animateText);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    animationRef.current = requestAnimationFrame(animateText);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [profile.intro, activeParagraphIndex, activeCharIndex]);

  // 텍스트의 각 글자에 색상 적용
  const renderTextWithColorTransition = (
    text: string,
    paragraphIndex: number
  ) => {
    return text.split("").map((char, charIndex) => {
      // 이 문단이 활성화된 문단보다 앞에 있으면 모든 글자가 활성화
      const isActive =
        paragraphIndex < activeParagraphIndex ||
        (paragraphIndex === activeParagraphIndex &&
          charIndex <= activeCharIndex);

      return (
        <span
          key={charIndex}
          className={`transition-colors duration-100 ${
            isActive ? "text-[#00033d]" : "text-gray-400"
          }`}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div
      id="about"
      ref={aboutSectionRef}
      className="w-[1440px] h-[731px] relative overflow-hidden"
    >
      <div className="w-[1040px] h-[531px] absolute left-[200px] top-[100px] rounded-[20px]">
        <div className="w-[800px] h-[197px] absolute left-0 top-0">
          <p className="absolute left-0 top-0 text-5xl font-semibold text-left text-[#00033d]">
            About me
          </p>
          <p className="absolute left-0 top-[73px] text-[32px] text-left">
            {profile.intro.map((text, index) => (
              <span key={index} className="text-[32px] text-left block">
                {renderTextWithColorTransition(text, index)}
              </span>
            ))}
          </p>
        </div>
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
      </div>
    </div>
  );
}
