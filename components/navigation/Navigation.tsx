import { useState, useEffect, useRef } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true); // 스크롤을 올릴 때 네비게이션 표시
      } else {
        setIsVisible(false); // 스크롤을 내릴 때 네비게이션 숨김
      }
      setLastScrollY(window.scrollY);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
      {/* 데스크탑 네비게이션 */}
      <div className="hidden lg:flex h-[79px] items-center justify-between px-[100px]">
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
                    : "text-xl hover:font-bold "
                } transition-all duration-200`}
              >
                {item.label}
              </Link>
            </p>
          ))}
        </div>
        <div className="focus:outline-none flex items-center gap-x-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>

      {/* 모바일 네비게이션 */}
      <div className="lg:hidden" ref={menuRef}>
        <div className="flex items-center justify-between px-6 h-[79px]">
          <Link href={"#hero"} className="text-xl text-[#0033FF] font-black">
            ich bin
          </Link>
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X
                className="transition-transform duration-300 hover:rotate-180"
                size={24}
              />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* 모바일 메뉴 드롭다운 */}
        {isMenuOpen && (
          <div className="absolute top-[79px] left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`${
                    activeSection === item.id
                      ? "text-lg font-bold text-[#0033FF]"
                      : "text-lg text-gray-800 dark:text-gray-200 hover:font-bold"
                  } transition-all duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center gap-x-4 pt-4">
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
