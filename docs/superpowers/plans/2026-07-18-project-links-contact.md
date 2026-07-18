# Project Links And Contact Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move every verified project link into the main detail reading flow and replace all `mailto:` links with an accessible `/contact` page containing exact public contact and education information.

**Architecture:** Keep external URLs in the existing data modules, render them through a focused `PublicLinksSection`, and place that component explicitly in each detail page. Store stable contact facts in `site.js`; route every site contact entry to a new `ContactPage`, where a small `CopyContactButton` owns clipboard state and error feedback.

**Tech Stack:** React 19, React Router 7, lucide-react, Vitest, Testing Library, CSS.

---

### Task 1: Contact route and mail-link removal

**Files:**
- Create: `src/components/CopyContactButton.jsx`
- Create: `src/pages/ContactPage.jsx`
- Modify: `src/data/site.js`
- Modify: `src/App.jsx`
- Modify: `src/components/SiteLayout.jsx`
- Modify: `src/pages/HomePage.jsx`
- Modify: `src/pages/ProfilePage.jsx`
- Test: `tests/App.test.jsx`

- [ ] **Step 1: Write failing route and navigation tests**

Add tests that assert the main navigation contains `欢迎联系` with `href="/contact"`, all homepage/profile/footer contact entry points point to `/contact`, no rendered page contains an `href` beginning with `mailto:`, and `/contact` displays these exact strings:

```jsx
expect(screen.getByText('中山大学中法核工程与技术学院 & 管理学院')).toBeInTheDocument()
expect(screen.getByText('核工程与核技术 & 创业管理双学位')).toBeInTheDocument()
expect(screen.getByText('Hyj032979')).toBeInTheDocument()
expect(screen.getByText('2110474083@qq.com')).toBeInTheDocument()
expect(document.querySelector('a[href^="mailto:"]')).not.toBeInTheDocument()
```

- [ ] **Step 2: Run the focused test and verify RED**

Run: `pnpm test tests/App.test.jsx -- --reporter=verbose`

Expected: FAIL because `/contact` and the `欢迎联系` navigation item do not exist and current links still use `mailto:`.

- [ ] **Step 3: Add exact contact data and the route**

In `src/data/site.js`, add:

```js
export const contactInfo = {
  name: '侯宇杰',
  institution: '中山大学中法核工程与技术学院 & 管理学院',
  degree: '核工程与核技术 & 创业管理双学位',
  focus: '机器人、控制、数字孪生与 AI 系统',
  wechat: 'Hyj032979',
  email: '2110474083@qq.com',
}
```

Add `{ label: '欢迎联系', href: '/contact' }` to `navItems`, remove `publicLinks.email`, import `ContactPage` in `src/App.jsx`, and register `<Route path="contact" element={<ContactPage />} />`.

- [ ] **Step 4: Implement clipboard behavior and contact page**

Create `CopyContactButton` with exact clipboard flow:

```jsx
export function CopyContactButton({ label, value }) {
  const [status, setStatus] = useState('idle')

  const copyValue = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setStatus('copied')
    } catch {
      setStatus('failed')
    }
  }

  return (
    <div className="copy-contact-action">
      <button type="button" onClick={copyValue} aria-label={`复制${label}`}>
        <Copy aria-hidden="true" size={17} />
        {status === 'copied' ? '已复制' : '复制'}
      </button>
      <span className="sr-only" aria-live="polite">
        {status === 'copied' ? `${label}已复制` : status === 'failed' ? '复制失败，请手动复制' : ''}
      </span>
    </div>
  )
}
```

Create `ContactPage` using `PageIntro`, unframed information rows, visible contact values, and one `CopyContactButton` beside each value.

- [ ] **Step 5: Route every contact entry to `/contact`**

Use React Router `Link` for homepage `欢迎交流`, homepage bottom `发送邮件`, profile `发送邮件`, and footer contact entry. Preserve the existing visible labels requested by the user while changing their destinations to `/contact`.

- [ ] **Step 6: Run the focused test and verify GREEN**

Run: `pnpm test tests/App.test.jsx -- --reporter=verbose`

Expected: all `App.test.jsx` tests PASS.

- [ ] **Step 7: Commit the contact behavior**

```bash
git add src/data/site.js src/App.jsx src/components/SiteLayout.jsx src/components/CopyContactButton.jsx src/pages/ContactPage.jsx src/pages/HomePage.jsx src/pages/ProfilePage.jsx tests/App.test.jsx
git commit -m "feat: add public contact page"
```

### Task 2: Prominent project public links

**Files:**
- Create: `src/components/PublicLinksSection.jsx`
- Modify: `src/components/DetailLayout.jsx`
- Modify: `src/pages/SystemDetailPage.jsx`
- Modify: `src/pages/WorkflowDetailPage.jsx`
- Modify: `src/data/workflows.js`
- Test: `tests/App.test.jsx`

