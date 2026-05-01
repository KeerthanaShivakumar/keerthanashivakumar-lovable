import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import WritingSection from "@/components/WritingSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="relative">
    <StarField />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <WritingSection />
      <SkillsSection />
      <ContactSection />
    </main>
  </div>
);

export default Index;
