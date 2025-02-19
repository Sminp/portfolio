// 나중에 분리시키자 수정
import profileData from "@/data/profile.json";
import useLanguageStore from "@/stores/useLanguageStore";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const language = useLanguageStore((state) => state.language);
  const profile = profileData[language];
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
        rect.top < window.innerHeight * 0.7 && rect.bottom > 0;

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
  );
}
