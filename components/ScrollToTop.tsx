import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRelativeToContact, setIsRelativeToContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const contactBox = document.getElementById("contact-box");

      // 300px 이상 스크롤되면 버튼 표시
      setIsVisible(scrollY > 300);

      if (contactBox) {
        const contactBoxRect = contactBox.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // contact-box가 화면에 보이기 시작하면 relative 포지션으로 변경
        if (contactBoxRect.top < windowHeight) {
          setIsRelativeToContact(true);
        } else {
          setIsRelativeToContact(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#0033FF] text-white p-3 rounded-full shadow-lg hover:bg-[#0600AB] transition-colors z-50"
          aria-label="맨 위로 이동"
          style={{
            position: isRelativeToContact ? "absolute" : "fixed",
            bottom: "2rem",
            right: "2rem",
            ...(isRelativeToContact && {
              bottom: "26rem",
              position: "absolute",
            }),
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
