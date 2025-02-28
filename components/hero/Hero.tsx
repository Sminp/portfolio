import { useState, useEffect } from "react";
import Image from "next/image";
import ModelViewer from "./ModelViewer";
import generalData from "@/data/general.json";
import profileData from "@/data/profile.json";
import useLanguageStore from "@/stores/useLanguageStore";

export default function Hero() {
  const language = useLanguageStore((state) => state.language);
  const general = generalData[language];
  const profile = profileData[language];
  const [isModelViewerAvailable, setIsModelViewerAvailable] = useState(true);

  useEffect(() => {
    try {
      // ModelViewer가 정상적으로 렌더링될 수 있는지 확인
      // 브라우저 환경에서 오류가 발생하면 catch로 이동
      document.createElement("model-viewer");
    } catch (error) {
      console.error("ModelViewer is not supported:", error);
      setIsModelViewerAvailable(false);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex min-h-screen w-screen flex flex-row items-center justify-center">
        <p className="text-6xl font-bold text-left mb-10 -mr-10">
          <strong className="bg-gradient-to-r from-[#977DFF] via-[#0033FF] to-[#0600AB] bg-[linear-gradient(-81deg,#977DFF_0%,#0033FF_80%,#0600AB_100%)] bg-clip-text text-transparent">
            {profile.about}
          </strong>
          <br />
          <strong>
            {profile.role}
            {general.greeting}.
          </strong>
        </p>
        {isModelViewerAvailable ? (
          <ModelViewer />
        ) : (
          <Image
            src={`${
              process.env.NODE_ENV === "production" ? "/portfolio" : ""
            }/hero.png`}
            alt="hero"
            width={288}
            height={288}
            className="object-cover"
          />
        )}
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-0 flex flex-col items-center">
        <p className="text-lg text-black dark:text-white mb-2">Scroll</p>
        <div className="w-[1px] h-[70px] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black animate-scroll" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollAnimation {
          0% {
            transform: translateY(-70px);
            opacity: 1;
          }
          100% {
            transform: translateY(70px);
            opacity: 1;
          }
        }
        .animate-scroll {
          height: 60px;
          width: 100%;
          background: black;
          animation: scrollAnimation 1.5s infinite linear;
        }
      `}</style>
    </div>
  );
}
