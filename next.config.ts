import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 정적 사이트로 내보내기 설정
  basePath: "/portfolio", // GitHub Pages에서는 반드시 필요 (레포지토리명과 동일해야 함!)
  assetPrefix: "/portfolio/public", // 정적 리소스 경로 설정
};

export default nextConfig;
