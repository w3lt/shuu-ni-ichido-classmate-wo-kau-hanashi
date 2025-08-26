import { Button } from "@/components/ui/button"
import information from "@/assets/information.json"
import { useNavigate } from "react-router"

export default function LandingPageHeader() {
  const navigate = useNavigate()

  return (
    <header className="relative z-10 px-4 py-6">
      <nav className="max-w-full mx-auto flex items-center justify-between">
        <div className="font-sans font-bold text-2xl text-primary">{information.englishName}</div>
        <Button
          variant="outline"
          className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/50 bg-background/80 backdrop-blur-sm"
          onClick={() => navigate("/reading")}
        >
          Start Reading
        </Button>
      </nav>
    </header>
  )
}