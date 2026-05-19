import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const learnerRoot = path.join(
  __dirname,
  "../content/01-network-plus/CompTIA-NetworkPlus-N10009-LearnerDocs",
)

const domains = [
  { num: 1, folder: "1 - Networking Concepts", short: "Networking Concepts" },
  { num: 2, folder: "2 - Network Implementation", short: "Network Implementation" },
  { num: 3, folder: "3 - Network Operations", short: "Network Operations" },
  { num: 4, folder: "4 - Network Security Fundamentals", short: "Network Security" },
  { num: 5, folder: "5 - Network Troubleshooting", short: "Network Troubleshooting" },
]

for (const d of domains) {
  const dir = path.join(learnerRoot, d.folder)
  const lessons = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "index.md").sort()
    : []

  const links = lessons
    .map((f) => {
      const title = f.replace(/\.md$/, "").replace(/-/g, " ")
      return `- [${title}](${encodeURIComponent(f.replace(/\.md$/, ""))})`
    })
    .join("\n")

  const body = `---
title: "Domain ${d.num}: ${d.short}"
description: Network+ exam domain ${d.num} lessons.
draft: false
---

# Domain ${d.num}: ${d.short}

[← Learner docs index](../) · [Course hub](../../) · [Study path](../../study-path)

## Lessons

${links || "_No markdown lessons in this folder yet. See PDFs or add notes._"}

## Check-in

After studying this domain, take the [domain check-in](../../quizzes/domain-check-in?quiz=d${d.num}-quiz) (85% to pass).

`

  fs.writeFileSync(path.join(dir, "index.md"), body)
  console.log(`Wrote index for domain ${d.num} (${lessons.length} lessons)`)
}
