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
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {general.greeting} 👋
          <br />
          <span className="text-blue-600 text-7xl">
            {profile.about}
            <br />
            {profile.role}
          </span>
          입니다
        </h1>
        <br />
        <Link
          href="#portfolio"
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          {general.projectBtn}
        </Link>
      </div>
    </div>
  );
}
