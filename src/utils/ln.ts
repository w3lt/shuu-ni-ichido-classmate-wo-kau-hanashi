export interface Chapter {
  number: number
  content: string
}

export interface Arc {
  title: string
  position: number
  chapters: Chapter[]
}

export default class Ln {
  public arcs: Arc[]

  constructor() {
    console.trace("Loading LN data...")
    const jsonFiles = import.meta.glob("@/contents/**/conf.json", { eager: true, query: "?raw", import: "default" })
    const chapterFiles = import.meta.glob("@/contents/**/*.md", { eager: true, query: "?raw", import: "default" })
    const arcs: Arc[] = []
    for (const jsonPath in jsonFiles) {
      const content = JSON.parse(jsonFiles[jsonPath] as string)
      const arc: Arc = {
        title: content.label,
        position: content.position,
        chapters: []
      }

      const chapters: Chapter[] = Object.entries(chapterFiles)
        .filter(([path, _]) => path.startsWith(jsonPath.replace("conf.json", "")))
        .map(([path, content]) => {
          const match = path.match(/chapter-(\d+)\.md$/)
          if (match) {
            return {
              number: parseInt(match[1], 10),
              content: content as string
            }
          }
          return null
        })
        .filter(chapter => chapter !== null)

      arc.chapters = chapters
      arcs.push(arc)
    }

    arcs.sort((a, b) => a.position - b.position)
    this.arcs = arcs
  }
}
