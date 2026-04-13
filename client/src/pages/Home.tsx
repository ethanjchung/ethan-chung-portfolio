// ============================================================
// Home Page — Obsidian Editorial Portfolio
// Ethan Chung — Full-Stack Developer
// Sections: Hero → About → Projects → Skills → Blog → Contact/Footer
// ============================================================

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.08 0.005 260)" }}
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogSection />
      <FooterSection />
      <ScrollToTop />
    </div>
  );
}
