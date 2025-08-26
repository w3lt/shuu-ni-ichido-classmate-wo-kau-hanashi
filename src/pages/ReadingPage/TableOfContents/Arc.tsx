import type { Arc } from "@/utils/ln"
import { Badge } from "@/components/ui/badge"
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { motion } from "framer-motion"
import Chapter from "./Chapter"

interface Props {
  arc: Arc
  isCollapsed: boolean
  onToggle: () => void
}

export default function Arc({
  arc,
  isCollapsed,
  onToggle
}: Props) {
  return (
    <motion.div
      key={arc.position}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: (arc.position - 1) * 0.1 }}
      className="group"
    >
      <div
        className="flex items-center justify-between p-3 cursor-pointer hover:bg-primary/5 rounded-lg transition-all duration-200 border border-transparent hover:border-primary/20"
        // onClick={() => toggleArc(arc.position)}
        onClick={() => onToggle()}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 aspect-square rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
            {arc.position}
          </div>
          <div>
            <h3 className="font-semibold text-sm text-foreground">{arc.title}</h3>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs px-2 py-0.5 border-primary/30">
            {arc.chapters.length}
          </Badge>
          {isCollapsed ? (
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          ) : (
            <ChevronUp className="h-3 w-3 text-muted-foreground" />
          )}
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isCollapsed ? 0 : "auto",
          opacity: isCollapsed ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="ml-9 mt-2 space-y-1">
          {arc.chapters.map((chapter, chapterIndex) => (
            <Chapter
              key={chapter.number}
              chapter={chapter}
              index={chapterIndex}
              arcNumber={arc.position}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}