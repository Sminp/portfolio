import profileData from "@/data/profile.json";
import useLanguageStore from "@/stores/useLanguageStore";

export default function About() {
  const language = useLanguageStore((state) => state.language);
  const profile = profileData[language];

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="space-y-6">
        <ol className="text-lg text-gray-700 text-center">
          {profile.intro.map((text, idx) => {
            return <li key={idx}>{text}</li>;
          })}
        </ol>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="font-medium w-24">Frontend:</span>
                <span>React, Next.js, TypeScript, JavaScript</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium w-24">Backend:</span>
                <span>Node.js, Express</span>
              </div>
              <div>
                <span className="font-medium w-24">Tool:</span>
                <span>Github, Notion, Figma</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">컴퓨터공학 학사</p>
                <p className="text-gray-600">서울과학기술대학교 (2020.03 -)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
