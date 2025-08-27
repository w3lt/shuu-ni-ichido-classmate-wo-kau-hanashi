import { useEffect, useState } from "react"
import ReadingPageHeader from "./Header"
import { ReadingPageContextProvider } from "./ReadingPageContext"
import TableOfContents from "./TableOfContents"
import ReaderContent from "./ReaderContent"
import Ln from "@/utils/ln"
import { useSearchParams } from "react-router"

export default function ReadingPage() {
  const ln = new Ln()
  const [fontSize, setFontSize] = useState(18)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const arcParams = searchParams.get("arc")
  const chapterParams = searchParams.get("chapter")

  const [currentChapter, setCurrentChapter] = useState<{
    arcNumber: number
    chapterNumber: number
  }>({
    arcNumber: arcParams !== null ? parseInt(arcParams) : ln.arcs[0].position,
    chapterNumber: chapterParams !== null ? parseInt(chapterParams) : ln.arcs[0].chapters[0].number
  })

  // Change the search params when the current chapter changes
  useEffect(() => {
    setSearchParams(params => ({
      ...params,
      arc: currentChapter.arcNumber.toString(),
      chapter: currentChapter.chapterNumber.toString()
    }))
  }, [currentChapter, setSearchParams])

  return (
    <ReadingPageContextProvider
      value={{
        fontSize,
        setFontSize,
        sidebarCollapsed,
        setSidebarCollapsed,
        ln,
        currentChapter,
        setCurrentChapter
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
        <ReadingPageHeader />
        <div className="flex pt-[73px] md:pt-[73px]">
          <TableOfContents />
          <ReaderContent />
        </div>
      </div>
    </ReadingPageContextProvider>
  )
}