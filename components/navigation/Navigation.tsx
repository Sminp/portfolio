"use client";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative border border-[#f2e6ee] dark:border-[#4d4f78]">
      <div className="hidden lg:flex w-full h-[79px] items-center justify-between px-[100px]">
        <Link href={"#hero"} className="text-2xl font-black text-[#00033d]">
          Somin Park
        </Link>
        <div className="flex gap-x-12">
          {navItems.map((item) => (
            <p key={item.id}>
              <Link
                href={`#${item.id}`}
                className={`${
                  activeSection === item.id
                    ? "text-xl font-bold text-[#4d4f78]"
                    : "text-xl text-[#4d4f78] hover:text-blue-600"
                } transition-colors duration-200`}
              >
                {item.label}
              </Link>
            </p>
          ))}
        </div>
        <div className="flex items-center gap-x-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden w-full">
        <div className="flex items-center justify-between px-6 h-[79px]">
          <Link href={""} className="text-xl font-black text-[#00033d]">
            Somin Park
          </Link>
          <button
            onClick={toggleMenu}
            className="text-[#4d4f78]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[79px] left-0 w-full bg-white border-t border-[#f2e6ee] py-4">
            <div className="flex flex-col items-center gap-y-4">
              {navItems.map((item) => (
                <p key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className={`${
                      activeSection === item.id
                        ? "text-xl font-bold text-[#4d4f78]"
                        : "text-xl text-[#4d4f78] hover:text-blue-600"
                    } transition-colors duration-200`}
                  >
                    {item.label}
                  </Link>
                </p>
              ))}
              <div className="flex items-center gap-x-2 mt-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
