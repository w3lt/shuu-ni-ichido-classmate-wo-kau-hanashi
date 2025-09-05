import { useContext } from "react"
import CharacterPageContext from "../CharacterPageContext"
import CharacterCard from "./CharacterCard"
import { cn } from "@/lib/utils"

interface Props {
  className?: string
}

export default function CharacterNavigationBar({ className }: Props) {
  const { characters, setChosenCharacter, chosenCharacter } = useContext(CharacterPageContext)

  return (
    <div className={cn("flex space-x-4 z-[999]", className)}>
      {characters.map((character) => (
        <CharacterCard
          key={character.name}
          character={character}
          onSelect={setChosenCharacter}
          isSelected={character.name === chosenCharacter.name}
        />
      ))}
    </div>
  )
}