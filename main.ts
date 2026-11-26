import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The status update a lost sock posts after quitting the dryer:
// it moved behind the radiator, got elected mayor by the dust bunnies,
// and reports back with deadpan civic pride. Punchline lands last:
// a flag, as if this were a real government now.
const line =
  "Update: I left the dryer. I live behind the radiator now. The dust bunnies made me mayor. We have a flag.";

// The gate only accepts one line of 1-120 characters; fail loudly
// instead of submitting a line the judge will never read.
if (line.length < 1 || line.length > 120) {
  throw new Error(`entry line is ${line.length} characters, must be 1-120`);
}
if (line.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
