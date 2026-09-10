import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { publicRoutes } from "../src/seo/publicRoutes.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const port = 41731;
const baseUrl = `https://127.0.0.1:${port}`;
// Vite's ASP.NET development config serves preview over the local dev certificate.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const shellPath = path.join(dist, "spa-shell.html");
const shell = await readFile(path.join(dist, "index.html"), "utf8");
await writeFile(shellPath, shell);

const preview = spawn(process.execPath, [path.join(root, "node_modules", "vite", "bin", "vite.js"), "preview", "--host", "127.0.0.1", "--port", String(port), "--strictPort"], { cwd: root, stdio: "ignore" });
try {
  await waitForServer();
  const browser = await chromium.launch({ headless: true });
  const browserContext = await browser.newContext({ ignoreHTTPSErrors: true });
  try {
    for (const route of publicRoutes.filter((item) => item.prerender)) {
      console.log(`Prerendering ${route.path}`);
      const page = await browserContext.newPage();
      await page.goto(`${baseUrl}${route.path}`, { waitUntil: "networkidle" });
      await page.waitForFunction((expectedTitle) => document.title === expectedTitle && (document.querySelector("#root")?.innerText.trim().length ?? 0) > 250, route.title);
      const html = await page.content();
      const outputDirectory = route.path === "/" ? dist : path.join(dist, route.path.slice(1));
      await mkdir(outputDirectory, { recursive: true });
      await writeFile(path.join(outputDirectory, "index.html"), html);
      await page.close();
    }
  } finally {
    await browserContext.close();
    await browser.close();
  }
} finally {
  preview.kill();
}

async function waitForServer() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch { /* preview has not started yet */ }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error("Vite preview did not start for prerendering.");
}
