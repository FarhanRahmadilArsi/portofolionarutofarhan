const portfolioData = {
  skills: [
    {
      name: "Backend",
      level: 86,
      icon: "BE",
      colorClass: "c2",
      tools: ["FastAPI", "Python", "REST API", "OOP", "CRUD"]
    },
    {
      name: "Frontend",
      level: 82,
      icon: "FE",
      colorClass: "c7",
      tools: ["Streamlit", "JavaScript", "HTML", "CSS", "Responsive UI"]
    },
    {
      name: "Database",
      level: 84,
      icon: "DB",
      colorClass: "c5",
      tools: ["SQL", "NoSQL", "PL/SQL", "Relational Database", "Data Modeling"]
    },
    {
      name: "Tools/DevOps",
      level: 78,
      icon: "OP",
      colorClass: "c3",
      tools: ["Google Apps Script", "Docker", "Git", "Grafana"]
    },
    {
      name: "Data/AI",
      level: 84,
      icon: "AI",
      colorClass: "c1",
      tools: ["OpenCV", "PyTorch", "GIS", "YOLO"]
    },
    {
      name: "Data Visualization",
      level: 80,
      icon: "DV",
      colorClass: "c8",
      tools: ["Grafana", "Dashboard", "Monitoring", "Metrics", "Reporting"]
    },
    {
      name: "Automation",
      level: 79,
      icon: "AT",
      colorClass: "c6",
      tools: ["Google Apps Script", "Python Script", "Workflow", "API Integration"]
    },
    {
      name: "Computer Vision",
      level: 82,
      icon: "CV",
      colorClass: "c4",
      tools: ["OpenCV", "YOLO", "Image Processing", "Object Detection"]
    },
    {
      name: "Software Tools",
      level: 77,
      icon: "TL",
      colorClass: "c3",
      tools: ["Git", "Docker", "Figma", "Canva", "Packet Tracer"]
    },
    {
      name: "Professional Skills",
      level: 85,
      icon: "PS",
      colorClass: "c7",
      tools: ["Leadership", "Public Speaking", "Teamwork", "Technical Support"]
    }
  ],
  projectFilters: [
    { label: "All Tools", value: "all" },
    { label: "Infrastructure", value: "infra" },
    { label: "Frontend", value: "frontend" },
    { label: "Automation", value: "auto" },
    { label: "Computer Vision", value: "cv" },
    { label: "Database", value: "database" }
  ],
  projects: [
    {
      category: "cv",
      categoryLabel: "COMPUTER VISION",
      title: "Computer Vision JPEG TO BASE 64",
      description: "Project deteksi objek berbasis computer vision untuk membaca gambar/video dan menampilkan hasil JPEG KE BASE 64 dan dihubungkan ke google drive yang akan dijadikan bahan livenessbuntuk gravana loki liveness pada projek grafana monitoring dashboard.",
      tech: ["Python", "OpenCV", "Streamlit", "Google Drive API", "Google Apps Script"]
    },
    {
      category: "infra",
      categoryLabel: "INFRASTRUCTURE",
      title: "Grafana Monitoring Dashboard",
      description: "Dashboard monitoring metrik sistem dan aplikasi menggunakan Grafana untuk membaca sebuah gambar apakah gambar tersebut didefinisakn sebagao alert/critical/normal dari base 64 dipecah ke jpeg dengan bantuan mosquito.",
      tech: ["Grafana", "Loki", "Docker", "Mosquitto", "Business Media Plugin", "google drive API"]
    },
    {
      category: "database",
      categoryLabel: "DATABASE",
      title: "Website Kafar High School",
      description: "Website sekolah dengan database untuk menampilkan informasi sekolah, kurikulum, , ekstrakulikuler,tenaga didik,prestasi menggunakan PHP , bootsrap.",
      tech: ["HTML", "CSS", "SQL", "Bootstrap", "PHP", "PhpMyAdmin"],
      url: "https://kafarhighschool.vercel.app"
    },
    {
      category: "API",
      categoryLabel: "REST API",
      title: "F'Notes",
      description: "Aplikasi pencatatan bertema kartu  catatan ditampilkan sebagai kartu indeks, lengkap dengan tab huruf awal dan stempel tanggal. Proyek ini adalah submission kedua kelas Dicoding, melanjutkan Notes App dari submission pertama dengan tambahan RESTful API (Notes API v2) sebagai sumber data Webpack sebagai module bundler, Fetch API untuk komunikasi dengan serve, Indikator loading saat proses request berlangsung",
      tech: ["HTML", "CSS", "SQL", "Bootstrap", "PHP", "PhpMyAdmin"],
      url: "https://noteharian.vercel.app"
    },
    {
      category: "Database",
      categoryLabel: "DATABASE",
      title: "HanKas",
      description: "Aplikasi pencatat pemasukan dan pengeluaran berbasis HTML, CSS, dan JavaScript murni (Vanilla JS) tanpa library atau framework eksternal. Aplikasi ini memungkinkan pengguna untuk mencatat transaksi keuangan mereka, termasuk pemasukan dan pengeluaran, serta menghitung saldo secara otomatis. Data disimpan di local storage browser, sehingga tetap tersedia meskipun halaman direfresh. Aplikasi ini juga menyediakan fitur untuk menghapus catatan transaksi yang tidak diperlukan.",
      tech: ["HTML", "CSS", "SQL", "Bootstrap", "PHP", "PhpMyAdmin"],
      url: "https://hankas.vercel.app"
    },
    {
      category: "frontend",
      categoryLabel: "FRONTEND",
      title: "Website Portofolio Personal (HTML & CSS Native)",
      description: "Website portofolio responsif yang dibangun murni menggunakan HTML semantic dan CSS Flexbox tanpa framework. Dibuat dari nol sebagai proyek akhir (submission) kelas \"Belajar Dasar Pembuatan Web di Dicoding\" untuk memperkuat kembali pemahaman fondasi pengembangan web.",
      tech: ["HTML", "CSS Native", "Responsive Design", "Semantic HTML", "Flexbox"],
      url: "https://farhannsimple.vercel.app"
    },
    {
      category: "auto",
      categoryLabel: "AUTOMATION",
      title: "JOB LINK SIGN",
      description: "Sebuah Mockup untuk HRD Perusahaan dan pelamar atau calon pekerja ruang lingkup penyandang disabilitas tuna wicara.",
      tech: ["UI/UX", "Prototype", "Figma"],
      url: "https://www.figma.com/design/z1eWYnhmkx8QfMn61YLkCW/JOBLINK-SIGN-FARHAN?node-id=2-2&t=NKoQHb4snw0VCHii-1"
    },
    {
      category: "infra",
      categoryLabel: "INFRASTRUCTURE",
      title: "BURGER BUANDEL MOCK UP",
      description: "Sebuah mock up untuk customer yang ingin memesan burger dengan berbagai pilihan varian burger.",
      tech: ["Figma", "UI/UX", "Prototype"],
      url: "https://www.figma.com/design/NeYMZ6etGAIiUHEd3mN5P4/PROJEK-PROTOTYPE-FARHAN?node-id=0-1&t=Q0t4rVHaYezlOfVa-1"
},
    {
      category: "database",
      categoryLabel: "DATABASE",
      title: "Website Registrasi Karyawan",
      description: "Aplikasi web dengan database relasional untuk membantu digitalisasi proses registrasi HR.",
      tech: ["Typescript", "Next.JS", "Tailwind.Css"],
      url: "https://yuksukses.vercel.app"
    },
    {
      category: "frontend",
      categoryLabel: "FRONTEND",
      title: "Aplikasi Penjualan Sapi",
      description: "Aplikasi desktop CRUD cross-platform untuk pengelolaan data penjualan dan stok ternak via beeware .",
      tech: ["Python", "BeeWare", "CRUD"]
    },
    {
      category: "Machine Learning",
      categoryLabel: "Machine Learning",
      title: "Segmentasi Nasabah & Deteksi Pola Transaksi Perbankan",
      description: "Proyek ini mengombinasikan Unsupervised Learning (K-Means) untuk menyegmentasikan $\pm2.500$ data transaksi perbankan dan Supervised Learning (Decision Tree & Random Forest) untuk melatih model klasifikasi berdasarkan segmen tersebut, dengan fokus utama menerjemahkan hasil pemodelan menjadi insight bisnis yang bernilai.",
      tech: ["Machine Learning", "Python", "supervised learning", "unsupervised learning", "K-Means", "Decision Tree", "Random Forest"],
      url: "projects/bmlp-clustering-klasifikasi/index.html"
    }
  ],
  timelines: [
    {
      title: "PENDIDIKAN",
      items: [
        {
          title: "Universitas Mercu Buana",
          date: "September 2023 - Sekarang",
          subtitle: "S1 Teknik Informatika",
          description: "Mahasiswa Teknik Informatika dengan fokus pada data, pengembangan web, software engineering, AI, dan sistem basis data.",
          badges: ["IPK 3.62/4.00", "Data", "Web", "AI","coding", "Mobile Development"],
          highlights: [
            {
              title: "DPM Fasilkom UMB",
              role: "Vice Chairman KPU Fasilkom & Komisi Pengawasan",
              period: "Okt 2025 - Sekarang",
              desc: "Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer — mengawasi dan mengevaluasi program kerja organisasi mahasiswa di lingkungan Fasilkom.",
              link: "pengalaman.html?item=dpm-fasilkom-umb"
            },
            {
              title: "Mercu Buana English Club (MBEC)",
              role: "Warehouse Staff & Technical Staff",
              period: "Mar 2025 - Sekarang",
              desc: "Terlibat dalam operasional organisasi dan pelaksanaan acara MBEC, mulai dari dukungan teknis acara, pengelolaan inventaris, hingga kerja lapangan.",
              link: "pengalaman.html?item=mercu-buana-english-club"
            },
            {
              title: "Magang (Internship)",
              role: "Junior Programmer & Technical Writer Intern — BPJS Ketenagakerjaan",
              period: "Apr - Sep 2026",
              desc: "Mengikuti program magang sebagai Junior Programmer dengan fokus pada pengembangan aplikasi, pemeliharaan fitur, debugging, dan dukungan teknis sistem internal.",
              link: "pengalaman.html?item=bpjs-ketenagakerjaan-internship"
            }
          ]
        },
        {
          title: "SMA YADIKA 2 JAKARTA",
          date: "Juli 2020 - Mei 2023",
          subtitle: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
          description: "Aktif sebagai Ketua OSIS dan pernah mewakili Jakarta Barat dalam lomba cerdas cermat sejarah tingkat DKI.",
          badges: ["Ketua OSIS", "MIPA", "Teamwork", "Communication"],
          photos: [
            {
              src: "images/pdi1.jpg",
              alt: "Lomba Cerdas Cermat Sejarah tingkat DKI Jakarta",
              caption: "Lomba Cerdas Cermat Sejarah tingkat DKI Jakarta"
            },
            {
              src: "images/pdi2.jpg",
              alt: "Lomba Cerdas Cermat Sejarah tingkat DKI Jakarta",
              caption: "My Team"
            },
            {
              src: "images/pdi3.png",
              alt: "Lomba Cerdas Cermat Sejarah tingkat DKI Jakarta",
              caption: "Berhasil Meraih Juara 2"
            }
          ]  
        },
        {
          title: "SMP 278 Jakarta",
          date: "2017 - 2020",
          subtitle: "Aktif di Ketua OSIS, Pramuka, dan Paskibra",
          description: "Mengembangkan pengalaman organisasi, kepemimpinan, kedisiplinan, dan kerja tim melalui kegiatan sekolah.",
          badges: ["OSIS", "Pramuka", "Paskibra"],
          photos: [
            {
              src: "images/smp1.png",
              alt: "Kegiatan OSIS SMP 278 Jakarta",
              caption: "Kegiatan OSIS SMP 278 Jakarta"
            },
            {
              src: "images/smp2.jpg",
              alt: "Kegiatan OSIS SMP 278 Jakarta",
              caption: "Sertifikat OSIS" 
            }
          ]
        },
        {
          title: "SDN TEGAL ALUR 01 PAGI",
          date: "2011 - 2017",
          subtitle: "Aktif mengikuti ekstrakurikuler Pramuka,Volleyball, dan Futsal",
          description: "Membangun dasar kedisiplinan, kerja sama, dan aktivitas sekolah melalui kegiatan Pramuka.",
          muted: true,
          badges: ["Pramuka", "Teamwork", "Futsal", "Volleyball"]
        }
      ]
    },
    {
      title: "PENGALAMAN",
      items: [
        {
          id: "bpjs-ketenagakerjaan-internship",
          title: "BPJS Ketenagakerjaan",
          url: "pengalaman.html?item=bpjs-ketenagakerjaan-internship",
          date: "April -  September 2026",
          subtitle: "Junior Programmer & Technical Writer Intern",
          description: "Mengikuti program internship sebagai Junior Programmer dengan fokus pada pengembangan aplikasi, pemeliharaan fitur, debugging, dan dukungan teknis sistem internal.",
          photos: [
            {
              src: "images/1.jpg",
              alt: "Dokumentasi internship BPJS Ketenagakerjaan hari pertama",
              caption: "Internship bersama teman di Deputi Arsitektur dan Pengembangan TI"
            },
            {
              src: "images/2.jpg",
              alt: "Dashboard Grafana Loki Monitoring Frauud Detection",
              caption: "Dashboard Grafana Loki Monitoring Frauud Detection"
            },
            {
              src: "images/3.jpg",
              alt: "Detection",
              caption: "Detection Fraud"
            },
            {
              src: "images/4.jpg",
              alt: "Dokumentasi kegiatan pengerjaan RPHUA",
              caption: "Dokumentasi kegiatan pengerjaan Administrasi."
            },
            {
              src: "images/5.jpg",
              alt: "Dokumentasi kegiatan Junior Programmer Intern BPJS Ketenagakerjaan",
              caption: "Junior Programmer Intern di BPJS KETENAGAKERJAAN"
            }
          ],
          badges: ["Internship", "Junior Programmer", "Application Development", "Debugging"]
        },
        {
          id: "pt-kumada-logistics",
          title: "PT KUMADA",
          url: "pengalaman.html?item=pt-kumada-logistics",
          date: "Januari 2025 - April 2025",
          subtitle: "Logistics Operations Specialist (Sorting & Processing)",
          description: "Mendukung operasional logistik pada proses sorting dan processing, memastikan alur barang tertata, akurat, dan siap diproses sesuai kebutuhan operasional.",
          photos: [
            {
              src: "images/kmd1.jpg",
              alt: "Dokumentasi kegiatan operasional logistik PT KUMADA",
              caption: "Dokumentasi kegiatan operasional logistik PT KUMADA"
            },
            {
              src: "images/kmd2.jpg",
              alt: "Dokumentasi kegiatan operasional logistik PT KUMADA",
              caption: "Dokumentasi Gudang PT KUMADA"
            },
            {
              src: "images/kmd3.jpg",
              alt: "Dokumentasi kegiatan operasional logistik PT KUMADA",
              caption: "Dokumentasi resi order PT KUMADA"
            }
          ],
          badges: ["Logistics", "Sorting", "Processing", "Operations"]
        },
        {
  id: "dpm-fasilkom-umb",
  title: "DPM Fasilkom UMB",
  url: "https://www.instagram.com/p/DUx3DH-GI3u/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  employmentType: "Kontrak",
  totalDuration: "1 thn",
  location: "Di lokasi",
  positions: [
    {
      id: "dpm-vice-chairman-kpu-fasilkom",
      title: "Vice Chairman KPU Fasilkom",
      date: "Mei 2026 - Saat ini",
      duration: "5 bln",
      location: "Jakarta, Indonesia",
      description: "",
      badges: [],
      photos: []
    },
    {
      id: "dpm-komisi-pengawasan",
      title: "Komisi Pengawasan",
      date: "Nov 2025 - Saat ini",
      duration: "11 bln",
      location: "Jakarta Barat, Jakarta, Indonesia",
      description: "Melakukan pengawasan, evaluasi, dan supervisi program kerja organisasi mahasiswa di lingkungan Fakultas Ilmu Komputer.",
      // LinkedIn nampilin "Organizational Oversight, Program Evaluation dan +4 skills" —
      // baru 2 yang diketahui isinya, tambahkan 4 lagi kalau sudah tahu.
      badges: ["Organizational Oversight", "Program Evaluation"],
      // Di LinkedIn ada 7 foto (5 tampil + "+2" overlay). Baru 5 slot disiapkan,
      // tambahkan dpm-komisi-pengawasan-6.jpg dan -7.jpg kalau mau melengkapi sisanya.
      photos: [
        { src: "images/a.jpg", alt: "Dokumentasi kegiatan Komisi Pengawasan DPM Fasilkom UMB", caption: "Mengawaasi Proker Himsisfo Mengajar di Sekolah" },
        { src: "images/b.png", alt: "Kegiatan pengawasan program kerja Fasilkom", caption: "Anggota Komisi Pengawasan" },
        { src: "images/c.jpg", alt: "Kegiatan pengawasan program kerja Fasilkom", caption: "Mengawasi Proker Himsisfo di Posyandu" },
        { src: "images/d.jpg", alt: "Kegiatan pengawasan program kerja Fasilkom", caption: "Mengawasi Proker Himti  di lingkugan sekolah dasar" },
        { src: "images/e.jpg", alt: "Kegiatan pengawasan program kerja Fasilkom", caption: "Mengawasi Proker Himti di lingkungan masyarakat" },
        { src: "images/h.png", alt: "Kegiatan pengawasan program kerja Fasilkom", caption: "saya dan Teman" }
      ]
    },
    {
      id: "dpm-staff-sarpras-sidang-umum",
      title: "Staff Sarpras Sidang Umum Fasilkom",
      date: "Okt 2025 - Nov 2025",
      duration: "2 bln",
      location: "Jakarta, Indonesia",
      description: "",
      badges: [],
      photos: [
        { src: "images/f.jpg", alt: "Dokumentasi Staff Sarpras Sidang Umum Fasilkom", caption: "" },
        { src: "images/g.jpg", alt: "Dokumentasi Staff Sarpras Sidang Umum Fasilkom", caption: "" }
      ]
    }
  ]
},
        {
          id: "webinar-digibuild-2025",
          title: "Webinar DigiBuild 2025",
          url: "https://www.instagram.com/p/DRzNwQXEpqS/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
          date: "Desember 2025",
          subtitle: "Moderator dan Divisi Humas",
          description: "Memandu webinar Digital Builder & AI Era, mengelola publikasi, dan menjalin kerja sama dengan beberapa media partner.",
          photos: [
            {
              src: "images/Dokum.jpeg",
              alt: "Dokumentasi Webinar DigiBuild 2025",
              caption: "Dokumentasi Webinar DigiBuild 2025"
            },
            {
              src: "images/Moderator.png",
              alt: "Moderator Webinar DigiBuild 2025",
              caption: "Sertifikat Moderator"
            },
            {
              src: "images/panitia webinar.png",
              alt: "Publikasi Webinar DigiBuild 2025",
              caption: "Sertifikat Panitia Humas Webinar"
            },
            {
              src: "images/md1.png",
              alt: "Publikasi Webinar DigiBuild 2025",
              caption: "Moderator Webinar DigiBuild"
            },
            {
              src: "images/md2.png",
              alt: "Publikasi Webinar DigiBuild 2025",
              caption: "Poster DigiBuild"
            }
          ],
          badges: ["Moderator", "Public Speaking", "Humas"]
        },
        {
          id: "mercu-buana-english-club",
          title: "Mercu Buana English Club",
          url: "pengalaman.html?item=mercu-buana-english-club",
          date: "Maret 2025 - Saat ini",
          subtitle: "Warehouse Staff & Technical Staff",
          description: "Berpartisipasi dalam operasional organisasi dan pelaksanaan kegiatan MBEC, termasuk dukungan teknis acara, pengelolaan inventaris, dan kerja lapangan.",
          employmentType: "Kontrak",
          totalDuration: "1 thn 7 bln",
          location: "Di lokasi",
          badges: ["Technical Support", "Event Operations", "Inventory Management"],
          // Organisasi ini punya beberapa jabatan/posisi berbeda dari waktu ke waktu
          // (gaya LinkedIn: 1 organisasi, beberapa sub-pengalaman di dalamnya).
          // Urutan array = urutan tampil, dari yang paling baru ke yang paling lama.
          positions: [
            {
              id: "mbec-warehouse-staff",
              title: "Warehouse Staff",
              date: "Agu 2025 - Saat ini",
              duration: "1 thn 2 bln",
              location: "Indonesia",
              description: "Official Account of Mercu Buana English Club on Instagram: \"Meet our Warehouse Division! Our Warehouse team is responsible for managing our workspace, from the secretary room to everything related to MBEC's inventory. But that's not all. They also help create the perfect atmosphere for the MBEC Podcast, now available for you to enjoy on Spotify! Tune in, feel the vibes, and let the Warehouse take you there.\"",
              badges: ["Inventory Management", "Human Resource Support"],
              photos: [
                {
                  src: "images/wh1.png",
                  alt: "Postingan Instagram Warehouse Division Mercu Buana English Club",
                  caption: "Postingan Instagram Warehouse Division MBEC"
                }
              ]
            },
            {
              id: "mbec-staff-lapangan-english-event-2026",
              title: "Staff Lapangan ( English Event 2026 )",
              date: "Mar 2026 - Jun 2026",
              duration: "4 bln",
              location: "Jakarta Raya, Indonesia",
              description: "",
              badges: [],
              // Di LinkedIn ada 8 foto (6 tampil + 2 tersembunyi). Baru 6 slot yang disiapkan,
              // tambahkan mbec-english-event-2026-7.jpg dan -8.jpg jika mau melengkapi sisanya.
              photos: [
                { src: "images/l1.png", alt: "Staff Lapangan English Event 2026", caption: "Team Lapangan" },
                { src: "images/l3.jpg", alt: "Staff Lapangan English Event 2026", caption: "Hadiah Dan Pelakat" },
                { src: "images/l4.jpg", alt: "Staff Lapangan English Event 2026", caption: "Seminar English Event" },
                { src: "images/l5.png", alt: "Staff Lapangan English Event 2026", caption: "Newscast Competition" },
                { src: "images/l6.png", alt: "Staff Lapangan English Event 2026", caption: "Story Telling Competition" }
              ]
            },
            {
              id: "mbec-leadership-training-2026",
              title: "Warehouse and Technician Staff Leadership Training Program 2026",
              date: "Nov 2025 - Jan 2026",
              duration: "3 bln",
              location: "Jakarta Barat, Jakarta Raya, Indonesia",
              description: "",
              badges: [],
              photos: [
                { src: "images/ee20261.png", alt: "Leadership Training Program 2026", caption: "Sertifikat Panitia" },
                { src: "images/ee20262.png", alt: "Leadership Training Program 2026", caption: "Team Warehouse" },
                { src: "images/ee20263.png", alt: "Leadership Training Program 2026", caption: "Banner Acara" },
                { src: "images/ee20264.png", alt: "Leadership Training Program 2026", caption: "Sebagai Teknisi" },
                { src: "images/ee20265.png", alt: "Leadership Training Program 2026", caption: "Pembagian Hadiah Peserta" }
              ]
            },
            {
              id: "mbec-technician-oprec-2025",
              title: "Technician Staff (OPREC & OPEN HOUSE 2025)",
              date: "Sep 2025 - Nov 2025",
              duration: "3 bln",
              location: "Kembangan, Jakarta Raya, Indonesia",
              description: "",
              badges: [],
              photos: [
                { src: "images/teknisi.png", alt: "Technician Member OPREC & OPEN HOUSE 2025", caption: "Technician Member" }
              ]
            },
            {
              id: "mbec-technical-staff-english-event-2025",
              title: "Technical Staff (English Event 2025)",
              date: "Mar 2025 - Jul 2025",
              duration: "5 bln",
              location: "Indonesia",
              description: "Mengatur Zoom Meeting VIP, sound system, slide presentasi, live pembicara, dan timer pada kegiatan lomba.",
              badges: ["Technical Support", "Event", "Zoom"],
              // Di LinkedIn tampak ada foto sertifikat juga di posisi ini, tambahkan
              // mbec-technical-staff-english-event-2025-3.jpg dst kalau ada lebih dari 2.
              photos: [
                { src: "images/ee20251.png", alt: "Technical Staff English Event 2025", caption: "ID Card Panitia" },
                { src: "images/ee20252.png", alt: "Sertifikat Technical Staff English Event 2025", caption: "Sertifikat" }
              ]
            }
          ]
        },
        {
          id: "komite-kpps",
          title: "Komite KPPS",
          url: "pengalaman.html?item=komite-kpps",
          date: "2024",
          subtitle: "Anggota KPPS Jakarta Barat",
          description: "Membantu registrasi, verifikasi, kelancaran pemungutan suara, dan pengelolaan berkas pada aplikasi Sirekap.",
          photos: [
            {
              src: "images/kt.jpg",
              alt: "Dokumentasi Komite KPPS",
              caption: "Dokumentasi KPPS"
            }
          ],
          muted: true,
          badges: ["Data Entry", "Verification", "Sirekap"]
        },
        {
          id: "karang-taruna-rt-005",
          title: "Karang Taruna RT 005",
          url: "pengalaman.html?item=karang-taruna-rt-005",
          date: "2020 - Sekarang",
          subtitle: "Ketua Panitia dan Sekretaris",
          description: "Mengorganisir kegiatan tahunan seperti Hari Kemerdekaan RI, malam puncak, tasyakuran, dan galang dana sosial.",
          photos: [
            {
              src: "images/171.jpg",
              alt: "Dokumentasi Karang Taruna RT 005",
              caption: "Dokumentasi 17 AN Lomba Makan Krupuk"
            },
            {
              src: "images/172.jpg",
              alt: "Kegiatan Hari Kemerdekaan RT 005",
              caption: "Dokumentasi Briefing"
            },
            {
              src: "images/173.jpg",
              alt: "Kegiatan sosial Karang Taruna RT 005",
              caption: "Dokumentasi Lomba Klereng"
            },
            {
              src: "images/174.jpg",
              alt: "Kegiatan sosial Karang Taruna RT 005",
              caption: "Dokumentasi Lomba Balap Karung"
            }
          ],
          muted: true,
          badges: ["Leadership", "Administration", "Community"]
        }
      ]
    }
  ],
  // Satu sumber data kontak dipakai bareng oleh Home (#contact-sec)
  // dan halaman Contact & Guestbook, dirender lewat renderContact() di script.js.
  contact: [
    {
      type: "phone",
      label: "Phone",
      value: "+62 877-8713-9143 / +62 882-9124-7968",
      href: "tel:+6287787139143",
      copyValue: "+6287787139143"
    },
    {
      type: "whatsapp",
      label: "WhatsApp",
      value: "Chat via WhatsApp",
      href: "https://wa.me/6287787139143",
      external: true
    },
    {
      type: "email",
      label: "Email",
      value: "f2482056@gmail.com",
      href: "mailto:f2482056@gmail.com",
      copyValue: "f2482056@gmail.com"
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "farhanganteng09",
      href: "https://www.linkedin.com/in/farhanganteng09/",
      external: true
    }
  ],
  messages: [
    {
      name: "Sasuke K.",
      message: "Portfolio yang keren. Web dan database project-mu sudah Chunin level."
    },
    {
      name: "Hinata N.",
      message: "Suka banget sama project AI, IoT CCTV, dan portofolio web-nya. Semoga kuliahnya lancar."
    }
  ]
};
