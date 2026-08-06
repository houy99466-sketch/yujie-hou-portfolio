# iFocus Portfolio Publishing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the image-backed iFocus project as the fifth engineering system and make every GitHub Pages route load one source-built release.

**Architecture:** `yujie-hou-portfolio` is the canonical React/Vite source. A tested Node export script converts `dist` into a complete GitHub Pages artifact with static entry files for every exact route. The workflow in `houy99466-sketch.github.io` checks out the source repository, validates it, builds it, exports it to `site`, and deploys only that directory.

**Tech Stack:** React 19, React Router 7, Vite 8, Vitest 4, Node.js 24, pnpm 11, GitHub Actions Pages.

---

### Task 1: Isolate and reconcile both repository histories

**Files:**
- Existing source repository: `E:\codex produce\yujie-hou-portfolio`
- Source worktree: `E:\codex produce\yujie-hou-portfolio\.worktrees\ifocus-pages-publishing`
- Pages repository: `E:\codex produce\yujie-hou-portfolio-pages`
- Pages worktree: `E:\codex produce\.worktrees\yujie-hou-portfolio-pages\ifocus-pages-publishing`

- [ ] **Step 1: Create the source worktree from the approved local source history**

```powershell
git worktree add ".worktrees\ifocus-pages-publishing" -b fix/ifocus-pages-publishing
```

- [ ] **Step 2: Merge the fetched remote source history without losing the local image**

```powershell
git merge --no-ff origin/main -m "merge: reconcile remote iFocus update"
git ls-files public/assets/ifocus-cover.webp
```

Expected: the merge succeeds and prints `public/assets/ifocus-cover.webp`.

- [ ] **Step 3: Create the Pages worktree from the latest fetched remote branch**

```powershell
git worktree add "E:\codex produce\.worktrees\yujie-hou-portfolio-pages\ifocus-pages-publishing" -b fix/ifocus-pages-publishing-pages origin/main
```

- [ ] **Step 4: Install dependencies and verify the source baseline**

```powershell
pnpm install --frozen-lockfile
pnpm test
```

Expected: 25 existing tests pass before new tests are added.

### Task 2: Fix five-system copy and protect iFocus behavior with tests

**Files:**
- Modify: `tests/App.test.jsx`
- Modify: `tests/site-assets.test.js`
- Modify: `src/i18n/translations.js`

- [ ] **Step 1: Write failing UI assertions**

Update the systems-page test to expect five systems, the exact Chinese count, and the iFocus link:

```jsx
test('lists all five engineering systems on the systems page', () => {
  renderAt('/systems')

  expect(screen.getByText('5 个项目 · 真实硬件 / 真机部署 / 公开仓库')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /iFocus：面向专注状态管理的 Physical AI 系统/ })).toHaveAttribute(
    'href',
    '/systems/ifocus',
  )
})
```

Extend the language-switch test with:

```jsx
expect(screen.getByText('5 systems · 3 tools')).toBeInTheDocument()
```

Add a direct English iFocus case to the existing localized route table:

```jsx
['/systems/ifocus', 'iFocus: Physical AI System for Attention State Management', 'PC-side technical architecture and attention detection pipeline development'],
```

Add the local asset regression test:

```js
test('stores the iFocus cover locally and references it from the system data', () => {
  const systems = readFileSync('src/data/systems.js', 'utf8')

  expect(existsSync('public/assets/ifocus-cover.webp')).toBe(true)
  expect(systems).toContain("image: '/assets/ifocus-cover.webp'")
})
```

- [ ] **Step 2: Run the focused UI test and verify RED**

```powershell
pnpm test tests/App.test.jsx tests/site-assets.test.js
```

Expected: failure because the Chinese and English overview copy still reports four systems.

- [ ] **Step 3: Change the fixed counts from four to five**

In `src/i18n/translations.js`, make these exact replacements:

```js
publicCount: '5 个系统 · 3 个工具',
systemsTitle: '五个可以继续深入的项目',
description: '五个项目横跨自主机器人、嵌入式控制、XR 数字孪生、AI 机器人交互和 Physical AI 人机交互。每个详情页都区分系统结果、个人职责、证据与未完成边界。',
aside: '5 个项目 · 真实硬件 / 真机部署 / 公开仓库',
```

And the English equivalents:

```js
publicCount: '5 systems · 3 tools',
systemsTitle: 'Five projects to explore in depth',
description: 'Five projects spanning autonomous robotics, embedded control, XR digital twins, AI-driven robot interaction, and Physical AI human-computer interaction. Each case separates system outcomes, personal responsibilities, evidence, and unfinished boundaries.',
aside: '5 projects · Real hardware / On-device deployment / Public repositories',
```

