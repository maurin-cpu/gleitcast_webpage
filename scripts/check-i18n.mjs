// i18n-Paritätscheck: fr.json / it.json müssen exakt dieselbe Key-Struktur,
// Array-Längen und Tags/Platzhalter wie de.json (Quelle) haben.
// Aufruf:  node scripts/check-i18n.mjs   (Exit 1 bei Abweichung)
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "messages");
const load = (f) => JSON.parse(readFileSync(join(root, f), "utf8"));
const de = load("de.json");
const targets = { fr: load("fr.json"), it: load("it.json") };

// Strukturierte Key-Liste inkl. Array-Längen (z. B. "Faq.items[5]")
const keys = (o, p = "") =>
  Object.entries(o).flatMap(([k, v]) => {
    const np = p ? `${p}.${k}` : k;
    return v && typeof v === "object" && !Array.isArray(v)
      ? keys(v, np)
      : [np + (Array.isArray(v) ? `[${v.length}]` : "")];
  });

// Flache key→value-Map (Array-Indizes als Pfad)
const flat = (o, p = "") =>
  Object.entries(o).flatMap(([k, v]) => {
    const np = p ? `${p}.${k}` : k;
    return v && typeof v === "object" ? flat(v, np) : [[np, v]];
  });

const tagsOf = (s) =>
  (String(s).match(/<[^>]+>|\{[^}]+\}/g) || []).sort().join(",");

const kde = keys(de);
const fde = Object.fromEntries(flat(de));
let problems = 0;

for (const [lang, obj] of Object.entries(targets)) {
  const kt = keys(obj);
  const ft = Object.fromEntries(flat(obj));
  const missing = kde.filter((k) => !kt.includes(k));
  const extra = kt.filter((k) => !kde.includes(k));
  const tagMismatch = Object.keys(fde).filter(
    (k) => typeof fde[k] === "string" && tagsOf(fde[k]) !== tagsOf(ft[k]),
  );

  if (missing.length || extra.length || tagMismatch.length) {
    problems++;
    console.log(`\n=== ${lang.toUpperCase()} ===`);
    if (missing.length) console.log("  Fehlende Keys:", missing);
    if (extra.length) console.log("  Überzählige Keys:", extra);
    for (const k of tagMismatch)
      console.log(`  Tag-Abweichung @ ${k}: DE[${tagsOf(fde[k])}] ${lang}[${tagsOf(ft[k])}]`);
  } else {
    console.log(`${lang.toUpperCase()}: ok (${kt.length} Keys, Tags konsistent)`);
  }
}

if (problems) {
  console.error(`\n✗ i18n-Parität verletzt in ${problems} Sprache(n).`);
  process.exit(1);
}
console.log("\n✓ Alle Sprachen synchron.");
