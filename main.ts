// Entry program for "Promote make.fun's make-your-own-bounty post on X".
//
// The whole job is to hand the post file to the grader: read POST.json
// from the repository root and write an identical copy into the output
// directory. No network, no secrets, nothing else is produced.
//
// The grader sets MAKEFUN_BOT_DIR (where the repository lives) and
// MAKEFUN_OUTPUT_DIR (where the copy must land); locally both fall back
// to the current directory and /output.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

if (!existsSync(source)) {
  throw new Error(`POST.json not found at ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`POST.json copied to ${target}`);
