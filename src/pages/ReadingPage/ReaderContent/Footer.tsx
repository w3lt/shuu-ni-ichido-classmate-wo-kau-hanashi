import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation("pages", { keyPrefix: "readingPage.readingContent.footer" })
  return (
    <motion.div
      className="mt-2 md:mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <Card className="py-0 md:py-6 bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20 shadow-md">
        <CardContent className="p-4 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-1 h-14 md:h-16 bg-gradient-to-b from-secondary to-primary rounded-full flex-shrink-0"></div>
            <div>
              <h3 className="font-bold text-sm md:text-lg text-foreground mb-3">{t("note")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("content")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}