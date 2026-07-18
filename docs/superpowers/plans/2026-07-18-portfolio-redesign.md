# Personal Portfolio Multi-Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing single-page portfolio as a responsive multi-page technical archive with four engineering projects, three AI workflow case studies, an evidence-linked skill tree, and a compact profile page.

**Architecture:** React Router owns route state and browser history. Structured content modules provide project, workflow, skill, and profile data to focused page and shared-layout components. The visual system uses full-width bands, editorial typography, stable grids, real project media, and responsive progressive disclosure.

**Tech Stack:** React 19, Vite 8, React Router, Lucide React, Vitest, Testing Library, CSS

---

### Task 1: Route contract and data contract tests

**Files:**
- Modify: `tests/App.test.jsx`
- Create: `tests/content.test.js`

- [x] Add failing tests that render `/`, `/systems`, all four `/systems/:slug` routes, `/ai-workflows`, all three tool routes, `/skills`, and `/profile`.
- [x] Assert the active navigation state, project responsibilities, exact public links, skill group names, and absence of the phone number.
- [x] Run `pnpm test` and confirm failures are caused by missing routes and content.

### Task 2: Content modules and routing shell

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Replace: `src/data/profile.js`
- Create: `src/data/site.js`
- Create: `src/data/systems.js`
- Create: `src/data/workflows.js`
- Create: `src/data/skills.js`
- Replace: `src/App.jsx`
- Create: `src/components/SiteLayout.jsx`
- Create: `src/components/ScrollManager.jsx`

- [x] Install `react-router-dom` through pnpm.
- [x] Define exact slugs, navigation labels, public URLs, project responsibilities, evidence, limitations, and related-content relationships.
- [x] Implement route declarations and a shared layout with skip link, active navigation, mobile navigation, footer, and scroll restoration.
- [x] Run the route tests and confirm the shell tests pass.

### Task 3: Shared presentation components

**Files:**
- Create: `src/components/PageIntro.jsx`
- Create: `src/components/ProjectPreview.jsx`
- Create: `src/components/EvidenceStrip.jsx`
- Create: `src/components/FlowDiagram.jsx`
- Create: `src/components/DetailLayout.jsx`
- Create: `src/components/RelatedLinks.jsx`

- [x] Build reusable components with semantic headings, labelled links, stable image dimensions, and no nested-card layout.
- [x] Keep data out of presentation components and use explicit IDs from content modules for accessibility relationships.

### Task 4: Home and engineering system pages

**Files:**
- Create: `src/pages/HomePage.jsx`
- Create: `src/pages/SystemsPage.jsx`
- Create: `src/pages/SystemDetailPage.jsx`

- [x] Build a compact homepage with personal identity, proof summary, selected systems, AI workflow entry points, and contact action.
- [x] Build the engineering system index with four equal projects.
- [x] Build the shared project detail template covering outcome, role, architecture, contribution, implementation, evidence, limitations, links, and related work.
- [x] Include EmoTender as a full engineering project and state the user-confirmed role exactly.

### Task 5: AI workflows, skill tree, and profile pages

**Files:**
- Create: `src/pages/WorkflowsPage.jsx`
- Create: `src/pages/WorkflowDetailPage.jsx`
- Create: `src/pages/SkillsPage.jsx`
- Create: `src/pages/ProfilePage.jsx`

- [x] Present consulter, visual-article, and smart-schedule as expandable case studies with problem, process, implementation, output, and evidence.
- [x] Render four skill branches from the Chinese resume and link each branch to the systems where it was used.
- [x] Move education, awards, public contact methods, and PDF download to the profile page without exposing the phone number.

### Task 6: Visual system and assets

**Files:**
- Replace: `src/styles.css`
- Add: `public/assets/emotender-cover.webp`
- Add: `public/_redirects`

- [x] Download the verified EmoTender article cover and convert it to WebP.
- [x] Implement color, typography, spacing, responsive grids, navigation states, focus states, project media, flow diagrams, and reduced-motion behavior.
- [x] Add the static host SPA fallback rule `/* /index.html 200`.

### Task 7: Verification

**Files:**
- Modify: `tests/App.test.jsx`
- Modify: `tests/site-assets.test.js`

- [x] Run `pnpm test`, `pnpm lint`, and `pnpm build` with zero failures.
- [x] Verify exact routes, links, text boundaries, image loading, active navigation, keyboard focus, and browser back behavior.
- [x] Capture desktop and mobile screenshots at 1440×900, 390×844, and 375×812.
- [x] Check console errors, failed requests, text overlap, clipping, and horizontal overflow.
