import { createContext, type Dispatch, type SetStateAction } from "react"

const ReadingPageContext = createContext<{
  fontSize: number
  setFontSize: Dispatch<SetStateAction<number>>
  sidebarCollapsed: boolean
  setSidebarCollapsed: Dispatch<SetStateAction<boolean>>
}>({
  fontSize: 18,
  setFontSize: () => null,
  sidebarCollapsed: false,
  setSidebarCollapsed: () => null
})

export default ReadingPageContext
export const ReadingPageContextProvider = ReadingPageContext.Provider
