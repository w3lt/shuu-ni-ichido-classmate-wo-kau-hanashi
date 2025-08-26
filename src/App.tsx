import { Route, Routes } from "react-router"
import LandingPage from "./pages/LandingPage"
import ReadingPage from "./pages/ReadingPage"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

export default function WebNovelLanding() {
  const { t, i18n } = useTranslation("metadata")

  useEffect(() => {
    document.title = t("title")
  }, [t, i18n.language])

  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reading" element={<ReadingPage />} />
      </Routes>
    </HelmetProvider>
  )
}
