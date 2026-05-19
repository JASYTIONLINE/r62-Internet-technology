/**
 * Renders the linear study plan table of contents from course-manifest.json + progress.
 */
(function () {
  function escapeHtml(s) {
    const d = document.createElement("div")
    d.textContent = s
    return d.innerHTML
  }

  function waitForProgress(maxMs = 8000) {
    return new Promise((resolve, reject) => {
      if (window.JasytiProgress) {
        resolve(window.JasytiProgress)
        return
      }
      const start = Date.now()
      const tick = () => {
        if (window.JasytiProgress) {
          resolve(window.JasytiProgress)
          return
        }
        if (Date.now() - start > maxMs) {
          reject(new Error("Study progress module did not load."))
          return
        }
        requestAnimationFrame(tick)
      }
      tick()
    })
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

  function formatTitle(step) {
    if (step.displayTitle) return step.displayTitle
    return step.title || step.id
  }

  function lessonStatus(step, progress) {
    const visited = progress.isLessonVisited(step.id)
    const pre = progress.isQuizPassed(`${step.id}-pre`)
    const post = progress.isQuizPassed(`${step.id}-post`)
    if (step.studyLesson) {
      if (visited && pre && post) return "done"
      if (visited || pre || post) return "partial"
      return "open"
    }
    return visited ? "done" : "open"
  }

  function iconForStatus(status) {
    if (status === "done") return "✅"
    if (status === "partial") return "🟨"
    return "⬜"
  }

  function quizIcon(progress, quizId) {
    return progress.isQuizPassed(quizId) ? "✅" : "⬜"
  }

  function buildToc(manifest, progress) {
    const domains = new Map()
    let finalExam = null

    for (const step of manifest.steps) {
      if (step.type === "exam") {
        finalExam = step
        continue
      }
      if (step.type === "info" && step.id?.endsWith("-hub")) {
        domains.set(step.domain, {
          hub: step,
          lessons: [],
          sectionQuiz: null,
        })
        continue
      }
      if (step.type === "lesson" && step.domain) {
        const block = domains.get(step.domain)
        if (block) block.lessons.push(step)
        continue
      }
      if (step.type === "quiz" && step.id?.endsWith("-section-quiz")) {
        const block = domains.get(step.domain)
        if (block) block.sectionQuiz = step
      }
    }

    let html = `<table class="study-path-table" aria-label="Network+ study plan">
      <thead>
        <tr>
          <th scope="col">Status</th>
          <th scope="col">Item</th>
          <th scope="col">Type</th>
        </tr>
      </thead>
      <tbody>`

    const sortedDomains = [...domains.entries()].sort((a, b) => a[0] - b[0])
    for (const [, block] of sortedDomains) {
      const hub = block.hub
      html += `<tr class="study-path-domain-row">
        <td>📂</td>
        <td colspan="2"><strong><a href="${stepUrl(hub.slug)}">${escapeHtml(hub.title)}</a></strong></td>
      </tr>`

      block.lessons.forEach((lesson, i) => {
        const status = lessonStatus(lesson, progress)
        const typeLabel = lesson.studyLesson
          ? "Lesson (intro · pre · learn · post)"
          : "Lesson"
        const detail =
          lesson.studyLesson && status === "partial"
            ? ` <span class="study-path-meta">pre ${progress.isQuizPassed(`${lesson.id}-pre`) ? "✅" : "⬜"} · post ${progress.isQuizPassed(`${lesson.id}-post`) ? "✅" : "⬜"}</span>`
            : ""
        html += `<tr class="study-path-lesson-row">
          <td>${iconForStatus(status)}</td>
          <td><a href="${stepUrl(lesson.slug)}">${i + 1}. ${escapeHtml(formatTitle(lesson))}</a>${detail}</td>
          <td>${typeLabel}</td>
        </tr>`
      })

      if (block.sectionQuiz) {
        const q = block.sectionQuiz
        html += `<tr class="study-path-quiz-row">
          <td>${quizIcon(progress, q.id)}</td>
          <td><a href="${stepUrl(q.slug)}">${escapeHtml(q.title)}</a></td>
          <td>Section quiz (85%)</td>
        </tr>`
      }

      if (hub.jukeboxSlug) {
        html += `<tr class="study-path-meta-row">
          <td>·</td>
          <td><a href="${stepUrl(hub.jukeboxSlug)}">Jukebox</a> <span class="study-path-meta">(supplementary)</span></td>
          <td>Media</td>
        </tr>`
      }
    }

    if (finalExam) {
      html += `<tr class="study-path-domain-row">
        <td colspan="3"><strong>Final assessment</strong></td>
      </tr>
      <tr class="study-path-exam-row">
        <td>${quizIcon(progress, finalExam.id)}</td>
        <td><a href="${stepUrl(finalExam.slug)}">${escapeHtml(finalExam.title)}</a></td>
        <td>Full exam</td>
      </tr>`
    }

    html += "</tbody></table>"
    return html
  }

  async function render() {
    const container = document.getElementById("study-path-list")
    if (!container) return

    try {
      const progress = await waitForProgress()
      const base = progress.getStaticBase()
      const res = await fetch(`${base}/course-manifest.json`)
      if (!res.ok) {
        throw new Error("Could not load course manifest.")
      }
      const manifest = await res.json()
      container.innerHTML = buildToc(manifest, progress)
    } catch (err) {
      container.innerHTML = `<p class="study-path-error">${escapeHtml(err.message)} Refresh the page or check that static study files deployed correctly.</p>`
      console.error("study-path:", err)
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render)
  } else {
    render()
  }
  document.addEventListener("nav", render)
})()
