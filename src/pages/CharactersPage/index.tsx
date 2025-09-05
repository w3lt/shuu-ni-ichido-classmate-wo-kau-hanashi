import CharacterManager from "@/utils/characterManager"
import { CharacterPageContextProvider } from "./CharacterPageContext"
import CharacterNavigationBar from "./CharacterNavigationBar"
import CharacterPage from "./CharacterPage"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"

export default function CharactersPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const characterName = searchParams.get("character")

  const characterManager = new CharacterManager()
  const [chosenCharacter, setChosenCharacter] = useState(characterName ? (characterManager.getCharacterByName(characterName) ?? characterManager.characters[0]) : characterManager.characters[0])

  useEffect(() => {
    setSearchParams({ character: chosenCharacter.name })
  }, [chosenCharacter.name, setSearchParams])

  return (
    <CharacterPageContextProvider
      value={{
        characters: characterManager.characters,
        chosenCharacter,
        setChosenCharacter
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
        <CharacterPage character={chosenCharacter} key={chosenCharacter.name} />
        <CharacterNavigationBar className="fixed bottom-2 left-2 right-2 w-full flex justify-center" />
      </div>
    </CharacterPageContextProvider>
  )
}