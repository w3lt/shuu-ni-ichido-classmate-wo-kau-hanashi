import { useTranslation } from "react-i18next"
import type { Character } from "../CharacterPageContext"
import { motion } from "framer-motion"
import LanguageSelector from "@/components/LanguageSelector"
import { useState } from "react"

interface Props {
  character: Character
}

export default function CharacterPage({ character }: Props) {
  const { t } = useTranslation("characters")
  const { t: pageT, i18n } = useTranslation("pages", { keyPrefix: "charactersPage.characterPage" })
  const [lang, setLang] = useState<"en" | "vi">(i18n.language === "vi" ? "vi" : "en")

  const changeLang = (lang: "en" | "vi") => {
    setLang(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <LanguageSelector
        lang={lang}
        onChange={changeLang}
        className="absolute top-2 right-2 md:top-4 md:right-4 z-[999]"
      />
      <motion.div
        className="relative flex justify-center items-center min-h-screen w-full overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, ${character.color}20 0%, ${character.color}40 50%, ${character.color}20 100%), url(${character.characterImgUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
          backgroundSize: "cover",
        }}
        animate={{ backgroundPositionY: ["0%", "3%", "0%"] }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-8 py-12">
          {/* Left side - Character Info */}
          <motion.div
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1
                className="text-6xl lg:text-8xl font-bold text-white text-balance text-center"
                style={{
                  textShadow: `0 0 30px ${character.color}50, 2px 2px 4px rgba(0,0,0,0.8)`,
                }}
              >
                {character.name}
              </h1>
            </motion.div>

            {/* Character Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/30">
                <div className="text-sm text-white/90 uppercase tracking-wider mb-1">{pageT("height")}</div>
                <div className="text-xl font-semibold text-white">{character.height}</div>
              </div>
              <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/30">
                <div className="text-sm text-white/90 uppercase tracking-wider mb-1">{pageT("birthday")}</div>
                <div className="text-xl font-semibold text-white">{character.birthday}</div>
              </div>
            </motion.div>

            {/* Character Description */}
            <motion.div
              className="bg-black/70 backdrop-blur-md rounded-2xl p-6 border border-white/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <p className="text-lg text-white leading-relaxed text-pretty">{t(`${character.id}.description`)}</p>
            </motion.div>

            {/* Animated accent line */}
            <motion.div
              className="h-1 rounded-full mt-8"
              style={{ backgroundColor: character.color }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1.1 }}
            />
          </motion.div>

          {/* Right side - Character Avatar */}
          <motion.div
            className="flex-shrink-0 mt-12 lg:mt-0 lg:ml-12"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              {/* Glowing background circle */}
              <motion.div
                className="absolute inset-0 rounded-full blur-2xl opacity-30"
                style={{ backgroundColor: character.color }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />

              {/* Character Avatar */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src={character.avatarUrl || "/placeholder.svg"}
                  alt={character.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white/30 shadow-2xl"
                />

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: character.color }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-30"
              style={{
                backgroundColor: character.color,
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 6 + i,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>
    </>
  )
}