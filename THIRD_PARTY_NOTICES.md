# Third-party notices

PyBot Blocks is an independent guide. **Scratch is a project of the Scratch Foundation. PyBot Blocks is not affiliated with or endorsed by it.**

Every external component is credited here, next to where it is used ("♥ Thanks to…" box), and in the FAQ answer with `id="credits"`. A component is added only after its license or terms were checked and found compatible.

## Included in this repository

### scratchblocks 3.7.1

- Used for: the block viewer on `start.html` (draws Scratch-style blocks from text).
- Files: `vendor/scratchblocks.min.js` (unmodified build from the npm package `scratchblocks@3.7.1`) and its license in `vendor/scratchblocks.LICENSE`.
- Copyright © 2013–2021 Tim Radvan and contributors. License: MIT.
- Source: https://github.com/scratchblocks/scratchblocks
- Not included on purpose: the translation files (`translations*.js`, `locales/*.json`). They are generated from `scratch-l10n`, which is licensed AGPL-3.0-only since version 5 (scratchblocks 3.7.1 depends on `scratch-l10n ^6.1.86`). To keep this project under MIT, the viewer only uses the English block text built into the core file. A Spanish block-text file written by us is listed as future work in `CONTENT_PLAN.md`.

## Services

### Google Analytics 4

- Used for: counting anonymous page visits, with the same measurement ID as PyBot (Python).
- Loaded from `https://www.googletagmanager.com/gtag/js` by `startAnalytics()` in `script.js`, only when the page is served over http(s).
- Ads, ad personalization and Google signals are turned off; the learner's name, answers and progress are never sent.
- Terms: https://marketingplatform.google.com/about/analytics/terms/us/ · Privacy: https://policies.google.com/privacy

## Referenced, not included

### Scratch

- Scratch is developed by the Scratch Foundation (originally the Lifelong Kindergarten Group at the MIT Media Lab). PyBot Blocks links to https://scratch.mit.edu and its download page; all creation happens there.
- Trademarks: the `TRADEMARK` file in `scratchfoundation/scratch-gui` says the Scratch name, logo, Scratch Cat, and the Gobo, Pico, Nano, Tera and Giga characters are trademarks of MIT, and that using them to promote derived software needs MIT's written approval. PyBot Blocks uses the word "Scratch" only to refer to the tool, always with the notice above, and never uses the logo, the cat or the characters.
- Screenshots: the current Scratch terms point to "the applicable license" for support materials, which is not clear enough for screenshots of the editor. PyBot Blocks therefore uses no screenshots: blocks are drawn with our own HTML/CSS or with scratchblocks.
- Embedding shared projects with Scratch's official iframe: not used yet. Before using it, check the current Terms of Use and credit each project's author (shared projects are published under a Creative Commons Attribution-ShareAlike license).

## Checked and not used

| Component | License | Why not |
| --- | --- | --- |
| `scratch-gui` (the editor) | AGPL-3.0-only (npm 5.3.0) | We never rebuild or imitate the editor, and AGPL is not compatible with keeping this site MIT. |
| `scratch-vm` | AGPL-3.0-only (npm 5.0.300) | Same reason: creation happens in the real Scratch. |
| `scratch-blocks` (fork of Blockly) | Apache-2.0 (npm 2.1.37) | Compatible, but a full block editor is not needed for a guide. |
| `scratch-l10n` | AGPL-3.0-only since 5.0.0 (BSD-3-Clause up to 4.x) | See the scratchblocks note above. |
| TurboWarp | GPL-3.0 | Not compatible with MIT distribution, and not needed. |
