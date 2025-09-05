import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface Props {
  lang: "vi" | "en"
  onChange: (lang: "vi" | "en") => void
  className?: string
}

export default function LanguageSelector({ lang, onChange, className }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button
          variant="ghost"
          className="hover:bg-primary transition-all duration-300 font-medium px-4 py-2 text-sm gap-2
                            focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none h-[32px] md:h-[36px]"
        >
          <Globe className="w-4 h-4" />
          {lang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-32 bg-background border border-primary shadow-lg p-1"
      >
        <DropdownMenuItem
          onClick={() => onChange("en")}
          className="cursor-pointer focus:bg-primary/70 hover:text-primary-foreground"
        >
          🇺🇸 English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onChange("vi")}
          className="cursor-pointer focus:bg-primary/70 hover:text-primary-foreground"
        >
          🇻🇳 Tiếng Việt
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}