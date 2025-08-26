import type Ln from "@/utils/ln"
import { createContext, type Dispatch, type SetStateAction } from "react"

const ReadingPageContext = createContext<{
  fontSize: number
  setFontSize: Dispatch<SetStateAction<number>>
  sidebarCollapsed: boolean
  setSidebarCollapsed: Dispatch<SetStateAction<boolean>>
  ln: Ln
  currentChapter: { arcNumber: number, chapterNumber: number }
  setCurrentChapter: Dispatch<SetStateAction<{ arcNumber: number, chapterNumber: number }>>
}>({
  fontSize: 18,
  setFontSize: () => null,
  sidebarCollapsed: false,
  setSidebarCollapsed: () => null,
  ln: null!,
  currentChapter: null!,
  setCurrentChapter: () => null,
})

export default ReadingPageContext
export const ReadingPageContextProvider = ReadingPageContext.Provider
