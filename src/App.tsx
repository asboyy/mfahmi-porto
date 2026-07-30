/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsList from "./components/SkillsList";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import ProjectModal from "./components/ProjectModal";
import { Project } from "./types";
import { translations } from "./translations";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // Menandai apakah animasi salam 10 bahasa di halaman Home sudah selesai
  const [introComplete, setIntroComplete] = useState(false);
  const location = useLocation();

  const [locale, setLocale] = useState<"en" | "id">(() => {
    const saved = localStorage.getItem("fahmi_portfolio_locale");
    if (saved === "en" || saved === "id") return saved;
    return "id";
  });

  const handleLocaleChange = (newLocale: "en" | "id") => {
    setLocale(newLocale);
    localStorage.setItem("fahmi_portfolio_locale", newLocale);
  };

  const t = translations[locale];

  // Navbar disembunyikan selama di halaman Home DAN animasi salam belum selesai
  const hideNavbar = location.pathname === "/" && !introComplete;

  return (
    <div className="min-h-screen text-black selection:bg-yellow-300 selection:text-black">
      {!hideNavbar && (
        <Navbar
          locale={locale}
          onLocaleChange={handleLocaleChange}
          translations={t.nav}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Hero
              introComplete={introComplete}
              onIntroComplete={() => setIntroComplete(true)}
              translations={t.hero}
            />
          }
        />
        <Route path="/about" element={<About translations={t.about} />} />
        <Route
          path="/skills"
          element={<SkillsList translations={t.skills} />}
        />
        <Route
          path="/projects"
          element={
            <ProjectsSection
              onSelectProject={(project) => setSelectedProject(project)}
              translations={t.projects}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactSection
              translations={t.contact}
              footerText={t.footer.text}
            />
          }
        />
      </Routes>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        translations={t.projects}
      />
    </div>
  );
}
