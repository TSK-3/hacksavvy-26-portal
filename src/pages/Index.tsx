import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ThemesSection } from "@/components/ThemesSection";
import { TimelineSection } from "@/components/TimelineSection";
import { PrizesSection } from "@/components/PrizesSection";
import { FAQSection } from "@/components/FAQSection";
import { RegisterSection } from "@/components/RegisterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <TimelineSection />
      <PrizesSection />
      <FAQSection />
      <RegisterSection />
      <Footer />
    </div>
  );
};

export default Index;
