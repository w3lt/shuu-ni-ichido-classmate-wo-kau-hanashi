import { useState } from "react"
import ReadingPageHeader from "./Header"
import { ReadingPageContextProvider } from "./ReadingPageContext"
import TableOfContents from "./TableOfContents"
import ReaderContent from "./ReaderContent"

export default function ReadingPage() {
  const [fontSize, setFontSize] = useState(18)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <ReadingPageContextProvider
      value={{
        fontSize,
        setFontSize,
        sidebarCollapsed,
        setSidebarCollapsed
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