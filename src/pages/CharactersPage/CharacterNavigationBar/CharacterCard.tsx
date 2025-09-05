import type { Character } from "@/pages/CharactersPage/CharacterPageContext"
import clsx from "clsx"
import { motion } from "framer-motion"

interface Props {
  character: Character
  isSelected?: boolean
  onSelect?: (character: Character) => void
}

export default function CharacterCard({ character, isSelected = false, onSelect }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onSelect?.(character)}
      className={clsx(
        "cursor-pointer flex flex-col items-center rounded-lg p-1 transition-all",
        isSelected
          ? "ring-1 ring-white shadow-lg" // highlight when selected
          : "ring-0"
      )}
      style={{
        backgroundColor: character.color,
        filter: isSelected ? "brightness(1.2)" : "brightness(1)", // brighten bg
      }}
    >
      <motion.img
        src={character.avatarUrl}
        alt={character.name}
        className="w-24 h-24 rounded-lg object-cover"
      />
      <motion.div className="text-center text-sm mt-1 font-medium text-white">
        {character.name}
      </motion.div>
    </motion.div>

  )
}