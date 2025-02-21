const nextConfig = {
  output: "export",
  basePath: "/portfolio", // GitHub Pages에서 서브 경로 맞추기
  assetPrefix: "/portfolio", // 정적 파일 경로 수정
  images: {
    unoptimized: true, // Next.js 기본 이미지 최적화 비활성화
  },
};

export default nextConfig;
