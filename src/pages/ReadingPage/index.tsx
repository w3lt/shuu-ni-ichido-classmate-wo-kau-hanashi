import { useState } from "react"
import ReadingPageHeader from "./Header"
import { ReadingPageContextProvider } from "./ReadingPageContext"
import TableOfContents from "./TableOfContents"
import ReaderContent from "./ReaderContent"
import Ln from "@/utils/ln"

export default function ReadingPage() {
  const ln = new Ln()
  const [fontSize, setFontSize] = useState(18)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [currentChapter, setCurrentChapter] = useState<{
    arcNumber: number
    chapterNumber: number
  }>({
    arcNumber: ln.arcs[0].position,
    chapterNumber: ln.arcs[0].chapters[0].number
  })

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
      <div className="flex pt-[73px]">
        <TableOfContents />
        <ReaderContent />
      </div>
    </div>
    </ReadingPageContextProvider>
  )
}