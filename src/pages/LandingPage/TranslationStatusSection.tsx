import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"

interface Props {
  staggerContainer: Variants
  fadeInUp: Variants
}

export default function TranslationStatusSection({
  staggerContainer,
  fadeInUp
}: Props) {
  const statusRef = useRef(null)
  const statusInView = useInView(statusRef, { once: true, margin: "-100px" })

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
  )
}