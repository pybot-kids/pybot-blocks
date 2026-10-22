#!/usr/bin/env node
// Writes lessons/<id>.html for every published step (no `soon: true`) and checks
// that the activity ids in content/<zone>.js match pathSteps in script.js.
//
//   node tools/lesson-pages.mjs          writes the pages and checks the ids
//   node tools/lesson-pages.mjs --check  only checks (used in CI)
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const script = readFileSync(new URL("script.js", root), "utf8");
const between = (start, end) => {
  const from = script.indexOf(start);
  return script.slice(from + start.length, script.indexOf(end, from));
};
const pathSteps = new Function(`return [${between("const pathSteps = [", "\n];")}\n];`)();
const zones = [...between("const pathZones = [", "\n]").matchAll(/id: "(\w+)".*?steps: \[([^\]]*)\]/g)]
  .map(([, id, steps]) => ({ id, steps: [...steps.matchAll(/"(\w+)"/g)].map((match) => match[1]) }));

const page = (id, zone) => `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#e8f2f3" />
    <title>PyBot Blocks</title>
    <link rel="icon" href="../favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="../styles.css" />
    <script src="../script.js" defer></script>
    <script src="../lessons.js" defer></script>
    <script src="../content/${zone}.js" defer></script>
  </head>
  <body data-page="lesson" data-step="${id}">
    <a class="skip-link" href="#main-content" data-i18n="a11y.skip">Saltar al contenido</a>

    <header class="site-header">
      <a class="brand" href="../index.html" data-i18n-aria-label="a11y.home">
        <span class="brand-mark" aria-hidden="true"><span></span></span>
        <span>PyBot Blocks</span>
      </a>
      <nav class="site-nav" data-i18n-aria-label="a11y.mainNav">
        <div class="language-switch" role="group" data-i18n-aria-label="a11y.language">
          <button class="language-button" type="button" data-language="en" aria-pressed="false">EN</button>
          <button class="language-button is-active" type="button" data-language="es" aria-pressed="true">ES</button>
        </div>
      </nav>
    </header>

    <main class="page-main lesson-main" id="main-content" data-lesson></main>

    <footer class="site-footer">
      <p data-i18n="footer.family"></p>
      <p><span data-i18n="footer.credit"></span> <a href="https://github.com/pybot-kids/pybot-blocks#license" target="_blank" rel="noopener noreferrer" data-i18n="footer.license"></a></p>
      <p data-i18n="notice.affiliation"></p>
    </footer>
  </body>
</html>
`;

const problems = [];
const write = process.argv[2] !== "--check";
mkdirSync(new URL("lessons/", root), { recursive: true });
for (const step of pathSteps.filter((candidate) => !candidate.soon)) {
  const zone = zones.find((candidate) => candidate.steps.includes(step.id));
  const contentUrl = new URL(`content/${zone.id}.js`, root);
  if (!existsSync(contentUrl)) {
    problems.push(`${step.id}: content/${zone.id}.js is missing.`);
    continue;
  }
  const content = readFileSync(contentUrl, "utf8");
  const block = content.split(/^lessonData\./m).find((part) => part.startsWith(`${step.id} =`));
  if (!block) {
    problems.push(`${step.id}: no lessonData.${step.id} in content/${zone.id}.js.`);
    continue;
  }
  const ids = [...block.matchAll(/^\s+id: "([a-z0-9-]+)",$/gm)].map((match) => match[1]);
  if (JSON.stringify(ids) !== JSON.stringify(step.activities)) {
    problems.push(`${step.id}: activities in pathSteps ${JSON.stringify(step.activities)} differ from content ${JSON.stringify(ids)}.`);
  }
  const file = new URL(`lessons/${step.id}.html`, root);
  const html = page(step.id, zone.id);
  if (write) {
    writeFileSync(file, html);
  } else if (!existsSync(file) || readFileSync(file, "utf8") !== html) {
    problems.push(`lessons/${step.id}.html is missing or out of date. Run: node tools/lesson-pages.mjs`);
  }
}

if (problems.length) {
  problems.forEach((problem) => console.error(problem));
  process.exit(1);
}
console.log(write ? "Lesson pages written." : "Lesson pages match the path.");
