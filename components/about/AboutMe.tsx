import { useEffect, useState, useRef } from "react";

interface Profile {
  intro: string[];
}

export default function AboutMe({ profile }: { profile: Profile }) {
  const [currentCharCount, setCurrentCharCount] = useState(0);
  const aboutSectionRef = useRef<HTMLDivElement>(null);

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
      // 요소가 화면에 보이는지 확인
      const isAboutVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isAboutVisible) {
        const viewportHeight = window.innerHeight;
        const progressRatio = 1 - rect.top / viewportHeight;
        const progress = Math.max(0, Math.min(1, progressRatio));

        // 보여줄 글자 수 계산
        const visibleChars = Math.floor(totalCharCount.current * progress);
        setCurrentCharCount(visibleChars);
      } else {
        setCurrentCharCount(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 로드 시 실행

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [profile.intro]);

  // 주어진 문단 인덱스와 글자 인덱스까지의 총 글자 수 계산
  const getTotalCharsUpTo = (paragraphIndex: number, charIndex: number) => {
    let total = 0;
    for (let i = 0; i < paragraphIndex; i++) {
      total += paragraphLengths.current[i];
    }
    return total + charIndex;
  };

  // 텍스트의 각 글자에 색상 적용
  const renderTextWithColorTransition = (
    text: string,
    paragraphIndex: number
  ) => {
    return text.split("").map((char, charIndex) => {
      const totalCharIndex = getTotalCharsUpTo(paragraphIndex, charIndex);
      const isActive = totalCharIndex < currentCharCount;

      return (
        <span
          key={charIndex}
          className={`transition-colors duration-100 ${
            isActive ? "" : "text-gray-400"
          }`}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          ref={aboutSectionRef}
          className="text-[64px] font-semibold text-center mb-[30px]"
        >
          About me
        </h2>
        <div className="text-[32px] text-center">
          {profile.intro.map((text, index) => (
            <p key={index} className="block mb-6">
              {renderTextWithColorTransition(text, index)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

// section 밑으로 가도 검정 글자 되도록 수정
