// Prefix internal links with the deploy base path (e.g. "/hade-profile" on GitHub Pages, "" on a root domain).
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const u = (path: string) => `${base}${path}`;
