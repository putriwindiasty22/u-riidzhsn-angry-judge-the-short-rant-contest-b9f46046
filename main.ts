// Angry Judge: The Short Rant Contest
// Writes ONE funny rant to /output/entry.txt.
// Deterministic: no network, no randomness, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "The smoke detector slept through a decade of burnt toast and a toaster that tried to kill me. Then, at 3:17 a.m., it found its voice. Not an alarm — a chirp. One smug beep every forty-five seconds: loud enough to wake me, too quiet to find. Its battery is too dead to save anyone, just alive enough to complain. I'm on a chair at 3:30 a.m. with a screwdriver, and the ceiling is winning.";

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), RANT, "utf8");
console.log(`Wrote ${RANT.length} characters to /output/entry.txt`);
