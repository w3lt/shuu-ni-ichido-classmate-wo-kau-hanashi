import { useContext, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Home,
  BookOpen,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react"
import ReadingPageContext from "./ReadingPageContext"
import { useTranslation } from "react-i18next"
import LanguageSelector from "@/components/LanguageSelector"

export default function ReadingPageHeader() {
  const { t, i18n } = useTranslation("pages", { keyPrefix: "readingPage.header" })
  const { fontSize, setFontSize, sidebarCollapsed, setSidebarCollapsed } = useContext(ReadingPageContext)
  const [lang, setLang] = useState<"en" | "vi">(i18n.language === "vi" ? "vi" : "en")

  const changeLang = (lang: "en" | "vi") => {
    setLang(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2 px-2 md:px-4 md:py-4 bg-background/70 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-primary/5">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div className="flex md:hidden items-center gap-3 flex-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hover:bg-primary/10 transition-all duration-200 p-2"
          >
            <BookOpen className="h-4 w-4" />
          </Button>
          <a href="/">
            <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-all duration-200 p-2">
              <Home className="h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hover:bg-primary/70 transition-all duration-200"
          >
            {sidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </Button>
          <a href="/">
            <Button variant="ghost" size="sm" className="hover:bg-primary/70 transition-all duration-200">
              <Home className="h-4 w-4 mr-2" />
              {t("home")}
            </Button>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          <BookOpen className="h-5 w-5 text-primary" />
          <span className="font-bold text-lg">{t("title")}</span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFontSize(Math.max(14, fontSize - 2))}
            className="hover:bg-primary/70 border-primary/30 transition-all duration-200"
          >
            A-
          </Button>
          <span className="text-sm font-medium text-muted-foreground min-w-[40px] text-center">{fontSize}px</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFontSize(Math.min(24, fontSize + 2))}
            className="hover:bg-primary/70 border-primary/30 transition-all duration-200"
          >
            A+
          </Button>
          {/* <Button variant="ghost" size="sm" className="hover:bg-primary/10">
            <Settings className="h-4 w-4" />
          </Button> */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:hidden items-center"
        >
          <LanguageSelector
            lang={lang}
            onChange={changeLang}
          />
        </motion.div>
      </div>
    </header>
  )
}