// components/LanguageToggle.tsx
"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="언어 변경"
    >
      {language === "ko" ? "🇰🇷" : "🇺🇸"}
    </motion.button>
  );
}
