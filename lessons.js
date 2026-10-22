// Lesson pages. Each lessons/<id>.html loads script.js, the zone's content file
// (content/<zone>.js, which fills lessonData) and then this file, which draws the
// page: Look → Try it here → Make it in Scratch → Without a screen → For families.
//
// Blocks are written as "category:text". In the text, (10) is a number, [Hi] is a
// text value and ⚑ is the green flag. A line ending in " {" opens a C block
// (repeat, if) and a line "}" closes it.

Object.assign(translations.en, {
  "meta.lessonTitle": "{name} — PyBot Blocks",
  "lesson.back": "← The path",
  "lesson.meta": "ZONE {zone} · PAGE {page} OF {total}",
  "lesson.look": "Look",
  "lesson.try": "Try it here",
  "lesson.scratch": "Make it in Scratch",
  "lesson.unplugged": "Without a screen",
  "lesson.family": "For families",
  "lesson.selfcheck": "How did it go?",
  "lesson.good": "😀 I get it",
  "lesson.okay": "🙂 More or less",
  "lesson.review": "🔁 I want to review",
  "lesson.selfcheckSaved": "Saved. You can change it anytime.",
  "lesson.prev": "← Previous",
  "lesson.next": "Next →",
  "lesson.map": "Back to the path",
  "lesson.open": "Open Scratch ↗",
  "lesson.challenge": "Short challenge",
  "lesson.expect": "What should happen",
  "lesson.check": "If it doesn't work, check",
  "lesson.save": "Save: File → Save now (with an account) or File → Save to your computer.",
  "lesson.missing": "This page is not ready yet.",
  "activity.choice": "CHOOSE",
  "activity.order": "PUT IN ORDER",
  "activity.match": "MATCH",
  "activity.check": "Check",
  "activity.again": "Try again",
  "activity.clear": "Start again",
  "activity.yours": "Your program",
  "activity.blocks": "Blocks",
  "activity.tapBlock": "Tap the blocks in order.",
  "activity.needAll": "Use all the blocks first.",
  "activity.tryAgain": "Not yet. Look again.",
  "activity.matchPick": "Tap one on the left, then its pair on the right.",
  "activity.matchWrong": "Those two don't go together. Try another one.",
  "activity.done": "Done!",
});

Object.assign(translations.es, {
  "meta.lessonTitle": "{name} — PyBot Blocks",
  "lesson.back": "← El camino",
  "lesson.meta": "ZONA {zone} · PÁGINA {page} DE {total}",
  "lesson.look": "Mira",
  "lesson.try": "Prueba aquí",
  "lesson.scratch": "Hazlo en Scratch",
  "lesson.unplugged": "Sin pantalla",
  "lesson.family": "Para familias",
  "lesson.selfcheck": "¿Cómo te fue?",
  "lesson.good": "😀 Lo entiendo",
  "lesson.okay": "🙂 Más o menos",
  "lesson.review": "🔁 Quiero repasar",
  "lesson.selfcheckSaved": "Guardado. Puedes cambiarlo cuando quieras.",
  "lesson.prev": "← Anterior",
  "lesson.next": "Siguiente →",
  "lesson.map": "Volver al camino",
  "lesson.open": "Abrir Scratch ↗",
  "lesson.challenge": "Reto corto",
  "lesson.expect": "Qué debería pasar",
  "lesson.check": "Si no funciona, revisa",
  "lesson.save": "Guarda: Archivo → Guardar ahora (con cuenta) o Archivo → Guardar en tu computadora.",
  "lesson.missing": "Esta página todavía no está lista.",
  "activity.choice": "ELIGE",
  "activity.order": "ORDENA",
  "activity.match": "EMPAREJA",
  "activity.check": "Revisar",
  "activity.again": "Intentar otra vez",
  "activity.clear": "Empezar de nuevo",
  "activity.yours": "Tu programa",
  "activity.blocks": "Bloques",
  "activity.tapBlock": "Toca los bloques en orden.",
  "activity.needAll": "Primero usa todos los bloques.",
  "activity.tryAgain": "Todavía no. Mira otra vez.",
  "activity.matchPick": "Toca uno a la izquierda y luego su pareja a la derecha.",
  "activity.matchWrong": "Esos dos no van juntos. Prueba con otro.",
  "activity.done": "¡Hecho!",
});

