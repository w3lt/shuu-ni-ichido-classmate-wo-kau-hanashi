import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"

export default function WebNovelLanding() {
  const [, setIsVisible] = useState(false)

  const heroRef = useRef(null)
  const statusRef = useRef(null)
  const aboutRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const statusInView = useInView(statusRef, { once: true, margin: "-100px" })
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-sans font-bold text-2xl text-primary">English Translation</div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#status" className="text-foreground hover:text-primary transition-colors duration-300">
              Status
            </a>
            <Button
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
            >
              Start Reading
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative px-4 py-12 md:py-20"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div className="space-y-8" variants={fadeInUp}>
              {/* Cover Image Section */}
              <motion.div className="flex justify-center mb-8" variants={fadeInUp}>
                <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
                  <AspectRatio ratio={3 / 4} className="relative w-full">
                    <img
                      src="/images/cover-volume-4.png"
                      alt="Story About Buying My Classmate Once A Week - Volume 4 Cover"
                      className="object-cover rounded-md"
                    />
                  </AspectRatio>
                </div>
              </motion.div>

              <motion.div className="space-y-4" variants={fadeInUp}>
                <div className="flex gap-2 flex-wrap justify-center">
                  <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium">
                    Fan Translation
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                    Web Novel
                  </Badge>
                </div>
                <h1 className="font-sans font-bold text-4xl md:text-6xl leading-tight text-foreground">
                  Story About Buying My <span className="text-primary">Classmate</span> Once A Week
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  週に一度クラスメイトを買う話 ～ふたりの時間、言い訳の五千円～
                </p>
              </motion.div>

              <motion.p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto" variants={fadeInUp}>
                Read the English translation of this heartwarming Japanese web novel about unexpected connections
                between two high school students. Follow their weekly encounters as a simple arrangement becomes
                something much more meaningful.
              </motion.p>

              <motion.div
                className="bg-card/50 border border-primary/20 rounded-lg p-4 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This is an unofficial fan translation. All rights belong to the original author
                  and publisher.
                </p>
              </motion.div>

              {/* Call to Action Buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Read Chapter 1
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Translation Status Section */}
      <motion.section
        id="status"
        ref={statusRef}
        className="px-4 py-16 bg-card/50"
        initial="hidden"
        animate={statusInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground" variants={fadeInUp}>
            Translation Progress
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer}>
            <motion.div variants={cardVariant}>
              <Card className="bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-foreground">Volume 1</h3>
                  <p className="text-muted-foreground">Complete - All chapters translated and available to read</p>
                  <Badge className="bg-green-100 text-green-800">Complete</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariant}>
              <Card className="bg-background/80 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">✏️</span>
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-foreground">Volume 2</h3>
                  <p className="text-muted-foreground">In Progress - Currently translating new chapters</p>
                  <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariant}>
              <Card className="bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⏳</span>
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-foreground">Updates</h3>
                  <p className="text-muted-foreground">New chapters posted weekly - check back regularly</p>
                  <Badge className="bg-yellow-100 text-yellow-800">Weekly</Badge>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        ref={aboutRef}
        className="px-4 py-16"
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground" variants={fadeInUp}>
            About This Translation
          </motion.h2>
          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.h3 className="font-sans font-semibold text-2xl text-primary" variants={fadeInUp}>
              Bringing Stories to English Readers
            </motion.h3>
            <motion.p className="text-lg text-foreground leading-relaxed" variants={fadeInUp}>
              This is a fan translation project dedicated to making this beautiful Japanese web novel accessible to
              English readers. Our goal is to preserve the original story's charm while making it enjoyable for a wider
              audience.
            </motion.p>
            <motion.p className="text-foreground leading-relaxed" variants={fadeInUp}>
              The story follows two high school students whose weekly meetings become something much more meaningful.
              Each chapter explores themes of connection, understanding, and the courage to open your heart to someone
              else.
            </motion.p>
            <motion.div
              className="bg-card border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              <p className="text-sm text-muted-foreground text-left">
                <strong>Original Author:</strong> Haneda Usa (羽田宇佐)
                <br />
                <strong>Illustrator:</strong> U35
                <br />
                <strong>Publisher:</strong> Fantasia Bunko
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        ref={ctaRef}
        className="px-4 py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10"
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground" variants={fadeInUp}>
            Start Reading Today
          </motion.h2>
          <motion.p className="text-xl text-muted-foreground" variants={fadeInUp}>
            Dive into this touching story about unexpected connections and the beauty of human relationships.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 animate-shimmer"
            >
              Begin Reading
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-card">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="font-sans font-bold text-2xl text-primary">Fan Translation Project</div>
          <p className="text-muted-foreground">
            Unofficial English translation of "週に一度クラスメイトを買う話". All rights belong to the original
            creators.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Translation Notes
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Support the Author
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Contact Translator
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
