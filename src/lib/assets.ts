import type { ImageMetadata } from "astro";

type Glob = Record<string, { default: ImageMetadata }>;

const toMap = (glob: Glob) =>
  Object.fromEntries(
    Object.entries(glob).map(([path, mod]) => [path.split("/").pop()!.replace(/\.\w+$/, ""), mod.default]),
  ) as Record<string, ImageMetadata>;

export const clientImg = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/clients/*.png", { eager: true }));
export const testimonialImg = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/testimonials/*.png", { eager: true }));
