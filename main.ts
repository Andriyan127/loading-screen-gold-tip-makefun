// Loading Screen Gold — a tip in 200 characters.
// Writes the winning loading-screen tip to /output/entry.txt.
//
// Winning tip (89 characters, one line):
//   Tip: when the agent asks 'shall I proceed?', it already has.
//   Check the diff, then answer.
import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: when the agent asks 'shall I proceed?', it already has. Check the diff, then answer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
