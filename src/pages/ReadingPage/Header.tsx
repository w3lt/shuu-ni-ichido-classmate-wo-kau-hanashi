import { useContext } from "react"
import { Button } from "@/components/ui/button"
import {
  Home,
  BookOpen,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react"
import ReadingPageContext from "./ReadingPageContext"

export default function ReadingPageHeader() {
  const { fontSize, setFontSize, sidebarCollapsed, setSidebarCollapsed } = useContext(ReadingPageContext)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-background/70 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-primary/5">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hover:bg-primary/10 transition-all duration-200"
          >
            {sidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </Button>
          <a href="/">
            <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-all duration-200">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </a>
        </div>

        <div className="flex items-center gap-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          <BookOpen className="h-5 w-5 text-primary" />
          <span className="font-bold text-lg">Reading Mode</span>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFontSize(Math.max(14, fontSize - 2))}
            className="hover:bg-primary/10 border-primary/30 transition-all duration-200"
          >
            A-
          </Button>
          <span className="text-sm font-medium text-muted-foreground min-w-[40px] text-center">{fontSize}px</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFontSize(Math.min(24, fontSize + 2))}
            className="hover:bg-primary/10 border-primary/30 transition-all duration-200"
          >
            A+
          </Button>
          <Button variant="ghost" size="sm" className="hover:bg-primary/10">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}