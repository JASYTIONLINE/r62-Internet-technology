/**
 * Submodule layout: jackyzha0/quartz in ./quartz/ expects config/layout/build
 * at the submodule root. This site keeps them at the repo root — add wrappers.
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.join(__dirname, "..")
const quartzRoot = path.join(repoRoot, "quartz")
const innerBuild = path.join(quartzRoot, "quartz/build.ts")

const wrappers = [
  {
    file: path.join(quartzRoot, "build.ts"),
    content: `// Auto-generated — do not edit
export { default } from "./quartz/build.ts"
`,
  },
  {
    file: path.join(quartzRoot, "quartz.config.ts"),
    content: `// Auto-generated — do not edit
export { default } from "../quartz.config.ts"
`,
  },
  {
    file: path.join(quartzRoot, "quartz.layout.ts"),
    content: `// Auto-generated — do not edit
export * from "../quartz.layout.ts"
`,
  },
]

if (!fs.existsSync(innerBuild)) {
  console.error("Missing quartz/quartz/build.ts — run: git submodule update --init")
  process.exit(1)
}

for (const { file, content } of wrappers) {
  if (!fs.existsSync(file) || fs.readFileSync(file, "utf8") !== content) {
    fs.writeFileSync(file, content)
    console.log(`Updated ${path.relative(repoRoot, file)}`)
  }
}

