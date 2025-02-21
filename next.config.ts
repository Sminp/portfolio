const nextConfig = {
  output: "export",
  basePath: "/portfolio", // GitHub Pages에서 올바르게 동작하도록 설정
  images: {
    unoptimized: true, // 정적 사이트에서 이미지 최적화 비활성화
  },
};

export default nextConfig;
