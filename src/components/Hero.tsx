import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";
import { TranslationSchema } from "../translations";

interface HeroProps {
  introComplete: boolean;
  onIntroComplete: () => void;
  translations: TranslationSchema["hero"];
}

// Koleksi salam "Hi, I'm Fahmi" dalam 10 bahasa berbeda
const greetings = [
  "Hi, I'm Fahmi",
  "Hai, saya Fahmi",
  "Hola, soy Fahmi",
  "Salut, je suis Fahmi",
  "Hallo, ich bin Fahmi",
  "Olá, eu sou Fahmi",
  "こんにちは、ファーミです",
  "안녕하세요, 파미입니다",
  "你好，我是 Fahmi",
  "مرحبًا، أنا فهمي",
];

export default function Hero({
  introComplete,
  onIntroComplete,
  translations,
}: HeroProps) {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const hasCompletedRef = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (introComplete) return;

    if (greetingIndex >= greetings.length - 1) {
      const doneTimer = setTimeout(() => {
        if (!hasCompletedRef.current) {
          hasCompletedRef.current = true;
          onIntroComplete();
        }
      }, 1200);
      return () => clearTimeout(doneTimer);
    }

    const timer = setTimeout(() => {
      setGreetingIndex((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [greetingIndex, introComplete, onIntroComplete]);

  return (
    <section
      className={
        introComplete
          ? "min-h-[calc(100vh-4rem)] w-full flex flex-col items-center justify-center text-center px-4 py-12"
          : "h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      }
    >
      {/* FASE 1: Animasi salam 10 bahasa */}
      {!introComplete && (
        <div className="flex items-center justify-center w-full h-full px-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={greetingIndex}
              className="text-4xl sm:text-6xl font-black text-black tracking-tight text-center font-poppins"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {greetings[greetingIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      )}

      {/* FASE 2: Konten Beranda (foto, teks, tombol CTA) */}
      {introComplete && (
        <>
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.6,
            }}
          >
            <div className="bg-white p-3 border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center overflow-hidden">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt="Fahmi's portrait"
                className="w-full h-full object-cover rounded-xl border-2 border-black"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            className="max-w-2xl px-2 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-3 font-poppins">
              Hi, I'm Fahmi
            </h1>
            <p className="text-xl sm:text-2xl font-extrabold text-black tracking-tight leading-relaxed">
              {translations.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="w-full max-w-md flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <button
              onClick={() => navigate("/projects")}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-black tracking-wider border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150 cursor-pointer"
            >
              {translations.viewProjects}
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-8 py-4 bg-[#2563eb] text-white text-lg font-black tracking-wider border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150 cursor-pointer"
            >
              {translations.contactMe}
            </button>
          </motion.div>
        </>
      )}
    </section>
  );
}
