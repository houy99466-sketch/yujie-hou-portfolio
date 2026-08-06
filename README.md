# Yujie Hou Portfolio

A Chinese, data-driven personal homepage for long-term project, education, honor, and experience updates.

## Local development

```bash
pnpm install
pnpm dev
```

## Update content

All website content is stored in `src/data/profile.js`.

- Add projects to `profileContent.projects`.
- Add internships or other experience to `profileContent.background.experience`.
- Put public images in `public/assets` and reference them with `/assets/<filename>`.
- Do not add phone numbers, credentials, private lab assets, internal drawings, or third-party confidential information.

## Future image checklist

The current site already contains usable project visuals. When stronger material becomes available, replace or add images in this order:

1. **Homepage image:** one clear photo of Yujie working with a real system or prototype. Use a wide landscape crop and remove visible student IDs, phone numbers, screens with credentials, and third-party confidential information.
2. **UAV-USV project:** one close hardware photo, one QGC ground-station screenshot, and one outdoor system test frame. Keep the existing architecture diagram as supporting evidence.
3. **Thermal control project:** one complete prototype photo, one sensor/control-chain photo, and one clearly labeled test curve. Keep the existing Python UI screenshot.
4. **VR digital twin project:** one Quest 3 real-device photo and one in-headset interaction screenshot. Do not publish tokamak engineering drawings or internal lab assets.
5. **Future internships:** use work samples or result screenshots only after confirming publication permission. A company logo alone is not sufficient evidence of contribution.

Recommended project image ratio: `16:10` or `16:9`, at least `1600px` wide, exported as WebP when practical.

## Verification

```bash
pnpm test
pnpm lint
pnpm build
```

## Free deployment

### Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare Pages, import the repository.
3. Set the build command to `pnpm build`.
4. Set the output directory to `dist`.

Cloudflare provides a public `*.pages.dev` address. A custom domain is optional.

### GitHub Pages

The `houy99466-sketch.github.io` workflow checks out this repository, validates it, builds it, and exports a complete Pages artifact. Every application route receives the same built `index.html`, so direct visits and refreshes do not load stale bundles.

To generate the same artifact locally:

```powershell
pnpm build
pnpm export:pages -- dist "..\yujie-hou-portfolio-pages-export"
```

The output includes `.nojekyll`, `404.html`, and static entry files for every system and workflow route derived from the source data.
