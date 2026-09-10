import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { publicRoutes, absoluteUrl } from "../src/seo/publicRoutes.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const failures = [];
for (const route of publicRoutes.filter((item) => item.prerender)) {
  const file = path.join(dist, route.path === "/" ? "index.html" : path.join(route.path.slice(1), "index.html"));
  const html = await readFile(file, "utf8");
  const rootText = (html.match(/<div id="root"[^>]*>([\s\S]*)<\/div>\s*<\/body>/)?.[1] ?? "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1].replace(/&amp;/g, "&");
  if (title !== route.title) failures.push(`${route.path}: title is missing or incorrect`);
  if (!html.includes(`rel="canonical" href="${absoluteUrl(route.path)}"`)) failures.push(`${route.path}: canonical is missing or incorrect`);
  if (rootText.length < 250) failures.push(`${route.path}: #root has insufficient crawler-visible text`);
}
const shell = await readFile(path.join(dist, "spa-shell.html"), "utf8");
if (!/<div id="root"[^>]*>\s*<\/div>/.test(shell)) failures.push("spa-shell.html must retain an empty #root");
if (failures.length) throw new Error(`Prerender QA failed:\n${failures.join("\n")}`);
console.log(`Prerender QA passed for ${publicRoutes.filter((route) => route.prerender).length} routes.`);
