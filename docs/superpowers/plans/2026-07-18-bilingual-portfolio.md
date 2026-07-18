# Bilingual Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a persistent Chinese/English switch that translates every public portfolio route while preserving all routes and public links.

**Architecture:** A small React context owns the exact `zh`/`en` state and persistence contract. Shared UI copy and content datasets provide locale-specific values, while page components select the active variant without duplicating routing or layout logic.

**Tech Stack:** React 19, React Router 7, Vite 8, Vitest, Testing Library, CSS

---

### Task 1: Lock the language behavior with tests

**Files:**
- Modify: `tests/App.test.jsx`

- [ ] Add a test that renders `/`, verifies Chinese is the default, clicks `EN`, and asserts `Home`, `Engineering Systems`, `Yujie Hou`, `document.documentElement.lang === 'en'`, and `localStorage.getItem('portfolio-language') === 'en'`.
- [ ] Add a persistence test that stores `en`, renders each representative route, and verifies its English heading and content.
- [ ] Run `pnpm test -- tests/App.test.jsx` and confirm failure because the language control and English content do not exist.

### Task 2: Add the locale state boundary

**Files:**
- Create: `src/i18n/LanguageContext.jsx`
- Create: `src/i18n/translations.js`
- Modify: `src/App.jsx`

- [ ] Implement `LanguageProvider` with exact supported values `zh` and `en`, Chinese fallback, and the storage key `portfolio-language`.
- [ ] Expose `useLanguage()` with `language`, `setLanguage`, and shared translated interface copy.
- [ ] Wrap the router with the provider.
- [ ] Run the focused language test and confirm the provider behavior passes.

### Task 3: Localize project data

**Files:**
- Modify: `src/data/site.js`
- Modify: `src/data/systems.js`
- Modify: `src/data/workflows.js`
- Modify: `src/data/skills.js`
- Modify: `src/data/profile.js`

- [ ] Preserve all current Chinese records and add complete English variants for user-facing strings.
- [ ] Export locale-aware accessors for site data, systems, workflows, skills, education, honors, and profile summary.
- [ ] Preserve every slug, path, image path, contact value, download path, and external URL exactly.

### Task 4: Connect every route and shared component

**Files:**
- Modify: `src/components/SiteLayout.jsx`
- Modify: `src/components/DetailLayout.jsx`
- Modify: `src/components/FlowDiagram.jsx`
- Modify: `src/components/EvidenceStrip.jsx`
- Modify: `src/components/RelatedLinks.jsx`
- Modify: `src/components/PublicLinksSection.jsx`
- Modify: `src/components/CopyContactButton.jsx`
- Modify: `src/components/ScrollManager.jsx`
- Modify: `src/pages/HomePage.jsx`
- Modify: `src/pages/SystemsPage.jsx`
- Modify: `src/pages/SystemDetailPage.jsx`
- Modify: `src/pages/WorkflowsPage.jsx`
- Modify: `src/pages/WorkflowDetailPage.jsx`
- Modify: `src/pages/SkillsPage.jsx`
- Modify: `src/pages/ProfilePage.jsx`
- Modify: `src/pages/ContactPage.jsx`

- [ ] Add the language segmented control to the header and localize navigation, accessibility labels, footer copy, buttons, page titles, and page content.
- [ ] Select localized datasets from the active language without changing routes.
- [ ] Run `pnpm test` and confirm the complete suite passes.

### Task 5: Style and verify the rendered result

**Files:**
- Modify: `src/styles.css`

- [ ] Add stable desktop and mobile dimensions for the language control.
- [ ] Run `pnpm lint`, `pnpm test`, and `pnpm build`; each command must exit successfully.
- [ ] Start the Vite server and use Playwright to test `/` -> `EN` -> English homepage -> `/systems/emotender` -> English details -> refresh -> English remains selected.
- [ ] Repeat the header and language interaction at a mobile viewport and inspect screenshots for overlap, clipping, and menu behavior.

### Task 6: Deploy and verify both hosts

**Files:**
- No additional source files.

- [ ] Commit all verified changes with `feat: add bilingual portfolio` and push `main`.
- [ ] Poll the GitHub commit status until Vercel reports success, then request the production URL and verify English assets are present.
- [ ] Read the EdgeOne deployment integration state from available repository or console evidence; request its public production URL and verify a successful response. If no permanent EdgeOne URL or API access exists, report that exact verification blocker rather than inferring success.

