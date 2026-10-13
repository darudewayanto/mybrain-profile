// Single source of truth for contact details, navigation and shared content.
// Edit here; every page reads from this file.

export const site = {
  name: "MyBrain Indonesia",
  tagline: "Applied-Neuroscience Profiling",
  description:
    "MyBrain Indonesia adalah pemegang lisensi resmi MyBrain (UK) — profiling berbasis applied-neuroscience yang menggabungkan physiology dan psychology untuk memahami cara otak Anda berpikir, merasa, dan bertindak.",
  url: "https://mybrain.id",
  // TODO: konfirmasi alamat email final (compro menulis salam@mybrain.com).
  email: "salam@mybrain.id",
  phoneDisplay: "+62 811 1881 877",
  whatsapp: "628111881877",
};

const waMessages = {
  general: "Halo MyBrain Indonesia, saya ingin tahu lebih lanjut tentang profiling MyBrain.",
  individual: "Halo MyBrain Indonesia, saya ingin mengambil Individual Profile (profiling + sesi 1on1 interpretation).",
  team: "Halo MyBrain Indonesia, saya ingin mendiskusikan Team Profile untuk tim/organisasi kami.",
  workshop: "Halo MyBrain Indonesia, saya ingin mendiskusikan In-house Workshop untuk organisasi kami.",
  certification: "Halo MyBrain Indonesia, saya tertarik dengan Practitioner Certification. Mohon info jadwal batch berikutnya.",
} as const;

export type WaTopic = keyof typeof waMessages;

