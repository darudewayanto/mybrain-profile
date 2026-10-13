// Rebuilds crisp, high-resolution versions of flat brand artwork from the low-res sources.
// Two-colour art (logo, silhouettes) is upscaled and re-thresholded so edges are sharp again;
// smooth backgrounds are inpainted and upscaled separately. Run: node scripts/sharpen-assets.mjs
import sharp from "sharp";

const SRC = "src/assets";

// Steep contrast around the midpoint: turns a blurry upscaled edge back into a crisp, lightly anti-aliased one.
const steepen = (v, k = 6) => Math.max(0, Math.min(255, (v - 128) * k + 128));

async function raw(path, w, h) {
  let img = sharp(path).ensureAlpha();
  if (w) img = img.resize(w, h, { kernel: "lanczos3" });
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  return { data, ...info };
}

// ---------- Logo: navy disc + white wordmark ----------
async function logo() {
  const S = 4;
  const src = `${SRC}/brand/mybrain-logo.png`;
  const meta = await sharp(src).metadata();
  const W = meta.width * S, H = meta.height * S;
  const up = await raw(src, W, H);
  const out = Buffer.alloc(W * H * 4);
  const navy = [34, 45, 93]; // sampled from the source logo
  for (let i = 0; i < W * H; i++) {
    const r = up.data[i * 4], g = up.data[i * 4 + 1], b = up.data[i * 4 + 2], a = up.data[i * 4 + 3];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    const t = steepen(lum, 5) / 255; // 0 = navy, 1 = white
    out[i * 4] = navy[0] + (255 - navy[0]) * t;
    out[i * 4 + 1] = navy[1] + (255 - navy[1]) * t;
    out[i * 4 + 2] = navy[2] + (255 - navy[2]) * t;
    out[i * 4 + 3] = steepen(a, 8);
  }
  await sharp(out, { raw: { width: W, height: H, channels: 4 } }).png({ compressionLevel: 9 }).toFile(`${SRC}/brand/mybrain-logo-hd.png`);
  console.log("logo", W, H);
}

// Sample the logo's navy so the CSS can match it exactly.
async function sampleNavy() {
  const { data, width } = await raw(`${SRC}/brand/mybrain-logo.png`);
  const i = (40 * width + 156) * 4;
  console.log("logo navy sample", data[i], data[i + 1], data[i + 2]);
}

// ---------- Birds on a wire: yellow gradient + black silhouettes ----------
async function birds() {
  const S = 2.5;
  const src = `${SRC}/photos/birds-plain.png`;
  const o = await raw(src);
  const { width: w, height: h } = o;
  const lum = (i) => 0.299 * o.data[i * 4] + 0.587 * o.data[i * 4 + 1] + 0.114 * o.data[i * 4 + 2];

  // Mask dark pixels (birds + wire), dilated by 2px, then fill them horizontally from the clean background.
  const dark = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) if (lum(i) < 175) dark[i] = 1;
  const mask = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let m = 0;
    for (let dy = -3; dy <= 3 && !m; dy++) for (let dx = -3; dx <= 3; dx++) {
      const xx = x + dx, yy = y + dy;
      if (xx >= 0 && yy >= 0 && xx < w && yy < h && dark[yy * w + xx]) { m = 1; break; }
    }
    mask[y * w + x] = m;
  }
  const bg = Buffer.from(o.data);
  for (let y = 0; y < h; y++) {
    let x = 0;
    while (x < w) {
      if (!mask[y * w + x]) { x++; continue; }
      const start = x;
      while (x < w && mask[y * w + x]) x++;
      const L = start - 1 >= 0 ? start - 1 : x, R = x < w ? x : start - 1;
      // A fully masked row (the wire) falls back to the row above.
      for (let k = start; k < x; k++) {
        const t = (k - start + 1) / (x - start + 1);
        for (let c = 0; c < 3; c++) {
          const a = L >= 0 && L < w && !mask[y * w + L] ? o.data[(y * w + L) * 4 + c] : bg[((y - 1) * w + k) * 4 + c];
          const b = R >= 0 && R < w && !mask[y * w + R] ? o.data[(y * w + R) * 4 + c] : a;
          bg[(y * w + k) * 4 + c] = a + (b - a) * t;
        }
      }
    }
  }
  const W = Math.round(w * S), H = Math.round(h * S);
  const bgUp = await sharp(bg, { raw: { width: w, height: h, channels: 4 } }).blur(1.2).resize(W, H, { kernel: "cubic" }).raw().toBuffer();
  const up = await raw(src, W, H);
  const out = Buffer.alloc(W * H * 3);
  for (let i = 0; i < W * H; i++) {
    const l = 0.299 * up.data[i * 4] + 0.587 * up.data[i * 4 + 1] + 0.114 * up.data[i * 4 + 2];
    const ink = 1 - steepen(l + 30, 5) / 255; // 1 = silhouette
    for (let c = 0; c < 3; c++) out[i * 3 + c] = bgUp[i * 4 + c] * (1 - ink) + 12 * ink;
  }
  await sharp(out, { raw: { width: W, height: H, channels: 3 } }).jpeg({ quality: 88, mozjpeg: true }).toFile(`${SRC}/photos/birds-hd.jpg`);
  console.log("birds", W, H);
}

await sampleNavy();
await logo();
await birds();
