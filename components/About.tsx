import profileData from "@/data/profile.json";
import useLanguageStore from "@/stores/useLanguageStore";

export default function About() {
  const language = useLanguageStore((state) => state.language);
  const profile = profileData[language];

  return (
    <>
      <div className="w-[1440px] h-[731px] relative overflow-hidden bg-white">
        <div className="w-[1040px] h-[531px] absolute left-[200px] top-[100px] rounded-[20px]">
          <p className="absolute left-[430px] top-0 text-[40px] font-semibold text-left text-[#00033d]">
            About me
          </p>
          <p className="absolute left-[191px] top-[62px] text-[32px] text-left">
            {profile.intro.map((text, index) => {
              return (
                <span
                  key={index}
                  className="text-[32px] text-left text-[#00033d]"
                >
                  {text} <br />
                </span>
              );
            })}
          </p>
          <div className="w-[490px] h-[265px] absolute left-[15px] top-[251px] rounded-[20px]">
            <div className="w-[430px] h-[166px]">
              <p className="absolute left-[15px] top-[15px] text-[32px] font-semibold text-left text-[#00033d]">
                Skills
              </p>
              <p className="absolute left-[15px] top-[67px] text-xl text-left text-[#00033d]">
                <span className="text-xl text-left text-[#00033d]">
                  Frontend : React, Next.js, TypeScript, JavaScript
                </span>
                <br />
                <span className="text-xl text-left text-[#00033d]">
                  Backend:Node.js, Express
                </span>
                <br />
                <span className="text-xl text-left text-[#00033d]">
                  Tool:Github, Notion, Figma
                </span>
              </p>
            </div>
          </div>
          <div className="w-[490px] h-[265px] absolute left-[534px] top-[251px] rounded-[20px]">
            <div className="w-[264px] h-32">
              <p className="absolute left-[15px] top-[15px] text-[32px] font-semibold text-left text-[#00033d]">
                Education
              </p>
              <p className="absolute left-[15px] top-[67px] text-xl text-left text-[#00033d]">
                <span className="text-xl text-left text-[#00033d]">
                  컴퓨터공학 학사
                </span>
                <br />
                <span className="text-xl text-left text-[#00033d]">
                  서울과학기술대학교 (2020.03 -)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
