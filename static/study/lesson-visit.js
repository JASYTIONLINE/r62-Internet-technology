/**
 * Marks manifest lessons as visited when the current URL matches a lesson slug.
 */
(function () {
  async function init() {
    if (!window.JasytiProgress) return

    const base = JasytiProgress.getStaticBase()
    let manifest
    try {
      const res = await fetch(`${base}/course-manifest.json`)
      if (!res.ok) return
      manifest = await res.json()
    } catch {
      return
    }

    const current = JasytiProgress.pagePath()
    if (!current) return

    for (const step of manifest.steps || []) {
      if (step.type !== "lesson") continue
      const slug = (step.slug || "").replace(/^\//, "")
      if (slug === current || current.endsWith(slug)) {
        JasytiProgress.markVisited(step.id)
        break
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init)
  } else {
    init()
  }
})()
