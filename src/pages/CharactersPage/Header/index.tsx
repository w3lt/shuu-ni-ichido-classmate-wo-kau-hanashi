import LanguageSelector from "@/components/LanguageSelector"
import { Button } from "@/components/ui/button"
import useLang from "@/hooks/useLang"
import { motion } from "framer-motion"
import { Home } from "lucide-react"
import { useTranslation } from "react-i18next"
import type { Character } from "../CharacterPageContext"

interface Props {
  selectedCharacter: Character
}

export default function Header({ selectedCharacter }: Props) {
  const { t } = useTranslation("pages", { keyPrefix: "charactersPage.header" })
  const [lang, setLang] = useLang()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2 px-2 md:px-4 md:py-4">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div className="flex md:hidden items-center gap-3 flex-1">
          <a href="/">
            <Button
              variant="ghost"
              size="sm"
              className="transition-all duration-200 p-2"
              style={{
                color: selectedCharacter.color
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = selectedCharacter.color
                e.currentTarget.style.color = "white"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
                e.currentTarget.style.color = selectedCharacter.color
              }}
            >
              <Home className="h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="/">
            <Button
              variant="ghost"
              size="sm"
              className="transition-all duration-200"
              style={{
                color: selectedCharacter.color
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = selectedCharacter.color
                e.currentTarget.style.color = "white"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
                e.currentTarget.style.color = selectedCharacter.color
              }}
            >
              <Home className="h-4 w-4 mr-2" />
              {t("home")}
            </Button>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="items-center"
        >
          <LanguageSelector
            lang={lang}
            onChange={setLang}
            primaryColor={selectedCharacter.color}
          />
        </motion.div>
      </div>
    </header>
  )
}