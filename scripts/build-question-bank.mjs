/**
 * Master question bank → exam.json (and validation).
 * Run: node scripts/build-question-bank.mjs
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.join(__dirname, "..")
const bankPath = path.join(repoRoot, "static/study/questions/question-bank.json")
const examPath = path.join(repoRoot, "static/study/questions/exam.json")
const legacyExamPath = examPath
const lessonsDir = path.join(repoRoot, "static/study/questions/lessons")

const DOMAIN_NAMES = {
  1: "Networking Concepts",
  2: "Network Implementation",
  3: "Network Operations",
  4: "Network Security",
  5: "Network Troubleshooting",
}

const PILOT_QUESTIONS = [
  {
    id: "d2-l01-pre-01",
    domain: 2,
    lessonId: "d2-l01",
    pools: ["pre", "section", "exam"],
    tags: ["fact"],
    question:
      "Static routing is best described as which of the following?",
    options: [
      "A. Routes learned automatically from neighboring routers",
      "B. Routes manually entered into a router's routing table",
      "C. Routes assigned only by DHCP servers",
      "D. Routes that change every time a link fails",
    ],
    correct: 1,
    explanation:
      "Static routes are administratively configured and stored in the routing table until changed or removed.",
  },
  {
    id: "d2-l01-pre-02",
    domain: 2,
    lessonId: "d2-l01",
    pools: ["pre", "section", "exam"],
    tags: ["fact", "mustKnow"],
    question: "A default static route is commonly used to:",
    options: [
      "A. Provide a path of last resort to a next hop",
      "B. Replace all VLAN configurations on a switch",
      "C. Encrypt traffic between two subnets",
      "D. Assign IP addresses to wireless clients",
    ],
    correct: 0,
    explanation:
      "A default route (0.0.0.0/0) forwards traffic when no more specific route exists.",
  },
  {
    id: "d2-l01-pre-03",
    domain: 2,
    lessonId: "d2-l01",
    pools: ["pre", "exam"],
    tags: ["fact"],
    question: "Compared with dynamic routing protocols, static routing typically has:",
    options: [
      "A. Higher CPU overhead on large networks",
      "B. Lower administrative control",
      "C. Lower protocol overhead on the router",
      "D. Automatic failover without configuration",
    ],
    correct: 2,
    explanation:
      "Static routes do not exchange routing updates, so they add little routing protocol overhead.",
  },
  {
    id: "d2-l01-post-01",
    domain: 2,
    lessonId: "d2-l01",
    pools: ["post", "section", "exam"],
    tags: ["fact", "keyConcept"],
    question:
      "On a Cisco router, which command adds a static route to 10.10.10.0/24 via next-hop 172.16.1.2?",
    options: [
      "A. ip route 10.10.10.0 255.255.255.0 172.16.1.2",
      "B. route-static 10.10.10.0/24 gateway 172.16.1.2",
      "C. set default-gateway 172.16.1.2",
      "D. ip static 10.10.10.0 172.16.1.2 255.255.255.0",
    ],
    correct: 0,
    explanation:
      "Cisco static routes use: ip route <network> <mask> <next-hop>.",
  },
  {
    id: "d2-l01-post-02",
    domain: 2,
    lessonId: "d2-l01",
    pools: ["post", "exam"],
    tags: ["fact"],
    question: "Static routes are often used in very small networks because:",
    options: [
      "A. They require OSPF to be disabled globally",
      "B. The topology is simple and routes rarely change",
      "C. They automatically summarize all classful networks",
      "D. They eliminate the need for default gateways",
    ],
    correct: 1,
    explanation:
      "Small stable networks may not need the complexity of dynamic routing.",
  },
  {
    id: "d2-l01-post-03",
    domain: 2,
    lessonId: "d2-l01",
    pools: ["post", "section", "exam"],
    tags: ["mustKnow", "keyConcept"],
    question: "One benefit of static routing is:",
    options: [
      "A. Predictable path selection controlled by the administrator",
      "B. Automatic discovery of all remote AS paths",
      "C. Self-healing convergence without configuration",
      "D. Elimination of all routing table entries",
    ],
    correct: 0,
    explanation:
      "Administrators choose exactly where traffic is sent, which aids predictability and control.",
  },
]

const PILOT_LESSON_INDEX = {
  lessonId: "d2-l01",
  pre: ["d2-l01-pre-01", "d2-l01-pre-02", "d2-l01-pre-03"],
  post: ["d2-l01-post-01", "d2-l01-post-02", "d2-l01-post-03"],
}

function migrateFromLegacyExam() {
  const legacy = JSON.parse(fs.readFileSync(legacyExamPath, "utf8"))
  return legacy.questions.map((q) => ({
    id: `legacy-q${q.id}`,
    domain: q.domain,
    lessonId: null,
    pools: ["section", "exam"],
    tags: ["mustKnow"],
    question: q.question,
    options: q.options,
    correct: q.correct,
    explanation: q.explanation,
  }))
}

function loadBank() {
  if (fs.existsSync(bankPath)) {
    return JSON.parse(fs.readFileSync(bankPath, "utf8"))
  }
  const questions = migrateFromLegacyExam()
  for (const pq of PILOT_QUESTIONS) {
    if (!questions.find((x) => x.id === pq.id)) questions.push(pq)
  }
  return {
    schemaVersion: 1,
    title: "CompTIA Network+ (N10-009) Question Bank",
    questions,
  }
}

function mergePilotQuestions(bank) {
  const ids = new Set(bank.questions.map((q) => q.id))
  for (const pq of PILOT_QUESTIONS) {
    const idx = bank.questions.findIndex((q) => q.id === pq.id)
    if (idx >= 0) bank.questions[idx] = pq
    else bank.questions.push(pq)
    ids.add(pq.id)
  }
  return bank
}

function ensureExamPool(question) {
  const pools = new Set(question.pools || [])
  pools.add("exam")
  question.pools = [...pools]
  return question
}

function validate(bank) {
  const ids = new Set()
  for (const q of bank.questions) {
    if (!q.id) throw new Error("Question missing id")
    if (ids.has(q.id)) throw new Error(`Duplicate id: ${q.id}`)
    ids.add(q.id)
    if (!q.domain || q.domain < 1 || q.domain > 5) {
      throw new Error(`Invalid domain on ${q.id}`)
    }
    if (!Array.isArray(q.pools) || q.pools.length === 0) {
      throw new Error(`Question ${q.id} needs at least one pool`)
    }
    if (!Array.isArray(q.tags) || q.tags.length === 0) {
      throw new Error(`Question ${q.id} needs at least one tag`)
    }
  }

  fs.mkdirSync(lessonsDir, { recursive: true })
  const lessonPath = path.join(lessonsDir, `${PILOT_LESSON_INDEX.lessonId}.json`)
  for (const id of [...PILOT_LESSON_INDEX.pre, ...PILOT_LESSON_INDEX.post]) {
    if (!ids.has(id)) throw new Error(`Lesson index references missing question: ${id}`)
  }
  fs.writeFileSync(lessonPath, JSON.stringify(PILOT_LESSON_INDEX, null, 2))
}

function toExamJson(bank) {
  const examQuestions = bank.questions
    .filter((q) => q.pools.includes("exam"))
    .map((q, index) => ({
      id: index + 1,
      bankId: q.id,
      domain: q.domain,
      domainName: DOMAIN_NAMES[q.domain],
      lessonId: q.lessonId ?? null,
      pools: q.pools,
      tags: q.tags,
      question: q.question,
      options: q.options,
      correct: q.correct,
      explanation: q.explanation,
    }))
  return { questions: examQuestions }
}

function main() {
  let bank = loadBank()
  bank = mergePilotQuestions(bank)
  bank.questions = bank.questions.map(ensureExamPool)
  bank.generatedAt = new Date().toISOString()
  validate(bank)
  fs.mkdirSync(path.dirname(bankPath), { recursive: true })
  fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2))
  fs.writeFileSync(examPath, JSON.stringify(toExamJson(bank), null, 2))
  console.log(
    `Wrote ${bank.questions.length} bank questions; exam.json has ${toExamJson(bank).questions.length} questions`,
  )
}

main()
