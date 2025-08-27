import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useContext } from "react"
import ReadingPageContext from "../ReadingPageContext"
import Markdown from "react-markdown"
import { cn } from "@/lib/utils"

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
      className="prose prose-lg max-w-none mb-8 md:mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <Card className="py-0 md:py-6 bg-background/80 backdrop-blur-sm border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-4 md:p-12">
          <div
            className={cn(
              "text-foreground leading-relaxed",
              `md:text-[${fontSize}px] md:leading-[1.8]`,
              "text-[16px] leading-[1.6]"
            )
            }
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