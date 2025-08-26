import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useContext } from "react"
import ReadingPageContext from "../ReadingPageContext"
import Markdown from "react-markdown"

interface Props {
  content: string
}

export default function ChapterContent({
  content
}: Props) {
  const { fontSize } = useContext(ReadingPageContext)
  console.log("Content:", content)

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
            <Markdown
              components={{
                h1: ({ ...props }) => (
                  <h1 className="text-4xl font-bold mb-6" {...props} />
                ),
                p: ({ ...props }) => (
                  <p className="mb-4" {...props} />
                )
              }}
            >
              {content}
            </Markdown>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}