- [ ] **Step 4: Run the focused tests and verify GREEN**

```powershell
pnpm test tests/App.test.jsx tests/site-assets.test.js
```

Expected: all focused tests pass.

- [ ] **Step 5: Commit the UI and asset regression fix**

```powershell
git add tests/App.test.jsx tests/site-assets.test.js src/i18n/translations.js
git commit -m "fix: publish iFocus as the fifth system"
```

### Task 3: Add a tested static-route exporter

**Files:**
- Create: `tests/export-pages.test.js`
- Create: `scripts/export-pages.mjs`
- Modify: `package.json`
- Modify: `README.md`

- [ ] **Step 1: Write the failing black-box exporter test**

Create `tests/export-pages.test.js` with this complete test:

```js
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

import { afterEach, describe, expect, test } from 'vitest'

import { systems } from '../src/data/systems.js'
import { workflows } from '../src/data/workflows.js'

const temporaryDirectories = []

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { force: true, recursive: true })
  }
})

describe('GitHub Pages exporter', () => {
  test('creates one entry HTML for every application route', () => {
    const root = mkdtempSync(join(tmpdir(), 'yujie-hou-pages-'))
    temporaryDirectories.push(root)
    const distDirectory = join(root, 'dist')
    const outputDirectory = join(root, 'site')
    mkdirSync(join(distDirectory, 'assets'), { recursive: true })
    const html = '<!doctype html><html><body><div id="root"></div></body></html>'
    writeFileSync(join(distDirectory, 'index.html'), html)
    writeFileSync(join(distDirectory, 'assets', 'app.js'), 'console.log("ok")')

    const result = spawnSync(
      process.execPath,
      ['scripts/export-pages.mjs', distDirectory, outputDirectory],
      { encoding: 'utf8' },
    )

    expect(result.status).toBe(0)
    expect(readFileSync(join(outputDirectory, 'index.html'), 'utf8')).toBe(html)
    expect(readFileSync(join(outputDirectory, '404.html'), 'utf8')).toBe(html)
    expect(existsSync(join(outputDirectory, '.nojekyll'))).toBe(true)
    expect(existsSync(join(outputDirectory, 'assets', 'app.js'))).toBe(true)

    const expectedRoutes = [
      'systems',
      ...systems.map(({ slug }) => `systems/${slug}`),
      'ai-workflows',
      ...workflows.map(({ slug }) => `ai-workflows/${slug}`),
      'skills',
      'profile',
      'contact',
    ]

    for (const route of expectedRoutes) {
      expect(readFileSync(join(outputDirectory, route, 'index.html'), 'utf8')).toBe(html)
    }
  })
})
```

- [ ] **Step 2: Run the exporter test and verify RED**

```powershell
pnpm test tests/export-pages.test.js
```

Expected: assertion failure because `scripts/export-pages.mjs` does not exist and the child process exits nonzero.

- [ ] **Step 3: Implement the exporter**

Create `scripts/export-pages.mjs` with these responsibilities:

```js
import { cp, mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { systems } from '../src/data/systems.js'
import { workflows } from '../src/data/workflows.js'

export const pageRoutes = [
  'systems',
  ...systems.map(({ slug }) => `systems/${slug}`),
  'ai-workflows',
  ...workflows.map(({ slug }) => `ai-workflows/${slug}`),
  'skills',
  'profile',
  'contact',
]

async function requireDirectory(directory, label) {
  const details = await stat(directory).catch(() => null)
  if (!details?.isDirectory()) {
    throw new Error(`${label} directory does not exist: ${directory}`)
  }
}

export async function exportPages(distDirectory, outputDirectory) {
  const dist = resolve(distDirectory)
  const output = resolve(outputDirectory)
  await requireDirectory(dist, 'Build')
  await mkdir(output, { recursive: true })
  await cp(dist, output, { recursive: true, force: true })

  const html = await readFile(join(dist, 'index.html'), 'utf8')
  await writeFile(join(output, '404.html'), html)
  await writeFile(join(output, '.nojekyll'), '')

  await Promise.all(pageRoutes.map(async (route) => {
    const routeFile = join(output, route, 'index.html')
    await mkdir(dirname(routeFile), { recursive: true })
    await writeFile(routeFile, html)
  }))
}

const currentFile = fileURLToPath(import.meta.url)
if (process.argv[1] && resolve(process.argv[1]) === currentFile) {
  const [distDirectory, outputDirectory] = process.argv.slice(2)
  if (!distDirectory || !outputDirectory) {
    throw new Error('Usage: node scripts/export-pages.mjs <dist-directory> <output-directory>')
  }
  await exportPages(distDirectory, outputDirectory)
}
```

