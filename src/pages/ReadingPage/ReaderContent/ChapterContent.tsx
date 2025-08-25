import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useContext } from "react"
import ReadingPageContext from "../ReadingPageContext"

interface Props {
  content: string
}

export default function ChapterContent({
  content
}: Props) {
  const { fontSize } = useContext(ReadingPageContext)

  return (
    <motion.div
      className="prose prose-lg max-w-none mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <Card className="bg-background/80 backdrop-blur-sm border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-12">
          <div
            className="text-foreground leading-relaxed"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
          >
            {content.split("\n\n").map((paragraph, index) => (
              <motion.p
                key={index}
                className="mb-8 last:mb-0 first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:mt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {paragraph.trim()}
              </motion.p>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}