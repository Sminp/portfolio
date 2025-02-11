export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="space-y-6">
        <ol className="text-lg text-gray-700 text-center">
          <li>모든 프로젝트의 UX/UI를 중요하게 생각해요</li>
          <li>연령층, 국적에 관계 없이 누구나 친해질 수 있어요</li>
          <li>애자일 등 프로덕트가 생산되는 과정을 중요시 여겨요</li>
        </ol>
        {/* <p className="text-lg text-gray-700">
          안녕하세요! 저는 웹 개발에 열정을 가진 개발자입니다. 사용자 경험을
          개선하고 효율적인 코드를 작성하는 것에 관심이 많습니다.
        </p> */}

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
