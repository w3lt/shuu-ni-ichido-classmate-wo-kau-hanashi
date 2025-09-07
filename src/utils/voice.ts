import type { Character } from "@/pages/CharactersPage/CharacterPageContext"

export default class Voice {
  private voicePath: string
  private voiceNumber: number

  constructor(character: Character) {
    this.voicePath = `/characters/${character.id}/voices`
    this.voiceNumber = character.numberOfVoices
  }

  public random() {
    const randomIndex = Math.floor(Math.random() * this.voiceNumber) + 1
    return new Audio(`${this.voicePath}/${randomIndex}.mp3`)
  }
}