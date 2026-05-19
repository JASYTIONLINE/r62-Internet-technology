/**
 * JASYTI study progress — localStorage adapter (swap for API later).
 */
(function () {
  const STORAGE_KEY = "jasyti-netplus-progress"
  const SCHEMA_VERSION = 1
  const USER_ID = "local"

  function emptyState() {
    return {
      schemaVersion: SCHEMA_VERSION,
      userId: USER_ID,
      lessons: {},
      quizzes: {},
      lastExam: null,
      updatedAt: null,
    }
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return emptyState()
      const data = JSON.parse(raw)
      if (data.schemaVersion !== SCHEMA_VERSION) return emptyState()
      return data
    } catch {
      return emptyState()
    }
  }

  function save(data) {
    data.updatedAt = new Date().toISOString()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }

  function getStaticBase() {
    if (typeof window !== "undefined") {
      const host = window.location.hostname
      if (host === "localhost" || host === "127.0.0.1") {
        return `${window.location.origin}/static/study`
      }
    }
    const root = document.getElementById("jasyti-study-root")
    if (root?.dataset?.staticBase) return root.dataset.staticBase.replace(/\/$/, "")
    const segments = window.location.pathname.split("/").filter(Boolean)
    if (segments.length > 0) segments.pop()
    const prefix = segments.length ? "/" + segments.join("/") : ""
    return `${prefix}/static/study`
  }

  function pagePath() {
    let p = window.location.pathname
    if (p.endsWith("/")) p = p.slice(0, -1)
    if (p.endsWith(".html")) p = p.slice(0, -5)
    if (p.endsWith("/index")) p = p.slice(0, -6)
    const parts = p.split("/").filter(Boolean)
    if (parts.length && parts[parts.length - 1] === "index") parts.pop()
    return parts.join("/")
  }

  const store = {
    load,
    save,
    getStaticBase,
    pagePath,

    markVisited(lessonId) {
      const data = load()
      if (!data.lessons[lessonId]) {
        data.lessons[lessonId] = { visited: false }
      }
      if (!data.lessons[lessonId].visited) {
        data.lessons[lessonId].visited = true
        data.lessons[lessonId].visitedAt = new Date().toISOString()
        save(data)
      }
    },

    markQuizPassed(quizId, passed, bestScore) {
      const data = load()
      const prev = data.quizzes[quizId] || { passed: false, attempts: 0 }
      data.quizzes[quizId] = {
        passed: passed || prev.passed,
        bestScore:
          bestScore != null
            ? Math.max(bestScore, prev.bestScore ?? 0)
            : (prev.bestScore ?? null),
        attempts: (prev.attempts || 0) + 1,
        lastAttemptAt: new Date().toISOString(),
      }
      save(data)
    },

    saveExamResult(result) {
      const data = load()
      data.lastExam = {
        ...result,
        at: new Date().toISOString(),
      }
      save(data)
    },

    isLessonVisited(lessonId) {
      return !!load().lessons[lessonId]?.visited
    },

    isQuizPassed(quizId) {
      return !!load().quizzes[quizId]?.passed
    },

    reset() {
      localStorage.removeItem(STORAGE_KEY)
    },
  }

  window.JasytiProgress = store
})()
