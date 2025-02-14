import Link from "next/link";
import useLanguageStore from "@/stores/useLanguageStore";
import profileData from "@/data/profile.json";
import generalData from "@/data/general.json";

export default function Hero() {
  const language = useLanguageStore((state) => state.language);
  const general = generalData[language];
  const profile = profileData[language];

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <p className="text-[64px] text-left">
          <span className="text-[64px] text-left">{profile.about}</span>
          <span className="text-[64px] text-left text-[#00033d]"> </span>
          <br />
          <span className="text-[64px] text-left text-[#00033d]">
            {profile.role}입니다.
          </span>
        </p>
        <br />
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
