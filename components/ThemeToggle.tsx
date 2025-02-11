// components/ThemeToggle.tsx
"use client";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="테마 변경"
    >
      {theme === "light" ? "🌞" : "🌙"}
    </motion.button>
  );
}
