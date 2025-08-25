import information from "@/assets/information.json"

export default function Footer() {
  return (
    <footer className="px-4 py-12 bg-card">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <div className="font-sans font-bold text-2xl text-primary">Fan Translation Project</div>
        <p className="text-muted-foreground">
          Unofficial Vietnamese translation of &quot;{information.originalName}&quot;. All rights belong to the original
          creators.
        </p>
        <div className="flex justify-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors duration-300">
            Translation Notes
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-300">
            Support the Author
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-300">
            Contact Translator
          </a>
        </div>
      </div>
    </footer>
  )
}