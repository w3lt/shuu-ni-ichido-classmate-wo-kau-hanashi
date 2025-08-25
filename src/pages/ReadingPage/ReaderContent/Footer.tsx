import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <Card className="bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20 shadow-md">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-1 h-16 bg-gradient-to-b from-secondary to-primary rounded-full flex-shrink-0"></div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-3">Translator&apos;s Note</h3>
              <p className="text-muted-foreground leading-relaxed">
                This is a fan translation of the original Japanese web novel. Some cultural references and
                nuances may be adapted for Vietnamese readers while preserving the original story&apos;s intent. If you
                enjoy this translation, please consider supporting the original author.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}