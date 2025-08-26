import i18n, { type Resource } from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

const modules = import.meta.glob("@/locales/**/*.json", { eager: true, query: "?raw", import: "default" })
const resources: Resource = {}

for (const path in modules) {
  const match = path.match(/\/src\/locales\/([^/]+)\/(.+)\.json$/)
  if (!match) continue

  const data = modules[path] as string
  const [, lng, nsPath] = match
  if (!(lng in resources)) {
    resources[lng] = {}
  }

  const parts = nsPath.split("/")

  let cur = resources[lng]
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    if (i === parts.length - 1) {
      // Last part → assign translations object here
      cur[part] = JSON.parse(data)
    } else {
      // Not last → ensure nested object exists and descend into it
      cur[part] ??= {}

      // Ensure that cur[part] is an object
      if (typeof cur[part] === "string") continue
      cur = cur[part]
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n instance to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    lng: "vi",
    fallbackLng: "vi",
    interpolation: {
      escapeValue: false // react already escapes
    },
    supportedLngs: ["en", "vi"],
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"], // saves selected language
    }
  })

export default i18n
