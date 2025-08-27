import type { Chapter } from "@/utils/ln"
import {
  Bookmark,
} from "lucide-react"
import { motion } from "framer-motion"
import { useContext } from "react"
import ReadingPageContext from "../ReadingPageContext"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"

interface Props {
  chapter: Chapter
  index: number
  arcNumber: number
}

export default function Chapter({
  chapter,
  index,
  arcNumber
}: Props) {
  const { t } = useTranslation("pages", { keyPrefix: "readingPage.tableOfContents" })
  const { currentChapter, setCurrentChapter } = useContext(ReadingPageContext)

  const goToChapter = () => {
    if (!chapter.released) return
    setCurrentChapter({
      chapterNumber: chapter.number,
      arcNumber
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div
        className={`p-2 rounded-md cursor-pointer transition-all duration-200 ${chapter.number === currentChapter.chapterNumber
          ? "bg-primary/10 border border-primary/20"
          : "hover:bg-card/50 border border-transparent hover:border-primary/10"
          }`}
        onClick={goToChapter}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-muted-foreground">Chapter {chapter.number}</span>
              {chapter.number === currentChapter.chapterNumber && (
                <div className="flex items-center gap-1">
                  <Bookmark className="h-3 w-3 text-primary" />
                  <span className="text-xs text-primary font-medium">Current</span>
                </div>
              )}
            </div>
          </div>
          {!chapter.released && (
            <Badge
              variant="secondary"
              className="text-xs ml-2 bg-secondary/20 text-secondary-foreground border-secondary/30 cursor-default"
            >
              {t("upcoming")}
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  )
}