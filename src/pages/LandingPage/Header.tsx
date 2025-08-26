import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import i18n from "i18next"

export default function Header() {
  const navigate = useNavigate()
  const { t } = useTranslation("pages", { keyPrefix: "landingPage.header" })
  const [lang, setLang] = useState<"EN" | "VI">(i18n.language === "vi" ? "VI" : "EN")

  const changeLang = (lang: "EN" | "VI") => {
    setLang(lang)
    i18n.changeLanguage(lang.toLowerCase())
  }

  return (
    <header className="relative z-10 px-4 py-6">
      <nav className="max-w-full mx-auto flex items-center justify-between">
        <div className="font-sans font-bold text-2xl text-primary">{t("title")}</div>
        <div className="hidden md:flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Button
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/50 bg-background/80 backdrop-blur-sm"
              onClick={() => navigate("/reading")}
            >
              {t("startReading")}
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="hover:bg-primary transition-all duration-300 font-medium px-4 py-2 text-sm gap-2
                            focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none h-[36px]"
                >
                  <Globe className="w-4 h-4" />
                  {lang}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-32 bg-background border border-primary shadow-lg p-1"
              >
                <DropdownMenuItem
                  onClick={() => changeLang("EN")}
                  className="cursor-pointer focus:bg-primary/70 hover:text-primary-foreground"
                >
                  🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeLang("VI")}
                  className="cursor-pointer focus:bg-primary/70 hover:text-primary-foreground"
                >
                  🇻🇳 Tiếng Việt
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}