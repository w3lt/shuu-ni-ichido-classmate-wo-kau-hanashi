import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
  lang: "vi" | "en"
  onChange: (lang: "vi" | "en") => void
  className?: string
  primaryColor?: string
}

export default function LanguageSelector({ lang, onChange, className, primaryColor }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button
          variant="ghost"
          className={cn(
            "transition-all duration-300 font-medium px-4 py-2",
            "text-sm gap-2 focus-visible:ring-0 focus-visible:ring-offset-0",
            "focus:outline-none h-[32px] md:h-[36px]",
            primaryColor ? "bg-transparent" : "hover:bg-primary/70",
          )}
          style={{
            color: primaryColor || undefined,
          }}
          onMouseEnter={(e) => {
            if (!primaryColor) return
            e.currentTarget.style.backgroundColor = primaryColor
            e.currentTarget.style.color = "white"
          }}
          onMouseLeave={(e) => {
            if (!primaryColor) return
            e.currentTarget.style.backgroundColor = "transparent"
            e.currentTarget.style.color = primaryColor
          }}
        >
          <Globe className="w-4 h-4" />
          {lang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={cn(
          "w-32 bg-background border shadow-lg p-1",
          primaryColor ? undefined : "border-primary",
        )}
        style={{
          borderColor: primaryColor || undefined,
        }}
      >
        <DropdownMenuItem
          onClick={() => onChange("en")}
          className={cn(
            "cursor-pointer",
            primaryColor ? undefined : "focus:bg-primary/70 hover:text-primary-foreground"
          )}
          onMouseEnter={(e) => {
            if (!primaryColor) return
            e.currentTarget.style.backgroundColor = primaryColor
            e.currentTarget.style.color = "white"
          }}
          onMouseLeave={(e) => {
            if (!primaryColor) return
            e.currentTarget.style.backgroundColor = "transparent"
            e.currentTarget.style.color = "black"
          }}
        >
          🇺🇸 English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onChange("vi")}
          className={cn(
            "cursor-pointer",
            primaryColor ? undefined : "focus:bg-primary/70 hover:text-primary-foreground"
          )}
          onMouseEnter={(e) => {
            if (!primaryColor) return
            e.currentTarget.style.backgroundColor = primaryColor
            e.currentTarget.style.color = "white"
          }}
          onMouseLeave={(e) => {
            if (!primaryColor) return
            e.currentTarget.style.backgroundColor = "transparent"
            e.currentTarget.style.color = "black"
          }}
        >
          🇻🇳 Tiếng Việt
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}