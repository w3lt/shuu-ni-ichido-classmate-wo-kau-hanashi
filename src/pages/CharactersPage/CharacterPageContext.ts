import { createContext } from "react"

export interface Character {
  id: string
  name: string
  height: string
  birthday: string
  avatarUrl: string
  characterImgUrl: string
  color: string
}

const CharacterPageContext = createContext<{
  characters: Character[]
  chosenCharacter: Character
  setChosenCharacter: (character: Character) => void
}>({
  characters: [],
  chosenCharacter: {} as Character,
  setChosenCharacter: () => {},
})

export default CharacterPageContext
export const CharacterPageContextProvider = CharacterPageContext.Provider