import { Route, Routes } from "react-router"
import LandingPage from "./pages/LandingPage"
import ReadingPage from "./pages/ReadingPage"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

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
    </Routes>
  )
}
