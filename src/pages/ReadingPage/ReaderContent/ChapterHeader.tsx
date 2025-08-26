import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface Props {
  title: string
  volume: number
}

export default function ChapterHeader({
  title,
  volume
}: Props) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 px-4 py-1">
          Volume {volume}
        </Badge>
        <div className="h-px bg-gradient-to-r from-primary/30 to-transparent flex-1"></div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-4 leading-tight">
        {title}
      </h1>
    </motion.div>
  )
}