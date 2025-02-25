import useLanguageStore from "@/stores/useLanguageStore";
import profileData from "@/data/profile.json";
import generalData from "@/data/general.json";
import Image from "next/image";

export default function Hero() {
  const language = useLanguageStore((state) => state.language);
  const general = generalData[language];
  const profile = profileData[language];

  return (
    <div className="flex min-h-screen w-screen flex flex-row items-center justify-center">
      <p className="text-6xl font-bold text-left ml-10 -mr-10 mb-10">
        <strong className="bg-gradient-to-r from-[#977DFF] via-[#0033FF] to-[#0600AB] bg-[linear-gradient(-81deg,#977DFF_0%,#0033FF_80%,#0600AB_100%)] bg-clip-text text-transparent">
          {profile.about}
        </strong>
        <br />
        <strong>
          {profile.role}
          {general.greeting}.
        </strong>
      </p>
      <Image
        src={`${
          process.env.NODE_ENV === "production" ? "/portfolio" : ""
        }/hero.png`}
        alt="hero"
        width={288}
        height={288}
        className="object-cover"
      />
    </div>
  );
}
