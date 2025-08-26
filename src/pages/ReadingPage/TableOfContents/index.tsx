import { useContext, useState } from "react"
import ReadingPageContext from "../ReadingPageContext"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Arc from "./Arc"
import { useTranslation } from "react-i18next"

export default function TableOfContents() {
  const { t } = useTranslation("pages", { keyPrefix: "readingPage.tableOfContents" })
  const { sidebarCollapsed, ln } = useContext(ReadingPageContext)
  const [collapsedArcs, setCollapsedArcs] = useState<Set<number>>(new Set())

  const toggleArc = (arcId: number) => {
    const newCollapsedArcs = new Set(collapsedArcs)
    if (newCollapsedArcs.has(arcId)) {
      newCollapsedArcs.delete(arcId)
    } else {
      newCollapsedArcs.add(arcId)
    }
    setCollapsedArcs(newCollapsedArcs)
  }

  return (
    <motion.aside
      className="sticky top-[73px] h-[calc(100vh-73px)] bg-background/80 backdrop-blur-xl border-r border-primary/10 overflow-y-auto shadow-lg"
      animate={{
        width: sidebarCollapsed ? 0 : 320,
        opacity: sidebarCollapsed ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ overflow: sidebarCollapsed ? "hidden" : "auto" }}
    >
      <div className="p-6 min-w-[320px]">
        <div className="mb-6">
          <h2 className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("title")}
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {ln.arcs.reduce((acc, arc) => acc + arc.chapters.length, 0)} {t("chapters")}
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          {ln.arcs.map(arc => (
            <Arc
              key={arc.position}
              arc={arc}
              isCollapsed={collapsedArcs.has(arc.position)}
              onToggle={() => toggleArc(arc.position)}
            />
          ))}
        </div>
      </div>
    </motion.aside>
  )
}