import { useEffect, useState, useRef } from "react";

interface Profile {
  intro: string[];
}

export default function AboutMe({ profile }: { profile: Profile }) {
  const [currentCharCount, setCurrentCharCount] = useState(0);

  // Calculate paragraph lengths and total character count when profile changes
  const paragraphLengths = useRef<number[]>([]);
  const totalCharCount = useRef<number>(0);

  // Update the refs when profile changes
  useEffect(() => {
    paragraphLengths.current = profile.intro.map((text) => text.length);
    totalCharCount.current = paragraphLengths.current.reduce(
      (acc, len) => acc + len,
      0
    );
  }, [profile.intro]);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-me");
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 1. All text is gray before bottom enters viewport
      if (rect.bottom >= viewportHeight) {
        setCurrentCharCount(0);
        return;
      }

      // 2. All text is black when bottom reaches 50% of viewport height
      const bottomThreshold = viewportHeight * 0.5;
      if (rect.bottom <= bottomThreshold) {
        setCurrentCharCount(totalCharCount.current);
        return;
      }

      // Progressive change based on scroll position between these points
      const startPosition = viewportHeight; // When bottom enters viewport
      const endPosition = bottomThreshold; // When all text should be black

      const totalScrollDistance = startPosition - endPosition;
      const currentScrollPosition = rect.bottom;

      const progressRatio = Math.max(
        0,
        Math.min(
          1,
          (startPosition - currentScrollPosition) / totalScrollDistance
        )
      );

      // Calculate visible characters based on progress
      const visibleChars = Math.floor(totalCharCount.current * progressRatio);
      setCurrentCharCount(visibleChars);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate total characters up to a given position
  const getTotalCharsUpTo = (paragraphIndex: number, charIndex: number) => {
    let total = 0;
    for (let i = 0; i < paragraphIndex; i++) {
      total += paragraphLengths.current[i];
    }
    return total + charIndex;
  };

  // Render text with color transition
  const renderTextWithColorTransition = (
    text: string,
    paragraphIndex: number
  ) => {
    return text.split("").map((char, charIndex) => {
      const totalCharIndex = getTotalCharsUpTo(paragraphIndex, charIndex);
      const isActive = totalCharIndex < currentCharCount;

      return (
        <span
          key={`${paragraphIndex}-${charIndex}`}
          className={`transition-colors duration-100 ${
            isActive ? "text-black" : "text-gray-400"
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
