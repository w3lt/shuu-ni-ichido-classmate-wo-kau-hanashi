import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"

interface Props {
  staggerContainer: Variants
  fadeInUp: Variants
}

export default function HeroSection({
  staggerContainer,
  fadeInUp
}: Props) {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  return (
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
                    src="/shuu-ni-ichido-classmate-wo-kau-hanashi/images/cover-volume-4.png"
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
              Read the Vietnamese translation of this heartwarming Japanese web novel about unexpected connections
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
  )
}