import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"

interface Props {
  staggerContainer: Variants
  fadeInUp: Variants
}

export default function AboutSection({
  staggerContainer,
  fadeInUp
}: Props) {
  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" })

  return (
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
            Bringing Stories to Vietnamese Readers
          </motion.h3>
          <motion.p className="text-lg text-foreground leading-relaxed" variants={fadeInUp}>
            This is a fan translation project dedicated to making this beautiful Japanese web novel accessible to
            Vietnamese readers. Our goal is to preserve the original story&apos;s charm while making it enjoyable for a wider
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
  )
}