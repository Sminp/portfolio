"use client";

import { useThemeStore } from "@/stores/useThemeStore";
import { useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore();

  useEffect(() => {
    // HTML root element에 dark 클래스 토글
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return <>{children}</>;
}
