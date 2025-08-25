import { Route, Routes } from "react-router"
import LandingPage from "./pages/LandingPage"
import ReadingPage from "./pages/ReadingPage"


export default function WebNovelLanding() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/reading" element={<ReadingPage />} />
    </Routes>
  )
}
