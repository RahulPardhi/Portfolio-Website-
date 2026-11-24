import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { DateTime } from './components/DateTime';
import { ModeToggle } from './components/ModeToggle';
import { Hero } from './components/Hero';
import { TabNavigation } from './components/TabNavigation';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Footer } from './components/Footer';

import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { EducationPage } from './pages/EducationPage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <div className="relative min-h-dvh flex flex-col bg-secondary-background text-foreground selection:bg-primary/20">
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Top Header / Status bar */}
      <div className="relative w-full pt-4 px-4 max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <DateTime />
        </div>
        <div className="fixed top-4 right-4 z-50">
          <ModeToggle />
        </div>
      </div>

      {/* Hero Intro Section */}
      <Hero />

      {/* Tab Navigation Menu */}
      <div className="mx-auto w-[95%] md:max-w-3xl">
        <TabNavigation />
      </div>

      {/* Main Page Content */}
      <main className="mx-auto grow flex max-w-[95%] md:max-w-3xl my-2 w-full">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
