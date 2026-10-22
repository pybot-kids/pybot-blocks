# PyBot Blocks

A free, bilingual (Spanish by default, English) guide that helps children learn to use **Scratch**, step by step and in order, together with their families.

> Scratch is a project of the Scratch Foundation. PyBot Blocks is an independent guide: it is not affiliated with or endorsed by it.

PyBot Blocks is the third site of the PyBot family, after [PyBot](https://pybot-kids.github.io/) (Python) and PyBot English. It follows the same strategy: static HTML, CSS and JavaScript with no build step, progress that stays in the browser, and PyBot as a kind guide.

## Product vision

A child opens PyBot Blocks and always knows what to do next: one small idea, a tiny game to check it, and an exact challenge to build in the real Scratch. Families who don't program can follow along, because every zone has a part for grown-ups.

PyBot Blocks **promotes Scratch and never replaces it**. All creation happens in the real Scratch (https://scratch.mit.edu or its offline app). We explain, guide, propose challenges and check understanding; then we send the child to Scratch and celebrate what they made there. We never imitate or rebuild the Scratch editor.

## Motivation

At María Ángel's new school, Scratch is a subject. She learned it in a course, and we want her friends to learn it too without spending much money. Scratch publishes plenty of material, but in practice children and their families struggle to know where to start and in what order to continue. PyBot Blocks gives them that route: almost a manual, but very simple, with short steps, small checks and little things to practice.

## Product principles

- **Look → Try here → Create in Scratch.** Every lesson page ends with a "Make it in Scratch" step: exact steps in the real editor, a short challenge, what should happen, and what to check if it doesn't.
- **Understanding is checked; creations are celebrated, never graded.**
- **No accounts, no ads, no camera or microphone.** Nothing the child types is stored except the name they choose, only in this browser. The only data that leaves the browser is anonymous page-visit counts (see Analytics).
- **A Scratch account is optional.** Practicing without one is always possible.
- **Few, broad zones.** A new topic becomes a page inside its zone. A new zone is only created when no existing zone covers the topic.
- **Mistakes are clues.** Hints are short and kind.
- **Credits arrive with the component**, never later.

## Audience and content

- Children from 8 to 10 years old (useful up to about 12), Spanish speakers, and their families.
- Spanish is the default language; English is available on every page with EN/ES.
- The path follows what primary schools usually ask for in Scratch: motion and looks, events, loops, conditionals and sensing, variables, sound, stories, and games.
- The full plan, zone by zone and page by page, is in [CONTENT_PLAN.md](CONTENT_PLAN.md) (Spanish).

## Plain-language and page model

- Short sentences, one idea per page, and one clear thing to do.
- Pages: `index.html` (home), `course.html` (the path), `start.html` (Start in Scratch and the block viewer), `album.html`, `diploma.html`, `faq.html`. Lesson pages live in `lessons/<step id>.html`.
- The home page has: the hero with a tappable PyBot, the "What would you like me to call you?" card, the learning loop, the first mission, games without a screen, "More for you", "Your work is yours", and the PyBot family.

## PyBot mascot

The same PyBot as the original: the same HTML/CSS anatomy (antenna, ears, head with screen, eyes, brows, cheeks, mouth, neck, arms with hands, body with chest panel) and the same moods (`happy`, `encouraging`, `thinking`, `celebrating`, `surprised`, `curious`, `focused`, `welcoming`, `starry`, `wink`, `proud`, `deciding`, `counting`, `determined`).

In PyBot Blocks the head and arms are green, the body is blue, and the hands, ears, neck and antenna light are sun yellow. The chest panel shows two tiny blocks instead of `</>`. The header logo and the favicon are PyBot's head in the head color.

PyBot is sweet, kind and encouraging. Tapping the big PyBot changes its face and it says short, warm phrases. The small buddy PyBot tells kids' jokes (written separately in Spanish and English so each joke works), simple riddles, fun facts, tips for practicing without a screen, and cheers.

## Visual guide

### Colors

All text pairs are checked for WCAG AA by `node tools/contrast.mjs` (also run in CI).

| Token | Hex | Use |
| --- | --- | --- |
| `--ink` | `#12304a` | Text, outlines, PyBot's lines |
| `--muted` | `#4a6075` | Secondary text |
| `--green` | `#2fb36d` | PyBot's head and arms, decoration (text on it must be ink) |
| `--green-dark` | `#1a7343` | Primary buttons (white text), eyebrows, PyBot's mouth |
| `--green-soft` | `#e7f7ee` | Soft panels |
| `--blue` | `#2d7be0` | PyBot's body, decoration (white text only when large and bold) |
| `--blue-dark` | `#1b4f9a` | Links, active language, motion blocks |
| `--sky` | `#e5f2ff` | Soft sky panels |
| `--yellow` | `#ffd23f` | Hands, ears, neck, antenna light, event blocks (ink text) |
| `--yellow-soft` | `#fff6cc` | Notes for grown-ups |
| `--bg` | `#f5faf8` | Page background |
| `--white` | `#ffffff` | Cards |

The palette is green and blue so it doesn't feel "for girls" or "for boys". Blocks drawn in HTML/CSS use our own colors, not Scratch's.

### Typography and layout

- The same system font stack as PyBot: Trebuchet MS, Avenir Next, Segoe UI. No external fonts.
- Content width `min(1180px, 100% - 32px)`; tested at 1280 px and 390 px with no horizontal scroll.
- `[hidden] { display: none !important; }` so elements with their own `display` still hide.

## Technical architecture

- Plain HTML, CSS and JavaScript. No build, no framework, no server code.
- `script.js` is shared by every page: translations, path data, the header, the buddy, stickers and streaks, progress, backups and migrations.
- `extras.js` adds the album, diploma, questions and the Start in Scratch page with the viewer. It listens for the `pybot:language` event to redraw.
- `vendor/scratchblocks.min.js` is loaded only on `start.html`, with an 8-second time limit and a plain-text fallback.

### Lesson pages

- `lessons/<id>.html` are small shells written by `node tools/lesson-pages.mjs`. Each loads `script.js`, `lessons.js` and its zone's content file, `content/<zone>.js`.
- `lessons.js` draws every lesson from data, always in the same order: Look → Try it here → Make it in Scratch (exact steps, a short challenge, what should happen, what to check) → Without a screen → For families → How did it go? → previous/next.
- Activities: `choice` (choose, find the missing block, predict, what does this program do), `order` (put blocks or steps in order) and `match`. Each has a stable id listed in `pathSteps`; `tools/lesson-pages.mjs` fails if the ids in `content/` and `pathSteps` differ (also in CI).
- Content is bilingual: `L(es, en)`. Block names follow the Spanish Scratch editor.
- Block notation inside programs: `category:text`, where `(10)` is a number, `[Hi]` a text or menu, `{category:answer}` a round reporter, `⟨category:touching [edge]?⟩` a condition, and `⚑` the green flag. A line ending in ` {` opens a C block (repeat, forever, if), `} si no {` is the middle of an if-else, `}` closes it, and `---` starts another program next to it.
- To publish a new lesson: write it in `content/<zone>.js`, set its activities in `pathSteps` (remove `soon`), run `node tools/lesson-pages.mjs` and `node tools/progress-version.mjs --bump "note"`.

### Shared header

`arrangeHeader()` builds the header on every page from one list, `headerPages` in `script.js`: links with icon and name on the left (the current page is highlighted), and compact buttons on the right: ♥ (Patreon, `https://www.patreon.com/pybot`, new tab), the buddy PyBot, EN/ES, and the ☰ menu. Below 900 px the links move into the ☰ menu so the header always uses one row. To add a page, add one entry to `headerPages`.

### Storage registry

Every key starts with `pybotblocks.` so it never mixes with the other PyBot sites on the same domain.

| Key | Storage | Value |
| --- | --- | --- |
| `pybotblocks.language` | localStorage | `es` or `en` |
| `pybotblocks.buddy.enabled` | localStorage | `true` or `false` |
| `pybotblocks.buddy.position` | localStorage | `x,y` as fractions of the free space |
| `pybotblocks.buddy.greeted` | sessionStorage | `true` after the greeting of this visit |
| `pybotblocks.learner.name` | localStorage | Name or nickname, up to 24 characters |
| `pybotblocks.path.current` | localStorage | Step id where the learner is |
| `pybotblocks.path.visited` | localStorage | Comma-separated step ids opened |
| `pybotblocks.path.done` | localStorage | Comma-separated step ids finished |
| `pybotblocks.path.known` | localStorage | Comma-separated step ids marked as already known |
| `pybotblocks.selfcheck` | localStorage | `stepId:good\|okay\|review` pairs from the final stop |
| `pybotblocks.badges` | localStorage | `badgeId:YYYY-MM-DD` pairs |
| `pybotblocks.days` | localStorage | Comma-separated learning days `YYYY-MM-DD` (last 400) |
| `pybotblocks.activity.<id>` | localStorage | `complete` or `review` |
| `pybotblocks.progress.version` | localStorage | Progress version the stored data belongs to |

Activity ids outside the path: `first-mission` (home), `start-open`, `start-editor`, `start-account`, `start-save` (Start in Scratch). Lesson activity ids are listed in `pathSteps` and recorded per version in `progress-versions.json`. Lesson pages fill `path.visited`, `path.current`, `path.done` and `selfcheck`.

### Backup

"Your work is yours" on the home page saves and loads a JSON file:

```json
{
  "format": "pybotblocks-progress",
  "schemaVersion": 1,
  "progressVersion": 1,
  "exportedAt": "2026-10-22T12:00:00.000Z",
  "progress": { "pybotblocks.language": "es" }
}
```

Loading validates everything: format, schema version, progress version, a 100 KB size limit, and every key and value against the registry (`backupValidators()`). Older backups are upgraded with the migrations; newer ones are refused with a friendly message. Confirmations happen inside the page (`askInPage()`), never with `confirm()`. "For adults: erase all progress" offers a backup first, then asks again; language, buddy settings and the name are kept.

### Progress versions

`PROGRESS_VERSION` in `script.js` says which path content the stored progress belongs to. `progress-versions.json` records every step and activity id of each version (version 1 is the baseline).

- Adding, renaming or removing a step or activity id: run `node tools/progress-version.mjs --bump "what changed"`.
- Renaming or removing an id: also add an entry to `progressMigrations` (helpers: `renameProgressStep`, `renameProgressActivity`).
- CI (`.github/workflows/progress-version.yml`) runs `node tools/progress-version.mjs`, `node tools/contrast.mjs` and `node tools/lesson-pages.mjs --check`.

## Analytics

PyBot Blocks uses the same Google Analytics 4 measurement ID as PyBot (Python), `G-H0PLZHW8CE`, to count anonymous page visits. It is set up in one place, `GA_MEASUREMENT_ID` and `startAnalytics()` in `script.js`; every page loads that script, and an empty ID turns analytics off.

- Ad storage, ad user data, ad personalization and Google signals are turned off. GA4 does not log or store IP addresses.
- Only standard page-view data is sent (page address, title, language, device type). The learner name, answers and progress in `localStorage` are never sent. Visits to this site can be told apart from PyBot's by the `/pybot-blocks/` path.
- Analytics does not run when a page is opened from a local file.
- The home page shows a short note for adults whenever analytics is on, and the FAQ answer “What data do you collect?” explains it.
- Google Analytics sets its own `_ga` cookies. They are not part of the storage registry and are not included in backups.

This is a product policy, not legal advice.

## Credits

Every external component is credited in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md), in a "♥ Thanks to…" box next to where it is used, and in the FAQ answer with `id="credits"`. A component is only used after checking its license or terms.

- **scratchblocks 3.7.1** by Tim Radvan and contributors (MIT): draws blocks from text in the viewer. Only the core file is included; its translation files come from `scratch-l10n` (AGPL-3.0 since v5) and are left out.
- **Scratch** (Scratch Foundation): linked, never embedded or imitated. The Scratch name, logo, Scratch Cat and characters are MIT trademarks; we use the word "Scratch" only to refer to the tool, always with the non-affiliation notice, and never the logo or characters. No screenshots of the editor are used.

## Rewards

- Stickers: first step, 3 days in a row, one week (7 in a row), 10 days, one per zone (10 zones including the final stop), and the final trophy.
- The streak celebrates days in a row and the total, and **never punishes** a missed day.
- Diplomas: `diploma.html?zone=<id of the zone's first step>` shows the diploma of a finished zone; `diploma.html?sample=1` shows a marked example. Both can be printed or saved as PDF.

## Path index

All 42 pages have lessons (progress version 11). They are a first draft until tested with children; the path shows a visible work-in-progress note.

| Zone | Pages |
| --- | --- |
| 00 Hola, Scratch 👋 | `helloWhat`, `helloEditor`, `helloSprites`, `helloSave` |
| 01 Mover y mirar 🏃 | `moveSteps`, `moveXY`, `moveGlide`, `looksSay`, `looksCostumes`, `looksBackdrops` |
| 02 Cuando pase algo ⚡ | `eventsFlag`, `eventsKeys`, `eventsClick`, `eventsTogether` |
| 03 Repetir 🔁 | `loopsRepeat`, `loopsForever`, `loopsAnimate`, `loopsPen` |
| 04 Decidir 🔀 | `ifTouching`, `ifElse`, `ifKeys`, `ifColors` |
| 05 Recordar 🧮 | `varsMake`, `varsScore`, `varsTimer`, `varsAsk`, `varsRandom`, `varsCompare` |
| 06 Sonido y música 🎵 | `soundPlay`, `soundMusic`, `soundDance` |
| 07 Contar historias 📖 | `storyDialog`, `storyScenes`, `storyMessages`, `storyPlan` |
| 08 Mis juegos 🎮 | `gameCatch`, `gameMaze`, `gameQuiz`, `gamePong`, `gameClones`, `gameMine` |
| 🏁 Parada final | `finish` (self-check and diploma) |

## The PyBot family

Each site promotes the others with a small "The PyBot family" section at the end of its home page. The list is the same on every site (`pybotFamily` in `script.js`); each site hides itself with `THIS_SITE`.

| Site | Address | Status here |
| --- | --- | --- |
| PyBot (Python) | https://pybot-kids.github.io/ | Published |
| PyBot English | https://pybot-kids.github.io/pybot-english/ | `soon: true` |
| PyBot Blocks | https://pybot-kids.github.io/pybot-blocks/ | This site (`THIS_SITE = "blocks"`) |

Rule: a sibling that is not published yet has `soon: true` and shows "Muy pronto" / "Coming soon" without a link. Remove `soon` once it is published. The section is drawn again when the language changes.

## Project structure

```
index.html            Home
course.html           The path
start.html            Start in Scratch + block viewer
album.html            Stickers and streak
diploma.html          Zone diplomas (?zone=, ?sample=1)
faq.html              Questions for kids and grown-ups
styles.css            All styles
script.js             Shared script (translations, path, header, buddy, progress)
extras.js             Album, diploma, questions, Start in Scratch, viewer
lessons.js            Lesson engine (Look, Try it here, Make it in Scratch…)
lessons/              One small page per lesson (written by tools/lesson-pages.mjs)
content/              Lesson content by zone, in Spanish and English
favicon.svg           PyBot's head
vendor/               scratchblocks core and its license
tools/                progress-version.mjs, lesson-pages.mjs, contrast.mjs
progress-versions.json
CONTENT_PLAN.md       Content plan (Spanish)
THIRD_PARTY_NOTICES.md
LICENSE, LICENSE-CONTENT.md
```

## Running it

No build is needed. Serve the folder with any static server, for example:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000/. Opening `index.html` directly from disk also works, except for loading the viewer in some browsers.

## License

- Code: [MIT](LICENSE), © 2026 Sorey Garcia.
- Content: [CC BY 4.0](LICENSE-CONTENT.md), © 2026 Sorey Garcia.
- Third-party components keep their own licenses: see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Status

Work in progress. The site, the path and every lesson of the nine zones and the final stop are written in Spanish and English. They are a first draft: next comes testing with children and families (see section 10 of [CONTENT_PLAN.md](CONTENT_PLAN.md)) and checking the menu option names listed there in the real Scratch editor.
