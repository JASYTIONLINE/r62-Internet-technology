/**
 * Renders the linear study punchlist from course-manifest.json + progress.
 */
(function () {
  function escapeHtml(s) {
    const d = document.createElement("div")
    d.textContent = s
    return d.innerHTML
  }

  function stepUrl(slug) {
    let clean = (slug || "").replace(/^\//, "")
    const pagePath = window.JasytiProgress?.pagePath() || ""
    const prefix = "01-network-plus/"
    if (pagePath.startsWith(prefix) && clean.startsWith(prefix)) {
      clean = clean.slice(prefix.length)
    }
    return clean ? clean.split("/").map(encodeURIComponent).join("/") : "#"
  }

  function iconFor(step, progress) {
    if (step.type === "lesson") {
      return progress.isLessonVisited(step.id) ? "✅" : "⬜"
    }
    if (step.type === "quiz") {
      return progress.isQuizPassed(step.id) ? "✅" : "⬜"
    }
    return "📄"
  }

  async function render() {
    const container = document.getElementById("study-path-list")
    if (!container || !window.JasytiProgress) return

    const base = JasytiProgress.getStaticBase()
    const res = await fetch(`${base}/course-manifest.json`)
    if (!res.ok) {
      container.innerHTML = "<p>Could not load course manifest.</p>"
      return
    }
    const manifest = await res.json()
    const progress = window.JasytiProgress

    let html = "<ul class=\"study-path-steps\">"
    for (const step of manifest.steps) {
      if (step.type === "info" && step.id !== "welcome" && step.id !== "course-intro") {
        html += `<li class="study-path-domain"><strong>${escapeHtml(step.title)}</strong></li>`
        continue
      }
      if (step.type === "exam") {
        html += `<li class="study-path-exam"><a href="${stepUrl(step.slug)}">${iconFor(step, progress)} ${escapeHtml(step.title)}</a></li>`
        continue
      }
      if (step.type === "lesson" || step.type === "quiz") {
        const href = stepUrl(step.slug)
        const qs = step.type === "quiz" ? `?quiz=${encodeURIComponent(step.id)}` : ""
        html += `<li><a href="${href}${qs}">${iconFor(step, progress)} ${escapeHtml(step.title)}</a></li>`
      }
    }
    html += "</ul>"
    container.innerHTML = html
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render)
  } else {
    render()
  }
})()
