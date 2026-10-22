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
  "plane.label": "The Scratch stage as a coordinate plane. x goes from -240 on the left to 240 on the right; y goes from -180 at the bottom to 180 at the top. The center is x: 0, y: 0.",
  "plane.center": "center",
  "plane.tap": "Tap anywhere on the stage to see its x and y.",
  "plane.read": "x: {x}, y: {y}",
  "plane.right": "x is positive (+): right of the center",
  "plane.left": "x is negative (−): left of the center",
  "plane.up": "y is positive (+): above the center",
  "plane.down": "y is negative (−): below the center",
  "plane.onAxis": "on the line",
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
  "plane.label": "El escenario de Scratch como plano cartesiano. x va de -240 a la izquierda a 240 a la derecha; y va de -180 abajo a 180 arriba. El centro es x: 0, y: 0.",
  "plane.center": "centro",
  "plane.tap": "Toca cualquier lugar del escenario para ver su x y su y.",
  "plane.read": "x: {x}, y: {y}",
  "plane.right": "x es positiva (+): a la derecha del centro",
  "plane.left": "x es negativa (−): a la izquierda del centro",
  "plane.up": "y es positiva (+): arriba del centro",
  "plane.down": "y es negativa (−): abajo del centro",
  "plane.onAxis": "sobre la línea",
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

// Splits block text into plain words and slots, keeping nested slots whole:
// (10) number, [Hi] text, {cat:answer} round reporter, ⟨cat:touching edge?⟩ condition.
function blockParts(text) {
  const closers = { "(": ")", "[": "]", "{": "}", "⟨": "⟩" };
  const parts = [];
  let plain = "";
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (!closers[char]) {
      plain += char;
      continue;
    }
    const stack = [];
    let end = index;
    for (; end < text.length; end += 1) {
      if (closers[text[end]]) {
        stack.push(closers[text[end]]);
      } else if (text[end] === stack.at(-1)) {
        stack.pop();
        if (!stack.length) {
          break;
        }
      }
    }
    if (plain) {
      parts.push(plain);
      plain = "";
    }
    parts.push(text.slice(index, end + 1));
    index = end;
  }
  if (plain) {
    parts.push(plain);
  }
  return parts;
}

// One block from "category:text".
function drawBlock(source, shape = "") {
  const split = source.indexOf(":");
  const kind = source.slice(0, split);
  const text = source.slice(split + 1).trim();
  const block = el("div", `block block-${kind}${shape}`);
  blockParts(text).forEach((part) => {
    const inner = part.slice(1, -1);
    if (part.startsWith("{")) {
      block.append(drawBlock(inner, " block-reporter"));
    } else if (part.startsWith("⟨")) {
      block.append(drawBlock(inner, " block-bool"));
    } else if (part.startsWith("(")) {
      block.append(el("span", "block-value", inner));
    } else if (part.startsWith("[")) {
      block.append(el("span", "block-text", inner));
    } else {
      part.split("⚑").forEach((words, index) => {
        if (index > 0) {
          const flag = el("span", "block-flag", "⚑");
          flag.setAttribute("aria-label", currentLanguage === "es" ? "bandera verde" : "green flag");
          block.append(flag);
        }
        if (words) {
          block.append(words.trim() ? words : " ");
        }
      });
    }
  });
  return block;
}