const lessonData = {};
// A text in both languages.
const L = (es, en) => ({ es, en });
const pick = (value) => (value && typeof value === "object" && !Array.isArray(value) && "es" in value ? value[currentLanguage] ?? value.es : value);

function el(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text !== undefined) {
    element.textContent = text;
  }
  return element;
}

// One block from "category:text".
function drawBlock(source) {
  const split = source.indexOf(":");
  const kind = source.slice(0, split);
  const text = source.slice(split + 1).trim();
  const block = el("div", `block block-${kind}`);
  text.split(/(\([^)]*\)|\[[^\]]*\]|⚑)/).filter(Boolean).forEach((part) => {
    if (part === "⚑") {
      const flag = el("span", "block-flag", "⚑");
      flag.setAttribute("aria-label", currentLanguage === "es" ? "bandera verde" : "green flag");
      block.append(flag);
    } else if (part.startsWith("(")) {
      block.append(el("span", "block-value", part.slice(1, -1)));
    } else if (part.startsWith("[")) {
      block.append(el("span", "block-text", part.slice(1, -1)));
    } else {
      block.append(part.trim() ? part : " ");
    }
  });
  return block;
}

// A whole program, with C blocks.
function drawProgram(lines) {
  const root = el("div", "script");
  const stack = [root];
  lines.forEach((line) => {
    const parent = stack.at(-1);
    if (line === "}") {
      stack.pop();
    } else if (line.endsWith(" {")) {
      const holder = el("div", "block-c");
      const header = drawBlock(line.slice(0, -2));
      holder.style.background = getComputedStyle(document.documentElement).getPropertyValue(`--block-${line.split(":")[0]}`);
      const inner = el("div", "script");
      holder.append(header, inner);
      parent.append(holder);
      stack.push(inner);
    } else {
      parent.append(drawBlock(line));
    }
  });
  return root;
}

const isBlock = (text) => /^(events|motion|looks|sound|control|sensing|operators|variables|pen|music):/.test(text);
const drawOption = (text) => (isBlock(text) ? drawBlock(text) : document.createTextNode(text));

function storeList(key, add) {
  try {
    const list = (localStorage.getItem(key) ?? "").split(",").filter(Boolean);
    if (!list.includes(add)) {
      localStorage.setItem(key, [...list, add].join(","));
    }
  } catch {
    // Lessons still work without storage.
  }
}

function completeActivity(card, id) {
  card.classList.add("is-complete");
  try {
    localStorage.setItem(activityStorageKey(id), "complete");
  } catch {
    // The page still celebrates.
  }
  const step = pathSteps.find((candidate) => candidate.id === lessonId);
  if (step.activities.every((activity) => storedActivityState(activity) === "complete")) {
    storeList(PATH_DONE_KEY, lessonId);
  }
  checkRewards();
  buddyReact("correct");
}

// A fixed order that is never the answer, so the same page always looks the same.
function shuffled(items) {
  const order = items.map((item, index) => ({ item, index })).sort((a, b) => (a.item.length * 7 + a.index * 3) % 5 - (b.item.length * 7 + b.index * 3) % 5);
  const result = order.map(({ item }) => item);
  return result.every((item, index) => item === items[index]) ? [...items.slice(1), items[0]] : result;
}

function activityShell(activity, kindKey) {
  const card = el("section", "step-activity");
  card.append(el("span", "activity-kind", textFor(kindKey)), el("h3", "", pick(activity.prompt)));
  if (activity.program) {
    const figure = el("div", "lesson-program");
    figure.append(drawProgram(pick(activity.program)));
    card.append(figure);
  }
  return card;
}

function feedback(card, text, good) {
  const line = card.querySelector(".activity-feedback");
  line.textContent = text;
  line.classList.toggle("is-good", good);
}

