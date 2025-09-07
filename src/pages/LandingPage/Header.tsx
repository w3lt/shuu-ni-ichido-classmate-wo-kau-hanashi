import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { useState } from "react"
import LanguageSelector from "@/components/LanguageSelector"

export default function Header() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation("pages", { keyPrefix: "landingPage.header" })
  const [lang, setLang] = useState<"en" | "vi">(i18n.language === "vi" ? "vi" : "en")

  const changeLang = (lang: "en" | "vi") => {
    setLang(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <header className="relative z-10 px-4 py-6">
      <nav className="max-w-full mx-auto flex items-center justify-between">
        <div className="font-sans font-bold text-2xl text-primary">{t("title")}</div>
        <div className="hidden md:flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <Button
              variant="ghost"
              className="hover:bg-transparent hover:text-primary transition-all duration-300"
              onClick={() => navigate("/characters")}
            >
              {t("characters")}
            </Button>
          </motion.div>
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
            <LanguageSelector
              lang={lang}
              onChange={changeLang}
            />
          </motion.div>
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
      </nav>
    </header>
  )
}