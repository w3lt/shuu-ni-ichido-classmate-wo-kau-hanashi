import { useContext, useState } from "react"
import ReadingPageContext from "../ReadingPageContext"
import { Badge } from "@/components/ui/badge"
import { AnimatePresence, motion } from "framer-motion"
import Arc from "./Arc"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function TableOfContents() {
  const { t } = useTranslation("pages", { keyPrefix: "readingPage.tableOfContents" })
  const { sidebarCollapsed, ln, setSidebarCollapsed } = useContext(ReadingPageContext)
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
    <AnimatePresence>
      {!sidebarCollapsed && (
        <>
          <motion.div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarCollapsed(true)}
          />

          <motion.aside
            className="fixed md:sticky top-[49px] md:top-[73px] md:h-[calc(100vh-73px)] left-0 h-full bg-background/95 md:bg-background/80 backdrop-blur-xl border-r border-primary/10 overflow-y-auto shadow-lg z-50 md:z-auto"
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ width: 320 }}
          >
            <div className="p-3 md:p-6 md:pt-0">
              <div className="mb-4 md:mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-bold text-base md:text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {t("title")}
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSidebarCollapsed(true)}
                    className="md:hidden hover:bg-primary/10 p-1.5"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 text-xs px-2 py-1"
                  >
                    {ln.arcs.reduce((acc, arc) => acc + arc.chapters.length, 0)} {t("chapters")}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
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
        </>
      )}
    </AnimatePresence>
  )
}