Add the package script:

```json
"export:pages": "node scripts/export-pages.mjs"
```

Document the exact local command in `README.md`:

```powershell
pnpm build
pnpm export:pages -- dist "..\yujie-hou-portfolio-pages-export"
```

- [ ] **Step 4: Run the exporter test and verify GREEN**

```powershell
pnpm test tests/export-pages.test.js
```

Expected: exporter test passes and every data-derived route receives the same HTML.

- [ ] **Step 5: Commit the exporter**

```powershell
git add tests/export-pages.test.js scripts/export-pages.mjs package.json README.md
git commit -m "feat: export consistent GitHub Pages routes"
```

### Task 4: Replace the Pages workflow with a source-built deployment

**Files:**
- Modify in Pages worktree: `.github/workflows/deploy.yml`

- [ ] **Step 1: Replace the workflow exactly**

```yaml
name: Deploy portfolio to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
        with:
          repository: houy99466-sketch/yujie-hou-portfolio
          path: source
      - uses: actions/setup-node@v4
        with:
          node-version: 24.14.0
      - run: npm install --global pnpm@11.9.0
      - run: pnpm install --frozen-lockfile
        working-directory: source
      - run: pnpm test
        working-directory: source
      - run: pnpm lint
        working-directory: source
      - run: pnpm build
        working-directory: source
      - run: pnpm export:pages -- dist ../site
        working-directory: source
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: site
      - uses: actions/deploy-pages@v4
        id: deployment
```

- [ ] **Step 2: Verify the workflow contains the source-build deployment markers**

```powershell
$workflow = Get-Content -Raw .github/workflows/deploy.yml
$required = @(
  'repository: houy99466-sketch/yujie-hou-portfolio',
  'path: source',
  'pnpm install --frozen-lockfile',
  'pnpm export:pages -- dist ../site',
  'path: site'
)
foreach ($marker in $required) {
  if (-not $workflow.Contains($marker)) { throw "Missing workflow marker: $marker" }
}
Write-Output 'workflow markers valid'
```

Expected: `workflow markers valid`.

- [ ] **Step 3: Commit the workflow**

```powershell
git add .github/workflows/deploy.yml
git commit -m "ci: build Pages from portfolio source"
```

### Task 5: Verify, integrate, publish, and inspect production

**Files:**
- Source branch: `fix/ifocus-pages-publishing`
- Pages branch: `fix/ifocus-pages-publishing-pages`

- [ ] **Step 1: Run complete source verification**

```powershell
pnpm test
pnpm lint
pnpm build
pnpm export:pages -- dist "$env:TEMP\yujie-hou-portfolio-pages-verification"
```

Expected: all tests pass, lint exits zero, build exits zero, and the exported iFocus route exists.

- [ ] **Step 2: Fast-forward local source `main` and push it**

```powershell
git merge --ff-only fix/ifocus-pages-publishing
git push origin main
```

- [ ] **Step 3: Configure GitHub Pages for workflow deployments before pushing the workflow**

```powershell
gh api --method PUT repos/houy99466-sketch/houy99466-sketch.github.io/pages -f build_type=workflow
```

Expected: the response reports `"build_type":"workflow"`.

- [ ] **Step 4: Fast-forward local Pages `main` and push it**

```powershell
git merge --ff-only fix/ifocus-pages-publishing-pages
git push origin main
```

- [ ] **Step 5: Wait for the Pages workflow and inspect logs**

```powershell
gh run list --repo houy99466-sketch/houy99466-sketch.github.io --workflow deploy.yml --limit 1
gh run watch --repo houy99466-sketch/houy99466-sketch.github.io <run-id> --exit-status
```

Expected: deployment workflow completes successfully.

- [ ] **Step 6: Verify production HTTP behavior**

```powershell
curl.exe -sS -I https://houy99466-sketch.github.io/
curl.exe -sS -I https://houy99466-sketch.github.io/systems/
curl.exe -sS -I https://houy99466-sketch.github.io/systems/ifocus/
curl.exe -sS -I https://houy99466-sketch.github.io/assets/ifocus-cover.webp
```

Expected: all four URLs return HTTP 200.

- [ ] **Step 7: Verify rendered production content in a browser**

Confirm the homepage reports five systems, `/systems` lists iFocus, `/systems/ifocus` renders the exact iFocus heading, the cover image is visible, English content works, and there are no console errors.
