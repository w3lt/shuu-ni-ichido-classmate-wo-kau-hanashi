import { useContext, useState } from "react"
import ReadingPageContext from "./ReadingPageContext"
import { Badge } from "@/components/ui/badge"
import {
  Bookmark,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { motion } from "framer-motion"

export default function TableOfContents() {
  const { sidebarCollapsed } = useContext(ReadingPageContext)
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

  const storyArcs = [
    {
      id: 1,
      title: "The Beginning",
      description: "How it all started",
      chapters: [
        { id: 1, title: "The Arrangement", status: "available" },
        { id: 2, title: "First Meeting", status: "available" },
        { id: 3, title: "Unspoken Rules", status: "available" },
      ],
    },
    {
      id: 2,
      title: "Growing Closer",
      description: "Understanding each other",
      chapters: [
        { id: 4, title: "Coffee and Silence", status: "available" },
        { id: 5, title: "Breaking Point", status: "coming-soon" },
        { id: 6, title: "Understanding", status: "coming-soon" },
      ],
    },
    {
      id: 3,
      title: "New Horizons",
      description: "What comes next",
      chapters: [
        { id: 7, title: "Revelations", status: "coming-soon" },
        { id: 8, title: "Choices", status: "coming-soon" },
        { id: 9, title: "Resolution", status: "coming-soon" },
      ],
    },
  ]

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
            Table of Contents
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              9 Chapters
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          {storyArcs.map((arc, arcIndex) => (
            <motion.div
              key={arc.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: arcIndex * 0.1 }}
              className="group"
            >
              <div
                className="flex items-center justify-between p-3 cursor-pointer hover:bg-primary/5 rounded-lg transition-all duration-200 border border-transparent hover:border-primary/20"
                onClick={() => toggleArc(arc.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                    {arc.id}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">{arc.title}</h3>
                    <p className="text-xs text-muted-foreground">{arc.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs px-2 py-0.5 border-primary/30">
                    {arc.chapters.length}
                  </Badge>
                  {collapsedArcs.has(arc.id) ? (
                    <ChevronDown className="h-3 w-3 text-muted-foreground" />
                  ) : (
                    <ChevronUp className="h-3 w-3 text-muted-foreground" />
                  )}
                </div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: collapsedArcs.has(arc.id) ? 0 : "auto",
                  opacity: collapsedArcs.has(arc.id) ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="ml-9 mt-2 space-y-1">
                  {arc.chapters.map((chapter, chapterIndex) => (
                    <motion.div
                      key={chapter.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: chapterIndex * 0.05 }}
                    >
                      <div
                        className={`p-2 rounded-md cursor-pointer transition-all duration-200 ${chapter.id === 1
                          ? "bg-primary/10 border border-primary/20"
                          : "hover:bg-card/50 border border-transparent hover:border-primary/10"
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium text-muted-foreground">Ch. {chapter.id}</span>
                              {chapter.id === 1 && (
                                <div className="flex items-center gap-1">
                                  <Bookmark className="h-3 w-3 text-primary" />
                                  <span className="text-xs text-primary font-medium">Current</span>
                                </div>
                              )}
                            </div>
                            <h4 className="text-sm font-medium text-foreground leading-tight">{chapter.title}</h4>
                          </div>
                          {chapter.status === "coming-soon" && (
                            <Badge
                              variant="secondary"
                              className="text-xs ml-2 bg-secondary/20 text-secondary-foreground border-secondary/30 cursor-default"
                            >
                              Soon
                            </Badge>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.aside>
  )
}