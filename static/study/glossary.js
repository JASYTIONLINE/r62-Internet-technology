(function () {
  async function renderGlossary() {
    const container = document.getElementById("glossary-container")
    if (!container) return

    const base = window.JasytiProgress?.getStaticBase() || "/static/study"
    try {
      const res = await fetch(`${base}/glossary.json`)
      if (!res.ok) throw new Error("Failed to load glossary")
      const data = await res.json()
      const terms = (data.terms || []).sort((a, b) =>
        a.term.localeCompare(b.term),
      )

      if (terms.length === 0) {
        container.innerHTML = "<p>No glossary terms yet.</p>"
        return
      }

      let html = ""
      for (const t of terms) {
        html += `<section id="${t.term.toLowerCase().replace(/\s+/g, "-")}"><h3>${t.term}</h3><p>${t.definition}</p></section>`
      }
      container.innerHTML = html
    } catch (e) {
      container.innerHTML = `<p>Could not load glossary: ${e.message}</p>`
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderGlossary)
  } else {
    renderGlossary()
  }
})()
