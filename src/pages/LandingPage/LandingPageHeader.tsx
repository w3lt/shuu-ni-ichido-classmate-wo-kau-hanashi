import { Button } from "@/components/ui/button"
import information from "@/assets/information.json"
import { useNavigate } from "react-router"

export default function LandingPageHeader() {
  const navigate = useNavigate()

  return (
    <header className="relative z-10 px-4 py-6">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="font-sans font-bold text-2xl text-primary">{information.englishName}</div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300">
            About
          </a>
          <a href="#status" className="text-foreground hover:text-primary transition-colors duration-300">
            Status
          </a>
          <Button
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/50 bg-background/80 backdrop-blur-sm"
            onClick={() => navigate("/reading")}
          >
            Start Reading
          </Button>
        </div>
      </nav>
    </header>
  )
}