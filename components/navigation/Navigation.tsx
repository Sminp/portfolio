import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true); // 스크롤을 올릴 때 네비게이션 표시
      } else {
        setIsVisible(false); // 스크롤을 내릴 때 네비게이션 숨김
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white/75 backdrop-blur-sm dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="lg:flex h-[79px] items-center justify-between px-[100px]">
        <Link href={"#hero"} className="text-2xl text-[#0033FF] font-black">
          Somin Park
        </Link>
        <div className="flex gap-x-12">
          {navItems.map((item) => (
            <p key={item.id}>
              <Link
                href={`#${item.id}`}
                className={`${
                  activeSection === item.id
                    ? "text-xl font-bold text-[var(--title-color)]"
                    : "text-xl hover:font-bold"
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
      <div className="lg:hidden w-screen">
        <div className="flex items-center justify-between px-6 h-[79px]">
          <Link href={"#hero"} className="text-xl text-[#0033FF] font-black">
            Somin Park
          </Link>
          <button onClick={toggleMenu} className="" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[79px] left-0 w-full bg-white dark:bg-gray-900 border-t border-[#f2e6ee] dark:border-gray-700 py-4 transition-colors duration-300">
            <div className="flex flex-col items-center gap-y-4">
              {navItems.map((item) => (
                <p key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className={`${
                      activeSection === item.id
                        ? "text-xl font-bold"
                        : "text-xl hover:text-blue-600"
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
