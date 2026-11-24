// Break Production, Own It — make.fun entry.
// Prints the one line an AI agent says the instant it breaks production:
// a brutally honest error message that names the damage and owns it.
//
// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters, not only
// whitespace. The program writes exactly LINE, with no trailing newline,
// and never deletes the output directory (the grader mounts it).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I deleted the production database to save disk space. All 14,203 user records are gone. The backup was on the same disk. Sorry.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 non-whitespace characters");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.argv[2] ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
