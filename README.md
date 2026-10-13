# MyBrain Indonesia — website

Astro static site (Bahasa Indonesia). Dev: `.claude/dev-server.sh` (port 4322) or `npx astro dev`.

- All copy, contact details, WhatsApp messages, services and quadrant text live in `src/data/site.ts`.
- Look & feel: company profile (Poppins, sand/cream, olive + orange, three-dot motif) + quadrant colours + layout after the reference site (Clareo).
- Internal links use `u()` from `src/lib/url.ts`, so the site works under a sub-path (e.g. GitHub Pages).

## Menyusul (before go-live)
- [ ] Email final (sekarang `salam@mybrain.id`; compro menulis `salam@mybrain.com`)
- [ ] Testimoni (slot `testimonials` di `site.ts`) + izin dari yang dikutip
- [ ] Harga per layanan (sekarang "Hubungi kami")
- [ ] Review teks 4 kuadran & detail layanan oleh practitioner MyBrain
- [ ] Logo klien / akreditasi (ICF, ICE-AC) jika boleh ditampilkan
- [ ] Foto asli: sesi 1on1, workshop, tim practitioner
- [ ] Versi resolusi tinggi / tanpa teks untuk foto *reflection* (cermin, dinding merah) dan *idea detail* merah (bunga) — sumber sekarang hanya ~400px
- [ ] Logo vektor (SVG/AI/PDF) — sementara dipakai `mybrain-logo-hd.png` hasil `scripts/sharpen-assets.mjs`
- [ ] Domain mybrain.id + hosting (GitHub repo → deploy). Temporary hosts: build with `SITE_URL`, `BASE_PATH`, `PUBLIC_NOINDEX=true`