function drawChoice(activity) {
  const card = activityShell(activity, "activity.choice");
  const options = el("div", "activity-options");
  options.setAttribute("role", "group");
  let misses = 0;
  pick(activity.options).forEach((text, index) => {
    const button = el("button", "option-button");
    button.type = "button";
    button.append(drawOption(text));
    button.addEventListener("click", () => {
      if (index === activity.answer) {
        button.classList.add("is-right");
        options.querySelectorAll("button").forEach((other) => {
          other.disabled = true;
        });
        feedback(card, `✓ ${pick(activity.explain)}`, true);
        completeActivity(card, activity.id);
      } else {
        misses += 1;
        button.classList.add("is-wrong");
        button.disabled = true;
        feedback(card, misses === 1 ? pick(activity.hint) : `${pick(activity.hint)} ${textFor("activity.tryAgain")}`, false);
        buddyReact("wrong");
      }
    });
    options.append(button);
  });
  card.append(options, el("p", "activity-feedback"));
  card.querySelector(".activity-feedback").setAttribute("aria-live", "polite");
  if (storedActivityState(activity.id) === "complete") {
    card.classList.add("is-complete");
    options.children[activity.answer].classList.add("is-right");
    feedback(card, `✓ ${pick(activity.explain)}`, true);
  }
  return card;
}

function drawOrder(activity) {
  const card = activityShell(activity, "activity.order");
  const blocks = pick(activity.blocks);
  let chosen = [];
  const area = el("div", "order-area");
  const trayBox = el("div");
  const programBox = el("div");
  trayBox.append(el("h4", "", textFor("activity.blocks")));
  programBox.append(el("h4", "", textFor("activity.yours")));
  const tray = el("ul", "mission-list");
  const program = el("ol", "script");
  trayBox.append(tray);
  programBox.append(el("p", "mission-empty", textFor("activity.tapBlock")), program);
  area.append(trayBox, programBox);
  const actions = el("div", "activity-actions mission-actions");
  const check = el("button", "is-primary", textFor("activity.check"));
  const clear = el("button", "", textFor("activity.clear"));
  check.type = "button";
  clear.type = "button";
  actions.append(check, clear);
  card.append(area, actions, el("p", "activity-feedback"));
  card.querySelector(".activity-feedback").setAttribute("aria-live", "polite");

  const draw = () => {
    tray.replaceChildren(...shuffled(blocks).filter((text) => !chosen.includes(text)).map((text) => {
      const item = el("li");
      const wrapper = el("button", `option-button${isBlock(text) ? " is-block" : ""}`);
      wrapper.type = "button";
      wrapper.append(drawOption(text));
      wrapper.addEventListener("click", () => {
        chosen.push(text);
        feedback(card, "", false);
        draw();
      });
      item.append(wrapper);
      return item;
    }));
    program.replaceChildren(...chosen.map((text) => (isBlock(text) ? drawBlock(text) : el("li", "order-text", text))));
    programBox.querySelector(".mission-empty").hidden = chosen.length > 0;
  };
  check.addEventListener("click", () => {
    if (chosen.length < blocks.length) {
      feedback(card, textFor("activity.needAll"), false);
    } else if (chosen.every((text, index) => text === blocks[index])) {
      feedback(card, `✓ ${pick(activity.explain)}`, true);
      completeActivity(card, activity.id);
    } else {
      feedback(card, pick(activity.hint), false);
      buddyReact("wrong");
    }
  });
  clear.addEventListener("click", () => {
    chosen = [];
    feedback(card, "", false);
    draw();
  });
  if (storedActivityState(activity.id) === "complete") {
    chosen = [...blocks];
    card.classList.add("is-complete");
    feedback(card, `✓ ${pick(activity.explain)}`, true);
  }
  draw();
  return card;
}

