import useLanguageStore from "@/stores/useLanguageStore";
import profileData from "@/data/profile.json";
import generalData from "@/data/general.json";
import Image from "next/image";
import ModelViewer from "./ModelViewer";
import { useState, useEffect } from "react";

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
    <div className="flex min-h-screen w-screen flex flex-row items-center justify-center">
      <p className="text-6xl font-bold text-left ml-10 -mr-60 mb-10">
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
  );
}
