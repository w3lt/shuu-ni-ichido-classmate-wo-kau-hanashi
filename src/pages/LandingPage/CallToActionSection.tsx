import { Button } from "@/components/ui/button"
import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import { useNavigate } from "react-router"

interface Props {
  staggerContainer: Variants
  fadeInUp: Variants
}

export default function CtASection({
  staggerContainer,
  fadeInUp
}: Props) {
  const navigate = useNavigate()
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  return (
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg border border-primary/20"
            onClick={() => navigate("/reading")}
          >
            Begin Reading
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}