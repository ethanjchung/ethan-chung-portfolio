// ============================================================
// Home Page — Ethan Chung Portfolio
// UBC Second-Year Student
// Sections: Hero → About → Projects → Contact/Footer
// ============================================================

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
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
      <FooterSection />
      <ScrollToTop />
    </div>
  );
}
