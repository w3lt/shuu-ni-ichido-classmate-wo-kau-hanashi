import { type Variants } from "framer-motion"
import Header from "./Header"
import HeroSection from "./HeroSection"
// import TranslationStatusSection from "./TranslationStatusSection"
import AboutSection from "./AboutSection"
import CtASection from "./CallToActionSection"
import Footer from "./Footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import { useTranslation } from "react-i18next"

export default function LandingPage() {
  const navigate = useNavigate()
  const { t } = useTranslation("pages", { keyPrefix: "landingPage" })

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
      <Header />

      {/* Hero Section */}
      <HeroSection
        staggerContainer={staggerContainer}
        fadeInUp={fadeInUp}
      />

      {/* Translation Status Section */}
      {/* <TranslationStatusSection
        staggerContainer={staggerContainer}
        fadeInUp={fadeInUp}
      /> */}

      <motion.div className="md:hidden flex flex-col sm:flex-row gap-4 justify-center mx-4" variants={fadeInUp}>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          onClick={() => navigate("/reading")}
        >
          {t("header.startReading")}
        </Button>
      </motion.div>

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