import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import { useTranslation } from "react-i18next"

interface Props {
  staggerContainer: Variants
  fadeInUp: Variants
}

export default function AboutSection({
  staggerContainer,
  fadeInUp
}: Props) {
  const { t } = useTranslation("pages", { keyPrefix: "landingPage.aboutSection" })
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
          {t("title")}
        </motion.h2>
        <motion.div className="space-y-6" variants={staggerContainer}>
          <motion.h3 className="font-sans font-semibold text-2xl text-primary" variants={fadeInUp}>
            {t("description")}
          </motion.h3>
          <motion.p className="text-lg text-foreground leading-relaxed" variants={fadeInUp}>
            {t("content")}
          </motion.p>
          <motion.p className="text-foreground leading-relaxed" variants={fadeInUp}>
            {t("subContent")}
          </motion.p>
          <motion.div
            className="bg-card border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <p className="text-sm text-muted-foreground text-left">
              <strong>{t("author.originalAuthor")}:</strong> {t("author.name")} (羽田宇佐)
              <br />
              <strong>{t("illustrator.illustrator")}:</strong> {t("illustrator.name")}
              <br />
              <strong>{t("publisher.publisher")}:</strong> {t("publisher.name")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}