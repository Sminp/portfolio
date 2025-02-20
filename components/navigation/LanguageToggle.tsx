"use client";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="언어 변경"
    >
      <p className="text-xl text-left">{language === "ko" ? "EN" : "KR"}</p>
    </motion.button>
  );
}
