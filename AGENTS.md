# AGENTS.md

## What this repo is
- HAXcms site. Root `index.html`, `site.json`, `pages/`, `files/`, `theme/` are deployed site content.
- Editable app code is split: root site shell plus `custom/src/` web components.
- `src/` is small React/Vite shell; `custom/` is Rollup-built HAX custom bundle.

## High-signal commands
- Root dev server: `npm run serve` / `npm start` → `npx @haxtheweb/haxcms-nodejs`
- Root dev mode: `npm run dev`
- GitHub Pages prep: `npm run ghpages:build`
- GitHub Pages deploy: `npm run ghpages:deploy`
- Custom bundle watch: `cd custom && npm run watch`
- Custom bundle build: `cd custom && npm run build`
- Custom manifest scan: `cd custom && npm run analyze`

## Repo quirks
- No root lint/test/typecheck scripts in `package.json`; do not invent them.
- `scripts/ghpages-build.js` renames `ghpages.html` to `index.html`, deletes old `index.html`, then removes `build/` and `wc-registry.json`.
- `custom/build/` is generated and intentionally kept out of gitignore so the site can serve built custom elements.
- `vite.config.ts` exists, but root scripts do not use it.
- `web-dev-server.haxcms.config.cjs` is local HAXCMS dev config; keep `https: true` and `open: true` unless changing dev flow.

## Editing rules
- Prefer semantic HTML in `pages/*/index.html` and update `site.json` when page structure changes.
- For custom elements, edit source in `custom/src/` and rebuild with `custom` scripts.
- Do not edit generated build artifacts unless task explicitly targets build output.
- Preserve existing HAXcms theme/custom bundle wiring; many files are legacy fallback code, so change only targeted lines.

## Existing instruction sources
- `README.md` = minimal run guidance.
- `custom/README.md` = custom bundle workflow.
- `package.json` and `custom/package.json` are source of truth for scripts.
