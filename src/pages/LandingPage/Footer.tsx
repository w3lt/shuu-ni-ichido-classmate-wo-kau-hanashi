import information from "@/assets/information.json"
import Github from "@/assets/branchIcons/github.svg?react"
import Discord from "@/assets/branchIcons/discord.svg?react"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation("pages", { keyPrefix: "landingPage.footer" })
  return (
    <footer className="px-4 py-12 bg-card">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <div className="font-sans font-bold text-2xl text-primary">{t("title")}</div>
        <p className="text-muted-foreground">
          {t("content", { originalName: information.originalName })}
        </p>
        <div className="flex justify-center gap-6 text-sm text-muted-foreground">
          <a
            href="https://github.com/w3lt/shuu-ni-ichido-classmate-wo-kau-hanashi"
            className="hover:text-primary transition-colors duration-300 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" fill="#181717" />
            GitHub Repository
          </a>
          <a
            href="https://discordapp.com/users/866989139195199508"
            className="hover:text-primary transition-colors duration-300 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord className="w-4 h-4" fill="#5865F2" />
            Discord
          </a>
        </div>
      </div>
    </footer>
  )
}