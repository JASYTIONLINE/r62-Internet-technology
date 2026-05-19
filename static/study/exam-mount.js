/**
 * Loads exam-widget.html into #practice-exam-app, then loads quiz.js.
 */
(function () {
  async function mount() {
    const root = document.getElementById("practice-exam-app")
    if (!root || root.dataset.mounted === "true") return

    const base =
      window.JasytiProgress?.getStaticBase() ||
      root.dataset.staticBase ||
      "/static/study"

    try {
      const res = await fetch(`${base}/exam-widget.html`)
      if (!res.ok) throw new Error("Could not load exam widget")
      root.innerHTML = await res.text()
      root.classList.add("container")
      root.dataset.mounted = "true"

      if (root.dataset.mode === "quiz") {
        const title = root.querySelector(".header-content h1")
        const subtitle = root.querySelector(".start-content h2")
        if (title) title.textContent = "Domain Check-in"
        if (subtitle) subtitle.textContent = "Network+ domain quiz"
      }
      if (root.dataset.mode === "section") {
        const title = root.querySelector(".header-content h1")
        const subtitle = root.querySelector(".start-content h2")
        if (title) title.textContent = "Section Quiz"
        if (subtitle) subtitle.textContent = "Must-know and key concepts"
      }

      await new Promise((resolve, reject) => {
        if (window.JasytiQuiz) {
          resolve()
          return
        }
        const s = document.createElement("script")
        s.src = `${base}/quiz.js`
        s.onload = resolve
        s.onerror = () => reject(new Error("Could not load quiz.js"))
        document.body.appendChild(s)
      })
      await window.JasytiQuiz.initQuizRoot(root)
    } catch (e) {
      root.innerHTML = `<p class="quiz-load-error">${e.message}</p>`
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount)
  } else {
    mount()
  }

  document.addEventListener("nav", () => {
    const root = document.getElementById("practice-exam-app")
    if (root && root.dataset.mounted !== "true") mount()
  })
})()
