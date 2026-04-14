// ============================================================
// Home Page — Ethan Chung Portfolio
// UBC Second-Year Student
// Sections: Hero → About → Projects → Contact/Footer
// ============================================================

import { useAuth } from "@/_core/hooks/useAuth";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";
import StarCursor from "@/components/StarCursor";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  const { user, loading, error, isAuthenticated, logout } = useAuth();

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
      <StarCursor />
    </div>
  );
}
