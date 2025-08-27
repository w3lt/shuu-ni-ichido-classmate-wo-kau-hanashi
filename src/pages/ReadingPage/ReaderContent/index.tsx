import ChapterHeader from "./ChapterHeader"
import ChapterContent from "./ChapterContent"
import NavigationController from "./NavigationController"
import Footer from "./Footer"
import { useContext } from "react"
import ReadingPageContext from "../ReadingPageContext"

export default function ReaderContent() {
  const { currentChapter, ln } = useContext(ReadingPageContext)
  const title = ln.arcs[currentChapter.arcNumber - 1].title
  const content = ln.arcs[currentChapter.arcNumber - 1].chapters.find(c => c.number === currentChapter.chapterNumber)?.content ?? ""
  const currentArc = ln.arcs[currentChapter.arcNumber - 1]
  const currentChapterIndex = currentChapter.chapterNumber - currentArc.chapters[0].number + 1

  return (
    <main className="flex-1 transition-all duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 md:py-12">
        {/* Chapter Header */}
        <ChapterHeader
          chapter={currentChapter.chapterNumber}
          index={currentChapterIndex}
          title={title}
        />
        <ChapterContent content={content} />

        <NavigationController />
        <Footer />
      </div>
    </main>
  )
}