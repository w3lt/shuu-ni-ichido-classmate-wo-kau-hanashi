import { Route, Routes } from "react-router"
import { useTranslation } from "react-i18next"
import { lazy, useEffect } from "react"

const LandingPage = lazy(() => import("./pages/LandingPage"))
const ReadingPage = lazy(() => import("./pages/ReadingPage"))
const CharactersPage = lazy(() => import("./pages/CharactersPage"))

export default function WebNovelLanding() {
  const { t, i18n } = useTranslation("metadata")

  useEffect(() => {
    document.title = t("title")
    const metaDescription = document.querySelector("meta[name=\"description\"]")
    if (metaDescription) {
      metaDescription.setAttribute("content", t("description"))
    } else {
      const meta = document.createElement("meta")
      meta.name = "description"
      meta.content = t("description")
      document.head.appendChild(meta)
    }
  }, [t, i18n.language])

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/reading" element={<ReadingPage />} />
      <Route path="/characters" element={<CharactersPage />} />
    </Routes>
  )
}
