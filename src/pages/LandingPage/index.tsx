import { type Variants } from "framer-motion"
import LandingPageHeader from "./LandingPageHeader"
import HeroSection from "./HeroSection"
import TranslationStatusSection from "./TranslationStatusSection"
import AboutSection from "./AboutSection"
import CtASection from "./CallToActionSection"
import Footer from "./Footer"

export default function LandingPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Header */}
      <LandingPageHeader />

      {/* Hero Section */}
      <HeroSection
        staggerContainer={staggerContainer}
        fadeInUp={fadeInUp}
      />

      {/* Translation Status Section */}
      <TranslationStatusSection
        staggerContainer={staggerContainer}
        fadeInUp={fadeInUp}
      />

      {/* About Section */}
      <AboutSection
        staggerContainer={staggerContainer}
        fadeInUp={fadeInUp}
      />

      {/* Call to Action */}
      <CtASection
        staggerContainer={staggerContainer}
        fadeInUp={fadeInUp}
      />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}