function drawMatch(activity) {
  const card = activityShell(activity, "activity.match");
  const pairs = pick(activity.pairs);
  const columns = el("div", "match-columns");
  const left = el("div");
  const right = el("div");
  columns.append(left, right);
  card.append(el("p", "", textFor("activity.matchPick")), columns, el("p", "activity-feedback"));
  card.querySelector(".activity-feedback").setAttribute("aria-live", "polite");
  let selected = null;
  let matched = 0;
  const makeButton = (text, index, side) => {
    const button = el("button", "option-button");
    button.type = "button";
    button.dataset.index = String(index);
    button.append(drawOption(text));
    button.addEventListener("click", () => {
      if (side === "left") {
        left.querySelectorAll(".is-selected").forEach((other) => other.classList.remove("is-selected"));
        button.classList.add("is-selected");
        selected = index;
        return;
      }
      if (selected === null) {
        feedback(card, textFor("activity.matchPick"), false);
        return;
      }
      if (selected === index) {
        [left.querySelector(`[data-index="${index}"]`), button].forEach((item) => {
          item.classList.remove("is-selected");
          item.classList.add("is-right");
          item.disabled = true;
        });
        selected = null;
        matched += 1;
        feedback(card, "", false);
        if (matched === pairs.length) {
          feedback(card, `✓ ${pick(activity.explain)}`, true);
          completeActivity(card, activity.id);
        }
      } else {
        feedback(card, textFor("activity.matchWrong"), false);
      }
    });
    return button;
  };
  pairs.forEach(([text], index) => left.append(makeButton(text, index, "left")));
  shuffled(pairs.map(([, text]) => text)).forEach((text) => right.append(makeButton(text, pairs.findIndex(([, other]) => other === text), "right")));
  if (storedActivityState(activity.id) === "complete") {
    card.classList.add("is-complete");
    columns.querySelectorAll("button").forEach((button) => {
      button.classList.add("is-right");
      button.disabled = true;
    });
    feedback(card, `✓ ${pick(activity.explain)}`, true);
  }
  return card;
}

const activityDrawers = { choice: drawChoice, order: drawOrder, match: drawMatch };

function part(className, icon, titleKey) {
  const section = el("section", `lesson-part ${className}`);
  const heading = el("h2");
  const badge = el("span", "lesson-part-icon", icon);
  badge.setAttribute("aria-hidden", "true");
  heading.append(badge, textFor(titleKey));
  section.append(heading);
  return section;
}

function paragraphs(section, texts) {
  [].concat(pick(texts) ?? []).forEach((text) => section.append(el("p", "", text)));
}

function storedSelfCheck() {
  try {
    return new Map((localStorage.getItem(SELF_CHECK_KEY) ?? "").split(",").filter(Boolean).map((pair) => pair.split(":")));
  } catch {
    return new Map();
  }
}

const lessonId = document.body.dataset.step;