export const wa = (topic: WaTopic = "general") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(waMessages[topic])}`;

export const nav = [
  { href: "/", label: "Beranda" },
  { href: "/metode", label: "Metode" },
  { href: "/layanan", label: "Layanan" },
  { href: "/tentang", label: "Tentang" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontak", label: "Kontak" },
];

// The four neurological-dominance quadrants. Colours follow the official quadrant artwork.
// Copy is a first draft for v1 — to be reviewed by a MyBrain practitioner.
export const quadrants = [
  {
    key: "reasoning",
    name: "Reasoning",
    word: "logic",
    color: "var(--q-reasoning)",
    short: "Logis, analitis, berbasis fakta.",
    text: "Dominansi Reasoning cenderung memproses informasi lewat logika dan data. Nyaman dengan angka, analisis sebab-akibat, dan keputusan yang bisa dipertanggungjawabkan secara rasional.",
    traits: ["Analitis & kritis", "Berpikir objektif", "Mengambil keputusan berbasis data"],
  },
  {
    key: "spontaneous",
    name: "Spontaneous",
    word: "idea",
    color: "var(--q-spontaneous)",
    short: "Imajinatif, intuitif, melihat gambaran besar.",
    text: "Dominansi Spontaneous cenderung bergerak dari gambaran besar. Mudah melahirkan ide baru, menghubungkan hal-hal yang tampak tak terkait, dan bergairah pada kemungkinan.",
    traits: ["Visioner & kreatif", "Cepat beradaptasi", "Menyukai eksperimen"],
  },
  {
    key: "specific",
    name: "Specific",
    word: "detail",
    color: "var(--q-specific)",
    short: "Terstruktur, rapi, teliti pada detail.",
    text: "Dominansi Specific cenderung bekerja dengan urutan dan rencana. Teliti pada detail, menjaga kualitas eksekusi, dan memastikan setiap langkah berjalan sesuai prosedur.",
    traits: ["Terorganisir", "Teliti & konsisten", "Andal dalam eksekusi"],
  },
  {
    key: "feeling",
    name: "Feeling",
    word: "harmony",
    color: "var(--q-feeling)",
    short: "Relasional, empatik, menjaga harmoni.",
    text: "Dominansi Feeling cenderung membaca situasi lewat relasi dan emosi. Peka terhadap kebutuhan orang lain, membangun kepercayaan, dan menjaga harmoni dalam tim.",
    traits: ["Empatik", "Komunikatif", "Perekat tim"],
  },
] as const;

export const services = [
  {
    key: "individual",
    wa: "individual" as WaTopic,
    icon: "user",
    color: "var(--q-reasoning)",
    badge: "INDIVIDUAL • PROFILE •",
    title: "Individual Profile",
    kicker: "Profiling + 1on1 Interpretation",
    summary: "Kenali dominansi otak Anda sendiri, lalu bedah hasilnya bersama practitioner tersertifikasi dalam sesi 1on1.",
    for: "Profesional, mahasiswa, pelajar, dan siapa pun yang ingin memahami dirinya lebih utuh.",
    includes: [
      "Kuesioner profiling MyBrain",
      "Laporan Individual Profile 4 kuadran",
      "Sesi 1on1 interpretation dengan practitioner",
      "Insight potensi, gaya belajar & blind-spot",
    ],
  },
  {
    key: "team",
    wa: "team" as WaTopic,
    icon: "users",
    color: "var(--q-spontaneous)",
    badge: "TEAM • PROFILE •",
    title: "Team Profile",
    kicker: "Team Interpretation",
    summary: "Petakan komposisi kuadran seluruh anggota tim untuk melihat kekuatan kolektif, celah, dan pola komunikasinya.",
    for: "Tim kerja, divisi, manajemen, pengurus organisasi, sekolah, dan kampus.",
    includes: [
      "Profiling seluruh anggota tim",
      "Laporan Team Profile & peta sebaran kuadran",
      "Sesi team interpretation",
      "Rekomendasi kolaborasi & komunikasi tim",
    ],
  },
  {
    key: "workshop",
    wa: "workshop" as WaTopic,
    icon: "leader",
    color: "var(--q-feeling)",
    badge: "IN-HOUSE • WORKSHOP •",
    title: "In-house Workshop",
    kicker: "Leadership Workshop",
    summary: "Workshop leadership, team alignment, dan komunikasi berbasis applied-neuroscience — dirancang khusus untuk organisasi Anda.",
    for: "Perusahaan, instansi, kampus, sekolah, dan pesantren.",
    includes: [
      "Profiling peserta sebelum workshop",
      "Materi leadership & team alignment berbasis neurosains",
      "Format onsite atau online",
      "Debrief hasil untuk pimpinan",
    ],
  },
  {
    key: "certification",
    wa: "certification" as WaTopic,
    icon: "certificate",
    color: "var(--q-specific)",
    badge: "PRACTITIONER • CERTIFIED •",
    title: "Practitioner Certification",
    kicker: "Sertifikasi Practitioner",
    summary: "Jadilah practitioner MyBrain bersertifikat yang mampu melakukan interpretasi profil individu maupun tim.",
    for: "Coach, trainer, HR, psikolog, konselor, dosen, dan guru BK.",
    includes: [
      "Pelatihan metode & instrumen MyBrain",
      "Praktik interpretasi individu dan tim",
      "Sertifikat Practitioner MyBrain",
      "Bergabung dengan jaringan practitioner",
    ],
  },
] as const;

// Figures from the MyBrain Indonesia / HADE track record.
export const stats = [
  { value: "2015", label: "Pemegang lisensi resmi MyBrain UK di Indonesia" },
  { value: "12", label: "Kampus mitra (MoU Center of Agility)" },
  { value: "250+", label: "Leader telah mengikuti program" },
  { value: "9", label: "Kota di seluruh Indonesia" },
];

// The three gaps MyBrain fills (from the company profile).
export const problems = [
  {
    tone: "olive",
    title: "Kurang Utuh",
    sub: "Psycho & Physio",
    text: "Banyak tools hanya memakai satu pendekatan — psychometric atau physio-metric saja — sehingga gambarannya tidak utuh.",
    quote: "“Saya merasa begini.”",
  },
  {
    tone: "navy",
    title: "Ramalan",
    sub: "Bukan Science",
    text: "Sebagian tes terasa seperti ramalan atau kartomansi, alih-alih penjelasan ilmiah yang bisa dipertanggungjawabkan.",
    quote: "“Anda akan gagal di sini, lebih sukses yang itu.”",
  },
  {
    tone: "orange",
    title: "Judgement",
    sub: "Tidak Netral",
    text: "Hasilnya kerap memberi label dan prasangka, sehingga terasa menghakimi dan tidak netral.",
    quote: "“Anda seperti ini — maka Anda melakukan ini.”",
  },
];

// Filled in once testimonials are approved by the people quoted.
export const testimonials: { quote: string; name: string; role: string }[] = [];