- [ ] **Step 1: Write failing placement and URL tests**

Render `/systems/uav-usv`, `/systems/emotender`, and `/ai-workflows/smart-schedule`. Assert the exact URLs already stored in `site.js`, and assert the public-links section precedes the next content section:

```jsx
const publicLinks = screen.getByRole('region', { name: '公开链接' })
const boundary = screen.getByRole('heading', { level: 2, name: '证据与边界' })
expect(publicLinks.compareDocumentPosition(boundary)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
```

For the workflow page, compare against the `项目价值` heading. Assert the thermal-control page has no `公开链接` region.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `pnpm test tests/App.test.jsx -- --reporter=verbose`

Expected: FAIL because existing public links are rendered after the detail body and do not expose the requested region name or placement.

- [ ] **Step 3: Create `PublicLinksSection`**

Use explicit `kind` values instead of inferring link type from labels or URLs:

```jsx
const icons = {
  article: Newspaper,
  code: Github,
  video: Play,
}

export function PublicLinksSection({ links }) {
  if (!links?.length) return null

  return (
    <section className="public-links-section" aria-labelledby="public-links-title">
      <div className="public-links-heading">
        <span>公开证据</span>
        <h2 id="public-links-title">公开链接</h2>
      </div>
      <div className="public-links-list">
        {links.map((link) => {
          const Icon = icons[link.kind] ?? ExternalLink
          return (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
              <Icon aria-hidden="true" size={20} />
              <strong>{link.label}</strong>
              <ExternalLink aria-hidden="true" size={17} />
            </a>
          )
        })}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Move placement ownership out of `DetailLayout`**

Delete the old bottom `detail-links-band` rendering from `DetailLayout`. Insert `<PublicLinksSection links={system.links} />` immediately before the `evidence` `DetailSection` in `SystemDetailPage`. Insert `<PublicLinksSection links={workflow.links} />` immediately before the `workflow-value` `DetailSection` in `WorkflowDetailPage`.

- [ ] **Step 5: Add explicit kinds to workflow link data**

Add `kind: 'code'` to each GitHub workflow link and `kind: 'article'` to each WeChat workflow link. Do not change any `href` or label.

- [ ] **Step 6: Run the focused test and verify GREEN**

Run: `pnpm test tests/App.test.jsx -- --reporter=verbose`

Expected: all focused tests PASS.

- [ ] **Step 7: Commit project-link behavior**

```bash
git add src/components/PublicLinksSection.jsx src/components/DetailLayout.jsx src/pages/SystemDetailPage.jsx src/pages/WorkflowDetailPage.jsx src/data/workflows.js tests/App.test.jsx
git commit -m "feat: surface project links in detail pages"
```

### Task 3: Responsive styling and full verification

**Files:**
- Modify: `src/styles.css`
- Test: `tests/site-assets.test.js`

- [ ] **Step 1: Add CSS regression assertions**

Extend `tests/site-assets.test.js` to assert `src/styles.css` contains `.public-links-section`, `.contact-details`, and a mobile rule that makes the public links single-column.

- [ ] **Step 2: Run the CSS test and verify RED**

Run: `pnpm test tests/site-assets.test.js -- --reporter=verbose`

Expected: FAIL because the new selectors do not exist.

- [ ] **Step 3: Implement the approved visual hierarchy**

Replace the old `.detail-links-*` styles with `.public-links-*` styles. Use the existing blue as a restrained full-width reading-flow band, a fixed label column on desktop, 1px translucent separators, 48px minimum link rows, and a single-column layout below `980px`. Add unframed `.contact-*` rows with clear values, copy buttons, focus states, and mobile wrapping.

- [ ] **Step 4: Run all automated verification**

Run:

```bash
pnpm test
pnpm lint
pnpm build
```

Expected: 0 failed tests, ESLint exit code 0, Vite build exit code 0.

- [ ] **Step 5: Verify rendered desktop and mobile flows**

Check these routes at `1440x1000` and `390x844`:

- `/contact`: exact school, degree, WeChat, email; copy controls; no overflow.
- `/systems/uav-usv`: B 站 link before `证据与边界`.
- `/systems/emotender`: GitHub and article links before `证据与边界`.
- `/ai-workflows/smart-schedule`: GitHub and article links before `项目价值`.

Also verify page identity, meaningful DOM content, no framework overlay, no console error/warning, one navigation interaction, and screenshot evidence.

- [ ] **Step 6: Commit and push**

```bash
git add src/styles.css tests/site-assets.test.js docs/superpowers/plans/2026-07-18-project-links-contact.md
git commit -m "style: refine contact and evidence layouts"
git push origin main
```
