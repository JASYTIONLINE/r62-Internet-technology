/**
 * Copies repo-root static/study into public/static/study after Quartz build.
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.join(__dirname, "..")
const src = path.join(repoRoot, "static/study")
const dest = path.join(repoRoot, "public/static/study")

function copyRecursive(from, to) {
  fs.mkdirSync(to, { recursive: true })
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const srcPath = path.join(from, entry.name)
    const destPath = path.join(to, entry.name)
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

if (!fs.existsSync(src)) {
  console.error("Missing static/study — run from repo root after adding assets.")
  process.exit(1)
}

if (!fs.existsSync(path.join(repoRoot, "public"))) {
  console.error("Missing public/ — run npx quartz build first.")
  process.exit(1)
}

copyRecursive(src, dest)
console.log(`Copied ${src} → ${dest}`)
