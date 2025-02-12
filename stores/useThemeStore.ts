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
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme-storage",
    }
  )
);

export default useThemeStore;
