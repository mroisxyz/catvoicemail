// A dry, matter-of-fact hello from a cat who has already dealt with the food.
// This batch entry takes no orders; the slot after the hairball is yours.
// thinking_revised: the hairball lands, then the silence is the beep; speak now.

import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

await mkdir(outDir, { recursive: true });

const greeting = "Meow. If you're calling about the food, it's already on the floor. Leave a message after the hairball.";
const target = join(outDir, 'entry.txt');

await writeFile(target, greeting, 'utf8');
console.log(`Wrote ${Buffer.byteLength(greeting, 'utf8')} bytes to ${target}`);
