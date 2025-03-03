import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Theme } from "@/types";

export interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => {
        // 테마 변경 시 전체 HTML 요소에 클래스를 동기화
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        set({ theme });
      },
    }),
    {
      name: "theme-storage",
      // 초기 로딩 시 시스템 테마 설정 반영
      onRehydrateStorage: () => (state) => {
        if (state) {
          // 저장된 설정이 있으면 해당 설정 적용
          state.setTheme(state.theme);
        } else {
          // 저장된 설정이 없으면 시스템 설정 확인
          const systemPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;
          const theme = systemPrefersDark ? "dark" : "light";

          if (theme === "dark") {
            document.documentElement.classList.add("dark");
          }
        }
      },
    }
  )
);
