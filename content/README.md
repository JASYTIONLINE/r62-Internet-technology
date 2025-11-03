---
title: Content Directory – Developer Reference
description: Technical overview of the content folder and authoring conventions for the Quartz site.
tags: [content, quartz, authoring, development]
draft: false
---

# `/content/` Directory — Developer README

## Purpose
This folder is the **source of truth for all public-facing pages** on the Quartz-based website.  
Every Markdown (`.md`) file here becomes a published page when Quartz builds the static site.  
Developers work here to create, organize, and maintain the written and media content.

Quartz reads this directory as the “site root” during its build process.

---

## How Quartz Uses This Folder
- Quartz recursively scans `/content/` for Markdown files.  
- Each folder becomes a section on the site; each `index.md` becomes that section’s landing page.  
- Any internal wiki link (`[[Some Page]]`) or relative Markdown link (`[text](relative/path.md)`) is resolved automatically to valid site URLs.  
- YAML front matter (`---` blocks at the top of each file) controls metadata such as title, tags, draft status, and publication order.  
- Assets or HTML components referenced from this folder are served from `/static/`.

---

## Structure and Conventions

| Element | Role |
|----------|------|
| **Numbered folders** (`00-welcome`, `01-network-plus`, etc.) | Define category order in site navigation. |
| **index.md** | The main entry point or summary page for that category. |
| **Other Markdown files** | Individual lessons, modules, or documentation pages. |
| **Relative links only** | Always link locally using `[[Page Name]]` or `../path/file.md` so pages render on GitHub and GitHub Pages. |
| **Draft flag** | Use `draft: true` in the front matter to exclude a file from publication. |

---

## Authoring Workflow
1. **Edit locally** in Obsidian or any Markdown editor.  
2. **Preview** with Quartz’s local server:  
   ```bash
   npx quartz build
   npx quartz serve
