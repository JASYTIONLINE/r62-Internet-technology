/**
 * Study lesson chrome: left sidebar (lessons + exam) and top nav.
 */
(function () {
  function staticBase() {
    return window.JasytiProgress?.getStaticBase() || "/static/study"
  }

  function sitePrefix() {
    const base = staticBase()
    if (base.startsWith("http")) {
      const u = new URL(base)
      return u.pathname.replace(/\/static\/study\/?$/, "") || ""
    }
    const parts = window.location.pathname.split("/").filter(Boolean)
    if (parts.length && !parts[parts.length - 1].includes(".")) {
      return parts.length > 1 ? "/" + parts.slice(0, -1).join("/") : ""
    }
    return ""
  }

  function hrefForSlug(slug) {
    const prefix = sitePrefix()
    if (!slug) return prefix || "/"
    return `${prefix}/${slug}`.replace(/\/+/g, "/")
  }

  async function loadManifest() {
    const res = await fetch(`${staticBase()}/course-manifest.json`)
    if (!res.ok) throw new Error("Could not load course manifest")
    return res.json()
  }

  function renderSidebar(manifest, domain, activeLessonId) {
    const lessons = manifest.steps.filter(
      (s) => s.type === "lesson" && s.domain === domain,
    )
    const finalExam = manifest.steps.find((s) => s.id === "final-exam")
    const items = [
      `<li><a href="${hrefForSlug("")}">Home</a></li>`,
      ...lessons.map((s) => {
        const active = s.id === activeLessonId ? ' class="is-active"' : ""
        return `<li><a href="${hrefForSlug(s.slug)}"${active}>${escapeHtml(s.title)}</a></li>`
      }),
    ]
    if (finalExam) {
      items.push(
        `<li><a href="${hrefForSlug(finalExam.slug)}">${escapeHtml(finalExam.title)}</a></li>`,
      )
    }
    return `<nav class="study-sidebar" aria-label="Section lessons">
      <h2>Lessons</h2>
      <ul>${items.join("")}</ul>
    </nav>`
  }

  function renderTopNav(domain) {
    return `<nav class="study-topnav" aria-label="Section navigation">
      <a href="${hrefForSlug("")}">Home</a>
      <a href="${hrefForSlug(`01-network-plus/quizzes/section-${domain}-quiz`)}">Section Quiz</a>
      <a href="${hrefForSlug(`01-network-plus/jukebox/domain-${domain}`)}">Jukebox</a>
    </nav>`
  }

  function escapeHtml(text) {
    const d = document.createElement("div")
    d.textContent = text
    return d.innerHTML
  }

  async function init() {
    const page = document.querySelector(".study-page")
    const mount = document.getElementById("study-chrome-mount")
    if (!page || !mount || page.dataset.chromeBuilt === "true") return

    const domain = parseInt(page.dataset.domain, 10)
    const lessonId = page.dataset.lessonId || ""
    if (!domain) return

    try {
      const manifest = await loadManifest()
      const layout = document.createElement("div")
      layout.className = "study-layout"

      const sidebar = document.createElement("div")
      sidebar.innerHTML = renderSidebar(manifest, domain, lessonId)

      const main = document.createElement("div")
      main.className = "study-main"
      main.innerHTML = renderTopNav(domain)

      const bodyMount = document.createElement("div")
      bodyMount.className = "study-body-mount"

      const banner = page.querySelector(".study-banner")
      const sections = page.querySelectorAll(
        ".study-section, .study-quiz, .study-learning",
      )
      const quizApp = page.querySelector("#practice-exam-app")
      const extra = page.querySelector(".study-page-extra")
      if (banner) bodyMount.appendChild(banner)
      sections.forEach((el) => bodyMount.appendChild(el))
      if (quizApp) bodyMount.appendChild(quizApp)
      if (extra) bodyMount.appendChild(extra)

      main.appendChild(bodyMount)
      layout.appendChild(sidebar.firstElementChild)
      layout.appendChild(main)

      mount.replaceWith(layout)
      page.dataset.chromeBuilt = "true"
    } catch (e) {
      mount.innerHTML = `<p class="quiz-load-error">${e.message}</p>`
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init)
  } else {
    init()
  }
  document.addEventListener("nav", init)
})()
