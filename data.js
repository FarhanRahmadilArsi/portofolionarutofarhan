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
      tech: ["HTML", "CSS", "SQL", "Bootstrap", "PHP", "PhpMyAdmin"]
    },
    {
      category: "frontend",
      categoryLabel: "FRONTEND",
      title: "Website Portofolio Pribadi",
      description: "Website responsif untuk menampilkan profil, skill, pengalaman, project, dan guestbook interaktif.",
      tech: ["Next.Js", "Tailwind.Css", "Supabase", "Shadcn UI", "Typescript"]
    },
    {
      category: "auto",
      categoryLabel: "AUTOMATION",
      title: "JOB LINK SIGN",
      description: "Sebuah Mockup untuk HRD Perusahaan dan pelamar atau calon pekerja ruang lingkup penyandang disabilitas tuna wicara.",
      tech: ["UI/UX", "Prototype", "Figma"]
    },
    {
      category: "infra",
      categoryLabel: "INFRASTRUCTURE",
      title: "BURGER BUANDEL MOCK UP",
      description: "Sebuah mock up untuk customer yang ingin memesan burger dengan berbagai pilihan varian burger.",
      tech: ["Figma", "UI/UX", "Prototype"],
      url: "https://www.figma.com/design/NeYMZ6etGAIiUHEd3mN5P4/PROJEK-PROTOTYPE-FARHAN?node-id=1-2875&t=L9VoR2IuiTiDxqG1-0"
},
    {
      category: "database",
      categoryLabel: "DATABASE",
      title: "Website Registrasi Karyawan",
      description: "Aplikasi web dengan database relasional untuk membantu digitalisasi proses registrasi HR.",
      tech: ["Typescript", "Next.JS", "Tailwind.Css", "Prisma ORM", "PostgreSQL", "Shadcn UI"]
    },
    {
      category: "frontend",
      categoryLabel: "FRONTEND",
      title: "Aplikasi Penjualan Sapi",
      description: "Aplikasi desktop CRUD cross-platform untuk pengelolaan data penjualan dan stok ternak via beeware .",
      tech: ["Python", "BeeWare", "CRUD"]
    },
    {
      category: "auto",
      categoryLabel: "AUTOMATION",
      title: "Colored Timer",
      description: "Aplikasi timer untuk membantu peserta lomba melihat sisa waktu dan meringankan tugas timekeeper.",
      tech: ["BeeWare", "Python", "Timer"]
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
          badges: ["IPK 3.62/4.00", "Data", "Web", "AI","coding", "Mobile Development"]
        },
        {
          title: "SMA YADIKA 2 JAKARTA",
          date: "Juli 2020 - Mei 2023",
          subtitle: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
          description: "Aktif sebagai Ketua OSIS dan pernah mewakili Jakarta Barat dalam lomba cerdas cermat sejarah tingkat DKI.",
          badges: ["Ketua OSIS", "MIPA", "Teamwork", "Communication"]
        },
        {
          title: "SMP 278 Jakarta",
          date: "2017 - 2020",
          subtitle: "Aktif di Ketua OSIS, Pramuka, dan Paskibra",
          description: "Mengembangkan pengalaman organisasi, kepemimpinan, kedisiplinan, dan kerja tim melalui kegiatan sekolah.",
          badges: ["OSIS", "Pramuka", "Paskibra"]
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
              src: "images/day1.jpeg",
              alt: "Dokumentasi internship BPJS Ketenagakerjaan hari pertama",
              caption: "Internship BPJS Ketenagakerjaan"
            },
            {
              src: "images/day2.jpeg",
              alt: "Dokumentasi kegiatan Junior Programmer Intern BPJS Ketenagakerjaan",
              caption: "Junior Programmer Intern"
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
          photos: [],
          badges: ["Logistics", "Sorting", "Processing", "Operations"]
        },
        {
          id: "dpm-fasilkom-umb",
          title: "Dewan Perwakilan Mahasiswa Fasilkom UMB",
          url: "https://www.instagram.com/p/DUx3DH-GI3u/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
          date: "Septmber 2025 - Sekarang",
          subtitle: "Anggota Komisi Pengawasan",
          description: "Melakukan pengawasan, evaluasi, dan supervisi program kerja organisasi mahasiswa di lingkungan Fakultas Ilmu Komputer.",
          photos: [
            {
              src: "images/dpm-fasilkom-umb-1.jpeg",
              alt: "Dokumentasi Dewan Perwakilan Mahasiswa Fasilkom UMB",
              caption: "Dokumentasi DPM Fasilkom UMB"
            },
            {
              src: "images/dpm-fasilkom-umb-2.jpeg",
              alt: "Kegiatan pengawasan DPM Fasilkom UMB",
              caption: "Kegiatan pengawasan dan evaluasi"
            },
            {
              src: "images/dpm-fasilkom-umb-3.jpeg",
              alt: "Kegiatan organisasi DPM Fasilkom UMB",
              caption: "Kegiatan organisasi mahasiswa"
            }
          ],
          badges: ["Leadership", "Evaluation", "Organization"]
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
              src: "images/moderator.jpeg",
              alt: "Moderator Webinar DigiBuild 2025",
              caption: "Moderator dan sesi webinar"
            },
            {
              src: "images/sertif.jpeg",
              alt: "Publikasi Webinar DigiBuild 2025",
              caption: "Publikasi dan koordinasi event"
            }
          ],
          badges: ["Moderator", "Public Speaking", "Humas"]
        },
        {
          id: "english-event-mbec",
          title: "English Event MBEC",
          url: "https://www.instagram.com/p/DRZzvwij8-x/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
          date: "April - Juli 2025",
          subtitle: "Divisi Teknisi",
          description: "Mengatur Zoom Meeting VIP, sound system, slide presentasi, live pembicara, dan timer pada kegiatan lomba.",
          photos: [
            {
              src: "images/english-event-mbec-1.jpg",
              alt: "Dokumentasi English Event MBEC",
              caption: "Dokumentasi English Event MBEC"
            },
            {
              src: "images/english-event-mbec-2.jpg",
              alt: "Teknisi English Event MBEC",
              caption: "Teknis Zoom dan presentasi"
            },
            {
              src: "images/english-event-mbec-3.jpg",
              alt: "Kegiatan lomba English Event MBEC",
              caption: "Support kegiatan lomba"
            }
          ],
          badges: ["Technical Support", "Event", "Zoom"]
        },
        {
          id: "mercu-buana-english-club",
          title: "Mercu Buana English Club",
          url: "pengalaman.html?item=mercu-buana-english-club",
          date: "Oktober 2024 - Sekarang",
          subtitle: "Divisi Warehouse",
          description: "Bertanggung jawab dalam pengelolaan inventaris dan perlengkapan organisasi.",
          photos: [
            {
              src: "images/mercu-buana-english-club-1.jpg",
              alt: "Dokumentasi Mercu Buana English Club",
              caption: "Dokumentasi MBEC"
            },
            {
              src: "images/mercu-buana-english-club-2.jpg",
              alt: "Kegiatan warehouse Mercu Buana English Club",
              caption: "Pengelolaan inventaris"
            },
            {
              src: "images/mercu-buana-english-club-3.jpg",
              alt: "Kegiatan organisasi Mercu Buana English Club",
              caption: "Kegiatan organisasi MBEC"
            }
          ],
          badges: ["Inventory", "Organization"]
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
              src: "images/komite-kpps-1.jpg",
              alt: "Dokumentasi Komite KPPS",
              caption: "Dokumentasi KPPS"
            },
            {
              src: "images/komite-kpps-2.jpg",
              alt: "Kegiatan registrasi KPPS",
              caption: "Registrasi dan verifikasi data"
            },
            {
              src: "images/komite-kpps-3.jpg",
              alt: "Kegiatan pemungutan suara KPPS",
              caption: "Kelancaran pemungutan suara"
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
              src: "images/karang-taruna-rt-005-1.jpg",
              alt: "Dokumentasi Karang Taruna RT 005",
              caption: "Dokumentasi Karang Taruna RT 005"
            },
            {
              src: "images/karang-taruna-rt-005-2.jpg",
              alt: "Kegiatan Hari Kemerdekaan RT 005",
              caption: "Kegiatan Hari Kemerdekaan RI"
            },
            {
              src: "images/karang-taruna-rt-005-3.jpg",
              alt: "Kegiatan sosial Karang Taruna RT 005",
              caption: "Kegiatan sosial dan administrasi"
            }
          ],
          muted: true,
          badges: ["Leadership", "Administration", "Community"]
        }
      ]
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
