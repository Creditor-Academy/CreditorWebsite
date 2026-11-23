#!/usr/bin/env node
/**
 * Fail when src/app/services still points at a /blog or /Blogs slug
 * that is not a real entry in src/lib/journalPosts.ts.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const journalPath = path.join(packageRoot, "src/lib/journalPosts.ts");
const servicesDir = path.join(packageRoot, "src/app/services");

const journalSrc = fs.readFileSync(journalPath, "utf8");
const journalSlugs = new Set(
  [...journalSrc.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((match) => match[1])
);
const exportedSlugPath = path.join(packageRoot, "src/lib/journalSlugs.ts");
const exportedSrc = fs.readFileSync(exportedSlugPath, "utf8");
const exportedSlugs = new Set(
  [...exportedSrc.matchAll(/"([a-z0-9-]+)"/g)].map((match) => match[1])
);

if (journalSlugs.size === 0) {
  console.error("check-links: no slugs found in journalPosts.ts");
  process.exit(1);
}

const missingFromExport = [...journalSlugs].filter((slug) => !exportedSlugs.has(slug));
const extraInExport = [...exportedSlugs].filter((slug) => !journalSlugs.has(slug));
if (missingFromExport.length || extraInExport.length) {
  console.error("check-links: journalSlugs.ts does not match journalPosts.ts");
  for (const slug of missingFromExport) console.error(`  missing ${slug}`);
  for (const slug of extraInExport) console.error(`  extra ${slug}`);
  process.exit(1);
}

const linkPattern =
  /link:\s*["']\/blog\/([a-z0-9-]+)["']|["']\/(?:blog|Blogs)\/([a-z0-9-]+)["']/g;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(tsx|ts|jsx|js|mjs)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const failures = [];

for (const file of walk(servicesDir)) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(linkPattern)) {
    const slug = match[1] || match[2];
    if (journalSlugs.has(slug)) continue;
    const line = text.slice(0, match.index).split("\n").length;
    failures.push(`${path.relative(packageRoot, file)}:${line} ${match[0]}`);
  }
}

if (failures.length > 0) {
  console.error("check-links: blog hrefs missing from journalPosts.ts");
  for (const failure of failures) console.error(`  ${failure}`);
  process.exit(1);
}

console.log(`check-links: ok (${journalSlugs.size} journal slugs)`);
