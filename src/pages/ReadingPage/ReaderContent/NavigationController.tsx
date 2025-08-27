import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { motion } from "framer-motion"
import { useContext } from "react"
import ReadingPageContext from "../ReadingPageContext"
import { useTranslation } from "react-i18next"

export default function NavigationController() {
  const { t } = useTranslation("pages", { keyPrefix: "readingPage.readingContent.navigationController" })
  const { currentChapter, setCurrentChapter, ln } = useContext(ReadingPageContext)
  const currentArc = ln.arcs[currentChapter.arcNumber - 1]
  const currentChapterIndex = currentChapter.chapterNumber - currentArc.chapters[0].number + 1

  const goPreviousChapter = () => {
    setCurrentChapter(prev => ({
      chapterNumber: prev.chapterNumber - 1,
      arcNumber: currentChapterIndex > 1 ? prev.arcNumber : prev.arcNumber - 1
    }))
  }

  const goNextChapter = () => {
    setCurrentChapter(prev => ({
      arcNumber: currentChapterIndex < currentArc.chapters.length ? prev.arcNumber : prev.arcNumber + 1,
      chapterNumber: prev.chapterNumber + 1
    }))
  }

  const isAbleToGoNext= currentArc.position === ln.arcs.length &&
                        (currentChapterIndex === currentArc.chapters.length || currentArc.chapters[currentChapterIndex]?.released === false)

  return (
    <motion.div
      className="flex justify-between items-center py-4 md:py-8 border-t border-primary/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <Button
        variant="outline"
        disabled={currentArc.position === 1 && currentChapterIndex === 1}
        className="bg-background/80 border-primary/20 text-muted-foreground"
        onClick={goPreviousChapter}
      >
        <ChevronLeft className="h-4 w-4 md:mr-2" />
        <span className="hidden md:inline">
          {t("previousChapter")}
        </span>
      </Button>

      <div className="text-center bg-background/80 backdrop-blur-sm rounded-full px-6 py-2 border border-primary/20">
        <p className="text-sm font-medium text-muted-foreground">{t("chapter")} {currentChapterIndex} / {currentArc.chapters.length}</p>
      </div>

      <Button
        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={goNextChapter}
        disabled={isAbleToGoNext}
      >
        <span className="hidden md:inline">
          {t("nextChapter")}
        </span>
        <ChevronRight className="h-4 w-4 md:ml-2" />
      </Button>
    </motion.div>
  )
}