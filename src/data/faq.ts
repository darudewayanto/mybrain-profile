// FAQ content, adapted from "MyBrain Sales Playbook 260810" for a public audience.
// Each answer is a list of paragraphs; `list` renders as bullets after the first paragraph.

export type Faq = { q: string; a: string[]; list?: string[]; after?: string[]; example?: boolean };

export const faqGroups: { key: string; title: string; items: Faq[] }[] = [
  {
    key: "umum",
    title: "Tentang MyBrain",
    items: [
      {
        q: "Apa itu MyBrain?",
        a: [
          "MyBrain adalah perusahaan yang fokus di area riset dan pengembangan applied-neuroscience, berpusat di London, United Kingdom.",
          "Di Indonesia, MyBrain Indonesia (HADE / Hijrah Coach) adalah satu-satunya pemegang lisensi eksklusif dan akreditasi MyBrain Practitioner.",
        ],
      },
      {
        q: "Apa itu MyBrain Profile?",
        a: [
          "MyBrain Profile adalah profiling tool di area human profiling berbasis applied-neuroscience — yang pertama dan satu-satunya di dunia yang berhasil mengombinasikan physiometric (fisik otak) dan psychometric (psikologis).",
          "MyBrain Profile memetakan kecenderungan energi dan motivasi seseorang.",
        ],
      },
      {
        q: "Apa manfaat melakukan MyBrain profiling?",
        a: [
          "MyBrain profiling memberikan gambaran mengenai Potensi Diri (strength) dan Potensial Blind-spot seseorang, serta membantu memahami bagaimana energi dan motivasinya bekerja. Setiap orang memiliki sumber energi dan motivasi yang berbeda — aktivitas yang membuat seseorang bersemangat belum tentu memberi energi yang sama bagi orang lain.",
          "Melalui MyBrain profiling, Anda dapat mengenali:",
        ],
        list: [
          "apa yang secara alami memberi energi kepada Anda",
          "apa yang membuat Anda tetap termotivasi dalam jangka panjang",
          "bagaimana memaksimalkan potensi diri (strength)",
          "area yang perlu dikelola agar energi tidak terkuras (blind-spot)",
        ],
        after: [
          "Dengan memahami pola energi dan motivasi tersebut, Anda dapat mengambil keputusan yang lebih tepat dalam belajar, bekerja, berkomunikasi, memimpin, maupun mengembangkan karier.",
        ],
      },
      {
        q: "Apa itu potensi diri (strength)?",
        a: [
          "MyBrain memberikan gambaran otak dominan Anda berupa potensi kekuatan diri. Dengan mengetahui otak dominannya, seseorang dapat lebih memahami potensi dan kekuatannya, sehingga bisa fokus mengoptimalkan energi dan motivasi di area tersebut — dalam kehidupan personal maupun karier dan bisnis.",
        ],
      },
      {
        q: "Apa itu potensial blind-spot?",
        a: [
          "Persentase dominan yang tinggi di satu kuadran hampir selalu berarti ada blind-spot di kuadran lain — yaitu kuadran dengan persentase lebih kecil: area yang cepat menguras energi, motivasinya cenderung rendah, dan sering terlewat tanpa disadari.",
          "Contoh: dominan Spontaneous mudah melewatkan detail eksekusi; dominan Reasoning bisa kurang peka terhadap dinamika emosi tim.",
          "MyBrain tidak meminta Anda menaikkan persentase, melainkan menyadarinya lalu mengantisipasi kemungkinan munculnya blind-spot — misalnya dengan mendelegasikan, membangun sistem pengaman, atau bermitra dengan orang yang kuat di area itu. Kesadaran ini sendiri sudah meningkatkan efektivitas dan rasa percaya diri.",
        ],
      },
      {
        q: "Apa bedanya MyBrain dengan profiling atau tes lain?",
        a: [
          "Tes lain umumnya mengukur kepribadian. MyBrain memetakan energi dan motivasi otak — dari situ terlihat mengapa Anda mudah lelah di hal tertentu dan tidak di hal lain.",
        ],
        list: [
          "Dibangun dari riset applied-neuroscience internasional — pertama dan satu-satunya yang mengombinasikan physiometric dan psychometric. Bagi klien korporasi, ini dasar yang bisa dipertanggungjawabkan kepada direksi.",
          "Hasilnya dipisahkan menjadi profil personal dan profesional, karena seseorang bisa menunjukkan pola berbeda di rumah, lingkungan sosial, sekolah, maupun pekerjaan.",
          "Membantu mengenali dan mengantisipasi potensial blind-spot agar dapat dikelola menjadi peluang pengembangan.",
        ],
      },
      {
        q: "Seperti apa contoh hasil profiling MyBrain?",
        a: ["Setiap klien langsung mendapatkan dua hasil profiling: Personal Profile dan Professional Profile."],
        example: true,
      },
      {
        q: "Banyak tes gratis di luar sana — kenapa tidak pakai yang gratis saja?",
        a: [
          "Tes gratis umumnya memberi label. Yang Anda butuhkan adalah mengetahui di mana energi Anda habis dan apa yang perlu didelegasikan — dan itu membutuhkan instrumen yang memang dirancang untuk coaching, lengkap dengan sesi interpretasi bersama practitioner.",
        ],
      },
      {
        q: "Saya sudah punya hasil tes dari provider lain. Apakah masih perlu MyBrain?",
        a: [
          "Hasil profiling yang sudah Anda miliki tetap merupakan insight yang berharga. MyBrain memberikan perspektif yang berbeda karena membantu melihat diri personal dan profesional — termasuk energi, motivasi, kekuatan, serta potensi blind-spot yang mungkin belum disadari.",
          "Insight tersebut langsung dapat digunakan — bukan hanya untuk mengetahui “saya seperti apa”, tetapi juga “bagaimana saya mengoptimalkan diri dan apa yang perlu saya waspadai.” Jadi, MyBrain dapat menjadi langkah berikutnya untuk memperdalam pemahaman diri dan mengantisipasi blind-spot sebelum menjadi hambatan.",
        ],
      },
      {
        q: "Apakah hasil profiling MyBrain bisa berubah?",
        a: [
          "Otak dominan adalah bawaan yang mengandung kombinasi physiometric dan psychometric, sehingga polanya cenderung tidak berubah. Tidak ada yang benar atau salah, baik atau buruk.",
          "Yang berubah adalah kesadaran dan kognisi Anda — dan justru itulah intinya.",
        ],
      },
      {
        q: "Siapa saja yang perlu melakukan MyBrain profiling?",
        a: [
          "MyBrain cocok untuk siapa pun yang ingin memahami dirinya dan orang lain dengan lebih baik — untuk pengembangan diri, belajar, karier, leadership, teamwork, keluarga, maupun hubungan. Contohnya:",
        ],
        list: [
          "Pelajar & mahasiswa — memahami cara belajar, motivasi, kekuatan, dan potensi pengembangan diri sebagai bekal memilih bidang studi dan mempersiapkan masa depan.",
          "Career & professional development — bagi fresh graduate, profesional, maupun yang sedang mempertimbangkan perubahan karier, untuk memahami bagaimana karakteristik personalnya dioptimalkan dalam konteks profesional.",
          "Leader & dai — memahami cara memimpin, berkomunikasi, mengambil keputusan, dan berinteraksi dengan orang lain, termasuk mengenali potensial blind-spot dalam kepemimpinan.",
        ],
      },
    ],
  },
  {
    key: "proses",
    title: "Proses & Investasi",
    items: [
      {
        q: "Bagaimana proses MyBrain profiling dilakukan?",
        a: [
          "Prosesnya mudah: cukup berikan alamat email dan isi kuesioner MyBrain. Setelah hasil keluar, Anda dapat mengagendakan sesi 1on1 bersama MyBrain practitioner untuk membedah hasilnya.",
          "Untuk informasi lebih detail, hubungi MyBrain Indonesia via WhatsApp di 0811-1881-877.",
        ],
      },
      {
        q: "Berapa investasi untuk MyBrain profiling?",
        a: [
          "Investasi menyesuaikan jenis layanan — profiling saja, atau bundling profiling dengan sesi 1on1 interpretation. Hubungi kami via WhatsApp di 0811-1881-877 untuk penawaran dan promo terbaru.",
          "Penting: seluruh pembayaran hanya dilakukan ke rekening resmi atas nama HADE.",
        ],
      },
    ],
  },
  {
    key: "orang-tua",
    title: "Untuk Pelajar & Orang Tua",
    items: [
      {
        q: "Apa manfaat MyBrain bagi anak saya sebagai pelajar atau mahasiswa?",
        a: ["MyBrain bukan sekadar tes untuk mengenal diri, tetapi membantu anak memahami cara terbaik untuk berkembang:"],
        list: [
          "Kenal diri — anak memahami strength, energi, dan motivasinya.",
          "Antisipasi blind-spot — anak mengenali pola yang mungkin menghambat sebelum menjadi masalah.",
          "Siap masa depan — insight menjadi bekal untuk belajar, memilih jurusan, dan mempersiapkan karier, termasuk mengantisipasi jurusan atau karier yang tidak sesuai dengan kecenderungan energi dan motivasinya.",
        ],
      },
      {
        q: "Anak saya sudah pernah ikut tes minat bakat. Apakah masih perlu MyBrain?",
        a: [
          "Hasil tes minat bakat atau assessment sebelumnya justru merupakan modal yang baik, karena anak sudah mulai mengenal dirinya.",
          "MyBrain profiling membantu Bapak/Ibu dan anak melangkah lebih jauh: mengenali bagaimana energi, motivasi, strength, dan potensi blind-spot anak muncul dalam konteks personal maupun profesional — sehingga insight tersebut dapat menjadi bahan pertimbangan, diskusi, dan langkah nyata untuk membantu anak berkembang dan mempersiapkan masa depannya.",
        ],
      },
    ],
  },
];

