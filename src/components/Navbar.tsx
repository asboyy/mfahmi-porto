import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LucideIcon from "./LucideIcon";
import { TranslationSchema } from "../translations";

// Properti untuk komponen Navbar
interface NavbarProps {
  locale: "en" | "id";
  onLocaleChange: (newLocale: "en" | "id") => void;
  translations: TranslationSchema["nav"];
}

export default function Navbar({ locale, onLocaleChange, translations }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Daftar item menu, sekarang berupa path halaman sungguhan
  const menuItems = [
    { label: translations.home, path: "/" },
    { label: translations.about, path: "/about" },
    { label: translations.skills, path: "/skills" },
    { label: translations.projects, path: "/projects" },
    { label: translations.contact, path: "/contact" },
  ];

  const handleItemClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-y-4 border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleItemClick("/")}
            className="text-2xl font-black tracking-wider text-black hover:scale-105 transition-transform duration-100 flex items-center gap-1 cursor-pointer"
          >
            FAHMI<span className="text-blue-600 font-extrabold">.</span>
          </button>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleItemClick(item.path)}
                className={`px-3.5 py-1.5 text-sm font-bold border-2 transition-all duration-150 cursor-pointer ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-x-[1px] -translate-y-[1px]"
                    : "text-black border-transparent hover:border-black hover:bg-gray-100 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => onLocaleChange(locale === "en" ? "id" : "en")}
              className="ml-2 px-3 py-1.5 bg-yellow-300 text-black border-2 border-black font-extrabold text-xs rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-yellow-400 transition-all flex items-center gap-1.5 cursor-pointer uppercase"
            >
              <span>🌐 {locale === "en" ? "ID" : "EN"}</span>
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => onLocaleChange(locale === "en" ? "id" : "en")}
              className="px-2.5 py-1.5 bg-yellow-300 text-black border-2 border-black font-extrabold text-xs rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-yellow-400 transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>{locale === "en" ? "ID" : "EN"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-gray-100 transition-all rounded"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <LucideIcon name="X" size={24} className="text-black" />
              ) : (
                <LucideIcon name="Menu" size={24} className="text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t-4 border-black bg-white p-4 space-y-2 animate-fadeIn">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleItemClick(item.path)}
              className={`w-full text-left px-4 py-3 text-lg font-black border-2 border-black rounded transition-all flex justify-between items-center cursor-pointer ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-y-[-2px] translate-x-[-2px]"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              <span>{item.label}</span>
              <LucideIcon
                name="ArrowRight"
                size={18}
                className={location.pathname === item.path ? "text-white" : "text-black"}
              />
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}