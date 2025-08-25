import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { motion } from "framer-motion"

export default function NavigationController() {
  return (
    <motion.div
      className="flex justify-between items-center py-8 border-t border-primary/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <Button variant="outline" disabled className="bg-background/80 border-primary/20 text-muted-foreground">
        <ChevronLeft className="h-4 w-4 mr-2" />
        Previous Chapter
      </Button>

      <div className="text-center bg-background/80 backdrop-blur-sm rounded-full px-6 py-2 border border-primary/20">
        <p className="text-sm font-medium text-muted-foreground">Chapter 1 of 6</p>
      </div>

      <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        Next Chapter
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </motion.div>
  )
}