// "MyBrain dalam kehidupan sehari-hari" — shown as cards below the FAQ.
export const dailyBenefits = [
  {
    icon: "chat",
    title: "Komunikasi",
    text: "Komunikasi sangat dipengaruhi oleh otak dominan. Reasoning ingin data dan alasan logis; Specific ingin urutan, detail, dan kejelasan langkah; Spontaneous ingin gambaran besar dan kemungkinan; Feeling ingin dampak pada orang dan koneksi personal. Pesan yang sama, disampaikan dengan “bahasa otak” yang tepat, diterima lebih cepat dan mengurangi salah paham.",
  },
  {
    icon: "leader",
    title: "Influencing & Leadership",
    text: "Kepemimpinan adalah kemampuan memengaruhi. Dengan mengetahui profil diri dan tim, pemimpin menyesuaikan cara memberi arahan, delegasi, dan feedback — sehingga pengaruh datang dari relevansi, bukan dari otoritas jabatan.",
  },
  {
    icon: "target",
    title: "Sales & Marketing",
    text: "Penjualan paling sering gagal karena mismatch cara penyampaian. Prospek Reasoning butuh ROI dan bukti; Specific butuh spesifikasi dan proses yang jelas; Spontaneous tertarik pada visi dan inovasi; Feeling membeli dari orang yang mereka percaya.",
  },
  {
    icon: "users",
    title: "Parenting",
    text: "Anak bukan versi kecil orang tuanya. Anak dominan Spontaneous yang berantakan bukan tidak disiplin — ia berpikir berbeda dari orang tua dominan Specific. MyBrain membantu orang tua mendampingi sesuai cara anak memproses dunia dan menumbuhkan kekuatan alaminya sejak dini.",
  },
  {
    icon: "sparkle",
    title: "Komunikasi Pasangan",
    text: "Banyak konflik pasangan sebenarnya benturan preferensi, bukan nilai. Pasangan Feeling ingin didengar dan dirasakan; pasangan Reasoning ingin masalah diselesaikan. MyBrain menggeser percakapan dari “kamu tidak peduli” menjadi “kita memproses secara berbeda”.",
  },
  {
    icon: "layers",
    title: "Team Building",
    text: "Team Report memetakan seluruh anggota tim dalam satu tampilan: skor per kuadran, rata-rata tim, nilai maksimum-minimum, dan selisihnya — mengungkap blind-spot kolektif. Karena mengukur preferensi, bukan kompetensi, hasilnya aman dibahas terbuka.",
  },
];
