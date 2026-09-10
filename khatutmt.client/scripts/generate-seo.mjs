import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { publicRoutes, siteUrl } from "../src/seo/publicRoutes.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const normalizedRoutes = publicRoutes.map((route) => ({
  ...route,
  canonical: `${siteUrl}${route.path === "/" ? "/" : route.path}`
}));

await mkdir(publicDir, { recursive: true });
await writeFile(path.join(publicDir, "seo-routes.json"), `${JSON.stringify(normalizedRoutes, null, 2)}\n`);

const urls = normalizedRoutes
  .filter((route) => route.sitemap)
  .map((route) => `  <url><loc>${escapeXml(route.canonical)}</loc></url>`)
  .join("\n");
await writeFile(path.join(publicDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);

function escapeXml(value) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;" })[character]);
}
