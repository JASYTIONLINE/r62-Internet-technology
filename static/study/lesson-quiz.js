/**
 * Mounts pre/post lesson quiz widgets into .study-quiz sections.
 */
(function () {
  function staticBase() {
    return (
      window.JasytiProgress?.getStaticBase() ||
      document.querySelector(".study-page")?.dataset?.staticBase ||
      "/static/study"
    )
  }

  function prefixWidgetHtml(html, prefix) {
    return html.replace(/\bid="([^"]+)"/g, `id="${prefix}-$1"`)
  }

  async function mountLessonQuiz(section) {
    if (section.dataset.quizMounted === "true") return

    const lessonId = section.dataset.lessonId
    const phase = section.dataset.quizPhase
    if (!lessonId || !phase) return

    const base = staticBase()
    const prefix = `lq-${lessonId}-${phase}`

    const res = await fetch(`${base}/exam-widget.html`)
    if (!res.ok) {
      section.innerHTML = `<p class="quiz-load-error">Could not load quiz widget.</p>`
      return
    }

    const root = document.createElement("div")
    root.className = "lesson-quiz-root container"
    root.id = `${prefix}-root`
    root.dataset.idPrefix = prefix
    root.dataset.mode = "lesson"
    root.dataset.lessonId = lessonId
    root.dataset.quizPhase = phase
    root.dataset.questionsUrl = `${base}/questions/question-bank.json`
    root.dataset.passPercent = section.dataset.passPercent || "80"
    root.dataset.staticBase = base
    root.innerHTML = prefixWidgetHtml(await res.text(), prefix)

    const heading = document.createElement("h3")
    heading.className = "study-quiz-heading"
    heading.textContent = phase === "pre" ? "Pre-quiz" : "Post-quiz"
    section.appendChild(heading)
    section.appendChild(root)
    section.dataset.quizMounted = "true"

    if (!window.JasytiQuiz) {
      await new Promise((resolve, reject) => {
        const s = document.createElement("script")
        s.src = `${base}/quiz.js`
        s.onload = resolve
        s.onerror = reject
        document.body.appendChild(s)
      })
    }
    await window.JasytiQuiz.initQuizRoot(root)
  }

  async function boot() {
    const sections = document.querySelectorAll(".study-quiz[data-quiz-phase]")
    for (const section of sections) {
      await mountLessonQuiz(section)
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot)
  } else {
    boot()
  }
  document.addEventListener("nav", boot)
})()
