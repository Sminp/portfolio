import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Language } from "@/types";

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "ko",
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "language-storage",
    }
  )
);

export default useLanguageStore;
