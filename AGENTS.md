# AGENTS.md

## What this is

HAXcms micro-site for teaching HAXcms/web components (Indonesian language). Custom web components + theme bundled in `custom/`, served by HAXcms Node.js backend. Deployed on Netlify.

## Key commands

```bash
# Local dev server (HAXcms Node.js backend)
npm run serve          # or: npx @haxtheweb/haxcms-nodejs

# Build custom components + theme (Rollup)
cd custom && npm run build
# Output: custom/build/custom.es6.js (committed to git)

# Watch mode during development
cd custom && npm run watch
```

**No lint, typecheck, or test commands exist at root level.** The `custom/src/quiz-dashboard-lite2/` subfolder has its own test setup but is not wired to any root script.

## Architecture

- **`site.json`** — Site structure (JSON Outline Schema). Pages reference `location` as `pages/<slug>/index.html`.
- **`pages/`** — Page content. Some pages are `.html`, some are `.json` (quiz/dashboard data pages).
- **`custom/src/custom.js`** — Entry point for all custom components. Imports theme + components. Rollup builds this to `custom/build/custom.es6.js`.
- **`custom/build/custom.es6.js`** — Built bundle, **committed to git** (`.gitignore` has `!custom/build` exception). `site.json` loads theme from `./custom/build/custom.es6.js`.
- **`custom/src/quiz-dashboard-lite2/`** — Nested standalone component repo with its own `package.json`, rollup config, and build. Imported directly by `custom.js`.
- **Theme**: `custom-haxquiz-theme` (defined in `site.json` → `metadata.theme.element`), source at `custom/src/custom-haxquiz-theme.js`.

## Gotchas

- **`npm run ghpages:build`** is destructive — it `rm`s `index.html`, `assets/babel*`, `build`, and `wc-registry.json`. Don't run unless deploying to GitHub Pages.
- **After editing any file in `custom/src/`**, you must `cd custom && npm run build` for changes to take effect. The built bundle is what the site actually loads.
- **`vite.config.ts` and `tsconfig.json` at root** are for Google AI Studio integration, not the HAXcms site itself. The site uses Rollup (in `custom/`) for builds.
- **Pages stored as `.json`** (e.g., `pages/dashboard-kuis/index.json`) are data-only pages used by quiz dashboard components, not standard HAXcms HTML pages.
- **`quiz-dashboard-lite2`** is a semi-independent component. It has its own `node_modules/`, `rollup.config.js`, and can be built/developed separately. Treat changes to its internals carefully — it may be synced from an upstream source.
