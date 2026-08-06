# iFocus Portfolio Publishing Design

## Goal

Make the local portfolio version containing `ifocus-cover.webp` the canonical source, publish all five engineering systems including iFocus, and ensure every direct route and refresh loads the same build.

## Current Root Causes

- `yujie-hou-portfolio` and `yujie-hou-portfolio-pages` are separate repositories with divergent histories.
- The Pages repository currently contains manually copied bundles and route-specific HTML files that reference different JavaScript bundles.
- The source data contains five systems, while Chinese and English summary text still says four.
- The remote source repository does not contain `public/assets/ifocus-cover.webp`, although the iFocus data references it.
- The existing Pages workflow deploys the Pages repository contents but does not build the source repository.

## Architecture

`yujie-hou-portfolio` remains the single source of truth for React code, content, tests, and public assets. A source-side export script will build `dist` and copy one consistent build into the Pages repository, creating static `index.html` entry points for every exact application route and a matching `404.html` fallback.

The Pages repository workflow will check out both repositories, install and build the source repository, run the export script into the Pages workspace, and deploy that generated workspace with GitHub Actions Pages. GitHub Pages will use the workflow deployment source instead of the legacy branch builder.

## Data Flow

1. Source content and assets are updated in `yujie-hou-portfolio`.
2. `pnpm test`, `pnpm lint`, and `pnpm build` validate the source.
3. The export script copies the built assets and creates route entry files for `/`, `/systems`, every system slug, `/ai-workflows`, every workflow slug, `/skills`, `/profile`, and `/contact`.
4. The Pages workflow deploys the exported workspace.
5. Browser and HTTP checks verify the homepage, `/systems`, `/systems/ifocus`, the iFocus image, and direct refresh behavior.

## Error Handling

- The export script fails when the source build directory or target Pages directory is missing.
- The export script derives system and workflow route slugs from the existing data modules so route names are not duplicated in deployment configuration.
- The workflow uses a frozen lockfile install and fails the job when tests, lint, build, export, or Pages deployment fails.
- The deployment verification checks both HTTP status and rendered iFocus content; a successful build alone is not treated as a successful site release.

## Testing Strategy

- Add a regression assertion that the Chinese and English overview copy reports five systems and that the iFocus card/detail route is rendered.
- Add an export-script test that uses a temporary target and verifies the root, `/systems/ifocus`, all data-derived system/workflow routes, and `404.html` share the same built entry HTML.
- Run the full Vitest suite, ESLint, and Vite production build before publishing.
- After deployment, verify live HTML asset references, HTTP status for direct routes, rendered iFocus heading, and image response status.

## Success Criteria

- Both repositories are synchronized without losing `ifocus-cover.webp`.
- Source tests, lint, and build pass.
- Pages workflow completes successfully from the source build.
- `https://houy99466-sketch.github.io/` shows five systems in the overview copy.
- `https://houy99466-sketch.github.io/systems/ifocus` returns HTTP 200, renders the iFocus detail page, and loads the cover image.
- Direct navigation and refresh for every generated route load the same JavaScript bundle.
