import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectIntroProps {
  onComplete: () => void; // 애니메이션 완료 후 호출될 콜백
}

/**
 * 프로젝트 소개 섹션 컴포넌트
 *
 * 화면 중앙에 "Projects" 타이틀과 세로선을 표시하고,
 * 스크롤에 따라 선이 확장되며 박스가 아래로 이동하여 다음 섹션으로 전환
 *
 * @param onComplete 애니메이션 완료 후 두 번째 섹션으로 전환 시 호출되는 콜백 함수
 */
export default function ProjectIntro({ onComplete }: ProjectIntroProps) {
  // 섹션 ref 설정
  const sectionRef = useRef<HTMLDivElement>(null);

  // 애니메이션 상태 관리
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  console.log(animationProgress);

  // 스크롤 위치에 따른 애니메이션 진행도 계산
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // 스크롤 위치에 따른 선의 너비 변환
  const lineWidth = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9], // 스크롤 진행도
    ["1px", "1px", "1240px"] // 해당 진행도에서의 너비
  );

  // 스크롤 위치에 따른 선의 높이 변환
  const lineHeight = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    ["431px", "531px", "631px"] // 높이는 일정하게 유지
  );

  // 스크롤 위치에 따른 선의 투명도 변환
  const lineOpacity = useTransform(
    scrollYProgress,
    [0, 0.9],
    [1.0, 0] // 확장될 때 투명도 감소
  );

  // 스크롤 위치에 따른 박스의 Y축 이동 (아래로 이동)
  const boxY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 0.9],
    ["0%", "0%", "50%", "100%"] // 스크롤이 진행됨에 따라 박스가 아래로 이동
  );

  // 스크롤 위치에 따른 애니메이션 진행 상태 업데이트
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setAnimationProgress(value);

      // 애니메이션이 80% 이상 진행되었을 때 완료 상태로 설정하고 콜백 호출
      if (value >= 0.8 && !isAnimationComplete) {
        setIsAnimationComplete(true);
        onComplete();
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, onComplete, isAnimationComplete]);

  return (
    <div
      ref={sectionRef}
      className="h-screen w-screen flex flex-col items-center justify-center relative"
      data-testid="project-intro-section"
    >
      {/* 프로젝트 타이틀 */}
      <h2
        className="text-10xl md:text-5xl font-bold relative z-10 mb-8"
        data-testid="project-title"
      >
        Projects
      </h2>
      {/* 중앙 세로선 컨테이너 (스크롤에 따라 아래로 이동) */}
      <motion.div
        className="absolute"
        style={{
          top: "0%",
          left: "50%",
          x: "-50%",
          y: boxY, // 스크롤에 따라 아래로 이동
          width: "1240px",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        data-testid="box-container"
      >
        {/* 세로선/박스 (스크롤에 따라 확장) */}
        <motion.div
          className="rounded-[20px] bg-black dark:bg-white"
          style={{
            width: lineWidth,
            height: lineHeight,
            opacity: lineOpacity,
            transformOrigin: "center",
          }}
          data-testid="expanding-line"
        />
      </motion.div>
    </div>
  );
}
