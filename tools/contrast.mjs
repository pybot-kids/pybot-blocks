// Checks WCAG AA contrast for every text/background pair the site uses.
// Run: node tools/contrast.mjs
const tokens = {
  ink: "#12304a", muted: "#4a6075", green: "#2fb36d", "green-dark": "#1a7343", "green-soft": "#e7f7ee",
  blue: "#2d7be0", "blue-dark": "#1b4f9a", sky: "#e5f2ff", yellow: "#ffd23f", "yellow-soft": "#fff6cc",
  bg: "#f5faf8", white: "#ffffff", python: "#ff7a45", english: "#c2287e",
};
// [text, background, minimum ratio]: 4.5 for body text, 3 for large bold text and icons.
const pairs = [
  ["ink", "bg", 4.5], ["ink", "white", 4.5], ["ink", "sky", 4.5], ["ink", "green-soft", 4.5], ["ink", "yellow-soft", 4.5],
  ["ink", "yellow", 4.5], ["ink", "green", 4.5], ["muted", "bg", 4.5], ["muted", "white", 4.5], ["muted", "sky", 4.5],
  ["white", "green-dark", 4.5], ["white", "blue-dark", 4.5], ["white", "ink", 4.5], ["white", "blue", 3],
  ["green-dark", "white", 4.5], ["green-dark", "bg", 4.5], ["green-dark", "green-soft", 4.5],
  ["blue-dark", "white", 4.5], ["blue-dark", "bg", 4.5], ["blue-dark", "sky", 4.5],
  ["ink", "python", 4.5], ["white", "english", 4.5],
];
const luminance = (hex) => {
  const [r, g, b] = hex.match(/\w\w/g).map((part) => parseInt(part, 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
let failed = 0;
for (const [text, background, min] of pairs) {
  const value = ratio(tokens[text], tokens[background]);
  const ok = value >= min;
  failed += ok ? 0 : 1;
  console.log(`${ok ? "pass" : "FAIL"}  ${text.padEnd(10)} on ${background.padEnd(11)} ${value.toFixed(2)} (needs ${min})`);
}
process.exit(failed ? 1 : 0);
