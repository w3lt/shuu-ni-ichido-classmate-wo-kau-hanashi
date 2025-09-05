import type { Character } from "@/pages/CharactersPage/CharacterPageContext"

export default class CharacterManager {
  public characters: Character[] = []

  constructor() {
    const infoFiles = import.meta.glob("@/assets/characters/**/information.json", { eager: true, query: "?raw", import: "default" })
    for (const key in infoFiles) {
      const characterData = JSON.parse(infoFiles[key] as string)
      this.characters.push({
        id: characterData.id,
        name: characterData.name,
        height: characterData.height,
        birthday: characterData.birthday,
        avatarUrl: `/characters/${characterData.id}/avatar.jpeg`,
        characterImgUrl: `/characters/${characterData.id}/character_img.jpeg`,
        color: characterData.color
      })
    }
  }

  public getCharacterByName(name: string): Character | undefined {
    return this.characters.find(c => c.name === name)
  }
}