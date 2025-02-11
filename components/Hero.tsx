export default function Hero() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          안녕하세요 👋
          <br />
          <span className="text-blue-600 text-7xl">
            공감과 배려를 중요시 하는
            <br /> 프론트 엔드 개발자
          </span>
          입니다
        </h1>
        {/* <p className="text-xl text-gray-600 mb-8"></p> */}
        <br />
        <a
          href="#portfolio"
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          제가 만든 프로젝트예요
        </a>
      </div>
    </div>
  );
}
