import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/navigation/Providers";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
