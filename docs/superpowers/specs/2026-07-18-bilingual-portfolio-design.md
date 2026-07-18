# Bilingual Portfolio Design

## Goal

Add a complete Chinese and English language switch to the existing portfolio without changing routes, project identifiers, contact values, downloads, or external links.

## Interaction

- First visit defaults to Chinese.
- The header exposes a compact segmented control with `中文` and `EN` buttons.
- Switching language updates the current page in place and closes the mobile navigation menu.
- The selected language is stored under the exact local storage key `portfolio-language`.
- Supported stored values are exactly `zh` and `en`; every other value falls back to `zh`.
- The document `lang` attribute and page title follow the active language.

## Architecture

- `LanguageContext` owns language state, persistence, and the shared interface.
- Shared interface copy lives in `src/i18n/translations.js`.
- Content-heavy datasets expose exact Chinese and English variants through locale-aware accessors.
- Pages and shared components read the active language and select the corresponding copy.
- Existing routes and link destinations remain identical in both languages.

## Responsive Behavior

The language control remains visible in the desktop header. On mobile it appears inside the expanded navigation panel so it does not compete with the brand and menu button for width. Button dimensions remain stable between selected states.

## Verification

- Component tests cover Chinese default, English switching, storage persistence, document language/title, representative English content on every route group, and unchanged public contact/link values.
- Existing tests continue to protect all Chinese content and project links.
- Production build, ESLint, desktop browser QA, and mobile browser QA must pass before push.
- After push, Vercel and EdgeOne deployment states and public responses are checked separately.

