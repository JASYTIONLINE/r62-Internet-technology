/**
 * Scans LearnerDocs markdown lessons and writes course-manifest.json.
 * Run: node scripts/generate-manifest.mjs
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.join(__dirname, "..")
const learnerRoot = path.join(
  repoRoot,
  "content/01-network-plus/CompTIA-NetworkPlus-N10009-LearnerDocs",
)
const outPath = path.join(repoRoot, "static/study/course-manifest.json")

/** Match Quartz folder slugs (whitespace → hyphen). */
function slugifySegment(segment) {
  return segment.replace(/\s/g, "-")
}

function toContentSlug(...parts) {
  return parts.map(slugifySegment).join("/")
}

function parseFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, "utf8")
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}
  const block = match[1]
  const titleMatch = block.match(/^title:\s*(.+)$/m)
  let title = titleMatch ? titleMatch[1].trim() : null
  if (title && /^["']/.test(title)) {
    title = title.replace(/^["']|["']$/g, "")
  }
  const studyLesson = /^studyLesson:\s*true\s*$/m.test(block)
  return { title, studyLesson }
}

const DOMAIN_META = [
  { num: 1, folder: "1 - Networking Concepts", name: "Networking Concepts" },
  { num: 2, folder: "2 - Network Implementation", name: "Network Implementation" },
  { num: 3, folder: "3 - Network Operations", name: "Network Operations" },
  { num: 4, folder: "4 - Network Security Fundamentals", name: "Network Security" },
  { num: 5, folder: "5 - Network Troubleshooting", name: "Network Troubleshooting" },
]

const steps = [
  {
    id: "welcome",
    type: "info",
    title: "Welcome Center",
    slug: "00-welcome",
    description: "How this site works and study tips.",
  },
  {
    id: "course-intro",
    type: "info",
    title: "Network+ Course Overview",
    slug: "01-network-plus",
    description: "CompTIA Network+ N10-009 study hub.",
  },
]

for (const domain of DOMAIN_META) {
  const domainDir = path.join(learnerRoot, domain.folder)
  const domainSlug = toContentSlug(
    "01-network-plus",
    "CompTIA-NetworkPlus-N10009-LearnerDocs",
    domain.folder,
  )

  steps.push({
    id: `d${domain.num}-hub`,
    type: "info",
    title: `Domain ${domain.num}: ${domain.name}`,
    slug: domainSlug,
    domain: domain.num,
    sectionQuizSlug: `01-network-plus/quizzes/section-${domain.num}-quiz`,
    jukeboxSlug: `01-network-plus/jukebox/domain-${domain.num}`,
    description: `Lessons and topics for ${domain.name}.`,
  })

  if (!fs.existsSync(domainDir)) {
    console.warn(`Missing domain folder: ${domainDir}`)
    continue
  }

  const lessons = fs
    .readdirSync(domainDir)
    .filter((f) => f.endsWith(".md") && f !== "index.md")
    .sort((a, b) => a.localeCompare(b))

  lessons.forEach((file, index) => {
    const base = file.replace(/\.md$/, "")
    const lessonNum = String(index + 1).padStart(2, "0")
    const filePath = path.join(domainDir, file)
    const fm = parseFrontmatter(filePath)
    steps.push({
      id: `d${domain.num}-l${lessonNum}`,
      type: "lesson",
      title: base.replace(/-/g, " "),
      displayTitle: fm.title || null,
      slug: toContentSlug(
        "01-network-plus",
        "CompTIA-NetworkPlus-N10009-LearnerDocs",
        domain.folder,
        base,
      ),
      domain: domain.num,
      file: file,
      studyLesson: fm.studyLesson,
    })
  })

  steps.push({
    id: `d${domain.num}-quiz`,
    type: "quiz",
    title: `Domain ${domain.num} check-in (legacy)`,
    slug: "01-network-plus/quizzes/domain-check-in",
    domain: domain.num,
    questionBank: "questions/question-bank.json",
    questionFilter: {
      domain: domain.num,
      pool: "section",
      tags: ["mustKnow", "keyConcept"],
    },
    questionCount: 15,
    passPercent: 85,
    hiddenFromStudyPath: true,
  })

  steps.push({
    id: `d${domain.num}-section-quiz`,
    type: "quiz",
    title: `Section quiz — Domain ${domain.num}`,
    slug: `01-network-plus/quizzes/section-${domain.num}-quiz`,
    domain: domain.num,
    questionBank: "questions/question-bank.json",
    questionFilter: {
      domain: domain.num,
      pool: "section",
      tags: ["mustKnow", "keyConcept"],
    },
    questionCount: 15,
    passPercent: 85,
  })
}

steps.push({
  id: "final-exam",
  type: "exam",
  title: "Full Network+ Practice Exam",
  slug: "01-network-plus/quizzes/practice-exam",
  questionBank: "questions/exam.json",
  passPercent: 95,
})

const manifest = {
  schemaVersion: 1,
  courseId: "comptia-network-plus-n10-009",
  title: "CompTIA Network+ (N10-009)",
  generatedAt: new Date().toISOString(),
  steps,
}

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2))
console.log(`Wrote ${steps.length} steps to ${outPath}`)