// A whole program, with C blocks. A line "---" starts another program next to it.
function drawProgram(lines) {
  if (lines.includes("---")) {
    const group = el("div", "programs");
    let start = 0;
    lines.forEach((line, index) => {
      if (line === "---" || index === lines.length - 1) {
        group.append(drawProgram(lines.slice(start, line === "---" ? index : index + 1)));
        start = index + 1;
      }
    });
    return group;
  }
  const root = el("div", "script");
  const stack = [root];
  lines.forEach((line) => {
    const parent = stack.at(-1);
    if (line === "}") {
      stack.pop();
    } else if (line.startsWith("} ") && line.endsWith(" {")) {
      // The middle of an if-else block: "} si no {".
      const holder = stack.pop().parentElement;
      const inner = el("div", "script");
      holder.append(el("div", "block-c-label", line.slice(2, -2)), inner);
      stack.push(inner);
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

// The Scratch stage as a coordinate plane: 480 wide and 360 tall, center 0, 0.
// SVG y grows downwards, so every Scratch y is drawn at -y.
const SVG_NS = "http://www.w3.org/2000/svg";
function svg(tag, attributes, text) {
  const node = document.createElementNS(SVG_NS, tag);
  Object.entries(attributes).forEach(([name, value]) => node.setAttribute(name, value));
  if (text !== undefined) {
    node.textContent = text;
  }
  return node;
}

function drawPlane(points = []) {
  const figure = el("figure", "lesson-plane");
  const plane = svg("svg", { viewBox: "-262 -204 524 408", role: "img", "aria-label": textFor("plane.label") });
  plane.append(svg("rect", { class: "plane-stage", x: -240, y: -180, width: 480, height: 360 }));
  [[1, 1], [-1, 1], [-1, -1], [1, -1]].forEach(([sx, sy]) => {
    plane.append(svg("rect", { class: `plane-quadrant plane-${sx > 0 ? "right" : "left"}-${sy > 0 ? "up" : "down"}`, x: sx > 0 ? 0 : -240, y: sy > 0 ? -180 : 0, width: 240, height: 180 }));
    const label = svg("text", { class: "plane-quadrant-label", x: sx * 200, y: sy > 0 ? -150 : 135 });
    label.append(svg("tspan", { x: sx * 200 }, `x ${sx > 0 ? "+" : "−"}`), svg("tspan", { x: sx * 200, dy: "1.15em" }, `y ${sy > 0 ? "+" : "−"}`));
    plane.append(label);
  });
  for (let x = -220; x <= 220; x += 20) {
    plane.append(svg("line", { class: x % 100 ? "plane-grid" : "plane-grid is-strong", x1: x, y1: -180, x2: x, y2: 180 }));
  }
  for (let y = -160; y <= 160; y += 20) {
    plane.append(svg("line", { class: y % 100 ? "plane-grid" : "plane-grid is-strong", x1: -240, y1: y, x2: 240, y2: y }));
  }
  plane.append(
    svg("line", { class: "plane-axis plane-axis-x", x1: -252, y1: 0, x2: 252, y2: 0 }),
    svg("line", { class: "plane-axis plane-axis-y", x1: 0, y1: -194, x2: 0, y2: 194 }),
    svg("path", { class: "plane-arrow plane-axis-x", d: "M258 0 l-12 -7 v14 z M-258 0 l12 -7 v14 z" }),
    svg("path", { class: "plane-arrow plane-axis-y", d: "M0 -200 l-7 12 h14 z M0 200 l-7 -12 h14 z" }),
  );
  [-240, -100, 100, 240].forEach((x) => {
    plane.append(svg("text", { class: "plane-tick", x: x + (Math.abs(x) === 240 ? -Math.sign(x) * 4 : 0), y: 18, "text-anchor": Math.abs(x) === 240 ? (x > 0 ? "end" : "start") : "middle" }, String(x)));
  });
  [-180, -100, 100, 180].forEach((y) => {
    plane.append(svg("text", { class: "plane-tick", x: -8, y: -y + (Math.abs(y) === 180 ? (y > 0 ? 14 : -5) : 5), "text-anchor": "end" }, String(y)));
  });
  plane.append(
    svg("text", { class: "plane-axis-name plane-axis-x", x: 236, y: -10, "text-anchor": "end" }, "x"),
    svg("text", { class: "plane-axis-name plane-axis-y", x: 10, y: -164 }, "y"),
  );
  points.forEach(([x, y]) => {
    plane.append(
      svg("line", { class: "plane-guide", x1: x, y1: -y, x2: x, y2: 0 }),
      svg("line", { class: "plane-guide", x1: x, y1: -y, x2: 0, y2: -y }),
      svg("circle", { class: "plane-point", cx: x, cy: -y, r: 8 }),
      svg("text", { class: "plane-point-label", x: x + (x > 60 ? -12 : 12), y: -y - 12, "text-anchor": x > 60 ? "end" : "start" }, textFor("plane.read").replace("{x}", x).replace("{y}", y)),
    );
  });
  plane.append(
    svg("circle", { class: "plane-center", cx: 0, cy: 0, r: 7 }),
    svg("text", { class: "plane-point-label", x: 10, y: 34 }, `0, 0 ${textFor("plane.center")}`),
  );
  const marker = svg("g", { class: "plane-marker", hidden: "" });
  const markerDot = svg("circle", { r: 9 });
  marker.append(markerDot);
  plane.append(marker);

  const readout = el("p", "plane-readout", textFor("plane.tap"));
  readout.setAttribute("aria-live", "polite");
  plane.addEventListener("pointerdown", (event) => {
    const spot = new DOMPoint(event.clientX, event.clientY).matrixTransform(plane.getScreenCTM().inverse());
    const x = Math.max(-240, Math.min(240, Math.round(spot.x / 10) * 10));
    const y = Math.max(-180, Math.min(180, Math.round(-spot.y / 10) * 10));
    markerDot.setAttribute("cx", x);
    markerDot.setAttribute("cy", -y);
    marker.removeAttribute("hidden");
    const side = (value, plus, minus) => (value > 0 ? textFor(plus) : value < 0 ? textFor(minus) : textFor("plane.onAxis"));
    readout.replaceChildren(el("b", "", textFor("plane.read").replace("{x}", x).replace("{y}", y)), ` — ${side(x, "plane.right", "plane.left")}; ${side(y, "plane.up", "plane.down")}`);
  });

  const legend = el("ul", "lesson-terms plane-legend");
  [["plane-right", "x +", "plane.right"], ["plane-left", "x −", "plane.left"], ["plane-up", "y +", "plane.up"], ["plane-down", "y −", "plane.down"]].forEach(([className, sign, key]) => {
    const item = el("li", className);
    item.append(el("b", "", sign), textFor(key));
    legend.append(item);
  });
  figure.append(plane, readout, legend);
  return figure;
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
  if (lesson.plane) {
    look.append(drawPlane(lesson.plane.points));
  }
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
