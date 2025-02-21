import Link from "next/link";
import useLanguageStore from "@/stores/useLanguageStore";
import profileData from "@/data/profile.json";
import generalData from "@/data/general.json";
import Image from "next/image";
import heroImg from "@/public/hero.png";

export default function Hero() {
  const language = useLanguageStore((state) => state.language);
  const general = generalData[language];
  const profile = profileData[language];

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <div className="w-[959.08px] h-[312.08px]">
          <p className="absolute left-[284px] top-[273px] text-[64px] font-bold text-left">
            <span className="text-[64px] font-bold text-left bg-gradient-to-r from-[#977DFF] via-[#0033FF] to-[#0600AB] bg-[linear-gradient(-81deg,#977DFF_0%,#0033FF_80%,#0600AB_100%)] bg-clip-text text-transparent">
              {profile.about}
            </span>
            <br />
            <span className="text-[64px] font-bold text-left">
              {profile.role}
              {general.greeting}
            </span>
          </p>
          <Image
            src={`${
              process.env.NODE_ENV === "production" ? "/portfolio" : ""
            }${heroImg}`}
            alt="hero"
            width={280}
            height={280}
            className="absolute left-[970.58px] top-[243.67px] object-cover"
          />
        </div>
        <Link
          href="#projects"
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          {general.projectBtn}
        </Link>
      </div>
    </div>
  );
}
