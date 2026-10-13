// Cuts the raised leg + shoe out of the sky so the hero can let it break out of its circle frame.
// Sky and clouds are background; everything else is the leg.
// Run: node scripts/cutout-shoe.mjs
import sharp from "sharp";

const SRC = "src/assets/photos/shoe-hd.jpg";
const OUT = "src/assets/photos/shoe-cutout.png";

const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h, channels: ch } = info;
const fg = new Uint8Array(w * h);
for (let i = 0; i < w * h; i++) {
  const r = data[i * ch], g = data[i * ch + 1], b = data[i * ch + 2];
  // HSV: the sky is a saturated or bright cyan-blue; the teal trousers share the hue but are darker and duller.
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), v = mx / 255, sat = mx ? (mx - mn) / mx : 0;
  let hue = 0;
  if (mx !== mn) hue = mx === r ? 60 * (((g - b) / (mx - mn)) % 6) : mx === g ? 60 * ((b - r) / (mx - mn) + 2) : 60 * ((r - g) / (mx - mn) + 4);
  if (hue < 0) hue += 360;
  const sky = (hue >= 170 && hue <= 220 && ((sat > 0.7 && v > 0.3) || v > 0.6)) || (v > 0.78 && sat < 0.25 && b >= r - 2);
  if (!sky) fg[i] = 1;
}

// Keep only the largest connected region (the leg), dropping stray warm specks in the clouds.
const label = new Int32Array(w * h).fill(-1);
let best = -1, bestSize = 0;
const stack = [];
for (let s = 0; s < w * h; s++) {
  if (!fg[s] || label[s] !== -1) continue;
  let size = 0;
  stack.push(s); label[s] = s;
  while (stack.length) {
    const p = stack.pop(); size++;
    const x = p % w, y = (p / w) | 0;
    for (const q of [x > 0 ? p - 1 : -1, x < w - 1 ? p + 1 : -1, y > 0 ? p - w : -1, y < h - 1 ? p + w : -1]) {
      if (q >= 0 && fg[q] && label[q] === -1) { label[q] = s; stack.push(q); }
    }
  }
  if (size > bestSize) { bestSize = size; best = s; }
}
// Fill holes: anything not reachable from the border through background belongs to the leg.
const outside = new Uint8Array(w * h);
for (let x = 0; x < w; x++) for (const y of [0, h - 1]) if (label[y * w + x] !== best) { outside[y * w + x] = 1; stack.push(y * w + x); }
for (let y = 0; y < h; y++) for (const x of [0, w - 1]) if (label[y * w + x] !== best) { outside[y * w + x] = 1; stack.push(y * w + x); }
while (stack.length) {
  const p = stack.pop();
  const x = p % w, y = (p / w) | 0;
  for (const q of [x > 0 ? p - 1 : -1, x < w - 1 ? p + 1 : -1, y > 0 ? p - w : -1, y < h - 1 ? p + w : -1]) {
    if (q >= 0 && !outside[q] && label[q] !== best) { outside[q] = 1; stack.push(q); }
  }
}
const alpha = Buffer.alloc(w * h);
for (let i = 0; i < w * h; i++) alpha[i] = outside[i] ? 0 : 255;

// Soften the edge by ~1px so it blends like a real photo cut-out.
const soft = await sharp(alpha, { raw: { width: w, height: h, channels: 1 } }).blur(0.8).extractChannel(0).raw().toBuffer();
const rgba = Buffer.alloc(w * h * 4);
for (let i = 0; i < w * h; i++) {
  rgba[i * 4] = data[i * ch]; rgba[i * 4 + 1] = data[i * ch + 1]; rgba[i * 4 + 2] = data[i * ch + 2];
  rgba[i * 4 + 3] = soft[i];
}
await sharp(rgba, { raw: { width: w, height: h, channels: 4 } }).png({ compressionLevel: 9 }).toFile(OUT);
console.log("cutout", w, h, "pixels kept", bestSize);
