import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 정적 내보내기 설정
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "", // 개발 환경에서 basePath를 빈 값으로 설정
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio/" : "", // 개발 환경에서 assetPrefix를 빈 값으로 설정
  images: {
    unoptimized: true, // GitHub Pages를 위한 이미지 최적화 비활성화
  },
  trailingSlash: true, // URL 끝에 슬래시 추가 (GitHub Pages와의 호환성 향상)
};

export default nextConfig;
