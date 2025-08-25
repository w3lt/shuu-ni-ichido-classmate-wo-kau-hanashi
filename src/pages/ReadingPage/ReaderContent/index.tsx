import ChapterHeader from "./ChapterHeader"
import ChapterContent from "./ChapterContent"
import NavigationController from "./NavigationController"
import Footer from "./Footer"

export default function ReaderContent() {
  const chapterContent = {
    title: "Chapter 1: The Arrangement",
    content: `
      The rain drummed against the classroom windows as I sat alone, watching the droplets race down the glass. It was another ordinary Tuesday afternoon, or so I thought.

      "Miyamura-kun."

      I turned to see Shiina-san standing beside my desk, her expression as unreadable as always. She was one of those students who seemed to exist in a different world from the rest of us—quiet, mysterious, and somehow untouchable.

      "What is it, Shiina-san?" I asked, trying to keep the surprise out of my voice. We'd been classmates for months, but this was probably the first time she'd spoken directly to me.

      She glanced around the nearly empty classroom before leaning closer. "I have a proposition for you."

      The way she said it made my heart skip a beat. There was something serious in her tone, something that suggested this wasn't going to be an ordinary conversation.

      "Every week," she continued, her voice barely above a whisper, "I want you to buy me. Five thousand yen for two hours of my time."

      I stared at her, certain I'd misheard. "Buy you?"

      "Not what you're thinking," she said quickly, a faint blush coloring her cheeks. "I just... I need someone to spend time with. Someone who won't ask questions or expect anything more than what I'm willing to give."

      The rain continued its steady rhythm against the windows as I tried to process what she was asking. Five thousand yen wasn't a small amount for a high school student, but something in her eyes told me this wasn't really about the money.

      "Why me?" I finally asked.

      She was quiet for a long moment, her gaze drifting to the window. "Because you're the only person in this class who's never tried to figure me out."

      And that's how it began—our strange arrangement that would change both of our lives in ways neither of us could have imagined.
    `,
  }

  return (
    <main className="flex-1 transition-all duration-300">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Chapter Header */}
        <ChapterHeader volume={1} title={chapterContent.title} />
        <ChapterContent content={chapterContent.content} />

        <NavigationController />
        <Footer />
      </div>
    </main>
  )
}