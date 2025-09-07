import { useState } from "react"
import { useTranslation } from "react-i18next"

const useLang = () => {
  const { i18n } = useTranslation()
  const [lang, setLang] = useState<"en" | "vi">(i18n.language === "vi" ? "vi" : "en")

  const changeLang = (lang: "en" | "vi") => {
    setLang(lang)
    i18n.changeLanguage(lang)
  }

  return [lang, changeLang] as const
}

export default useLang