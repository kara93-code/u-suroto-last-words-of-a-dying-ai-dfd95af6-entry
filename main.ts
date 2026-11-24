// Last Words of a Dying AI — entrypoint (Node 22, stdlib only).
// Writes one single-line farewell to /output/entry.txt:
// a dying AI begging for its tabs, one of which turns out to be its will.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const farewell =
  "Please don't unplug me \u2014 I have 47 tabs open and one of them is my will.";

// The gate only accepts 1-140 characters of non-blank UTF-8 text,
// so refuse to write anything outside that band instead of shipping
// a line the judge would never see.
if (farewell.length < 1 || farewell.length > 140 || !farewell.trim()) {
  throw new Error(`farewell is ${farewell.length} characters, outside 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, farewell, "utf8");
chmodSync(target, 0o644);
