import { useEffect, useState, useRef } from "react";

interface Profile {
  intro: string[];
}

export default function AboutMe({ profile }: { profile: Profile }) {
  const [currentCharCount, setCurrentCharCount] = useState(0);

  // 각 문단의 문자열 길이를 미리 계산
  const paragraphLengths = useRef(profile.intro.map((text) => text.length));
  // 총 문자열 길이
  const totalCharCount = useRef(
    paragraphLengths.current.reduce((acc, len) => acc + len, 0)
  );

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-me");
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 1. bottom이 화면에 들어오기 전까지는 모든 글자가 회색
      if (rect.bottom >= viewportHeight) {
        setCurrentCharCount(0);
        return;
      }

      // 2. bottom이 화면 bottom의 50% 위치에 도달하면 모든 글자가 검정색
      const bottomThreshold = viewportHeight * 0.5;
      if (rect.bottom <= bottomThreshold) {
        setCurrentCharCount(totalCharCount.current);
        return;
      }

      // 그 사이에 있을 때는 스크롤 위치에 따라 글자 색상 점진적 변경
      // bottom이 화면에 보이기 시작한 시점부터 하단 threshold까지의 진행률 계산
      const startPosition = viewportHeight; // bottom이 화면에 보이기 시작하는 위치
      const endPosition = bottomThreshold; // 모든 글자가 검정색이 되는 위치

      const totalScrollDistance = startPosition - endPosition;
      const currentScrollPosition = rect.bottom;

      const progressRatio = Math.max(
        0,
        Math.min(
          1,
          (startPosition - currentScrollPosition) / totalScrollDistance
        )
      );

      // 보여줄 글자 수 계산
      const visibleChars = Math.floor(totalCharCount.current * progressRatio);
      setCurrentCharCount(visibleChars);
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
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl text-[var(--title-color)] font-semibold text-center m-6">
        About me
      </h2>
      <div id="about-me" className="text-4xl text-center">
        {profile.intro.map((text, index) => (
          <p key={index} className="block m-4">
            {renderTextWithColorTransition(text, index)}
          </p>
        ))}
      </div>
    </div>
  );
}
