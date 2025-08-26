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

  return (
    <main className="flex-1 transition-all duration-300">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Chapter Header */}
        <ChapterHeader volume={1} title={title} />
        <ChapterContent content={content} />

        <NavigationController />
        <Footer />
      </div>
    </main>
  )
}