function renderLesson() {
  const main = document.querySelector("[data-lesson]");
  const lesson = lessonData[lessonId];
  const zone = pathZones.find((candidate) => candidate.steps.includes(lessonId));
  if (!main || !lesson || !zone) {
    main?.replaceChildren(el("p", "", textFor("lesson.missing")));
    return;
  }
  const zoneNumber = String(pathZones.indexOf(zone)).padStart(2, "0");
  const page = zone.steps.indexOf(lessonId) + 1;
  document.title = textFor("meta.lessonTitle").replace("{name}", textFor(`step.${lessonId}`));

  const back = el("a", "lesson-back", textFor("lesson.back"));
  back.href = "../course.html";
  const meta = el("p", "lesson-meta", textFor("lesson.meta").replace("{zone}", zoneNumber).replace("{page}", String(page)).replace("{total}", String(zone.steps.length)));
  const parts = [back, meta, el("h1", "", textFor(`step.${lessonId}`)), el("p", "lesson-goal", pick(lesson.goal))];

  const look = part("lesson-look", "👀", "lesson.look");
  paragraphs(look, lesson.look);
  if (lesson.program) {
    const figure = el("figure", "lesson-program");
    figure.append(drawProgram(pick(lesson.program)));
    if (lesson.caption) {
      figure.append(el("figcaption", "", pick(lesson.caption)));
    }
    look.append(figure);
  }
  if (lesson.terms) {
    const terms = el("ul", "lesson-terms");
    pick(lesson.terms).forEach(([term, meaning]) => {
      const item = el("li");
      item.append(el("b", "", term), meaning);
      terms.append(item);
    });
    look.append(terms);
  }
  parts.push(look);

  const tryPart = part("lesson-try", "🧩", "lesson.try");
  lesson.activities.forEach((activity) => tryPart.append(activityDrawers[activity.type](activity)));
  parts.push(tryPart);

  const scratch = part("lesson-scratch", "✨", "lesson.scratch");
  const steps = el("ol", "scratch-steps");
  pick(lesson.scratch.steps).forEach((text) => steps.append(el("li", "", text)));
  scratch.append(steps);
  if (lesson.scratch.program) {
    const figure = el("div", "lesson-program");
    figure.append(drawProgram(pick(lesson.scratch.program)));
    scratch.append(figure);
  }
  [["lesson.challenge", lesson.scratch.challenge], ["lesson.expect", lesson.scratch.expect]].forEach(([key, text]) => {
    const box = el("div", "scratch-box");
    box.append(el("b", "", textFor(key)), pick(text));
    scratch.append(box);
  });
  const checkBox = el("div", "scratch-box");
  const checks = el("ul");
  pick(lesson.scratch.check).forEach((text) => checks.append(el("li", "", text)));
  checkBox.append(el("b", "", textFor("lesson.check")), checks);
  scratch.append(checkBox, el("p", "", textFor("lesson.save")));
  const open = el("a", "button button-primary", textFor("lesson.open"));
  open.href = "https://scratch.mit.edu/projects/editor/";
  open.target = "_blank";
  open.rel = "noopener noreferrer";
  scratch.append(open);
  parts.push(scratch);

  const unplugged = part("lesson-unplugged", "🤸", "lesson.unplugged");
  paragraphs(unplugged, lesson.unplugged);
  parts.push(unplugged);

  const family = el("details", "zone-adults lesson-family");
  family.append(el("summary", "", textFor("lesson.family")), el("p", "", pick(lesson.family)));
  parts.push(family);

  const self = part("lesson-self", "💬", "lesson.selfcheck");
  const buttons = el("div", "selfcheck mission-actions");
  const note = el("p", "activity-feedback");
  const rating = storedSelfCheck().get(lessonId);
  SELF_CHECK_RATINGS.forEach((value) => {
    const button = el("button", "", textFor(`lesson.${value}`));
    button.type = "button";
    button.setAttribute("aria-pressed", String(rating === value));
    button.addEventListener("click", () => {
      const ratings = storedSelfCheck();
      ratings.set(lessonId, value);
      try {
        localStorage.setItem(SELF_CHECK_KEY, [...ratings].map((pair) => pair.join(":")).join(","));
      } catch {
        // The choice still shows on this page.
      }
      buttons.querySelectorAll("button").forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
      note.textContent = textFor("lesson.selfcheckSaved");
    });
    buttons.append(button);
  });
  self.append(buttons, note);
  parts.push(self);

  const published = pathSteps.filter((step) => !step.soon);
  const index = published.findIndex((step) => step.id === lessonId);
  const nav = el("nav", "lesson-nav");
  const prev = published[index - 1];
  const next = published[index + 1];
  const link = (href, key, primary) => {
    const anchor = el("a", `button ${primary ? "button-primary" : "button-secondary"}`, textFor(key));
    anchor.href = href;
    return anchor;
  };
  nav.append(prev ? link(`${prev.id}.html`, "lesson.prev") : link("../course.html", "lesson.map"));
  nav.append(next ? link(`${next.id}.html`, "lesson.next", true) : link("../course.html", "lesson.map", true));
  parts.push(nav);

  main.replaceChildren(...parts);
}

// Content files load after this one, so the page is drawn once everything loaded.
document.addEventListener("DOMContentLoaded", () => {
  if (!lessonId) {
    return;
  }
  storeList(PATH_VISITED_KEY, lessonId);
  try {
    localStorage.setItem(PATH_CURRENT_KEY, lessonId);
  } catch {
    // The page still works.
  }
  noteLearningDay();
  checkRewards();
  document.addEventListener("pybot:language", renderLesson);
  renderLesson();
});
