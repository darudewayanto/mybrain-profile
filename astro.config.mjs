// @ts-check
import { defineConfig } from 'astro/config';

// Deploy target is set by environment so the same code serves every host:
//   Temporary host: SITE_URL=https://<user>.github.io  BASE_PATH=/<repo>
//   Final domain:   SITE_URL=https://mybrain.id (BASE_PATH unset → "/")
// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://mybrain.id',
  base: process.env.BASE_PATH ?? '/',
  devToolbar: { enabled: false },
});
